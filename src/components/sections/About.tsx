const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <div className="max-w-2xl mx-auto space-y-5">
          {/* 아래 자유롭게 수정 */}
          <p className="text-slate-600 text-lg leading-relaxed">
            안녕하세요! 저는 사용자 경험을 중심에 두고 개발하는 프론트엔드 개발자 권기범입니다.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            새로운 기술을 배우는 것을 즐기며, 문제를 해결하는 과정에서 창의적인 접근을 시도하는 것을 좋아합니다.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            React와 TypeScript, Next.js를 주로 사용하며, 점점 더 넓은 영역으로 역량을 확장해 나가고 있습니다.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            저는 팀원들과의 소통을 우선시 하며 협업해 나아가는 것을 중요하게 생각하는 개발자 입니다.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
