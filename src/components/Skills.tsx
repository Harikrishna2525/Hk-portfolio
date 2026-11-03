import {
  Boxes,
  CloudCog,
  Container,
  FileCode2,
  GitBranch,
  Info,
  Monitor,
  ShieldCheck,
  Terminal,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import {
  foundationGroups,
  securityPractices,
  skillGroups,
  type Skill,
  type SkillGroup,
} from '../data/skills'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const groupIcons: Record<SkillGroup['icon'], LucideIcon> = {
  cloud: CloudCog,
  code: FileCode2,
  containers: Boxes,
  workflow: Workflow,
}

const foundationIcons: Record<string, LucideIcon> = {
  os: Terminal,
  vcs: GitBranch,
  registry: Container,
  monitoring: Monitor,
}

function SkillChip({ skill }: { skill: Skill }) {
  const inProgress = skill.status === 'in-progress'
  const planned = skill.status === 'planned'

  return (
    <span
      className={`chip ${
        inProgress
          ? 'border-amber-400/20 bg-amber-400/[0.04] text-slate-300'
          : planned
            ? 'border-slate-500/20 bg-white/[0.02] text-slate-400'
            : ''
      }`}
      title={
        inProgress ? 'In progress' : planned ? 'Planned' : 'Implemented / hands-on'
      }
    >
      <span
        className={`size-1.5 shrink-0 rounded-full ${
          inProgress ? 'bg-amber-400' : planned ? 'bg-slate-500' : 'bg-signal/80'
        }`}
        aria-hidden="true"
      />
      {skill.name}
      {skill.note ? <span className="text-faint">· {skill.note}</span> : null}
      <span className="sr-only">
        {inProgress ? ' — in progress' : planned ? ' — planned' : ' — implemented'}
      </span>
    </span>
  )
}

function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = groupIcons[group.icon]
  const hasInProgress = group.skills.some((skill) => skill.status === 'in-progress')

  return (
    <article className="card-surface group relative overflow-hidden p-5 transition-colors duration-300 hover:border-signal/20 sm:p-6">
      <div
        className="pointer-events-none absolute -right-14 -top-14 size-32 rounded-full bg-signal/[0.045] opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-signal/15 bg-signal/[0.055] text-signal">
          <Icon className="size-[18px]" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-[15px] font-semibold tracking-tight text-ice">
              {group.title}
            </h3>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] ${
                hasInProgress
                  ? 'border-amber-400/20 bg-amber-400/[0.06] text-amber-300/90'
                  : 'border-signal/15 bg-signal/[0.04] text-signal/80'
              }`}
            >
              <span
                className={`size-1 rounded-full ${
                  hasInProgress ? 'bg-amber-400' : 'bg-signal'
                }`}
                aria-hidden="true"
              />
              {hasInProgress ? 'Mixed' : 'Implemented'}
            </span>
          </div>
          <p className="mt-1.5 text-[11px] leading-relaxed text-faint">{group.subtitle}</p>
        </div>
      </div>

      <ul className="relative mt-4 flex flex-wrap gap-1.5" aria-label={`${group.title} skills`}>
        {group.skills.map((skill) => (
          <li key={skill.name}>
            <SkillChip skill={skill} />
          </li>
        ))}
      </ul>

      {group.footnote ? (
        <p className="relative mt-4 border-t border-white/[0.05] pt-3 text-[10px] leading-relaxed text-faint">
          {group.footnote}
        </p>
      ) : null}
    </article>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section-pad relative border-t border-white/[0.04]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 size-[520px] -translate-x-1/2 rounded-full bg-electric/[0.045] blur-[140px]" />
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="02 / Skills"
              title="The engineering stack."
              description="Grouped by the work each tool does — with implemented experience separated from capabilities still in development."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-line/80 bg-white/[0.02] px-4 py-3">
              <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">
                <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
                Implemented
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">
                <span className="size-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                In progress
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">
                <span className="size-1.5 rounded-full bg-slate-500" aria-hidden="true" />
                Planned
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.05}>
              <SkillCard group={group} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">
          <section
            className="card-surface relative overflow-hidden p-5 sm:p-7"
            aria-labelledby="devsecops-heading"
          >
            <div
              className="pointer-events-none absolute -left-24 -top-24 size-56 rounded-full bg-signal/[0.05] blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-signal/20 bg-signal/[0.06] text-signal">
                  <ShieldCheck className="size-[18px]" aria-hidden="true" />
                </span>
                <div>
                  <h3
                    id="devsecops-heading"
                    className="font-display text-[15px] font-semibold tracking-tight text-ice"
                  >
                    DevSecOps &amp; Security Tools
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-faint">
                    Implemented controls integrated into the software delivery workflow.
                  </p>
                </div>
              </div>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-signal/15 bg-signal/[0.04] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-signal/80">
                <span className="size-1 rounded-full bg-signal" aria-hidden="true" />
                Implemented
              </span>
            </div>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {securityPractices.map((practice) => (
                <div
                  key={practice.name}
                  className="rounded-xl border border-line/70 bg-[#070d18]/70 p-4 transition-colors duration-300 hover:border-signal/20"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
                      {practice.category}
                    </span>
                    <span
                      className="size-1.5 rounded-full bg-signal/80"
                      aria-hidden="true"
                    />
                  </div>
                  <h4 className="mt-2 font-display text-[13px] font-semibold text-ice">
                    {practice.name}
                  </h4>
                  <p className="mt-1.5 text-[10px] leading-relaxed text-faint">
                    {practice.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="relative mt-5 flex items-start gap-2 border-t border-white/[0.05] pt-4 text-[10px] leading-relaxed text-faint">
              <Info className="mt-0.5 size-3 shrink-0 text-signal/60" aria-hidden="true" />
              Scanners are configured as workflow stages. They are not all configured as blocking
              deployment gates, so results are reported rather than universally preventing a
              release.
            </p>
          </section>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {foundationGroups.map((group, index) => {
            const Icon = foundationIcons[group.id] ?? Terminal
            return (
              <Reveal key={group.id} delay={index * 0.04}>
                <div className="rounded-xl border border-line/80 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-signal/20">
                  <div className="flex items-center gap-2">
                    <Icon className="size-3.5 text-signal/80" aria-hidden="true" />
                    <h3 className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-300">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <span className="chip !py-1 !text-[10px]">
                          <span className="size-1.5 rounded-full bg-signal/80" aria-hidden="true" />
                          {skill.name}
                          <span className="sr-only"> — implemented</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-400/15 bg-amber-400/[0.025] p-4">
            <Info className="mt-0.5 size-4 shrink-0 text-amber-400/80" aria-hidden="true" />
            <p className="text-[11px] leading-relaxed text-slate-400">
              <span className="font-medium text-slate-300">Scope note:</span> AWS, Terraform,
              Docker, CI/CD and the security tooling are hands-on. Kubernetes, Amazon EKS, Argo CD
              and AWS Secrets Manager application integration are actively being developed and are
              marked accordingly — never presented as completed work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
