import { Link, Navigate, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { useSEO } from "../hooks/useSEO";
import { articles, siteUrl } from "../siteContent";

export default function BlogArticle() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  const seoArticle = article || articles[0];
  const url = `${siteUrl}/blog/${seoArticle.slug}`;

  useSEO({
    title: `${seoArticle.title} | The Linkage Digital`,
    description: seoArticle.excerpt,
    keywords: `${seoArticle.category.toLowerCase()} insights, digital agency blog, ${seoArticle.title.toLowerCase()}`,
    ogTitle: seoArticle.title,
    ogDescription: seoArticle.excerpt,
    ogImage: seoArticle.image,
    canonicalUrl: url,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: seoArticle.title,
        description: seoArticle.excerpt,
        image: seoArticle.image,
        datePublished: seoArticle.date,
        dateModified: seoArticle.date,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Organization", name: "The Linkage Digital", url: siteUrl },
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

  if (!article) return <Navigate to="/blog" replace />;

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />
      <main>
        <article>
          <header className="max-w-[900px] mx-auto px-6 pt-14 md:pt-20 pb-10">
            <nav aria-label="Breadcrumb" className="text-sm text-[#555] mb-8"><Link to="/" className="hover:text-[#8B0AB4]">Home</Link><span className="mx-2">/</span><Link to="/blog" className="hover:text-[#8B0AB4]">Blog</Link><span className="mx-2">/</span><span>{article.category}</span></nav>
            <p className="text-[#8B0AB4] uppercase tracking-wider text-sm font-semibold">{article.category} · {article.displayDate}</p>
            <h1 className="font-teko font-bold text-[#121212] uppercase text-[clamp(3rem,7vw,6rem)] leading-[.9] mt-5">{article.title}</h1>
            <p className="text-[#555] text-lg md:text-xl leading-relaxed mt-6 max-w-3xl">{article.excerpt}</p>
          </header>
          <figure className="max-w-[1200px] mx-auto px-6"><img src={article.image} alt={`Illustration for ${article.title}`} className="w-full aspect-[16/8] object-cover" /><figcaption className="text-sm text-[#666] mt-2">The Linkage Digital insight on {article.category.toLowerCase()}.</figcaption></figure>
          <div className="max-w-[760px] mx-auto px-6 py-14 md:py-20 text-[#333] text-lg leading-relaxed space-y-6">
            <p>Strong digital work starts with clarity: know the audience, remove friction, and give people a compelling next step. This is the lens we use when planning digital experiences for growing businesses.</p>
            <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl leading-none">Put the audience first</h2>
            <p>Use research, real customer questions, and performance data to focus every decision. A clear message and consistent visual system make it easier for visitors to understand your value and take action.</p>
            <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl leading-none">Create a measurable plan</h2>
            <p>Prioritize the improvements that support a specific goal, then monitor how people engage with the experience. Iteration turns a one-time launch into a dependable growth channel.</p>
            <p>Need support applying these ideas to your business? <Link to="/contact" className="text-[#8B0AB4] underline underline-offset-4">Speak with The Linkage Digital</Link>.</p>
          </div>
        </article>
        <section className="bg-[#F9F9F9] py-14 md:py-20"><div className="max-w-[1100px] mx-auto px-6"><h2 className="font-teko font-bold text-[#121212] uppercase text-4xl mb-8">More insights</h2><div className="grid md:grid-cols-3 gap-5">{related.map((item) => <Link key={item.slug} to={`/blog/${item.slug}`} className="bg-white p-6 hover:shadow-md transition-shadow"><p className="text-[#8B0AB4] uppercase text-xs font-semibold">{item.category}</p><h3 className="font-teko font-bold uppercase text-2xl leading-none mt-3">{item.title}</h3><p className="text-[#555] text-sm mt-4">{item.excerpt}</p></Link>)}</div></div></section>
      </main>
    </div>
  );
}
