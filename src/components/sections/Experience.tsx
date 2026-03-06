import { experiences } from '../../data/experience'

const badges = {
  career: { label: '경력', className: 'bg-indigo-100 text-indigo-700' },
  activity: { label: '활동', className: 'bg-emerald-100 text-emerald-700' },
}

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          경력 &amp; <span className="text-indigo-600">활동</span>
        </h2>

        <div className="relative">
          {/* 타임라인 세로선 */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0
              const badge = badges[exp.type]

              return (
                <div
                  key={exp.id}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* 도트 */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-400 border-2 border-white ring-2 ring-indigo-200 mt-1.5 z-10 shrink-0" />

                  {/* 빈 공간 (반대편) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* 카드 */}
                  <div className="ml-10 md:ml-0 md:w-1/2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${badge.className}`}>
                        {badge.label}
                      </span>
                      <span className="text-xs text-slate-400">{exp.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-0.5">{exp.title}</h3>
                    <p className="text-sm text-indigo-600 font-medium mb-3">{exp.organization}</p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{exp.description}</p>
                    {exp.details && exp.details.length > 0 && (
                      <ul className="space-y-1.5">
                        {exp.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-slate-500">
                            <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
