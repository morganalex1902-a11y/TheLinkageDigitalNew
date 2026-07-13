import { RequestHandler } from "express";

export const handleSitemap: RequestHandler = (_req, res) => {
  const baseUrl = "https://thelinkagedigital.com";
  
  const urls = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/portfolio`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/testimonials`,
      lastmod: new Date().toISOString().split("T")[0],
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
