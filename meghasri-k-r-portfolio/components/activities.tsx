import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const activities = [
  {
    title: 'Department Chairperson',
    detail:
      'Office Bearer as Department Chairperson, PSG College of Arts & Science (2025–2026).',
  },
  {
    title: "Organised Gateway'26",
    detail: "Organised an event, Gateway'26, at PSG College of Arts & Science.",
  },
]

export function Activities() {
  return (
    <section id="activities" className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
      <SectionHeading eyebrow="Beyond academics" title="Co-Curricular Activities" />

      <div className="grid gap-6 sm:grid-cols-2">
        {activities.map((item, i) => (
          <Reveal key={item.title} as="article" delay={i * 100} className="h-full">
            <div className="h-full rounded-2xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10">
              <h3 className="font-heading text-lg font-semibold text-[#1e293b]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                {item.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
