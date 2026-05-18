"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "schedule-popup-dismissed-until";

export function SchedulePopup() {
  const [open, setOpen] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    const until = localStorage.getItem(STORAGE_KEY);
    if (until && Date.now() < Number(until)) return;
    setOpen(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const close = () => {
    if (dontShow) {
      const oneDayMs = 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, String(Date.now() + oneDayMs));
    }
    setOpen(false);
  };

  const now = new Date();
  const title = `${now.getFullYear()}년 ${now.getMonth() + 1}월 진료일정`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <button
        type="button"
        aria-label="팝업 배경 클릭으로 닫기"
        onClick={close}
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-[680px] max-h-[92vh] flex flex-col bg-bone shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-xl overflow-hidden">
        {/* Title bar — brand blue */}
        <div className="flex items-center justify-between bg-brand text-bone px-5 sm:px-6 h-12 shrink-0">
          <p className="text-sm sm:text-[15px] tracking-wide font-semibold">
            {title}
          </p>
          <button
            type="button"
            aria-label="닫기"
            onClick={close}
            className="w-8 h-8 -mr-2 flex items-center justify-center text-bone hover:text-white transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/schedule.jpg"
            alt={title}
            className="block w-full h-auto"
          />
        </div>

        {/* Footer — checkbox left, close button right */}
        <div className="shrink-0 border-t border-line bg-bone px-5 sm:px-6 py-3 flex items-center justify-between gap-4">
          <label className="inline-flex items-center gap-2.5 cursor-pointer select-none group">
            <input
              type="checkbox"
              checked={dontShow}
              onChange={(e) => setDontShow(e.target.checked)}
              className="w-4 h-4 accent-brand cursor-pointer"
            />
            <span className="text-[13px] font-medium text-charcoal/75 group-hover:text-brand transition-colors">
              24시간 동안 보이지 않기
            </span>
          </label>
          <button
            type="button"
            onClick={close}
            className="px-4 py-1.5 text-[13px] font-semibold text-brand hover:bg-brand hover:text-bone border border-brand rounded-full transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
