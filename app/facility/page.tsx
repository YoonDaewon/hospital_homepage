import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { MediaFrame } from "@/components/ui/MediaFrame";

export const metadata: Metadata = {
  title: "시설안내",
  description:
    "숨앤소리 이비인후과의 따뜻하고 정돈된 진료 공간을 소개합니다. 라운지, 리셉션, 진료실, 수면다원검사실까지 환자분의 회복에 집중할 수 있도록 섬세하게 설계했습니다.",
  alternates: { canonical: "/facility" },
};

const facilities: {
  label: string;
  title: string;
  desc: string;
  src: string;
  alt: string;
  aspect?: "video" | "portrait" | "wide" | "square";
}[] = [
  {
    label: "01 · LOUNGE",
    title: "라운지",
    desc: "넓은 창과 따뜻한 조명, 부드러운 곡선의 공간. 진료를 기다리는 시간이 휴식이 되도록 설계했습니다.",
    src: "/images/facility/lounge.jpeg",
    alt: "숨앤소리 이비인후과 라운지",
    aspect: "wide",
  },
  {
    label: "02 · RECEPTION",
    title: "리셉션",
    desc: "원형의 동선과 간접 조명으로 안내받는 순간부터 편안함을 느끼실 수 있도록 디자인했습니다.",
    src: "/images/facility/reception.jpeg",
    alt: "숨앤소리 이비인후과 리셉션 데스크",
    aspect: "video",
  },
  {
    label: "03 · CONSULTATION",
    title: "진료실",
    desc: "환자분과 마주 앉아 충분히 이야기 나눌 수 있는 따뜻한 공간. 자연광이 부드럽게 들어옵니다.",
    src: "/images/facility/consultation.jpeg",
    alt: "숨앤소리 이비인후과 진료실",
    aspect: "video",
  },
  {
    label: "04 · SLEEP TEST ROOM",
    title: "수면다원검사실",
    desc: "방음과 조명, 침구까지 호텔 객실 수준으로 설계된 1인실. 가장 자연스러운 수면 상태를 측정합니다.",
    src: "/images/facility/sleep-room.jpeg",
    alt: "숨앤소리 이비인후과 수면다원검사실",
    aspect: "portrait",
  },
];

export default function FacilityPage() {
  return (
    <>
      <PageHero
        eyebrow="FACILITY"
        title="머무는 시간이 회복이 되는 공간"
        subtitle="진료실 너머의 동선과 분위기까지, 환자분의 마음이 편해지는 모든 디테일을 살폈습니다."
        image="/images/facility/lounge.jpeg"
        imageAlt="숨앤소리 이비인후과 라운지"
      />

      <Section bg="bone" size="md">
        <div className="space-y-24 lg:space-y-32">
          {facilities.map((f, i) => (
            <div
              key={f.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              <div
                className={`lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <MediaFrame
                  src={f.src}
                  alt={f.alt}
                  aspect={f.aspect ?? "video"}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="font-serif italic text-taupe text-xs tracking-[0.25em]">
                  {f.label}
                </p>
                <h2 className="mt-4 heading-display text-cocoa text-3xl md:text-4xl">
                  {f.title}
                </h2>
                <p className="mt-6 text-mocha leading-[1.9] font-light">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="ivory" size="md">
        <SectionHeader
          eyebrow="MATERIAL & MOOD"
          title={
            <>
              자연의 톤,
              <br className="md:hidden" />
              따뜻한 무드
            </>
          }
          desc="베이지·아이보리·우드의 조화 속에서, 가장 자연스러운 호흡을 되찾으실 수 있도록 색과 질감을 골랐습니다."
          align="center"
        />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {facilities.map((f) => (
            <MediaFrame
              key={`mood-${f.src}`}
              src={f.src}
              alt={f.alt}
              aspect="square"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
