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

export type PreventionSection = {
  kind: "prevention";
  eyebrow?: string;
  heading?: string;
  desc?: string;
  items: string[];
};

export type FaqSection = {
  kind: "faq";
  eyebrow?: string;
  heading?: string;
  items: { q: string; a: string }[];
};

export type PageSection =
  | OverviewSection
  | SymptomsSection
  | CausesSection
  | DiagnosisSection
  | TreatmentSection
  | PreventionSection
  | FaqSection
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
