import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ClinicsSection />
      <DoctorSection />
      <FacilityPreviewSection />
      <VisitSection />
    </>
  );
}

const clinicImages: Record<string, { src: string; alt: string }> = {
  "hearing-tinnitus": { src: "/images/clinic/hear.jpg", alt: "난청·이명 클리닉" },
  "dizziness-headache": { src: "/images/clinic/headache.jpg", alt: "어지럼증·두통 클리닉" },
  sleep: { src: "/images/clinic/sleep.png", alt: "수면질환 클리닉" },
  ent: { src: "/images/clinic/enp.jpg", alt: "이비인후과 클리닉" },
  "surgery-iv": { src: "/images/clinic/surgery.jpg", alt: "수술·수액 클리닉" },
};

function ClinicsSection() {
  return (
    <Section bg="bone" size="lg" id="clinics">
      <SectionHeader
        eyebrow="CLINIC"
        title={
          <>
            전문 클리닉, <br className="md:hidden" />
            정밀한 진료의 시작
          </>
        }
        desc="이비인후과 영역의 모든 증상을 깊이 있게 다루기 위해, 클리닉별로 전문화된 진료 시스템을 갖추었습니다."
      />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {categories.map((c, i) => {
          const img = clinicImages[c.slug];
          return (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="group block"
          >
            <div className="overflow-hidden">
              {img ? (
                <MediaFrame
                  src={img.src}
                  alt={img.alt}
                  aspect="video"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <Placeholder
                  aspect="video"
                  tone={i % 2 === 0 ? "warm" : "soft"}
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
              )}
            </div>
            <div className="mt-6">
              <p className="font-serif italic text-taupe text-xs tracking-[0.2em]">
                0{i + 1}&nbsp;·&nbsp;{c.nameEn.toUpperCase()}
              </p>
              <h3 className="mt-2 text-cocoa text-2xl md:text-3xl font-normal tracking-tight group-hover:text-mocha transition-colors">
                {c.name}
              </h3>
              <p className="mt-4 text-mocha text-[15px] leading-relaxed font-light">
                {c.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-charcoal/70 tracking-wide">
                {c.pages.slice(0, 5).map((p) => (
                  <span key={p.slug}>· {p.name}</span>
                ))}
                {c.pages.length > 5 && (
                  <span className="text-taupe">+ {c.pages.length - 5}</span>
                )}
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-xs text-cocoa tracking-[0.2em] border-b border-cocoa/30 pb-1 group-hover:border-cocoa transition-colors">
                READ MORE
                <span>→</span>
              </p>
            </div>
          </Link>
          );
        })}
      </div>
    </Section>
  );
}

function DoctorSection() {
  return (
    <Section bg="ivory" size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 lg:order-2">
          <MediaFrame
            src="/images/doctor_v1.png"
            alt="숨앤소리 이비인후과 오승리 대표원장"
            aspect="portrait"
            sizes="(max-width: 1024px) 100vw, 40vw"
            objectPosition="center top"
          />
        </div>
        <div className="lg:col-span-6 lg:order-1">
          <p className="eyebrow mb-5">DOCTOR</p>
          <h2 className="heading-display text-cocoa text-3xl md:text-4xl lg:text-[44px]">
            오승리 원장
          </h2>
          <p className="mt-3 text-taupe font-light tracking-wider text-sm">
            대표원장 / 이비인후과 전문의
          </p>
          <div className="mt-8 space-y-4 text-mocha text-base leading-[1.9] font-light">
            <p className="font-serif italic text-cocoa text-lg md:text-xl leading-relaxed">
              &ldquo;가족을 돌본다는 마음으로
              <br />
              최선을 다하겠습니다.&rdquo;
            </p>
          </div>
          <div className="mt-10 space-y-2.5 text-sm text-charcoal/80 font-light border-t border-line pt-6">
            <p>
              <span className="text-taupe mr-3 inline-block w-20">학력</span>
              중앙대학교 의과대학 졸업
            </p>
            <p>
              <span className="text-taupe mr-3 inline-block w-20">학력</span>
              중앙대학교 의학 석사
            </p>
            <p>
              <span className="text-taupe mr-3 inline-block w-20">전공의</span>
              중앙대학교병원 이비인후과 전공의 수료
            </p>
            <p>
              <span className="text-taupe mr-3 inline-block w-20">학회</span>
              대한이비인후과학회 정회원
            </p>
          </div>
          <Link
            href="/about/doctor"
            className="mt-10 inline-flex items-center gap-3 text-cocoa text-sm tracking-[0.2em] border-b border-cocoa/30 pb-1 hover:border-cocoa transition-colors"
          >
            VIEW PROFILE
            <span>→</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}

function FacilityPreviewSection() {
  return (
    <Section bg="sand" size="lg">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <SectionHeader
          eyebrow="FACILITY"
          title={
            <>
              머무는 시간이 회복이 되도록,
              <br />
              섬세하게 설계된 공간
            </>
          }
        />
        <Link
          href="/about/facility"
          className="self-start md:self-end inline-flex items-center gap-3 text-cocoa text-sm tracking-[0.2em] border-b border-cocoa/30 pb-1 hover:border-cocoa transition-colors"
        >
          VIEW ALL
          <span>→</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <MediaFrame
          src="/images/facility/lounge.jpeg"
          alt="라운지 — 환자 대기 공간"
          aspect="video"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <MediaFrame
          src="/images/facility/reception.jpeg"
          alt="리셉션 데스크"
          aspect="video"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <MediaFrame
          src="/images/facility/consultation.jpeg"
          alt="진료실"
          aspect="video"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <MediaFrame
          src="/images/facility/sleep-room.jpeg"
          alt="수면 다원검사실"
          aspect="video"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </Section>
  );
}

function VisitSection() {
  return (
    <Section bg="bone" size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="eyebrow mb-5">VISIT</p>
          <h2 className="heading-display text-cocoa text-3xl md:text-4xl lg:text-5xl">
            오시는 길
          </h2>
          <p className="mt-6 text-mocha font-light leading-relaxed">
            역삼역 2번 출구에서 도보 1분, 일상의 동선 위에 있습니다.
          </p>
          <dl className="mt-10 space-y-4 text-charcoal font-light">
            <div className="flex gap-6 border-b border-line pb-4">
              <dt className="text-taupe w-16 shrink-0 text-sm pt-0.5">주소</dt>
              <dd>{siteConfig.address}</dd>
            </div>
            <div className="flex gap-6 border-b border-line pb-4">
              <dt className="text-taupe w-16 shrink-0 text-sm pt-0.5">대표</dt>
              <dd className="tracking-wider">{siteConfig.phoneDisplay}</dd>
            </div>
            <div className="flex gap-6 border-b border-line pb-4">
              <dt className="text-taupe w-16 shrink-0 text-sm pt-0.5">진료</dt>
              <dd className="space-y-1">
                {siteConfig.hours.map((h) => (
                  <p key={h.label}>
                    <span className="text-mocha mr-3">{h.label}</span>
                    {h.display}
                  </p>
                ))}
                <p className="text-charcoal/60 text-sm pt-1">
                  {siteConfig.lunch}
                </p>
              </dd>
            </div>
            <div className="flex gap-6">
              <dt className="text-taupe w-16 shrink-0 text-sm pt-0.5">휴진</dt>
              <dd className="text-mocha">{siteConfig.closedDays}</dd>
            </div>
          </dl>
          <Link
            href="/about/visit"
            className="mt-10 inline-flex items-center gap-3 px-7 py-3.5 border border-cocoa/40 text-cocoa text-sm tracking-wider hover:bg-cocoa hover:text-bone transition-all"
          >
            지도 보기
            <span>→</span>
          </Link>
        </div>
        <div>
          <Placeholder aspect="square" tone="warm" label="MAP" />
        </div>
      </div>
    </Section>
  );
}
