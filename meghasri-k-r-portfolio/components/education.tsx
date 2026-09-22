import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'PSG College of Arts & Science',
    period: '2023 – 2026',
    detail: 'CGPA 9.1/10 · Class Rank 2',
  },
  {
    degree: '10th – 12th (Higher Secondary)',
    school: 'Little Angels Mat. Hr. Sec. School',
    period: '2020 – 2023',
    detail: '12th – 88.1%',
  },
]

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
      <SectionHeading eyebrow="Academics" title="Education" />

      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.degree} as="article" delay={i * 100} className="h-full">
            <div className="h-full rounded-2xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7c3aed]">
                {item.period}
              </p>
              <h3 className="mt-1.5 font-heading text-lg font-semibold text-[#1e293b]">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#4f46e5]">{item.school}</p>
              <p className="mt-3 inline-block rounded-lg bg-indigo-50 px-3 py-1 text-sm font-medium text-[#475569]">
                {item.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
