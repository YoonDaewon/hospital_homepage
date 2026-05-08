import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "오시는 길",
  description: `${siteConfig.name} 위치 안내. 강남구 역삼동, 역삼역 2번 출구에서 도보 1분 거리. 대중교통·주차 안내 및 진료시간 정보.`,
  alternates: { canonical: "/location" },
};

const mapQuery = encodeURIComponent("역삼역 2번 출구");
const naverMapUrl = `https://map.naver.com/p/search/${mapQuery}`;
const kakaoMapUrl = `https://map.kakao.com/?q=${mapQuery}`;

export default function LocationPage() {
  return (
    <>
      <Section bg="bone" size="md" className="pt-32 lg:pt-40">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="eyebrow mb-5">LOCATION</p>
          <h1 className="heading-display text-cocoa text-4xl md:text-5xl lg:text-6xl">
            오시는 길
          </h1>
          <p className="mt-6 text-mocha text-base md:text-lg max-w-2xl font-light leading-relaxed">
            역삼역 2번 출구에서 도보 1분, 일상의 동선 위에 있습니다.
          </p>
        </div>
        <div className="aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden border border-line bg-ivory">
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
      </Section>

      <Section bg="ivory" size="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="eyebrow mb-4">CONTACT</p>
            <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
              연락처 및 진료시간
            </h2>
            <dl className="mt-10 space-y-5 text-charcoal font-light">
              <Row label="주소" value={siteConfig.address} />
              <Row
                label="대표"
                value={
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="tracking-wider hover:text-cocoa"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                }
              />
              <Row
                label="진료"
                value={
                  <div className="space-y-1">
                    {siteConfig.hours.map((h) => (
                      <p key={h.label}>
                        <span className="text-mocha mr-3 inline-block w-12">
                          {h.label}
                        </span>
                        {h.display}
                      </p>
                    ))}
                    <p className="text-charcoal/60 text-sm pt-1">
                      {siteConfig.lunch}
                    </p>
                  </div>
                }
              />
              <Row label="휴진" value={siteConfig.closedDays} />
            </dl>
          </div>

          <div>
            <p className="eyebrow mb-4">DIRECTIONS</p>
            <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
              교통 안내
            </h2>
            <div className="mt-10 space-y-7 text-charcoal/85 font-light">
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
          </div>
        </div>
      </Section>
    </>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-6 border-b border-line pb-4">
      <dt className="text-taupe w-16 shrink-0 text-sm pt-0.5">{label}</dt>
      <dd>{value}</dd>
    </div>
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
    <div className="border-b border-line pb-6">
      <p className="text-taupe text-sm tracking-wider mb-3">{label}</p>
      <ul className="space-y-1.5">
        {lines.map((l) => (
          <li key={l} className="leading-relaxed">
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
