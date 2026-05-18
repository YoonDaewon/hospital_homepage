import type { Metadata } from "next";
import { FacilityGallery } from "@/components/site/FacilityGallery";

export const metadata: Metadata = {
  title: "둘러보기",
  description:
    "숨앤소리 이비인후과의 따뜻하고 정돈된 진료 공간을 소개합니다. 입구, 라운지, 리셉션, 복도, 수면 다원검사실까지 — 머무는 시간이 회복이 되는 공간.",
  alternates: { canonical: "/about/facility" },
};

export default function FacilityPage() {
  return (
    <>
      {/* Title Section */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 lg:pb-14 bg-white text-center">
        <p className="font-sans text-brand tracking-[0.35em] text-xs sm:text-[13px] font-bold mb-3 sm:mb-4">
          INTRODUCE CLINIC
        </p>
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-[60px] tracking-tight font-extrabold">
          <span className="text-brand">숨앤소리</span>{" "}
          <span className="text-charcoal">이비인후과</span>
        </h1>
      </section>

      {/* Sub-header */}
      <section className="bg-white pb-8 lg:pb-10">
        <div className="container-content text-center max-w-3xl mx-auto">
          <h2 className="font-sans font-extrabold text-charcoal text-3xl sm:text-4xl lg:text-[44px] tracking-tight mb-6 lg:mb-7">
            둘러보기
          </h2>
          <p className="text-mocha text-base lg:text-[17px] leading-[1.85] font-medium">
            머무는 시간이 회복이 되도록,
            <br className="hidden sm:block" />
            <span className="text-brand font-bold">
              섬세하게 설계된 공간에서 환자분을 맞이합니다.
            </span>
          </p>
        </div>
      </section>

      {/* Full-bleed gallery + thumbnails */}
      <section className="bg-white pb-16 lg:pb-24">
        <FacilityGallery />
      </section>
    </>
  );
}
