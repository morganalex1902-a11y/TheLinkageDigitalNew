import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SignIn, useAuth, useClerk } from "@clerk/react";
import { ArrowLeft, ExternalLink, LogOut, Plus, Search, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BASE_PORTFOLIO_PROJECTS, getPortfolioProjectId, type PortfolioProject, type PortfolioType } from "@/lib/portfolio";
import { createSupabaseClient } from "@/lib/supabase";

type Entry = PortfolioProject & {
  id: string;
  hide_from_portfolio: boolean;
};

type FormValues = Omit<PortfolioProject, "hideFromPortfolio" | "video"> & {
  video: string;
  hide_from_portfolio: boolean;
};

const categories: { label: string; value: PortfolioType }[] = [
  { label: "Web Design & Development", value: "websites" },
  { label: "Branding & Logo Design", value: "branding" },
  { label: "Digital Marketing", value: "digital-marketing" },
  { label: "SEO Optimization", value: "seo-optimization" },
  { label: "Video Editing & Motion", value: "video-editing-motion" },
];

const emptyForm: FormValues = {
  title: "",
  type: "websites",
  niche: "",
  image: "",
  video: "",
  description: "",
  website: "",
  hide_from_portfolio: false,
};

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function isWebsiteLink(value: string) {
  if (value.startsWith("/") && !value.startsWith("//") && !value.includes("\\")) return true;
  return isHttpUrl(value);
}

