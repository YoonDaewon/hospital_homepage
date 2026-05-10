"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/lib/site-config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-bone border-b border-line">
        <div className="container-content flex items-center justify-between h-14 sm:h-16 lg:h-[72px]">
          <Link href="/" className="flex items-center gap-2.5" onClick={closeMobile}>
            <Image
              src="/images/icon_v1.png"
              alt=""
              width={36}
              height={36}
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
              priority
            />
            <span className="flex items-baseline gap-2">
              <span className="font-sans font-bold text-lg sm:text-xl lg:text-[22px] tracking-tight text-cocoa">
                숨앤소리
              </span>
              <span className="hidden sm:inline text-[11px] tracking-[0.25em] text-taupe font-light">
                ENT CLINIC
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-2 text-[14px] text-charcoal hover:text-cocoa transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[220px]">
                    <div className="bg-bone border border-line rounded-sm py-3 shadow-[0_8px_30px_rgba(62,52,43,0.08)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-charcoal/80 hover:text-cocoa hover:bg-ivory transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            type="button"
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 -mr-2 text-cocoa"
          >
            <span className="sr-only">메뉴</span>
            <span className="relative block w-6 h-4">
              <span
                aria-hidden
                className={`absolute left-0 top-0 w-full h-px bg-cocoa transition-transform duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                aria-hidden
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-cocoa transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                aria-hidden
                className={`absolute left-0 bottom-0 w-full h-px bg-cocoa transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </>
  );
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        type="button"
        aria-label="메뉴 닫기"
        onClick={onClose}
        className={`absolute inset-0 bg-charcoal/30 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-sm bg-bone shadow-[-8px_0_30px_rgba(62,52,43,0.08)] flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 sm:h-20 px-6 border-b border-line">
          <span className="flex items-center gap-2">
            <Image
              src="/images/icon_v1.png"
              alt=""
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <span className="font-sans font-bold text-xl text-cocoa tracking-tight">
              숨앤소리
              <span className="ml-2 text-[10px] tracking-[0.25em] text-taupe font-light">
                ENT
              </span>
            </span>
          </span>
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={onClose}
            className="w-10 h-10 -mr-2 flex items-center justify-center text-cocoa"
          >
            <span className="relative block w-5 h-5">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-cocoa rotate-45" />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-cocoa -rotate-45" />
            </span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.label} className="border-b border-line py-4">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block text-lg text-cocoa font-light"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-3 pl-4 space-y-2.5">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block text-sm text-mocha"
                        >
                          — {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="pt-8 mt-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="block text-cocoa"
            >
              <span className="font-serif italic text-taupe text-sm">
                Tel.
              </span>
              <span className="block text-2xl tracking-wider mt-1">
                {siteConfig.phoneDisplay}
              </span>
            </a>
            <p className="mt-3 text-sm text-mocha leading-relaxed">
              {siteConfig.addressShort}
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
