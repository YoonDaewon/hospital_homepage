import type { MetadataRoute } from "next";
import { clinics } from "@/lib/clinics";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/clinic`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/facility`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/examination`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/location`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const clinicRoutes: MetadataRoute.Sitemap = clinics.map((c) => ({
    url: `${base}/clinic/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...clinicRoutes];
}
