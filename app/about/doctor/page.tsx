import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "대표원장 소개",
  description:
    "숨앤소리 이비인후과 오승리 대표원장의 학력·경력·학회 활동을 소개합니다.",
  alternates: { canonical: "/about/doctor" },
};

const education = [
  "중앙대학교 의과대학 졸업",
  "중앙대학교 이비인후과학 석사",
  "중앙대병원 이비인후과 수석전공의",
  "중앙대병원 이비인후과 외래교수",
  "수면다원검사 정도관리위원회 인증의",
];

const career = [
  "현) 숨앤소리이비인후과 대표원장",
  "전) 영종바른이비인후과 원장",
  "전) BS코아이비인후과 원장",
];

const societies = [
  "대한이비인후과학회 정회원",
  "대한비과학회 정회원",
  "대한이과학회 정회원",
  "대한두경부외과학회 정회원",
  "대한평형의학회 정회원",
  "대한청각학회 정회원",
  "대한천식알레르기학회 정회원",
  "대한수면의학회 정회원",
  "대한수면호흡학회 정회원",
];

export default function DoctorPage() {
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

      {/* Photo + Bio */}
      <section className="relative bg-white overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 lg:items-stretch">
          {/* LEFT — doctor photo (full-bleed) */}
          <div className="relative h-[62vh] min-h-[480px] lg:h-auto lg:min-h-[760px] bg-ivory">
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

              <p className="font-sans text-brand tracking-[0.25em] text-[12px] sm:text-sm font-bold mb-2">
                DR. OH SEUNG RI
              </p>
              <h2 className="text-charcoal text-3xl sm:text-[34px] lg:text-[40px] tracking-tight mb-2">
                <span className="font-extrabold">오승리</span>{" "}
                <span className="font-medium">대표원장</span>
              </h2>
              <p className="text-charcoal/70 font-semibold text-sm lg:text-[15px] tracking-tight mb-7 lg:mb-9">
                이비인후과 전문의
              </p>

              {/* 학력 */}
              <div>
                <h3 className="font-bold text-charcoal text-lg mb-4">학력</h3>
                <ul className="space-y-2.5">
                  {education.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-charcoal/85 text-[14.5px] lg:text-[15px] font-medium"
                    >
                      <span
                        aria-hidden
                        className="mt-[9px] w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 경력 */}
              <div className="mt-8">
                <h3 className="font-bold text-charcoal text-lg mb-4">경력</h3>
                <ul className="space-y-2.5">
                  {career.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-charcoal/85 text-[14.5px] lg:text-[15px] font-medium"
                    >
                      <span
                        aria-hidden
                        className="mt-[9px] w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 학회 활동 — full-width grid below */}
      <section className="bg-white pb-16 lg:pb-24">
        <div className="container-content">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block bg-brand text-bone font-bold px-5 py-2 rounded-md text-sm lg:text-[15px] tracking-wide">
              학회 활동
            </span>
          </div>
          <div className="border-t border-line-strong pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5">
            {societies.map((s) => (
              <div
                key={s}
                className="flex items-start gap-3 text-charcoal/85 text-[14.5px] lg:text-[15px] font-medium"
              >
                <span
                  aria-hidden
                  className="mt-[10px] w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
