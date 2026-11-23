import { Link, Navigate, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import FAQAccordion from "../components/FAQAccordion";
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
    { q: "What is included in professional branding services?", a: "Professional branding services can include custom logo design, brand identity development, color palette selection, typography, brand guidelines, graphic design, and branded marketing materials. The exact deliverables depend on your business requirements and selected branding package." },
    { q: "What is the difference between logo design and brand identity?", a: "Logo design focuses on creating the visual symbol or wordmark that represents your business. Brand identity is a broader system that includes your logo, colors, typography, visual elements, design guidelines, and overall brand presentation." },
    { q: "How much does professional logo design cost?", a: "Logo design costs vary depending on the complexity of the project, creative requirements, number of concepts, revisions, and final deliverables. Contact The Linkage Digital for a quote based on your specific branding requirements." },
    { q: "How long does a branding project take?", a: "The timeline depends on the scope of the project. A basic logo design may take less time than a complete brand identity development project involving strategy, multiple design elements, and brand guidelines." },
    { q: "Can you create a complete brand identity for a new business?", a: "Yes. We provide branding solutions for startups and new businesses, including custom logo design, brand colors, typography, visual identity systems, and other creative assets needed to establish a professional brand." },
    { q: "Can you redesign my existing business logo?", a: "Yes. We can modernize existing logos while maintaining recognizable brand elements or develop a completely new visual direction based on your business goals." },
    { q: "Do you provide branding services for businesses in Texas?", a: "Yes. The Linkage Digital works with businesses targeting Texas markets, including Austin, Houston, Dallas, San Antonio, and surrounding areas. Our branding solutions can be delivered remotely, making it convenient for businesses across Texas to collaborate with our creative team." },
    { q: "Do you offer branding for small businesses and startups?", a: "Yes. We create branding solutions for startups, entrepreneurs, and small businesses across different industries. Our services help new businesses establish a recognizable and professional visual identity." },
    { q: "Will I receive the final logo files for different platforms?", a: "Final deliverables depend on the agreed project scope. Branding packages can include suitable logo formats for websites, social media, digital marketing, and print applications." },
    { q: "Can you help with website design after completing my branding?", a: "Yes. The Linkage Digital also provides website design and development services. We can help maintain a consistent visual identity across your website and other digital platforms." },
  ],
  "digital-marketing": [
    { q: "What services are included in digital marketing?", a: "Digital marketing can include social media marketing, paid advertising, Google Ads management, content marketing, email marketing, video marketing, and other online promotional activities. The right combination depends on your business objectives and target audience." },
    { q: "How can digital marketing help my business grow?", a: "Digital marketing helps businesses reach potential customers through online channels, increase brand awareness, promote products and services, generate leads, and build stronger customer relationships. A well-planned strategy can improve your ability to reach relevant audiences and measure marketing performance." },
    { q: "How much do professional digital marketing services cost?", a: "Digital marketing costs depend on the services required, campaign complexity, advertising budget, target audience, and project duration. Paid advertising budgets are generally separate from agency management fees. Contact The Linkage Digital for a customized proposal based on your requirements." },
    { q: "What is the difference between SEO and digital marketing?", a: "SEO focuses on improving a website's visibility in organic search engine results. Digital marketing is a broader field that includes SEO, social media marketing, paid advertising, email marketing, content marketing, and other online promotional strategies." },
    { q: "Can digital marketing help small businesses attract more customers?", a: "Yes. Digital marketing can help small businesses reach relevant audiences, promote their services, increase online visibility, and generate customer inquiries. The strategy should be aligned with the business's available resources, industry, and growth objectives." },
    { q: "Do you provide social media marketing and account management?", a: "Yes. Our social media services include content planning, creative development, branded graphics, promotional campaigns, and social media management for relevant platforms." },
    { q: "Do you manage Google Ads and paid advertising campaigns?", a: "Yes. We offer paid advertising solutions that can include Google Ads, search advertising, display campaigns, and social media advertising. Campaign scope and management depend on your business goals and requirements." },
    { q: "Do you provide digital marketing services for businesses in Texas?", a: "Yes. The Linkage Digital works with businesses targeting customers in Texas, including Austin, Houston, Dallas, San Antonio, Fort Worth, and surrounding areas. Our digital marketing services can be delivered remotely, allowing businesses across Texas to work with our team." },
    { q: "How long does it take to see results from digital marketing?", a: "Results depend on the marketing channel, competition, campaign budget, audience, and starting position. Paid advertising can generate campaign data and potential inquiries relatively quickly, while organic content and SEO typically require more time to build visibility. We recommend evaluating performance through meaningful business metrics." },
    { q: "Can digital marketing generate leads for service-based businesses?", a: "Yes. Digital marketing can help service businesses attract potential customers through targeted advertising, relevant content, social media campaigns, and conversion-focused landing pages. Lead quality depends on targeting, messaging, offers, and the overall customer journey." },
    { q: "Do I need a website for digital marketing?", a: "A website is not essential for every marketing activity, but it is a valuable foundation for most business marketing strategies. It provides a place to showcase services, establish credibility, collect inquiries, and convert visitors into potential customers." },
    { q: "How do I get started with digital marketing services?", a: "Start by identifying your business goals, target audience, services, and marketing challenges. Contact The Linkage Digital to discuss your requirements and determine which marketing channels and strategies are appropriate for your business." },
  ],
  "seo-optimization": [
    { q: "What are SEO services and how do they work?", a: "SEO services involve improving different aspects of a website to increase its visibility in organic search engine results. This includes keyword research, technical SEO, on-page optimization, content improvements, link building, and local SEO. The objective is to help search engines understand your website and connect it with relevant searches." },
    { q: "How long does SEO take to improve Google rankings?", a: "SEO results depend on your website's current condition, competition, industry, target keywords, and optimization efforts. Some technical improvements may produce early positive signals, while meaningful organic ranking improvements often require several months of consistent work. SEO is a long-term investment rather than an instant marketing solution." },
    { q: "How much do professional SEO services cost?", a: "SEO pricing depends on the size of your website, competition, target locations, number of keywords, and required optimization activities. A local business SEO campaign may have different requirements from a national e-commerce SEO campaign. Contact The Linkage Digital for a customized SEO proposal." },
    { q: "What is the difference between on-page SEO and off-page SEO?", a: "On-page SEO focuses on optimizing elements within your website, including content, headings, title tags, internal links, and page structure. Off-page SEO focuses on external signals such as relevant backlinks, brand mentions, and online authority. Both contribute to a broader SEO strategy." },
    { q: "What is local SEO and why is it important?", a: "Local SEO helps businesses improve their visibility in geographically relevant searches. It includes Google Business Profile optimization, local keyword research, location-specific website content, business information consistency, and relevant local authority signals. It is particularly useful for service businesses targeting customers in specific cities and regions." },
    { q: "Can SEO help my small business compete with larger companies?", a: "Yes. A focused SEO strategy can help small businesses target relevant search queries, improve their website content, address technical issues, and build visibility within specific service areas. Success depends on competition, relevance, website quality, and the strength of the overall SEO strategy." },
    { q: "Do you provide SEO services for businesses in Texas?", a: "Yes. The Linkage Digital provides SEO solutions for businesses targeting customers across Texas, including Austin, Houston, Dallas, San Antonio, Fort Worth, and surrounding communities. Our SEO strategies can incorporate local keyword targeting, location-specific content, technical optimization, and local search improvements." },
    { q: "What is included in a technical SEO audit?", a: "A technical SEO audit examines important website elements such as crawlability, indexing, XML sitemaps, robots.txt, redirects, canonical tags, mobile usability, website speed, Core Web Vitals, structured data, and internal linking. It helps identify issues that may affect search engine accessibility and website performance." },
    { q: "Can you improve my existing website's Google rankings?", a: "Yes. We can evaluate your existing website, identify optimization opportunities, and develop an SEO improvement strategy. This may include technical corrections, keyword targeting, content optimization, internal linking, and local SEO improvements." },
    { q: "Do you offer Google Business Profile optimization?", a: "Yes. Google Business Profile optimization can be included in our local SEO strategy where appropriate. This may involve reviewing business information, categories, services, business descriptions, photos, and customer review management practices." },
    { q: "Do you guarantee first-page Google rankings?", a: "No ethical SEO agency can guarantee specific Google rankings because search algorithms, competition, and search results are constantly changing. Our focus is on implementing proven SEO practices, improving website quality, and monitoring measurable search performance." },
    { q: "How can I check whether my SEO campaign is working?", a: "SEO performance can be evaluated using Google Search Console, Google Analytics, keyword tracking, organic traffic reports, indexing data, and website conversion measurements. These tools help identify changes in search visibility, traffic quality, and customer inquiries." },
    { q: "Do you provide SEO for e-commerce websites?", a: "Yes. E-commerce SEO can include product page optimization, category page improvements, product descriptions, technical SEO, structured data, internal linking, and keyword research to improve product visibility in organic search results." },
    { q: "How do I get started with SEO services?", a: "The first step is to evaluate your website, business goals, industry, target audience, and competition. Contact The Linkage Digital to discuss your SEO requirements and develop an optimization strategy aligned with your growth objectives." },
  ],
  "video-editing-motion": [
    { q: "What is included in professional video editing services?", a: "Professional video editing can include footage trimming, scene sequencing, transitions, color correction, color grading, audio synchronization, background music, sound effects, subtitles, text overlays, and final video rendering. The exact services depend on the project's creative requirements." },
    { q: "What are motion graphics and how are they used?", a: "Motion graphics are animated visual elements such as text, shapes, icons, illustrations, and graphic designs. Businesses use them in promotional videos, advertisements, presentations, logo animations, explainer videos, and social media content." },
    { q: "How much do professional video editing services cost?", a: "Video editing costs depend on video duration, footage quality, editing complexity, motion graphics requirements, revisions, and delivery formats. A simple social media video generally requires less work than a detailed commercial advertisement with advanced animations. Contact The Linkage Digital for a project-specific quote." },
    { q: "Do you provide social media video editing?", a: "Yes. Our social media video editing services can include Instagram Reels, TikTok videos, Facebook advertisements, YouTube Shorts, promotional clips, subtitles, and branded video content." },
    { q: "Can you create animated logos and motion graphics?", a: "Yes. We create animated logos, branded introductions, logo reveals, animated typography, motion graphics, and other visual elements that help businesses develop a more dynamic brand presentation." },
    { q: "Do you edit promotional and commercial videos?", a: "Yes. We provide promotional and commercial video editing solutions for businesses looking to advertise products, showcase services, introduce their brands, and support marketing campaigns." },
    { q: "Do you provide video editing services for businesses in Texas?", a: "Yes. The Linkage Digital provides video editing and motion graphics solutions for businesses targeting customers in Texas, including Austin, Houston, Dallas, San Antonio, and surrounding markets. Our services can be delivered remotely, allowing businesses throughout Texas to collaborate with our creative team." },
    { q: "Can you edit videos using footage that I provide?", a: "Yes. You can provide your existing video footage, images, audio, brand assets, and creative references. Our team can use these materials to develop an edited video based on your project requirements." },
    { q: "What video formats and dimensions can you deliver?", a: "Final delivery formats depend on your requirements. Common formats include MP4 and MOV, with dimensions suitable for horizontal, vertical, and square video placements. We can prepare content for websites, Instagram, Facebook, TikTok, YouTube, and other platforms." },
    { q: "How long does it take to edit a professional video?", a: "The timeline depends on the video's length, footage quality, number of scenes, motion graphics complexity, and revision requirements. Short-form videos generally require less editing time than longer promotional or commercial productions." },
    { q: "Can video editing help improve social media engagement?", a: "Engaging video content can help communicate messages more effectively and encourage audience interaction. Strong storytelling, clear visuals, relevant pacing, captions, and platform-appropriate formatting can contribute to a better viewing experience. Actual engagement depends on the audience, distribution, content, and platform." },
    { q: "Do you provide complete video production or only editing?", a: "Our video editing and motion graphics services focus on editing, animation, and visual content development. Availability of filming, on-location production, voice-over, and other production services should be confirmed according to the individual project requirements." },
    { q: "Can you create videos for advertisements and marketing campaigns?", a: "Yes. We can develop promotional video edits, product advertisements, social media advertising creatives, and branded visual content for digital marketing campaigns." },
    { q: "How can I get started with a video editing project?", a: "Share your video footage or creative concept, project objectives, preferred editing style, reference examples, and intended platform. The Linkage Digital can then review your requirements and discuss a suitable creative approach." },
  ],
} as const;

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  const seoService = service || services[0];
  const faqItems = SERVICE_FAQS[seoService.slug];
  const url = `${siteUrl}/services/${seoService.slug}`;
  const defaultSeoTitle = `${seoService.title} Services | The Linkage Digital`;
  const defaultSeoDescription = seoService.description;
  const defaultSeoKeywords = seoService.keywords;

  useSEO({
    title: seoService.slug === "web-design-development"
      ? "Professional Web Design & Development in Texas | The Linkage Digital"
      : seoService.slug === "branding-logo-design"
        ? "Creative Branding & Logo Design Services | The Linkage Digital"
        : seoService.slug === "digital-marketing"
          ? "Strategic Digital Marketing Services | The Linkage Digital"
          : seoService.slug === "seo-optimization"
            ? "Professional SEO Services | The Linkage Digital"
            : seoService.slug === "video-editing-motion"
              ? "Professional Video Editing & Motion Graphics | The Linkage Digital"
              : defaultSeoTitle,
    description: seoService.slug === "web-design-development"
      ? "Professional web design and development for Texas businesses. The Linkage Digital builds responsive, SEO-friendly websites for small businesses and growing brands."
      : seoService.slug === "branding-logo-design"
        ? "Custom branding and logo design services for businesses in Texas and across the United States. Build a memorable, consistent brand identity with The Linkage Digital."
        : seoService.slug === "digital-marketing"
          ? "Strategic digital marketing services for businesses in Texas and across the United States. Social media, paid advertising, content, email, and video marketing."
          : seoService.slug === "seo-optimization"
            ? "Professional SEO services for businesses across Texas and the United States. Improve technical health, local visibility, content relevance, and organic search performance with The Linkage Digital."
            : seoService.slug === "video-editing-motion"
              ? "Professional video editing and motion graphics for businesses across Texas and the United States. Create promotional videos, social media content, and branded visual stories with The Linkage Digital."
              : defaultSeoDescription,
    keywords: seoService.slug === "web-design-development"
      ? "web design Texas, website development Texas, small business web design, custom website development, SEO-friendly web design, website redesign"
      : seoService.slug === "branding-logo-design"
        ? "branding services Texas, logo design Texas, custom logo design, brand identity development, startup branding, business branding"
        : seoService.slug === "digital-marketing"
          ? "digital marketing services Texas, social media marketing, PPC management, Google Ads, content marketing, email marketing, small business marketing"
          : seoService.slug === "seo-optimization"
            ? "SEO services Texas, local SEO, technical SEO, on-page SEO, keyword research, SEO audit, e-commerce SEO, SEO agency"
            : seoService.slug === "video-editing-motion"
              ? "video editing services, motion graphics, promotional video editing, social media video, animated explainer videos, logo animation, Texas video editing"
              : defaultSeoKeywords,
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
        {service.slug === "branding-logo-design" && <BrandingContent />}
        {service.slug === "digital-marketing" && <DigitalMarketingContent />}
        {service.slug === "seo-optimization" && <SEOContent />}
        {service.slug === "video-editing-motion" && <VideoEditingContent />}
        <section className="bg-white py-10 md:py-20 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20 items-start">
              <div className="lg:sticky lg:top-24">
                <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.88] text-[clamp(2rem,5.5vw,5.5rem)] mb-6">
                  {service.slug === "web-design-development"
                    ? "Frequently Asked Questions About Web Design & Development in Texas"
                    : service.slug === "branding-logo-design"
                      ? "Frequently Asked Questions About Branding and Logo Design"
                      : service.slug === "digital-marketing"
                        ? "Frequently Asked Questions About Digital Marketing"
                        : service.slug === "seo-optimization"
                          ? "Frequently Asked Questions About SEO Services"
                          : service.slug === "video-editing-motion"
                            ? "Frequently Asked Questions About Video Editing and Motion Graphics"
                            : "Frequently Asked Questions"}
                </h2>
              </div>
              <FAQAccordion items={faqItems} />
            </div>
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
        ) : service.slug === "branding-logo-design" ? (
          <section className="bg-[#171717] py-14 md:py-20 px-6 text-center">
            <div className="max-w-[900px] mx-auto">
              <h2 className="font-teko font-bold text-white uppercase text-4xl md:text-5xl">Let&apos;s Create a Brand That Represents Your Business</h2>
              <p className="mt-6 text-white/80 leading-relaxed">Your brand deserves an identity that reflects the quality of your products, services, and vision.</p>
              <p className="mt-4 text-white/80 leading-relaxed">Whether you need a professional logo, a complete brand identity, or a creative refresh of your existing business image, The Linkage Digital is ready to help.</p>
              <p className="mt-4 text-white font-semibold leading-relaxed">Let&apos;s turn your ideas into a recognizable brand that makes a lasting impression.</p>
              <p className="mt-4 text-white/80 leading-relaxed">Contact our team to discuss your branding requirements and discover how we can help bring your brand vision to life.</p>
              <Link to="/contact" className="inline-flex mt-6 text-white border-b border-white pb-1 uppercase text-sm hover:text-[#dba8ef]">Start Your Branding Project With The Linkage Digital Today</Link>
            </div>
          </section>
        ) : service.slug === "digital-marketing" ? (
          <section className="bg-[#171717] py-14 md:py-20 px-6 text-center">
            <div className="max-w-[900px] mx-auto">
              <h2 className="font-teko font-bold text-white uppercase text-4xl md:text-5xl">Let&apos;s Grow Your Business With Digital Marketing</h2>
              <p className="mt-6 text-white/80 leading-relaxed">Your next customer could already be searching, browsing, or engaging with businesses online. The right marketing strategy can help your brand become more visible and create opportunities to connect with those customers.</p>
              <p className="mt-4 text-white/80 leading-relaxed">Whether you need social media management, paid advertising, content marketing, email campaigns, or a more comprehensive digital marketing strategy, The Linkage Digital is ready to help.</p>
              <p className="mt-4 text-white font-semibold leading-relaxed">Let&apos;s create a marketing strategy that connects your business with the right audience and supports your long-term goals.</p>
              <p className="mt-4 text-white/80 leading-relaxed">Contact our team to discuss your marketing objectives and discover the right digital marketing solutions for your business.</p>
              <Link to="/contact" className="inline-flex mt-6 text-white border-b border-white pb-1 uppercase text-sm hover:text-[#dba8ef]">Start Growing Your Business With The Linkage Digital Today</Link>
            </div>
          </section>
        ) : service.slug === "seo-optimization" ? (
          <section className="bg-[#171717] py-14 md:py-20 px-6 text-center">
            <div className="max-w-[900px] mx-auto">
              <h2 className="font-teko font-bold text-white uppercase text-4xl md:text-5xl">Grow Your Online Visibility With Professional SEO</h2>
              <p className="mt-6 text-white/80 leading-relaxed">Your potential customers are already searching for products and services like yours. The opportunity is to make sure your business has the search visibility and website experience needed to reach them.</p>
              <p className="mt-4 text-white/80 leading-relaxed">Whether you need technical SEO improvements, local SEO, keyword research, content optimization, or a comprehensive search engine optimization strategy, The Linkage Digital is ready to help.</p>
              <p className="mt-4 text-white font-semibold leading-relaxed">Let&apos;s build an SEO strategy that improves your website&apos;s visibility, attracts relevant visitors, and creates opportunities for sustainable business growth.</p>
              <p className="mt-4 text-white/80 leading-relaxed">Contact our team to discuss your SEO goals and discover the right optimization strategy for your business.</p>
              <Link to="/contact" className="inline-flex mt-6 text-white border-b border-white pb-1 uppercase text-sm hover:text-[#dba8ef]">Start Improving Your Search Rankings With The Linkage Digital Today</Link>
            </div>
          </section>
        ) : service.slug === "video-editing-motion" ? (
          <section className="bg-[#171717] py-14 md:py-20 px-6 text-center">
            <div className="max-w-[900px] mx-auto">
              <h2 className="font-teko font-bold text-white uppercase text-4xl md:text-5xl">Let&apos;s Create Videos That Make Your Brand Stand Out</h2>
              <p className="mt-6 text-white/80 leading-relaxed">Your brand has a story worth sharing. The right video can help you communicate that story, showcase your products, and connect with your audience through engaging visual content.</p>
              <p className="mt-4 text-white/80 leading-relaxed">Whether you need promotional video editing, social media reels, motion graphics, animated explainers, product videos, or branded commercial content, The Linkage Digital is ready to help.</p>
              <p className="mt-4 text-white font-semibold leading-relaxed">Let&apos;s turn your creative ideas into professional video content that captures attention and supports your marketing goals.</p>
              <p className="mt-4 text-white/80 leading-relaxed">Contact our team to discuss your creative vision and discover how our video editing and motion graphics services can help bring it to life.</p>
              <Link to="/contact" className="inline-flex mt-6 text-white border-b border-white pb-1 uppercase text-sm hover:text-[#dba8ef]">Start Your Video Editing Project With The Linkage Digital Today</Link>
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

function BrandingContent() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-14 md:py-20 text-[#555] leading-relaxed">
      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Creative Branding &amp; Logo Design Services That Make Your Business Stand Out</h2>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-3xl md:text-4xl leading-none">Build a Powerful Brand Identity That People Remember</h3>
        <p className="mt-5">Your brand is more than a logo. It is the visual identity, personality, and impression that customers associate with your business.</p>
        <p className="mt-4">At <strong>The Linkage Digital</strong>, we provide professional branding and logo design services that help businesses establish a distinctive identity, build customer recognition, and create a consistent presence across digital and physical platforms.</p>
        <p className="mt-4">Whether you&apos;re launching a startup, growing an established company, or refreshing an outdated brand, our creative team develops custom branding solutions that reflect your vision and connect with your target audience.</p>
        <p className="mt-4">From logo creation and brand strategy to color palettes, typography, and complete visual identity systems, we bring every element together to create a brand that communicates professionalism and builds lasting recognition.</p>
        <p className="mt-4">We work with businesses across the United States, including companies in Austin, Houston, Dallas, San Antonio, and other Texas markets, helping them develop memorable brand identities that stand out in competitive industries.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Complete Branding Solutions for Every Business</h2>
        <p className="mt-5">Every successful brand starts with a clear identity. Your visual presentation should communicate what your business represents and create a consistent experience wherever customers interact with it.</p>
        <p className="mt-4">Our branding services combine creative design with strategic thinking to develop identities that align with your business objectives.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Custom Logo Design</h3>
        <p className="mt-2">Your logo is one of the most recognizable elements of your business. We create custom logos that communicate your brand personality and make a lasting impression.</p>
        <p className="mt-4">Our logo design services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Modern and minimalist logo designs</li><li>Professional business logos</li><li>Corporate logo design</li><li>Creative and abstract logo concepts</li><li>Wordmark and lettermark logos</li><li>Icon-based logo designs</li><li>Logo redesign and modernization</li><li>Scalable logo variations for digital and print use</li>
        </ul>
        <p className="mt-4">Whether you need a new logo for a startup or a complete redesign for an established company, we create distinctive visual marks tailored to your business.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Brand Identity Development</h3>
        <p className="mt-2">A strong brand requires more than a standalone logo. It needs a cohesive visual system that maintains consistency across every customer touchpoint.</p>
        <p className="mt-4">Our brand identity development services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Brand color palette selection</li><li>Typography and font systems</li><li>Logo variations and brand marks</li><li>Visual identity development</li><li>Brand patterns and graphic elements</li><li>Brand guidelines and usage standards</li><li>Consistent digital and print branding</li>
        </ul>
        <p className="mt-4">We build complete visual identity systems that help businesses maintain a recognizable and professional appearance.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Brand Strategy and Creative Direction</h3>
        <p className="mt-2">Effective branding starts with understanding your business, audience, and market position.</p>
        <p className="mt-4">Our creative process considers your business personality, target customers, industry, and competitive landscape to develop a visual direction that communicates your unique value.</p>
        <p className="mt-4">We help define:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Brand positioning</li><li>Brand personality</li><li>Visual direction</li><li>Creative concepts</li><li>Brand messaging direction</li><li>Audience-focused design decisions</li>
        </ul>
        <p className="mt-4">This strategic foundation helps ensure that your brand communicates a consistent message and creates a meaningful connection with customers.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Business and Corporate Branding</h3>
        <p className="mt-2">Professional branding plays an important role in establishing credibility and creating a recognizable business presence.</p>
        <p className="mt-4">We develop branding solutions for businesses across different industries, including construction, real estate, technology, restaurants, retail, professional services, and home service companies.</p>
        <p className="mt-4">Our corporate and business branding solutions help companies create a consistent visual identity across their websites, marketing materials, business documents, and customer communications.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Social Media Branding and Graphic Design</h3>
        <p className="mt-2">Your brand should look consistent wherever customers discover your business.</p>
        <p className="mt-4">We create branded visual assets that help businesses maintain a cohesive identity across social media and digital marketing platforms.</p>
        <p className="mt-4">Our creative services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Social media post designs</li><li>Instagram and Facebook branding</li><li>Promotional graphics</li><li>Digital advertising creatives</li><li>Business banners and covers</li><li>Branded marketing templates</li><li>Promotional campaign designs</li>
        </ul>
        <p className="mt-4">From social media profiles to advertising campaigns, we help your business maintain a professional and recognizable appearance.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Brand Refresh and Rebranding</h3>
        <p className="mt-2">As businesses evolve, their visual identities sometimes need to evolve too.</p>
        <p className="mt-4">If your existing logo looks outdated, your branding lacks consistency, or your business has moved in a new direction, we can help refresh your identity.</p>
        <p className="mt-4">Our rebranding solutions focus on modernizing your visual presentation while preserving the recognizable elements that make your business unique.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Branding That Helps Your Business Stand Out</h2>
        <p className="mt-5">In competitive markets, customers often encounter several businesses offering similar products or services. A distinctive brand identity helps communicate why your business deserves their attention.</p>
        <p className="mt-4">Our approach to branding focuses on creating visual identities that are:</p>
        <p className="mt-4"><strong className="text-[#121212]">Memorable:</strong> Distinctive logo designs and visual elements that customers can recognize.</p>
        <p className="mt-4"><strong className="text-[#121212]">Consistent:</strong> A unified appearance across websites, social media, advertising, and printed materials.</p>
        <p className="mt-4"><strong className="text-[#121212]">Professional:</strong> Carefully selected typography, colors, and design elements that establish credibility.</p>
        <p className="mt-4"><strong className="text-[#121212]">Relevant:</strong> Branding that reflects your industry, target audience, and business personality.</p>
        <p className="mt-4"><strong className="text-[#121212]">Adaptable:</strong> Flexible visual assets that work across different platforms and applications.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Professional Branding Services for Businesses Across Texas</h2>
        <p className="mt-5">Texas is home to a diverse business environment, with companies competing across industries such as construction, real estate, technology, hospitality, retail, and professional services.</p>
        <p className="mt-4">For businesses operating in this competitive market, a recognizable brand identity can help create a stronger first impression and establish customer trust.</p>
        <p className="mt-4">The Linkage Digital provides branding and logo design solutions for businesses looking to strengthen their visual presence in Texas and beyond.</p>
        <p className="mt-4">We work with businesses and entrepreneurs targeting markets such as:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Austin, TX</li><li>Houston, TX</li><li>Dallas, TX</li><li>San Antonio, TX</li><li>Fort Worth, TX</li><li>Arlington, TX</li><li>Plano, TX</li><li>Frisco, TX</li><li>El Paso, TX</li><li>Corpus Christi, TX</li>
        </ul>
        <p className="mt-4">Whether you&apos;re establishing a new business in Austin, refreshing a company identity in Dallas, or launching a new brand in Houston, our creative team can help develop a visual identity aligned with your business goals.</p>
        <p className="mt-4">Our branding solutions are designed to help businesses establish a consistent image, communicate their value, and create a stronger presence in their respective markets.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Branding for Startups and Small Businesses</h2>
        <p className="mt-5">Launching a new business requires more than an idea. You need an identity that helps customers recognize your company and understand what it offers.</p>
        <p className="mt-4">We help startups, entrepreneurs, and small businesses establish their visual identity through professional logo design and complete branding solutions.</p>
        <p className="mt-4">Our startup branding services can include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Custom startup logo design</li><li>Business name and visual identity direction</li><li>Brand color and typography selection</li><li>Brand identity development</li><li>Social media branding</li><li>Business stationery design</li><li>Brand guidelines</li><li>Website and digital brand consistency</li>
        </ul>
        <p className="mt-4">Whether you&apos;re starting a local service company, opening a restaurant, launching an online store, or introducing a new professional brand, we help you establish a strong visual foundation.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Our Creative Branding Process</h2>
        <p className="mt-5">We believe great branding comes from combining creative ideas with a structured design process.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">1. Discovery and Brand Understanding</h3>
        <p className="mt-2">We learn about your business, industry, target audience, competitors, and overall vision to understand what makes your brand different.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">2. Research and Creative Direction</h3>
        <p className="mt-2">We explore visual references, design styles, industry trends, and creative concepts to establish a direction that aligns with your business identity.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">3. Logo and Identity Design</h3>
        <p className="mt-2">Our designers develop custom logo concepts and visual identity elements, considering typography, colors, proportions, and practical applications.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">4. Feedback and Refinement</h3>
        <p className="mt-2">We review the creative concepts with you, gather feedback, and refine the selected direction to better match your expectations.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">5. Final Brand Assets</h3>
        <p className="mt-2">Once approved, we prepare the final branding assets in suitable formats for digital and print applications, along with agreed brand guidelines.</p>
      </section>

      <section>
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Why Choose The Linkage Digital?</h2>
        <p className="mt-5">Choosing the right creative partner is important when building an identity that represents your business.</p>
        <p className="mt-4">At The Linkage Digital, we combine creative design, digital expertise, and business-focused thinking to deliver branding solutions that go beyond aesthetics.</p>
        <p className="mt-4"><strong className="text-[#121212]">Custom Creative Designs:</strong> We develop visual identities tailored to your business instead of relying on generic logo templates.</p>
        <p className="mt-4"><strong className="text-[#121212]">Strategic Brand Thinking:</strong> We consider your audience, industry, and business objectives when developing your visual direction.</p>
        <p className="mt-4"><strong className="text-[#121212]">Consistent Brand Identity:</strong> We create cohesive design systems that can be applied across your website, social media, and marketing materials.</p>
        <p className="mt-4"><strong className="text-[#121212]">Versatile Brand Assets:</strong> We consider how your logo and visual identity will appear across different sizes, platforms, and applications.</p>
        <p className="mt-4"><strong className="text-[#121212]">Business-Focused Approach:</strong> Our goal is to create branding that supports your business image and long-term growth.</p>
        <p className="mt-4"><strong className="text-[#121212]">Complete Digital Capabilities:</strong> Alongside branding, our team offers web design, development, SEO, and digital marketing services to help businesses maintain a consistent digital presence.</p>
      </section>
    </div>
  );
}

