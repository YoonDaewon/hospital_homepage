import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";

export const metadata: Metadata = {
  title: "병원소개",
  description:
    "숨앤소리 이비인후과는 환자분의 호흡과 소리에 가장 가까이 다가가는 강남 역삼역 이비인후과입니다. 오승리 대표원장의 진료 철학과 의료진을 소개합니다.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="우리는, 듣는 일에서부터 시작합니다."
        subtitle="환자분이 들려주시는 작은 이야기 하나하나가, 가장 정확한 진료의 출발점입니다."
      />

      <Section bg="bone" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Placeholder aspect="portrait" tone="warm" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-5">GREETINGS</p>
            <h2 className="heading-display text-cocoa text-3xl md:text-4xl lg:text-[44px]">
              인사말
            </h2>
            <div className="mt-8 space-y-5 text-mocha text-base md:text-[17px] leading-[1.95] font-light">
              <p>
                안녕하세요. 숨앤소리 이비인후과 대표원장 오승리입니다.
              </p>
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
              <p className="font-serif italic text-cocoa">
                숨앤소리 이비인후과 대표원장 &nbsp;오승리 드림
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="ivory" size="lg" id="doctor">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Placeholder aspect="portrait" tone="deep" />
            <div className="mt-6">
              <p className="eyebrow">DR. OH SEUNGRI</p>
              <h3 className="mt-3 heading-display text-cocoa text-3xl md:text-4xl">
                오승리 대표원장
              </h3>
              <p className="mt-2 text-taupe text-sm tracking-wider">
                이비인후과 전문의
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-5">PROFILE</p>
            <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
              의료진 소개
            </h2>

            <div className="mt-10 space-y-10">
              <ProfileBlock
                heading="전문의 자격"
                items={["대한이비인후과학회 인정 이비인후과 전문의"]}
              />
              <ProfileBlock
                heading="학력"
                items={[
                  "대학교 의과대학 졸업",
                  "대학병원 이비인후과 전공의 수료",
                  "이비인후과 박사 과정 수료 (예시)",
                ]}
              />
              <ProfileBlock
                heading="학회 활동"
                items={[
                  "대한이비인후과학회 정회원",
                  "대한청각학회 정회원",
                  "대한비과학회 정회원",
                  "대한수면학회 정회원",
                  "대한기능의학회 정회원",
                ]}
              />
              <ProfileBlock
                heading="진료 분야"
                items={[
                  "난청 · 이명 · 돌발성 난청",
                  "어지럼증 · 두통 · 이석증",
                  "비염 · 축농증 · 코골이 · 수면무호흡",
                  "아동 청각 · 언어발달 평가",
                  "기능의학 · 면역 · 영양 클리닉",
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section bg="bone" size="lg">
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
    </>
  );
}

function ProfileBlock({
  heading,
  items,
}: {
  heading: string;
  items: string[];
}) {
  return (
    <div className="border-t border-line pt-6">
      <p className="text-taupe text-sm tracking-wider mb-3">{heading}</p>
      <ul className="space-y-2 text-charcoal/85 font-light">
        {items.map((it) => (
          <li key={it} className="leading-relaxed">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
