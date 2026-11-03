import { motion, useReducedMotion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  ChevronDown,
  Download,
  Globe,
  Mail,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { site } from '../data/site'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduceMotion = useReducedMotion()

  const enter = (delay: number, y = 18) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  })

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute -right-[12%] -top-[18%] size-[560px] rounded-full bg-electric/[0.12] blur-[130px]" />
        <div className="absolute -left-[18%] top-[28%] size-[460px] rounded-full bg-signal/[0.07] blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night via-night/70 to-transparent" />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 xl:gap-20">
          <div>
            <motion.div {...enter(0.02)}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] py-1.5 pl-2.5 pr-3.5">
                <span className="relative flex size-2 items-center justify-center">
                  <span className="absolute inline-flex size-2 rounded-full bg-signal/60 animate-pulse-ring" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
                </span>
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
                  AWS Infrastructure &amp; DevOps
                </span>
              </span>
            </motion.div>

            <motion.h1
              {...enter(0.1)}
              className="mt-7 font-display text-[2.85rem] font-semibold leading-[0.98] tracking-[-0.045em] text-ice sm:text-6xl lg:text-[4.15rem] xl:text-[4.65rem]"
            >
              Hari Krishna R
            </motion.h1>

            <motion.p
              {...enter(0.18)}
              className="mt-4 font-display text-[1.35rem] font-medium leading-tight tracking-[-0.02em] text-slate-300 sm:text-[1.7rem]"
            >
              <span className="text-gradient-accent">AWS Infrastructure</span>{' '}
              <span className="text-slate-500">&amp;</span> DevOps Engineer
            </motion.p>

            <motion.p
              {...enter(0.24)}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[17px]"
            >
              Building secure, automated and highly available cloud infrastructure.
            </motion.p>

            <motion.div {...enter(0.3)} className="mt-6">
              <ul
                className="flex flex-wrap items-center gap-x-2.5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 sm:text-[11px]"
                aria-label="Core technologies"
              >
                {site.stack.map((technology, index) => (
                  <li key={technology} className="flex items-center gap-2.5">
                    {index > 0 ? (
                      <span className="h-3 w-px bg-line" aria-hidden="true" />
                    ) : null}
                    <span>{technology}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...enter(0.38)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a href="#projects" className="btn btn-primary group w-full sm:w-auto">
                View Projects
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={site.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full sm:w-auto"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a href="#contact" className="btn btn-ghost group w-full sm:w-auto">
                <Mail className="size-4 text-signal" aria-hidden="true" />
                Contact Me
              </a>
            </motion.div>

            <motion.div
              {...enter(0.46)}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                Find me
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-signal/30 hover:text-ice"
                  aria-label="GitHub profile (opens in a new tab)"
                >
                  <GitHubIcon className="size-4" />
                </a>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-signal/30 hover:text-ice"
                  aria-label="LinkedIn profile (opens in a new tab)"
                >
                  <LinkedInIcon className="size-4" />
                </a>
              </div>
              <span className="hidden h-3 w-px bg-line sm:block" aria-hidden="true" />
              <span className="hidden text-xs text-faint sm:block">
                Cloud infrastructure · automation · security
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.28, ease: EASE }}
            className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
          >
            <ControlPlane />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MiniNode({
  icon: Icon,
  label,
  meta,
  tone = 'default',
  wide = false,
}: {
  icon: LucideIcon
  label: string
  meta?: string
  tone?: 'default' | 'accent'
  wide?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 ${
        tone === 'accent'
          ? 'border-signal/25 bg-signal/[0.055]'
          : 'border-white/[0.07] bg-white/[0.025]'
      } ${wide ? 'w-full' : ''}`}
    >
      <Icon
        className={`size-3.5 shrink-0 ${tone === 'accent' ? 'text-signal' : 'text-slate-400'}`}
        aria-hidden="true"
      />
      <div className="min-w-0">
        <p className="truncate text-[10px] font-medium leading-tight text-slate-200">{label}</p>
        {meta ? (
          <p className="mt-0.5 truncate font-mono text-[8px] leading-tight text-faint">{meta}</p>
        ) : null}
      </div>
    </div>
  )
}

function MiniArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-0.5" aria-hidden="true">
      {label ? (
        <span className="mb-0.5 font-mono text-[7px] uppercase tracking-[0.14em] text-faint">
          {label}
        </span>
      ) : null}
      <svg width="2" height="10" viewBox="0 0 2 10" className="overflow-visible">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="10"
          stroke="rgb(34 211 238 / 0.45)"
          strokeWidth="1"
          className="animate-dash-flow"
        />
      </svg>
      <ChevronDown className="-mt-0.5 size-2.5 text-signal/50" />
    </div>
  )
}

function AvailabilityZone({ zone }: { zone: string }) {
  return (
    <div className="rounded-md border border-white/[0.06] bg-[#0a1322] p-2">
      <div className="flex items-center justify-between gap-1">
        <span className="font-mono text-[8px] uppercase tracking-wider text-faint">{zone}</span>
        <span className="flex items-center gap-1 font-mono text-[7px] uppercase tracking-wider text-emerald-300/90">
          <span className="size-1 rounded-full bg-emerald-400" aria-hidden="true" />
          healthy
        </span>
      </div>
      <div className="mt-1.5 flex items-center gap-1.5">
        <Server className="size-3.5 shrink-0 text-signal/80" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-[10px] font-medium leading-tight text-slate-200">Amazon EC2</p>
          <p className="truncate font-mono text-[7px] text-faint">Docker · Node.js</p>
        </div>
      </div>
    </div>
  )
}

function ControlPlane() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-tr from-electric/10 via-signal/[0.08] to-transparent blur-2xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070d18]/95 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.95)] backdrop-blur">
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-[#26364c]" />
            <span className="size-2 rounded-full bg-[#26364c]" />
            <span className="size-2 rounded-full bg-[#26364c]" />
          </div>
          <span className="font-mono text-[9px] tracking-[0.08em] text-faint">infra/overview</span>
          <span className="rounded border border-emerald-400/20 bg-emerald-400/[0.08] px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.16em] text-emerald-300">
            Managed
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
                Provisioned with
              </p>
              <p className="mt-1 text-xs font-medium text-slate-200">Terraform · AWS</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">Design</p>
              <p className="mt-1 text-xs font-medium text-slate-200">Multi-AZ</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#050a13] p-3 sm:p-4">
            <div className="flex justify-center">
              <MiniNode icon={Globe} label="Internet" meta="user traffic" />
            </div>
            <MiniArrow />
            <MiniNode
              icon={Network}
              label="Application Load Balancer"
              meta="listener · target routing"
              tone="accent"
              wide
            />
            <MiniArrow label="health checks" />

            <div className="rounded-lg border border-dashed border-signal/20 bg-signal/[0.02] p-2.5">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.16em] text-signal/80">
                  <RefreshCw className="size-2.5" aria-hidden="true" />
                  Auto Scaling Group
                </span>
                <span className="font-mono text-[7px] uppercase tracking-wider text-faint">
                  desired capacity
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <AvailabilityZone zone="AZ-A" />
                <AvailabilityZone zone="AZ-B" />
              </div>
            </div>

            <div className="mt-2 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded border border-white/[0.06] bg-white/[0.025] px-2 py-1 font-mono text-[7px] uppercase tracking-wider text-slate-400">
                <Activity className="size-2.5 text-signal/80" aria-hidden="true" />
                CloudWatch · metrics · alarms
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 divide-x divide-white/[0.06] overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02]">
            {[
              ['Infra', 'Terraform'],
              ['Delivery', 'Actions'],
              ['Security', 'DevSecOps'],
            ].map(([label, value]) => (
              <div key={label} className="px-3 py-2.5">
                <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-faint">
                  {label}
                </p>
                <p className="mt-1 text-[10px] font-medium text-slate-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="animate-float-soft absolute -right-2 -top-12 z-10 hidden items-center gap-2 rounded-lg border border-white/10 bg-[#0a1322]/95 px-3 py-2 shadow-xl backdrop-blur xl:flex">
        <span className="grid size-6 place-items-center rounded-md border border-emerald-400/20 bg-emerald-400/10">
          <ShieldCheck className="size-3.5 text-emerald-300" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[10px] font-medium text-slate-200">Scans in pipeline</p>
          <p className="font-mono text-[8px] text-faint">SAST · secrets · IaC · images</p>
        </div>
      </div>

      <div
        className="animate-float-soft absolute -bottom-16 -left-3 z-10 hidden items-center gap-2 rounded-lg border border-white/10 bg-[#0a1322]/95 px-3 py-2 shadow-xl backdrop-blur sm:flex"
        style={{ animationDelay: '1.4s' }}
      >
        <span className="grid size-6 place-items-center rounded-md border border-signal/20 bg-signal/10">
          <RefreshCw className="size-3.5 text-signal" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[10px] font-medium text-slate-200">Auto-replace enabled</p>
          <p className="font-mono text-[8px] text-faint">unhealthy → replaced</p>
        </div>
      </div>
    </div>
  )
}
