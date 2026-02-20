// Resume data for 성찬우 | 6년차 프론트엔드 개발자

import { Task } from "@/components/ui/taskModal";

export const profile = {
  name: "성찬우",
  nameEn: "Sung ChanWoo",
  title: "Frontend Developer",
  subtitle: "6년차 프론트엔드 개발자",
  birth: "1996. 01. 24",
  summary:
    "TypeScript, React, Next.js 기반의 모던 웹 개발 전문가로, 사용자 경험(UX) 개선과 성능 최적화를 통해 비즈니스 성장에 직접 기여합니다. 핀테크, 인슈어테크, 블록체인 등 다양한 도메인에서의 실무 경험을 바탕으로 복잡한 요구사항을 명료한 UI로 구현합니다.",
  links: {
    lifecatch: "https://lifecatch.co.kr",
    konkrit: "https://konkrit.io",
    remoteComponent:
      "https://juicy-stick-60e.notion.site/Remote-1b0e21e1902641158348a96f32c5341b?pvs=4",
    windee: "https://windee.io",
    pixelia: "https://pixelia.io",
    windeeArticle:
      "https://www.digitaltoday.co.kr/news/articleView.html?idxno=452275",
    pixeliaGallery:
      "http://oliviaparkgallery.com/nft%EA%B3%B5%EB%AA%A8%EC%A0%84/",
  },
};

export const coreCompetencies = [
  "TypeScript와 React, Next.JS 15 App Router를 활용한 모던 JavaScript 개발",
  "Turborepo 기반 Monorepo 환경 구축 및 유지보수",
  "Storybook을 활용한 CDD(Component-Driven Development) 및 디자이너 협업",
  "Micro Frontend 아키텍처 설계 및 운용",
  "AWS, GitHub Actions, GitLab Runner를 통한 CI/CD 파이프라인 구축",
  "2년간 Backend 겸직 경험으로 원활한 풀스택 협업",
];

export type SkillLevel = 1 | 2 | 3 | 4;

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillLevels: Record<SkillLevel, { label: string; desc: string }> =
  {
    1: { label: "Basic", desc: "기초 지식 보유, 업무 수행 시 도움 필요" },
    2: { label: "Demonstrating", desc: "기본 업무 수행 가능, 추가 학습 필요" },
    3: { label: "Proficient", desc: "능숙하게 업무 수행 가능" },
    4: { label: "Expert", desc: "타인을 리드할 수 있는 전문가 수준" },
  };

export const skills: SkillCategory[] = [
  {
    category: "Language",
    skills: [
      { name: "TypeScript", level: 3 },
      { name: "JavaScript ES6+", level: 3 },
      { name: "HTML5 / CSS3", level: 3 },
      { name: "PHP", level: 2 },
      { name: "Java", level: 2 },
    ],
  },
  {
    category: "Framework & Library",
    skills: [
      { name: "React", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "React-Query", level: 3 },
      { name: "MobX", level: 3 },
      { name: "TailwindCSS", level: 3 },
      { name: "React-Hook-Form", level: 3 },
      { name: "styled-components", level: 3 },
      { name: "Redux / RTK", level: 2 },
      { name: "JQuery", level: 3 },
    ],
  },
  {
    category: "Build & Infra",
    skills: [
      { name: "Webpack / Vite", level: 3 },
      { name: "Turborepo", level: 2 },
      { name: "GitHub Actions", level: 2 },
      { name: "GitLab Runner", level: 2 },
      { name: "Docker", level: 1 },
      { name: "AWS", level: 1 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 2 },
      { name: "PostgreSQL", level: 2 },
      { name: "MongoDB", level: 2 },
    ],
  },
  {
    category: "Collaboration",
    skills: [
      { name: "Figma / Zeplin", level: 2 },
      { name: "Storybook", level: 3 },
      { name: "Git", level: 2 },
      { name: "Slack / Jira", level: 2 },
    ],
  },
];

