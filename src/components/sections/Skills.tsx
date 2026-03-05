import { skills } from '../../data/skills'

const categoryLabel: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend / Language',
}

const Skills = () => {
  const categories = Array.from(new Set(skills.map((s) => s.category)))

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          기술 <span className="text-indigo-600">스택</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
                {categoryLabel[category] ?? category}
              </h3>
              <div className="flex flex-wrap gap-5">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => {
                    const Icon = skill.icon
                    return (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 w-20 group"
                      >
                        <div
                          className="w-18 h-18 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-200 group-hover:border-slate-300 group-hover:shadow-md transition-all"
                        >
                          <Icon
                            size={40}
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="text-sm text-slate-500 font-medium text-center leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
