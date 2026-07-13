import { Link, Navigate, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { useSEO } from "../hooks/useSEO";
import { services, siteUrl } from "../siteContent";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  const seoService = service || services[0];
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
        <section className="bg-[#171717] py-14 text-center px-6">
          <h2 className="font-teko font-bold text-white uppercase text-4xl md:text-5xl">Ready to grow?</h2>
          <Link to="/contact" className="inline-flex mt-6 text-white border-b border-white pb-1 uppercase text-sm hover:text-[#dba8ef]">Talk to our team</Link>
        </section>
      </main>
    </div>
  );
}
