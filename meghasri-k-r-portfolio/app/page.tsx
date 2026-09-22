import { Navbar } from '@/components/navbar'
import { ParticlesCanvas } from '@/components/particles-canvas'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Internships } from '@/components/internships'
import { Education } from '@/components/education'
import { Certifications } from '@/components/certifications'
import { Activities } from '@/components/activities'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <ParticlesCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Education />
        <Certifications />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
