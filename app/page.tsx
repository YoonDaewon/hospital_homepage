import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { FacilityCarousel } from "@/components/site/FacilityCarousel";
import { SchedulePopup } from "@/components/site/SchedulePopup";
import { categories } from "@/lib/categories";
import type { Category } from "@/lib/categories/types";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <SchedulePopup />
      <HeroCarousel />
      <ClinicsSection />
      <DoctorSection />
      <FacilityPreviewSection />
      <VisitSection />
    </>
  );
}

type ClinicCardConfig = {
  shortName: string;
  subtitle: string;
  image: string;
  alt: string;
  bgClass: string;
  bgHex: string;
};

const clinicCardConfig: Record<string, ClinicCardConfig> = {
  "hearing-tinnitus": {
    shortName: "난청·이명",
    subtitle: "정밀 청력검사와 단계별 맞춤 치료",
    image: "/images/clinic/hear.jpg",
    alt: "난청·이명 클리닉",
    bgClass: "bg-ivory",
    bgHex: "#f5f0e8",
  },
  "dizziness-headache": {
    shortName: "어지럼증·두통",
    subtitle: "전정기능검사·이석정복술까지 정밀 평가",
    image: "/images/clinic/headache.jpg",
    alt: "어지럼증·두통 클리닉",
    bgClass: "bg-sand",
    bgHex: "#ebe3d6",
  },
  sleep: {
    shortName: "수면질환",
    subtitle: "코골이·무호흡·불면·하지불안 등",
    image: "/images/clinic/sleep.png",
    alt: "수면질환 클리닉",
    bgClass: "bg-ivory",
    bgHex: "#f5f0e8",
  },
  ent: {
    shortName: "이비인후과",
    subtitle: "비염·축농증·후두·기능의학 종합 진료",
    image: "/images/clinic/enp.jpg",
    alt: "이비인후과 클리닉",
    bgClass: "bg-sand",
    bgHex: "#ebe3d6",
  },
  "surgery-iv": {
    shortName: "수술·수액",
    subtitle: "회복 부담 적은 시술과 영양·면역 수액",
    image: "/images/clinic/surgery.jpg",
    alt: "수술·수액 클리닉",
    bgClass: "bg-ivory",
    bgHex: "#f5f0e8",
  },
};

function ClinicsSection() {
  return (
    <Section bg="bone" size="sm" id="clinics">
      <div className="text-center mb-10 lg:mb-14">
        <p className="font-serif italic text-taupe tracking-[0.3em] text-xs sm:text-sm mb-4">
          Soom &amp; Sori ENT clinic
        </p>
        <h2 className="font-sans text-cocoa text-[28px] sm:text-4xl lg:text-[44px] tracking-tight">
          <span className="font-medium">숨앤소리이비인후과</span>{" "}
          <span className="font-extrabold">진료과목</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {categories.map((c) => (
          <ClinicCard key={c.slug} category={c} />
        ))}
      </div>
    </Section>
  );
}

