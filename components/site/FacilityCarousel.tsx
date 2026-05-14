"use client";

import Image from "next/image";
import { useState } from "react";

type Slide = {
  src: string;
  title: string;
};

const slides: Slide[] = [
  { src: "/images/facility/lounge.jpeg", title: "라운지" },
  { src: "/images/facility/reception.jpeg", title: "리셉션" },
  { src: "/images/facility/consultation.jpeg", title: "진료실" },
  { src: "/images/facility/sleep-room.jpeg", title: "수면 다원검사실" },
];

export function FacilityCarousel() {
  const [active, setActive] = useState(0);
  const total = slides.length;

  const prev = () => setActive((v) => (v - 1 + total) % total);
  const next = () => setActive((v) => (v + 1) % total);

  return (
    <div className="relative w-full h-[58vh] sm:h-[64vh] lg:h-[72vh] min-h-[360px] max-h-[760px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === active ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={s.src}
            alt={s.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Subtle gradient at bottom for label legibility */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent pointer-events-none" />

      {/* Prev / Next */}
      <button
        type="button"
        onClick={prev}
        aria-label="이전 시설 이미지"
        className="absolute left-3 sm:left-5 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center bg-bone/85 backdrop-blur-sm border border-cocoa/15 text-cocoa hover:bg-bone hover:border-cocoa/40 transition-colors"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="다음 시설 이미지"
        className="absolute right-3 sm:right-5 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center bg-bone/85 backdrop-blur-sm border border-cocoa/15 text-cocoa hover:bg-bone hover:border-cocoa/40 transition-colors"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Bottom-left label */}
      <div className="absolute bottom-5 sm:bottom-7 lg:bottom-10 left-5 sm:left-7 lg:left-10 z-10 text-bone">
        <p className="text-lg sm:text-xl lg:text-[22px] font-bold tracking-tight">
          {slides[active].title}
        </p>
        <p className="mt-1 font-serif italic text-bone/85 text-[13px] tracking-wider">
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>

      {/* Bottom-right dots */}
      <div className="absolute bottom-7 lg:bottom-10 right-5 sm:right-7 lg:right-10 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${i + 1}번 시설`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className="group py-2"
          >
            <span
              className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "bg-bone scale-110"
                  : "bg-bone/45 group-hover:bg-bone/75"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
