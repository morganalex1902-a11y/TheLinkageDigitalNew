import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OriginButton } from "../components/ui/origin-button";
import SiteHeader from "../components/SiteHeader";
import { useInView } from "../hooks/useInView";

export default function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogRef = useInView();
  const articlesGridRef = useInView();

  const CATEGORIES = ["All", "Design", "Development", "Marketing", "Strategy"];

  const ARTICLES = [
    {
      title: "The Future of Web Design: Trends to Watch in 2024",
      category: "Design",
      date: "March 15, 2024",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/14f15595d9a4595dee97127a1990c57d87db0f6c?width=1480",
      excerpt: "Explore the latest trends in web design that are shaping the digital landscape.",
      author: "Alex Thompson",
    },
    {
      title: "Building Scalable Applications with React and Node.js",
      category: "Development",
      date: "March 12, 2024",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/53a7e1e500fa7f5bf705363b6c052995e6bca45a?width=910",
      excerpt: "A comprehensive guide to building scalable web applications using modern technologies.",
      author: "Sarah Williams",
    },
    {
      title: "Content Marketing Strategies That Actually Work",
      category: "Marketing",
      date: "March 10, 2024",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cebf100cfa2f8b5cd61f8901babba182a2278871?width=660",
      excerpt: "Learn how to create content that engages your audience and drives conversions.",
      author: "Emma Davis",
    },
    {
      title: "UX Best Practices: Creating User-Centric Designs",
      category: "Design",
      date: "March 8, 2024",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2ac29ce1c1c25b4a7061cf388b087767fd7967d8?width=240",
      excerpt: "Essential UX principles that ensure your designs serve your users effectively.",
      author: "Marcus Johnson",
    },
    {
      title: "DevOps Best Practices for Modern Teams",
      category: "Development",
      date: "March 5, 2024",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/74ad161ce9ae79bedd3125e55a7036ba67285e6e?width=320",
      excerpt: "Streamline your development workflow with these essential DevOps practices.",
      author: "Alex Thompson",
    },
    {
      title: "Digital Transformation: A Strategic Guide",
      category: "Strategy",
      date: "March 1, 2024",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/606973b7a19e784fa309acebad1d2d62459e0d20?width=80",
      excerpt: "Navigate your organization's digital transformation journey with confidence.",
      author: "Sarah Williams",
    },
  ];

  const filteredArticles = ARTICLES.filter((article) => {
    const categoryMatch =
      selectedCategory === "all" ||
      article.category.toLowerCase() === selectedCategory.toLowerCase();
    const searchMatch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />

      {/* ── HERO SECTION ── */}
      <section className="bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-14 lg:pt-32 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8 items-center">
            {/* LEFT — text column */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#8B0AB4]" />
                <span className="font-kanit font-semibold text-[#8B0AB4] text-[13px] md:text-[14px] uppercase tracking-wider">
                  Blog
                </span>
              </div>

              <h1 className="font-teko font-bold text-[#121212] uppercase leading-[0.9] text-[clamp(3rem,6vw,5.5rem)] mb-6">
                Insights That
                <br />
                <span className="text-[#8B0AB4]">Inspire</span> Action.
              </h1>

              <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[16px] lg:text-[17px] leading-[1.6] max-w-[420px] mb-10">
                Stay updated with the latest trends, tips and insights on design,
                development and digital growth.
              </p>


              href="#articles"
              className="inline-flex items-center gap-2 font-kanit font-semibold text-[13px] md:text-[14px] uppercase text-[#121212] border-b-2 border-[#121212] pb-1 hover:text-[#8B0AB4] hover:border-[#8B0AB4] transition-colors w-fit"
        >
              Read Our Blog
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.81733 4.91128C8.05053 4.62631 8.47053 4.58431 8.75547 4.81746L13.8676 9.0001H0.666667C0.298477 9.0001 0 8.70162 0 8.33343C0 7.96525 0.298477 7.66677 0.666667 7.66677H10.1324L7.9112 5.84941C7.6262 5.61625 7.5842 5.19624 7.81733 4.91128Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* RIGHT — stacked article preview cards */}
          <div className="relative h-[340px] sm:h-[400px] md:h-[440px] lg:h-[480px] flex items-center justify-center">
            {/* dotted grid decoration */}
            <div className="hidden md:grid absolute -top-4 right-4 grid-cols-4 gap-[6px] opacity-60 pointer-events-none">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} className="w-[4px] h-[4px] rounded-full bg-[#8B0AB4]" />
              ))}
            </div>

            {/* Left card — TRENDS */}
            <div className="absolute left-0 sm:left-2 md:left-4 top-6 w-[40%] sm:w-[38%] h-[62%] sm:h-[68%] rounded-xl overflow-hidden shadow-md -rotate-3 hidden xs:block">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/14f15595d9a4595dee97127a1990c57d87db0f6c?width=1480"
                alt="Top Web Design Trends to Watch in 2024"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 text-[#121212] font-kanit font-semibold text-[9px] md:text-[10px] uppercase px-3 py-1.5 rounded-full">
                  Trends
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-kanit text-white text-[10px] md:text-[11px] font-medium leading-tight">
                  Top Web Design Trends to Watch in 2024
                </p>
                <p className="font-kanit text-white/70 text-[9px] md:text-[10px] mt-1">
                  May 10, 2024 • 5 min read
                </p>
              </div>
            </div>

            {/* Middle card — STRATEGY (featured) */}
            <div className="relative z-10 w-[62%] sm:w-[50%] md:w-[42%] h-[85%] sm:h-[88%] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/53a7e1e500fa7f5bf705363b6c052995e6bca45a?width=910"
                alt="Building Brands with Purpose and Impact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B0AB4]/95 via-[#8B0AB4]/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-white text-[#8B0AB4] font-kanit font-semibold text-[10px] md:text-[11px] uppercase px-4 py-2 rounded-full">
                  Strategy
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="font-teko font-bold text-white uppercase text-[18px] md:text-[20px] leading-[1.1] mb-2">
                  Building Brands with Purpose and Impact
                </h3>
                <p className="font-kanit text-white/80 text-[11px] md:text-[12px]">
                  April 28, 2024 • 6 min read
                </p>
              </div>
            </div>

            {/* Right card — TIPS */}
            <div className="absolute right-0 sm:right-2 md:right-4 top-10 w-[40%] sm:w-[38%] h-[60%] sm:h-[66%] rounded-xl overflow-hidden shadow-md rotate-3 hidden xs:block">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/606973b7a19e784fa309acebad1d2d62459e0d20?width=80"
                alt="How to Improve Your Website Performance"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 text-[#121212] font-kanit font-semibold text-[9px] md:text-[10px] uppercase px-3 py-1.5 rounded-full">
                  Tips
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-kanit text-white text-[10px] md:text-[11px] font-medium leading-tight">
                  How to Improve Your Website Performance
                </p>
                <p className="font-kanit text-white/70 text-[9px] md:text-[10px] mt-1">
                  April 19, 2024 • 6 min read
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row — scroll indicator + view all link */}
        <div className="flex items-center justify-between mt-14 md:mt-16">
          <button
            onClick={() =>
              articlesGridRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll to articles"
            className="w-11 h-11 rounded-full border border-[#ECECEC] flex items-center justify-center text-[#121212] hover:border-[#8B0AB4] hover:text-[#8B0AB4] transition-colors shrink-0"
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


          href="#articles"
          className="inline-flex items-center gap-2 font-kanit font-medium text-[12px] md:text-[13px] uppercase text-[#121212] hover:text-[#8B0AB4] transition-colors"
      >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.81733 4.91128C8.05053 4.62631 8.47053 4.58431 8.75547 4.81746L13.8676 9.0001H0.666667C0.298477 9.0001 0 8.70162 0 8.33343C0 7.96525 0.298477 7.66677 0.666667 7.66677H10.1324L7.9112 5.84941C7.6262 5.61625 7.5842 5.19624 7.81733 4.91128Z"
              fill="currentColor"
            />
          </svg>
          View All Articles
        </a>
    </div>
  </div >
</section >

      {/* ── BLOG SECTION ── */}
      <section ref={blogRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Search bar */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 md:py-5 font-kanit text-[14px] md:text-[16px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
              />
              <svg
                className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-12 md:mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat.toLowerCase())}
                className={`font-kanit font-medium text-[13px] md:text-[14px] uppercase px-6 py-3 rounded-full transition-all ${
                  selectedCategory === cat.toLowerCase()
                    ? "bg-[#8B0AB4] text-white"
                    : "bg-white text-[#121212] border border-[#ECECEC] hover:border-[#8B0AB4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div ref={articlesGridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal-stagger">
            {filteredArticles.map((article, i) => (
              <div
                key={i}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden h-[220px] md:h-[250px] lg:h-[280px] bg-[#ECECEC]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#8B0AB4] text-white font-kanit font-semibold text-[11px] md:text-[12px] uppercase px-4 py-2 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <p className="font-kanit font-normal text-[#999] text-[12px] md:text-[13px] uppercase tracking-wider mb-2">
                    {article.date} • By {article.author}
                  </p>
                  <h3 className="font-teko font-bold text-[#121212] uppercase text-[18px] md:text-[20px] leading-[1.2] mb-3 group-hover:text-[#8B0AB4] transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-kanit font-normal text-[#555] text-[14px] md:text-[15px] leading-[1.6] mb-5">
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-kanit font-medium text-[13px] uppercase text-[#8B0AB4] hover:text-[#1C1D20] transition-colors group-hover:gap-3"
                  >
                    Read More
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.81733 4.91128C8.05053 4.62631 8.47053 4.58431 8.75547 4.81746L13.8676 9.0001H0.666667C0.298477 9.0001 0 8.70162 0 8.33343C0 7.96525 0.298477 7.66677 0.666667 7.66677H10.1324L7.9112 5.84941C7.6262 5.61625 7.5842 5.19624 7.81733 4.91128Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="font-kanit text-[#555] text-[16px] md:text-[18px]">
                No articles found. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="bg-[#121212] py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-teko font-bold text-white uppercase leading-[0.92] text-[clamp(2rem,5.5vw,5rem)] mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-kanit font-normal text-white text-[15px] md:text-[18px] leading-[1.55] max-w-[400px] mx-auto mb-10">
            Get the latest insights and tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-4 font-kanit text-[14px] rounded focus:outline-none focus:ring-2 focus:ring-[#8B0AB4]"
            />
            <OriginButton
              fillColor="#8B0AB4"
              className="bg-[#8B0AB4] text-white font-kanit font-medium text-[13px] uppercase px-8 py-4 hover:bg-[#7a0a94] transition-colors whitespace-nowrap"
            >
              Subscribe
            </OriginButton>
          </div>
        </div>
      </section>
    </div>
  );
}
