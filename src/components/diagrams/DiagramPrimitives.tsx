import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export type DiagramTone = 'slate' | 'blue' | 'cyan' | 'amber' | 'emerald'

const tones: Record<
  DiagramTone,
  { box: string; icon: string; iconBox: string }
> = {
  slate: {
    box: 'border-white/[0.08] bg-white/[0.025]',
    icon: 'text-slate-400',
    iconBox: 'border-white/[0.07] bg-white/[0.03]',
  },
  blue: {
    box: 'border-electric/20 bg-electric/[0.055]',
    icon: 'text-blue-300',
    iconBox: 'border-electric/20 bg-electric/[0.08]',
  },
  cyan: {
    box: 'border-signal/25 bg-signal/[0.055]',
    icon: 'text-signal',
    iconBox: 'border-signal/20 bg-signal/[0.09]',
  },
  amber: {
    box: 'border-amber-400/20 bg-amber-400/[0.045]',
    icon: 'text-amber-300',
    iconBox: 'border-amber-400/20 bg-amber-400/[0.07]',
  },
  emerald: {
    box: 'border-emerald-400/20 bg-emerald-400/[0.045]',
    icon: 'text-emerald-300',
    iconBox: 'border-emerald-400/20 bg-emerald-400/[0.07]',
  },
}

interface DiagramNodeProps {
  icon: LucideIcon
  title: string
  meta?: string
  tone?: DiagramTone
  badge?: string
  className?: string
}

export function DiagramNode({
  icon: Icon,
  title,
  meta,
  tone = 'slate',
  badge,
  className = '',
}: DiagramNodeProps) {
  const styles = tones[tone]

  return (
    <div
      className={`flex w-full items-center gap-2.5 rounded-lg border px-2.5 py-2 ${styles.box} ${className}`}
    >
      <span
        className={`grid size-6 shrink-0 place-items-center rounded-md border ${styles.iconBox}`}
      >
        <Icon className={`size-3 ${styles.icon}`} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-[11px] font-medium leading-tight text-slate-100">{title}</p>
          {badge ? (
            <span className="shrink-0 rounded border border-white/10 bg-black/20 px-1 py-0.5 font-mono text-[7px] uppercase tracking-wider text-slate-400">
              {badge}
            </span>
          ) : null}
        </div>
        {meta ? (
          <p className="mt-0.5 truncate font-mono text-[8px] leading-tight text-faint">{meta}</p>
        ) : null}
      </div>
    </div>
  )
}

interface FlowArrowProps {
  label?: string
  dashed?: boolean
}

export function FlowArrow({ label, dashed = false }: FlowArrowProps) {
  return (
    <div className="flex flex-col items-center py-0.5" aria-hidden="true">
      {label ? (
        <span className="mb-0.5 font-mono text-[7px] uppercase tracking-[0.14em] text-faint">
          {label}
        </span>
      ) : null}
      <svg width="12" height="22" viewBox="0 0 12 22" fill="none" className="overflow-visible">
        <path
          d="M6 1v16"
          stroke="rgb(34 211 238 / 0.45)"
          strokeWidth="1"
          strokeDasharray={dashed ? '3 3' : undefined}
        />
        <path
          d="m2 14.5 4 4.5 4-4.5"
          stroke="rgb(34 211 238 / 0.62)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function SplitFlow() {
  return (
    <div className="h-7 w-full" aria-hidden="true">
      <svg
        width="100%"
        height="28"
        viewBox="0 0 400 28"
        preserveAspectRatio="none"
        fill="none"
        className="overflow-visible"
      >
        <path
          d="M200 0v8M100 8h200M100 8v7M300 8v7"
          stroke="rgb(34 211 238 / 0.34)"
          strokeWidth="1"
        />
        <path
          d="m96 14 4 5 4-5M296 14l4 5 4-5"
          stroke="rgb(34 211 238 / 0.55)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

interface GroupBoxProps {
  label: string
  badge?: string
  tone?: 'cyan' | 'amber'
  children: ReactNode
  className?: string
}

export function GroupBox({
  label,
  badge,
  tone = 'cyan',
  children,
  className = '',
}: GroupBoxProps) {
  const styles =
    tone === 'amber'
      ? 'border-amber-400/20 bg-amber-400/[0.018]'
      : 'border-signal/20 bg-signal/[0.018]'
  const labelColor = tone === 'amber' ? 'text-amber-300/80' : 'text-signal/80'

  return (
    <div className={`rounded-xl border border-dashed p-2.5 ${styles} ${className}`}>
      <div className="mb-2 flex items-center justify-between gap-2 px-0.5">
        <span
          className={`font-mono text-[7px] uppercase tracking-[0.16em] ${labelColor}`}
        >
          {label}
        </span>
        {badge ? (
          <span className="rounded border border-white/10 bg-black/20 px-1 py-0.5 font-mono text-[7px] uppercase tracking-wider text-slate-400">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="space-y-0">{children}</div>
    </div>
  )
}

export function ToneTag({
  children,
  tone = 'cyan',
}: {
  children: ReactNode
  tone?: 'cyan' | 'amber' | 'emerald' | 'slate'
}) {
  const styles = {
    cyan: 'border-signal/20 bg-signal/[0.06] text-signal/90',
    amber: 'border-amber-400/20 bg-amber-400/[0.06] text-amber-300/90',
    emerald: 'border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300/90',
    slate: 'border-white/10 bg-white/[0.03] text-slate-400',
  }[tone]

  return (
    <span
      className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.1em] ${styles}`}
    >
      {children}
    </span>
  )
}
