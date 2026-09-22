import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const certifications = [
  { title: 'Java (Basic)', issuer: 'HackerRank' },
  { title: 'Python', issuer: 'GUVI' },
  { title: 'Data Analytics Job Simulation', issuer: 'Forage · Deloitte Australia' },
  { title: 'Excel in Data Analysis', issuer: 'Coursera' },
  { title: 'Google Cloud Computing Foundations', issuer: 'NPTEL' },
]

export function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"
    >
      <SectionHeading eyebrow="Credentials" title="Certifications" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={(i % 3) * 100} className="h-full">
            <div className="flex h-full items-center gap-4 rounded-2xl border border-white/60 bg-white/85 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/15">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] font-heading text-sm font-bold text-white">
                {cert.title.charAt(0)}
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-[#1e293b]">
                  {cert.title}
                </p>
                <p className="text-xs text-[#475569]">{cert.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
