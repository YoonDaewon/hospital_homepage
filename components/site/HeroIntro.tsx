"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroIntro() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <Image
        src="/images/main/main.png"
        alt="숨앤소리 이비인후과"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* 좌측·하단 텍스트 영역 가독성 페이드 — 이미지가 잘 보이도록 톤 다운 */}
      <div className="absolute inset-0 bg-gradient-to-r from-bone/55 via-bone/15 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bone/45 via-bone/10 to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex flex-col justify-end pb-20 lg:pb-32">
        <div className="container-content">
          <p
            className={`mb-6 transition-all duration-1000 ease-out delay-200 ${
              shown
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              fontFamily:
                'NanumSquareRound, "Pretendard Variable", Pretendard, system-ui, sans-serif',
            }}
          >
            <span className="font-extrabold text-[15px] lg:text-[17px] tracking-tight text-brand">
              숨앤소리
            </span>
            <span className="font-extrabold text-[15px] lg:text-[17px] tracking-tight text-charcoal">
              이비인후과
            </span>
          </p>

          <h1
            className={`text-black text-[40px] sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl font-extrabold tracking-tight leading-[1.2] transition-all duration-1000 ease-out delay-500 ${
              shown
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              fontFamily:
                'NanumSquareRound, "Pretendard Variable", Pretendard, system-ui, sans-serif',
            }}
          >
            당신의 <span className="text-brand">숨</span>과{" "}
            <span className="text-brand">소리</span>에
            <br />
            <span className="text-black">가장 가까이 다가가는 진료</span>
          </h1>

          <p
            className={`mt-8 text-black/85 text-base md:text-lg max-w-xl font-medium leading-relaxed transition-all duration-1000 ease-out delay-[900ms] ${
              shown
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            환자분 한 분 한 분의 일상에 맑은 호흡과 또렷한 소리를
            <br className="hidden md:block" />
            되돌려 드립니다.
          </p>

          <div
            className={`mt-10 flex flex-wrap gap-3 transition-all duration-1000 ease-out delay-[1200ms] ${
              shown
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-brand text-bone text-sm font-semibold tracking-wider hover:bg-cocoa transition-colors"
            >
              병원 소개
              <span className="text-bone/80">→</span>
            </Link>
            <Link
              href="/hearing-tinnitus/hearing-loss"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-brand text-brand text-sm font-semibold tracking-wider hover:bg-brand hover:text-bone transition-all"
            >
              진료 안내
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
