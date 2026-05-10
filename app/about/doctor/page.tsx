import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { MediaFrame } from "@/components/ui/MediaFrame";

export const metadata: Metadata = {
  title: "의료진 소개",
  description:
    "숨앤소리 이비인후과 오승리 대표원장의 학력·수련·학회 활동·진료 분야를 소개합니다.",
  alternates: { canonical: "/about/doctor" },
};

export default function DoctorPage() {
  return (
    <>
      <PageHero
        eyebrow="DOCTOR"
        title="듣는 일에서, 가장 깊이 시작하는 진료"
        subtitle="환자분의 이야기를 끝까지 듣고, 그 이야기 위에서 진료를 설계합니다."
        image="/images/aboutHero.jpg"
        imageAlt="숨앤소리 이비인후과 의료진"
      />

      <Section bg="bone" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <MediaFrame
              src="/images/doctor_v1.png"
              alt="숨앤소리 이비인후과 오승리 대표원장"
              aspect="portrait"
              sizes="(max-width: 1024px) 100vw, 40vw"
              objectPosition="center top"
            />
            <div className="mt-6">
              <p className="eyebrow">DR. OH SEUNGRI</p>
              <h3 className="mt-3 heading-display text-cocoa text-3xl md:text-4xl">
                오승리 대표원장
              </h3>
              <p className="mt-2 text-taupe text-sm tracking-wider">
                이비인후과 전문의
              </p>
              <p className="mt-6 font-serif italic text-cocoa text-lg leading-relaxed">
                &ldquo;가족을 돌본다는 마음으로
                <br />
                최선을 다하겠습니다.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-5">PROFILE</p>
            <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
              의료진 프로필
            </h2>

            <div className="mt-10 space-y-10">
              <ProfileBlock
                heading="전문의 자격"
                items={["대한이비인후과학회 인정 이비인후과 전문의"]}
              />
              <ProfileBlock
                heading="학력 / 수련"
                items={[
                  "중앙대학교 의과대학 졸업",
                  "중앙대학교 의학 석사",
                  "중앙대학교병원 이비인후과 전공의 수료",
                ]}
              />
              <ProfileBlock
                heading="학회 활동"
                items={[
                  "대한이비인후과학회 정회원",
                  "대한비과학회 정회원",
                  "대한이과학회 정회원",
                  "대한두경부외과학회 정회원",
                  "대한소아이비인후과학회 정회원",
                  "대한수면학회 정회원",
                ]}
              />
              <ProfileBlock
                heading="진료 분야"
                items={[
                  "난청 · 이명 · 돌발성 난청 · 보청기",
                  "어지럼증 · 두통 · 이석증 · 메니에르",
                  "비염 · 축농증 · 후각 장애",
                  "코골이 · 수면무호흡 · 수면다원검사 · 양압기",
                  "후두 · 음성질환 · 만성 기침",
                  "기능의학 · 면역 · 영양 · 만성 피로",
                ]}
              />
            </div>
          </div>
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