function DigitalMarketingContent() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-14 md:py-20 text-[#555] leading-relaxed">
      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Strategic Digital Marketing Services That Drive Business Growth</h2>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-3xl md:text-4xl leading-none">Build Your Online Presence, Reach More Customers, and Grow Your Business</h3>
        <p className="mt-5">In today&apos;s competitive digital landscape, having an online presence is only the beginning. Businesses need the right marketing strategies to attract potential customers, build brand awareness, and turn online interactions into meaningful business opportunities.</p>
        <p className="mt-4">At <strong>The Linkage Digital</strong>, we provide professional digital marketing services designed to help businesses strengthen their online presence, connect with their target audiences, and achieve sustainable growth.</p>
        <p className="mt-4">Our approach combines creative marketing, audience research, strategic advertising, social media management, and engaging content to help your business reach the right people at the right time.</p>
        <p className="mt-4">Whether you&apos;re a startup looking to establish your brand, a small business seeking more customers, or an established company aiming to expand your digital reach, we develop marketing strategies aligned with your business objectives.</p>
        <p className="mt-4">We work with businesses across the United States, including companies in Austin, Houston, Dallas, San Antonio, and other Texas markets, helping brands build stronger digital visibility and reach their ideal customers.</p>
        <p className="mt-4">From social media campaigns and paid advertising to content creation and email marketing, we bring the essential elements of digital marketing together to support your business growth.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Complete Digital Marketing Solutions for Your Business</h2>
        <p className="mt-5">Every business has different marketing goals, customer audiences, and competitive challenges. An effective digital marketing strategy should reflect these differences rather than rely on a one-size-fits-all approach.</p>
        <p className="mt-4">At The Linkage Digital, we combine different digital marketing channels to help businesses increase visibility, strengthen customer engagement, and generate opportunities.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Social Media Marketing</h3>
        <p className="mt-2">Social media platforms provide businesses with valuable opportunities to connect with customers, showcase their products and services, and build brand recognition.</p>
        <p className="mt-4">Our social media marketing services focus on developing a consistent online presence through strategic content, creative visuals, and audience engagement.</p>
        <p className="mt-4">Our services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Social media strategy and planning</li><li>Facebook and Instagram marketing</li><li>Social media content creation</li><li>Branded promotional graphics</li><li>Social media account management</li><li>Audience engagement strategies</li><li>Social media advertising</li><li>Campaign performance monitoring</li>
        </ul>
        <p className="mt-4">We help businesses create meaningful social media experiences that communicate their brand message and encourage potential customers to engage.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Paid Advertising and PPC Campaign Management</h3>
        <p className="mt-2">Paid advertising allows businesses to reach targeted audiences and promote their products or services through strategic advertising campaigns.</p>
        <p className="mt-4">Our PPC and paid advertising solutions focus on reaching relevant audiences, improving campaign efficiency, and generating valuable customer inquiries.</p>
        <p className="mt-4">Our advertising services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Google Ads campaign management</li><li>Search advertising</li><li>Display advertising</li><li>Facebook and Instagram advertising</li><li>Audience targeting</li><li>Advertising creative development</li><li>Campaign optimization</li><li>Conversion tracking and reporting</li>
        </ul>
        <p className="mt-4">Whether your objective is to generate leads, increase website traffic, or promote a specific offer, we develop advertising campaigns around your marketing goals.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Google Ads and Search Engine Marketing</h3>
        <p className="mt-2">Search engine advertising can help businesses appear in front of customers who are actively searching for relevant products and services.</p>
        <p className="mt-4">We help businesses plan and manage paid search campaigns by focusing on relevant search terms, audience intent, advertising messages, and landing page alignment.</p>
        <p className="mt-4">Our Google Ads approach includes keyword research, campaign structure, ad copy development, audience targeting, budget management, and performance monitoring.</p>
        <p className="mt-4">For businesses competing in Texas markets, campaigns can be structured around relevant service areas and customer search behavior, including searches from Austin, Dallas, Houston, and surrounding communities.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Content Marketing</h3>
        <p className="mt-2">High-quality content helps businesses communicate their expertise, answer customer questions, and build meaningful relationships with their audiences.</p>
        <p className="mt-4">Our content marketing services focus on developing relevant and engaging content that supports your overall marketing strategy.</p>
        <p className="mt-4">Our content solutions include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Website content development</li><li>Blog and article writing</li><li>Social media content</li><li>Promotional marketing copy</li><li>Brand storytelling</li><li>Educational content</li><li>Campaign messaging</li><li>Content planning and strategy</li>
        </ul>
        <p className="mt-4">We create content that reflects your brand voice, communicates your value, and supports your wider digital marketing objectives.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Email Marketing</h3>
        <p className="mt-2">Email marketing provides a direct communication channel between your business and its existing or potential customers.</p>
        <p className="mt-4">We help businesses develop email marketing campaigns designed to share valuable information, promote offers, nurture leads, and maintain customer relationships.</p>
        <p className="mt-4">Our email marketing solutions include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Promotional email campaigns</li><li>Business newsletters</li><li>Lead nurturing campaigns</li><li>Customer engagement emails</li><li>Email campaign planning</li><li>Email design and copywriting</li><li>Campaign performance analysis</li>
        </ul>
        <p className="mt-4">From customer announcements to promotional campaigns, we help businesses use email as part of a connected marketing strategy.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Video Marketing and Creative Advertising</h3>
        <p className="mt-2">Video content is an effective way to communicate your brand message, showcase products, explain services, and capture audience attention.</p>
        <p className="mt-4">Our video marketing and creative services help businesses produce engaging visual content for digital platforms and advertising campaigns.</p>
        <p className="mt-4">Our creative solutions include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Promotional video editing</li><li>Social media video content</li><li>Short-form marketing videos</li><li>Product and service promotional videos</li><li>Motion graphics</li><li>Branded advertising creatives</li><li>Video content for marketing campaigns</li>
        </ul>
        <p className="mt-4">We focus on creating visual content that aligns with your brand identity and supports your campaign objectives.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Strategic Online Marketing for Small Businesses</h2>
        <p className="mt-5">Small businesses need marketing strategies that make the best use of their available resources while helping them compete in an increasingly digital marketplace.</p>
        <p className="mt-4">A strong digital marketing presence can help small businesses reach new audiences, communicate their services, and generate more customer inquiries.</p>
        <p className="mt-4">At The Linkage Digital, we develop digital marketing solutions suitable for different business sizes and industries.</p>
        <p className="mt-4">Our approach focuses on:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Building brand awareness</li><li>Reaching relevant audiences</li><li>Increasing website traffic</li><li>Generating qualified leads</li><li>Improving customer engagement</li><li>Promoting products and services</li><li>Strengthening online credibility</li><li>Supporting long-term business growth</li>
        </ul>
        <p className="mt-4">Whether you operate a construction company, home service business, restaurant, real estate company, retail store, or professional service business, we help develop marketing strategies around your business requirements.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Local Digital Marketing Strategies for Business Visibility</h2>
        <p className="mt-5">For businesses that depend on customers in specific geographical areas, local digital marketing plays an important role in reaching the right audience.</p>
        <p className="mt-4">Location-based marketing helps businesses connect with people searching for relevant products and services within their service areas.</p>
        <p className="mt-4">The Linkage Digital helps businesses targeting customers across Texas develop digital marketing campaigns that reflect their geographical markets and customer interests.</p>
        <p className="mt-4">We incorporate location relevance into marketing strategies for businesses targeting areas such as:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Austin, Texas</li><li>Houston, Texas</li><li>Dallas, Texas</li><li>San Antonio, Texas</li><li>Fort Worth, Texas</li><li>Arlington, Texas</li><li>Plano, Texas</li><li>Frisco, Texas</li><li>El Paso, Texas</li><li>Corpus Christi, Texas</li>
        </ul>
        <p className="mt-4">For example, a home service company targeting customers in Austin may benefit from location-relevant advertising, service-specific landing pages, and content designed around local search intent.</p>
        <p className="mt-4">Similarly, businesses operating in Houston, Dallas, or San Antonio can develop campaigns that reflect the needs and search behavior of their respective audiences.</p>
        <p className="mt-4">Our goal is to help businesses connect their marketing activities with the locations and customers that matter to their growth.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Data-Driven Marketing Strategies and Campaign Optimization</h2>
        <p className="mt-5">Successful digital marketing requires more than launching campaigns and publishing content. It involves understanding audience behavior, evaluating campaign performance, and identifying opportunities for improvement.</p>
        <p className="mt-4">We take a performance-focused approach to digital marketing by considering relevant campaign data and business objectives.</p>
        <p className="mt-4">Our optimization process can include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Audience and market research</li><li>Marketing campaign analysis</li><li>Advertising performance monitoring</li><li>Website traffic evaluation</li><li>Lead generation tracking</li><li>Content engagement analysis</li><li>Conversion measurement</li><li>Campaign adjustments and improvements</li>
        </ul>
        <p className="mt-4">By evaluating how different marketing activities perform, we can identify areas that need improvement and make more informed marketing decisions.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Why Choose The Linkage Digital?</h2>
        <p className="mt-5">Choosing a digital marketing partner is an important decision for any business. You need a team that understands your objectives, communicates clearly, and develops strategies around your actual business requirements.</p>
        <p className="mt-4">At The Linkage Digital, we combine creative capabilities, technical knowledge, and marketing strategy to help businesses strengthen their digital presence.</p>
        <p className="mt-4"><strong className="text-[#121212]">Customized Marketing Strategies:</strong> We consider your industry, audience, competition, and business objectives when developing marketing campaigns.</p>
        <p className="mt-4"><strong className="text-[#121212]">Creative Content and Campaigns:</strong> We combine visual creativity and strategic messaging to help your business communicate effectively.</p>
        <p className="mt-4"><strong className="text-[#121212]">Multiple Marketing Channels:</strong> We bring social media, advertising, email, content, and video marketing together where they support your goals.</p>
        <p className="mt-4"><strong className="text-[#121212]">Audience-Focused Marketing:</strong> We prioritize reaching relevant audiences rather than focusing on unnecessary impressions and traffic.</p>
        <p className="mt-4"><strong className="text-[#121212]">Performance Monitoring:</strong> We evaluate campaign performance to identify opportunities for improvement and better marketing decisions.</p>
        <p className="mt-4"><strong className="text-[#121212]">Integrated Digital Expertise:</strong> Alongside marketing, we offer website design, development, branding, and SEO services to support a consistent digital presence.</p>
      </section>

      <section>
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Our Digital Marketing Process</h2>
        <p className="mt-5">We follow a structured process to ensure that marketing activities are aligned with your business goals.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">1. Business Discovery and Research</h3>
        <p className="mt-2">We learn about your business, products, services, target audience, competitors, and marketing objectives.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">2. Marketing Strategy Development</h3>
        <p className="mt-2">We identify suitable marketing channels, campaign opportunities, audience segments, and messaging strategies based on your requirements.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">3. Creative Development and Campaign Setup</h3>
        <p className="mt-2">Our team develops the required content, advertising creatives, campaign structure, and marketing materials.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">4. Campaign Launch and Management</h3>
        <p className="mt-2">We launch the agreed marketing activities, monitor campaign delivery, and manage the relevant digital channels.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">5. Performance Analysis and Optimization</h3>
        <p className="mt-2">We review available campaign data, evaluate performance, and identify opportunities to improve targeting, content, and campaign efficiency.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">6. Reporting and Continued Growth</h3>
        <p className="mt-2">We use campaign insights and business feedback to guide future marketing activities and support ongoing improvements.</p>
      </section>
    </div>
  );
}

