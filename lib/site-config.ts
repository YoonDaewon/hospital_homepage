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
  address: "서울특별시 강남구 역삼동 739 3층 (역삼역 3번 출구 도보 150m)",
  addressShort: "강남구 역삼동 739, 역삼역 3번 출구",
  phone: "02-554-5120",
  phoneDisplay: "02-554-5120",
  email: "contact@soom-sori.kr",
  hours: [
    {
      label: "평일",
      daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:30",
      display: "AM 08:30 — PM 06:30",
    },
    {
      label: "토요일",
      daysOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
      display: "AM 09:00 — PM 02:00",
    },
  ],
  closedDays: "일요일 / 공휴일 휴진",
  lunch: "점심시간 PM 01:30 — PM 02:30",
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
      { label: "둘러보기", href: "/about/facility" },
      { label: "진료안내·오시는 길", href: "/about/visit" },
    ],
  },
  {
    label: "난청·이명",
    href: "/hearing-tinnitus/hearing-loss",
    children: [
      { label: "난청", href: "/hearing-tinnitus/hearing-loss" },
      { label: "이명", href: "/hearing-tinnitus/tinnitus" },
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
    href: "/sleep/polysomnography",
    children: [
      { label: "수면다원검사", href: "/sleep/polysomnography" },
      { label: "코골이·수면무호흡증", href: "/sleep/snoring-osa" },
      { label: "불면증", href: "/sleep/insomnia" },
      { label: "하지불안증후군", href: "/sleep/rls" },
      { label: "양압기", href: "/sleep/cpap" },
    ],
  },
  {
    label: "이비인후과",
    href: "/ent/voice",
    children: [
      { label: "후두·음성질환", href: "/ent/voice" },
      { label: "초음파 클리닉", href: "/ent/ultrasound" },
    ],
  },
  {
    label: "수술",
    href: "/surgery/procedures",
    children: [
      { label: "비·구강 시술", href: "/surgery/procedures" },
    ],
  },
  {
    label: "수액",
    href: "/iv/therapy",
    children: [
      { label: "영양·면역 수액", href: "/iv/therapy" },
    ],
  },
];
