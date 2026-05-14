import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "대표원장 소개",
  description:
    "숨앤소리 이비인후과 오승리 대표원장의 학력·수련·전문의 자격·학회 활동을 소개합니다.",
  alternates: { canonical: "/about/doctor" },
};

const education = [
  "중앙대학교 의과대학 졸업",
  "중앙대학교 의학 석사",
  "중앙대학교병원 이비인후과 전공의 수료",
];

const credentials = ["대한이비인후과학회 인정 이비인후과 전문의"];

const societies = [
  "대한이비인후과학회 정회원",
  "대한비과학회 정회원",
  "대한이과학회 정회원",
  "대한두경부외과학회 정회원",
  "대한소아이비인후과학회 정회원",
  "대한수면학회 정회원",
];

export default function DoctorPage() {
  return (
    <>
      {/* Title Section — 동일한 INTRODUCE CLINIC 헤더 */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 lg:pb-14 bg-bone text-center">
        <p className="font-sans text-brand tracking-[0.35em] text-xs sm:text-[13px] font-bold mb-3 sm:mb-4">
          INTRODUCE CLINIC
        </p>
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-[60px] tracking-tight font-extrabold">
          <span className="text-brand">숨앤소리</span>{" "}
          <span className="text-cocoa">이비인후과</span>
        </h1>
      </section>

      {/* Photo + Bio */}
      <section className="relative bg-bone overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 lg:items-stretch">
          {/* LEFT — doctor photo (full-bleed) */}
          <div className="relative h-[62vh] min-h-[480px] lg:h-auto lg:min-h-[720px] bg-ivory">
            <Image
              src="/images/doctor_v1.png"
              alt="숨앤소리 이비인후과 오승리 대표원장"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>

          {/* RIGHT — bio */}
          <div className="flex items-center py-12 lg:py-16 px-6 sm:px-10 md:px-14 lg:pl-14 xl:pl-20 lg:pr-6 xl:pr-[max(1.5rem,calc((100vw-1200px)/2))]">
            <div className="w-full lg:max-w-[560px]">
              <div className="flex items-center gap-2.5 mb-3">
                <Image
                  src="/images/icon_v1.png"
                  alt=""
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
                <p className="text-brand font-bold text-[15px] tracking-tight">
                  숨앤소리 이비인후과
                </p>
              </div>
              <h2 className="text-cocoa text-3xl sm:text-[34px] lg:text-[40px] font-extrabold tracking-tight mb-6 lg:mb-7">
                대표원장 소개
              </h2>
              <p className="text-cocoa text-[15.5px] lg:text-[17px] leading-[1.85] font-medium mb-8 lg:mb-10">
                숨앤소리 이비인후과의 믿을 수 있는 의사,
                <br />
                <span className="text-brand font-extrabold">
                  오승리 대표원장
                </span>
                을 소개합니다.
              </p>

              <div className="space-y-6 text-charcoal/85 text-[14.5px] lg:text-[15px] leading-[1.9] font-medium">
                <ul className="space-y-1">
                  {education.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <ul className="space-y-1">
                  {credentials.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <ul className="space-y-1">
                  {societies.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