function SEOContent() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-14 md:py-20 text-[#555] leading-relaxed">
      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Professional SEO Services That Improve Rankings and Drive Organic Growth</h2>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-3xl md:text-4xl leading-none">Get Found on Google, Attract More Customers, and Grow Your Business</h3>
        <p className="mt-5">Having a website is only the first step toward building a successful online presence. To attract potential customers, your website needs to appear when people search for the products and services your business offers.</p>
        <p className="mt-4">At <strong>The Linkage Digital</strong>, we provide professional search engine optimization services designed to improve website visibility, strengthen organic search performance, and help businesses attract relevant visitors from search engines.</p>
        <p className="mt-4">Our SEO strategies combine technical optimization, keyword research, on-page SEO, content development, local SEO, and website performance improvements to build a stronger foundation for long-term search visibility.</p>
        <p className="mt-4">Whether you&apos;re a small business looking to attract local customers, an established company competing for valuable industry keywords, or an e-commerce brand looking to increase organic sales, we develop SEO strategies around your business objectives.</p>
        <p className="mt-4">We work with businesses targeting customers across the United States, including Austin, Houston, Dallas, San Antonio, and other Texas markets, helping them improve their search presence and connect with relevant audiences.</p>
        <p className="mt-4">Our goal is simple: help your business become more discoverable online, attract qualified website traffic, and turn search visibility into meaningful business opportunities.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Comprehensive Search Engine Optimization Solutions</h2>
        <p className="mt-5">SEO involves multiple interconnected elements that influence how search engines discover, understand, and evaluate your website.</p>
        <p className="mt-4">A successful SEO strategy requires more than adding keywords to website content. It involves improving technical performance, creating useful content, building relevant website authority, and ensuring that each page addresses the search intent of its target audience.</p>
        <p className="mt-4">Our SEO services focus on these essential areas to help businesses establish stronger organic search visibility.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Technical SEO Optimization</h3>
        <p className="mt-2">Technical SEO focuses on improving the underlying structure and performance of your website so that search engines can crawl, understand, and index your content effectively.</p>
        <p className="mt-4">Technical issues can prevent important pages from appearing in search results, even when the content itself is relevant.</p>
        <p className="mt-4">Our technical SEO services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Website technical SEO audits</li><li>Website crawlability and indexability analysis</li><li>XML sitemap optimization</li><li>Robots.txt configuration and review</li><li>Website speed optimization</li><li>Core Web Vitals improvements</li><li>Mobile usability optimization</li><li>Canonical tag implementation</li><li>Redirect and broken link analysis</li><li>Duplicate content identification</li><li>Structured data and schema markup</li><li>HTTPS and website security checks</li>
        </ul>
        <p className="mt-4">We identify technical problems that may affect search visibility and prioritize improvements based on their potential impact on website performance.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">On-Page SEO Optimization</h3>
        <p className="mt-2">On-page SEO helps search engines understand what each website page is about while making the content more relevant and useful to visitors.</p>
        <p className="mt-4">Our on-page SEO services focus on optimizing individual pages around relevant search terms and customer intent.</p>
        <p className="mt-4">Our optimization process includes:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>SEO title tag optimization</li><li>Meta description development</li><li>H1, H2, and H3 heading optimization</li><li>Keyword placement and content structure</li><li>Search-intent analysis</li><li>Image optimization and ALT attributes</li><li>Internal linking optimization</li><li>URL structure improvements</li><li>Content quality and relevance improvements</li><li>Conversion-focused content organization</li>
        </ul>
        <p className="mt-4">We make sure that your website pages communicate their purpose clearly and provide valuable information to users searching for your services.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Keyword Research and Search Intent Analysis</h3>
        <p className="mt-2">Targeting the right keywords is essential for attracting visitors who are genuinely interested in your products or services.</p>
        <p className="mt-4">Our keyword research process identifies search terms relevant to your business, industry, audience, and geographical market.</p>
        <p className="mt-4">We evaluate:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Primary and secondary keywords</li><li>Commercial search intent</li><li>Transactional search queries</li><li>Informational search opportunities</li><li>Long-tail keyword variations</li><li>Competitor keyword gaps</li><li>Local and geographical search terms</li><li>Keyword difficulty and ranking opportunities</li>
        </ul>
        <p className="mt-4">For businesses targeting customers in Texas, we also consider location-specific searches such as SEO services in Austin, SEO companies in Dallas, and local SEO agencies in Houston.</p>
        <p className="mt-4">Our goal is to develop a keyword strategy that connects relevant search queries with the most appropriate pages on your website.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Local SEO Optimization</h3>
        <p className="mt-2">Local SEO helps businesses improve their visibility when customers search for relevant services within a specific geographical area.</p>
        <p className="mt-4">For service-based businesses, local search visibility can be particularly valuable because customers often search for providers within their city or surrounding communities.</p>
        <p className="mt-4">Our local SEO services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Google Business Profile optimization</li><li>Local keyword research</li><li>Location-specific website content</li><li>Business information consistency</li><li>Local citation management</li><li>Local landing page optimization</li><li>Review strategy recommendations</li><li>Local competitor analysis</li><li>Local structured data implementation</li><li>Relevant local link-building opportunities</li>
        </ul>
        <p className="mt-4">We help businesses targeting Texas customers strengthen their geographical relevance through optimized website content and accurate business information.</p>
        <p className="mt-4">Whether your business serves customers in Austin, Dallas, Houston, San Antonio, Fort Worth, or nearby communities, we can develop location-focused SEO strategies aligned with your actual service areas.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Off-Page SEO and Link Building</h3>
        <p className="mt-2">Off-page SEO focuses on improving your website&apos;s authority and credibility through relevant external signals.</p>
        <p className="mt-4">Search engines consider different signals when evaluating the relevance and trustworthiness of websites. Relevant, quality backlinks can contribute to your website&apos;s authority and organic search performance.</p>
        <p className="mt-4">Our off-page SEO activities can include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Competitor backlink analysis</li><li>Backlink profile evaluation</li><li>Relevant website link opportunities</li><li>Industry-specific outreach</li><li>Digital PR opportunities</li><li>Brand mention opportunities</li><li>Link quality monitoring</li><li>Toxic or suspicious backlink investigation</li>
        </ul>
        <p className="mt-4">We prioritize relevance and quality rather than pursuing large quantities of low-quality backlinks.</p>
        <p className="mt-4">Our objective is to help develop a natural and relevant backlink profile that supports your website&apos;s long-term SEO strategy.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">SEO Content Optimization</h3>
        <p className="mt-2">High-quality website content helps search engines understand your expertise while providing visitors with useful answers to their questions.</p>
        <p className="mt-4">Our content optimization services focus on developing and improving pages that address relevant search queries and customer needs.</p>
        <p className="mt-4">Our content solutions include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>SEO website content writing</li><li>Service page optimization</li><li>Location page content development</li><li>Blog and article optimization</li><li>Content gap analysis</li><li>Keyword-focused content planning</li><li>Search-intent-based content improvements</li><li>Existing content updates</li><li>FAQ content development</li><li>Internal content linking</li>
        </ul>
        <p className="mt-4">We focus on creating informative, relevant content that naturally incorporates target keywords without unnecessary repetition.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">E-Commerce SEO</h3>
        <p className="mt-2">Online stores require a different SEO approach because product pages, category pages, filters, and large inventories can create unique optimization challenges.</p>
        <p className="mt-4">Our e-commerce SEO solutions focus on improving product discovery and organic visibility.</p>
        <p className="mt-4">Our services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Product page SEO</li><li>Product title and description optimization</li><li>Category page optimization</li><li>E-commerce technical SEO</li><li>Product image optimization</li><li>Internal linking improvements</li><li>Product structured data</li><li>Duplicate product URL analysis</li><li>Organic search opportunity research</li>
        </ul>
        <p className="mt-4">Whether your store operates on Shopify, WooCommerce, or another platform, we can help improve its search engine foundation and product visibility.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">SEO Strategies for Small Businesses and Growing Companies</h2>
        <p className="mt-5">Small businesses often compete against larger companies with established websites and stronger online authority.</p>
        <p className="mt-4">A focused SEO strategy can help smaller businesses identify relevant search opportunities, improve their website content, and build visibility for the services they offer.</p>
        <p className="mt-4">At The Linkage Digital, we develop SEO solutions for businesses across different industries, including:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Construction and contracting companies</li><li>Home improvement and maintenance services</li><li>Landscaping and tree service businesses</li><li>Real estate companies</li><li>Professional service providers</li><li>Restaurants and hospitality businesses</li><li>Retail and e-commerce stores</li><li>Automotive and detailing services</li><li>Technology and consulting companies</li>
        </ul>
        <p className="mt-4">For businesses targeting customers in Texas, we consider local search intent, relevant service-area keywords, and geographical content opportunities.</p>
        <p className="mt-4">Our focus is on attracting visitors who are more likely to become customers rather than simply increasing website traffic.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Local Search Visibility for Businesses Across Texas</h2>
        <p className="mt-5">When potential customers search for a service, they often include a city, location, or nearby area in their search query.</p>
        <p className="mt-4">For example, someone searching for a contractor may use phrases such as &quot;construction company in Austin&quot; or &quot;roofing services in Dallas.&quot;</p>
        <p className="mt-4">These location-based searches create opportunities for businesses to connect with customers who are actively looking for relevant services.</p>
        <p className="mt-4">The Linkage Digital helps businesses strengthen their local search presence through geographical keyword research, local website optimization, and location-focused content strategies.</p>
        <p className="mt-4">We support businesses targeting markets such as:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Austin, Texas</li><li>Houston, Texas</li><li>Dallas, Texas</li><li>San Antonio, Texas</li><li>Fort Worth, Texas</li><li>Arlington, Texas</li><li>Plano, Texas</li><li>Frisco, Texas</li><li>El Paso, Texas</li><li>Corpus Christi, Texas</li>
        </ul>
        <p className="mt-4">Our local SEO strategies can help businesses target relevant service-related searches in these markets while maintaining consistent and useful website content.</p>
        <p className="mt-4">For example, a landscaping business serving Austin can benefit from service-specific landing pages and locally relevant content, while a construction company targeting Dallas may require a different keyword strategy based on its services and competition.</p>
        <p className="mt-4">We focus on building geographical relevance around the actual locations and services your business supports.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">SEO Audits and Competitor Analysis</h2>
        <p className="mt-5">Before developing an SEO strategy, it is important to understand your website&apos;s current search performance and identify areas that require improvement.</p>
        <p className="mt-4">Our SEO audit process examines important aspects of your website to uncover technical issues, content gaps, keyword opportunities, and competitive challenges.</p>
        <p className="mt-4">Our SEO audit can include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Technical website analysis</li><li>Current keyword visibility review</li><li>Organic traffic assessment</li><li>Competitor SEO analysis</li><li>Website content evaluation</li><li>Backlink profile assessment</li><li>Indexing and crawling checks</li><li>Internal linking analysis</li><li>Page speed and Core Web Vitals review</li><li>Local SEO performance assessment</li>
        </ul>
        <p className="mt-4">We use these findings to identify priorities and develop an actionable SEO improvement strategy.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">SEO Performance Tracking and Reporting</h2>
        <p className="mt-5">SEO is an ongoing process that requires monitoring, analysis, and continuous improvement.</p>
        <p className="mt-4">We evaluate relevant performance indicators to understand how your website is progressing and identify opportunities for further optimization.</p>
        <p className="mt-4">Our reporting can include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Organic search traffic</li><li>Keyword ranking movements</li><li>Google Search Console performance</li><li>Search impressions and clicks</li><li>Indexed website pages</li><li>Organic landing page performance</li><li>Backlink profile changes</li><li>Local search visibility</li><li>Website conversions and inquiries</li>
        </ul>
        <p className="mt-4">We focus on meaningful performance indicators that connect SEO activities with your broader business objectives.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Why Choose The Linkage Digital for SEO Services?</h2>
        <p className="mt-5">Choosing the right SEO partner can make a significant difference in your website&apos;s long-term search performance.</p>
        <p className="mt-4">At The Linkage Digital, we combine technical expertise, content strategy, keyword research, and digital marketing knowledge to develop SEO solutions aligned with your business requirements.</p>
        <p className="mt-4"><strong className="text-[#121212]">Customized SEO Strategies:</strong> We develop optimization plans based on your industry, competition, target audience, and business goals.</p>
        <p className="mt-4"><strong className="text-[#121212]">Technical and Content Expertise:</strong> We consider both the technical structure of your website and the quality and relevance of its content.</p>
        <p className="mt-4"><strong className="text-[#121212]">Local and National SEO:</strong> We support businesses targeting specific geographical markets as well as companies seeking broader organic visibility.</p>
        <p className="mt-4"><strong className="text-[#121212]">Search Intent Optimization:</strong> We focus on connecting relevant search queries with website pages that provide useful answers and solutions.</p>
        <p className="mt-4"><strong className="text-[#121212]">Transparent Performance Monitoring:</strong> We evaluate SEO progress using relevant performance indicators and reporting.</p>
        <p className="mt-4"><strong className="text-[#121212]">Integrated Digital Services:</strong> Our expertise in web design, branding, and digital marketing allows us to consider the wider digital experience when improving your website&apos;s search presence.</p>
      </section>

      <section>
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Our SEO Optimization Process</h2>
        <p className="mt-5">We follow a structured SEO process to understand your website, identify opportunities, and implement improvements.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">1. Website Discovery and SEO Audit</h3>
        <p className="mt-2">We review your website, business objectives, industry, current search visibility, and existing technical SEO condition.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">2. Keyword Research and Competitor Analysis</h3>
        <p className="mt-2">We identify relevant keywords, analyze search intent, review competitors, and find opportunities for improving your website&apos;s visibility.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">3. SEO Strategy Development</h3>
        <p className="mt-2">We create an optimization plan covering technical SEO, on-page improvements, content development, and local search opportunities where relevant.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">4. SEO Implementation</h3>
        <p className="mt-2">We implement the agreed improvements, including metadata, website content, internal links, technical corrections, and other optimization activities.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">5. Performance Monitoring</h3>
        <p className="mt-2">We monitor search visibility, organic traffic, indexing, keyword movements, and other relevant SEO indicators.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">6. Continuous Optimization</h3>
        <p className="mt-2">We use performance insights to refine the strategy, update content, resolve emerging issues, and identify additional growth opportunities.</p>
      </section>
    </div>
  );
}

