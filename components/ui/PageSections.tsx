import { Section } from "./Section";
import { MediaFrame } from "./MediaFrame";
import { Placeholder } from "./Placeholder";
import type { PageSection } from "@/lib/categories/types";

export function PageSections({ sections }: { sections: PageSection[] }) {
  return (
    <>
      {sections.map((s, i) => (
        <SectionRenderer key={i} section={s} bg={bgFor(s, i)} />
      ))}
    </>
  );
}

function bgFor(section: PageSection, idx: number): "bone" | "ivory" | "sand" {
  if (section.kind === "closing") return "sand";
  return idx % 2 === 0 ? "bone" : "ivory";
}

function SectionRenderer({
  section,
  bg,
}: {
  section: PageSection;
  bg: "bone" | "ivory" | "sand";
}) {
  switch (section.kind) {
    case "overview":
      return <Overview section={section} bg={bg} />;
    case "symptoms":
      return <Symptoms section={section} bg={bg} />;
    case "causes":
      return <Causes section={section} bg={bg} />;
    case "diagnosis":
      return <Diagnosis section={section} bg={bg} />;
    case "treatment":
      return <Treatment section={section} bg={bg} />;
    case "prevention":
      return <Prevention section={section} bg={bg} />;
    case "faq":
      return <Faq section={section} bg={bg} />;
    case "closing":
      return <Closing section={section} />;
  }
}

function Overview({
  section,
  bg,
}: {
  section: Extract<PageSection, { kind: "overview" }>;
  bg: "bone" | "ivory" | "sand";
}) {
  const hasMedia = !!section.image || !!section.imageAlt;
  if (hasMedia) {
    return (
      <Section bg={bg} size="md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            {section.image ? (
              <MediaFrame
                src={section.image}
                alt={section.imageAlt ?? ""}
                aspect="portrait"
              />
            ) : (
              <Placeholder aspect="portrait" tone="warm" />
            )}
          </div>
          <div className="lg:col-span-7">
            <OverviewText section={section} />
          </div>
        </div>
      </Section>
    );
  }
  return (
    <Section bg={bg} size="md">
      <div className="max-w-3xl">
        <OverviewText section={section} />
      </div>
    </Section>
  );
}

