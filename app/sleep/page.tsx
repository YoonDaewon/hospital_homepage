import type { Metadata } from "next";
import { CategoryIndexView } from "@/components/clinic/CategoryIndexView";
import { sleep } from "@/lib/categories/sleep";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: sleep.name,
  description: sleep.intro,
  alternates: { canonical: `/${sleep.slug}` },
  openGraph: {
    title: `${sleep.name} | ${siteConfig.name}`,
    description: sleep.intro,
    url: `${siteConfig.url}/${sleep.slug}`,
  },
};

export default function SleepPage() {
  return <CategoryIndexView category={sleep} />;
}
