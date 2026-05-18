"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  label: string;
};

const slides: Slide[] = [
  { src: "/images/facility/entrance.jpg", label: "입구" },
  { src: "/images/facility/reception.jpeg", label: "리셉션" },
  { src: "/images/facility/lounge1.jpeg", label: "라운지" },
  { src: "/images/facility/lounge2.jpg", label: "라운지" },
  { src: "/images/facility/lounge3.jpg", label: "라운지" },
  { src: "/images/facility/corridor1.jpg", label: "복도" },
  { src: "/images/facility/sleep-room1.jpeg", label: "수면 다원검사실" },
  { src: "/images/facility/sleep-room2.jpg", label: "수면 다원검사실" },
];

const INTERVAL_MS = 4000;

export function FacilityGallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const total = slides.length;

  const goTo = (i: number) => {
    setActive(i);
    setTick((t) => t + 1);
  };
  const prev = () => goTo((active - 1 + total) % total);
  const next = () => goTo((active + 1) % total);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((v) => (v + 1) % total),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [paused, total, tick]);

  return (
    <div className="w-full">
      {/* Main full-bleed image */}
      <div
        className="group relative w-full h-[58vh] sm:h-[64vh] lg:h-[72vh] min-h-[360px] max-h-[760px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
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
              alt={s.label}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* Bottom gradient for label legibility */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent pointer-events-none" />

        {/* Prev */}
        <button
          type="button"
          onClick={prev}
          aria-label="이전 시설 이미지"
          className="absolute left-3 sm:left-5 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center bg-bone/85 backdrop-blur-sm border border-cocoa/15 text-cocoa hover:bg-bone hover:border-cocoa/40 transition-colors opacity-0 group-hover:opacity-100"
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
        {/* Next */}
        <button
          type="button"
          onClick={next}
          aria-label="다음 시설 이미지"
          className="absolute right-3 sm:right-5 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center bg-bone/85 backdrop-blur-sm border border-cocoa/15 text-cocoa hover:bg-bone hover:border-cocoa/40 transition-colors opacity-0 group-hover:opacity-100"
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

        {/* Label */}
        <div className="absolute bottom-5 sm:bottom-7 lg:bottom-10 left-5 sm:left-7 lg:left-10 z-10 text-bone">
          <p className="text-lg sm:text-xl lg:text-[22px] font-bold tracking-tight">
            {slides[active].label}
          </p>
          <p className="mt-1 font-serif italic text-bone/85 text-[13px] tracking-wider">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="container-content mt-6 lg:mt-8">
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
          {slides.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${s.label} 보기`}
              aria-current={i === active}
              className={`relative aspect-[4/3] overflow-hidden transition-all duration-300 ${
                i === active
                  ? "ring-2 ring-brand ring-offset-2 ring-offset-bone opacity-100"
                  : "opacity-65 hover:opacity-100"
              }`}
            >
              <Image
                src={s.src}
                alt={s.label}
                fill
                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 16vw, 12vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
