const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'HTML/CSS', 'Redux'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Ferramentas',
    skills: ['Git', 'Docker', 'Figma', 'VS Code', 'Linux', 'CI/CD'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl font-bold text-white mb-12">
          <span className="text-accent font-mono text-lg">02.</span>
          Skills
          <span className="h-px bg-neutral-800 flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-secondary/50 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-neutral-400 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
