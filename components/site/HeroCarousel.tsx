"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  image: string;
  imageAlt: string;
};

// 이미지 교체: /public/images/main/main1.png, main2~5.jpg
const slides: Slide[] = [
  { image: "/images/main/main1.png", imageAlt: "숨앤소리 이비인후과 메인 비주얼 1" },
  { image: "/images/main/main2.jpg", imageAlt: "숨앤소리 이비인후과 메인 비주얼 2" },
  { image: "/images/main/main3.jpg", imageAlt: "숨앤소리 이비인후과 메인 비주얼 3" },
  { image: "/images/main/main4.jpg", imageAlt: "숨앤소리 이비인후과 메인 비주얼 4" },
  { image: "/images/main/main5.jpg", imageAlt: "숨앤소리 이비인후과 메인 비주얼 5" },
];

const INTERVAL_MS = 3000;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((v) => (v + 1) % total),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [paused, total]);

  const prev = () => setActive((v) => (v - 1 + total) % total);
  const next = () => setActive((v) => (v + 1) % total);

  return (
    <section
      className="group relative h-[100svh] min-h-[640px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={i !== active}
        >
          <Image
            src={s.image}
            alt={s.imageAlt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          {/* 페이지 하단으로 자연스럽게 이어지도록, 맨 아래에만 가벼운 페이드 */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bone" />
        </div>
      ))}

      {/* Prev / Next arrows — 마우스오버 시 표시 */}
      <button
        type="button"
        onClick={prev}
        aria-label="이전 슬라이드"
        className="absolute left-4 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-bone/70 backdrop-blur-sm border border-cocoa/20 text-cocoa opacity-0 group-hover:opacity-100 hover:bg-bone hover:border-cocoa/60 transition-all duration-300"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          aria-hidden="true"
        >
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="다음 슬라이드"
        className="absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-bone/70 backdrop-blur-sm border border-cocoa/20 text-cocoa opacity-0 group-hover:opacity-100 hover:bg-bone hover:border-cocoa/60 transition-all duration-300"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          aria-hidden="true"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Pagination indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`슬라이드 ${i + 1} 보기`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className="group py-3"
          >
            <span
              className={`block h-px transition-all duration-500 ${
                i === active
                  ? "w-12 bg-cocoa"
                  : "w-6 bg-cocoa/40 group-hover:bg-cocoa/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-6 lg:right-10 hidden md:flex items-center gap-3 font-serif italic text-xs tracking-[0.3em] z-10">
        <span className="text-cocoa">
          {String(active + 1).padStart(2, "0")}
        </span>
        <span className="block w-8 h-px bg-taupe/50" />
        <span className="text-taupe">
          {String(total).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
