import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OriginButton } from "../components/ui/origin-button";
import SiteHeader from "../components/SiteHeader";
import { useInView } from "../hooks/useInView";

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeMainCategory, setActiveMainCategory] = useState("websites");
  const [activeNiche, setActiveNiche] = useState("all");

  const portfolioRef = useInView();
  const projectsGridRef = useInView();
  const statsGridRef = useInView();

  const MAIN_CATEGORIES = ["Websites", "Digital Marketing", "Graphic Design", "Mobile Apps"];
  const WEB_NICHES = ["All", "Auto Detailing", "Landscaping", "Junk Removal", "Construction", "Pressure Washing"];

  const PROJECTS = [
    // WEBSITE DESIGN & DEVELOPMENT - Auto Detailing
    { title: "Premium Auto Detail Pro", type: "websites", niche: "Auto Detailing", image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&q=80", description: "Professional auto detailing showcase with booking system.", website: "https://example.com/auto-detail-1" },
    { title: "Shine & Sparkle Auto Care", type: "websites", niche: "Auto Detailing", image: "https://images.unsplash.com/photo-1551501350-4091e0c31ba8?w=600&q=80", description: "Complete detailing services with before/after gallery.", website: "https://example.com/auto-detail-2" },
    { title: "Crystal Clear Detailing", type: "websites", niche: "Auto Detailing", image: "https://images.unsplash.com/photo-1610809388341-eb2dcc1d9c57?w=600&q=80", description: "Luxury car detailing specialists website.", website: "https://example.com/auto-detail-3" },
    { title: "Quick Shine Auto Services", type: "websites", niche: "Auto Detailing", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80", description: "Express detailing service with mobile bookings.", website: "https://example.com/auto-detail-4" },
    { title: "Pristine Wheels Detailing", type: "websites", niche: "Auto Detailing", image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=600&q=80", description: "Full-service automotive detailing center.", website: "https://example.com/auto-detail-5" },

    // WEBSITE DESIGN & DEVELOPMENT - Landscaping
    { title: "Green Acres Landscaping", type: "websites", niche: "Landscaping", image: "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&q=80", description: "Complete landscape design and maintenance services.", website: "https://example.com/landscape-1" },
    { title: "Nature's Touch Garden Design", type: "websites", niche: "Landscaping", image: "https://images.unsplash.com/photo-1469022563149-aa64991b93ff?w=600&q=80", description: "Professional garden and yard transformation.", website: "https://example.com/landscape-2" },
    { title: "Outdoor Oasis Landscapes", type: "websites", niche: "Landscaping", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", description: "Hardscape and softscape design specialists.", website: "https://example.com/landscape-3" },
    { title: "Pristine Grounds Maintenance", type: "websites", niche: "Landscaping", image: "https://images.unsplash.com/photo-1585320806553-fd2d3facf6d1?w=600&q=80", description: "Year-round lawn care and landscaping solutions.", website: "https://example.com/landscape-4" },
    { title: "Eco Landscaping Solutions", type: "websites", niche: "Landscaping", image: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=600&q=80", description: "Sustainable and eco-friendly landscape services.", website: "https://example.com/landscape-5" },

    // WEBSITE DESIGN & DEVELOPMENT - Junk Removal
    { title: "Quick Junk Haul", type: "websites", niche: "Junk Removal", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", description: "Fast and efficient junk removal services.", website: "https://example.com/junk-1" },
    { title: "Trash Away Removal", type: "websites", niche: "Junk Removal", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80", description: "Same-day junk removal and disposal.", website: "https://example.com/junk-2" },
    { title: "Clutter Free Living", type: "websites", niche: "Junk Removal", image: "https://images.unsplash.com/photo-1578681033249-c8c2a3c93e1f?w=600&q=80", description: "Professional decluttering and junk removal.", website: "https://example.com/junk-3" },
    { title: "Debris Busters", type: "websites", niche: "Junk Removal", image: "https://images.unsplash.com/photo-1609842787596-7aba43d27e3a?w=600&q=80", description: "Eco-friendly junk disposal specialists.", website: "https://example.com/junk-4" },
    { title: "Load It Gone Services", type: "websites", niche: "Junk Removal", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80", description: "Residential and commercial junk removal.", website: "https://example.com/junk-5" },

    // WEBSITE DESIGN & DEVELOPMENT - Construction
    { title: "BuildRight Construction", type: "websites", niche: "Construction", image: "https://images.unsplash.com/photo-1504917595217-3404ee9c6e65?w=600&q=80", description: "Residential and commercial construction projects.", website: "https://example.com/construction-1" },
    { title: "Quality Builds LLC", type: "websites", niche: "Construction", image: "https://images.unsplash.com/photo-1581578731548-c64695c952951?w=600&q=80", description: "Custom home and renovation construction.", website: "https://example.com/construction-2" },
    { title: "Foundation First Builders", type: "websites", niche: "Construction", image: "https://images.unsplash.com/photo-1577720643272-265f434a93f6?w=600&q=80", description: "General contracting with 20+ years experience.", website: "https://example.com/construction-3" },
    { title: "Premier Construction Group", type: "websites", niche: "Construction", image: "https://images.unsplash.com/photo-1541123603104-852bdf13a9b5?w=600&q=80", description: "Commercial construction and development.", website: "https://example.com/construction-4" },
    { title: "Precision Home Builders", type: "websites", niche: "Construction", image: "https://images.unsplash.com/photo-1634437927393-ef5cca01a5c4?w=600&q=80", description: "New construction and full renovations.", website: "https://example.com/construction-5" },

    // WEBSITE DESIGN & DEVELOPMENT - Pressure Washing
    { title: "Spotless Pressure Washing", type: "websites", niche: "Pressure Washing", image: "https://images.unsplash.com/photo-1563693339725-0c1006b6a0ee?w=600&q=80", description: "Professional house and driveway pressure washing.", website: "https://example.com/pressure-1" },
    { title: "Clean Slate Services", type: "websites", niche: "Pressure Washing", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", description: "Commercial and residential pressure washing.", website: "https://example.com/pressure-2" },
    { title: "Crystal Clean Pressure Wash", type: "websites", niche: "Pressure Washing", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80", description: "Eco-friendly pressure and soft washing services.", website: "https://example.com/pressure-3" },
    { title: "High Pressure Pros", type: "websites", niche: "Pressure Washing", image: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=600&q=80", description: "Deck, patio, and roof cleaning specialists.", website: "https://example.com/pressure-4" },
    { title: "Shine Bright Washing", type: "websites", niche: "Pressure Washing", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", description: "Mobile pressure washing for homes and businesses.", website: "https://example.com/pressure-5" },

    // DIGITAL MARKETING
    { title: "Social Media Campaign - E-Commerce Boost", type: "digital-marketing", image: "https://images.unsplash.com/photo-1460925895917-adf4e565c479?w=600&q=80", description: "Multi-platform social media strategy resulting in 250% engagement increase.", website: "https://example.com/marketing-1" },
    { title: "SEO Optimization - Local Dominance", type: "digital-marketing", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", description: "Achieved first-page rankings for 15+ high-intent keywords.", website: "https://example.com/marketing-2" },
    { title: "Email Marketing Funnel", type: "digital-marketing", image: "https://images.unsplash.com/photo-1563486835-86a717a0a0a6?w=600&q=80", description: "Automated email sequences with 45% conversion rate.", website: "https://example.com/marketing-3" },
    { title: "PPC Campaign - Lead Generation", type: "digital-marketing", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80", description: "Google and Facebook Ads driving qualified leads daily.", website: "https://example.com/marketing-4" },
    { title: "Content Marketing Strategy", type: "digital-marketing", image: "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=600&q=80", description: "Blog and video content establishing industry authority.", website: "https://example.com/marketing-5" },

    // GRAPHIC DESIGN
    { title: "Brand Identity Package", type: "graphic-design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80", description: "Complete logo, color palette, and brand guidelines.", website: "https://example.com/design-1" },
    { title: "Print Marketing Collateral", type: "graphic-design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80", description: "Business cards, brochures, and packaging design.", website: "https://example.com/design-2" },
    { title: "Social Media Graphics", type: "graphic-design", image: "https://images.unsplash.com/photo-1545235617-7a424c7556c7?w=600&q=80", description: "Custom templates and branded assets for social platforms.", website: "https://example.com/design-3" },
    { title: "Advertisement Design", type: "graphic-design", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80", description: "High-converting banner and display ads.", website: "https://example.com/design-4" },
    { title: "Infographic Design", type: "graphic-design", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80", description: "Data visualization and infographic design.", website: "https://example.com/design-5" },

    // MOBILE APPS
    { title: "Service Booking App", type: "mobile-apps", image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&q=80", description: "iOS/Android app for service scheduling and payments.", website: "https://example.com/app-1" },
    { title: "Loyalty Program App", type: "mobile-apps", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80", description: "Customer rewards and points tracking application.", website: "https://example.com/app-2" },
    { title: "Marketplace App", type: "mobile-apps", image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&q=80", description: "Full-featured mobile marketplace with payments.", website: "https://example.com/app-3" },
    { title: "Inventory Management App", type: "mobile-apps", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80", description: "Real-time inventory tracking and reporting tool.", website: "https://example.com/app-4" },
    { title: "Fitness Tracking App", type: "mobile-apps", image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&q=80", description: "Comprehensive fitness and wellness tracking platform.", website: "https://example.com/app-5" },
  ];

  const getFilteredProjects = () => {
    let filtered = PROJECTS.filter((p) => p.type === activeMainCategory);

    if (activeMainCategory === "websites" && activeNiche !== "all") {
      filtered = filtered.filter((p) =>
        p.niche?.toLowerCase() === activeNiche.toLowerCase()
      );
    }

    return filtered;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />

      <main className="relative overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="bg-white relative overflow-hidden min-h-[calc(100vh-87px)] flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-center">
              {/* LEFT — text column */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-[2px] bg-[#8B0AB4]" />
                  <span className="font-kanit font-semibold text-[#8B0AB4] text-[13px] md:text-[14px] uppercase tracking-wider">
                    Portfolio
                  </span>
                </div>

                <h1 className="font-teko font-bold text-[#121212] uppercase leading-[0.88] text-[clamp(2.8rem,6.5vw,6.2rem)] mb-5">
                  Creative
                  <br />
                  Work.
                  <br />
                  <span className="text-[#8B0AB4]">Real Impact.</span>
                </h1>

                <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[16px] leading-[1.6] max-w-[420px] mb-8">
                  Explore a selection of our recent projects where design meets strategy and results speak louder than words.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    projectsGridRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 font-kanit font-semibold text-[13px] md:text-[14px] uppercase text-[#121212] border-b-2 border-[#121212] pb-1 hover:text-[#8B0AB4] hover:border-[#8B0AB4] transition-colors w-fit"
                >
                  Explore Our Work
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

              {/* RIGHT — asymmetric project-tile collage */}
              <div className="relative flex items-center justify-center lg:justify-end pt-6 lg:pt-8">
                <div className="relative w-full h-auto flex justify-center lg:justify-end overflow-hidden lg:overflow-visible">
                  {/* Collage wrapper — constrained to avoid overflow with mobile-first sizing */}
                  <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[500px] h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px]">
                    {/* Large featured tile — positioned center-left of collage */}
                    <div
                      className="absolute rounded-xl overflow-hidden shadow-md"
                      style={{
                        width: "55%",
                        height: "72%",
                        left: "0",
                        top: "8%",
                        zIndex: 20,
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                        alt="Team collaboration workspace"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Top-right smaller tile — stacked above large tile */}
                    <div
                      className="absolute rounded-xl overflow-hidden shadow-sm"
                      style={{
                        width: "42%",
                        height: "45%",
                        right: "0",
                        top: "0",
                        zIndex: 10,
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
                        alt="Design mockup workspace"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Bottom-right smaller tile — positioned bottom-right */}
                    <div
                      className="absolute rounded-xl overflow-hidden shadow-md"
                      style={{
                        width: "44%",
                        height: "48%",
                        right: "0",
                        bottom: "0",
                        zIndex: 15,
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                        alt="Team collaboration moment"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating stat badge — overlaid on large tile */}
                    <div
                      className="absolute bg-[#8B0AB4] rounded-lg px-3 py-2 sm:px-4 sm:py-3 shadow-lg flex flex-col items-center justify-center"
                      style={{
                        width: "max-content",
                        minWidth: "100px",
                        zIndex: 35,
                        left: "8%",
                        bottom: "12%",
                      }}
                    >
                      <span className="font-kanit font-bold text-white text-[18px] sm:text-[20px] md:text-[24px] leading-none">
                        250+
                      </span>
                      <span className="font-kanit font-medium text-white text-[8px] sm:text-[9px] md:text-[10px] uppercase text-center leading-tight mt-1 sm:mt-2 tracking-wide whitespace-nowrap">
                        Projects Done
                      </span>
                    </div>
                  </div>

                  {/* Dot grid decoration (3x3) — positioned outside bottom-right of collage on desktop */}
                  <div className="hidden md:grid absolute -right-12 bottom-6 grid-cols-3 gap-[8px] opacity-50 pointer-events-none z-5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span key={i} className="w-[6px] h-[6px] rounded-full bg-[#8B0AB4]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row — scroll indicator */}
            <div className="mt-14 md:mt-16">
              <button
                onClick={() =>
                  projectsGridRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Scroll to portfolio projects"
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

      {/* ── PORTFOLIO SECTION ── */}
      <section className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Main category filter buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10">
            {MAIN_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveMainCategory(cat.toLowerCase().replace(/\s+/g, "-"));
                  setActiveNiche("all");
                }}
                className={`font-kanit font-medium text-[13px] md:text-[14px] uppercase px-6 py-3 rounded-full transition-all ${
                  activeMainCategory === cat.toLowerCase().replace(/\s+/g, "-")
                    ? "bg-[#8B0AB4] text-white"
                    : "bg-white text-[#121212] border border-[#ECECEC] hover:border-[#8B0AB4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Niche filter buttons (only show for Websites category) */}
          {activeMainCategory === "websites" && (
            <div className="flex flex-wrap gap-3 md:gap-4 mb-12 md:mb-16 lg:mb-20">
              {WEB_NICHES.map((niche) => (
                <button
                  key={niche}
                  onClick={() => setActiveNiche(niche.toLowerCase())}
                  className={`font-kanit font-medium text-[12px] md:text-[13px] uppercase px-5 py-2 rounded-full transition-all text-sm ${
                    activeNiche === niche.toLowerCase()
                      ? "bg-[#8B0AB4] text-white"
                      : "bg-white text-[#121212] border border-[#ECECEC] hover:border-[#8B0AB4]"
                  }`}
                >
                  {niche}
                </button>
              ))}
            </div>
          )}

          {/* Projects grid */}
          <div ref={projectsGridRef as React.RefObject<HTMLElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal-stagger">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="group cursor-pointer overflow-hidden rounded-lg flex flex-col h-full"
              >
                <div className="relative overflow-hidden h-[300px] md:h-[350px] bg-[#ECECEC] flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8B0AB4] text-white font-kanit font-medium text-[12px] md:text-[13px] uppercase px-6 py-3 rounded hover:bg-[#7a0a94] transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
                <div className="bg-white p-6 md:p-8 flex-grow flex flex-col">
                  <p className="font-kanit font-medium text-[12px] md:text-[13px] uppercase text-[#8B0AB4] mb-2 tracking-wider">
                    {project.niche || "Design & Development"}
                  </p>
                  <h3 className="font-teko font-bold text-[#121212] uppercase text-[20px] md:text-[24px] leading-[1.1] mb-3">
                    {project.title}
                  </h3>
                  <p className="font-kanit font-normal text-[#555] text-[14px] md:text-[15px] leading-[1.6]">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="font-kanit text-[#555] text-[16px] md:text-[18px]">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div ref={statsGridRef as React.RefObject<HTMLElement>} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center reveal-stagger">
            <div>
              <div className="font-teko font-bold text-[64px] md:text-[80px] text-[#8B0AB4] leading-none mb-3">
                250+
              </div>
              <h3 className="font-teko font-bold text-[#121212] uppercase text-[20px] md:text-[24px] mb-2">
                Projects Completed
              </h3>
              <p className="font-kanit text-[#555] text-[14px] md:text-[15px]">
                Successfully delivered across various industries and scales
              </p>
            </div>
            <div>
              <div className="font-teko font-bold text-[64px] md:text-[80px] text-[#8B0AB4] leading-none mb-3">
                50+
              </div>
              <h3 className="font-teko font-bold text-[#121212] uppercase text-[20px] md:text-[24px] mb-2">
                Team Members
              </h3>
              <p className="font-kanit text-[#555] text-[14px] md:text-[15px]">
                Talented professionals dedicated to excellence
              </p>
            </div>
            <div>
              <div className="font-teko font-bold text-[64px] md:text-[80px] text-[#8B0AB4] leading-none mb-3">
                98%
              </div>
              <h3 className="font-teko font-bold text-[#121212] uppercase text-[20px] md:text-[24px] mb-2">
                Client Satisfaction
              </h3>
              <p className="font-kanit text-[#555] text-[14px] md:text-[15px]">
                Committed to exceeding expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="bg-[#121212] py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-teko font-bold text-white uppercase leading-[0.92] text-[clamp(2rem,5.5vw,5rem)] mb-6">
            Start Your Project
          </h2>
          <p className="font-kanit font-normal text-white text-[15px] md:text-[18px] leading-[1.55] max-w-[400px] mx-auto mb-10">
            Have a project in mind? Let's create something amazing together.
          </p>
          <OriginButton
            onClick={() => navigate("/contact")}
            fillColor="#8B0AB4"
            className="bg-[#8B0AB4] text-white font-kanit font-medium text-[13px] md:text-[15px] uppercase px-8 py-4 hover:bg-[#7a0a94] transition-colors"
          >
            Get In Touch
          </OriginButton>
        </div>
      </section>
    </div>
  );
}
