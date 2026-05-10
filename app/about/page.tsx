import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "인사말",
  description:
    "숨앤소리 이비인후과 대표원장 오승리의 인사말. 환자분의 호흡과 소리에 가장 가까이 다가가는 진료 철학을 소개합니다.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-bone">
        <Image
          src="/images/main/main1.png"
          alt="숨앤소리 이비인후과"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <Section bg="bone" size="lg">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-5">GREETINGS</p>
          <h2 className="heading-display text-cocoa text-3xl md:text-4xl lg:text-[44px]">
            인사말
          </h2>
          <p className="mt-10 font-serif italic text-cocoa text-2xl md:text-3xl leading-relaxed">
            &ldquo;가족을 돌본다는 마음으로
            <br />
            최선을 다하겠습니다.&rdquo;
          </p>
          <div className="mt-10 space-y-5 text-mocha text-base md:text-[17px] leading-[1.95] font-light">
            <p>안녕하세요. 숨앤소리 이비인후과 대표원장 오승리입니다.</p>
            <p>
              이비인후과는 호흡과 소리, 그리고 균형이라는 우리 삶의 가장
              기본적인 감각들이 만나는 곳입니다. 그래서 작은 변화 하나에도
              일상이 크게 흔들립니다. 코가 막혀 잠을 이루지 못하고, 작은
              이명에 마음이 어지럽고, 어지럼증으로 한 발자국 떼는 일이
              두려워지기도 합니다.
            </p>
            <p>
              저희 숨앤소리 이비인후과는 그 작은 변화를 가볍게 지나치지
              않으려 합니다. 충분한 시간을 들여 환자분의 이야기를 듣고,
              정밀한 검사로 원인을 깊이 살피며, 가장 적절한 치료의 길을
              함께 찾아가겠습니다.
            </p>
            <p className="font-serif italic text-cocoa pt-2">
              숨앤소리 이비인후과 대표원장 &nbsp;오승리 드림
            </p>
          </div>
        </div>
      </Section>

      <Section bg="ivory" size="lg">
        <SectionHeader
          eyebrow="OUR APPROACH"
          title={
            <>
              네 가지의 약속,
              <br />
              한 분 한 분에게 닿기까지
            </>
          }
          align="center"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              num: "01",
              title: "충분한 진료 시간",
              desc: "환자분의 이야기를 끝까지 들을 수 있도록, 충분한 진료 시간을 약속합니다.",
            },
            {
              num: "02",
              title: "정밀한 검사",
              desc: "최신 검사 장비와 검증된 프로토콜로 증상의 근본 원인을 찾습니다.",
            },
            {
              num: "03",
              title: "맞춤 치료 계획",
              desc: "검사 결과와 일상 환경을 모두 고려한 개인 맞춤 치료를 설계합니다.",
            },
            {
              num: "04",
              title: "지속적인 관리",
              desc: "치료 이후에도 회복의 과정을 함께 지켜보며 끝까지 동행합니다.",
            },
          ].map((item) => (
            <div key={item.num} className="border-t border-line-strong pt-6">
              <p className="font-serif italic text-taupe text-sm tracking-wider">
                {item.num}
              </p>
              <h3 className="mt-3 text-cocoa text-xl">{item.title}</h3>
              <p className="mt-3 text-mocha text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="bone" size="md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {[
            {
              href: "/about/doctor",
              eyebrow: "DOCTOR",
              title: "의료진 소개",
              desc: "오승리 대표원장의 학력·전공·진료 분야를 자세히 소개해 드립니다.",
            },
            {
              href: "/about/visit",
              eyebrow: "VISIT",
              title: "진료안내·오시는 길",
              desc: "진료시간과 위치, 교통 안내까지 한 번에 확인하실 수 있습니다.",
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block border border-line bg-ivory p-8 lg:p-10 hover:border-cocoa/40 transition-colors"
            >
              <p className="eyebrow mb-3">{c.eyebrow}</p>
              <h3 className="heading-display text-cocoa text-2xl md:text-3xl">
                {c.title}
              </h3>
              <p className="mt-4 text-mocha font-light leading-relaxed">
                {c.desc}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-xs text-cocoa tracking-[0.2em] border-b border-cocoa/30 pb-1 group-hover:border-cocoa transition-colors">
                READ MORE <span>→</span>
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
