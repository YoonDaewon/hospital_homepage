import type { Metadata } from "next";
import { CategoryIndexView } from "@/components/clinic/CategoryIndexView";
import { ent } from "@/lib/categories/ent";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: ent.name,
  description: ent.intro,
  alternates: { canonical: `/${ent.slug}` },
  openGraph: {
    title: `${ent.name} | ${siteConfig.name}`,
    description: ent.intro,
    url: `${siteConfig.url}/${ent.slug}`,
  },
};

export default function EntPage() {
  return <CategoryIndexView category={ent} />;
}
