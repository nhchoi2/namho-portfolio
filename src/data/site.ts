import {
  AppWindow,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  FileText,
  Globe2,
  Mail,
  PlaySquare,
  Smartphone,
  Store
} from "lucide-react";

export const siteConfig = {
  name: "최남호",
  title: "최남호 | Education × HR × IT",
  description:
    "교육행정과 조직 운영의 현장에서 사람을 배우고, 웹사이트와 앱, 내부 시스템, 콘텐츠로 문제를 풀어가는 최남호의 개인 브랜드 사이트.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://namho-portfolio.vercel.app",
  youtube: "https://www.youtube.com/@%EA%B6%8C%EB%8F%84%EC%9C%A4-KEVIN",
  featuredVideo: {
    title: "권도윤 KEVIN 대표 영상",
    watchUrl: "https://www.youtube.com/watch?v=ZmAy6-MoJ_U&t=22s",
    embedUrl: "https://www.youtube.com/embed/ZmAy6-MoJ_U?start=22&rel=0"
  },
  email: "mailto:koofylab@gmail.com"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Apps", href: "#apps" },
  { label: "Websites", href: "#websites" },
  { label: "Documents", href: "#documents" },
  { label: "Contact", href: "#contact" }
];

export const storyItems = [
  {
    keyword: "Education",
    text: "교육행정의 현장에서 사람과 시스템이 움직이는 방식을 배웠습니다."
  },
  {
    keyword: "Build",
    text: "배운 기술을 웹사이트, 모바일 앱, 내부 시스템으로 옮기고 있습니다."
  },
  {
    keyword: "Bridge",
    text: "이제 교육생과 기업 사이에서 현실적인 연결을 만들고 싶습니다."
  }
];

export const metrics = [
  { value: 15, suffix: "+ Years", label: "교육행정과 조직 운영" },
  { value: 340, suffix: "+ Exams", label: "시험 운영 경험" },
  { value: 24, suffix: " Test Centers", label: "고사장 운영 관리" },
  { value: 300, suffix: "% Growth", label: "성과 개선 경험" },
  { value: 3, suffix: " Published Apps", label: "출시한 모바일 앱" },
  { value: 5, suffix: "+ Websites", label: "제작한 웹사이트" }
];

export const profileCards = [
  {
    icon: BookOpenCheck,
    title: "교육행정",
    body: "시험 운영, 응시자 관리, 성적 처리, 시험장 확대까지 교육 서비스가 돌아가는 현장을 오래 지켜봤습니다."
  },
  {
    icon: BriefcaseBusiness,
    title: "조직 운영",
    body: "인사, 회계, ERP, 복리후생처럼 조직이 매일 굴러가게 하는 일을 손에 익혔습니다."
  },
  {
    icon: Building2,
    title: "사람 이해",
    body: "민원, 면담, 상담을 거치며 문제의 출발점이 사람의 상황에 있다는 걸 배웠습니다."
  },
  {
    icon: AppWindow,
    title: "IT 도전",
    body: "Java, Spring Boot, AWS를 배우고 웹사이트, 모바일 앱, 내부 인트라넷으로 생각을 구체화하고 있습니다."
  }
];

export const skillGroups = [
  {
    title: "Operation",
    items: ["시험 운영", "인사행정", "회계·ERP", "문서관리", "고객 상담"]
  },
  {
    title: "Technology",
    items: ["Java", "Spring Boot", "AWS", "MySQL", "API", "Git"]
  },
  {
    title: "Creation",
    items: ["웹사이트 제작", "모바일 앱 출시", "인트라넷 기획", "영상 촬영·편집"]
  },
  {
    title: "People",
    items: ["의사소통", "공감능력", "관찰력", "문제 해결", "업무 조율"]
  }
];

export const careerItems = [
  {
    company: "(주)한국지텔프"
  },
  {
    company: "하이미디어 IT인재개발원"
  },
  {
    company: "라온코드"
  },
  {
    company: "디케빈즈택스랩"
  }
];

