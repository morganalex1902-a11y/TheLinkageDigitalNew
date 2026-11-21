import { articles } from "../siteContent";

export type BlogPost = {
  id?: string;
  slug: string;
  title: string;
  category: string;
  published_at: string;
  excerpt: string;
  content: string;
  image: string;
  video?: string;
  author: string;
  published: boolean;
};

export const blogCategories = ["Design", "Development", "Marketing"];

export function getBlogSlug(title: string) {
  return title.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function formatBlogDate(date: string) {
  if (!date) return "";
  return new Date(`${date.slice(0, 10)}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const legacyContent = "Strong digital work starts with clarity: know the audience, remove friction, and give people a compelling next step. This is the lens we use when planning digital experiences for growing businesses.\n\nUse research, real customer questions, and performance data to focus every decision. A clear message and consistent visual system make it easier for visitors to understand your value and take action.\n\nPrioritize improvements that support a specific goal, then monitor how people engage with the experience. Iteration turns a one-time launch into a dependable growth channel.";

export const BASE_BLOG_POSTS: BlogPost[] = articles.map((article) => ({
  slug: article.slug,
  title: article.title,
  category: article.category,
  published_at: article.date,
  excerpt: article.excerpt,
  content: legacyContent,
  image: article.image,
  video: "",
  author: "The Linkage Team",
  published: true,
}));

export const emptyBlogPost: Omit<BlogPost, "id"> = {
  slug: "",
  title: "",
  category: blogCategories[0],
  published_at: new Date().toISOString().slice(0, 10),
  excerpt: "",
  content: "",
  image: "",
  video: "",
  author: "The Linkage Team",
  published: true,
};
