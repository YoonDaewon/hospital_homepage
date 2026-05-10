import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigation } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-line bg-ivory text-charcoal">
      <div className="container-content py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/icon_v1.png"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl text-cocoa">숨앤소리</span>
                <span className="text-[11px] tracking-[0.25em] text-taupe">
                  ENT CLINIC
                </span>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-mocha font-light">
              환자분 한 분 한 분의 호흡과 소리에
              <br />
              귀 기울이는 강남 역삼역 이비인후과
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">CONTACT</p>
            <ul className="space-y-2 text-sm text-charcoal/80 font-light">
              <li>
                <span className="text-taupe mr-2">대표</span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-cocoa tracking-wider"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="text-taupe mr-2">주소</span>
                {siteConfig.address}
              </li>
              {siteConfig.hours.map((h) => (
                <li key={h.label}>
                  <span className="text-taupe mr-2">{h.label}</span>
                  {h.display}
                </li>
              ))}
              <li>
                <span className="text-taupe mr-2">휴진</span>
                {siteConfig.closedDays}
              </li>
              <li className="text-charcoal/60">{siteConfig.lunch}</li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <p className="eyebrow mb-4">CLINIC</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-charcoal/80 font-light">
              {navigation
                .filter((n) => n.href !== "/about")
                .map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="hover:text-cocoa transition-colors"
                  >
                    {n.label}
                  </Link>
                ))}
              <Link
                href="/about"
                className="hover:text-cocoa transition-colors"
              >
                병원소개
              </Link>
              <Link
                href="/about/visit"
                className="hover:text-cocoa transition-colors"
              >
                진료안내·오시는 길
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-charcoal/50 font-light">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="font-serif italic text-taupe tracking-wider">
            Listening to your breath, hearing your sound.
          </p>
        </div>
      </div>
    </footer>
  );
}
