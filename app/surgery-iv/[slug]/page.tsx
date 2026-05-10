import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubPageView } from "@/components/clinic/SubPageView";
import { surgeryIv } from "@/lib/categories/surgery-iv";
import { siteConfig } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams() {
  return surgeryIv.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = surgeryIv.pages.find((p) => p.slug === slug);
  if (!page) return {};
  const url = `${siteConfig.url}/${surgeryIv.slug}/${page.slug}`;
  return {
    title: page.name,
    description: page.summary,
    keywords: page.keywords,
    alternates: { canonical: `/${surgeryIv.slug}/${page.slug}` },
    openGraph: {
      title: `${page.name} | ${siteConfig.name}`,
      description: page.summary,
      url,
    },
  };
}

export default async function SurgeryIvSubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = surgeryIv.pages.find((p) => p.slug === slug);
  if (!page) notFound();
  return <SubPageView category={surgeryIv} page={page} />;
}