export const projects = [
  {
    name: "BusPop",
    role: "기획 · 앱 출시",
    description: "색을 맞추고 버스를 채우는 Unity 기반 모바일 퍼즐 게임. 아이디어에서 App Store 출시까지 이어간 첫 게임 프로젝트.",
    tech: ["Unity", "App Store", "Google Play 출시 전"],
    accent: "blue",
    image: {
      src: "/images/app/buspop.png",
      alt: "BusPop mobile puzzle game preview"
    },
    href: "https://apps.apple.com/kr/app/buspop/id6779111275"
  },
  {
    name: "Koofy Sudoku",
    role: "기획 · 앱 출시",
    description: "짧은 집중과 깔끔한 플레이 흐름을 담은 Flutter 기반 스도쿠 앱. Google Play에 공개한 퍼즐 프로젝트.",
    tech: ["Flutter", "Puzzle", "Google Play"],
    accent: "green",
    image: {
      src: "/images/app/koofy-sudoku.png",
      alt: "Koofy Sudoku mobile game preview"
    },
    href: "https://play.google.com/store/apps/details?id=com.koofy.sudoku"
  },
  {
    name: "지본",
    role: "기획 · 앱/웹 제작",
    description: "가까운 사람들과 더 안전하게 연결되는 커뮤니티 서비스. 앱과 브랜드 웹사이트를 함께 만든 프로젝트.",
    tech: ["Mobile App", "Google Play", "Website"],
    accent: "cyan",
    image: {
      src: "/images/app/zivon.png",
      alt: "Zivon app and website service preview"
    },
    href: "https://www.zivonapp.com/"
  },
  {
    name: "용스다이닝",
    role: "웹사이트 제작",
    description: "두부요리 전문 포차의 분위기, 메뉴, 브랜드 인상을 한 화면에 담은 홈페이지.",
    tech: ["Next.js", "Design", "SEO"],
    accent: "gold",
    image: {
      src: "/images/websites/yongs-dining.png",
      alt: "용스다이닝 website brand preview"
    },
    href: "https://www.yongs-dining.com/"
  },
  {
    name: "오렌짐",
    role: "웹사이트 제작",
    description: "운동 공간의 에너지와 1:1 관리의 신뢰감을 시각적으로 보여주는 피트니스 웹사이트.",
    tech: ["Landing", "Responsive", "Contact"],
    accent: "cyan",
    image: {
      src: "/images/websites/orengym.png",
      alt: "오렌짐 website brand preview"
    },
    href: "#websites"
  },
  {
    name: "디케빈즈택스랩",
    role: "웹사이트 제작",
    description: "세무 파트너로서의 신뢰감과 상담 흐름을 정돈한 비즈니스 홈페이지.",
    tech: ["Business", "Website", "Operation"],
    accent: "blue",
    image: {
      src: "/images/websites/thekevins-taxlab.png",
      alt: "디케빈즈택스랩 website brand preview"
    },
    href: "https://www.thekevinstaxlab.com/"
  },
  {
    name: "사내 인트라넷",
    role: "업무 시스템",
    description: "공지, 일정, 문서, 업무 현황을 한곳에 모아 조직의 흐름을 가볍게 만드는 내부 시스템.",
    tech: ["Admin", "Workflow", "Internal"],
    accent: "green",
    image: {
      src: "/images/websites/intranet.png",
      alt: "사내 인트라넷 dashboard preview"
    },
    href: "#contact"
  }
];

