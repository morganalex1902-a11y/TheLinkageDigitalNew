import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { useSEO } from "../hooks/useSEO";
import { BASE_BLOG_POSTS, formatBlogDate, mergeLatestBlogPosts, type BlogPost } from "@/lib/blog";
import { supabase } from "@/lib/supabase";
import { siteUrl } from "../siteContent";

export default function BlogArticle() {
  const { slug } = useParams();
  const [posts, setPosts] = useState<BlogPost[]>(mergeLatestBlogPosts(BASE_BLOG_POSTS));
  const [article, setArticle] = useState<BlogPost | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoaded(false);
    const loadArticle = async () => {
      const { data: config } = await supabase.from("blog_config").select("initialized").eq("id", "main").maybeSingle();
      if (!config?.initialized) {
        if (!cancelled) {
          const availablePosts = mergeLatestBlogPosts(BASE_BLOG_POSTS);
          setPosts(availablePosts);
          setArticle(availablePosts.find((post) => post.slug === slug) ?? null);
          setLoaded(true);
        }
        return;
      }

      const { data, error } = await supabase.from("blog_posts").select("id, slug, title, category, published_at, excerpt, content, image, video, author, published").eq("published", true).order("published_at", { ascending: false });
      if (cancelled) return;
      if (error || !data) {
        setArticle(null);
        setLoaded(true);
        return;
      }
      const publishedPosts = mergeLatestBlogPosts(data as BlogPost[]);
      setPosts(publishedPosts);
      setArticle(publishedPosts.find((post) => post.slug === slug) ?? null);
      setLoaded(true);
    };
    void loadArticle();
    return () => { cancelled = true; };
  }, [slug]);

  const seoArticle = article ?? BASE_BLOG_POSTS[0];
  const url = `${siteUrl}/blog/${slug ?? ""}`;
  useSEO({
    title: `${seoArticle.title} | The Linkage Digital`,
    description: seoArticle.excerpt,
    keywords: seoArticle.keywords ?? `${seoArticle.category.toLowerCase()} insights, digital agency blog, ${seoArticle.title.toLowerCase()}`,
    ogTitle: seoArticle.title,
    ogDescription: seoArticle.excerpt,
    ogImage: seoArticle.image || undefined,
    canonicalUrl: url,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: seoArticle.title,
        description: seoArticle.excerpt,
        ...(seoArticle.keywords ? { keywords: seoArticle.keywords } : {}),
        ...(seoArticle.image ? { image: seoArticle.image } : {}),
        datePublished: seoArticle.published_at,
        dateModified: seoArticle.published_at,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Person", name: seoArticle.author },
        publisher: { "@type": "Organization", name: "The Linkage Digital", logo: { "@type": "ImageObject", url: `${siteUrl}/logo.webp` } },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: seoArticle.title, item: url },
        ],
      },
    ],
  });

  if (!loaded) return <div className="grid min-h-screen place-items-center bg-white font-kanit text-[#695f70]">Loading article…</div>;
  if (!article) return <Navigate to="/blog" replace />;

  const related = posts.filter((post) => post.slug !== article.slug).slice(0, 3);
  const contentBlocks = article.content.split(/\n\s*\n/).filter(Boolean);

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />
      <main>
        <article>
          <header className="mx-auto max-w-[900px] px-6 pb-10 pt-14 md:pt-20">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#555]"><Link to="/" className="hover:text-[#8B0AB4]">Home</Link><span className="mx-2">/</span><Link to="/blog" className="hover:text-[#8B0AB4]">Blog</Link><span className="mx-2">/</span><span>{article.category}</span></nav>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#8B0AB4]">{article.category} · {formatBlogDate(article.published_at)}</p>
            <h1 className="mt-5 font-teko text-[clamp(3rem,7vw,6rem)] font-bold uppercase leading-[.9] text-[#121212]">{article.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#555] md:text-xl">{article.excerpt}</p>
            <p className="mt-4 text-sm text-[#777]">By {article.author}</p>
          </header>
          {article.video ? <figure className="mx-auto max-w-[1200px] px-6"><video src={article.video} poster={article.image || undefined} controls preload="metadata" className="aspect-[16/8] w-full bg-black object-contain" /></figure> : article.image ? <figure className="mx-auto max-w-[1200px] px-6"><img src={article.image} alt={article.imageAlt || `Illustration for ${article.title}`} className="aspect-[16/8] w-full object-cover" /></figure> : null}
          <div className="mx-auto max-w-[760px] space-y-6 px-6 py-14 text-lg leading-relaxed text-[#333] md:py-20">
            {contentBlocks.map((block, index) => {
              const heading = /^(#{2,3})\s+(.+)$/.exec(block);
              if (!heading) return <p key={index}>{block}</p>;
              const Heading = heading[1].length === 2 ? "h2" : "h3";
              return <Heading key={index} className="pt-5 font-teko text-3xl font-bold uppercase leading-none text-[#121212]">{heading[2]}</Heading>;
            })}
            <p>Need support applying these ideas to your business? <Link to="/contact" className="text-[#8B0AB4] underline underline-offset-4">Speak with The Linkage Digital</Link>.</p>
          </div>
        </article>
        {related.length > 0 && <section className="bg-[#F9F9F9] py-14 md:py-20"><div className="mx-auto max-w-[1100px] px-6"><h2 className="mb-8 font-teko text-4xl font-bold uppercase text-[#121212]">More insights</h2><div className="grid gap-5 md:grid-cols-3">{related.map((post) => <Link key={post.slug} to={`/blog/${post.slug}`} className="overflow-hidden bg-white transition-shadow hover:shadow-md">{post.image && <img src={post.image} alt={post.imageAlt || `Illustration for ${post.title}`} className="aspect-[16/9] w-full object-cover" />}<div className="p-6"><p className="text-xs font-semibold uppercase text-[#8B0AB4]">{post.category}</p><h3 className="mt-3 font-teko text-2xl font-bold uppercase leading-none">{post.title}</h3><p className="mt-4 text-sm text-[#555]">{post.excerpt}</p></div></Link>)}</div></div></section>}
      </main>
    </div>
  );
}
