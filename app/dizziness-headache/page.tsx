import type { Metadata } from "next";
import { CategoryIndexView } from "@/components/clinic/CategoryIndexView";
import { dizzinessHeadache } from "@/lib/categories/dizziness-headache";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: dizzinessHeadache.name,
  description: dizzinessHeadache.intro,
  alternates: { canonical: `/${dizzinessHeadache.slug}` },
  openGraph: {
    title: `${dizzinessHeadache.name} | ${siteConfig.name}`,
    description: dizzinessHeadache.intro,
    url: `${siteConfig.url}/${dizzinessHeadache.slug}`,
  },
};

export default function DizzinessHeadachePage() {
  return <CategoryIndexView category={dizzinessHeadache} />;
}
