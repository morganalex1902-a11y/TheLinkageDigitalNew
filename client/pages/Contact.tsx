import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { OriginButton } from "../components/ui/origin-button";
import { AnimatedButton } from "../components/ui/animated-button";
import SiteHeader from "../components/SiteHeader";
import { useInView } from "../hooks/useInView";
import { submitToWeb3Forms } from "../lib/web3forms";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    services: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const formRef = useInView();
  const whyRef = useInView();
  const processRef = useInView();
  const testimonialsRef = useInView();
  const faqRef = useInView();
  const whyGridRef = useInView();
  const processGridRef = useInView();
  const testimonialsGridRef = useInView();
  const faqListRef = useInView();

  useSEO({
    title: "Contact The Linkage Digital - Web Design & Digital Services USA",
    description: "Get in touch with The Linkage Digital for web design, app development, and digital marketing services. Located in Texas, serving businesses across the USA. Call +15122003815 or send us an inquiry.",
    keywords: "contact digital agency, web design company contact, app development services contact, digital marketing agency, get in touch",
    ogTitle: "Contact The Linkage Digital",
    ogDescription: "Reach out to The Linkage Digital for your digital project. Expert web design, app development, and marketing services.",
    canonicalUrl: "https://thelinkagedigital.com/contact",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact The Linkage Digital",
        "description": "Contact page for The Linkage Digital digital agency",
        "url": "https://thelinkagedigital.com/contact",
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "The Linkage Digital",
        "image": "https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F2b1408065852494b93dd7445e38a5652?format=webp&width=500",
        "description": "Full-service digital agency",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5900 Balcones Dr Ste 10429",
          "addressLocality": "Austin",
          "addressRegion": "TX",
          "postalCode": "78731",
          "addressCountry": "US"
        },
        "telephone": "+15122003815",
        "url": "https://thelinkagedigital.com"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thelinkagedigital.com" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://thelinkagedigital.com/contact" }
        ]
      }
    ]
  });

  const SERVICES_CHECKBOX = [
    "Web Design",
    "Web Development",
    "Mobile App",
    "E-Commerce",
    "Branding",
    "Digital Marketing",
  ];

  const WHY_CHOOSE_US = [
    {
      title: "Expert Team",
      desc: "50+ talented professionals with years of experience across multiple disciplines.",
      icon: "👥",
    },
    {
      title: "Proven Track Record",
      desc: "250+ successful projects delivered with 98% client satisfaction rate.",
      icon: "🏆",
    },
    {
      title: "Custom Solutions",
      desc: "We don't believe in one-size-fits-all. Every project is tailored to your needs.",
      icon: "⚙️",
    },
    {
      title: "Ongoing Support",
      desc: "We're with you every step of the way with comprehensive support packages.",
      icon: "🤝",
    },
    {
      title: "Latest Technology",
      desc: "We use cutting-edge tools and frameworks to build future-proof solutions.",
      icon: "⚡",
    },
    {
      title: "Results-Driven",
      desc: "Our focus is on delivering measurable results that impact your bottom line.",
      icon: "📈",
    },
  ];

  const PROCESS_STEPS = [
    {
      step: "01",
      title: "Initial Consultation",
      desc: "We'll schedule a call to understand your project, goals, timeline, and budget.",
    },
    {
      step: "02",
      title: "Proposal & Quote",
      desc: "We'll create a detailed proposal outlining scope, timeline, deliverables, and pricing.",
    },
    {
      step: "03",
      title: "Project Kick-off",
      desc: "Once approved, we'll assemble your dedicated team and begin the project.",
    },
    {
      step: "04",
      title: "Regular Updates",
      desc: "You'll receive weekly updates, demos, and have direct access to your project lead.",
    },
    {
      step: "05",
      title: "Launch & Testing",
      desc: "Comprehensive testing, final revisions, and a smooth launch to production.",
    },
    {
      step: "06",
      title: "Ongoing Support",
      desc: "Post-launch support, maintenance, and optimization to ensure continued success.",
    },
  ];

  const TESTIMONIALS = [
    {
      name: "William Baudendistel",
      role: "A day ago",
      text: "Bryan Davis was able to convert a logo, and a couple banners to printable files for me so I can send them off to be used for signage and marketing material. This was incredibly helpful and will be a big part of helping grow my business. Great guy to work with, prompt communication, and very helpful with the revision process. Thanks Bryan!",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
      rating: 5,
    },
    {
      name: "Robert Lee",
      role: "Jun 23, 2026",
      text: "Not going to lie at first I was a little skeptical but Bryan Davis and the guys at linkage digital have really proved me wrong. They have been building my website and adding new features, finally making it show up when people search junk removal! I couldn't be happier with this service. I would recommend this service to family and friends.",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
      rating: 5,
    },
    {
      name: "Stella Chaney",
      role: "Jun 18, 2026",
      text: "I had a great experience working with him on my website. He was professional, responsive, and easy to communicate with throughout the entire process. He listened to what I wanted, made changes quickly, and created a website that looks clean and professional. I'm very happy with the final result and would highly recommend him to anyone needing a website for their business.",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
      rating: 5,
    },
  ];

  const FAQ = [
    {
      q: "How can professional web design and development improve my online visibility?",
      a: "A well-designed website with proper SEO foundation increases organic search rankings, improves user experience, and builds credibility. The Linkage Digital creates responsive, fast-loading websites optimized for search engines and conversions, helping businesses rank higher for local and national searches.",
    },
    {
      q: "What's the difference between DIY web design and professional web design services?",
      a: "DIY platforms lack customization and professional SEO optimization. The Linkage Digital builds custom websites using modern frameworks like React, ensuring superior performance, security, mobile responsiveness, and search engine visibility that DIY tools can't match.",
    },
    {
      q: "How much does professional web design cost?",
      a: "Web design costs vary based on complexity. Simple 5-page websites start around $3,000-$5,000, while e-commerce and custom applications range $8,000-$25,000+. We offer transparent pricing with no hidden fees. Contact us for a custom quote tailored to your needs.",
    },
    {
      q: "Can you help with branding and logo design for my business?",
      a: "Yes! The Linkage Digital offers complete branding services including logo design, brand identity development, color palette selection, and typography guidelines. We ensure your brand is cohesive across web and marketing materials, strengthening customer recognition and trust.",
    },
    {
      q: "How does SEO optimization improve my search engine rankings?",
      a: "Our SEO optimization includes technical site speed improvements, keyword research, on-page optimization, local SEO setup (Google Business Profile), schema markup, and content strategy. Businesses typically see improved rankings within 3-6 months for targeted keywords.",
    },
    {
      q: "Do you provide digital marketing services beyond web design?",
      a: "Absolutely. The Linkage Digital offers digital marketing services including PPC advertising, social media management, email marketing, and content strategy. We integrate these with your website to create a comprehensive online presence that drives qualified leads.",
    },
    {
      q: "Can you create video editing and motion graphics for my business?",
      a: "Yes, our video editing and motion graphics team creates professional promotional videos, product demos, explainer videos, and social media content. Video content significantly increases engagement and is essential for modern digital marketing strategies.",
    },
    {
      q: "How do I know The Linkage Digital is a legitimate, trustworthy digital agency?",
      a: "We provide verifiable client portfolios, case studies with measurable results, client testimonials, and transparent pricing. We're committed to clear communication, deliver on deadlines, and provide ongoing support. We work with startups to Fortune 500 companies, and we're happy to provide references.",
    },
    {
      q: "What is your web design and development process?",
      a: "Our process includes discovery/consultation, strategy, wireframing, design, development, testing, and deployment. We use agile methodology to keep you informed at every stage with regular updates and opportunities for feedback. Most projects take 8-12 weeks depending on scope.",
    },
    {
      q: "Do you offer ongoing website maintenance and support?",
      a: "Yes, we provide flexible support packages including security updates, performance monitoring, backup management, content updates, and feature enhancements. We offer retainer packages starting at $500/month, ensuring your website stays secure, fast, and current.",
    },
    {
      q: "How important is mobile-responsive design for my business website?",
      a: "Critical. Over 60% of web traffic is mobile, and Google prioritizes mobile-friendly sites in search rankings. All our websites are fully responsive, optimized for phones, tablets, and desktops, ensuring you don't lose potential customers on any device.",
    },
    {
      q: "Can you help with local SEO for my business?",
      a: "Yes, we specialize in local SEO including Google Business Profile optimization, local keyword targeting, location-specific content, and local link building. This is essential for service-based businesses looking to attract customers in their geographic area.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sent = await submitToWeb3Forms(new FormData(e.currentTarget));
    if (!sent) return;

    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        services: [],
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />

      <main className="relative overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="bg-white relative overflow-hidden min-h-[calc(100vh-87px)] flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
              {/* LEFT — text column */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-[2px] bg-[#8B0AB4]" />
                  <span className="font-kanit font-semibold text-[#8B0AB4] text-[13px] md:text-[14px] uppercase tracking-wider">
                    Contact
                  </span>
                </div>

                <h1 className="font-teko font-bold text-[#121212] uppercase leading-[0.9] text-[clamp(2.5rem,5.5vw,5rem)] mb-5">
                  Let's Create Something
                  <br />
                  <span className="text-[#8B0AB4]">Great</span> Together.
                </h1>

                <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[16px] leading-[1.6] max-w-[420px] mb-8">
                  Have a project in mind or want to learn more about what we do?
                  We'd love to hear from you.
                </p>

                <OriginButton
                  onClick={() =>
                    formRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  fillColor="#8B0AB4"
                  className="inline-flex items-center gap-2 font-kanit font-semibold text-[13px] md:text-[14px] uppercase text-[#121212] border-b-2 border-[#121212] pb-1 hover:text-white hover:border-[#8B0AB4] w-fit group"
                >
                  Get In Touch
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.81733 4.91128C8.05053 4.62631 8.47053 4.58431 8.75547 4.81746L13.8676 9.0001H0.666667C0.298477 9.0001 0 8.70162 0 8.33343C0 7.96525 0.298477 7.66677 0.666667 7.66677H10.1324L7.9112 5.84941C7.6262 5.61625 7.5842 5.19624 7.81733 4.91128Z"
                      fill="currentColor"
                      className="group-hover:text-white transition-colors"
                    />
                  </svg>
                </OriginButton>
              </div>

              {/* RIGHT — duotone photo + floating response-time card */}
              <div className="relative h-[300px] sm:h-[340px] md:h-[380px] lg:h-[400px] flex items-center justify-center lg:justify-end">
                {/* dotted grid decoration — scoped to its own wrapper, tucked to the image's corner */}
                <div className="relative w-full max-w-[420px] lg:max-w-[440px] h-full">
                  <div className="hidden md:grid absolute -top-4 -right-4 grid-cols-4 gap-[6px] opacity-60 pointer-events-none z-20">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <span key={i} className="w-[4px] h-[4px] rounded-full bg-[#8B0AB4]" />
                    ))}
                  </div>

                  {/* Main photo */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80"
                      alt="Our team ready to help with your project"
                      className="w-full h-full object-cover grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-[#8B0AB4] mix-blend-multiply opacity-80" />
                    <div className="absolute inset-0 bg-[#8B0AB4]/20" />
                  </div>

                  {/* Floating white stat card */}
                  <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-xl shadow-xl p-5 md:p-6 max-w-[220px] z-10">
                    <div className="flex items-end leading-none mb-1">
                      <span className="font-teko font-semibold text-[#121212] text-[44px] md:text-[52px] leading-none">
                        24
                      </span>
                      <span className="font-teko font-semibold text-[#8B0AB4] text-[20px] md:text-[24px] leading-none mb-1">
                        hrs
                      </span>
                    </div>
                    <p className="font-kanit font-normal text-[#555] text-[12px] md:text-[13px] leading-[1.4]">
                      Average response time on every project inquiry
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row — scroll indicator */}
            <div className="mt-14 md:mt-16">
              <button
                onClick={() =>
                  formRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Scroll to contact form"
                className="relative w-11 h-11 rounded-full border border-[#ECECEC] flex items-center justify-center text-[#121212] hover:border-[#8B0AB4] hover:text-[#8B0AB4] transition-colors overflow-hidden group"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute rounded-full"
                  style={{
                    width: 0,
                    height: 0,
                    left: "50%",
                    top: "50%",
                    backgroundColor: "#8B0AB4",
                    opacity: 0.1,
                    transform: "translate(-50%, -50%) scale(0)",
                    transition: "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    zIndex: 0,
                  }}
                />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="relative z-10">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ── CONTACT FORM & INFO SECTION ── */}
      <section ref={formRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact form */}
            <div>
              <h2 className="font-teko font-bold text-[#121212] uppercase text-[28px] md:text-[36px] leading-[1.1] mb-2">
                Tell Us About Your Project
              </h2>
              <p className="font-kanit text-[#555] text-[15px] md:text-[16px] mb-10">
                Fill out the form below with details about your project. We'll review it and get back to you within 24 business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-3 tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-3 tracking-wider">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-3 tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-3 tracking-wider">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors bg-white"
                    >
                      <option value="">Select a range</option>
                      <option value="5-10k">$5,000 - $10,000</option>
                      <option value="10-25k">$10,000 - $25,000</option>
                      <option value="25-50k">$25,000 - $50,000</option>
                      <option value="50-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-4 tracking-wider">
                    What services interest you?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {SERVICES_CHECKBOX.map((service) => (
                      <label key={service} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-5 h-5 border border-[#ECECEC] rounded accent-[#8B0AB4]"
                        />
                        <span className="font-kanit text-[14px] text-[#555]">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-3 tracking-wider">
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, your goals, and any specific requirements..."
                    rows={6}
                    className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors resize-none"
                    required
                  />
                </div>

                <OriginButton
                  fillColor="#8B0AB4"
                  type="submit"
                  className="w-full bg-[#8B0AB4] text-white font-kanit font-medium text-[13px] md:text-[14px] uppercase px-8 py-4 rounded-lg hover:bg-[#7a0a94] transition-colors"
                >
                  {submitted ? "Message Sent! ✓" : "Send Project Details"}
                </OriginButton>
              </form>
            </div>

            {/* Quick info cards */}
            <div className="space-y-8">
              <div>
                <h3 className="font-teko font-bold text-[#121212] uppercase text-[24px] md:text-[28px] leading-[1.1] mb-8">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 md:p-7 rounded-lg border border-[#ECECEC] hover:border-[#8B0AB4] transition-colors">
                    <div className="text-4xl mb-3">✉️</div>
                    <h4 className="font-teko font-bold text-[#121212] uppercase text-[16px] mb-2">
                      Email
                    </h4>
                    <div className="space-y-2">
                      <a href="mailto:sales@thelinkagedigital.com" className="block font-kanit text-[#8B0AB4] hover:text-[#7a0a94] transition-colors">
                        sales@thelinkagedigital.com
                      </a>
                      <a href="mailto:info@linkagedigital.com" className="block font-kanit text-[#8B0AB4] hover:text-[#7a0a94] transition-colors">
                        info@linkagedigital.com
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-6 md:p-7 rounded-lg border border-[#ECECEC] hover:border-[#8B0AB4] transition-colors">
                    <div className="text-4xl mb-3">📞</div>
                    <h4 className="font-teko font-bold text-[#121212] uppercase text-[16px] mb-2">
                      Phone
                    </h4>
                    <a href="tel:+15122003815" className="font-kanit text-[#8B0AB4] hover:text-[#7a0a94] transition-colors">
                      (512) 200-3815
                    </a>
                  </div>

                  <div className="bg-white p-6 md:p-7 rounded-lg border border-[#ECECEC] hover:border-[#8B0AB4] transition-colors">
                    <div className="text-4xl mb-3">📍</div>
                    <h4 className="font-teko font-bold text-[#121212] uppercase text-[16px] mb-2">
                      Office
                    </h4>
                    <p className="font-kanit text-[#555]">
                      5900 Balcones Dr Ste 10429,<br />
                      Austin, TX 78731,<br />
                      United States
                    </p>
                  </div>

                  <div className="bg-white p-6 md:p-7 rounded-lg border border-[#ECECEC] hover:border-[#8B0AB4] transition-colors">
                    <div className="text-4xl mb-3">🕐</div>
                    <h4 className="font-teko font-bold text-[#121212] uppercase text-[16px] mb-2">
                      Business Hours
                    </h4>
                    <p className="font-kanit text-[#555]">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM EST<br />
                      <span className="text-[#999]">Closed on weekends</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-5 tracking-wider">
                  Follow Us On Social
                </h4>
                <div className="flex gap-4 flex-wrap">
                  {[
                    { name: "Facebook", icon: "f", href: "https://www.facebook.com/thelinkagedigital/" },
                    { name: "Instagram", icon: "📷", href: "https://www.instagram.com/thelinkagedigital/" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-[#ECECEC] flex items-center justify-center hover:bg-[#8B0AB4] hover:border-[#8B0AB4] hover:text-white transition-all text-[#121212] font-medium text-[14px]"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <div className="flex flex-col gap-3 mb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="font-kanit font-semibold text-[#8B0AB4] text-[13px] uppercase tracking-wider">
                  Visit Our Office
                </span>
                <h2 className="font-teko font-bold text-[#121212] uppercase text-[28px] md:text-[36px] leading-[1.1] mt-2">
                  Find The Linkage Digital
                </h2>
              </div>
              <a
                href="https://maps.app.goo.gl/y4eKWUuNjfRG2LVd6"
                target="_blank"
                rel="noopener noreferrer"
                className="font-kanit font-semibold text-[13px] uppercase text-[#8B0AB4] hover:text-[#7a0a94] transition-colors w-fit"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="overflow-hidden rounded-xl border border-[#ECECEC] bg-white">
              <iframe
                title="The Linkage Digital office location"
                src="https://www.google.com/maps?q=5900%20Balcones%20Dr%20Ste%2010429%2C%20Austin%2C%20TX%2078731&z=17&output=embed"
                className="block w-full h-[320px] md:h-[440px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US SECTION ── */}
      <section ref={whyRef as React.RefObject<HTMLElement>} className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              Why Choose Us
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              What Sets Us Apart
            </h2>
          </div>

          <div ref={whyGridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal-stagger">
            {WHY_CHOOSE_US.map((item, i) => (
              <div key={i} className="bg-[#F9F9F9] p-8 md:p-10 rounded-lg hover:shadow-lg hover:border-[#8B0AB4] border border-transparent transition-all">
                <div className="text-5xl md:text-6xl mb-5">{item.icon}</div>
                <h3 className="font-teko font-bold text-[#121212] uppercase text-[20px] md:text-[24px] leading-[1.1] mb-3">
                  {item.title}
                </h3>
                <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[16px] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section ref={processRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              Our Process
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              How We Work With You
            </h2>
          </div>

          <div ref={processGridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
            {PROCESS_STEPS.map((item, i) => (
              <div key={i}>
                <div className="flex items-start gap-6 mb-5">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#8B0AB4] border-4 border-white flex-shrink-0">
                    <span className="font-teko font-bold text-white text-[18px]">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-teko font-bold text-[#121212] uppercase text-[18px] md:text-[22px] leading-[1.1]">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="font-kanit font-normal text-[#555] text-[14px] md:text-[15px] leading-[1.6] md:ml-22">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section ref={testimonialsRef as React.RefObject<HTMLElement>} className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              Client Feedback
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              What Our Clients Say
            </h2>
          </div>

          <div ref={testimonialsGridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="bg-[#F9F9F9] p-8 md:p-10 rounded-lg border border-[#ECECEC] hover:border-[#8B0AB4] transition-colors">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, j) => (
                      <span key={j} className="text-[#8B0AB4]">★</span>
                    ))}
                </div>
                <p className="font-kanit text-[#555] text-[15px] leading-[1.6] mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-teko font-bold text-[#121212] uppercase text-[13px]">
                      {testimonial.name}
                    </h4>
                    <p className="font-kanit text-[#999] text-[11px]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section ref={faqRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              FAQs
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              Common Questions
            </h2>
          </div>

          <div ref={faqListRef as React.RefObject<HTMLDivElement>} className="max-w-3xl mx-auto space-y-4 reveal-stagger">
            {FAQ.map((faq, i) => (
              <div key={i} className="bg-white border border-[#ECECEC] rounded-lg p-6 md:p-8 hover:border-[#8B0AB4] transition-colors">
                <h3 className="font-teko font-bold text-[#121212] uppercase text-[16px] md:text-[18px] leading-[1.2] mb-3">
                  {faq.q}
                </h3>
                <p className="font-kanit text-[#555] text-[14px] md:text-[15px] leading-[1.6]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section className="bg-[#121212] py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-teko font-bold text-white uppercase leading-[0.92] text-[clamp(2rem,5.5vw,5rem)] mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-kanit font-normal text-white text-[15px] md:text-[18px] leading-[1.55] max-w-[450px] mx-auto mb-10">
            Don't wait to transform your digital presence. Reach out today and let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OriginButton
              onClick={() => {
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              fillColor="#8B0AB4"
              className="bg-[#8B0AB4] text-white font-kanit font-medium text-[13px] md:text-[15px] uppercase px-8 py-4 hover:bg-[#7a0a94] transition-colors"
            >
              Start Your Project
            </OriginButton>
            <OriginButton
              onClick={() => navigate("/")}
              fillColor="#8B0AB4"
              className="border-2 border-white text-white font-kanit font-medium text-[13px] md:text-[15px] uppercase px-8 py-4 hover:bg-white hover:text-[#121212] transition-colors"
            >
              Back to Home
            </OriginButton>
          </div>
        </div>
      </section>
    </div>
  );
}
