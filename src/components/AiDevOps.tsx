import {
  ArrowDown,
  ArrowRight,
  Bot,
  Boxes,
  ClipboardCheck,
  CloudCog,
  Container,
  FileCode2,
  FileText,
  GitCommit,
  Info,
  ShieldCheck,
  Terminal,
  UserRound,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { aiUseCases, type AiUseCase } from '../data/aiEngineering'
import { GitHubIcon } from './icons/BrandIcons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const useCaseIcons: Record<AiUseCase['icon'], LucideIcon> = {
  terraform: FileCode2,
  cloud: CloudCog,
  containers: Container,
  kubernetes: Boxes,
  cicd: Workflow,
  devsecops: ShieldCheck,
  linux: Terminal,
  documentation: FileText,
}

type WorkflowIcon = LucideIcon | typeof GitHubIcon

interface WorkflowStep {
  title: string
  meta: string
  icon: 'engineer' | 'terminal' | 'agent' | 'infrastructure' | 'review' | 'git' | 'github'
  tag?: string
  tone?: 'default' | 'ai' | 'human'
}

const workflowSteps: WorkflowStep[] = [
  {
    title: 'DevOps Engineer',
    meta: 'intent & requirements',
    icon: 'engineer',
  },
  {
    title: 'Terminal',
    meta: 'local working session',
    icon: 'terminal',
  },
  {
    title: 'OpenCode AI Agent',
    meta: 'engineering assistance',
    icon: 'agent',
    tag: 'AI',
    tone: 'ai',
  },
  {
    title: 'Infrastructure Analysis / Configuration / Troubleshooting',
    meta: 'draft · analyse · debug',
    icon: 'infrastructure',
  },
  {
    title: 'Engineer Review & Validation',
    meta: 'human decision point',
    icon: 'review',
    tag: 'human',
    tone: 'human',
  },
  {
    title: 'Git Commit',
    meta: 'reviewed changes',
    icon: 'git',
  },
  {
    title: 'GitHub',
    meta: 'push / pull request',
    icon: 'github',
  },
]

const workflowIcons: Record<WorkflowStep['icon'], WorkflowIcon> = {
  engineer: UserRound,
  terminal: Terminal,
  agent: Bot,
  infrastructure: CloudCog,
  review: ClipboardCheck,
  git: GitCommit,
  github: GitHubIcon,
}

function UseCaseCard({ useCase, index }: { useCase: AiUseCase; index: number }) {
  const Icon = useCaseIcons[useCase.icon]

  return (
    <article className="card-surface group relative flex h-full flex-col overflow-hidden p-5 transition-colors duration-300 hover:border-signal/20">
      <div
        className="pointer-events-none absolute -right-12 -top-12 size-28 rounded-full bg-signal/[0.04] opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-2">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-signal/15 bg-signal/[0.055] text-signal">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="relative mt-3.5 font-display text-[13px] font-semibold leading-snug tracking-tight text-ice">
        {useCase.title}
      </h3>
      <p className="relative mt-1.5 text-[11px] leading-relaxed text-faint">
        {useCase.description}
      </p>
    </article>
  )
}

function WorkflowNode({ step }: { step: WorkflowStep }) {
  const Icon = workflowIcons[step.icon]
  const isAi = step.tone === 'ai'
  const isHuman = step.tone === 'human'

  const styles = isAi
    ? 'border-signal/25 bg-signal/[0.055]'
    : isHuman
      ? 'border-emerald-400/20 bg-emerald-400/[0.035]'
      : 'border-line/80 bg-white/[0.02]'

  const iconStyles = isAi
    ? 'border-signal/25 bg-signal/[0.09] text-signal'
    : isHuman
      ? 'border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-300'
      : 'border-white/[0.08] bg-white/[0.03] text-slate-400'

  const tagStyles = isAi
    ? 'border-signal/20 bg-signal/[0.06] text-signal/90'
    : 'border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300/90'

  return (
    <div
      className={`flex h-full w-full flex-col rounded-xl border p-3 lg:min-w-0 lg:flex-1 ${styles}`}
    >
      <div className="flex items-start justify-between gap-1">
        <span className={`grid size-6 shrink-0 place-items-center rounded-md border ${iconStyles}`}>
          <Icon className="size-3" aria-hidden="true" />
        </span>
        {step.tag ? (
          <span
            className={`shrink-0 rounded border px-1 py-0.5 font-mono text-[7px] uppercase tracking-[0.1em] ${tagStyles}`}
          >
            {step.tag}
          </span>
        ) : null}
      </div>

      <p className="mt-2 break-words text-[10.5px] font-medium leading-snug text-slate-100">
        {step.title}
      </p>
      <p className="mt-1 font-mono text-[7.5px] leading-tight text-faint">{step.meta}</p>
    </div>
  )
}

