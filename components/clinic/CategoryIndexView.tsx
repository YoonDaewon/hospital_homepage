import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import type { Category } from "@/lib/categories/types";

export function CategoryIndexView({ category }: { category: Category }) {
  return (
    <>
      <PageHero
        eyebrow={category.nameEn.toUpperCase()}
        title={category.name}
        subtitle={category.tagline}
        image={category.hero?.image}
        imageAlt={category.hero?.imageAlt ?? category.name}
      />

      <Section bg="bone" size="md">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">INTRO</p>
          <p className="text-mocha text-base md:text-lg leading-[1.95] font-light">
            {category.intro}
          </p>
        </div>
      </Section>

      <Section bg="ivory" size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {category.pages.map((p, i) => (
            <Link
              key={p.slug}
              href={`/${category.slug}/${p.slug}`}
              className="group block"
            >
              <Placeholder
                aspect="video"
                tone={i % 3 === 1 ? "soft" : "warm"}
                className="transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="mt-5">
                <p className="font-serif italic text-taupe text-xs tracking-[0.2em]">
                  0{i + 1}&nbsp;·&nbsp;{p.nameEn.toUpperCase()}
                </p>
                <h3 className="mt-2 text-cocoa text-xl md:text-2xl font-normal tracking-tight group-hover:text-mocha transition-colors">
                  {p.name}
                </h3>
                <p className="mt-3 text-mocha text-sm leading-relaxed font-light line-clamp-3">
                  {p.summary}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-xs text-cocoa tracking-[0.2em] border-b border-cocoa/30 pb-1 group-hover:border-cocoa transition-colors">
                  READ MORE <span>→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
