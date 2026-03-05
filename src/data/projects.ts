// 프로젝트 정보를 여기서 수정
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
    description: '부산 소프트웨어 마이스터고등학교 입학 후 처음으로 자체 개발한 웹 프로젝트입니다.',
    details: {
      longDescription:
        '입학 후 처음으로 진행한 개인 웹 프로젝트로, React를 처음 활용하여 만든 프로젝트 입니다.',
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
    description: '웹에 등록되어 있는 포켓몬들을 가지고 야생 포켓몬들과 배틀을 할 수 있는 웹 애플리케이션입니다.',
    details: {
      longDescription:
        'WASD로 캐릭터를 움직여 덤불 속 야생 포켓몬과 배틀이 가능한 웹 애플리케이션입니다.',
      features: [
        '스타팅 포켓몬 선택',
        '타입 및 스킬 정보 제공',
        'WASD로 캐릭터 이동 및 배틀 시스템 구현',
      ],
    },
    techStack: ['HTML', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/yosi08/pokemon',
  },
  {
    id: 3,
    title: 'Lilim',
    description: '사용자 친화적인 인터페이스로 구성된 AI 날씨 서비스 웹 애플리케이션입니다.',
    details: {
      longDescription:
        'AI를 활용한 날씨 예측 서비스를 제공하는 웹 애플리케이션입니다.',
      features: [
        '바닐라 JavaScript로 구현',
        '반응형 레이아웃',
        'AI 기반 날씨 예측 기능',
        '사용자 위치 기반 날씨 정보 제공',
      ],
    },
    techStack: ['JavaScript', 'CSS', 'React'],
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
        'Pomodoro기법을 활용한 타이머 기능',
        '코넬 노트 템플릿 제공',
      ],
    },
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yosi08/A_presonal_project/tree/main/study-sphere',
    liveUrl: 'https://study-sphere-ten-ruby.vercel.app/',
  },
]
