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

                <h1 className="font-teko font-bold text-[#121212] uppercase leading-[0.9] text-[clamp(2.5rem,6vw,5rem)] mb-5">
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

              {/* RIGHT — circular photo + floating badge + service tags */}
              <div className="relative flex items-center justify-center lg:justify-end h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                {/* Wrapper containing both circles with different centers */}
                <div className="relative w-[320px] sm:w-[390px] md:w-[460px] lg:w-[520px] h-[320px] sm:h-[390px] md:h-[460px] lg:h-[520px]">
                  {/* Halo circle — positioned top-right, large, behind everything */}
                  <div className="absolute top-0 right-0 w-full h-full rounded-full bg-[#F3E8F7] z-0 pointer-events-none" />

                  {/* Dot grid decoration — positioned bottom-left */}
                  <div className="hidden md:grid absolute -bottom-6 -left-8 grid-cols-4 gap-[6px] opacity-60 pointer-events-none z-1">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <span key={i} className="w-[4px] h-[4px] rounded-full bg-[#8B0AB4]" />
                    ))}
                  </div>

                  {/* Photo circle — positioned bottom-left, smaller (~85%), on top */}
                  <div className="absolute bottom-0 left-0 w-[85%] h-[85%] rounded-full overflow-hidden z-10 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                      alt="Our team collaborating on a project"
                      className="w-full h-full object-cover filter grayscale"
                    />
                    {/* Subtle purple overlay for tinting effect */}
                    <div className="absolute inset-0 bg-[#8B0AB4] opacity-5 mix-blend-multiply" />

                    {/* Arrow badge — positioned on the rim at top-right of photo circle */}
                    <button
                      type="button"
                      onClick={() =>
                        servicesGridRef.current?.scrollIntoView({ behavior: "smooth" })
                      }
                      aria-label="Explore services"
                      className="absolute top-0 right-0 flex items-center justify-center w-14 h-14 bg-[#8B0AB4] rounded-full text-white hover:scale-110 transition-transform cursor-pointer shadow-lg z-20"
                      style={{ transform: "translate(40%, -40%)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.81733 4.91128C8.05053 4.62631 8.47053 4.58431 8.75547 4.81746L13.8676 9.0001H0.666667C0.298477 9.0001 0 8.70162 0 8.33343C0 7.96525 0.298477 7.66677 0.666667 7.66677H10.1324L7.9112 5.84941C7.6262 5.61625 7.5842 5.19624 7.81733 4.91128Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Service tags — positioned to the right of the visual area */}
                  <div className="hidden lg:flex absolute right-full top-1/2 -translate-y-1/2 flex-col gap-4 z-20 pr-6">
                    {["STRATEGY", "DESIGN", "UI/UX", "MARKETING"].map((tag, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-[#8B0AB4] rounded-lg">
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M8 2L10.39 7.26H16L11.82 11.01L13.41 16L8 12.25L2.59 16L4.18 11.01L0 7.26H5.61L8 2Z"
                              fill="currentColor"
                              className="text-white"
                            />
                          </svg>
                        </div>
                        <span className="font-kanit font-semibold text-[#121212] text-[11px] uppercase tracking-wider whitespace-nowrap">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                    <div className="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-[#8B0AB4] border-4 border-white">
                      <span className="font-teko font-bold text-white text-[28px] md:text-[36px]">
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
