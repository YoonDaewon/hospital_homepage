import type { Metadata } from "next";
import { CategoryIndexView } from "@/components/clinic/CategoryIndexView";
import { hearingTinnitus } from "@/lib/categories/hearing-tinnitus";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: hearingTinnitus.name,
  description: hearingTinnitus.intro,
  alternates: { canonical: `/${hearingTinnitus.slug}` },
  openGraph: {
    title: `${hearingTinnitus.name} | ${siteConfig.name}`,
    description: hearingTinnitus.intro,
    url: `${siteConfig.url}/${hearingTinnitus.slug}`,
  },
};

export default function HearingTinnitusPage() {
  return <CategoryIndexView category={hearingTinnitus} />;
}
