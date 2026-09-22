import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const highlights = [
  { value: '9.1', label: 'CGPA / 10' },
  { value: 'Rank 2', label: 'Class Rank' },
  { value: '3+', label: 'Projects Built' },
  { value: '2', label: 'Internships' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <SectionHeading eyebrow="Get to know me" title="About" />

      <div className="grid gap-8 md:grid-cols-5 md:items-center">
        <Reveal className="md:col-span-3">
          <p className="text-lg leading-relaxed text-[#475569]">
            BCA graduate with a strong foundation in Core Java, Python, SQL, and
            software development. Hands-on experience in AI and cybersecurity through
            internships, with strong problem-solving skills and an interest in software
            development.
          </p>
        </Reveal>

        <Reveal className="md:col-span-2" delay={120}>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/60 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm"
              >
                <p className="font-heading text-2xl font-bold text-[#4f46e5]">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-[#475569]">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
