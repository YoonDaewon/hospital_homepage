import type { Metadata } from "next";
import { CategoryIndexView } from "@/components/clinic/CategoryIndexView";
import { surgeryIv } from "@/lib/categories/surgery-iv";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: surgeryIv.name,
  description: surgeryIv.intro,
  alternates: { canonical: `/${surgeryIv.slug}` },
  openGraph: {
    title: `${surgeryIv.name} | ${siteConfig.name}`,
    description: surgeryIv.intro,
    url: `${siteConfig.url}/${surgeryIv.slug}`,
  },
};

export default function SurgeryIvPage() {
  return <CategoryIndexView category={surgeryIv} />;
}