export interface TroubleShooting {
  title: string;
  problem: string;
  cause?: string;
  solution: string;
  result?: string;
  link?: { text: string; url: string };
  tags?: string[];
}

export interface Project {
  name: string;
  description: string;
  role: string;
  stacks?: string[];
  tasks: Task[];
  troubleshootings: TroubleShooting[];
  links?: { text: string; url: string }[];
  note?: string;
}

export interface Career {
  company: string;
  period: string;
  periodDetail?: string;
  isCurrentJob?: boolean;
  companyDesc: string;
  projects: Project[];
  companyUrl?: string;
  note?: string;
}

export const careers: Career[] = [
  {
    company: "트래블월렛",
    period: "2024.09 ~ 재직중",
    isCurrentJob: true,
    companyDesc:
      "다양한 통화의 충전 및 결제가 가능한 선불형 외화 충전 카드 기반의 핀테크 기업",
    projects: [
      {
        name: "Next.js 기반 백오피스 / 웹뷰 / 랜딩 페이지 개발 및 유지보수",
        description:
          "트래블월렛 서비스 전반의 프론트엔드 개발을 담당하며, 핀테크 서비스 특성에 맞는 안정적이고 확장 가능한 UI 시스템을 구축하고 있습니다.",
        role: "Frontend Developer",
        stacks: [
          "Next.js 15",
          "TypeScript",
          "React",
          "TailwindCSS",
          "React-Query",
        ],
        tasks: [
          {
            label: "Server Driven UI(SDUI) 기반 CMS 구축",
            links: [
              {
                text: "컨텐츠 주도 서비스 구축하기",
                url: "https://juicy-stick-60e.notion.site/ebd//2febc976557e8003a3cdc282fd7134c3",
              },
            ],
          },
          {
            label: "Next.js용 정적 타입 세이프 라우터 래핑 라이브러리 개발",
            links: [
              {
                text: "Directory-Based TypeSafe Router 제작",
                url: "https://juicy-stick-60e.notion.site/ebd//Next-JS-Directory-Based-TypeSafe-Router-2b8bc976557e80ddbf30fa507780067c",
              },
            ],
          },
          {
            label: "외환 헷징 및 환 리스크 관리 서비스 개발",
            links: [
              {
                text: "외환 Hedge 환리스크 관리 시스템 구축",
                url: "https://juicy-stick-60e.notion.site/ebd//Hedge-214bc976557e804dbfe0d7e061be030b?pvs=74",
              },
            ],
          },
          {
            label: "Micro Frontend(MFE) 서비스 도입 및 배포, 운용",
            links: [
              {
                text: "Monorepo Backoffice 구조",
                url: "https://juicy-stick-60e.notion.site/ebd//Monorepo-Backoffice-201bc976557e804195ccc8c8d5f696d8?pvs=74",
              },
            ],
          },
          {
            label: "트래블월렛 홈페이지 성능 개선",
            links: [
              {
                text: "travel-wallet.com",
                url: "https://www.travel-wallet.com/",
              },
            ],
          },
          {
            label: "서비스 이용약관 ISR 기능 개선",
          },
          {
            label: "프로모션 랜딩 페이지 CMS Scheme 개발",
            links: [
              {
                text: "프로모션 페이지 CMS Scheme 개발",
                url: "https://juicy-stick-60e.notion.site/ebd//CMS-Scheme-1f9bc976557e80ca89aaded14c49b5e7?pvs=74",
              },
            ],
          },
          {
            label: "이의제기 신청 전산화",
            links: [
              {
                text: "pay.travel-wallet.com",
                url: "https://pay.travel-wallet.com/",
              },
            ],
          },
          {
            label: "백오피스 유지보수",
          },
        ],
        troubleshootings: [
          {
            title: "홈페이지 성능 개선 (Lighthouse 점수 대폭 향상)",
            problem:
              "이미지 리소스 최적화 미흡과 불필요한 라이브러리 번들링으로 인해 초기 로딩 속도가 저하되고, Core Web Vitals 지표가 낮아 SEO 및 사용자 경험에 부정적인 영향을 미치고 있었습니다.",
            cause:
              "next/image 미사용으로 인한 이미지 용량 과다, 동적 import 미적용으로 인한 초기 번들 사이즈 과다, 렌더링 블로킹 스크립트 존재",
            solution:
              "1) next/image를 전면 적용하여 WebP 변환 및 lazy loading을 자동화했습니다.\n2) bundle-analyzer로 번들 구성을 분석하여 과도하게 큰 라이브러리를 식별하고, 동적 import()를 통해 코드 스플리팅을 적용했습니다.\n3) 초기 렌더링에 불필요한 스크립트를 defer/async 처리하여 TTI(Time to Interactive)를 단축했습니다.",
            result:
              "개선 전 p25.0: 590ms / p99: 12.4s → 개선 후 p25.0: 14.1ms / p99: 111ms",
            tags: [
              "Next.js",
              "Performance",
              "Core Web Vitals",
              "Bundle Optimization",
            ],
          },
          {
            title:
              "서비스 이용약관 페이지 ISR(Incremental Static Regeneration) 적용",
            problem:
              "약관 내용이 변경될 때마다 전체 빌드를 다시 실행해야 했고,\n SSR 방식으로는 매 요청마다 서버 렌더링이 발생하여 응답 속도가 느렸습니다. 또한 안드로이드 앱의 특정 웹뷰에 javascript disabled 환경이 적용되어 빈 화면이 출력되는 문제가 있었습니다.",
            cause:
              "정적 생성(SSG)과 서버 사이드 렌더링(SSR)의 장단점을 모두 가지는 ISR 전략이 적용되지 않은 상태. javascript disabled 웹뷰 환경 미고려.",
            solution:
              "ISR을 적용하여 javascript가 일체 없는 순수 HTML로만 서빙되도록 변경했습니다.\n버전 선택자도 순수 HTML과 CSS만으로 작동하도록 개선하여 javascript disabled 환경에서도 정상 작동하도록 구현했습니다.",
            result:
              "빌드 시간 단축, 페이지 응답 속도 향상, 운영팀의 약관 업데이트 편의성 증대, javascript disabled 웹뷰 환경 대응",
            tags: ["Next.js", "ISR", "SSG", "Performance"],
          },
        ],
        links: [
          {
            text: "트래블월렛",
            url: "https://travel-wallet.com",
          },
        ],
      },
    ],
  },
  {
    company: "그린리본",
    period: "2023.04 ~ 2025.07",
    companyDesc:
      "인슈어테크 기반으로 고객의 놓친 보험금을 조회하고 대행 신청을 진행하는 IT 스타트업",
    projects: [
      {
        name: "React WebView 기반 보험금 조회 및 신청 웹앱 개발",
        description:
          "사용자가 놓친 보험금을 쉽게 조회하고 신청할 수 있는 채팅형 UI/UX 기반의 웹앱 서비스를 개발했습니다. B2B2C 구조로 다수의 금융기관에 납품되는 서비스입니다.",
        role: "Frontend Developer",
        stacks: [
          "React 18",
          "Next.js 14 (App Router)",
          "TypeScript",
          "Turborepo",
          "MobX",
          "React-Query",
          "Styled-components",
          "TailwindCSS",
          "React-Hook-Form",
          "Webpack",
          "Vite",
          "SWC",
          "Yarn Berry",
        ],
        tasks: [
          {
            label:
              "채팅형 UI/UX 기반 보험금 신청 플랫폼 개발 (전환율 30% 향상)",
          },
          {
            label:
              "마이데이터 사업팀, 은행, 보험사 대상 B2B2C 통합 보험금 신청 플랫폼 구축",
          },
          {
            label: "Webpack Module Federation을 통한 Micro Frontend(MFE) 도입",
            links: [
              {
                text: "MFE 도입 상세",
                url: "https://juicy-stick-60e.notion.site/ebd//d94fa79ff26b4fb18636c7a7811c0eb5?pvs=4",
              },
            ],
          },
          {
            label: "사용자 메트릭 수집 인프라 구축",
          },
          {
            label: "Next.js 기반 서류 발급 대행인 관리 플랫폼 개발",
            links: [
              {
                text: "서류 발급 대행인 플랫폼 상세",
                url: "https://juicy-stick-60e.notion.site/ebd//4da68b4d61374addb5ddb31fb09f53b4",
              },
            ],
          },
          {
            label: "Turborepo 기반 Monorepo 도입",
            links: [
              {
                text: "MonoRepo 도입 상세",
                url: "https://juicy-stick-60e.notion.site/ebd//Mono-Repo-377978da26e54b06bf17ada570c46e3f?pvs=4",
              },
            ],
          },
          {
            label: "디자인 시스템 및 Storybook 도입",
            links: [
              {
                text: "디자인 시스템 구축 상세",
                url: "https://juicy-stick-60e.notion.site/ebd//4039772bebe24ec1978ca33f2fab8f70",
              },
              {
                text: "멀티 테마 디자인 시스템 개발 상세",
                url: "https://juicy-stick-60e.notion.site/ebd//53e2bfb140974ba1b0ada264490c5863",
              },
              {
                text: "Storybook 보기",
                url: "https://storybook.lifecatch.co.kr/",
              },
            ],
          },
          {
            label: "포인트몰 마켓 서비스 구축",
            links: [
              {
                text: "point.lifecatch.co.kr",
                url: "https://point.lifecatch.co.kr/point",
              },
            ],
          },
          {
            label: "성능 개선 및 UI/UX 개선",
            links: [
              {
                text: "Lazy Import 웹 렌더링 최적화",
                url: "https://juicy-stick-60e.notion.site/ebd//Lazy-Import-a01677f68c2148c99df0007b4839d447",
              },
            ],
          },
        ],
        troubleshootings: [
          {
            title: "모바일 웹뷰 가상 키보드 노출 시 하단 버튼 가림 문제",
            problem:
              "채팅형 UI에서 input 포커스 시 가상 키보드가 화면 하단의 주요 버튼을 가리는 문제가 발생했습니다. 특히 iOS Safari와 Android Chrome에서 주소창 높이 변화 방식이 달라, 단순한 CSS 처리만으로는 해결이 불가능했습니다.",
            cause:
              "iOS와 Android의 가상 키보드 노출 방식 차이: iOS는 viewport 크기를 줄이지 않고 콘텐츠를 밀어 올리는 반면, Android는 viewport 자체를 리사이즈합니다. 또한 앱 내 웹뷰와 모바일 브라우저의 동작 방식도 상이했습니다.",
            solution:
              "VisualViewport API를 활용하여 가상 키보드 노출 여부와 높이를 실시간으로 감지하고, 키보드가 활성화될 때 버튼의 bottom 값을 동적으로 조정하여 항상 키보드 위에 위치하도록 구현했습니다. 앱 내 웹뷰와 모바일 브라우저를 구분하여 각각 다른 처리 로직을 적용했습니다.",
            result:
              "iOS/Android 환경 모두에서 키보드 노출 시에도 하단 버튼이 정상적으로 노출되어 사용자 이탈률 감소",
            tags: ["VisualViewport API", "Mobile WebView", "iOS/Android", "UX"],
          },
          {
            title: "채팅 메시지 추가 시 전체 목록 재렌더링 성능 이슈",
            problem:
              "채팅 메시지 유형별로 다른 컴포넌트를 Record로 정의하고 lazy import를 적용했으나, 새 메시지가 추가될 때마다 이미 렌더링된 모든 채팅 메시지가 불필요하게 재렌더링되어 성능 저하와 화면 깜빡임이 발생했습니다.",
            cause:
              "lazy import로 가져온 컴포넌트가 Record에 추가될 때마다 Record 객체의 참조가 변경되어, 해당 Record를 참조하는 모든 컴포넌트가 재렌더링되는 문제였습니다.",
            solution:
              "React.memo를 사용하여 각 채팅 메시지 컴포넌트를 메모이제이션하고, 컴포넌트의 props가 실제로 변경된 경우에만 재렌더링되도록 처리했습니다. 또한 Record 객체를 useRef로 관리하여 렌더링 사이클 외부에서 참조를 유지하도록 리팩토링했습니다.",
            result:
              "채팅 메시지 추가 시 기존 메시지 재렌더링 제거, 부드러운 채팅 UX 제공",
            tags: ["React.memo", "Lazy Import", "Re-rendering", "Performance"],
          },
          {
            title: "B2B2C 다중 납품 환경에서의 커스텀 라우팅 제어",
            problem:
              "동일한 서비스를 여러 금융기관에 납품하는 B2B2C 구조에서, 각 납품처마다 모듈 완료 후 이동할 화면(홈, 신청 페이지, 앱 종료 후의 액션 등)이 달랐습니다. 매번 납품처 요청에 맞게 코드를 수정하면 유지보수 비용이 급격히 증가하는 문제가 있었습니다.",
            cause:
              "서비스 내 라우팅 로직이 납품처별 요구사항에 하드코딩되어 있어, 새로운 납품처 추가 시마다 코드 수정이 필요했습니다.",
            solution:
              "Remote Component 제어 방식을 도입하여, 납품처별 라우팅 설정을 외부에서 주입받아 처리하는 구조로 리팩토링했습니다. 각 납품처는 설정값만 전달하면 되므로, 코드 수정 없이 다양한 라우팅 요구사항을 충족할 수 있게 되었습니다.",
            result:
              "납품처별 커스텀 요청 대응 시간 단축, 코드 재사용성 및 유지보수성 향상",
            link: {
              text: "Remote Component 제어 방식 상세 설명",
              url: "https://juicy-stick-60e.notion.site/Remote-1b0e21e1902641158348a96f32c5341b?pvs=4",
            },
            tags: [
              "Architecture",
              "B2B2C",
              "Remote Component",
              "Maintainability",
            ],
          },
        ],
        links: [{ text: "lifecatch.co.kr", url: "https://lifecatch.co.kr" }],
      },
    ],
  },
  {
    company: "멋쟁이사자처럼",
    period: "2022.06 ~ 2023.03",
    companyDesc: "블록체인 관련 NFT 개발 및 판매를 하는 중소기업",
    projects: [
      {
        name: "NFT 마켓플레이스 'KONKIRT' A to Z 개발 및 유지보수",
        description:
          "React 기반의 NFT 마켓플레이스를 처음부터 기획하고 개발했습니다. Ethers.js를 활용한 블록체인 연동과 MetaMask 지갑 연결 등 Web3 기능을 구현했습니다.",
        role: "Frontend Developer",
        stacks: [
          "React 18",
          "TypeScript",
          "JavaScript ES6",
          "Redux Toolkit",
          "Redux-Thunk",
          "Redux-Persist",
          "TailwindCSS",
          "React-Hook-Form",
          "Storybook",
          "Ethers.js",
        ],
        tasks: [
          {
            label:
              "전반적인 마크업 (Header, Footer, Button, Page, NFT Image Box)",
          },
          {
            label: "Ethers.js를 이용한 MetaMask 지갑 연결 개발",
          },
          {
            label: "Ethers.js를 이용한 NFT 전송(transfer) 기능 개발",
          },
          {
            label: "NFT 리스트 페이지 제작 및 공용 검색 필터링 로직 개발",
          },
          {
            label: "랜딩 페이지 마크업 및 유지보수",
          },
          {
            label: "기존 랜딩 페이지 Strapi 기반 Headless CMS 전환 개발",
          },
        ],
        troubleshootings: [
          {
            title: "개발자 간 중복 컴포넌트 작성 문제 → CDD + Storybook 도입",
            problem:
              "MVP 개발 단계에서 여러 프론트엔드 개발자가 유사한 디자인의 컴포넌트를 각자 따로 제작하는 문제가 발생했습니다. 동일한 버튼, 카드 컴포넌트가 개발자마다 다른 방식으로 구현되어 코드 중복과 디자인 불일치가 심화되었습니다.",
            cause:
              "컴포넌트 개발 현황을 공유하는 체계가 없어, 어떤 컴포넌트가 이미 만들어졌는지 파악하기 어려웠습니다. 개발자마다 필요한 컴포넌트를 독립적으로 제작하는 관행이 형성되었습니다.",
            solution:
              "CDD(Component-Driven Development) 방법론 도입을 주도하고, Storybook을 팀에 제안하여 채택시켰습니다. 모든 공용 컴포넌트를 Storybook에 등록하여 시각적으로 확인하고, 재사용 여부를 쉽게 판단할 수 있는 환경을 구축했습니다.",
            result:
              "중복 컴포넌트 작성 방지, 디자이너와의 협업 효율 증대, 전체 개발 속도 및 코드 품질 향상",
            tags: [
              "Storybook",
              "CDD",
              "Component Design",
              "Team Collaboration",
            ],
          },
          {
            title: "NFT 리스트 대량 데이터 렌더링 성능 최적화",
            problem:
              "NFT 마켓플레이스 특성상 수백~수천 개의 NFT 이미지와 메타데이터를 한 페이지에 표시해야 했는데, 초기 로딩 시 모든 데이터를 한 번에 렌더링하여 심각한 성능 저하가 발생했습니다.",
            cause:
              "페이지네이션이나 가상화(virtualization) 없이 전체 NFT 목록을 DOM에 한 번에 마운트하는 구조였습니다.",
            solution:
              "Intersection Observer API를 활용한 무한 스크롤(Infinite Scroll)을 구현하고, NFT 이미지에 lazy loading을 적용했습니다. 또한 검색 필터링 시 불필요한 API 호출을 방지하기 위해 debounce를 적용했습니다.",
            result:
              "초기 로딩 시간 단축, 스크롤 성능 개선, 사용자 체감 속도 향상",
            tags: [
              "Infinite Scroll",
              "Intersection Observer",
              "Lazy Loading",
              "Performance",
            ],
          },
        ],
        links: [
          { text: "KONKIRT (konkrit.io)", url: "https://konkrit.io" },
          {
            text: "관련 기사",
            url: "https://www.newswire.co.kr/newsRead.php?no=983063",
          },
        ],
      },
    ],
  },
  {
    company: "아티프렌즈",
    period: "2021.06 ~ 2022.05",
    companyDesc:
      "이더리움(Ethereum) 기반의 자사 블록체인을 중심으로 연구·개발하는 회사",
    // note: "현재 기업의 재정 및 경영 악화로 인해 권고 사직되었습니다.",
    projects: [
      {
        name: "NFT 마켓플레이스 'Windee' 및 'PIXELIA' A to Z 개발 및 배포",
        description:
          "이더리움 기반의 NFT 마켓플레이스 두 개를 처음부터 설계하고 개발했습니다. Windee는 모던 JavaScript로, PIXELIA는 React로 제작된 NFT 아트워크 마켓플레이스입니다.",
        role: "Frontend Developer",
        stacks: [
          "React 18",
          "JavaScript ES6",
          "Redux Toolkit",
          "Redux-Thunk",
          "SASS",
          "React-Hook-Form",
        ],
        tasks: [
          {
            label: "전반적인 마크업 개발",
          },
          {
            label: "NFT 리스트 호출 및 검색 로직 구현",
          },
          {
            label: "NFT 민팅을 위한 메타데이터 서버 전송 기능 구현",
          },
        ],
        troubleshootings: [
          {
            title: "NFT 민팅 트랜잭션 처리 중 사용자 피드백 부재 문제",
            problem:
              "블록체인 트랜잭션 특성상 NFT 민팅 요청 후 결과를 받기까지 수십 초가 소요되었는데, 이 과정에서 사용자에게 아무런 피드백이 없어 중복 요청이 발생하거나 사용자가 페이지를 이탈하는 문제가 있었습니다.",
            cause:
              "비동기 트랜잭션 처리에 대한 사용자 피드백 UI가 구현되지 않은 상태였습니다.",
            solution:
              "민팅 요청 시 로딩 상태를 전역 상태(Redux)로 관리하고, 트랜잭션 진행 단계(요청 중 → 블록 확인 중 → 완료)를 단계별 UI로 표시했습니다. 또한 중복 요청을 방지하기 위해 트랜잭션 진행 중 버튼을 비활성화했습니다.",
            result:
              "중복 민팅 요청 방지, 사용자 이탈률 감소, 트랜잭션 완료율 향상",
            tags: ["Blockchain", "UX", "Redux", "Async State Management"],
          },
        ],
        links: [
          {
            text: "Windee 배포 관련 기사",
            url: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=452275",
          },
          {
            text: "PIXELIA 갤러리 공모글",
            url: "http://oliviaparkgallery.com/nft%EA%B3%B5%EB%AA%A8%EC%A0%84/",
          },
        ],
      },
    ],
  },
  {
    company: "아크루즈",
    period: "2020.04 ~ 2021.05",
    companyDesc: "외주 사업 및 솔루션 연구 개발 회사",
    // note: "경영진과 개발팀 간의 불화로 인해 개발팀이 해체되어 퇴사하게 되었습니다.",
    projects: [
      {
        name: "에스원 임직원 차세대 출입시스템 개발",
        description:
          "에스원 임직원 출입 관리 시스템의 백오피스, 모바일 앱, API 서버를 개발했습니다. 레거시 시스템과의 호환성을 유지하면서 차세대 시스템으로의 전환을 지원했습니다.",
        role: "Frontend / Backend Developer",
        stacks: [
          "JavaScript ES5",
          "JSP",
          "JQuery",
          "Spring Boot",
          "Struts2",
          "Android Native",
          "MySQL",
          "CSS3",
        ],
        tasks: [
          {
            label:
              "ES5, JQuery를 통한 에스원 임직원 차세대 출입시스템 백오피스 개발",
          },
          {
            label:
              "ES5, JSP, JQuery를 통한 에스원 임직원 출입시스템 유지보수 개발",
          },
          {
            label:
              "에스원 차세대 출입시스템 연계 임직원 전용 모바일 안드로이드 네이티브 앱 유지보수 및 웹뷰 추가 개발",
          },
          {
            label: "에스원 차세대 출입시스템 Spring Boot RESTful API 서버 개발",
          },
        ],
        troubleshootings: [
          {
            title: "15년 된 레거시 시스템 — ES5 미지원 브라우저 호환성 문제",
            problem:
              "시스템이 15년 가까이 운영된 레거시 환경으로, 해외 사업장의 배포 환경에는 Windows 98 수준의 OS와 ES5조차 지원하지 않는 구형 브라우저가 다수 존재했습니다. 상대적으로 최신 브라우저에서 정상 작동하는 기능이 낙후된 브라우저에서는 에러를 발생시키는 경우가 빈번했습니다.",
            cause:
              "Array.includes(), Object.assign() 등 ES6+ 메서드를 사용했으나, 구형 브라우저에서는 해당 메서드가 존재하지 않아 런타임 에러가 발생했습니다.",
            solution:
              "JavaScript의 prototype을 활용하여 Array.includes(), Array.from(), Object.assign() 등 ES6+ 메서드를 직접 Polyfill로 구현했습니다. 이를 통해 구형 브라우저에서도 동일한 코드베이스로 기능이 동작하도록 했습니다.",
            result:
              "모든 사업장에 동일한 코드를 배포 가능, 브라우저별 별도 대응 코드 제거, 유지보수 비용 절감",
            tags: [
              "Legacy Browser",
              "Polyfill",
              "Prototype",
              "Cross-browser Compatibility",
            ],
          },
        ],
      },
    ],
  },
];

export const education = {
  school: "대학교 (학과 정보)",
  period: "20XX ~ 20XX",
};
