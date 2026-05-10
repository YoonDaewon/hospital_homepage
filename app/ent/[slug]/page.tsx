import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubPageView } from "@/components/clinic/SubPageView";
import { ent } from "@/lib/categories/ent";
import { siteConfig } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams() {
  return ent.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = ent.pages.find((p) => p.slug === slug);
  if (!page) return {};
  const url = `${siteConfig.url}/${ent.slug}/${page.slug}`;
  return {
    title: page.name,
    description: page.summary,
    keywords: page.keywords,
    alternates: { canonical: `/${ent.slug}/${page.slug}` },
    openGraph: {
      title: `${page.name} | ${siteConfig.name}`,
      description: page.summary,
      url,
    },
  };
}

export default async function EntSubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = ent.pages.find((p) => p.slug === slug);
  if (!page) notFound();
  return <SubPageView category={ent} page={page} />;
}
