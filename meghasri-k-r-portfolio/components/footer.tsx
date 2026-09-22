import { Mail } from 'lucide-react'
import { LinkedInIcon } from './icons'

export function Footer() {
  return (
    <footer className="border-t border-white/50 bg-white/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-[#475569]">
          © {new Date().getFullYear()} Meghasri K R. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/meghasrikr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-[#4f46e5] shadow-sm transition-all hover:-translate-y-0.5 hover:text-[#7c3aed] hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:meghasrikr@gmail.com"
            aria-label="Send an email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-[#4f46e5] shadow-sm transition-all hover:-translate-y-0.5 hover:text-[#7c3aed] hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
