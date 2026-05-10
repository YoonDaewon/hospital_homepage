export type OverviewSection = {
  kind: "overview";
  eyebrow?: string;
  heading?: string;
  body: string[];
  image?: string;
  imageAlt?: string;
};

export type SymptomsSection = {
  kind: "symptoms";
  eyebrow?: string;
  heading?: string;
  desc?: string;
  items: string[];
};

export type CausesSection = {
  kind: "causes";
  eyebrow?: string;
  heading?: string;
  desc?: string;
  cards: { title: string; desc: string }[];
};

export type DiagnosisSection = {
  kind: "diagnosis";
  eyebrow?: string;
  heading?: string;
  desc?: string;
  steps: { step: string; title: string; desc: string }[];
};

export type TreatmentSection = {
  kind: "treatment";
  eyebrow?: string;
  heading?: string;
  desc?: string;
  programs: { title: string; desc: string }[];
};

export type ClosingSection = {
  kind: "closing";
  eyebrow?: string;
  quote: string;
  attribution?: string;
};

export type PageSection =
  | OverviewSection
  | SymptomsSection
  | CausesSection
  | DiagnosisSection
  | TreatmentSection
  | ClosingSection;

export type SubPage = {
  slug: string;
  name: string;
  nameEn: string;
  tagline: string;
  summary: string;
  keywords?: string[];
  hero?: { image?: string; imageAlt?: string };
  sections: PageSection[];
  /** 본문을 이미지 한 장으로 대체 (있으면 sections는 렌더링되지 않음) */
  contentImage?: { src: string; alt?: string; width: number; height: number };
};

export type Category = {
  slug:
    | "hearing-tinnitus"
    | "dizziness-headache"
    | "sleep"
    | "ent"
    | "surgery-iv";
  name: string;
  nameEn: string;
  tagline: string;
  intro: string;
  hero?: { image?: string; imageAlt?: string };
  pages: SubPage[];
};
