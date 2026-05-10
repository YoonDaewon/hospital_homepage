import type { MetadataRoute } from "next";
import { allSubPagePaths } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about/doctor`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about/equipment`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about/facility`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/visit`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const subPageRoutes: MetadataRoute.Sitemap = allSubPagePaths().map(
    ({ category, slug }) => ({
      url: `${base}/${category}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [...staticRoutes, ...subPageRoutes];
}
