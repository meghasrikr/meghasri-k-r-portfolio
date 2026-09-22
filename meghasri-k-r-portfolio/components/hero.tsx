import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8">
        <p className="mb-5 inline-flex items-center rounded-full border border-indigo-200/70 bg-white/60 px-4 py-1.5 text-sm font-medium text-[#4f46e5] backdrop-blur-sm">
          Available for opportunities
        </p>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-[#1e293b] sm:text-6xl">
          Meghasri K R
        </h1>

        <p className="mt-5 font-heading text-base font-semibold text-[#4f46e5] sm:text-xl">
          BCA Graduate | Software &amp; Backend Developer | AI &amp; Cybersecurity Enthusiast
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg">
          I build reliable software with a strong foundation in Java, Python, and data,
          and a growing focus on artificial intelligence and cybersecurity.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-[#4338ca] hover:shadow-xl hover:shadow-indigo-500/50"
          >
            Contact Me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
