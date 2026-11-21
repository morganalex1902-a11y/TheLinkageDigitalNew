import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SignIn, useAuth, useClerk } from "@clerk/react";
import { ArrowLeft, ExternalLink, LogOut, Plus, Search, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BASE_BLOG_POSTS, blogCategories, emptyBlogPost, formatBlogDate, getBlogSlug, type BlogPost } from "@/lib/blog";
import { createSupabaseClient } from "@/lib/supabase";

type BlogForm = Omit<BlogPost, "id">;

export default function BlogAdmin() {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { signOut } = useClerk();
  const supabase = useMemo(() => createSupabaseClient(() => getToken()), [getToken]);
  const [access, setAccess] = useState<"checking" | "allowed" | "denied" | "configuration-error">("checking");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [batchOpen, setBatchOpen] = useState(false);
  const [batchForms, setBatchForms] = useState<BlogForm[]>([{ ...emptyBlogPost }]);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState<BlogForm>(emptyBlogPost);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<"image" | "video" | null>(null);

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setAccess("denied");
      setPosts([]);
      return;
    }

    let cancelled = false;
    setAccess("checking");
    setLoading(true);

    const loadPosts = async () => {
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
        .from("blog_config")
        .select("initialized")
        .eq("id", "main")
        .maybeSingle();
      if (configError) {
        setLoading(false);
        toast.error("Blog storage is not set up. Apply the blog database migration first.");
        return;
      }

      if (!config?.initialized) {
        const seedPosts = BASE_BLOG_POSTS.map((post) => ({ ...post, id: post.slug }));
        const { error: seedError } = await supabase.from("blog_posts").upsert(seedPosts, { onConflict: "slug" });
        if (seedError) {
          setLoading(false);
          toast.error("Could not initialize blog posts.");
          return;
        }
        const { error: initError } = await supabase.from("blog_config").upsert({ id: "main", initialized: true });
        if (initError) {
          setLoading(false);
          toast.error("Could not finish initializing blog storage.");
          return;
        }
      }

      const { data, error } = await supabase.from("blog_posts").select("*").order("published_at", { ascending: false });
      if (cancelled) return;
      if (error) {
        toast.error("Could not load blog posts.");
      } else {
        setPosts(data as BlogPost[]);
      }
      setLoading(false);
    };

    void loadPosts();
    return () => { cancelled = true; };
  }, [getToken, isLoaded, isSignedIn, supabase]);

  const filteredPosts = useMemo(() => posts.filter((post) =>
    `${post.title} ${post.category} ${post.excerpt}`.toLowerCase().includes(search.toLowerCase()),
  ), [posts, search]);

  const openCreate = () => {
    setEditingSlug(null);
    setForm({ ...emptyBlogPost });
    setFormOpen(true);
  };

  const openBatchCreate = () => {
    setBatchForms([{ ...emptyBlogPost }, { ...emptyBlogPost }]);
    setBatchOpen(true);
  };

  const openEdit = (post: BlogPost) => {
    setEditingSlug(post.slug);
    setForm({ ...post, video: post.video ?? "" });
    setFormOpen(true);
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>, resourceType: "image" | "video", batchIndex?: number) => {
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
      const response = await fetch(`https://api.cloudinary.com/v1_1/${signatureData.cloudName}/${resourceType}/upload`, { method: "POST", body: uploadData });
      const result = await response.json();
      if (!response.ok || !result.secure_url) throw new Error(result.error?.message ?? "Cloudinary upload failed.");
      if (batchIndex === undefined) {
        setForm((current) => ({ ...current, [resourceType]: result.secure_url }));
      } else {
        setBatchForms((current) => current.map((item, index) => index === batchIndex ? { ...item, [resourceType]: result.secure_url } : item));
      }
      toast.success(resourceType === "image" ? "Cover image uploaded." : "Video uploaded.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Media upload failed.");
    } finally {
      setUploading(null);
    }
  };

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = form.title.trim();
    const slug = form.slug.trim() || getBlogSlug(title);
    const image = form.image.trim();
    const video = form.video?.trim() ?? "";
    if (!title || !form.excerpt.trim() || !form.content.trim() || !form.author.trim()) {
      toast.error("Complete the title, excerpt, article content, and author fields.");
      return;
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      toast.error("Use a URL-friendly slug with lowercase letters, numbers, and hyphens.");
      return;
    }
    if ((image && !/^https?:\/\//i.test(image)) || (video && !/^https?:\/\//i.test(video))) {
      toast.error("Media URLs must start with http:// or https://.");
      return;
    }

    const payload: BlogPost = {
      id: slug,
      slug,
      title,
      category: form.category,
      published_at: form.published_at,
      excerpt: form.excerpt.trim(),
      content: form.content.trim(),
      image,
      video: video || undefined,
      author: form.author.trim(),
      published: form.published,
    };
    setSaving(true);
    const request = editingSlug
      ? supabase.from("blog_posts").update(payload).eq("slug", editingSlug)
      : supabase.from("blog_posts").insert(payload);
    const { error } = await request;
    setSaving(false);
    if (error) {
      toast.error(error.code === "23505" ? "A post with that slug already exists." : error.message);
      return;
    }
    setPosts((current) => editingSlug
      ? current.map((post) => post.slug === editingSlug ? payload : post).sort((a, b) => b.published_at.localeCompare(a.published_at))
      : [...current, payload].sort((a, b) => b.published_at.localeCompare(a.published_at)));
    setFormOpen(false);
    toast.success(editingSlug ? "Blog post updated." : "Blog post added.");
  };

  const handleBatchSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payloads: BlogPost[] = batchForms.map((item) => {
      const title = item.title.trim();
      const slug = item.slug.trim() || getBlogSlug(title);
      const image = item.image.trim();
      const video = item.video?.trim() ?? "";
      return {
        id: slug,
        slug,
        title,
        category: item.category,
        published_at: item.published_at,
        excerpt: item.excerpt.trim(),
        content: item.content.trim(),
        image,
        video: video || undefined,
        author: item.author.trim(),
        published: item.published,
      };
    });
    if (payloads.some((item) => !item.title || !item.excerpt || !item.content || !item.author || !item.published_at)) {
      toast.error("Complete each post’s title, excerpt, content, author, and publish date.");
      return;
    }
    if (payloads.some((item) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug))) {
      toast.error("Each post needs a URL-friendly slug with lowercase letters, numbers, and hyphens.");
      return;
    }
    if (payloads.some((item) => (item.image && !/^https?:\/\//i.test(item.image)) || (item.video && !/^https?:\/\//i.test(item.video)))) {
      toast.error("Media URLs must start with http:// or https://.");
      return;
    }
    const slugs = payloads.map((item) => item.slug);
    if (new Set(slugs).size !== slugs.length || slugs.some((slug) => posts.some((post) => post.slug === slug))) {
      toast.error("Each post needs a unique slug that is not already in the blog.");
      return;
    }

    setSaving(true);
    const { error } = await supabase.from("blog_posts").insert(payloads);
    setSaving(false);
    if (error) {
      toast.error(error.code === "23505" ? "A post with that slug already exists." : error.message);
      return;
    }
    setPosts((current) => [...current, ...payloads].sort((a, b) => b.published_at.localeCompare(a.published_at)));
    setBatchOpen(false);
    toast.success(`${payloads.length} blog posts added.`);
  };

  const handleDelete = async (post: BlogPost) => {
    if (!window.confirm(`Delete “${post.title}”?`)) return;
    const { error } = await supabase.from("blog_posts").delete().eq("slug", post.slug);
    if (error) {
      toast.error(error.message);
      return;
    }
    setPosts((current) => current.filter((item) => item.slug !== post.slug));
    toast.success("Blog post deleted.");
  };

  if (!isLoaded || (isSignedIn && access === "checking")) {
    return <div className="grid min-h-screen place-items-center bg-[#f8f6f9] font-kanit text-[#695f70]">Loading blog admin…</div>;
  }

  if (!isSignedIn || access === "denied" || access === "configuration-error") {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f8f6f9] px-5 py-12 font-kanit">
        <section className="w-full max-w-md rounded-3xl border border-[#ece6ef] bg-white p-7 shadow-xl shadow-[#351342]/5 sm:p-10">
          <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#8B0AB4]"><ArrowLeft size={15} /> Back to blog</Link>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B0AB4]">The Linkage Digital</p>
          <h1 className="font-teko text-5xl font-bold uppercase leading-none text-[#121212]">Blog admin</h1>
          {!isSignedIn && <div className="mt-7 flex justify-center"><SignIn routing="hash" appearance={{ variables: { colorPrimary: "#8B0AB4" }, elements: { card: "border-0 shadow-none", rootBox: "w-full", headerTitle: "font-teko uppercase" } }} /></div>}
          {isSignedIn && <div className="mt-6 rounded-2xl bg-[#fff4f3] p-5 text-sm leading-relaxed text-[#9a3535]">
            <p>{access === "denied" ? "This account does not have blog admin access." : "Supabase could not validate this Clerk session. Check the Clerk third-party auth setup."}</p>
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
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B0AB4]">The Linkage Digital</p><h1 className="font-teko text-3xl font-bold uppercase leading-none sm:text-4xl">Blog Admin</h1></div>
          <div className="flex items-center gap-2 sm:gap-4"><Link to="/blog" className="inline-flex items-center gap-2 rounded-full border border-[#e7ddea] px-4 py-2 text-xs font-medium text-[#514957] hover:border-[#8B0AB4] hover:text-[#8B0AB4]"><ExternalLink size={14} /> View blog</Link><Link to="/admin" className="rounded-full border border-[#e7ddea] px-4 py-2 text-xs font-medium text-[#514957] hover:border-[#8B0AB4] hover:text-[#8B0AB4]">Dashboard</Link><button onClick={() => void signOut()} aria-label="Sign out" className="rounded-full border border-[#e7ddea] p-2.5 text-[#514957] hover:border-[#8B0AB4] hover:text-[#8B0AB4]"><LogOut size={17} /></button></div>
        </div>
      </header>
      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10">
        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="text-sm text-[#77707c]">Create and publish articles using one shared layout.</p><p className="mt-2 text-xs text-[#978d9c]">{posts.length} posts · Drafts stay private</p></div>
          <div className="flex flex-wrap gap-2"><button onClick={openCreate} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8B0AB4] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8B0AB4]/15 hover:bg-[#751096]"><Plus size={17} /> Add blog post</button><button onClick={openBatchCreate} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e7ddea] bg-white px-5 py-3 text-sm font-semibold text-[#514957] hover:border-[#8B0AB4] hover:text-[#8B0AB4]"><Plus size={17} /> Add multiple</button></div>
        </div>
        <section className="overflow-hidden rounded-2xl border border-[#eae4ed] bg-white shadow-sm">
          <div className="border-b border-[#eee8f0] p-4 sm:p-5"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a096a5]" size={17} /><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search blog posts" className="h-11 rounded-xl border-[#ece6ef] pl-10" /></div></div>
          {loading ? <div className="p-10 text-center text-sm text-[#766b7b]">Loading posts…</div> : filteredPosts.length === 0 ? <div className="p-12 text-center text-sm text-[#766b7b]">No posts match your search.</div> : <div className="divide-y divide-[#f0ebf2]">{filteredPosts.map((post) => <article key={post.slug} className="grid gap-4 p-4 sm:grid-cols-[88px_minmax(0,1fr)_auto] sm:items-center sm:gap-5 sm:p-5">{post.image ? <img src={post.image} alt="" className="h-20 w-24 rounded-xl bg-[#f2edf4] object-cover" loading="lazy" /> : <div className="h-20 w-24 rounded-xl bg-[#f2edf4]" />}<div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h2 className="font-semibold">{post.title}</h2><span className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide ${post.published ? "bg-green-50 text-green-700" : "bg-[#f4edf6] text-[#81698a]"}`}>{post.published ? "Published" : "Draft"}</span></div><p className="mt-1 text-xs text-[#8a808f]">{post.category} · {formatBlogDate(post.published_at)} · /blog/{post.slug}</p><p className="mt-2 truncate text-xs text-[#716879]">{post.excerpt}</p></div><div className="flex gap-2 sm:justify-end"><Link to={`/blog/${post.slug}`} target="_blank" className="rounded-full border border-[#e7ddea] px-4 py-2 text-xs font-medium hover:border-[#8B0AB4] hover:text-[#8B0AB4]">Preview</Link><button onClick={() => openEdit(post)} className="rounded-full border border-[#e7ddea] px-4 py-2 text-xs font-medium hover:border-[#8B0AB4] hover:text-[#8B0AB4]">Edit</button><button onClick={() => void handleDelete(post)} aria-label={`Delete ${post.title}`} className="rounded-full border border-[#f0dede] p-2 text-[#a74a4a] hover:bg-[#fff4f3]"><Trash2 size={16} /></button></div></article>)}</div>}
        </section>
      </div>
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-2xl border-[#eae4ed] bg-white p-0">
          <form onSubmit={handleSave}>
            <DialogHeader className="border-b border-[#eee8f0] px-6 py-5 pr-14 text-left"><DialogTitle className="font-teko text-3xl font-bold uppercase">{editingSlug ? "Edit blog post" : "Create blog post"}</DialogTitle><DialogDescription>Fill in the post details; every article uses the same public layout.</DialogDescription></DialogHeader>
            <div className="grid gap-4 px-6 py-5 sm:grid-cols-2">
              <label className="space-y-1.5 text-xs font-medium text-[#514957] sm:col-span-2">Title<Input required maxLength={160} value={form.title} onChange={(event) => setForm((current) => ({ ...current, title: event.target.value, slug: editingSlug ? current.slug : getBlogSlug(event.target.value) }))} placeholder="Article title" /></label>
              <label className="space-y-1.5 text-xs font-medium text-[#514957]">URL slug<Input required value={form.slug} onChange={(event) => setForm({ ...form, slug: getBlogSlug(event.target.value) })} placeholder="article-url-slug" /></label>
              <label className="space-y-1.5 text-xs font-medium text-[#514957]">Category<select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B0AB4]">{blogCategories.map((category) => <option key={category} value={category}>{category}</option>)}</select></label>
              <label className="space-y-1.5 text-xs font-medium text-[#514957]">Publish date<Input required type="date" value={form.published_at} onChange={(event) => setForm({ ...form, published_at: event.target.value })} /></label>
              <label className="space-y-1.5 text-xs font-medium text-[#514957]">Author<Input required maxLength={100} value={form.author} onChange={(event) => setForm({ ...form, author: event.target.value })} /></label>
              <label className="space-y-1.5 text-xs font-medium text-[#514957] sm:col-span-2">Excerpt<Textarea required maxLength={300} rows={2} value={form.excerpt} onChange={(event) => setForm({ ...form, excerpt: event.target.value })} placeholder="Short summary shown on the blog list" /></label>
              <label className="space-y-1.5 text-xs font-medium text-[#514957] sm:col-span-2">Article content<Textarea required rows={12} value={form.content} onChange={(event) => setForm({ ...form, content: event.target.value })} placeholder="Write the article. Separate paragraphs with a blank line." /></label>
              <div className="space-y-2 text-xs font-medium text-[#514957] sm:col-span-2"><label className="block">Cover image (optional)</label><div className="flex flex-col gap-2 sm:flex-row"><Input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} placeholder="Image URL" /><label className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-[#e7ddea] px-4 text-xs hover:border-[#8B0AB4]"><Upload size={15} />{uploading === "image" ? "Uploading…" : "Upload image"}<input className="sr-only" type="file" accept="image/*" disabled={uploading !== null} onChange={(event) => void handleUpload(event, "image")} /></label></div></div>
              <div className="space-y-2 text-xs font-medium text-[#514957] sm:col-span-2"><label className="block">Video (optional)</label><div className="flex flex-col gap-2 sm:flex-row"><Input value={form.video ?? ""} onChange={(event) => setForm({ ...form, video: event.target.value })} placeholder="Video URL" /><label className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-[#e7ddea] px-4 text-xs hover:border-[#8B0AB4]"><Upload size={15} />{uploading === "video" ? "Uploading…" : "Upload video"}<input className="sr-only" type="file" accept="video/*" disabled={uploading !== null} onChange={(event) => void handleUpload(event, "video")} /></label></div></div>
              <label className="inline-flex items-center gap-2 text-sm text-[#625969] sm:col-span-2"><input type="checkbox" checked={form.published} onChange={(event) => setForm({ ...form, published: event.target.checked })} className="accent-[#8B0AB4]" /> Publish this post</label>
            </div>
            <DialogFooter className="border-t border-[#eee8f0] px-6 py-4"><button type="button" onClick={() => setFormOpen(false)} className="rounded-full border border-[#e7ddea] px-5 py-2.5 text-sm text-[#625969]">Cancel</button><button disabled={saving || uploading !== null} type="submit" className="rounded-full bg-[#8B0AB4] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#751096] disabled:opacity-60">{uploading ? "Uploading…" : saving ? "Saving…" : editingSlug ? "Save changes" : "Save post"}</button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={batchOpen} onOpenChange={setBatchOpen}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-2xl border-[#eae4ed] bg-white p-0">
          <form onSubmit={handleBatchSave}>
            <DialogHeader className="border-b border-[#eee8f0] px-6 py-5 pr-14 text-left"><DialogTitle className="font-teko text-3xl font-bold uppercase">Add multiple blog posts</DialogTitle><DialogDescription>Fill out each post below. Optional cover images and videos can be entered as URLs.</DialogDescription></DialogHeader>
            <div className="space-y-4 px-6 py-5">
              {batchForms.map((item, index) => <section key={index} className="rounded-2xl border border-[#eee8f0] p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between"><h3 className="font-semibold">Post {index + 1}</h3>{batchForms.length > 2 && <button type="button" onClick={() => setBatchForms((current) => current.filter((_, itemIndex) => itemIndex !== index))} className="text-xs text-[#a74a4a] hover:underline">Remove</button>}</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="space-y-1.5 text-xs font-medium text-[#514957] sm:col-span-2">Title<Input required maxLength={160} value={item.title} onChange={(event) => setBatchForms((current) => current.map((value, itemIndex) => itemIndex === index ? { ...value, title: event.target.value, slug: getBlogSlug(event.target.value) } : value))} placeholder="Article title" /></label>
                  <label className="space-y-1.5 text-xs font-medium text-[#514957]">URL slug<Input required value={item.slug} onChange={(event) => setBatchForms((current) => current.map((value, itemIndex) => itemIndex === index ? { ...value, slug: getBlogSlug(event.target.value) } : value))} placeholder="article-url-slug" /></label>
                  <label className="space-y-1.5 text-xs font-medium text-[#514957]">Category<select value={item.category} onChange={(event) => setBatchForms((current) => current.map((value, itemIndex) => itemIndex === index ? { ...value, category: event.target.value } : value))} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#8B0AB4]">{blogCategories.map((categoryOption) => <option key={categoryOption} value={categoryOption}>{categoryOption}</option>)}</select></label>
                  <label className="space-y-1.5 text-xs font-medium text-[#514957]">Publish date<Input required type="date" value={item.published_at} onChange={(event) => setBatchForms((current) => current.map((value, itemIndex) => itemIndex === index ? { ...value, published_at: event.target.value } : value))} /></label>
                  <label className="space-y-1.5 text-xs font-medium text-[#514957]">Author<Input required maxLength={100} value={item.author} onChange={(event) => setBatchForms((current) => current.map((value, itemIndex) => itemIndex === index ? { ...value, author: event.target.value } : value))} /></label>
                  <label className="space-y-1.5 text-xs font-medium text-[#514957] sm:col-span-2">Excerpt<Textarea required maxLength={300} rows={2} value={item.excerpt} onChange={(event) => setBatchForms((current) => current.map((value, itemIndex) => itemIndex === index ? { ...value, excerpt: event.target.value } : value))} placeholder="Short summary shown on the blog list" /></label>
                  <label className="space-y-1.5 text-xs font-medium text-[#514957] sm:col-span-2">Article content<Textarea required rows={6} value={item.content} onChange={(event) => setBatchForms((current) => current.map((value, itemIndex) => itemIndex === index ? { ...value, content: event.target.value } : value))} placeholder="Write the article. Separate paragraphs with a blank line." /></label>
                  <div className="space-y-1.5 text-xs font-medium text-[#514957] sm:col-span-2"><label className="block">Cover image (optional)</label><div className="flex flex-col gap-2 sm:flex-row"><Input value={item.image} onChange={(event) => setBatchForms((current) => current.map((value, itemIndex) => itemIndex === index ? { ...value, image: event.target.value } : value))} placeholder="Image URL" /><label className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-[#e7ddea] px-4 text-xs hover:border-[#8B0AB4]"><Upload size={15} />{uploading === "image" ? "Uploading…" : "Upload image"}<input className="sr-only" type="file" accept="image/*" disabled={uploading !== null} onChange={(event) => void handleUpload(event, "image", index)} /></label></div></div>
                  <div className="space-y-1.5 text-xs font-medium text-[#514957] sm:col-span-2"><label className="block">Video (optional)</label><div className="flex flex-col gap-2 sm:flex-row"><Input value={item.video ?? ""} onChange={(event) => setBatchForms((current) => current.map((value, itemIndex) => itemIndex === index ? { ...value, video: event.target.value } : value))} placeholder="Video URL" /><label className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-[#e7ddea] px-4 text-xs hover:border-[#8B0AB4]"><Upload size={15} />{uploading === "video" ? "Uploading…" : "Upload video"}<input className="sr-only" type="file" accept="video/*" disabled={uploading !== null} onChange={(event) => void handleUpload(event, "video", index)} /></label></div></div>
                  <label className="inline-flex items-center gap-2 text-sm text-[#625969] sm:col-span-2"><input type="checkbox" checked={item.published} onChange={(event) => setBatchForms((current) => current.map((value, itemIndex) => itemIndex === index ? { ...value, published: event.target.checked } : value))} className="accent-[#8B0AB4]" /> Publish this post</label>
                </div>
              </section>)}
              <button type="button" onClick={() => setBatchForms((current) => [...current, { ...emptyBlogPost }])} className="inline-flex items-center gap-2 rounded-full border border-[#e7ddea] px-4 py-2.5 text-sm font-medium text-[#514957] hover:border-[#8B0AB4] hover:text-[#8B0AB4]"><Plus size={16} /> Add another post</button>
            </div>
            <DialogFooter className="border-t border-[#eee8f0] px-6 py-4"><button type="button" onClick={() => setBatchOpen(false)} className="rounded-full border border-[#e7ddea] px-5 py-2.5 text-sm text-[#625969]">Cancel</button><button disabled={saving} type="submit" className="rounded-full bg-[#8B0AB4] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#751096] disabled:opacity-60">{saving ? "Saving…" : `Save ${batchForms.length} posts`}</button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
