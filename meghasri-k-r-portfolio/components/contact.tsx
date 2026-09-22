'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { LinkedInIcon } from './icons'

const details = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9042394205',
    href: 'tel:+919042394205',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'meghasrikr@gmail.com',
    href: 'mailto:meghasrikr@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Namakkal, Tamil Nadu',
    href: undefined,
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/meghasrikr',
    href: 'https://linkedin.com/in/meghasrikr',
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:meghasrikr@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <SectionHeading eyebrow="Let's connect" title="Contact" />

      <div className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col justify-center gap-4">
            <p className="text-lg leading-relaxed text-[#475569]">
              I&apos;m open to internships, entry-level roles, and interesting
              collaborations. Feel free to reach out through any of the channels below.
            </p>
            <ul className="mt-2 space-y-3">
              {details.map((item) => {
                const Icon = item.icon
                const content = (
                  <span className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#4f46e5]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-[#7c3aed]">
                        {item.label}
                      </span>
                      <span className="block text-sm font-medium text-[#1e293b]">
                        {item.value}
                      </span>
                    </span>
                  </span>
                )
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/60 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-[#1e293b]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-[#1e293b] outline-none transition-all placeholder:text-slate-400 focus:border-[#4f46e5] focus:ring-2 focus:ring-indigo-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-[#1e293b]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-[#1e293b] outline-none transition-all placeholder:text-slate-400 focus:border-[#4f46e5] focus:ring-2 focus:ring-indigo-200"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-[#1e293b]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-[#1e293b] outline-none transition-all placeholder:text-slate-400 focus:border-[#4f46e5] focus:ring-2 focus:ring-indigo-200"
                  placeholder="How can I help?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-[#4338ca] hover:shadow-xl hover:shadow-indigo-500/50"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Opening your email app…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
