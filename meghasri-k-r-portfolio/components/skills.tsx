import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const skillGroups = [
  { title: 'Programming', items: ['Java', 'Python'] },
  { title: 'Database', items: ['SQL', 'RDBMS'] },
  {
    title: 'Core Java',
    items: ['OOP', 'Arrays', 'Loops', 'File Handling', 'Exception Handling'],
  },
  {
    title: 'Data & Analytics',
    items: ['Data Analysis', 'Data Interpretation', 'Dashboard Creation'],
  },
  { title: 'Tools', items: ['Git', 'GitHub'] },
  { title: 'Libraries', items: ['Tkinter', 'Scikit-learn', 'Regex', 'Joblib'] },
  {
    title: 'Soft Skills',
    items: [
      'Problem-Solving',
      'Analytical Thinking',
      'Teamwork & Collaboration',
      'Communication',
      'Quick Learning & Adaptability',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <SectionHeading eyebrow="What I work with" title="Skills" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            as="article"
            delay={(i % 3) * 100}
            className="h-full"
          >
            <div className="h-full rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10">
              <h3 className="font-heading text-lg font-semibold text-[#1e293b]">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-lg border border-indigo-100 bg-indigo-50/70 px-3 py-1.5 text-sm font-medium text-[#4f46e5] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7c3aed]/40 hover:bg-white hover:text-[#7c3aed] hover:shadow-md hover:shadow-violet-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
