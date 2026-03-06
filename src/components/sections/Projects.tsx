import { useState } from 'react'
import { projects } from '../../data/projects'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
  </svg>
)

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const Projects = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          프로<span className="text-indigo-600">젝트</span>
        </h2>
        <div className="flex flex-col gap-6">
          {projects.map((project) => {
            const isOpen = openId === project.id
            return (
              <div
                key={project.id}
                className={`relative bg-white border transition-colors duration-300 ${
                  isOpen
                    ? 'rounded-t-xl rounded-b-none border-indigo-300 border-b-0 shadow-lg z-10'
                    : 'rounded-xl border-slate-200 hover:border-indigo-200 hover:shadow-md z-0'
                }`}
              >
                {/* 카드 헤더 - 클릭 영역 */}
                <button
                  className="w-full text-left p-6 flex items-start justify-between gap-3 group"
                  onClick={() => toggle(project.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xl font-bold mb-2 transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <span className={`mt-1 shrink-0 transition-colors ${isOpen ? 'text-indigo-500' : 'text-slate-400'}`}>
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>

                {/* 기술 스택 태그 */}
                <div className="px-6 pb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 확장 영역 - absolute로 아래 카드 위에 겹침 */}
                {isOpen && (
                  <div className="absolute -left-px -right-px top-full z-10 bg-white border border-indigo-300 border-t-0 rounded-b-xl shadow-lg px-6 pb-6 pt-4">
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {project.details.longDescription}
                    </p>
                    <ul className="space-y-1.5 mb-5">
                      {project.details.record.map((record) => (
                        <li key={record} className="flex items-start gap-2 text-sm text-slate-500">
                          <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
                          {record}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GitHubIcon />
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-indigo-300 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-50 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLinkIcon />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
