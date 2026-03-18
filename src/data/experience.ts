export interface Experience {
  id: number
  type: 'career' | 'activity'
  title: string
  organization: string
  period: string
  description: string
  details?: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    type: 'career',
    title: '프론트엔드 개발자',
    organization: '부산소프트웨어마이스터고',
    period: '2025.03 – 현재',
    description: '여러 프로젝트에서 프론트엔드를 맏고 있습니다.',
    details: [
      'React / TypeScript 기반 웹 애플리케이션 개발',
      '컴포넌트 설계 및 공통 UI 라이브러리 구축',
      '팀원들과 협업하여 프로젝트 완성',
      ],
  },
  {
    id: 2,
    type: 'activity',
    title: 'Devcoop',
    organization: 'Devcoop',
    period: '2026.01 – 현재',
    description: '교내 개발 동아리 활동을 통해 팀 프로젝트 경험을 쌓았습니다.',
    details: [
      'Occount 디자인 시스템 설계',
      '메인 페이지 제작',
      'Next.js를 배울 수 있는 기회를 얻음',
    ],
  },
  {
    id: 3,
    type: 'activity',
    title: '제 27회 전국학생통계활용대회',
    organization: '국가데이터처',
    period: '2025.05',
    description: '학생들의 통계 데이터를 활용한 포스터 만드는 대회에 참여하였습니다.',
    details: [
      '구글폼을 통한 데이터 수집 및 분석',
      '포스터 디자인',
      '데이터 시각화 도구 활용',
    ],
  },
  {
    id: 4,
    type: 'activity',
    title: 'NYPC 참가',
    organization: 'NEXON',
    period: '2025.08',
    description: '넥슨 게임 IP를 활용한 창의적이고 재미있는 프로그래밍 문제를 해결하는 대회였습니다.',
    details: [
      '넥슨 게임 IP를 활용한 프로그래밍 문제 해결',
      '창의적이고 재미있는 솔루션 개발',
      '알고리즘 문제 풀이 능력 향상',
    ],
  },
  {
    id: 5,
    type: 'activity',
    title: 'AI_TOP_100 참가',
    organization: '카카오임팩트',
    period: '2025.10',
    description: 'AI를 활용하여 문제를 해결하고 어떤 프롬프트를 활용하여 어떻게 해결하였는지에 대한 대회였습니다.',
    details: [
      'AI를 활용한 문제 해결',
      '프롬프트 엔지니어링',
    ],
  },
]

// 얼덜얼러재러지러ㅓㄹ
// ㅇㅇㅇㅇㅇㅇㅇ
// 러러러러ㅑㅓ랴
// 아랄ㄹ라아아아라라라랄ㄹ랄ㄹㄹㄹ랴더럳러ㅐ랻저랮댜ㅓㄹ재ㅑ러