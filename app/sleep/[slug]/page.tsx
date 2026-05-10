import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubPageView } from "@/components/clinic/SubPageView";
import { sleep } from "@/lib/categories/sleep";
import { siteConfig } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams() {
  return sleep.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = sleep.pages.find((p) => p.slug === slug);
  if (!page) return {};
  const url = `${siteConfig.url}/${sleep.slug}/${page.slug}`;
  return {
    title: page.name,
    description: page.summary,
    keywords: page.keywords,
    alternates: { canonical: `/${sleep.slug}/${page.slug}` },
    openGraph: {
      title: `${page.name} | ${siteConfig.name}`,
      description: page.summary,
      url,
    },
  };
}

export default async function SleepSubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = sleep.pages.find((p) => p.slug === slug);
  if (!page) notFound();
  return <SubPageView category={sleep} page={page} />;
}