function VideoEditingContent() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-14 md:py-20 text-[#555] leading-relaxed">
      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Professional Video Editing &amp; Motion Graphics Services That Bring Your Ideas to Life</h2>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-3xl md:text-4xl leading-none">Create Engaging Visual Content That Captures Attention</h3>
        <p className="mt-5">In today&apos;s digital world, video is one of the most powerful ways to communicate your brand message, showcase your products, and connect with potential customers.</p>
        <p className="mt-4">At <strong>The Linkage Digital</strong>, we provide professional video editing and motion graphics services designed to transform raw footage and creative ideas into polished, engaging visual experiences.</p>
        <p className="mt-4">From promotional videos and commercial advertisements to social media content, animated graphics, and branded video presentations, we help businesses create visual content that captures attention and communicates their message effectively.</p>
        <p className="mt-4">Our creative approach combines professional editing, visual storytelling, motion design, transitions, sound synchronization, and brand-focused elements to produce videos suited to your marketing objectives.</p>
        <p className="mt-4">Whether you&apos;re a startup building brand awareness, an established company promoting a new product, or a business looking to strengthen its social media presence, we develop video content tailored to your audience and brand identity.</p>
        <p className="mt-4">We work with businesses targeting customers across the United States, including Austin, Houston, Dallas, San Antonio, and other Texas markets, helping brands create engaging digital content for competitive markets.</p>
        <p className="mt-4">From short-form social media videos to polished promotional campaigns, The Linkage Digital helps turn creative concepts into professional visual content.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Complete Video Editing and Motion Design Solutions</h2>
        <p className="mt-5">Every video serves a different purpose. A promotional advertisement needs a different creative approach from an educational video, product demonstration, or social media reel.</p>
        <p className="mt-4">Our video editing and motion graphics solutions focus on creating content that aligns with your brand, platform, audience, and marketing goals.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Professional Video Editing</h3>
        <p className="mt-2">Professional editing brings individual video clips together to create a smooth, engaging, and cohesive final production.</p>
        <p className="mt-4">Our video editing services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Raw footage editing</li><li>Professional video cutting and trimming</li><li>Scene transitions and sequencing</li><li>Color correction and color grading</li><li>Audio synchronization</li><li>Background music integration</li><li>Sound effects and audio enhancement</li><li>Text overlays and subtitles</li><li>Visual effects and enhancements</li><li>Video resizing and formatting</li><li>Final video rendering and export</li>
        </ul>
        <p className="mt-4">Whether you have existing footage that needs professional editing or require content for a marketing campaign, we help transform your material into a polished final video.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Motion Graphics Design</h3>
        <p className="mt-2">Motion graphics combine animation, typography, shapes, illustrations, and visual elements to communicate information in a more engaging way.</p>
        <p className="mt-4">We create motion graphics that help brands explain ideas, highlight important messages, and make their content more visually dynamic.</p>
        <p className="mt-4">Our motion graphics services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Animated typography</li><li>2D motion graphics</li><li>Animated icons and illustrations</li><li>Logo animation</li><li>Branded motion elements</li><li>Animated text and titles</li><li>Promotional motion graphics</li><li>Visual transitions</li><li>Animated presentations</li><li>Motion graphics for advertisements</li>
        </ul>
        <p className="mt-4">From subtle branded animations to visually engaging promotional sequences, we develop motion graphics that complement your brand identity.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Promotional and Commercial Video Editing</h3>
        <p className="mt-2">Promotional videos help businesses communicate the value of their products and services while creating a stronger connection with potential customers.</p>
        <p className="mt-4">We create promotional video content designed to showcase your business, communicate your message, and support your marketing campaigns.</p>
        <p className="mt-4">Our promotional video editing solutions include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Business promotional videos</li><li>Product advertisement videos</li><li>Service showcase videos</li><li>Brand introduction videos</li><li>Commercial video advertisements</li><li>Promotional campaign videos</li><li>Event highlight videos</li><li>Marketing presentation videos</li>
        </ul>
        <p className="mt-4">We combine creative storytelling, engaging visuals, music, and branded elements to develop promotional content that represents your business professionally.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Social Media Video Editing</h3>
        <p className="mt-2">Social media platforms are increasingly driven by short-form video content. Businesses need engaging visuals that communicate their message quickly and encourage viewers to interact.</p>
        <p className="mt-4">Our social media video editing services help brands create platform-ready content for their digital marketing activities.</p>
        <p className="mt-4">Our services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Instagram Reels editing</li><li>Facebook video editing</li><li>TikTok video editing</li><li>YouTube Shorts editing</li><li>Social media advertisements</li><li>Short-form promotional videos</li><li>Caption and subtitle integration</li><li>Animated social media content</li><li>Branded video templates</li><li>Vertical and square video formatting</li>
        </ul>
        <p className="mt-4">We focus on creating visually engaging videos that align with your brand and the requirements of different social media platforms.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Animated Explainer Videos</h3>
        <p className="mt-2">Explainer videos help businesses simplify complicated ideas, demonstrate how products work, and communicate services in an easy-to-understand format.</p>
        <p className="mt-4">We create animated explainer content that combines visual storytelling, motion graphics, typography, and structured messaging.</p>
        <p className="mt-4">Our explainer video solutions can include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Animated business explainers</li><li>Product demonstration videos</li><li>Service explanation videos</li><li>Educational animations</li><li>Animated presentations</li><li>Infographic animations</li><li>Branded instructional videos</li>
        </ul>
        <p className="mt-4">Whether you&apos;re introducing a new product or explaining a business process, animated content can make your message easier to understand.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Logo Animation and Brand Motion Design</h3>
        <p className="mt-2">Your brand identity can extend beyond static images and graphics.</p>
        <p className="mt-4">Logo animations and branded motion elements help businesses create a more dynamic visual presentation across video advertisements, social media content, presentations, and promotional campaigns.</p>
        <p className="mt-4">Our logo animation and brand motion services include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Animated logo introductions</li><li>Logo reveal animations</li><li>Branded video intros and outros</li><li>Animated brand elements</li><li>Motion-based transitions</li><li>Animated typography</li><li>Branded promotional sequences</li>
        </ul>
        <p className="mt-4">We focus on maintaining your existing brand colors, visual identity, and design direction throughout the animation process.</p>

        <h3 className="mt-8 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">Product and E-Commerce Video Editing</h3>
        <p className="mt-2">Product videos allow businesses to showcase product features, demonstrate functionality, and create engaging shopping experiences.</p>
        <p className="mt-4">Our product video editing services help transform product footage into professional visual content for online stores, advertisements, and social media platforms.</p>
        <p className="mt-4">Our solutions include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Product showcase videos</li><li>Product demonstration editing</li><li>E-commerce promotional videos</li><li>Product feature highlights</li><li>Branded product advertisements</li><li>Promotional product animations</li><li>Social media product videos</li>
        </ul>
        <p className="mt-4">We help businesses present their products through engaging visuals that support their digital marketing and sales activities.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Video Content for Social Media and Digital Advertising</h2>
        <p className="mt-5">Different platforms require different video formats, creative approaches, and presentation styles.</p>
        <p className="mt-4">A vertical Instagram Reel, for example, serves a different purpose from a horizontal YouTube advertisement or a corporate presentation.</p>
        <p className="mt-4">Our video editing process considers the intended platform and audience to ensure that the final content is suitable for its application.</p>
        <p className="mt-4">We create video content for:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Instagram and Facebook</li><li>TikTok</li><li>YouTube</li><li>YouTube Shorts</li><li>Business websites</li><li>Digital advertising campaigns</li><li>E-commerce platforms</li><li>Corporate presentations</li>
        </ul>
        <p className="mt-4">Our focus is on creating platform-appropriate content that maintains visual consistency while communicating your message effectively.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Creative Video Editing Solutions for Businesses Across Texas</h2>
        <p className="mt-5">Businesses need compelling visual content to stand out in competitive digital markets. From product advertisements to social media campaigns, professionally edited videos can help brands communicate their value and connect with customers.</p>
        <p className="mt-4">The Linkage Digital works with businesses targeting audiences across Texas, providing creative video editing and motion graphics solutions for different marketing requirements.</p>
        <p className="mt-4">We support businesses targeting markets such as:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Austin, Texas</li><li>Houston, Texas</li><li>Dallas, Texas</li><li>San Antonio, Texas</li><li>Fort Worth, Texas</li><li>Arlington, Texas</li><li>Plano, Texas</li><li>Frisco, Texas</li><li>El Paso, Texas</li><li>Corpus Christi, Texas</li>
        </ul>
        <p className="mt-4">Whether you&apos;re a company in Austin looking for promotional video editing, a business in Dallas developing social media advertisements, or a brand in Houston creating product videos, our creative services can support your digital content requirements.</p>
        <p className="mt-4">Our video editing services can be delivered remotely, making it convenient for businesses across Texas and other US markets to collaborate with our creative team.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Video Content for Small Businesses and Growing Brands</h2>
        <p className="mt-5">Small businesses need effective ways to communicate their products and services while building recognition in their respective industries.</p>
        <p className="mt-4">Professional video content can help businesses introduce their brand, demonstrate their services, showcase customer experiences, and promote special offers.</p>
        <p className="mt-4">We develop creative video solutions for businesses across different industries, including:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Restaurants and food businesses</li><li>Construction and contracting companies</li><li>Real estate agencies</li><li>Automotive and detailing businesses</li><li>Retail and e-commerce brands</li><li>Technology companies</li><li>Professional service providers</li><li>Fitness and lifestyle brands</li><li>Hospitality businesses</li><li>Startups and entrepreneurs</li>
        </ul>
        <p className="mt-4">From restaurant promotional videos to real estate property showcases and service-based business advertisements, we create content aligned with your industry and brand identity.</p>
      </section>

      <section className="mb-14 md:mb-20">
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Our Creative Video Production and Editing Process</h2>
        <p className="mt-5">We follow a structured creative process to ensure that every video aligns with your expectations and intended purpose.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">1. Project Discovery and Creative Brief</h3>
        <p className="mt-2">We understand your business, target audience, video objectives, preferred style, reference materials, and final platform requirements.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">2. Concept and Creative Direction</h3>
        <p className="mt-2">We establish the visual direction, storytelling approach, editing style, motion elements, and overall presentation based on your project requirements.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">3. Video Editing and Assembly</h3>
        <p className="mt-2">We organize the supplied footage, select relevant scenes, develop the video sequence, and create a cohesive visual narrative.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">4. Motion Graphics and Visual Enhancements</h3>
        <p className="mt-2">We incorporate animations, typography, transitions, visual effects, branded elements, and other agreed creative enhancements.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">5. Audio and Color Refinement</h3>
        <p className="mt-2">We refine audio levels, synchronize sound, incorporate music and effects, and adjust colors to achieve a consistent final appearance.</p>
        <h3 className="mt-6 font-teko font-bold text-[#121212] uppercase text-2xl md:text-3xl">6. Review and Final Delivery</h3>
        <p className="mt-2">We review the completed video, incorporate agreed revisions, and prepare the final files in the required formats and resolutions.</p>
      </section>

      <section>
        <h2 className="font-teko font-bold text-[#121212] uppercase text-4xl md:text-5xl leading-none">Why Choose The Linkage Digital for Video Editing?</h2>
        <p className="mt-5">Choosing the right creative partner is important when producing video content that represents your brand.</p>
        <p className="mt-4">At The Linkage Digital, we combine creative storytelling, visual design, motion graphics, and digital marketing knowledge to develop video content aligned with your business objectives.</p>
        <p className="mt-4"><strong className="text-[#121212]">Creative Visual Storytelling:</strong> We focus on presenting your message through engaging sequences, carefully selected visuals, and effective editing techniques.</p>
        <p className="mt-4"><strong className="text-[#121212]">Brand-Focused Design:</strong> We maintain consistency with your brand colors, typography, logo, and overall visual identity.</p>
        <p className="mt-4"><strong className="text-[#121212]">Platform-Ready Content:</strong> We prepare videos in suitable formats and dimensions for different digital platforms.</p>
        <p className="mt-4"><strong className="text-[#121212]">Professional Editing Techniques:</strong> We use transitions, color grading, audio synchronization, and visual enhancements to create polished content.</p>
        <p className="mt-4"><strong className="text-[#121212]">Customized Creative Solutions:</strong> Each project is approached according to its purpose, audience, and creative requirements.</p>
        <p className="mt-4"><strong className="text-[#121212]">Integrated Digital Expertise:</strong> Our branding, web design, and digital marketing capabilities help us create video content that fits into your wider digital strategy.</p>
      </section>
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
