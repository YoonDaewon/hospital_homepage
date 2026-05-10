import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageSections } from "@/components/ui/PageSections";
import { siteConfig } from "@/lib/site-config";
import type { Category, SubPage } from "@/lib/categories/types";

export function SubPageView({
  category,
  page,
}: {
  category: Category;
  page: SubPage;
}) {
  const others = category.pages.filter((p) => p.slug !== page.slug);

  return (
    <>
      <PageHero
        eyebrow={page.nameEn.toUpperCase()}
        title={page.name}
        subtitle={page.tagline}
        image={page.hero?.image}
        imageAlt={page.hero?.imageAlt ?? page.name}
      />

      <PageSections sections={page.sections} />

      <Section bg="ivory" size="md">
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
              {siteConfig.hours
                .map((h) => `${h.label} ${h.display}`)
                .join(" / ")}
            </p>
          </div>
        </div>
      </Section>

      {others.length > 0 && (
        <Section bg="bone" size="md">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-3">RELATED</p>
              <h2 className="heading-display text-cocoa text-2xl md:text-3xl">
                {category.name}의 다른 진료
              </h2>
            </div>
            <Link
              href={`/${category.slug}`}
              className="text-cocoa text-sm tracking-[0.2em] border-b border-cocoa/30 pb-1 hover:border-cocoa transition-colors"
            >
              VIEW ALL <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
            {others.slice(0, 3).map((p, i) => (
              <Link
                key={p.slug}
                href={`/${category.slug}/${p.slug}`}
                className="group block"
              >
                <Placeholder
                  aspect="video"
                  tone={i % 2 === 0 ? "warm" : "soft"}
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="mt-5">
                  <p className="font-serif italic text-taupe text-xs tracking-[0.2em]">
                    {p.nameEn.toUpperCase()}
                  </p>
                  <h3 className="mt-2 text-cocoa text-xl">{p.name}</h3>
                  <p className="mt-3 text-mocha text-sm leading-relaxed font-light line-clamp-2">
                    {p.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
