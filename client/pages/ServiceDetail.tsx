import { Link, Navigate, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { useSEO } from "../hooks/useSEO";
import { services, siteUrl } from "../siteContent";

const SERVICE_FAQS = {
  "web-design-development": [
    { q: "Do you design websites for Austin, Texas businesses?", a: "Yes. The Linkage Digital creates responsive websites for businesses in Austin and across the United States. Each project is shaped around your audience, services, and goals, with clear location and service information to help customers understand what you offer." },
    { q: "Can my Austin business website be optimized for local search?", a: "Yes. Website projects can include technical and on-page SEO foundations, mobile-friendly layouts, and locally relevant service content. These elements help search engines understand your business and support visibility for relevant Austin-area searches." },
  ],
  "branding-logo-design": [
    { q: "Can you create a brand identity for an Austin small business?", a: "The Linkage Digital works with Austin businesses and organizations across the United States on logo design and cohesive visual identity. Branding can include logo concepts, color and typography direction, and guidelines for consistent use across digital materials." },
    { q: "Why does consistent branding matter for a local business?", a: "A consistent brand helps customers recognize your business across your website, social profiles, and marketing materials. For Austin-area businesses, clear and recognizable branding can support trust as people compare local options." },
  ],
  "digital-marketing": [
    { q: "What digital marketing services can support an Austin business?", a: "The Linkage Digital offers digital marketing support such as content strategy, paid media, social media marketing, and conversion reporting. Priorities are selected around your audience and business goals, whether you serve Austin customers or a broader U.S. market." },
    { q: "Can digital marketing campaigns target customers in Austin, Texas?", a: "Campaign strategy can be tailored to a defined service area, including Austin, Texas, when that matches your business. Audience, location, and campaign goals are discussed before selecting channels and content." },
  ],
  "seo-optimization": [
    { q: "What does local SEO include for an Austin business?", a: "Local SEO can include technical site improvements, keyword research, on-page content, location-relevant service pages, and Google Business Profile guidance. The right work depends on your market and current website; no specific ranking position can be guaranteed." },
    { q: "How long does local SEO take to show results in Austin?", a: "SEO timelines vary with competition, website condition, content quality, and consistency. Improvements may take time to be reflected in search results, so The Linkage Digital focuses on sustainable technical and content work rather than promising a fixed ranking or deadline." },
  ],
  "video-editing-motion": [
    { q: "Can you create video content for Austin businesses?", a: "Yes. The Linkage Digital provides video editing and motion design for Austin-area businesses and clients across the United States. Deliverables can be planned for your website, social channels, or digital campaigns." },
    { q: "What types of business videos can you edit?", a: "Video work can include promotional edits, product or service explainers, social video assets, and motion graphics. The format and scope are planned around your message, audience, and the channels where you intend to share the content." },
  ],
} as const;

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  const seoService = service || services[0];
  const faqItems = SERVICE_FAQS[seoService.slug];
  const url = `${siteUrl}/services/${seoService.slug}`;

  useSEO({
    title: `${seoService.title} Services | The Linkage Digital`,
    description: seoService.description,
    keywords: seoService.keywords,
    canonicalUrl: url,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: seoService.title,
        description: seoService.description,
        url,
        provider: { "@type": "Organization", name: "The Linkage Digital", url: siteUrl },
        areaServed: { "@type": "Country", name: "United States" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: seoService.title, item: url },
        ],
      },
    ],
  });

  if (!service) return <Navigate to="/services" replace />;

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />
      <main>
        <section className="bg-[#F9F9F9] border-b border-[#ECECEC]">
          <div className="max-w-[1000px] mx-auto px-6 py-16 md:py-24">
            <nav aria-label="Breadcrumb" className="text-sm text-[#555] mb-8">
              <Link to="/" className="hover:text-[#8B0AB4]">Home</Link><span className="mx-2">/</span><Link to="/services" className="hover:text-[#8B0AB4]">Services</Link><span className="mx-2">/</span><span>{service.title}</span>
            </nav>
            <p className="font-kanit font-semibold text-[#8B0AB4] text-sm uppercase tracking-wider mb-4">Digital services</p>
            <h1 className="font-teko font-bold text-[#121212] uppercase leading-[.9] text-[clamp(3rem,7vw,6rem)]">{service.title}</h1>
            <p className="text-[#555] text-lg leading-relaxed max-w-2xl mt-6">{service.description}</p>
            <Link to="/contact" className="inline-flex mt-8 bg-[#8B0AB4] text-white px-6 py-3 font-medium uppercase text-sm hover:bg-[#700890]">Start a project</Link>
          </div>
        </section>
        <section className="max-w-[1000px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[1fr_.9fr] gap-12">
          <div>
            <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Built around your goals</h2>
            <p className="mt-5 text-[#555] leading-relaxed">The Linkage Digital combines strategy, creative direction, and practical delivery to create work that supports a clear business outcome. Every engagement starts with your audience, priorities, and the action you need them to take.</p>
          </div>
          <aside className="bg-[#FFE8F5] p-7 md:p-8">
            <h2 className="font-teko font-bold text-[#121212] uppercase text-3xl leading-none mb-5">What&apos;s included</h2>
            <ul className="space-y-3">{service.features.map((feature) => <li key={feature} className="flex gap-3 text-[#333]"><span className="text-[#8B0AB4]" aria-hidden="true">•</span>{feature}</li>)}</ul>
          </aside>
        </section>
        <section className="max-w-[1000px] mx-auto px-6 py-14 md:py-20">
          <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none mb-8">Frequently asked questions</h2>
          <div className="space-y-7">
            {faqItems.map(({ q, a }) => (
              <article key={q}>
                <h3 className="font-kanit font-semibold text-[#121212] text-lg">{q}</h3>
                <p className="mt-2 text-[#555] leading-relaxed">{a}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[#171717] py-14 text-center px-6">
          <h2 className="font-teko font-bold text-white uppercase text-4xl md:text-5xl">Ready to grow?</h2>
          <Link to="/contact" className="inline-flex mt-6 text-white border-b border-white pb-1 uppercase text-sm hover:text-[#dba8ef]">Talk to our team</Link>
        </section>
      </main>
    </div>
  );
}
