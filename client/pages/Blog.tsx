import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { OriginButton } from "../components/ui/origin-button";
import { AnimatedButton } from "../components/ui/animated-button";
import SiteHeader from "../components/SiteHeader";
import { useInView } from "../hooks/useInView";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogRef = useInView();
  const articlesGridRef = useInView();

  useSEO({
    title: "Blog - Web Design, Development & Digital Marketing Tips | The Linkage Digital",
    description: "Read our blog for latest insights on web design, app development, SEO, digital marketing, and branding strategies to grow your business online.",
    keywords: "web design blog, development tips, digital marketing insights, SEO guide, branding advice, design trends, technology news",
    ogTitle: "Blog - Digital Marketing & Web Design Insights",
    ogDescription: "Discover expert tips and insights on web design, development, and digital marketing to help your business succeed online.",
    canonicalUrl: "https://thelinkagedigital.com/blog",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "The Linkage Digital Blog",
        "description": "Blog featuring insights on web design, development, and digital marketing",
        "url": "https://thelinkagedigital.com/blog",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thelinkagedigital.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://thelinkagedigital.com/blog" }
        ]
      }
    ]
  });

  const CATEGORIES = ["All", "Design", "Development", "Marketing"];
  const ARTICLE_URLS = [
    "/blog/web-design-psychology-color-typography-conversions",
    "/blog/building-your-first-business-website",
    "/blog/complete-guide-seo-rankings-that-stick",
    "/blog/creating-a-logo-that-stands-out",
    "/blog/digital-marketing-strategies-that-deliver-roi",
    "/blog/video-marketing-trends-and-tools",
  ];

  const ARTICLES = [
    {
      title: "Web Design Psychology: How Color and Typography Drive Conversions",
      category: "Design",
      date: "December 18, 2024",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
      excerpt: "Discover how strategic color choices and typography selection can significantly impact user behavior and increase conversion rates on your website.",
      author: "The Linkage Team",
    },
    {
      title: "From Zero to Online: Building Your First Website in 2024",
      category: "Development",
      date: "December 15, 2024",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop",
      excerpt: "Everything you need to know about launching your first business website, from planning and design to deployment and optimization.",
      author: "The Linkage Team",
    },
    {
      title: "The Complete Guide to SEO in 2025: Rankings That Stick",
      category: "Marketing",
      date: "December 12, 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
      excerpt: "Master the latest SEO techniques, including technical optimization, content strategy, and link building to dominate search results.",
      author: "The Linkage Team",
    },
    {
      title: "Branding 101: Creating a Logo That Stands Out",
      category: "Design",
      date: "December 9, 2024",
      image: "/images/brand-logo-1.webp",
      excerpt: "Learn the principles of effective logo design and how to create a visual identity that resonates with your target audience and builds brand recognition.",
      author: "The Linkage Team",
    },
    {
      title: "Digital Marketing Strategies That Deliver Real ROI",
      category: "Marketing",
      date: "December 6, 2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop",
      excerpt: "Explore proven digital marketing tactics including email campaigns, social media strategy, and paid advertising that generate measurable results.",
      author: "The Linkage Team",
    },
    {
      title: "Video Marketing 2024: Trends and Tools for Maximum Impact",
      category: "Development",
      date: "December 3, 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      excerpt: "Harness the power of video content with the latest editing techniques, platform strategies, and production tools to engage your audience.",
      author: "The Linkage Team",
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

      <main className="relative overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="bg-white relative overflow-hidden min-h-[calc(100vh-88px)] flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
              {/* LEFT — text column */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-[2px] bg-[#8B0AB4]" />
                  <span className="font-kanit font-semibold text-[#8B0AB4] text-[13px] md:text-[14px] uppercase tracking-wider">
                    Blog
                  </span>
                </div>

                <h1 className="font-teko font-bold text-[#121212] uppercase leading-[0.9] text-[clamp(2.5rem,5.5vw,5rem)] mb-5">
                  Insights That
                  <br />
                  <span className="text-[#8B0AB4]">Inspire</span> Action.
                </h1>

                <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[16px] leading-[1.6] max-w-[420px] mb-8">
                  Stay updated with the latest trends, tips and insights on design,
                  development and digital growth.
                </p>

                <OriginButton
                  onClick={() =>
                    articlesGridRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  fillColor="#8B0AB4"
                  className="inline-flex items-center gap-2 font-kanit font-semibold text-[13px] md:text-[14px] uppercase text-[#121212] border-b-2 border-[#121212] pb-1 hover:text-white hover:border-white w-fit"
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
                </OriginButton>
              </div>

              {/* RIGHT — overlapping article preview cards */}
              <div className="relative h-[300px] sm:h-[360px] md:h-[480px] lg:h-[600px] flex items-center justify-center mt-6 sm:mt-4 lg:mt-0">
                {/* dotted grid decoration */}
                <div className="hidden md:grid absolute -top-4 right-4 grid-cols-4 gap-[6px] opacity-60 pointer-events-none">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} className="w-[4px] h-[4px] rounded-full bg-[#8B0AB4]" />
                  ))}
                </div>

                {/* Left card — TRENDS (9:16 aspect ratio, tightly packed) */}
                <div className="absolute w-[20%] sm:w-[22%] md:w-[22%] lg:w-[22%] rounded-xl overflow-hidden shadow-md -rotate-2 block" style={{ aspectRatio: "9/16", left: "2%", top: "50%", transform: "translateY(-50%)", zIndex: 5 } as React.CSSProperties}>
                  <img
                    src="/images/blog-1.webp"
                    alt="Top Web Design Trends to Watch in 2024"
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <span className="bg-white/90 text-[#121212] font-kanit font-semibold text-[7px] sm:text-[9px] md:text-[10px] uppercase px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                      Trends
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="font-kanit text-white text-[8px] sm:text-[10px] md:text-[11px] font-medium leading-tight">
                      Top Web Design Trends to Watch in 2024
                    </p>
                    <p className="font-kanit text-white/70 text-[7px] sm:text-[9px] md:text-[10px] mt-0.5 sm:mt-1">
                      May 10, 2024 • 5 min read
                    </p>
                  </div>
                </div>

                {/* Middle card — STRATEGY (featured, centered and largest) */}
                <div className="absolute w-[28%] sm:w-[30%] md:w-[28%] lg:w-[28%] rounded-xl overflow-hidden shadow-2xl block" style={{ aspectRatio: "9/16", left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 20 }}>
                  <img
                    src="/images/brand-corner.webp"
                    alt="Building Brands with Purpose and Impact"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B0AB4]/95 via-[#8B0AB4]/30 to-transparent" />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <span className="bg-white text-[#8B0AB4] font-kanit font-semibold text-[8px] sm:text-[10px] md:text-[11px] uppercase px-2 sm:px-4 py-1 sm:py-2 rounded-full">
                      Strategy
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
                    <h3 className="font-teko font-bold text-white uppercase text-[13px] sm:text-[16px] md:text-[18px] leading-[1.1] mb-1 sm:mb-2">
                      Building Brands with Purpose and Impact
                    </h3>
                    <p className="font-kanit text-white/80 text-[8px] sm:text-[10px] md:text-[11px]">
                      April 28, 2024 • 6 min read
                    </p>
                  </div>
                </div>

                {/* Right card — TIPS (9:16 aspect ratio, tightly packed) */}
                <div className="absolute w-[20%] sm:w-[22%] md:w-[22%] lg:w-[22%] rounded-xl overflow-hidden shadow-md rotate-2 block" style={{ aspectRatio: "9/16", right: "2%", top: "50%", transform: "translateY(-50%)", zIndex: 5 }}>
                  <img
                    src="/images/dashboard-team.webp"
                    alt="How to Improve Your Website Performance"
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <span className="bg-white/90 text-[#121212] font-kanit font-semibold text-[7px] sm:text-[9px] md:text-[10px] uppercase px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                      Tips
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="font-kanit text-white text-[8px] sm:text-[10px] md:text-[11px] font-medium leading-tight">
                      How to Improve Your Website Performance
                    </p>
                    <p className="font-kanit text-white/70 text-[7px] sm:text-[9px] md:text-[10px] mt-0.5 sm:mt-1">
                      April 19, 2024 • 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row — scroll indicator + view all link */}
            <div className="flex items-center justify-between mt-8 md:mt-10">
              <OriginButton
                onClick={() =>
                  articlesGridRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Scroll to articles"
                fillColor="#8B0AB4"
                className="relative w-11 h-11 rounded-full border border-[#ECECEC] flex items-center justify-center text-[#121212] hover:border-white hover:text-white transition-colors shrink-0 overflow-hidden group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="relative z-10">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </OriginButton>

              <OriginButton
                onClick={() =>
                  articlesGridRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                fillColor="#8B0AB4"
                className="inline-flex items-center gap-2 font-kanit font-medium text-[12px] md:text-[13px] uppercase text-[#121212] hover:text-white"
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
              </OriginButton>
            </div>
          </div>
        </section>
      </main>

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
                className={`relative font-kanit font-medium text-[13px] md:text-[14px] uppercase px-6 py-3 rounded-full transition-all overflow-hidden group ${
                  selectedCategory === cat.toLowerCase()
                    ? "bg-[#8B0AB4] text-white"
                    : "bg-white text-[#121212] border border-[#ECECEC] hover:border-[#8B0AB4]"
                }`}
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
                <span className="relative z-10">{cat}</span>
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
                  <Link
                    to={ARTICLE_URLS[i]}
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
                  </Link>
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
