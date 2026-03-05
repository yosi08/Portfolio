const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 mb-4 tracking-tight">
          권기범<span className="text-indigo-600"></span>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-6">
          프론트엔드 개발자
        </p>
        {/* ✏️ 한 줄 소개 수정 가능 */}
        <p className="text-slate-500 text-lg max-w-sm mx-auto mb-10 leading-relaxed">
          사용자 경험을 고민하며 꾸준히 성장하는 개발자입니다.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            프로젝트 보기
          </a>
          <a
            href="https://github.com/yosi08"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
