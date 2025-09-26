// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://weblabs.id";
  const now = new Date().toISOString();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/tentang`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/layanan`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/portofolio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/karir-kemitraan`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
