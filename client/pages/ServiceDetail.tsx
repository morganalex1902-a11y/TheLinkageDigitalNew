import { Link, Navigate, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { useSEO } from "../hooks/useSEO";
import { services, siteUrl } from "../siteContent";

const SERVICE_FAQS = {
  "web-design-development": [
    { q: "How much does professional website design cost in Texas?", a: "Website design costs in Texas depend on the website's complexity, number of pages, design requirements, functionality, and integrations. A simple business website generally costs less than a custom e-commerce platform or a feature-rich website. Contact The Linkage Digital to discuss your requirements and receive a tailored estimate." },
    { q: "How long does it take to develop a business website?", a: "Website development timelines depend on the project's size, design complexity, required features, and content availability. A basic business website may take a few weeks, while larger custom projects can require additional development time." },
    { q: "Does The Linkage Digital provide website design for small businesses in Texas?", a: "Yes. Our website design solutions are suitable for small businesses looking to establish a professional online presence, showcase their services, and connect with potential customers." },
    { q: "Do you provide custom website development in Texas?", a: "Yes. We offer custom website development solutions tailored to individual business requirements, including custom layouts, functionality, integrations, and scalable website structures." },
    { q: "Will my website work on mobile phones and tablets?", a: "Yes. We prioritize responsive website design to ensure that websites adapt to different screen sizes, including smartphones, tablets, laptops, and desktop computers." },
    { q: "Can a professionally designed website help my business rank on Google?", a: "A properly structured website can provide a strong foundation for SEO. Important elements include relevant content, optimized page titles, mobile usability, website performance, internal linking, and technical SEO. However, website design alone does not guarantee Google rankings." },
    { q: "Do you provide SEO-friendly website development?", a: "Yes. Our website development approach incorporates essential SEO practices, including search-friendly page structures, metadata, heading organization, image optimization, and technical considerations." },
    { q: "Can you redesign my existing business website?", a: "Yes. We can help modernize existing websites by improving their visual design, navigation, responsiveness, content structure, and functionality." },
    { q: "Do you work with businesses in Houston, Dallas, Austin, and San Antonio?", a: "The Linkage Digital targets businesses across Texas, including major markets such as Houston, Dallas, Austin, and San Antonio. Contact our team to discuss your location and project requirements." },
    { q: "What information do I need to start a website project?", a: "You should ideally have your business name, logo, service details, preferred design direction, contact information, and any existing website or branding materials. Our team can help you plan the remaining requirements." },
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
    title: seoService.slug === "web-design-development"
      ? "Professional Web Design & Development in Texas | The Linkage Digital"
      : `${seoService.title} Services | The Linkage Digital`,
    description: seoService.slug === "web-design-development"
      ? "Professional web design and development for Texas businesses. The Linkage Digital builds responsive, SEO-friendly websites for small businesses and growing brands."
      : seoService.description,
    keywords: seoService.slug === "web-design-development"
      ? "web design Texas, website development Texas, small business web design, custom website development, SEO-friendly web design, website redesign"
      : seoService.keywords,
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
        {service.slug === "web-design-development" && <WebDesignContent />}
        <section className="max-w-[1000px] mx-auto px-6 py-14 md:py-20">
          <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none mb-8">
            {service.slug === "web-design-development" ? "Frequently Asked Questions About Web Design & Development in Texas" : "Frequently asked questions"}
          </h2>
          <div className="space-y-7">
            {faqItems.map(({ q, a }) => (
              <article key={q}>
                <h3 className="font-kanit font-semibold text-[#121212] text-lg">{q}</h3>
                <p className="mt-2 text-[#555] leading-relaxed">{a}</p>
              </article>
            ))}
          </div>
        </section>
        {service.slug === "web-design-development" ? (
          <section className="bg-[#171717] py-14 md:py-20 px-6 text-center">
            <div className="max-w-[900px] mx-auto">
              <h2 className="font-teko font-bold text-white uppercase text-4xl md:text-5xl">Let&apos;s Build Your Business Website</h2>
              <p className="mt-6 text-white/80 leading-relaxed">Your next customer could be searching for your services online right now. Make sure your business has a professional website that communicates your value and makes it easy for customers to reach you.</p>
              <p className="mt-4 text-white/80 leading-relaxed">Whether you need a custom business website, a complete website redesign, an e-commerce platform, or a landing page, The Linkage Digital is ready to help.</p>
              <p className="mt-4 text-white font-semibold leading-relaxed">Let&apos;s create a website that represents your brand, supports your business goals, and helps you grow online.</p>
              <p className="mt-4 text-white/80 leading-relaxed">Contact The Linkage Digital today to discuss your website design and development project.</p>
              <Link to="/contact" className="inline-flex mt-6 text-white border-b border-white pb-1 uppercase text-sm hover:text-[#dba8ef]">Get Started With Your Website Project Today</Link>
            </div>
          </section>
        ) : (
          <section className="bg-[#171717] py-14 text-center px-6">
            <h2 className="font-teko font-bold text-white uppercase text-4xl md:text-5xl">Ready to grow?</h2>
            <Link to="/contact" className="inline-flex mt-6 text-white border-b border-white pb-1 uppercase text-sm hover:text-[#dba8ef]">Talk to our team</Link>
          </section>
        )}
      </main>
    </div>
  );
}

function WebDesignContent() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-14 md:py-20 text-[#555] leading-relaxed">
      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Professional Web Design &amp; Development Services</h2>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-3xl md:text-4xl leading-none">Building Powerful Websites That Help Businesses Grow</h3>
        <p className="mt-5">Your website is more than just an online presence. It is your digital storefront, your brand&apos;s first impression, and one of your most important tools for attracting new customers.</p>
        <p className="mt-4">At <strong>The Linkage Digital</strong>, we provide professional web design and development services for businesses across Texas, USA. We create modern, visually engaging, responsive, and performance-focused websites designed to help businesses establish credibility, connect with their target audience, and generate more opportunities online.</p>
        <p className="mt-4">Whether you are a small business owner looking to establish your online presence, an established company ready for a website redesign, or a growing brand looking for custom website development, our team delivers digital solutions tailored to your business goals.</p>
        <p className="mt-4">From strategic website planning and creative design to custom development and search engine optimization, we help turn your ideas into a professional digital experience.</p>
        <p className="mt-4 font-semibold text-[#121212]">Ready to build a website that works for your business? Let&apos;s bring your vision to life.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Custom Website Design Services in Texas</h2>
        <p className="mt-5">Every business has a different identity, audience, and set of goals. Your website should reflect that.</p>
        <p className="mt-4">Our custom website design services focus on creating unique digital experiences that represent your brand while making it easy for visitors to explore your services, understand your value, and contact your business.</p>
        <p className="mt-4">We combine modern design principles, intuitive navigation, compelling content layouts, and conversion-focused elements to create websites that look professional and deliver a smooth user experience.</p>
        <p className="mt-4">Our website design solutions include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Custom business website design</li><li>Professional corporate website design</li><li>Small business website design</li><li>Landing page design and development</li><li>Service-based business websites</li><li>Portfolio and company websites</li><li>Website redesign and modernization</li><li>Mobile-responsive website design</li>
        </ul>
        <p className="mt-4">Whether you are launching a new business or upgrading an existing website, we build digital experiences that help your brand stand out in the competitive Texas market.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Professional Website Development Services</h2>
        <p className="mt-5">A great website needs more than attractive visuals. It needs reliable development, functionality, performance, and a structure that supports your business as it grows.</p>
        <p className="mt-4">The Linkage Digital provides website development services focused on creating functional, scalable, and user-friendly websites.</p>
        <p className="mt-4">Our development process combines modern technologies and development practices to deliver websites that are easy to navigate, maintain, and expand.</p>
        <p className="mt-4">Our website development services include:</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Custom Website Development</h3>
        <p>Get a website developed around your specific business requirements, functionality, and customer journey.</p>
        <h3 className="mt-5 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Responsive Website Development</h3>
        <p>We build websites that adapt to desktops, tablets, and smartphones, providing visitors with a consistent browsing experience across devices.</p>
        <h3 className="mt-5 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">WordPress Website Development</h3>
        <p>Create a flexible and manageable website with customized layouts, functionality, and content management capabilities.</p>
        <h3 className="mt-5 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">E-Commerce Website Development</h3>
        <p>Build an online store that showcases your products, simplifies browsing, and provides customers with a convenient shopping experience.</p>
        <h3 className="mt-5 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Website Redesign and Optimization</h3>
        <p>Transform outdated websites into modern, responsive, and user-friendly digital platforms that better represent your business.</p>
        <h3 className="mt-5 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Landing Page Development</h3>
        <p>Create focused landing pages designed to communicate your offer, capture potential customers, and encourage visitors to take action.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">SEO-Friendly Website Design for Texas Businesses</h2>
        <p className="mt-5">A professional website should not only look good but also provide a strong foundation for search engine visibility.</p>
        <p className="mt-4">Our SEO-friendly website development approach incorporates essential on-page and technical SEO practices to help search engines understand your website and its content.</p>
        <p className="mt-4">We focus on:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>SEO-friendly website structure and navigation</li><li>Search engine-friendly URLs</li><li>Optimized title tags and meta descriptions</li><li>Proper H1, H2, and H3 heading structures</li><li>Image optimization and descriptive alt text</li><li>Mobile-friendly website layouts</li><li>Website loading speed and performance</li><li>Internal linking opportunities</li><li>Relevant service and location-based content</li><li>Structured data implementation where appropriate</li>
        </ul>
        <p className="mt-4">For businesses targeting customers in Texas, we also consider location-specific search intent when planning website content and service pages.</p>
        <p className="mt-4">Our goal is to build websites that provide a strong technical foundation for long-term organic search growth.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Website Design for Small Businesses in Texas</h2>
        <p className="mt-5">Small businesses need a professional online presence to compete, build trust, and reach more potential customers.</p>
        <p className="mt-4">Whether you operate a construction company, home service business, professional consultancy, retail store, restaurant, or another local business, a well-designed website can help customers discover your services and make informed decisions.</p>
        <p className="mt-4">At The Linkage Digital, we create business websites that focus on:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Establishing a professional brand identity</li><li>Showcasing your products and services</li><li>Building customer trust and credibility</li><li>Making contact information accessible</li><li>Generating inquiries and potential leads</li><li>Improving the overall customer experience</li>
        </ul>
        <p className="mt-4">We understand that every business has different requirements. That&apos;s why our website solutions are designed around your brand, industry, and objectives.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Serving Businesses Across Texas, USA</h2>
        <p className="mt-5">Texas has a diverse and competitive business landscape. From growing small businesses to established companies, having a professional website is essential for building visibility and connecting with customers.</p>
        <p className="mt-4">The Linkage Digital works with businesses looking to strengthen their digital presence across Texas, including:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Houston, Texas</li><li>Dallas, Texas</li><li>Austin, Texas</li><li>San Antonio, Texas</li><li>Fort Worth, Texas</li><li>Arlington, Texas</li><li>Plano, Texas</li><li>Frisco, Texas</li><li>El Paso, Texas</li><li>Corpus Christi, Texas</li>
        </ul>
        <p className="mt-4">Whether your business operates in a major Texas metropolitan area or a surrounding community, we can help you develop a website aligned with your brand and business objectives.</p>
        <p className="mt-4">Our website design and development solutions are suitable for businesses looking to reach local customers, expand their services, and establish a stronger online presence.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Why Choose The Linkage Digital for Web Design &amp; Development?</h2>
        <p className="mt-5">Choosing the right web design and development partner can make a significant difference in your online success.</p>
        <p className="mt-4">At The Linkage Digital, we combine creative thinking, technical development, and business-focused digital strategies to build websites that support your growth.</p>
        <p className="mt-4"><strong className="text-[#121212]">Custom-Built Solutions:</strong> We develop website experiences based on your business requirements rather than relying on generic designs.</p>
        <p className="mt-4"><strong className="text-[#121212]">Modern and Professional Design:</strong> Our designs focus on visual appeal, brand consistency, and intuitive navigation.</p>
        <p className="mt-4"><strong className="text-[#121212]">Mobile-First Experience:</strong> We prioritize responsive layouts that make your website accessible across different devices.</p>
        <p className="mt-4"><strong className="text-[#121212]">SEO-Friendly Structure:</strong> We incorporate essential SEO considerations into the website design and development process.</p>
        <p className="mt-4"><strong className="text-[#121212]">User-Focused Functionality:</strong> We organize website content and features to help visitors find information and take meaningful action.</p>
        <p className="mt-4"><strong className="text-[#121212]">Scalable Development:</strong> We consider your future business requirements when planning your website structure and functionality.</p>
      </section>

      <section>
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Our Web Design &amp; Development Process</h2>
        <p className="mt-5">We follow a structured approach to ensure that every website project aligns with your business objectives.</p>
        <ol className="mt-4 list-decimal space-y-4 pl-6">
          <li><strong className="text-[#121212]">Discovery and Planning:</strong> We understand your business, target audience, services, branding, and website requirements.</li>
          <li><strong className="text-[#121212]">Website Design:</strong> We create a professional website layout that reflects your brand identity and provides an intuitive user experience.</li>
          <li><strong className="text-[#121212]">Development:</strong> We transform the approved design into a functional, responsive website with the required features.</li>
          <li><strong className="text-[#121212]">SEO and Performance Optimization:</strong> We implement essential on-page SEO elements and review website performance, responsiveness, and functionality.</li>
          <li><strong className="text-[#121212]">Testing and Launch:</strong> We test the website across different devices and screen sizes before making it available to your audience.</li>
          <li><strong className="text-[#121212]">Ongoing Improvements:</strong> As your business evolves, your website can be updated and expanded to support new requirements.</li>
        </ol>
      </section>
    </div>
  );
}
