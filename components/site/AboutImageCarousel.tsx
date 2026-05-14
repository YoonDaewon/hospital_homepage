"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/introduction/lounge1.jpg", alt: "라운지" },
  { src: "/images/introduction/lounge2.jpg", alt: "라운지" },
  { src: "/images/introduction/lounge3.jpg", alt: "라운지" },
  { src: "/images/introduction/consultation1.jpeg", alt: "진료실" },
];

const INTERVAL_MS = 2000;

export function AboutImageCarousel() {
  const [active, setActive] = useState(0);
  const [resetTick, setResetTick] = useState(0);

  const next = () => {
    setActive((v) => (v + 1) % slides.length);
    setResetTick((t) => t + 1);
  };

  useEffect(() => {
    const id = setInterval(
      () => setActive((v) => (v + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [resetTick]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ivory">
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Next button on right edge */}
      <button
        type="button"
        onClick={next}
        aria-label="다음 이미지"
        className="absolute right-4 sm:right-5 lg:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-brand text-bone hover:bg-cocoa shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-colors"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Slide counter, bottom-left */}
      <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-4 sm:left-5 lg:left-6 z-10 flex items-center gap-2 px-3 py-1.5 bg-charcoal/55 backdrop-blur-sm rounded-full">
        <span className="font-serif italic text-bone text-[12px] tracking-wider">
          {String(active + 1).padStart(2, "0")}
        </span>
        <span aria-hidden className="block w-4 h-px bg-bone/50" />
        <span className="font-serif italic text-bone/70 text-[12px] tracking-wider">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
