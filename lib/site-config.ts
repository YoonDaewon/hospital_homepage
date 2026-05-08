export const siteConfig = {
  name: "숨앤소리 이비인후과",
  nameEn: "SOOM&SORI ENT CLINIC",
  tagline: "강남 역삼역 이비인후과",
  description:
    "숨앤소리 이비인후과는 환자분 한 분 한 분의 호흡과 소리에 귀 기울이는 강남 역삼역 이비인후과입니다. 난청·이명, 어지럼증·두통, 비염·축농증, 수면질환, 아동발달, 기능의학, 보청기까지 정밀한 맞춤 진료를 제공합니다.",
  keywords: [
    "숨앤소리 이비인후과",
    "강남 이비인후과",
    "역삼 이비인후과",
    "역삼역 이비인후과",
    "강남구 이비인후과 추천",
    "난청 이명 클리닉",
    "어지럼증 두통 클리닉",
    "비염 축농증",
    "수면다원검사",
    "코골이 수면무호흡",
    "아동발달 클리닉",
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
      { label: "인사말", href: "/about" },
      { label: "의료진 소개", href: "/about#doctor" },
      { label: "시설 둘러보기", href: "/facility" },
    ],
  },
  {
    label: "진료안내",
    href: "/clinic",
    children: [
      { label: "난청·이명 클리닉", href: "/clinic/hearing-tinnitus" },
      { label: "어지럼증·두통 클리닉", href: "/clinic/dizziness-headache" },
      { label: "비염·축농증 클리닉", href: "/clinic/rhinitis-sinusitis" },
      { label: "수면질환 클리닉", href: "/clinic/sleep" },
      { label: "아동발달 클리닉", href: "/clinic/child-development" },
      { label: "기능의학 클리닉", href: "/clinic/functional-medicine" },
      { label: "보청기 센터", href: "/clinic/hearing-aid" },
    ],
  },
  {
    label: "검사안내",
    href: "/examination",
  },
  {
    label: "시설안내",
    href: "/facility",
  },
  {
    label: "오시는 길",
    href: "/location",
  },
];
