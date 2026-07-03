import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OriginButton } from "../components/ui/origin-button";
import SiteHeader from "../components/SiteHeader";
import { useInView } from "../hooks/useInView";

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioRef = useInView();
  const projectsGridRef = useInView();
  const statsGridRef = useInView();

  const CATEGORIES = ["All", "Web Design", "Web Development", "Mobile App", "E-Commerce"];

  const PROJECTS = [
    {
      title: "TechFlow Platform",
      category: "Web Development",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/14f15595d9a4595dee97127a1990c57d87db0f6c?width=1480",
      description: "A comprehensive SaaS platform for managing digital workflows.",
      link: "#",
    },
    {
      title: "FashionHub E-Commerce",
      category: "E-Commerce",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/53a7e1e500fa7f5bf705363b6c052995e6bca45a?width=910",
      description: "Full-featured e-commerce platform with integrated payment systems.",
      link: "#",
    },
    {
      title: "DesignSync Mobile App",
      category: "Mobile App",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cebf100cfa2f8b5cd61f8901babba182a2278871?width=660",
      description: "Cross-platform mobile app for collaborative design teams.",
      link: "#",
    },
    {
      title: "BrandViz Identity",
      category: "Web Design",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2ac29ce1c1c25b4a7061cf388b087767fd7967d8?width=240",
      description: "Complete brand identity redesign with modern aesthetic.",
      link: "#",
    },
    {
      title: "DataPoint Analytics",
      category: "Web Development",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/74ad161ce9ae79bedd3125e55a7036ba67285e6e?width=320",
      description: "Real-time analytics dashboard with interactive visualizations.",
      link: "#",
    },
    {
      title: "LocalEats App",
      category: "Mobile App",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/606973b7a19e784fa309acebad1d2d62459e0d20?width=80",
      description: "Food delivery mobile application with real-time tracking.",
      link: "#",
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
            <p className="font-kanit font-normal text-[#555] text-base md:text-[18px] lg:text-[20px] leading-[1.55] max-w-[560px]">
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
                className="group cursor-pointer overflow-hidden rounded-lg"
              >
                <div className="relative overflow-hidden h-[300px] md:h-[350px] lg:h-[380px] bg-[#ECECEC]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-[#8B0AB4] text-white font-kanit font-medium text-[12px] md:text-[13px] uppercase px-6 py-3 rounded hover:bg-[#7a0a94] transition-colors">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="bg-white p-6 md:p-8">
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
