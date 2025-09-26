import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://weblabs.id"; // ganti jika domain beda
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // blokir endpoint API
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
