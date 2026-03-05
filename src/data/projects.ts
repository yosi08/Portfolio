// ✏️ 프로젝트 정보를 여기서 수정하세요
// title: 프로젝트 이름
// description: 카드에 표시되는 짧은 설명
// details.longDescription: 카드 클릭 시 펼쳐지는 상세 설명
// details.features: 주요 기능 목록
// techStack: 사용 기술 목록
// githubUrl: GitHub 링크 (없으면 제거)
// liveUrl: 배포 링크 (없으면 제거)

export const projects = [
  {
    id: 1,
    title: 'Music Project',
    description: '부산 소프트웨어 마이스터고등학교 입학 후 처음으로 개발한 웹 프로젝트입니다.',
    details: {
      longDescription:
        '입학 후 처음으로 진행한 개인 웹 프로젝트로, React와 외부 음악 API를 활용해 음악 정보를 탐색할 수 있는 서비스입니다.',
      features: [
        '음악 검색 및 정보 조회',
        'React 기반 SPA 구현',
        'Vercel을 통한 배포',
      ],
    },
    techStack: ['React', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/yosi08/music-project',
    liveUrl: 'https://muzic-lake.vercel.app',
  },
  {
    id: 2,
    title: 'Pokémon',
    description: '포켓몬 도감을 검색하고 상세 정보를 확인할 수 있는 웹 애플리케이션입니다.',
    details: {
      longDescription:
        'PokeAPI를 활용하여 포켓몬 정보를 검색하고 도감 형태로 확인할 수 있는 웹 애플리케이션입니다.',
      features: [
        '포켓몬 이름/번호 검색',
        '상세 스탯 및 타입 정보 표시',
        'React 컴포넌트 기반 UI 구성',
      ],
    },
    techStack: ['React', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/yosi08/pokemon',
  },
  {
    id: 3,
    title: 'Lilim',
    description: '사용자 친화적인 인터페이스로 구성된 웹 애플리케이션입니다.',
    details: {
      longDescription:
        '순수 JavaScript와 CSS를 활용하여 구현한 웹 애플리케이션으로, Vercel에 배포되어 있습니다.',
      features: [
        '바닐라 JavaScript로 구현',
        '반응형 레이아웃',
        'Vercel을 통한 배포',
      ],
    },
    techStack: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/yosi08/Lilim',
    liveUrl: 'https://lilim-snowy.vercel.app',
  },
  {
    id: 4,
    title: 'Study Sphere',
    description: '학습 목표를 관리하고 공부 기록을 남길 수 있는 스터디 플랫폼입니다.',
    details: {
      longDescription:
        'React와 Next.js, TypeScript를 활용한 스터디 관리 플랫폼입니다. 학습 목표 설정과 기록을 통해 공부 습관을 형성할 수 있습니다.',
      features: [
        '학습 목표 생성 및 관리',
        'TypeScript로 타입 안전성 확보',
        'Next.js 기반 라우팅',
        'Tailwind CSS 스타일링',
      ],
    },
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yosi08/A_presonal_project/tree/main/study-sphere',
  },
]
