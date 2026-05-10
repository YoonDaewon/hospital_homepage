import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "진료안내·오시는 길",
  description: `${siteConfig.name} 진료시간 및 위치 안내. 강남구 역삼동, 역삼역 2번 출구에서 도보 1분 거리. 대중교통·주차 안내 및 진료시간 정보.`,
  alternates: { canonical: "/about/visit" },
};

const mapQuery = encodeURIComponent("역삼역 2번 출구");
const naverMapUrl = `https://map.naver.com/p/search/${mapQuery}`;
const kakaoMapUrl = `https://map.kakao.com/?q=${mapQuery}`;

export default function VisitPage() {
  return (
    <>
      <PageHero
        plain
        eyebrow="VISIT"
        title="진료안내 · 오시는 길"
        subtitle="역삼역 2번 출구에서 도보 1분, 일상의 동선 위에 있습니다."
      />

      <Section bg="bone" size="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="eyebrow mb-4">HOURS</p>
            <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
              진료시간
            </h2>
            <dl className="mt-10 space-y-5 text-charcoal font-light">
              {siteConfig.hours.map((h) => (
                <div
                  key={h.label}
                  className="flex gap-6 border-b border-line pb-4"
                >
                  <dt className="text-taupe w-16 shrink-0 text-sm pt-0.5">
                    {h.label}
                  </dt>
                  <dd>{h.display}</dd>
                </div>
              ))}
              <div className="flex gap-6 border-b border-line pb-4">
                <dt className="text-taupe w-16 shrink-0 text-sm pt-0.5">휴진</dt>
                <dd>{siteConfig.closedDays}</dd>
              </div>
              <div className="flex gap-6">
                <dt className="text-taupe w-16 shrink-0 text-sm pt-0.5">
                  점심
                </dt>
                <dd className="text-charcoal/70">{siteConfig.lunch}</dd>
              </div>
            </dl>
          </div>
          <div>
            <p className="eyebrow mb-4">CONTACT</p>
            <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
              연락처
            </h2>
            <dl className="mt-10 space-y-5 text-charcoal font-light">
              <div className="flex gap-6 border-b border-line pb-4">
                <dt className="text-taupe w-16 shrink-0 text-sm pt-0.5">대표</dt>
                <dd>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="tracking-wider hover:text-cocoa text-2xl"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex gap-6 border-b border-line pb-4">
                <dt className="text-taupe w-16 shrink-0 text-sm pt-0.5">주소</dt>
                <dd>{siteConfig.address}</dd>
              </div>
              <div className="flex gap-6">
                <dt className="text-taupe w-16 shrink-0 text-sm pt-0.5">
                  이메일
                </dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-cocoa"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section bg="ivory" size="md">
        <p className="eyebrow mb-4">LOCATION</p>
        <h2 className="heading-display text-cocoa text-3xl md:text-4xl mb-10">
          오시는 길
        </h2>
        <div className="aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden border border-line bg-bone">
          <iframe
            title="숨앤소리 이비인후과 위치"
            src={`https://maps.google.com/maps?q=${mapQuery}&hl=ko&z=17&output=embed`}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-cocoa/40 text-cocoa text-sm tracking-wider hover:bg-cocoa hover:text-bone transition-all"
          >
            네이버 지도로 보기 <span>→</span>
          </a>
          <a
            href={kakaoMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-cocoa/40 text-cocoa text-sm tracking-wider hover:bg-cocoa hover:text-bone transition-all"
          >
            카카오 지도로 보기 <span>→</span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <DirectionBlock
            label="지하철"
            lines={[
              "2호선 역삼역 2번 출구 도보 1분",
              "분당선 선릉역에서 도보 8분",
            ]}
          />
          <DirectionBlock
            label="버스"
            lines={[
              "역삼역 정류장: 간선 146·341·360, 지선 4419 등",
              "GS타워 정류장: 광역 9404, 간선 360 등",
            ]}
          />
          <DirectionBlock
            label="자가용"
            lines={[
              "건물 내 주차장 이용 가능 (진료 시 2시간 무료)",
              "주변 공영주차장 이용 가능",
            ]}
          />
        </div>
      </Section>
    </>
  );
}

function DirectionBlock({
  label,
  lines,
}: {
  label: string;
  lines: string[];
}) {
  return (
    <div className="border-t border-line-strong pt-6">
      <p className="text-taupe text-sm tracking-wider mb-4">{label}</p>
      <ul className="space-y-2 text-charcoal/85 font-light">
        {lines.map((l) => (
          <li key={l} className="leading-relaxed">
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
