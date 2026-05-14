import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "장비 소개",
  description:
    "숨앤소리 이비인후과의 정밀 진단 장비를 소개합니다. 청력검사, 중이·청신경 통합검사, 전정기능 검사, 외이도 3D 스캐너, 영상 내시경까지 — 대학병원 수준의 검사 시스템.",
  alternates: { canonical: "/about/equipment" },
};

type Equipment = {
  model: string;
  nameKo: string;
  desc: string;
  src: string;
};

const equipment: Equipment[] = [
  {
    model: "AD629",
    nameKo: "순음어음청력검사기",
    desc: "125~20,000Hz까지 검사 가능한 초고주파 청력검사기로, 청력 변화의 미세한 신호까지 정밀하게 측정합니다.",
    src: "/images/equipment/ad629.png",
  },
  {
    model: "TITAN",
    nameKo: "임피던스/이음향방사 청각검사기",
    desc: "고막 운동성과 중이의 압력을 측정하는 임피던스 검사, 그리고 달팽이관 유모세포의 미세 반응을 측정하는 이음향방사(OAE) 검사를 정밀하게 수행하는 장비입니다.",
    src: "/images/equipment/titan.png",
  },
  {
    model: "ENT Surgery Equipment",
    nameKo: "ENT 전기 수술 장치",
    desc: "저주파 저온 기법으로 조직을 태우지 않고 익히는 시술 장비. 임피던스 값을 자동으로 감지해 응고 완료 시점에 알람을 울리는 자동 피드백 기능을 갖췄으며, 내부 응고로 외부 손상을 최소화합니다.",
    src: "/images/equipment/sense-z.png",
  },
  {
    model: "Operating Microscope",
    nameKo: "폐기능검사기",
    desc: "폐의 용량과 호흡 기능을 측정하여, 호흡기 질환이나 호흡기 계통의 문제를 조기에 발견하고 관리하는 데 도움을 주는 장비입니다.",
    src: "/images/equipment/operating-microscope.png",
  },
  {
    model: "Genoray ENT Digital 3D CT",
    nameKo: "컴퓨터 단층 촬영",
    desc: "정밀 진단을 위해 이비인후과 영역을 최소의 방사선량으로 촬영할 수 있는 영상 장비입니다.",
    src: "/images/equipment/genoray-3d-ct.png",
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
      {/* Title section — INTRODUCE CLINIC */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 lg:pb-14 bg-bone text-center">
        <p className="font-sans text-brand tracking-[0.35em] text-xs sm:text-[13px] font-bold mb-3 sm:mb-4">
          INTRODUCE CLINIC
        </p>
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-[60px] tracking-tight font-extrabold">
          <span className="text-brand">숨앤소리</span>{" "}
          <span className="text-cocoa">이비인후과</span>
        </h1>
      </section>

      {/* Equipment showcase */}
      <section className="bg-bone pb-16 lg:pb-24">
        <div className="container-content">
          {/* Sub-header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="font-sans font-extrabold text-cocoa text-3xl sm:text-4xl lg:text-[44px] tracking-tight mb-6 lg:mb-7">
              장비 소개
            </h2>
            <p className="text-mocha text-base lg:text-[17px] leading-[1.85] font-medium">
              검사 장비는 진단의 출발점이자 한계점입니다.
              <br className="hidden sm:block" />
              <span className="text-brand font-bold">
                정밀 검사를 통해 환자분이 받는 모든 결과의 신뢰를 끝까지 책임집니다.
              </span>
            </p>
          </div>

          {/* Equipment grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-16">
            {equipment.map((e) => (
              <article key={e.model} className="flex flex-col">
                <div className="relative aspect-[4/3] w-full bg-ivory border border-line overflow-hidden">
                  <Image
                    src={e.src}
                    alt={`${e.model} — ${e.nameKo}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2 sm:p-3 lg:p-4"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-brand font-extrabold text-lg lg:text-xl tracking-tight">
                    {e.model}
                  </h3>
                  <p className="mt-1.5 text-cocoa font-bold text-[15.5px] lg:text-base tracking-tight">
                    {e.nameKo}
                  </p>
                </div>
                <div className="mt-4 pt-5 border-t border-line-strong">
                  <p className="text-mocha text-[14.5px] lg:text-[15px] leading-[1.85] font-medium">
                    {e.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