export default function PortfolioAdmin() {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { signOut } = useClerk();
  const supabase = useMemo(() => createSupabaseClient(() => getToken()), [getToken]);
  const [access, setAccess] = useState<"checking" | "allowed" | "denied" | "configuration-error">("checking");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showHidden, setShowHidden] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormValues>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<"image" | "video" | null>(null);

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setAccess("denied");
      setEntries([]);
      return;
    }

    let cancelled = false;
    setAccess("checking");
    setLoading(true);

    const loadEntries = async () => {
      const { data: isAdmin, error: accessError } = await supabase.rpc("is_portfolio_admin");
      if (cancelled) return;
      if (accessError) {
        setAccess("configuration-error");
        setLoading(false);
        return;
      }
      if (!isAdmin) {
        setAccess("denied");
        setLoading(false);
        return;
      }

      setAccess("allowed");
      const { data: config, error: configError } = await supabase
        .from("portfolio_config")
        .select("initialized")
        .eq("id", "main")
        .maybeSingle();
      if (configError) {
        setLoading(false);
        toast.error("Could not load portfolio settings.");
        return;
      }

      if (!config?.initialized) {
        const initialEntries = BASE_PORTFOLIO_PROJECTS
          .map((project) => ({
            id: getPortfolioProjectId(project.title),
            title: project.title,
            type: project.type,
            niche: project.niche,
            image: project.image,
            video: project.video ?? null,
            description: project.description,
            website: project.website,
            hide_from_portfolio: project.hideFromPortfolio ?? false,
          }));
        const { error: seedError } = await supabase
          .from("portfolio_entries")
          .upsert(initialEntries, { onConflict: "id" });
        if (seedError) {
          if (!cancelled) {
            setLoading(false);
            toast.error("Could not initialize the portfolio data.");
          }
          return;
        }
        const { error: initializeError } = await supabase
          .from("portfolio_config")
          .upsert({ id: "main", initialized: true });
        if (initializeError) {
          if (!cancelled) {
            setLoading(false);
            toast.error("Could not finish initializing the portfolio.");
          }
          return;
        }
      }

      const { data, error } = await supabase
        .from("portfolio_entries")
        .select("id, title, type, niche, image, video, description, website, hide_from_portfolio")
        .order("title", { ascending: true });
      if (cancelled) return;
      if (error) {
        toast.error("Could not load portfolio entries.");
      } else {
        setEntries(data as Entry[]);
      }
      setLoading(false);
    };

    void loadEntries();
    return () => {
      cancelled = true;
    };
  }, [getToken, isLoaded, isSignedIn, supabase]);

  const visibleEntries = useMemo(() => entries.filter((entry) => {
    const matchesSearch = `${entry.title} ${entry.website} ${entry.niche}`.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || entry.type === category;
    return matchesSearch && matchesCategory && (showHidden || !entry.hide_from_portfolio);
  }), [category, entries, search, showHidden]);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setFormOpen(true);
  };

  const openEdit = (entry: Entry) => {
    setEditingId(entry.id);
    setForm({
      title: entry.title,
      type: entry.type,
      niche: entry.niche,
      image: entry.image,
      video: entry.video ?? "",
      description: entry.description,
      website: entry.website,
      hide_from_portfolio: entry.hide_from_portfolio,
    });
    setFormOpen(true);
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>, resourceType: "image" | "video") => {
    const input = event.currentTarget;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;

    const maxSize = resourceType === "image" ? 20 * 1024 * 1024 : 100 * 1024 * 1024;
    if (!file.type.startsWith(`${resourceType}/`) || file.size > maxSize) {
      toast.error(resourceType === "image" ? "Choose an image up to 20 MB." : "Choose a video up to 100 MB.");
      return;
    }

    setUploading(resourceType);
    try {
      const token = await getToken();
      if (!token) throw new Error("Sign in again before uploading media.");
      const signatureResponse = await fetch("/api/cloudinary/signature", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ resourceType }),
      });
      const signatureData = await signatureResponse.json();
      if (!signatureResponse.ok) throw new Error(signatureData.error ?? "Could not authorize the upload.");

      const uploadData = new FormData();
      uploadData.append("file", file);
      uploadData.append("api_key", signatureData.apiKey);
      uploadData.append("timestamp", String(signatureData.timestamp));
      uploadData.append("folder", signatureData.folder);
      uploadData.append("signature", signatureData.signature);
      const response = await fetch(`https://api.cloudinary.com/v1_1/${signatureData.cloudName}/${resourceType}/upload`, {
        method: "POST",
        body: uploadData,
      });
      const result = await response.json();
      if (!response.ok || !result.secure_url) throw new Error(result.error?.message ?? "Cloudinary upload failed.");
      setForm((current) => ({ ...current, [resourceType]: result.secure_url }));
      toast.success(resourceType === "image" ? "Image uploaded." : "Video uploaded.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Media upload failed.");
    } finally {
      setUploading(null);
    }
  };

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = form.title.trim();
    const website = form.website.trim();
    const image = form.image.trim();
    const video = form.video.trim();
    if (!title || !form.niche.trim() || !form.description.trim()) {
      toast.error("Complete all required fields.");
      return;
    }
    if (!isWebsiteLink(website) || !isHttpUrl(image) || (video && !isHttpUrl(video))) {
      toast.error("Enter a valid website link and http or https media URLs.");
      return;
    }

    const id = editingId ?? getPortfolioProjectId(title);
    if (!id) {
      toast.error("Add a project title before saving.");
      return;
    }
    const payload = {
      id,
      title,
      type: form.type,
      niche: form.niche.trim(),
      image,
      video: video || null,
      description: form.description.trim(),
      website,
      hide_from_portfolio: form.hide_from_portfolio,
    };

    setSaving(true);
    const request = editingId
      ? supabase.from("portfolio_entries").update(payload).eq("id", editingId)
      : supabase.from("portfolio_entries").insert(payload);
    const { error } = await request;
    setSaving(false);
    if (error) {
      toast.error(error.code === "23505" ? "A project with that title already exists." : error.message);
      return;
    }
    setEntries((current) => editingId
      ? current.map((entry) => entry.id === editingId ? payload as Entry : entry)
      : [...current, payload as Entry].sort((a, b) => a.title.localeCompare(b.title)));
    setFormOpen(false);
    toast.success(editingId ? "Portfolio item updated." : "Portfolio item added.");
  };

  const handleDelete = async (entry: Entry) => {
    if (!window.confirm(`Delete “${entry.title}” from the portfolio?`)) return;
    const { error } = await supabase.from("portfolio_entries").delete().eq("id", entry.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    setEntries((current) => current.filter((item) => item.id !== entry.id));
    toast.success("Portfolio item deleted.");
  };

  if (!isLoaded || (isSignedIn && access === "checking")) {
    return <div className="grid min-h-screen place-items-center bg-[#f8f6f9] font-kanit text-[#695f70]">Loading portfolio admin…</div>;
  }

  if (!isSignedIn || access === "denied") {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f8f6f9] px-5 py-12 font-kanit">
        <section className="w-full max-w-md rounded-3xl border border-[#ece6ef] bg-white p-7 shadow-xl shadow-[#351342]/5 sm:p-10">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#8B0AB4]"><ArrowLeft size={15} /> Back to website</Link>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B0AB4]">The Linkage Digital</p>
          <h1 className="font-teko text-5xl font-bold uppercase leading-none text-[#121212]">Portfolio admin</h1>
          {!isSignedIn && <>
            <p className="mt-4 text-sm leading-relaxed text-[#716879]">Sign in with Clerk. Only the authorized admin account can manage portfolio entries.</p>
            <div className="mt-7 flex justify-center">
              <SignIn
                routing="hash"
                appearance={{
                  variables: { colorPrimary: "#8B0AB4" },
                  elements: { card: "border-0 shadow-none", rootBox: "w-full", headerTitle: "font-teko uppercase" },
                }}
              />
            </div>
          </>}
          {isSignedIn && access === "denied" && <div className="mt-6 rounded-2xl bg-[#fff4f3] p-5 text-sm text-[#9a3535]">
            <p>This account does not have portfolio admin access.</p>
            <button type="button" onClick={() => void signOut()} className="mt-4 font-semibold underline">Sign out</button>
          </div>}
          {isSignedIn && access === "configuration-error" && <div className="mt-6 rounded-2xl bg-[#fff4f3] p-5 text-sm leading-relaxed text-[#9a3535]">
            <p>Supabase could not validate this Clerk session. Add this Clerk instance under Supabase Authentication → Third-Party Auth, then confirm Clerk tokens include <code>role: authenticated</code> and an <code>email</code> claim matching the signed-in account.</p>
            <button type="button" onClick={() => void signOut()} className="mt-4 font-semibold underline">Sign out</button>
          </div>}
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f6f9] font-kanit text-[#121212]">
      <header className="border-b border-[#eae4ed] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B0AB4]">The Linkage Digital</p>
            <h1 className="font-teko text-3xl font-bold uppercase leading-none sm:text-4xl">Portfolio Admin</h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-[#e7ddea] px-3 py-2 text-xs font-medium text-[#514957] transition hover:border-[#8B0AB4] hover:text-[#8B0AB4] sm:px-4"><ExternalLink size={14} /> <span className="hidden sm:inline">View public portfolio</span><span className="sm:hidden">Preview</span></Link>
            <button onClick={() => void signOut()} aria-label="Sign out" className="rounded-full border border-[#e7ddea] p-2.5 text-[#514957] transition hover:border-[#8B0AB4] hover:text-[#8B0AB4]"><LogOut size={17} /></button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10">
        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm text-[#77707c]">Manage projects shown on the public portfolio page.</p>
            <p className="mt-2 text-xs text-[#978d9c]">{entries.length} items · Changes publish immediately</p>
          </div>
          <button onClick={openCreate} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8B0AB4] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8B0AB4]/15 transition hover:bg-[#751096]"><Plus size={17} /> Add portfolio item</button>
        </div>

        <section className="overflow-hidden rounded-2xl border border-[#eae4ed] bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-[#eee8f0] p-4 sm:flex-row sm:items-center sm:p-5">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a096a5]" size={17} />
              <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects" className="h-11 rounded-xl border-[#ece6ef] pl-10" />
            </div>
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="h-11 rounded-xl border border-[#ece6ef] bg-white px-3 text-sm outline-none focus:border-[#8B0AB4]">
              <option value="all">All categories</option>
              {categories.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
            <label className="inline-flex items-center gap-2 whitespace-nowrap px-1 text-sm text-[#625969]"><input type="checkbox" checked={showHidden} onChange={(event) => setShowHidden(event.target.checked)} className="accent-[#8B0AB4]" /> Include hidden</label>
          </div>

          {loading ? <div className="p-10 text-center text-sm text-[#766b7b]">Loading projects…</div> : visibleEntries.length === 0 ? <div className="p-12 text-center text-sm text-[#766b7b]">No portfolio items match your filters.</div> : (
            <div className="divide-y divide-[#f0ebf2]">
              {visibleEntries.map((entry) => (
                <article key={entry.id} className="grid gap-4 p-4 sm:grid-cols-[88px_minmax(0,1fr)_auto] sm:items-center sm:gap-5 sm:p-5">
                  <img src={entry.image} alt="" className="h-20 w-24 rounded-xl bg-[#f2edf4] object-cover" loading="lazy" />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-semibold">{entry.title}</h2>
                      {entry.hide_from_portfolio && <span className="rounded-full bg-[#f4edf6] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[#81698a]">Hidden</span>}
                    </div>
                    <p className="mt-1 text-xs text-[#8a808f]">{categories.find((item) => item.value === entry.type)?.label} · {entry.niche}</p>
                    <a href={entry.website} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex max-w-full items-center gap-1 truncate text-xs text-[#8B0AB4] hover:underline"><span className="truncate">{entry.website}</span><ExternalLink className="shrink-0" size={12} /></a>
                  </div>
                  <div className="flex gap-2 sm:justify-end">
                    <button onClick={() => openEdit(entry)} className="rounded-full border border-[#e7ddea] px-4 py-2 text-xs font-medium transition hover:border-[#8B0AB4] hover:text-[#8B0AB4]">Edit</button>
                    <button onClick={() => void handleDelete(entry)} aria-label={`Delete ${entry.title}`} className="rounded-full border border-[#f0dede] p-2 text-[#a74a4a] transition hover:bg-[#fff4f3]"><Trash2 size={16} /></button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl border-[#eae4ed] bg-white p-0">
          <form onSubmit={handleSave}>
            <DialogHeader className="border-b border-[#eee8f0] px-6 py-5 pr-14 text-left">
              <DialogTitle className="font-teko text-3xl font-bold uppercase">{editingId ? "Edit portfolio item" : "Add portfolio item"}</DialogTitle>
              <DialogDescription>Update the project details shown on the public portfolio.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 px-6 py-5 sm:grid-cols-2">
              <label className="space-y-1.5 text-xs font-medium text-[#514957]">Project title<Input required maxLength={120} value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="Project name" /></label>
              <label className="space-y-1.5 text-xs font-medium text-[#514957]">Category<select value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value as PortfolioType })} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B0AB4]">{categories.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
              <label className="space-y-1.5 text-xs font-medium text-[#514957]">Industry / niche<Input required maxLength={80} value={form.niche} onChange={(event) => setForm({ ...form, niche: event.target.value })} placeholder="e.g. Landscaping" /></label>
              <label className="space-y-1.5 text-xs font-medium text-[#514957]">Website URL<Input required value={form.website} onChange={(event) => setForm({ ...form, website: event.target.value })} placeholder="https://example.com" /></label>
              <div className="space-y-2 text-xs font-medium text-[#514957] sm:col-span-2">
                <label className="block">Project image</label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Input required value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} placeholder="Image URL" />
                  <label className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-[#e7ddea] px-4 text-xs hover:border-[#8B0AB4]">
                    <Upload size={15} /> {uploading === "image" ? "Uploading…" : "Upload image"}
                    <input className="sr-only" type="file" accept="image/*" disabled={uploading !== null} onChange={(event) => void handleUpload(event, "image")} />
                  </label>
                </div>
              </div>
              <div className="space-y-2 text-xs font-medium text-[#514957] sm:col-span-2">
                <label className="block">Project video (optional)</label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Input value={form.video} onChange={(event) => setForm({ ...form, video: event.target.value })} placeholder="Video URL" />
                  <label className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-[#e7ddea] px-4 text-xs hover:border-[#8B0AB4]">
                    <Upload size={15} /> {uploading === "video" ? "Uploading…" : "Upload video"}
                    <input className="sr-only" type="file" accept="video/*" disabled={uploading !== null} onChange={(event) => void handleUpload(event, "video")} />
                  </label>
                </div>
              </div>
              <label className="space-y-1.5 text-xs font-medium text-[#514957] sm:col-span-2">Description<Textarea required maxLength={500} rows={3} value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} placeholder="Briefly describe the project" /></label>
              <label className="inline-flex items-center gap-2 text-sm text-[#625969] sm:col-span-2"><input type="checkbox" checked={form.hide_from_portfolio} onChange={(event) => setForm({ ...form, hide_from_portfolio: event.target.checked })} className="accent-[#8B0AB4]" /> Keep this item hidden from the public portfolio</label>
            </div>
            <DialogFooter className="border-t border-[#eee8f0] px-6 py-4">
              <button type="button" onClick={() => setFormOpen(false)} className="rounded-full border border-[#e7ddea] px-5 py-2.5 text-sm text-[#625969]">Cancel</button>
              <button disabled={saving || uploading !== null} type="submit" className="rounded-full bg-[#8B0AB4] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#751096] disabled:opacity-60">{uploading ? "Uploading…" : saving ? "Saving…" : editingId ? "Save changes" : "Add project"}</button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
