import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OriginButton } from "../components/ui/origin-button";
import SiteHeader from "../components/SiteHeader";
import { useInView } from "../hooks/useInView";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioRef = useInView();
  const projectsGridRef = useInView();
  const statsGridRef = useInView();

  const CATEGORIES = ["All", "Auto Detailing", "Landscaping", "Junk Removal", "Construction", "Pressure Washing"];

  const PROJECTS = [
    // Auto Detailing
    {
      title: "Premium Auto Detail Pro",
      category: "Auto Detailing",
      image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&q=80",
      description: "Professional auto detailing showcase with booking system.",
      website: "https://example.com/auto-detail-1",
    },
    {
      title: "Shine & Sparkle Auto Care",
      category: "Auto Detailing",
      image: "https://images.unsplash.com/photo-1551501350-4091e0c31ba8?w=600&q=80",
      description: "Complete detailing services with before/after gallery.",
      website: "https://example.com/auto-detail-2",
    },
    {
      title: "Crystal Clear Detailing",
      category: "Auto Detailing",
      image: "https://images.unsplash.com/photo-1610809388341-eb2dcc1d9c57?w=600&q=80",
      description: "Luxury car detailing specialists website.",
      website: "https://example.com/auto-detail-3",
    },
    {
      title: "Quick Shine Auto Services",
      category: "Auto Detailing",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
      description: "Express detailing service with mobile bookings.",
      website: "https://example.com/auto-detail-4",
    },
    {
      title: "Pristine Wheels Detailing",
      category: "Auto Detailing",
      image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=600&q=80",
      description: "Full-service automotive detailing center.",
      website: "https://example.com/auto-detail-5",
    },

    // Landscaping
    {
      title: "Green Acres Landscaping",
      category: "Landscaping",
      image: "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&q=80",
      description: "Complete landscape design and maintenance services.",
      website: "https://example.com/landscape-1",
    },
    {
      title: "Nature's Touch Garden Design",
      category: "Landscaping",
      image: "https://images.unsplash.com/photo-1469022563149-aa64991b93ff?w=600&q=80",
      description: "Professional garden and yard transformation.",
      website: "https://example.com/landscape-2",
    },
    {
      title: "Outdoor Oasis Landscapes",
      category: "Landscaping",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      description: "Hardscape and softscape design specialists.",
      website: "https://example.com/landscape-3",
    },
    {
      title: "Pristine Grounds Maintenance",
      category: "Landscaping",
      image: "https://images.unsplash.com/photo-1585320806553-fd2d3facf6d1?w=600&q=80",
      description: "Year-round lawn care and landscaping solutions.",
      website: "https://example.com/landscape-4",
    },
    {
      title: "Eco Landscaping Solutions",
      category: "Landscaping",
      image: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=600&q=80",
      description: "Sustainable and eco-friendly landscape services.",
      website: "https://example.com/landscape-5",
    },

    // Junk Removal
    {
      title: "Quick Junk Haul",
      category: "Junk Removal",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
      description: "Fast and efficient junk removal services.",
      website: "https://example.com/junk-1",
    },
    {
      title: "Trash Away Removal",
      category: "Junk Removal",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80",
      description: "Same-day junk removal and disposal.",
      website: "https://example.com/junk-2",
    },
    {
      title: "Clutter Free Living",
      category: "Junk Removal",
      image: "https://images.unsplash.com/photo-1578681033249-c8c2a3c93e1f?w=600&q=80",
      description: "Professional decluttering and junk removal.",
      website: "https://example.com/junk-3",
    },
    {
      title: "Debris Busters",
      category: "Junk Removal",
      image: "https://images.unsplash.com/photo-1609842787596-7aba43d27e3a?w=600&q=80",
      description: "Eco-friendly junk disposal specialists.",
      website: "https://example.com/junk-4",
    },
    {
      title: "Load It Gone Services",
      category: "Junk Removal",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
      description: "Residential and commercial junk removal.",
      website: "https://example.com/junk-5",
    },

    // Construction
    {
      title: "BuildRight Construction",
      category: "Construction",
      image: "https://images.unsplash.com/photo-1504917595217-3404ee9c6e65?w=600&q=80",
      description: "Residential and commercial construction projects.",
      website: "https://example.com/construction-1",
    },
    {
      title: "Quality Builds LLC",
      category: "Construction",
      image: "https://images.unsplash.com/photo-1581578731548-c64695c952951?w=600&q=80",
      description: "Custom home and renovation construction.",
      website: "https://example.com/construction-2",
    },
    {
      title: "Foundation First Builders",
      category: "Construction",
      image: "https://images.unsplash.com/photo-1577720643272-265f434a93f6?w=600&q=80",
      description: "General contracting with 20+ years experience.",
      website: "https://example.com/construction-3",
    },
    {
      title: "Premier Construction Group",
      category: "Construction",
      image: "https://images.unsplash.com/photo-1541123603104-852bdf13a9b5?w=600&q=80",
      description: "Commercial construction and development.",
      website: "https://example.com/construction-4",
    },
    {
      title: "Precision Home Builders",
      category: "Construction",
      image: "https://images.unsplash.com/photo-1634437927393-ef5cca01a5c4?w=600&q=80",
      description: "New construction and full renovations.",
      website: "https://example.com/construction-5",
    },

    // Pressure Washing
    {
      title: "Spotless Pressure Washing",
      category: "Pressure Washing",
      image: "https://images.unsplash.com/photo-1563693339725-0c1006b6a0ee?w=600&q=80",
      description: "Professional house and driveway pressure washing.",
      website: "https://example.com/pressure-1",
    },
    {
      title: "Clean Slate Services",
      category: "Pressure Washing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      description: "Commercial and residential pressure washing.",
      website: "https://example.com/pressure-2",
    },
    {
      title: "Crystal Clean Pressure Wash",
      category: "Pressure Washing",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
      description: "Eco-friendly pressure and soft washing services.",
      website: "https://example.com/pressure-3",
    },
    {
      title: "High Pressure Pros",
      category: "Pressure Washing",
      image: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=600&q=80",
      description: "Deck, patio, and roof cleaning specialists.",
      website: "https://example.com/pressure-4",
    },
    {
      title: "Shine Bright Washing",
      category: "Pressure Washing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
      description: "Mobile pressure washing for homes and businesses.",
      website: "https://example.com/pressure-5",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />

      <main className="relative overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="bg-white relative overflow-hidden">
          {/* Background image with white overlay */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F213039643cca445ab1343a8346c8eadc?format=webp&width=800&height=1200"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-white/40 pointer-events-none" />

          {/* Purple shape overlays */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ee951d9528412da7631bce9adcb908e0a2e2ebfd?width=1272"
            alt=""
            className="absolute left-0 top-0 h-full w-[28vw] max-w-[360px] object-cover object-center pointer-events-none select-none"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c98164b931a5afa28448df48252b06e4750016f2?width=1408"
            alt=""
            className="absolute right-0 top-0 h-full w-[28vw] max-w-[360px] object-cover object-center pointer-events-none select-none"
          />

          <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 md:py-28 lg:py-36 px-6">
            <h1 className="font-teko font-bold text-[#121212] uppercase leading-[0.88] text-[clamp(3.5rem,8vw,8rem)] mb-6">
              Our
              <br />
              Portfolio
            </h1>
            <p className="font-kanit font-normal text-black text-base md:text-[18px] lg:text-[20px] leading-[1.55] max-w-[560px]">
              Explore our collection of award-winning projects and case studies showcasing our expertise across various industries.
            </p>
          </div>
        </section>
      </main>

      {/* ── PORTFOLIO SECTION ── */}
      <section ref={portfolioRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-12 md:mb-16 lg:mb-20">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat.toLowerCase())}
                className={`font-kanit font-medium text-[13px] md:text-[14px] uppercase px-6 py-3 rounded-full transition-all ${
                  activeCategory === cat.toLowerCase()
                    ? "bg-[#8B0AB4] text-white"
                    : "bg-white text-[#121212] border border-[#ECECEC] hover:border-[#8B0AB4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div ref={projectsGridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal-stagger">
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
                    {project.category}
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
          <div ref={statsGridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center reveal-stagger">
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
