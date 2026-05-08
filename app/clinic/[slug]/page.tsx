import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { clinics, getClinic } from "@/lib/clinics";
import { siteConfig } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams() {
  return clinics.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinic(slug);
  if (!clinic) return {};
  return {
    title: clinic.name,
    description: clinic.summary,
    keywords: clinic.keywords,
    alternates: { canonical: `/clinic/${clinic.slug}` },
    openGraph: {
      title: `${clinic.name} | ${siteConfig.name}`,
      description: clinic.summary,
      url: `${siteConfig.url}/clinic/${clinic.slug}`,
    },
  };
}

export default async function ClinicDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const clinic = getClinic(slug);
  if (!clinic) notFound();

  const otherClinics = clinics.filter((c) => c.slug !== clinic.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={clinic.nameEn.toUpperCase()}
        title={clinic.name}
        subtitle={clinic.tagline}
      />

      <Section bg="bone" size="md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Placeholder aspect="portrait" tone="warm" />
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">OVERVIEW</p>
            <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
              {clinic.tagline}
            </h2>
            <p className="mt-8 text-mocha text-base md:text-[17px] leading-[1.95] font-light">
              {clinic.description}
            </p>
          </div>
        </div>
      </Section>

      <Section bg="ivory" size="md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">SYMPTOMS</p>
            <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
              혹시 이런 증상이 있으신가요?
            </h2>
            <p className="mt-6 text-mocha font-light leading-relaxed">
              아래 증상 중 하나라도 해당되신다면, 정밀 검진을 권해드립니다.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line">
              {clinic.symptoms.map((s, i) => (
                <li
                  key={s}
                  className="flex items-start gap-5 py-5 text-charcoal"
                >
                  <span className="font-serif italic text-taupe text-sm tracking-wider mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed font-light">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section bg="bone" size="md">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">PROGRAMS</p>
          <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
            진료 프로그램
          </h2>
          <p className="mt-6 text-mocha font-light leading-relaxed">
            정밀 진단부터 맞춤 치료, 사후관리까지 단계별 통합 진료를 제공합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {clinic.programs.map((p, i) => (
            <div
              key={p.title}
              className="bg-ivory border border-line p-8 lg:p-10"
            >
              <p className="font-serif italic text-taupe text-xs tracking-[0.2em]">
                STEP&nbsp;{String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-cocoa text-xl tracking-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-mocha leading-relaxed font-light text-[15px]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="sand" size="md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow mb-4">CONSULT</p>
            <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
              궁금한 점이 있으신가요?
            </h2>
            <p className="mt-6 text-mocha font-light leading-relaxed">
              증상이나 검사, 치료 과정에 대해 더 자세한 설명이 필요하시다면
              언제든 연락 주세요. 친절히 안내해 드리겠습니다.
            </p>
          </div>
          <div className="md:text-right space-y-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="block text-cocoa"
            >
              <span className="font-serif italic text-taupe text-sm">
                Tel.
              </span>
              <span className="block text-3xl md:text-4xl tracking-wider mt-1">
                {siteConfig.phoneDisplay}
              </span>
            </a>
            <p className="text-sm text-charcoal/70 font-light">
              {siteConfig.hours.map((h) => `${h.label} ${h.display}`).join(" / ")}
            </p>
          </div>
        </div>
      </Section>

      <Section bg="bone" size="md">
        <p className="eyebrow mb-4">OTHER CLINICS</p>
        <div className="flex items-end justify-between mb-10">
          <h2 className="heading-display text-cocoa text-2xl md:text-3xl">
            다른 진료 분야
          </h2>
          <Link
            href="/clinic"
            className="text-cocoa text-sm tracking-[0.2em] border-b border-cocoa/30 pb-1 hover:border-cocoa transition-colors"
          >
            ALL CLINICS →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
          {otherClinics.map((c, i) => (
            <Link
              key={c.slug}
              href={`/clinic/${c.slug}`}
              className="group block"
            >
              <Placeholder
                aspect="video"
                tone={i % 2 === 0 ? "warm" : "soft"}
                className="transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="mt-5">
                <p className="font-serif italic text-taupe text-xs tracking-[0.2em]">
                  {c.nameEn.toUpperCase()}
                </p>
                <h3 className="mt-2 text-cocoa text-xl">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
