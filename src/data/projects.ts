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
      record : [
        '다루는데 미숙해서 ai활용과 구글 검색을 적극 활용하였다.',
        '자동으로 음악 넘어가는 구간에서 큰 어려움이 있었다.',
        'React의 기본적인 개념과 상태 관리에 대한 이해를 높이는 계기가 되었다.',
        '자연스럽게 넘어가는 애니메인션을 구현하기 위해서 다른 사람들의 깃허브를 찾아보았다.',
        '노래 신청을 하면 나의 이메일로 오도록 구현하는 과정에서 많은 어려움이 있어다',
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
      record : [
        'JavaScript만을 활용하여 만드는 과정에서 많은 오류가 발생하였다.',
        '포켓몬의 움직임과 배틀 시스템을 구현하는 과정에서 많은 시행착오가 있었지만, 이를 통해 JavaScript의 DOM 조작과 이벤트 핸들링에 대한 깊은 이해를 얻을 수 있었다.',
        '제작 과정 중 포기하고 싶었던 순간이 많았다..',
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
      record : [
        '이번 기회에 깃허브를 자주 사용하는 계기가 되는 프로젝트였다.',
        '팀원이 계획서를 세세하게 작성해서 소통을 최소화하는 협업으로 진행되었다.',
        '백엔드를 맡은 팀원이 일을 안 하는 상황이 생기기도 했었다.',
        '다음 협업 때에는 조금 더 소통을 늘리고 트러블이 생기는 않는 방향을 생각하면서 서로 의지하며 협업 할 수 있는 활동을 할 수 있도록 노력할 것이다.',
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
      record : [
        '학습 관리 웹 사이트를 만들기 위해 여러 공부 방법을 찾았다.',
        '직접 경험해 본 결과 포모도로 기법 시간 관리와 코넬 노트 필기법이 가장 효과적이었다.',
        'Next.js를 처음 활용하여 라우팅과 서버 사이드 렌더링을 경험할 수 있었다.',
        'Tailwind CSS를 활용하여 빠르게 스타일링을 적용할 수 있었다.',
      ],
    },
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yosi08/A_presonal_project/tree/main/study-sphere',
    liveUrl: 'https://study-sphere-ten-ruby.vercel.app/',
  },
]
