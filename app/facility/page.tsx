import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";

export const metadata: Metadata = {
  title: "시설안내",
  description:
    "숨앤소리 이비인후과의 따뜻하고 정돈된 진료 공간을 소개합니다. 라운지, 진료실, 검사실, 처치실, 휴게 공간까지 환자분의 회복에 집중할 수 있도록 섬세하게 설계했습니다.",
  alternates: { canonical: "/facility" },
};

const facilities: {
  label: string;
  title: string;
  desc: string;
  tone: "warm" | "deep" | "soft";
  aspect?: "video" | "portrait" | "wide" | "square";
}[] = [
  {
    label: "01 · LOUNGE",
    title: "라운지",
    desc: "넓은 창과 따뜻한 조명, 부드러운 곡선의 공간. 진료를 기다리는 시간이 휴식이 되도록 설계했습니다.",
    tone: "warm",
    aspect: "wide",
  },
  {
    label: "02 · RECEPTION",
    title: "리셉션",
    desc: "원형의 동선과 간접 조명으로 안내받는 순간부터 편안함을 느끼실 수 있도록 디자인했습니다.",
    tone: "soft",
    aspect: "video",
  },
  {
    label: "03 · CONSULTATION",
    title: "진료실",
    desc: "환자분과 마주 앉아 충분히 이야기 나눌 수 있는 따뜻한 공간. 자연광이 부드럽게 들어옵니다.",
    tone: "warm",
    aspect: "video",
  },
  {
    label: "04 · TREATMENT",
    title: "처치실",
    desc: "위생과 프라이버시를 모두 고려한 구조. 처치 과정에서 환자분이 안정감을 느끼실 수 있도록 했습니다.",
    tone: "soft",
    aspect: "portrait",
  },
  {
    label: "05 · REST AREA",
    title: "휴게 공간",
    desc: "검사 후 또는 시술 후 잠시 호흡을 가다듬을 수 있는 조용한 라운지. 차분한 톤의 인테리어로 회복에 집중할 수 있습니다.",
    tone: "deep",
    aspect: "video",
  },
  {
    label: "06 · SLEEP TEST ROOM",
    title: "수면다원검사실",
    desc: "방음과 조명, 침구까지 호텔 객실 수준으로 설계된 1인실. 가장 자연스러운 수면 상태를 측정합니다.",
    tone: "warm",
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
      />

      <Section bg="bone" size="md">
        <div className="space-y-24 lg:space-y-32">
          {facilities.map((f, i) => (
            <div
              key={f.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "" : ""
              }`}
            >
              <div
                className={`lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Placeholder
                  aspect={f.aspect ?? "video"}
                  tone={f.tone}
                  label={f.label.split("·")[1]?.trim()}
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
          <Placeholder aspect="square" tone="soft" />
          <Placeholder aspect="square" tone="warm" />
          <Placeholder aspect="square" tone="warm" />
          <Placeholder aspect="square" tone="deep" />
        </div>
      </Section>
    </>
  );
}