export const apps = [
  {
    name: "BusPop",
    platform: "App Store · Google Play 출시 전",
    description: "색을 맞추고 승객을 태우는 가벼운 모바일 퍼즐 게임. App Store에 먼저 공개한 앱.",
    status: "App Store 출시",
    icon: Smartphone,
    image: {
      src: "/images/app/buspop.png",
      alt: "BusPop mobile puzzle game preview"
    },
    storeStatus: {
      googlePlay: "출시 전",
      appStore: ""
    },
    links: {
      googlePlay: "",
      appStore: "https://apps.apple.com/kr/app/buspop/id6779111275"
    }
  },
  {
    name: "Koofy Sudoku",
    platform: "Google Play",
    description: "복잡한 설명 없이 바로 몰입할 수 있는 스도쿠 앱. Flutter로 만들고 Google Play에 공개한 퍼즐.",
    status: "Google Play 출시",
    icon: Store,
    image: {
      src: "/images/app/koofy-sudoku.png",
      alt: "Koofy Sudoku mobile game preview"
    },
    storeStatus: {
      googlePlay: "",
      appStore: ""
    },
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.koofy.sudoku",
      appStore: ""
    }
  },
  {
    name: "지본",
    platform: "Google Play · App Store 출시 전",
    description: "가까운 사람 탐색, 채팅, 라이브, 병원 정보를 한곳에 담은 커뮤니티 앱.",
    status: "Google Play 출시",
    icon: Smartphone,
    image: {
      src: "/images/app/zivon.png",
      alt: "Zivon app service preview"
    },
    storeStatus: {
      googlePlay: "",
      appStore: "출시 전"
    },
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.zivon.app",
      appStore: ""
    }
  }
];

export const websites = [
  {
    name: "용스다이닝",
    description: "두부요리 전문 포차의 첫인상과 매장 분위기를 또렷하게 보여주는 홈페이지.",
    category: "Restaurant",
    image: {
      src: "/images/websites/yongs-dining.png",
      alt: "용스다이닝 website brand preview"
    },
    href: "https://www.yongs-dining.com/"
  },
  {
    name: "오렌짐",
    description: "운동 공간의 에너지와 개인 맞춤 관리의 이미지를 전하는 피트니스 웹사이트.",
    category: "Fitness",
    image: {
      src: "/images/websites/orengym.png",
      alt: "오렌짐 website brand preview"
    },
    href: "#contact"
  },
  {
    name: "지본",
    description: "앱의 핵심 가치와 다운로드 흐름을 자연스럽게 연결하는 브랜드 웹사이트.",
    category: "App Service",
    image: {
      src: "/images/app/zivon.png",
      alt: "Zivon service website preview"
    },
    href: "https://www.zivonapp.com/"
  },
  {
    name: "디케빈즈택스랩",
    description: "세무 서비스의 전문성과 신뢰감을 차분하게 전달하는 비즈니스 홈페이지.",
    category: "Business",
    image: {
      src: "/images/websites/thekevins-taxlab.png",
      alt: "디케빈즈택스랩 website brand preview"
    },
    href: "https://www.thekevinstaxlab.com/"
  },
  {
    name: "사내 인트라넷",
    description: "공지, 일정, 문서, 업무 현황을 한 화면에서 확인하는 내부 업무 시스템.",
    category: "Internal System",
    image: {
      src: "/images/websites/intranet.png",
      alt: "사내 인트라넷 dashboard preview"
    },
    href: "#contact"
  },
  {
    name: "Portfolio System",
    description: "개인 브랜딩과 프로젝트 아카이브를 함께 담는 현재 사이트.",
    category: "Personal Brand",
    image: null,
    href: "#home"
  }
];

export const documents = [
  {
    title: "이력서",
    label: "Resume",
    description: "개인정보 정리 후 공개용 PDF로 연결 예정",
    href: "",
    icon: FileText
  },
  {
    title: "자기소개서",
    label: "Cover Letter",
    description: "지원동기와 성장 스토리는 사이트 문장에 반영 완료",
    href: "",
    icon: FileText
  },
  {
    title: "경력기술서",
    label: "Career Description",
    description: "한국지텔프, 디케빈즈택스랩, 앱·웹 프로젝트 핵심 내용 반영 완료",
    href: "",
    icon: FileText
  }
];

export const contactLinks = [
  { label: "Email", href: siteConfig.email, icon: Mail },
  { label: "Google Play", href: "#apps", icon: Store },
  { label: "App Store", href: "#apps", icon: Smartphone },
  { label: "YouTube", href: siteConfig.youtube, icon: PlaySquare },
  { label: "Websites", href: "#websites", icon: Globe2 },
  { label: "Videos", href: "#youtube", icon: PlaySquare }
];
