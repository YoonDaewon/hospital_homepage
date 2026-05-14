export const siteConfig = {
  name: "숨앤소리 이비인후과",
  nameEn: "SOOM&SORI ENT CLINIC",
  tagline: "강남 역삼역 이비인후과",
  description:
    "숨앤소리 이비인후과는 환자분 한 분 한 분의 호흡과 소리에 귀 기울이는 강남 역삼역 이비인후과입니다. 난청·이명, 어지럼증·두통, 수면질환, 비염·축농증, 후두음성, 기능의학까지 정밀한 맞춤 진료를 제공합니다.",
  keywords: [
    "숨앤소리 이비인후과",
    "강남 이비인후과",
    "역삼 이비인후과",
    "역삼역 이비인후과",
    "강남구 이비인후과 추천",
    "난청 이명 클리닉",
    "어지럼증 두통 클리닉",
    "수면다원검사",
    "코골이 수면무호흡",
    "비염 축농증",
    "보청기",
    "오승리 원장",
  ],
  url: "https://soom-sori.kr",
  address: "서울특별시 강남구 역삼동 (역삼역 2번 출구 도보 1분)",
  addressShort: "강남구 역삼동, 역삼역 2번 출구",
  phone: "02-000-0000",
  phoneDisplay: "02-000-0000",
  email: "contact@soom-sori.kr",
  hours: [
    {
      label: "평일",
      daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
      display: "오전 9:30 — 오후 6:30",
    },
    {
      label: "토요일",
      daysOfWeek: ["Saturday"],
      opens: "09:30",
      closes: "13:30",
      display: "오전 9:30 — 오후 1:30",
    },
  ],
  closedDays: "일요일 / 공휴일 휴진",
  lunch: "점심시간 오후 1:00 — 오후 2:00",
};

export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navigation: NavItem[] = [
  {
    label: "병원소개",
    href: "/about",
    children: [
      { label: "숨앤소리 이비인후과", href: "/about" },
      { label: "의료진 소개", href: "/about/doctor" },
      { label: "장비 소개", href: "/about/equipment" },
      { label: "진료안내·오시는 길", href: "/about/visit" },
    ],
  },
  {
    label: "난청·이명",
    href: "/hearing-tinnitus/hearing-loss",
    children: [
      { label: "난청", href: "/hearing-tinnitus/hearing-loss" },
      { label: "이명", href: "/hearing-tinnitus/tinnitus" },
      { label: "청각장애 진단", href: "/hearing-tinnitus/disability-diagnosis" },
    ],
  },
  {
    label: "어지럼증·두통",
    href: "/dizziness-headache/dizziness",
    children: [
      { label: "어지럼증", href: "/dizziness-headache/dizziness" },
      { label: "두통", href: "/dizziness-headache/headache" },
    ],
  },
  {
    label: "수면질환",
    href: "/sleep/disorders",
    children: [
      { label: "수면질환", href: "/sleep/disorders" },
      { label: "수면다원검사", href: "/sleep/polysomnography" },
      { label: "코골이·수면무호흡증", href: "/sleep/snoring-osa" },
      { label: "불면증", href: "/sleep/insomnia" },
      { label: "하지불안증후군", href: "/sleep/rls" },
      { label: "렘수면장애·몽유병", href: "/sleep/rbd" },
      { label: "양압기", href: "/sleep/cpap" },
    ],
  },
  {
    label: "이비인후과",
    href: "/ent/rhinitis-sinusitis",
    children: [
      { label: "비염·축농증", href: "/ent/rhinitis-sinusitis" },
      { label: "후두·음성질환", href: "/ent/voice" },
      { label: "기능의학", href: "/ent/functional-medicine" },
    ],
  },
  {
    label: "수술·수액",
    href: "/surgery-iv/procedures",
    children: [
      { label: "비·구강 시술", href: "/surgery-iv/procedures" },
      { label: "영양·면역 수액", href: "/surgery-iv/iv-therapy" },
    ],
  },
];