function OverviewText({
  section,
}: {
  section: Extract<PageSection, { kind: "overview" }>;
}) {
  return (
    <>
      <p className="eyebrow mb-4">{section.eyebrow ?? "OVERVIEW"}</p>
      {section.heading && (
        <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
          {section.heading}
        </h2>
      )}
      <div
        className={
          section.heading
            ? "mt-8 space-y-5 text-mocha text-[16px] md:text-[17px] leading-[1.95] font-light"
            : "space-y-5 text-mocha text-[16px] md:text-[17px] leading-[1.95] font-light"
        }
      >
        {section.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  );
}

function Symptoms({
  section,
  bg,
}: {
  section: Extract<PageSection, { kind: "symptoms" }>;
  bg: "bone" | "ivory" | "sand";
}) {
  return (
    <Section bg={bg} size="md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4">{section.eyebrow ?? "SYMPTOMS"}</p>
          <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
            {section.heading ?? "혹시 이런 증상이 있으신가요?"}
          </h2>
          {section.desc && (
            <p className="mt-6 text-mocha font-light leading-relaxed">
              {section.desc}
            </p>
          )}
        </div>
        <div className="lg:col-span-7">
          <ul className="divide-y divide-line">
            {section.items.map((s, i) => (
              <li
                key={s}
                className="flex items-start gap-5 py-5 text-charcoal"
              >
                <span
                  aria-hidden
                  className="mt-1.5 inline-flex items-center justify-center w-5 h-5 border border-cocoa/40 text-cocoa shrink-0"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[15.5px] leading-relaxed font-normal">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Causes({
  section,
  bg,
}: {
  section: Extract<PageSection, { kind: "causes" }>;
  bg: "bone" | "ivory" | "sand";
}) {
  return (
    <Section bg={bg} size="md">
      <div className="max-w-2xl mb-14">
        <p className="eyebrow mb-4">{section.eyebrow ?? "CAUSES"}</p>
        <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
          {section.heading ?? "원인과 유형"}
        </h2>
        {section.desc && (
          <p className="mt-6 text-mocha font-light leading-relaxed">
            {section.desc}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 lg:gap-x-12">
        {section.cards.map((c) => (
          <div
            key={c.title}
            className="border-t border-line-strong pt-7 pb-2"
          >
            <h3 className="text-cocoa text-xl tracking-tight font-medium">
              {c.title}
            </h3>
            <p className="mt-3 text-mocha leading-[1.85] font-light text-[15px]">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Diagnosis({
  section,
  bg,
}: {
  section: Extract<PageSection, { kind: "diagnosis" }>;
  bg: "bone" | "ivory" | "sand";
}) {
  return (
    <Section bg={bg} size="md">
      <div className="max-w-2xl mb-14">
        <p className="eyebrow mb-4">{section.eyebrow ?? "DIAGNOSIS"}</p>
        <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
          {section.heading ?? "검사 및 진단"}
        </h2>
        {section.desc && (
          <p className="mt-6 text-mocha font-light leading-relaxed">
            {section.desc}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {section.steps.map((s) => (
          <div
            key={s.step}
            className="bg-bone border border-line p-7 lg:p-8"
          >
            <p className="font-serif italic text-taupe text-xs tracking-[0.2em]">
              STEP&nbsp;{s.step}
            </p>
            <h3 className="mt-4 text-cocoa text-lg lg:text-xl tracking-tight font-medium">
              {s.title}
            </h3>
            <p className="mt-3 text-mocha leading-relaxed font-light text-[14.5px]">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Treatment({
  section,
  bg,
}: {
  section: Extract<PageSection, { kind: "treatment" }>;
  bg: "bone" | "ivory" | "sand";
}) {
  return (
    <Section bg={bg} size="md">
      <div className="max-w-2xl mb-14">
        <p className="eyebrow mb-4">{section.eyebrow ?? "TREATMENT"}</p>
        <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
          {section.heading ?? "치료 프로그램"}
        </h2>
        {section.desc && (
          <p className="mt-6 text-mocha font-light leading-relaxed">
            {section.desc}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {section.programs.map((p, i) => (
          <div
            key={p.title}
            className="bg-ivory border border-line p-8 lg:p-10"
          >
            <p className="font-serif italic text-taupe text-xs tracking-[0.2em]">
              0{i + 1}
            </p>
            <h3 className="mt-4 text-cocoa text-xl tracking-tight font-medium">
              {p.title}
            </h3>
            <p className="mt-4 text-mocha leading-relaxed font-light text-[15px]">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Prevention({
  section,
  bg,
}: {
  section: Extract<PageSection, { kind: "prevention" }>;
  bg: "bone" | "ivory" | "sand";
}) {
  return (
    <Section bg={bg} size="md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4">{section.eyebrow ?? "PREVENTION"}</p>
          <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
            {section.heading ?? "예방 수칙"}
          </h2>
          {section.desc && (
            <p className="mt-6 text-mocha font-light leading-relaxed">
              {section.desc}
            </p>
          )}
        </div>
        <div className="lg:col-span-7">
          <ul className="space-y-4">
            {section.items.map((s, i) => (
              <li
                key={s}
                className="flex items-start gap-4 text-charcoal border-b border-line pb-4 last:border-b-0"
              >
                <span className="font-serif italic text-taupe text-sm tracking-wider mt-1 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15.5px] leading-relaxed font-normal">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Faq({
  section,
  bg,
}: {
  section: Extract<PageSection, { kind: "faq" }>;
  bg: "bone" | "ivory" | "sand";
}) {
  return (
    <Section bg={bg} size="md">
      <div className="max-w-2xl mb-12">
        <p className="eyebrow mb-4">{section.eyebrow ?? "FAQ"}</p>
        <h2 className="heading-display text-cocoa text-3xl md:text-4xl">
          {section.heading ?? "자주 묻는 질문"}
        </h2>
      </div>
      <div className="border-t border-line-strong">
        {section.items.map((item, i) => (
          <details
            key={i}
            className="group border-b border-line"
          >
            <summary className="flex items-start justify-between gap-6 py-6 cursor-pointer list-none">
              <span className="flex items-start gap-5">
                <span className="font-serif italic text-taupe text-sm tracking-wider mt-1 shrink-0">
                  Q{String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-cocoa text-base md:text-lg font-medium">
                  {item.q}
                </span>
              </span>
              <span
                aria-hidden
                className="mt-1 shrink-0 w-6 h-6 flex items-center justify-center text-cocoa transition-transform duration-300 group-open:rotate-45"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <div className="pl-12 pr-6 pb-7 -mt-1 text-mocha text-[15px] leading-[1.85] font-light">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}

function Closing({
  section,
}: {
  section: Extract<PageSection, { kind: "closing" }>;
}) {
  return (
    <Section bg="sand" size="md">
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow mb-6">{section.eyebrow ?? "OUR PROMISE"}</p>
        <p className="font-serif italic text-cocoa text-2xl md:text-3xl lg:text-[34px] leading-[1.5]">
          &ldquo;{section.quote}&rdquo;
        </p>
        {section.attribution && (
          <p className="mt-6 text-mocha font-light text-sm tracking-wider">
            — {section.attribution}
          </p>
        )}
      </div>
    </Section>
  );
}
