import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubPageView } from "@/components/clinic/SubPageView";
import { dizzinessHeadache } from "@/lib/categories/dizziness-headache";
import { siteConfig } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams() {
  return dizzinessHeadache.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = dizzinessHeadache.pages.find((p) => p.slug === slug);
  if (!page) return {};
  const url = `${siteConfig.url}/${dizzinessHeadache.slug}/${page.slug}`;
  return {
    title: page.name,
    description: page.summary,
    keywords: page.keywords,
    alternates: { canonical: `/${dizzinessHeadache.slug}/${page.slug}` },
    openGraph: {
      title: `${page.name} | ${siteConfig.name}`,
      description: page.summary,
      url,
    },
  };
}

export default async function DizzinessHeadacheSubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = dizzinessHeadache.pages.find((p) => p.slug === slug);
  if (!page) notFound();
  return <SubPageView category={dizzinessHeadache} page={page} />;
}
