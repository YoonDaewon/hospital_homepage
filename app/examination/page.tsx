import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";

export const metadata: Metadata = {
  title: "검사안내",
  description:
    "숨앤소리 이비인후과의 정밀 검사 안내. 청력검사, 비강내시경, 전정기능검사, 수면다원검사, 알레르기 검사까지 — 정확한 진단을 위한 통합 검사 시스템.",
  alternates: { canonical: "/examination" },
};

const exams = [
  {
    category: "HEARING",
    title: "청각 정밀 검사",
    items: [
      {
        name: "순음·어음 청력검사",
        desc: "방음실에서 진행되는 표준 청력검사로, 청각의 기본 상태를 정밀하게 평가합니다.",
      },
      {
        name: "임피던스 청력검사",
        desc: "고막의 움직임과 중이 상태를 측정하여, 중이염·이관기능 이상을 확인합니다.",
      },
      {
        name: "이음향방사검사 (OAE)",
        desc: "내이 유모세포의 기능을 평가합니다. 신생아·아동 청각 선별검사에도 활용됩니다.",
      },
      {
        name: "청성뇌간반응검사 (ABR)",
        desc: "청신경과 뇌간의 반응을 측정해 객관적인 청력 평가를 제공합니다.",
      },
    ],
  },
  {
    category: "RHINOLOGY",
    title: "비강·부비동 검사",
    items: [
      {
        name: "고해상도 비강내시경",
        desc: "비강과 부비동 입구, 아데노이드까지 미세한 병변을 정밀하게 관찰합니다.",
      },
      {
        name: "알레르기 항원 검사",
        desc: "혈액 검사로 알레르기 원인 항원을 정확히 분석하고 면역치료 계획을 수립합니다.",
      },
      {
        name: "후각 평가 검사",
        desc: "후각 저하·소실의 정도를 측정하고 회복 가능성을 평가합니다.",
      },
    ],
  },
  {
    category: "BALANCE",
    title: "전정기능 정밀 검사",
    items: [
      {
        name: "비디오 안진검사 (VNG)",
        desc: "안구 움직임을 정밀 측정하여 어지럼증의 원인이 전정기관에 있는지 평가합니다.",
      },
      {
        name: "회전의자검사",
        desc: "양측 전정기관의 균형을 측정해 좌우 비대칭 여부를 확인합니다.",
      },
      {
        name: "VEMP 검사",
        desc: "전정척수반사를 측정해 구형낭·난형낭의 기능을 평가합니다.",
      },
    ],
  },
  {
    category: "SLEEP",
    title: "수면 정밀 검사",
    items: [
      {
        name: "수면다원검사 (PSG)",
        desc: "1박 2일 정밀 수면검사로 무호흡지수, 산소포화도, 뇌파, 심박, 수면 단계까지 종합 평가합니다.",
      },
      {
        name: "양압기 적정압 검사",
        desc: "수면다원검사 결과를 바탕으로 환자에게 가장 적합한 양압기 압력을 설정합니다.",
      },
    ],
  },
  {
    category: "PEDIATRIC",
    title: "아동 발달 평가",
    items: [
      {
        name: "유소아 청력 평가",
        desc: "연령에 맞는 검사 도구로 아동의 청력을 부드럽게 평가합니다.",
      },
      {
        name: "언어 발달 평가",
        desc: "SELSI · REVT 등 표준화된 평가 도구로 언어 이해·표현 능력을 측정합니다.",
      },
      {
        name: "감각통합 평가",
        desc: "감각 처리·운동 협응·주의 집중 등 통합적 발달 영역을 평가합니다.",
      },
    ],
  },
];

export default function ExaminationPage() {
  return (
    <>
      <PageHero
        eyebrow="EXAMINATION"
        title="정확한 진단을 위한, 정밀한 검사"
        subtitle="검증된 검사 장비와 표준 프로토콜을 갖추고, 증상의 근본 원인을 찾기 위해 깊이 살핍니다."
      />

      <Section bg="bone" size="md">
        <div className="space-y-20 lg:space-y-28">
          {exams.map((group, i) => (
            <div key={group.category}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
                <div className="lg:col-span-5">
                  <p className="font-serif italic text-taupe text-xs tracking-[0.25em]">
                    0{i + 1}&nbsp;·&nbsp;{group.category}
                  </p>
                  <h2 className="mt-4 heading-display text-cocoa text-3xl md:text-4xl">
                    {group.title}
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 border-t border-line-strong">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-line py-7"
                  >
                    <h3 className="text-cocoa text-lg">{item.name}</h3>
                    <p className="mt-2 text-mocha leading-relaxed font-light text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="ivory" size="md">
        <SectionHeader
          eyebrow="EQUIPMENT"
          title={
            <>
              엄선된 검사 장비,
              <br className="md:hidden" />
              검증된 진단 정확도
            </>
          }
          desc="대학병원 수준의 검사 장비를 갖추고, 정기적인 보정과 전문 인력의 운용으로 정확한 결과를 제공합니다."
          align="center"
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <Placeholder aspect="square" tone="soft" label="AUDIOMETER" />
          <Placeholder aspect="square" tone="warm" label="ENDOSCOPE" />
          <Placeholder aspect="square" tone="warm" label="VNG" />
          <Placeholder aspect="square" tone="soft" label="PSG" />
        </div>
      </Section>
    </>
  );
}
