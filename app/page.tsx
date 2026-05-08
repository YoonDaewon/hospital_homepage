import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { clinics } from "@/lib/clinics";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ClinicsSection />
      <DoctorSection />
      <FacilityPreviewSection />
      <VisitSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <Placeholder
        aspect="wide"
        tone="warm"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bone/30 via-transparent to-bone" />
      <div className="absolute inset-0 flex flex-col justify-end pb-20 lg:pb-32">
        <div className="container-content">
          <p className="font-serif italic text-taupe tracking-[0.3em] text-xs lg:text-sm mb-6">
            SOOM &amp; SORI &nbsp;·&nbsp; ENT CLINIC
          </p>
          <h1 className="heading-display text-cocoa text-[40px] sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            당신의 호흡과 소리에
            <br />
            <span className="text-mocha">가장 가까이 다가가는 진료</span>
          </h1>
          <p className="mt-8 text-mocha text-base md:text-lg max-w-xl font-light leading-relaxed">
            숨앤소리 이비인후과는 환자분 한 분 한 분의 일상에
            <br className="hidden md:block" />
            맑은 호흡과 또렷한 소리를 되돌려 드립니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-cocoa text-bone text-sm tracking-wider hover:bg-charcoal transition-colors"
            >
              병원 소개
              <span className="text-bone/70">→</span>
            </Link>
            <Link
              href="/clinic/hearing-tinnitus"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-cocoa/40 text-cocoa text-sm tracking-wider hover:bg-cocoa hover:text-bone transition-all"
            >
              진료 안내
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 hidden md:flex flex-col items-center gap-3 text-taupe">
        <span className="font-serif italic text-xs tracking-[0.3em]">
          SCROLL
        </span>
        <span className="block w-px h-12 bg-taupe/60" />
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <Section bg="bone" size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <Placeholder aspect="portrait" tone="warm" />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow mb-5">PHILOSOPHY</p>
          <h2 className="heading-display text-cocoa text-3xl md:text-4xl lg:text-[44px]">
            소리는 곧 일상이고,
            <br />
            호흡은 곧 삶입니다.
          </h2>
          <div className="mt-8 space-y-5 text-mocha text-base md:text-[17px] leading-[1.9] font-light">
            <p>
              숨앤소리 이비인후과는 단순히 증상을 치료하는 것을 넘어,
              <br className="hidden md:block" />
              환자분의 일상에 맑은 호흡과 또렷한 소리를 되돌려 드리는 것을
              가장 중요한 가치로 생각합니다.
            </p>
            <p>
              한 분 한 분의 이야기에 오래 귀 기울이고, 정밀한 검사와 깊은
              고민 끝에 가장 적절한 치료의 길을 함께 찾아갑니다. 그것이
              저희가 매일 환자분을 마주하는 자세입니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { num: "01", label: "정밀 진단" },
              { num: "02", label: "맞춤 치료" },
              { num: "03", label: "지속 관리" },
            ].map((v) => (
              <div
                key={v.num}
                className="border-t border-line-strong pt-4"
              >
                <p className="font-serif text-taupe text-sm tracking-wider">
                  {v.num}
                </p>
                <p className="mt-1.5 text-cocoa text-sm">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ClinicsSection() {
  return (
    <Section bg="ivory" size="lg" id="clinics">
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
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {clinics.map((c, i) => (
          <Link
            key={c.slug}
            href={`/clinic/${c.slug}`}
            className="group block"
          >
            <Placeholder
              aspect="video"
              tone={i % 3 === 1 ? "soft" : "warm"}
              className="transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="mt-5">
              <p className="font-serif italic text-taupe text-xs tracking-[0.2em]">
                0{i + 1}&nbsp;·&nbsp;{c.nameEn.toUpperCase()}
              </p>
              <h3 className="mt-2 text-cocoa text-xl md:text-2xl font-normal tracking-tight group-hover:text-mocha transition-colors">
                {c.name}
              </h3>
              <p className="mt-3 text-mocha text-sm leading-relaxed font-light line-clamp-2">
                {c.summary}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-xs text-cocoa tracking-[0.2em] border-b border-cocoa/30 pb-1 group-hover:border-cocoa transition-colors">
                READ MORE
                <span>→</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function DoctorSection() {
  return (
    <Section bg="bone" size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 lg:order-2">
          <Placeholder aspect="portrait" tone="deep" />
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
            <p>
              &ldquo;환자분이 들려주시는 작은 소리도 놓치지 않으려 합니다.
              증상 너머의 일상을 함께 살피는 것이 진료의 시작이라 믿습니다.&rdquo;
            </p>
          </div>
          <div className="mt-10 space-y-2.5 text-sm text-charcoal/80 font-light border-t border-line pt-6">
            <p>
              <span className="text-taupe mr-3 inline-block w-20">전문의</span>
              이비인후과 전문의
            </p>
            <p>
              <span className="text-taupe mr-3 inline-block w-20">학회</span>
              대한이비인후과학회 정회원
            </p>
            <p>
              <span className="text-taupe mr-3 inline-block w-20">학회</span>
              대한청각학회 / 대한비과학회 정회원
            </p>
            <p>
              <span className="text-taupe mr-3 inline-block w-20">학회</span>
              대한수면학회 정회원
            </p>
          </div>
          <Link
            href="/about#doctor"
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
          href="/facility"
          className="self-start md:self-end inline-flex items-center gap-3 text-cocoa text-sm tracking-[0.2em] border-b border-cocoa/30 pb-1 hover:border-cocoa transition-colors"
        >
          VIEW ALL
          <span>→</span>
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-3 md:gap-4">
        <div className="col-span-12 md:col-span-7">
          <Placeholder aspect="video" tone="warm" label="LOBBY" />
        </div>
        <div className="col-span-6 md:col-span-5">
          <Placeholder aspect="square" tone="soft" label="RECEPTION" />
        </div>
        <div className="col-span-6 md:col-span-5">
          <Placeholder aspect="square" tone="warm" label="CONSULTATION" />
        </div>
        <div className="col-span-12 md:col-span-7">
          <Placeholder aspect="video" tone="deep" label="REST AREA" />
        </div>
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
            href="/location"
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
