import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { HeroIntro } from "@/components/site/HeroIntro";
import { FacilityCarousel } from "@/components/site/FacilityCarousel";
import { SchedulePopup } from "@/components/site/SchedulePopup";
import { categories } from "@/lib/categories";
import type { Category } from "@/lib/categories/types";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <SchedulePopup />
      <HeroIntro />
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
  flip?: boolean;
};

const clinicCardConfig: Record<string, ClinicCardConfig> = {
  "hearing-tinnitus": {
    shortName: "난청·이명",
    subtitle: "정밀 청력검사와 단계별 맞춤 치료",
    image: "/images/clinic/hear.png",
    alt: "난청·이명 클리닉",
  },
  "dizziness-headache": {
    shortName: "어지럼증·두통",
    subtitle: "대학병원 수준의 평형검사 및 치료체계",
    image: "/images/clinic/headache.png",
    alt: "어지럼증·두통 클리닉",
  },
  sleep: {
    shortName: "수면질환",
    subtitle: "코골이·무호흡·불면·하지불안 등",
    image: "/images/clinic/sleep.png",
    alt: "수면질환 클리닉",
  },
  ent: {
    shortName: "이비인후과",
    subtitle: "후두·음성 진료와 두경부 초음파",
    image: "/images/clinic/enp.png",
    alt: "이비인후과 클리닉",
  },
  surgery: {
    shortName: "수술",
    subtitle: "회복 부담 적은 비·구강 시술",
    image: "/images/clinic/surgery.png",
    alt: "수술 클리닉",
  },
  iv: {
    shortName: "수액",
    subtitle: "맞춤 영양·면역 정맥 수액 처방",
    image: "/images/clinic/sap.jpg",
    alt: "수액 클리닉",
  },
};

function ClinicsSection() {
  return (
    <Section bg="bone" size="sm" id="clinics">
      <div className="text-center mb-10 lg:mb-14">
        <p className="font-serif italic text-taupe tracking-[0.3em] text-xs sm:text-sm mb-4">
          Soom &amp; Sori ENT clinic
        </p>
        <h2 className="font-sans text-charcoal text-[28px] sm:text-4xl lg:text-[44px] tracking-tight">
          <span className="font-medium">숨앤소리이비인후과</span>{" "}
          <span className="font-extrabold">진료과목</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
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
      className="group relative block aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-white"
    >
      {/* Full image */}
      <Image
        src={config.image}
        alt={config.alt}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className={`object-cover ${config.flip ? "-scale-x-100" : ""}`}
      />

      {/* Text overlay top-left + arrow bottom-left */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <p className="text-[12.5px] sm:text-[13px] lg:text-sm text-charcoal/75 mb-2 sm:mb-3 font-semibold tracking-tight">
            {config.subtitle}
          </p>
          <h3 className="font-sans font-extrabold text-charcoal text-[28px] sm:text-[32px] lg:text-[40px] tracking-tight leading-tight">
            {config.shortName}
          </h3>
        </div>

        <span className="inline-flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-cocoa/40 text-cocoa transition-all duration-300 group-hover:bg-brand group-hover:border-brand group-hover:text-bone bg-white/30 backdrop-blur-sm">
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

const doctorEducation = [
  "중앙대학교 의과대학 졸업",
  "중앙대학교 이비인후과학 석사",
  "중앙대병원 이비인후과 수석전공의",
  "중앙대병원 이비인후과 외래교수",
  "수면다원검사 정도관리위원회 인증의",
];

const doctorCareer = [
  "현) 숨앤소리이비인후과 대표원장",
  "전) 영종바른이비인후과 원장",
  "전) BS코아이비인후과 원장",
];

const doctorSocieties = [
  "대한이비인후과학회 정회원",
  "대한비과학회 정회원",
  "대한이과학회 정회원",
  "대한두경부외과학회 정회원",
  "대한평형의학회 정회원",
  "대한청각학회 정회원",
  "대한천식알레르기학회 정회원",
  "대한수면의학회 정회원",
  "대한수면호흡학회 정회원",
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
          <p className="font-sans text-brand tracking-[0.25em] text-[12px] sm:text-sm font-bold mb-3">
            DR. OH SEUNG RI
          </p>
          <h2 className="text-charcoal text-3xl sm:text-4xl lg:text-[40px] tracking-tight">
            <span className="font-extrabold">오승리</span>{" "}
            <span className="font-medium">대표원장</span>
          </h2>
          <p className="mt-2 text-charcoal/70 text-sm lg:text-[15px] font-semibold tracking-tight">
            이비인후과 전문의
          </p>

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
            <h3 className="font-bold text-charcoal text-lg lg:text-xl mb-5">
              학력
            </h3>
            <ul className="space-y-3.5">
              {doctorEducation.map((item) => (
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

      {/* Career - full width */}
      <div className="mt-12 lg:mt-14">
        <div className="flex items-center gap-4 mb-5">
          <span className="inline-block bg-brand text-bone font-bold px-5 py-2 rounded-md text-sm lg:text-[15px] tracking-wide">
            경력
          </span>
        </div>
        <div className="border-t border-line-strong pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5">
          {doctorCareer.map((c) => (
            <div
              key={c}
              className="flex items-start gap-3 text-charcoal/85 text-[15px] font-medium"
            >
              <span
                aria-hidden
                className="mt-[10px] w-1.5 h-1.5 rounded-full bg-brand shrink-0"
              />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Societies - full width */}
      <div className="mt-10 lg:mt-12">
        <div className="flex items-center gap-4 mb-5">
          <span className="inline-block bg-brand text-bone font-bold px-5 py-2 rounded-md text-sm lg:text-[15px] tracking-wide">
            학회 활동
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
    <section className="bg-white pt-12 md:pt-16 lg:pt-20">
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

const visitMapQuery = encodeURIComponent("서울 강남구 역삼동 739");

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
