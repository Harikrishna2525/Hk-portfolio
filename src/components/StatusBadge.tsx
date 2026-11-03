import { CheckCircle2, Clock3 } from 'lucide-react'
import type { ProjectStatus } from '../data/projects'

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const completed = status === 'Completed'

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.12em] ${
        completed
          ? 'border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-300'
          : 'border-amber-400/20 bg-amber-400/[0.07] text-amber-300'
      }`}
    >
      {completed ? (
        <CheckCircle2 className="size-3" aria-hidden="true" />
      ) : (
        <Clock3 className="size-3" aria-hidden="true" />
      )}
      {status}
    </span>
  )
}
