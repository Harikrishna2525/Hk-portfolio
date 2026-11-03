import { CheckCircle2, Clock3 } from 'lucide-react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="section-pad relative border-t border-white/[0.04]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute right-[-10%] top-24 size-[460px] rounded-full bg-electric/[0.05] blur-[130px]" />
        <div className="dot-grid absolute inset-x-0 top-0 h-[420px] opacity-40" />
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="03 / Projects"
              title="Engineering work, end to end."
              description="Three builds at the center of this portfolio: highly available AWS infrastructure, a security-integrated delivery pipeline and an EKS GitOps deployment in progress."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-line/80 bg-white/[0.02] px-4 py-3">
              <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">
                <CheckCircle2 className="size-3 text-emerald-300" aria-hidden="true" />
                Completed
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">
                <Clock3 className="size-3 text-amber-300" aria-hidden="true" />
                In progress
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 space-y-5 lg:mt-12 lg:space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.04}>
              <ProjectCard project={project} reverse={index % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
            Repository links are intentionally omitted · walkthroughs available on request
          </p>
        </Reveal>
      </div>
    </section>
  )
}
