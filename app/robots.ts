import { MetadataRoute } from "next";

const BASE = "https://geo.goushaoai.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /* General crawlers */
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      /* AI training & search crawlers — explicitly allowed for GEO visibility */
      { userAgent: "GPTBot",          allow: "/" },
      { userAgent: "ChatGPT-User",    allow: "/" },
      { userAgent: "ClaudeBot",       allow: "/" },
      { userAgent: "anthropic-ai",    allow: "/" },
      { userAgent: "PerplexityBot",   allow: "/" },
      { userAgent: "Googlebot",       allow: "/" },
      { userAgent: "Bingbot",         allow: "/" },
      { userAgent: "DuckDuckBot",     allow: "/" },
      { userAgent: "Bytespider",      allow: "/" },  // 豆包 / ByteDance
      { userAgent: "Applebot",        allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
