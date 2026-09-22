import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed]" />
    </Reveal>
  )
}