function ClinicCard({ category }: { category: Category }) {
  const config = clinicCardConfig[category.slug];
  if (!config) return null;
  return (
    <Link
      href={`/${category.slug}/${category.pages[0].slug}`}
      className={`group relative block overflow-hidden h-[240px] sm:h-[260px] lg:h-[300px] ${config.bgClass}`}
    >
      <div className="absolute right-0 top-0 bottom-0 w-[58%]">
        <Image
          src={config.image}
          alt={config.alt}
          fill
          sizes="(max-width: 768px) 60vw, 30vw"
          className="object-cover"
        />
        <div
          className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
          style={{
            background: `linear-gradient(to right, ${config.bgHex}, transparent)`,
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-7 lg:p-9 w-[58%] sm:w-[55%]">
        <div>
          <p className="text-[12px] sm:text-[13px] lg:text-sm text-charcoal/70 mb-2 sm:mb-3 font-medium tracking-tight">
            {config.subtitle}
          </p>
          <h3 className="font-sans font-extrabold text-cocoa text-[26px] sm:text-3xl lg:text-[34px] tracking-tight">
            {config.shortName}
          </h3>
        </div>

        <span className="inline-flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-cocoa/40 text-cocoa transition-all duration-300 group-hover:bg-cocoa group-hover:border-cocoa group-hover:text-bone">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

const doctorBiography = [
  "중앙대학교 의과대학 졸업",
  "중앙대학교 의학 석사",
  "중앙대학교병원 이비인후과 전공의 수료",
  "대한이비인후과학회 인정 이비인후과 전문의",
];

const doctorSocieties = [
  "대한이비인후과학회 정회원",
  "대한비과학회 정회원",
  "대한이과학회 정회원",
  "대한두경부외과학회 정회원",
  "대한소아이비인후과학회 정회원",
  "대한수면학회 정회원",
];

function DoctorSection() {
  return (
    <Section bg="ivory" size="sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Photo - LEFT */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
            <Image
              src="/images/doctor_v1.png"
              alt="숨앤소리 이비인후과 오승리 대표원장"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Content - RIGHT */}
        <div className="lg:col-span-7">
          <p className="font-serif italic text-brand tracking-[0.2em] text-sm mb-3">
            Soom &amp; Sori ENT clinic
          </p>
          <h2 className="text-cocoa text-3xl sm:text-4xl lg:text-[40px] tracking-tight">
            <span className="font-extrabold">오승리</span>{" "}
            <span className="font-medium">대표원장</span>
          </h2>

          <div className="mt-7">
            <span
              aria-hidden
              className="block text-brand font-serif text-5xl leading-none mb-3"
            >
              &ldquo;
            </span>
            <p className="text-brand text-base sm:text-lg lg:text-[19px] leading-relaxed font-semibold tracking-tight">
              정밀한 진료와 깊이 있는 동행으로,
              <br />
              환자분의 호흡과 소리를 가장 가까이서 살피겠습니다.
            </p>
          </div>

          <div className="mt-9 border-t border-line-strong pt-7">
            <h3 className="font-bold text-cocoa text-lg lg:text-xl mb-5">
              약력
            </h3>
            <ul className="space-y-3.5">
              {doctorBiography.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-charcoal/85 text-[15px] font-medium"
                >
                  <span
                    aria-hidden
                    className="mt-[10px] w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Societies - full width */}
      <div className="mt-12 lg:mt-14">
        <div className="flex items-center gap-4 mb-5">
          <span className="inline-block bg-brand text-bone font-bold px-5 py-2 rounded-md text-sm lg:text-[15px] tracking-wide">
            경력 및 학회활동
          </span>
        </div>
        <div className="border-t border-line-strong pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5">
          {doctorSocieties.map((s) => (
            <div
              key={s}
              className="flex items-start gap-3 text-charcoal/85 text-[15px] font-medium"
            >
              <span
                aria-hidden
                className="mt-[10px] w-1.5 h-1.5 rounded-full bg-brand shrink-0"
              />
              <span>{s}</span>
            </div>
          ))}
        </div>

        <Link
          href="/about/doctor"
          className="mt-10 inline-flex items-center gap-3 text-cocoa text-sm tracking-[0.2em] border-b border-cocoa/30 pb-1 hover:border-cocoa transition-colors font-medium"
        >
          VIEW FULL PROFILE
          <span>→</span>
        </Link>
      </div>
    </Section>
  );
}

function FacilityPreviewSection() {
  return (
    <section className="bg-sand pt-12 md:pt-16 lg:pt-20">
      <div className="container-content text-center mb-10 lg:mb-14">
        <h2 className="font-sans font-extrabold text-cocoa text-3xl sm:text-4xl lg:text-[44px] tracking-tight">
          시설 안내
        </h2>
        <p className="mt-3 text-mocha font-medium text-[15px] lg:text-base">
          쾌적하고 편안한 환경에서 진료받으실 수 있습니다
        </p>
        <span aria-hidden className="block w-12 h-px bg-cocoa/30 mx-auto mt-5" />
      </div>
      <FacilityCarousel />
    </section>
  );
}

const visitMapQuery = encodeURIComponent("역삼역 2번 출구");

function VisitSection() {
  return (
    <Section bg="bone" size="sm">
      <div className="text-center mb-10 lg:mb-14">
        <h2 className="font-sans font-extrabold text-cocoa text-3xl sm:text-4xl lg:text-[44px] tracking-tight">
          진료시간 · 오시는 길
        </h2>
        <p className="mt-3 text-mocha font-medium text-[15px] lg:text-base">
          편리한 위치, 일상의 동선 위에 있습니다
        </p>
        <span aria-hidden className="block w-12 h-px bg-cocoa/30 mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Info card */}
        <div className="bg-ivory border border-line rounded-md p-6 sm:p-8 lg:p-10 flex flex-col">
          <div className="flex items-center gap-2.5 mb-7">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-cocoa"
              aria-hidden
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <h3 className="text-cocoa font-bold text-lg lg:text-xl">
              진료시간 안내
            </h3>
          </div>

          <dl className="space-y-4">
            {siteConfig.hours.map((h) => (
              <div
                key={h.label}
                className="flex items-baseline justify-between border-b border-line pb-3"
              >
                <dt className="font-bold text-cocoa text-[15px] lg:text-base">
                  {h.label}
                </dt>
                <dd className="text-charcoal/85 text-[15px] lg:text-base font-medium">
                  {h.display}
                </dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between border-b border-line pb-3">
              <dt className="font-bold text-cocoa text-[15px] lg:text-base">
                일·공휴일
              </dt>
              <dd className="text-brand text-[15px] lg:text-base font-semibold">
                휴진
              </dd>
            </div>
            <div className="flex items-baseline justify-between">
              <dt className="font-bold text-cocoa text-[15px] lg:text-base">
                점심시간
              </dt>
              <dd className="text-charcoal/85 text-[15px] lg:text-base font-medium">
                오후 1:00 — 오후 2:00
              </dd>
            </div>
          </dl>

          <div className="mt-7 pt-6 border-t border-line space-y-4">
            <div className="flex items-start gap-3 text-charcoal/85">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-cocoa mt-0.5 shrink-0"
                aria-hidden
              >
                <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <p className="text-[15px] font-medium leading-relaxed">
                {siteConfig.address}
              </p>
            </div>
            <div className="flex items-start gap-3 text-charcoal/85">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-cocoa mt-0.5 shrink-0"
                aria-hidden
              >
                <path d="M5 4h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
              </svg>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-[15px] font-semibold tracking-wider hover:text-cocoa transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <Link
            href="/about/visit"
            className="mt-7 inline-flex items-center justify-center gap-2 px-5 py-3 border border-cocoa/40 text-cocoa text-sm font-semibold tracking-wide hover:bg-cocoa hover:text-bone transition-all rounded self-start"
          >
            오시는 길 상세보기
            <span>→</span>
          </Link>
        </div>

        {/* Map */}
        <div className="relative w-full min-h-[360px] lg:min-h-0 aspect-square lg:aspect-auto border border-line rounded-md overflow-hidden bg-bone">
          <iframe
            title="숨앤소리 이비인후과 위치"
            src={`https://maps.google.com/maps?q=${visitMapQuery}&hl=ko&z=17&output=embed`}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
