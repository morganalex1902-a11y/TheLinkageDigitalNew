import { RequestHandler } from "express";

const SERVICES = [
  "web-design-development",
  "branding-logo-design",
  "digital-marketing",
  "seo-optimization",
  "video-editing-motion",
];

const BLOG_ARTICLES = [
  "web-design-psychology-color-typography-conversions",
  "building-your-first-business-website",
  "complete-guide-seo-rankings-that-stick",
  "creating-a-logo-that-stands-out",
  "digital-marketing-strategies-that-deliver-roi",
  "video-marketing-trends-and-tools",
];

export const handleSitemap: RequestHandler = (_req, res) => {
  const baseUrl = "https://thelinkagedigital.com";
  const today = new Date().toISOString().split("T")[0];

  const urls = [
    {
      loc: baseUrl,
      lastmod: today,
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.9",
    },
    ...SERVICES.map((slug) => ({
      loc: `${baseUrl}/services/${slug}`,
      lastmod: today,
      changefreq: "monthly" as const,
      priority: "0.7",
    })),
    {
      loc: `${baseUrl}/portfolio`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.8",
    },
    ...BLOG_ARTICLES.map((slug) => ({
      loc: `${baseUrl}/blog/${slug}`,
      lastmod: today,
      changefreq: "monthly" as const,
      priority: "0.6",
    })),
    {
      loc: `${baseUrl}/contact`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/testimonials`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.7",
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  res.type("application/xml");
  res.send(sitemap);
};
