import { useEffect } from "react";

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    document.title = config.title;

    const updateMeta = (selector: string, attribute: "name" | "property", value: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateMeta('meta[name="description"]', "name", "description", config.description);
    updateMeta('meta[name="keywords"]', "name", "keywords", config.keywords);
    updateMeta('meta[property="og:title"]', "property", "og:title", config.ogTitle || config.title);
    updateMeta('meta[property="og:description"]', "property", "og:description", config.ogDescription || config.description);
    updateMeta('meta[property="og:url"]', "property", "og:url", config.canonicalUrl || window.location.href);
    updateMeta('meta[name="twitter:title"]', "name", "twitter:title", config.ogTitle || config.title);
    updateMeta('meta[name="twitter:description"]', "name", "twitter:description", config.ogDescription || config.description);

    if (config.ogImage) {
      updateMeta('meta[property="og:image"]', "property", "og:image", config.ogImage);
      updateMeta('meta[name="twitter:image"]', "name", "twitter:image", config.ogImage);
    }

    if (config.canonicalUrl) {
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", config.canonicalUrl);
    }

    let schemaScript = document.querySelector<HTMLScriptElement>('script[data-route-schema="true"]');
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.dataset.routeSchema = "true";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(config.schema || {});
  }, [config]);
}
