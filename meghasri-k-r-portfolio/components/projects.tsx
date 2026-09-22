import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const projects = [
  {
    title: 'Student Management System',
    tools: ['Core Java'],
    description:
      'Developed a Student Management System using Java to manage student data and implemented CRUD operations using OOP concepts.',
  },
  {
    title: 'Crime Analytics System',
    tools: ['Data Analysis', 'Python', 'Dashboard Creation'],
    description:
      'Identified crime trends and patterns through data analysis and created visual dashboards for key insights to interpret datasets.',
  },
  {
    title: 'AI-Based Health Chatbot',
    tools: ['Python', 'Tkinter', 'Joblib', 'Regex', 'Scikit-learn'],
    description:
      'Developed an AI-based healthcare assistant chatbot that predicts possible health conditions and suggests basic medical advice for users.',
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <SectionHeading eyebrow="Things I've built" title="Projects" />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} as="article" delay={i * 100} className="h-full">
            <div className="group flex h-full flex-col rounded-2xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/15">
              <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] transition-all duration-300 group-hover:w-20" />
              <h3 className="font-heading text-xl font-semibold text-[#1e293b]">
                {project.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-violet-50 px-2.5 py-1 text-xs font-medium text-[#7c3aed]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#475569]">
                {project.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
