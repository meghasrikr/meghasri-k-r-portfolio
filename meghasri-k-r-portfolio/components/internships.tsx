import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const internships = [
  {
    role: 'AI Developer Intern',
    company: 'Inter Deccaan Solutions, Karur',
    period: 'May 2025 – June 2025',
    description:
      'Developed an AI-powered healthcare chatbot, gaining practical experience in conversational and predictive AI.',
  },
  {
    role: 'Cybersecurity Intern',
    company: 'Ediglobe Platform',
    period: 'Dec 2023 – Jan 2024',
    description:
      'Gained hands-on experience in cybersecurity, including basic cloud security protocols and network security concepts.',
  },
]

export function Internships() {
  return (
    <section
      id="internships"
      className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24"
    >
      <SectionHeading eyebrow="Experience" title="Internships" />

      <div className="relative ml-3 border-l-2 border-indigo-200 pl-8 sm:ml-4">
        {internships.map((item, i) => (
          <Reveal key={item.company} delay={i * 120} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#4f46e5] shadow-md shadow-indigo-500/40 sm:-left-[42px]" />
            <div className="rounded-2xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7c3aed]">
                {item.period}
              </p>
              <h3 className="mt-1.5 font-heading text-lg font-semibold text-[#1e293b]">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-[#4f46e5]">{item.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