export function AiDevOps() {
  return (
    <section id="ai-devops" className="section-pad relative border-t border-white/[0.04]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/4 size-[520px] -translate-x-1/2 rounded-full bg-electric/[0.045] blur-[140px]" />
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="AI / DevOps"
              title="AI-Assisted DevOps Engineering"
              description="Using terminal-based AI agents to improve infrastructure engineering, automation, troubleshooting, and operational efficiency."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-line/80 bg-white/[0.02] px-4 py-3">
              <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">
                <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
                AI-assisted
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Human-reviewed
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 lg:mt-12">
          <article className="card-surface relative overflow-hidden p-5 sm:p-6 lg:p-7">
            <div
              className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-signal/[0.05] blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8">
              <div>
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-signal/20 bg-signal/[0.07] text-signal">
                    <Terminal className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-ice">
                        OpenCode
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/15 bg-signal/[0.04] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-signal/80">
                        <span className="size-1 rounded-full bg-signal" aria-hidden="true" />
                        Primary AI tool
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-signal/80">
                      Terminal-Based AI Coding Agent
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-[13px] leading-[1.75] text-muted sm:text-sm">
                  OpenCode is a terminal-based AI coding agent that assists with infrastructure
                  analysis, configuration generation, troubleshooting and operational
                  documentation. It supports my DevOps workflow — it does not build, deploy or
                  manage production infrastructure autonomously.
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="chip !text-[10px]">
                    <span className="size-1.5 rounded-full bg-signal/80" aria-hidden="true" />
                    Engineering assistant
                  </span>
                  <span className="chip !text-[10px]">
                    <span className="size-1.5 rounded-full bg-signal/80" aria-hidden="true" />
                    Human-reviewed output
                  </span>
                  <span className="chip !text-[10px]">
                    <span className="size-1.5 rounded-full bg-signal/80" aria-hidden="true" />
                    No autonomous changes
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-line/90 bg-[#050a13]">
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-3.5 py-2.5">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="size-1.5 rounded-full bg-[#26364c]" />
                    <span className="size-1.5 rounded-full bg-[#26364c]" />
                    <span className="size-1.5 rounded-full bg-[#26364c]" />
                  </div>
                  <span className="truncate font-mono text-[8px] tracking-wide text-faint">
                    opencode · terminal
                  </span>
                  <span className="shrink-0 font-mono text-[7px] uppercase tracking-[0.14em] text-signal/80">
                    assist
                  </span>
                </div>

                <div className="space-y-1.5 p-4 font-mono text-[10px] leading-relaxed">
                  <p className="text-slate-300">
                    <span className="text-signal">$</span> opencode
                  </p>
                  <p className="truncate text-slate-400">
                    <span className="text-signal/60">›</span> analyse terraform plan
                  </p>
                  <p className="truncate text-slate-400">
                    <span className="text-signal/60">›</span> review kubernetes manifests
                  </p>
                  <p className="truncate text-slate-400">
                    <span className="text-signal/60">›</span> debug github actions workflow
                  </p>
                  <p className="mt-2 border-t border-white/[0.06] pt-2 text-emerald-300/90">
                    ✓ recommendations ready · engineer review required
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {aiUseCases.map((useCase, index) => (
            <Reveal key={useCase.id} delay={index * 0.04}>
              <UseCaseCard useCase={useCase} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">
          <div className="card-surface overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] px-5 py-3.5">
              <div className="flex items-center gap-2">
                <Terminal className="size-3.5 text-signal/80" aria-hidden="true" />
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-300">
                  Engineering workflow
                </span>
              </div>
              <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
                human-in-the-loop
              </span>
            </div>

            <div className="p-4 sm:p-5">
              <ol className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
                {workflowSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex min-w-0 flex-col lg:flex-1 lg:flex-row lg:items-center"
                  >
                    <WorkflowNode step={step} />
                    {index < workflowSteps.length - 1 ? (
                      <span
                        className="flex shrink-0 items-center justify-center py-1.5 lg:px-1.5 lg:py-0"
                        aria-hidden="true"
                      >
                        <ArrowDown className="size-3.5 text-signal/50 lg:hidden" />
                        <ArrowRight className="hidden size-3.5 text-signal/50 lg:block" />
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>

              <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-signal/15 bg-signal/[0.03] p-3.5">
                <Info className="mt-0.5 size-3.5 shrink-0 text-signal/70" aria-hidden="true" />
                <p className="text-[11px] leading-relaxed text-slate-400">
                  <span className="font-medium text-slate-300">Human-in-the-loop: </span>
                  OpenCode assists with implementation. I review, validate and execute the final
                  changes before anything is committed, merged or applied to an environment.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
