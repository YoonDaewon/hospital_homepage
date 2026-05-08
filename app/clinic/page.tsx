import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { clinics } from "@/lib/clinics";

export const metadata: Metadata = {
  title: "진료안내",
  description:
    "숨앤소리 이비인후과의 7개 전문 클리닉을 소개합니다. 난청·이명, 어지럼증·두통, 비염·축농증, 수면질환, 아동발달, 기능의학, 보청기 센터까지 정밀한 맞춤 진료.",
  alternates: { canonical: "/clinic" },
};

export default function ClinicIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR CLINIC"
        title="7개의 전문 클리닉"
        subtitle="이비인후과 영역의 모든 증상을 깊이 있게 다루기 위해, 클리닉별로 전문화된 진료 시스템을 갖추었습니다."
      />
      <Section bg="bone" size="md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {clinics.map((c, i) => (
            <Link
              key={c.slug}
              href={`/clinic/${c.slug}`}
              className="group block"
            >
              <Placeholder
                aspect="video"
                tone={i % 3 === 1 ? "soft" : "warm"}
                className="transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="mt-6">
                <p className="font-serif italic text-taupe text-xs tracking-[0.2em]">
                  0{i + 1}&nbsp;·&nbsp;{c.nameEn.toUpperCase()}
                </p>
                <h3 className="mt-2 text-cocoa text-2xl font-normal tracking-tight">
                  {c.name}
                </h3>
                <p className="mt-3 text-mocha leading-relaxed font-light line-clamp-2">
                  {c.summary}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-xs text-cocoa tracking-[0.2em] border-b border-cocoa/30 pb-1 group-hover:border-cocoa transition-colors">
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
