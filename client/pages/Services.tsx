import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OriginButton } from "../components/ui/origin-button";
import SiteHeader from "../components/SiteHeader";
import { useInView } from "../hooks/useInView";

export default function Services() {
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState(0);

  const servicesRef = useInView();
  const processRef = useInView();
  const servicesGridRef = useInView();
  const processGridRef = useInView();

  const SERVICES = [
    {
      title: "Web Design",
      desc: "Beautiful, responsive websites designed to engage and convert your audience.",
      icon: "🎨",
      features: ["Responsive Design", "UX Research", "Wireframing", "Prototyping"],
    },
    {
      title: "Web Development",
      desc: "Robust, scalable web applications built with cutting-edge technologies.",
      icon: "⚙️",
      features: ["Frontend Development", "Backend Integration", "API Development", "Database Design"],
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications that users love.",
      icon: "📱",
      features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization"],
    },
    {
      title: "E-Commerce Solutions",
      desc: "Complete e-commerce platforms that drive sales and growth.",
      icon: "🛒",
      features: ["Store Setup", "Payment Integration", "Inventory Management", "Analytics"],
    },
    {
      title: "Brand Strategy",
      desc: "Strategic branding that positions your company for success.",
      icon: "🎯",
      features: ["Brand Identity", "Logo Design", "Brand Guidelines", "Marketing Strategy"],
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven marketing campaigns that deliver measurable results.",
      icon: "📈",
      features: ["SEO Optimization", "Content Marketing", "Social Media", "PPC Campaigns"],
    },
  ];

  const PROCESS = [
    {
      step: "01",
      title: "Discovery",
      desc: "We dive deep into understanding your business goals, target audience, and competitive landscape.",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "We develop a comprehensive strategy tailored to your specific needs and objectives.",
    },
    {
      step: "03",
      title: "Design",
      desc: "Our creative team brings your vision to life with stunning, user-centric designs.",
    },
    {
      step: "04",
      title: "Development",
      desc: "We build robust solutions using the latest technologies and best practices.",
    },
    {
      step: "05",
      title: "Testing",
      desc: "Rigorous testing ensures everything works perfectly across all devices and platforms.",
    },
    {
      step: "06",
      title: "Launch & Support",
      desc: "We handle the launch and provide ongoing support to ensure your success.",
    },
  ];

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
            Services
          </span>
        </div>

        <h1 className="font-teko font-bold text-[#121212] uppercase leading-[0.9] text-[clamp(2.3rem,5vw,4.5rem)] mb-5">
          Digital Solutions
          <br />
          That Drive
          <br />
          <span className="text-[#8B0AB4]">Growth</span>
        </h1>

        <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[16px] leading-[1.6] max-w-[420px] mb-8">
          We combine creativity, technology and strategy to deliver digital
          solutions that help your business grow and stand out.
        </p>

        <button
          type="button"
          onClick={() =>
            servicesGridRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 font-kanit font-semibold text-[13px] md:text-[14px] uppercase text-[#121212] border-b-2 border-[#121212] pb-1 hover:text-[#8B0AB4] hover:border-[#8B0AB4] transition-colors w-fit"
        >
          Explore Services
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.81733 4.91128C8.05053 4.62631 8.47053 4.58431 8.75547 4.81746L13.8676 9.0001H0.666667C0.298477 9.0001 0 8.70162 0 8.33343C0 7.96525 0.298477 7.66677 0.666667 7.66677H10.1324L7.9112 5.84941C7.6262 5.61625 7.5842 5.19624 7.81733 4.91128Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* RIGHT — circle eclipse effect + arrow badge + service tags */}
      <div className="relative flex items-center justify-center lg:justify-end h-[380px] sm:h-[460px] md:h-[540px] lg:h-[600px]">
  {/* Outer wrapper — holds halo circle, photo circle, arrow badge, and card stack together */}
  <div className="relative w-[320px] sm:w-[400px] md:w-[460px] lg:w-[520px] h-[320px] sm:h-[400px] md:h-[460px] lg:h-[520px]">
          {/* Halo circle — larger, top-right anchored */}
          <div className="absolute top-0 right-0 w-full h-full rounded-full bg-[#F3E8F7] z-0" />

          {/* Photo circle — smaller, bottom-left anchored, overlapping the halo */}
          <div className="absolute bottom-0 left-0 w-[85%] h-[85%] rounded-full overflow-hidden z-10 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Our team collaborating on a project"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Arrow badge — sits on the rim of the halo circle's top-right corner */}
          <button
            type="button"
            onClick={() =>
              servicesGridRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Explore services"
            className="absolute top-0 right-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#8B0AB4] flex items-center justify-center z-30 hover:scale-105 transition-transform shadow-lg"
            style={{ transform: "translate(30%, -30%)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          {/* Dot grid — bottom-left, overlapping the photo circle's rim */}
          <div className="hidden md:grid absolute -bottom-4 -left-8 grid-cols-4 gap-[6px] opacity-60 pointer-events-none z-20">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="w-[4px] h-[4px] rounded-full bg-[#8B0AB4]" />
            ))}
          </div>

          {/* Service tag stack — pinned to the right edge, overlapping the halo circle */}
          <div
            className="hidden sm:flex flex-col gap-2 absolute z-20"
            style={{ right: "-40px", top: "50%", transform: "translateY(-50%)" }}
          >
            {["Strategy", "Design", "UI/UX", "Marketing"].map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white rounded-lg shadow-md px-3 py-2 md:px-4 md:py-2.5"
              >
                <span className="w-6 h-6 rounded bg-[#8B0AB4] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2l2.9 6.9 7.1.6-5.4 4.6 1.6 7-6.2-3.9-6.2 3.9 1.6-7-5.4-4.6 7.1-.6z" />
                  </svg>
                </span>
                <span className="font-kanit font-medium text-[11px] md:text-[12px] uppercase text-[#121212] whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom row — scroll indicator */}
    <div className="mt-14 md:mt-16">
      <button
        onClick={() =>
          servicesGridRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to services"
        className="w-11 h-11 rounded-full border border-[#ECECEC] flex items-center justify-center text-[#121212] hover:border-[#8B0AB4] hover:text-[#8B0AB4] transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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

      {/* ── SERVICES GRID ── */}
      <section ref={servicesRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div ref={servicesGridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal-stagger">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                onClick={() => setExpandedService(expandedService === i ? -1 : i)}
                className="bg-white p-8 md:p-10 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 border border-[#ECECEC] hover:border-[#8B0AB4]"
              >
                <div className="text-5xl md:text-6xl mb-5">{service.icon}</div>
                <h3 className="font-teko font-bold text-[#121212] uppercase text-[24px] md:text-[28px] leading-[1.1] mb-3">
                  {service.title}
                </h3>
                <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[16px] leading-[1.6] mb-5">
                  {service.desc}
                </p>

                {expandedService === i && (
                  <div className="border-t border-[#ECECEC] pt-5 mt-5">
                    <p className="font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-3 tracking-wider">
                      What's Included:
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="font-kanit text-[#555] text-[14px] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#8B0AB4] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section ref={processRef as React.RefObject<HTMLElement>} className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              Our Process
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              How We Work
            </h2>
          </div>

          <div ref={processGridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 reveal-stagger">
            {PROCESS.map((item, i) => (
              <div key={i} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#8B0AB4] border-4 border-white">
                      <span className="font-teko font-bold text-white text-[20px] md:text-[24px]">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-teko font-bold text-[#121212] uppercase text-[20px] md:text-[24px] leading-[1.1] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-kanit font-normal text-[#555] text-[14px] md:text-[16px] leading-[1.6]">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-5 w-10 h-px bg-[#ECECEC]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="bg-[#121212] py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-teko font-bold text-white uppercase leading-[0.92] text-[clamp(2rem,5.5vw,5rem)] mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-kanit font-normal text-white text-[15px] md:text-[18px] leading-[1.55] max-w-[400px] mx-auto mb-10">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <OriginButton
            onClick={() => navigate("/contact")}
            fillColor="#8B0AB4"
            className="bg-[#8B0AB4] text-white font-kanit font-medium text-[13px] md:text-[15px] uppercase px-8 py-4 hover:bg-[#7a0a94] transition-colors"
          >
            Schedule Consultation
          </OriginButton>
        </div>
      </section>
    </div>
  );
}
