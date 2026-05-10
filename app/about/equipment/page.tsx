import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "장비 소개",
  description:
    "숨앤소리 이비인후과의 정밀 진단 장비를 소개합니다. 청력검사, 중이·청신경 통합검사, 전정기능 검사, 외이도 3D 스캐너, 영상 내시경까지 — 대학병원 수준의 검사 시스템.",
  alternates: { canonical: "/about/equipment" },
};

type Equipment = {
  model: string;
  maker?: string;
  nameKo: string;
  desc: string;
  src: string;
};

const equipment: Equipment[] = [
  {
    model: "AD629",
    maker: "Interacoustics",
    nameKo: "정밀 진단 청력검사기",
    desc: "순음·어음 청력검사를 비롯한 표준 청각 평가를 정밀하게 수행하는 임상 진단용 장비. 청력 변화의 미세한 신호까지 놓치지 않습니다.",
    src: "/images/equipment/ad629.png",
  },
  {
    model: "Titan",
    maker: "Interacoustics",
    nameKo: "중이·청신경 통합 검사 시스템",
    desc: "임피던스(고막운동성), 이음향방사(OAE), 청성뇌간반응(ABR) 검사를 한 장비에서 수행. 외이부터 청신경까지의 경로를 입체적으로 평가합니다.",
    src: "/images/equipment/titan.png",
  },
  {
    model: "Sens-Z",
    nameKo: "휴대형 청각 스크리닝 시스템",
    desc: "휴대 가능한 디자인으로, 청각 선별 검사와 빠른 모니터링에 활용됩니다. 신생아·아동 청각 평가에도 적합합니다.",
    src: "/images/equipment/sens-z.jpg",
  },
  {
    model: "AVAD-9",
    nameKo: "전정·평형 정밀 검사 시스템",
    desc: "안구의 미세한 움직임을 측정해, 어지럼증의 원인이 전정기관에 있는지를 객관적으로 평가합니다. 이석증·메니에르병 진단에 활용됩니다.",
    src: "/images/equipment/avad-9.png",
  },
  {
    model: "Papaya 3D",
    nameKo: "외이도 3D 스캐너",
    desc: "환자의 외이도 형태를 정밀하게 3D로 측정합니다. 보청기와 이어몰드의 정확한 맞춤 제작을 가능하게 하는 핵심 장비입니다.",
    src: "/images/equipment/papaya3d.png",
  },
  {
    model: "V1 Smart Dual Camera",
    nameKo: "비·인후두 영상 내시경",
    desc: "이중 카메라 구성으로 비강·인두·후두까지의 미세한 병변을 정밀하게 관찰합니다. 환자도 함께 화면을 보며 설명을 들을 수 있습니다.",
    src: "/images/equipment/v1_smart_dual_camera_type.png",
  },
];

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        plain
        eyebrow="EQUIPMENT"
        title="정확한 진단을 위한, 정밀한 장비"
        subtitle="대학병원 수준의 검사 장비와 표준 프로토콜을 갖추고, 증상의 근본 원인을 찾기 위해 깊이 살핍니다."
      />

      <Section bg="bone" size="md">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">PHILOSOPHY</p>
          <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
            가장 정확한 결과를 위한, 가장 검증된 장비
          </h2>
          <p className="mt-8 text-mocha text-base md:text-[17px] leading-[1.95] font-light">
            검사 장비는 진단의 출발점이자 한계점입니다. 숨앤소리 이비인후과는
            국제 임상 기준에 부합하는 검증된 장비를 갖추고, 정기적인 보정과
            전문 인력의 운용을 통해 — 환자분이 받으시는 모든 검사 결과의
            신뢰도를 끝까지 책임집니다.
          </p>
        </div>
      </Section>

      <Section bg="ivory" size="md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-16">
          {equipment.map((e, i) => (
            <article key={e.model} className="flex flex-col">
              <div className="relative aspect-square w-full bg-bone border border-line overflow-hidden">
                <Image
                  src={e.src}
                  alt={`${e.maker ? e.maker + " " : ""}${e.model}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-10 lg:p-12"
                />
                <span className="absolute top-4 left-4 font-serif italic text-taupe text-[11px] tracking-[0.25em]">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-6">
                {e.maker && (
                  <p className="font-serif italic text-taupe text-[11px] tracking-[0.25em]">
                    {e.maker.toUpperCase()}
                  </p>
                )}
                <h3 className="mt-2 text-cocoa text-xl lg:text-[22px] tracking-tight">
                  {e.model}
                </h3>
                <p className="mt-1 text-mocha text-sm tracking-wide">
                  {e.nameKo}
                </p>
                <p className="mt-4 text-mocha text-[14.5px] leading-[1.85] font-light">
                  {e.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="sand" size="md">
        <SectionHeader
          eyebrow="STANDARDS"
          title={
            <>
              엄선된 장비,
              <br className="md:hidden" />
              검증된 진단 정확도
            </>
          }
          desc="장비의 정기 보정, 표준 프로토콜의 준수, 그리고 전문 인력의 운용 — 세 가지가 함께 갖춰질 때 비로소 결과의 신뢰가 완성됩니다."
          align="center"
        />
      </Section>
    </>
  );
}
