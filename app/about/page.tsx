import type { Metadata } from "next";
import Image from "next/image";
import { AboutImageCarousel } from "@/components/site/AboutImageCarousel";

export const metadata: Metadata = {
  title: "숨앤소리 이비인후과",
  description:
    "숨앤소리 이비인후과는 환자분 한 분 한 분의 호흡과 소리에 가장 가까이 다가가는 강남 역삼역 이비인후과입니다.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Title Section */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 lg:pb-14 bg-bone text-center">
        <p className="font-sans text-brand tracking-[0.35em] text-xs sm:text-[13px] font-bold mb-3 sm:mb-4">
          INTRODUCE CLINIC
        </p>
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-[60px] tracking-tight font-extrabold">
          <span className="text-brand">숨앤소리</span>{" "}
          <span className="text-cocoa">이비인후과</span>
        </h1>
      </section>

      {/* Carousel + Intro — full-bleed left, container-aligned right */}
      <section className="relative bg-bone overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 lg:items-stretch">
          {/* LEFT — full-bleed facility carousel (2초 자동 회전) */}
          <div className="relative h-[58vh] min-h-[420px] lg:h-auto lg:min-h-[640px]">
            <AboutImageCarousel />
          </div>

          {/* RIGHT — intro, container-aligned */}
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
              숨앤소리 이비인후과 소개
            </h2>
            <div className="space-y-5 text-mocha text-[15.5px] lg:text-[17px] leading-[1.85] font-medium">
              <p>
                <span className="text-brand font-bold">숨앤소리 이비인후과</span>
                는 환자분 한 분 한 분의 호흡과 소리에 가장 가까이 다가가는
                강남 역삼역 이비인후과입니다.
              </p>
              <p>
                이비인후과는 호흡과 소리, 균형이라는 우리 삶의 가장
                기본적인 감각들이 만나는 곳입니다. 작은 변화 하나에도
                일상이 크게 흔들리는 만큼, 저희는 그 변화를 가볍게
                지나치지 않습니다.
              </p>
              <p className="text-cocoa font-bold">
                의사는 증상이 아니라, 증상 뒤의 사람을 살펴야 합니다.
              </p>
              <p>
                충분한 시간을 들여 환자분의 이야기를 듣고, 정밀한 검사로
                원인을 깊이 살피며 — 가장 적절한 치료의 길을 함께
                찾아갑니다.
              </p>
            </div>

            {/* Feature icons */}
            <div className="mt-10 grid grid-cols-3 gap-4 lg:gap-6">
              <FeatureIcon label="맞춤 진료">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M6 2v6a4 4 0 008 0V2" />
                  <path d="M10 14v3a4 4 0 008 0v-2" />
                  <circle cx="18" cy="11" r="2" />
                </svg>
              </FeatureIcon>
              <FeatureIcon label="정밀 검사">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <circle cx="11" cy="11" r="6" />
                  <path d="M21 21l-5.5-5.5" />
                </svg>
              </FeatureIcon>
              <FeatureIcon label="지속 관리">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 000-7.8z" />
                </svg>
              </FeatureIcon>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureIcon({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto rounded-full bg-brand/15 flex items-center justify-center text-brand">
        {children}
      </div>
      <p className="mt-3 text-brand font-bold text-[13px] lg:text-sm tracking-tight">
        {label}
      </p>
    </div>
  );
}
