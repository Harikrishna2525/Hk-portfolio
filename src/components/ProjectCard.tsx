import { Check, CircleDot, ExternalLink, Info } from 'lucide-react'
import type { Project } from '../data/projects'
import { ProjectOneDiagram } from './diagrams/ProjectOneDiagram'
import { ProjectThreeDiagram } from './diagrams/ProjectThreeDiagram'
import { ProjectTwoDiagram } from './diagrams/ProjectTwoDiagram'
import { ProjectFourDiagram } from './diagrams/ProjectFourDiagram'
import { StatusBadge } from './StatusBadge'

const diagramMeta = {
  'auto-healing': { file: 'aws-auto-healing.tf', label: 'as built' },
  devsecops: { file: 'secure-pipeline.yml', label: 'as built' },
  'eks-gitops': { file: 'eks-gitops.yaml', label: 'target architecture' },
  'static-s3': { file: 's3-static-website.tf', label: 'as built' },
} as const

function ProjectDiagram({ project }: { project: Project }) {
  const meta = diagramMeta[project.diagram]

  return (
    <figure className="overflow-hidden rounded-xl border border-line/90 bg-[#050a13]">
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-[#26364c]" />
          <span className="size-1.5 rounded-full bg-[#26364c]" />
          <span className="size-1.5 rounded-full bg-[#26364c]" />
        </div>
        <span className="truncate font-mono text-[8px] tracking-wide text-faint">{meta.file}</span>
        <span className="shrink-0 font-mono text-[7px] uppercase tracking-[0.14em] text-signal/80">
          architecture
        </span>
      </div>

      <div className="p-3 sm:p-4" aria-hidden="true">
        {project.diagram === 'auto-healing' ? <ProjectOneDiagram /> : null}
        {project.diagram === 'devsecops' ? <ProjectTwoDiagram /> : null}
        {project.diagram === 'eks-gitops' ? <ProjectThreeDiagram /> : null}
        {project.diagram === 'static-s3' ? <ProjectFourDiagram /> : null}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-3 py-2">
        <span className="inline-flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-wider text-faint">
          <Info className="size-2.5" aria-hidden="true" />
          Architecture overview
        </span>
        <span
          className={`font-mono text-[7px] uppercase tracking-[0.12em] ${
            project.status === 'In Progress' ? 'text-amber-300/90' : 'text-faint'
          }`}
        >
          {meta.label}
        </span>
      </div>

      <figcaption className="sr-only">{project.diagramLabel}</figcaption>
    </figure>
  )
}

export function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project
  reverse?: boolean
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line/90 bg-gradient-to-b from-white/[0.035] to-white/[0.012] transition-colors duration-500 hover:border-signal/20 sm:rounded-3xl">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-signal/[0.035] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative p-5 sm:p-7 lg:p-9">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-signal/70">
              Project {project.index}
            </span>
            <span className="hidden h-px w-8 bg-line sm:block" aria-hidden="true" />
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-faint sm:inline">
              {project.shortTitle}
            </span>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-14">
          <div className={reverse ? 'lg:order-2' : undefined}>
            <h3 className="font-display text-[1.35rem] font-semibold leading-snug tracking-[-0.02em] text-ice sm:text-2xl lg:text-[1.6rem]">
              {project.title}
            </h3>
            <p className="mt-4 text-[13px] leading-[1.75] text-muted sm:text-sm">
              {project.description}
            </p>

            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-signal transition-colors duration-300 hover:text-ice"
              >
                <ExternalLink className="size-3" aria-hidden="true" />
                Source repository
              </a>
            ) : null}

            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-4 w-full sm:w-auto"
              >
                View Live Portfolio
              </a>
            ) : null}

            <div className="mt-5">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-faint">
                Technologies
              </p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Project technologies">
                {project.technologies.map((technology) => (
                  <li key={technology}>
                    <span className="chip !text-[10px]">{technology}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-faint">
                {project.highlightsLabel}
              </p>
              <ul className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span
                      className={`mt-0.5 grid size-3.5 shrink-0 place-items-center rounded border ${
                        project.status === 'In Progress'
                          ? 'border-amber-400/25 bg-amber-400/[0.08]'
                          : 'border-signal/20 bg-signal/[0.07]'
                      }`}
                    >
                      {project.status === 'In Progress' ? (
                        <CircleDot className="size-2.5 text-amber-300" aria-hidden="true" />
                      ) : (
                        <Check className="size-2.5 text-signal" aria-hidden="true" />
                      )}
                    </span>
                    <span className="text-[11px] leading-[1.5] text-slate-400">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.note ? (
              <div
                className={`mt-6 flex items-start gap-2.5 rounded-lg border p-3 ${
                  project.status === 'In Progress'
                    ? 'border-amber-400/15 bg-amber-400/[0.03]'
                    : 'border-white/[0.07] bg-white/[0.02]'
                }`}
              >
                <Info
                  className={`mt-0.5 size-3.5 shrink-0 ${
                    project.status === 'In Progress' ? 'text-amber-400/80' : 'text-signal/70'
                  }`}
                  aria-hidden="true"
                />
                <p className="text-[10px] leading-relaxed text-slate-400">
                  <span className="font-medium text-slate-300">Scope note: </span>
                  {project.note}
                </p>
              </div>
            ) : null}
          </div>

          <div className={reverse ? 'lg:order-1' : undefined}>
            <ProjectDiagram project={project} />
          </div>
        </div>
      </div>
    </article>
  )
}
