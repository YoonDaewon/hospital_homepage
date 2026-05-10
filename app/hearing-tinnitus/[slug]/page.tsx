import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubPageView } from "@/components/clinic/SubPageView";
import { hearingTinnitus } from "@/lib/categories/hearing-tinnitus";
import { siteConfig } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams() {
  return hearingTinnitus.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = hearingTinnitus.pages.find((p) => p.slug === slug);
  if (!page) return {};
  const url = `${siteConfig.url}/${hearingTinnitus.slug}/${page.slug}`;
  return {
    title: page.name,
    description: page.summary,
    keywords: page.keywords,
    alternates: { canonical: `/${hearingTinnitus.slug}/${page.slug}` },
    openGraph: {
      title: `${page.name} | ${siteConfig.name}`,
      description: page.summary,
      url,
    },
  };
}

export default async function HearingTinnitusSubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = hearingTinnitus.pages.find((p) => p.slug === slug);
  if (!page) notFound();
  return <SubPageView category={hearingTinnitus} page={page} />;
}
