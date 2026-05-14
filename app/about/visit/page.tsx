import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "진료안내 · 오시는 길",
  description: `${siteConfig.name} 진료시간 및 위치 안내. 강남구 역삼동, 역삼역 2번 출구에서 도보 1분. 대중교통·주차 안내 및 진료시간 정보.`,
  alternates: { canonical: "/about/visit" },
};

const mapQuery = encodeURIComponent("역삼역 2번 출구");

const hours = [
  { label: "평일", time: "AM 09:30 ~ PM 18:30" },
  { label: "점심시간", time: "PM 13:00 ~ PM 14:00" },
  { label: "토요일", time: "AM 09:30 ~ PM 13:30" },
  { label: "일요일 / 공휴일", time: "휴진" },
];

export default function VisitPage() {
  return (
    <>
      {/* Title Section — same INTRODUCE CLINIC header */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 lg:pb-14 bg-bone text-center">
        <p className="font-sans text-brand tracking-[0.35em] text-xs sm:text-[13px] font-bold mb-3 sm:mb-4">
          INTRODUCE CLINIC
        </p>
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-[60px] tracking-tight font-extrabold">
          <span className="text-brand">숨앤소리</span>{" "}
          <span className="text-cocoa">이비인후과</span>
        </h1>
      </section>

      {/* 진료안내 */}
      <section className="bg-bone pb-12 lg:pb-20">
        <div className="container-content">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="font-sans font-extrabold text-cocoa text-3xl sm:text-4xl lg:text-[44px] tracking-tight">
              진료안내
            </h2>
            <span
              aria-hidden
              className="block w-10 h-[3px] bg-cocoa mx-auto mt-5 rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden">
            {/* LEFT — image */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[540px]">
              <Image
                src="/images/introduction/lounge2.jpg"
                alt="숨앤소리 이비인후과 라운지"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* RIGHT — brand-blue info card */}
            <div className="bg-brand text-bone px-8 sm:px-10 lg:px-14 py-12 lg:py-14 flex flex-col justify-center">
              <span className="inline-block self-start px-5 py-1.5 rounded-full border border-bone/65 text-[13px] lg:text-sm font-semibold tracking-wide">
                상담 및 예약문의
              </span>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-5 text-4xl sm:text-[42px] lg:text-[48px] font-extrabold tracking-tight hover:opacity-90 transition-opacity"
              >
                {siteConfig.phoneDisplay}
              </a>

              <span className="inline-block self-start mt-10 px-5 py-1.5 rounded-full border border-bone/65 text-[13px] lg:text-sm font-semibold tracking-wide">
                운영시간
              </span>
              <dl className="mt-6">
                {hours.map((h, i) => (
                  <div
                    key={h.label}
                    className={`flex items-center justify-between py-3.5 ${
                      i < hours.length - 1 ? "border-b border-bone/30" : ""
                    }`}
                  >
                    <dt className="flex items-center gap-2.5 text-[14.5px] lg:text-[15.5px] font-medium">
                      <span
                        aria-hidden
                        className="w-1.5 h-1.5 rounded-full bg-bone/90"
                      />
                      {h.label}
                    </dt>
                    <dd className="text-[15px] lg:text-base font-bold tracking-tight">
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[12.5px] lg:text-[13px] text-bone/75 leading-relaxed">
                ※ 토요일 점심시간 없이 진료
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="bg-bone pb-16 lg:pb-24">
        <div className="container-content">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="font-sans font-extrabold text-cocoa text-3xl sm:text-4xl lg:text-[44px] tracking-tight">
              오시는 길
            </h2>
            <span
              aria-hidden
              className="block w-10 h-[3px] bg-cocoa mx-auto mt-5 rounded-full"
            />
          </div>

          <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[21/9] border border-line overflow-hidden bg-bone">
            <iframe
              title="숨앤소리 이비인후과 위치"
              src={`https://maps.google.com/maps?q=${mapQuery}&hl=ko&z=17&output=embed`}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="mt-6 text-center text-charcoal/85 font-medium text-[15px] lg:text-base leading-relaxed">
            {siteConfig.address}
          </p>
        </div>
      </section>
    </>
  );
}
