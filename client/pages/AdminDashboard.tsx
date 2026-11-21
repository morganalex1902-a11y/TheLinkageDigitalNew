import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SignIn, useAuth, useClerk } from "@clerk/react";
import { ArrowRight, BriefcaseBusiness, FileText, LogOut, PanelsTopLeft, Plus } from "lucide-react";
import { createSupabaseClient } from "@/lib/supabase";

const modules = [
  {
    title: "Portfolio",
    description: "Add, edit, hide, and organize the projects shown on your public portfolio.",
    href: "/admin/portfolio",
    icon: BriefcaseBusiness,
    label: "Manage projects",
  },
  {
    title: "Blog",
    description: "Write articles, add media, manage drafts, and publish to your blog.",
    href: "/admin/blog",
    icon: FileText,
    label: "Manage posts",
  },
];

export default function AdminDashboard() {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { signOut } = useClerk();
  const supabase = useMemo(() => createSupabaseClient(() => getToken()), [getToken]);
  const [access, setAccess] = useState<"checking" | "allowed" | "denied" | "configuration-error">("checking");

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setAccess("denied");
      return;
    }

    let cancelled = false;
    setAccess("checking");
    const verifyAccess = async () => {
      const { data, error } = await supabase.rpc("is_portfolio_admin");
      if (cancelled) return;
      setAccess(error ? "configuration-error" : data ? "allowed" : "denied");
    };
    void verifyAccess();
    return () => { cancelled = true; };
  }, [getToken, isLoaded, isSignedIn, supabase]);

  if (!isLoaded || (isSignedIn && access === "checking")) {
    return <div className="grid min-h-screen place-items-center bg-[#f8f6f9] font-kanit text-[#695f70]">Loading CMS dashboard…</div>;
  }

  if (!isSignedIn || access !== "allowed") {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f8f6f9] px-5 py-12 font-kanit">
        <section className="w-full max-w-md rounded-3xl border border-[#ece6ef] bg-white p-7 shadow-xl shadow-[#351342]/5 sm:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B0AB4]">The Linkage Digital</p>
          <h1 className="font-teko text-5xl font-bold uppercase leading-none text-[#121212]">CMS Admin</h1>
          {!isSignedIn && <div className="mt-7 flex justify-center"><SignIn routing="hash" appearance={{ variables: { colorPrimary: "#8B0AB4" }, elements: { card: "border-0 shadow-none", rootBox: "w-full", headerTitle: "font-teko uppercase" } }} /></div>}
          {isSignedIn && <div className="mt-6 rounded-2xl bg-[#fff4f3] p-5 text-sm leading-relaxed text-[#9a3535]">
            <p>{access === "configuration-error" ? "Supabase could not validate this Clerk session. Check the Clerk third-party auth setup." : "This account does not have CMS admin access."}</p>
            <button type="button" onClick={() => void signOut()} className="mt-4 font-semibold underline">Sign out</button>
          </div>}
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f6f9] font-kanit text-[#121212]">
      <header className="border-b border-[#eae4ed] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/admin" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#8B0AB4] text-white"><PanelsTopLeft size={21} /></span>
            <span><span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B0AB4]">The Linkage Digital</span><span className="font-teko text-3xl font-bold uppercase leading-none">CMS Admin</span></span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="hidden rounded-full border border-[#e7ddea] px-4 py-2 text-xs font-medium text-[#514957] transition hover:border-[#8B0AB4] hover:text-[#8B0AB4] sm:inline-flex">View website</Link>
            <button onClick={() => void signOut()} aria-label="Sign out" className="rounded-full border border-[#e7ddea] p-2.5 text-[#514957] transition hover:border-[#8B0AB4] hover:text-[#8B0AB4]"><LogOut size={17} /></button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14">
        <section className="overflow-hidden rounded-[2rem] bg-[#17131b] px-7 py-9 text-white shadow-xl shadow-[#351342]/10 sm:px-12 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d89bed]">Website management</p>
          <h1 className="mt-4 max-w-3xl font-teko text-5xl font-bold uppercase leading-[0.9] sm:text-7xl">Your website,<br /><span className="text-[#d89bed]">all in one place.</span></h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">Choose a module to manage the content published across your website.</p>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B0AB4]">Content modules</p><h2 className="mt-1 font-teko text-4xl font-bold uppercase">Manage your site</h2></div><p className="hidden text-xs text-[#8a808f] sm:block">{modules.length} active modules</p></div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => {
              const Icon = module.icon;
              return <Link key={module.href} to={module.href} className="group rounded-3xl border border-[#eae4ed] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#d9b9e2] hover:shadow-lg sm:p-8">
                <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f6eafa] text-[#8B0AB4]"><Icon size={22} /></span><ArrowRight className="text-[#aaa0ae] transition group-hover:translate-x-1 group-hover:text-[#8B0AB4]" size={20} /></div>
                <h3 className="mt-7 font-teko text-3xl font-bold uppercase">{module.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-relaxed text-[#716879]">{module.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8B0AB4]">{module.label}<ArrowRight size={14} /></span>
              </Link>;
            })}
            <div className="rounded-3xl border border-dashed border-[#d8cbdc] bg-white/60 p-6 sm:p-8"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f2edf4] text-[#8a808f]"><Plus size={22} /></span><h3 className="mt-7 font-teko text-3xl font-bold uppercase text-[#514957]">More modules</h3><p className="mt-2 text-sm leading-relaxed text-[#8a808f]">New website management tools can be added here as your CMS grows.</p></div>
          </div>
        </section>
      </div>
    </main>
  );
}
