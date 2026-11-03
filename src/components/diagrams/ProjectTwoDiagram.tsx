import {
  ArrowRight,
  Container,
  FileCode2,
  GitBranch,
  KeyRound,
  Package,
  Rocket,
  ScanSearch,
  ShieldAlert,
} from 'lucide-react'
import {
  DiagramNode,
  FlowArrow,
  GroupBox,
  ToneTag,
} from './DiagramPrimitives'

function ScanTile({
  icon: Icon,
  name,
  category,
  description,
  accent,
}: {
  icon: typeof ScanSearch
  name: string
  category: string
  description: string
  accent: 'source' | 'secret' | 'iac' | 'container'
}) {
  const accentStyles = {
    source: 'text-signal/90',
    secret: 'text-amber-300/90',
    iac: 'text-blue-300/90',
    container: 'text-emerald-300/90',
  }[accent]

  return (
    <div className="rounded-lg border border-white/[0.07] bg-[#050a13] p-2">
      <div className="flex items-center justify-between gap-1">
        <div className="flex items-center gap-1.5">
          <Icon className="size-3 text-signal/80" aria-hidden="true" />
          <span className="font-mono text-[9px] font-medium text-slate-200">{name}</span>
        </div>
        <span
          className={`shrink-0 font-mono text-[6px] uppercase tracking-wider ${accentStyles}`}
        >
          {category}
        </span>
      </div>
      <p className="mt-1 text-[7.5px] leading-snug text-faint">{description}</p>
    </div>
  )
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 font-mono text-[7px] uppercase tracking-wider text-faint">
      <span className={`size-1.5 rounded-full ${color}`} aria-hidden="true" />
      {label}
    </span>
  )
}

export function ProjectTwoDiagram() {
  return (
    <div>
      <DiagramNode
        icon={GitBranch}
        title="GitHub Repository"
        meta="application source · workflow definitions"
        badge="source"
      />
      <FlowArrow label="push / pull request" />
      <GroupBox label="GitHub Actions workflow" badge="CI">
        <div className="grid grid-cols-2 gap-2">
          <ScanTile
            icon={ScanSearch}
            name="CodeQL"
            category="SAST"
            description="Static analysis of application source code."
            accent="source"
          />
          <ScanTile
            icon={ShieldAlert}
            name="Gitleaks"
            category="secrets"
            description="Secret detection across the repository."
            accent="secret"
          />
          <ScanTile
            icon={FileCode2}
            name="Checkov"
            category="IaC"
            description="Terraform misconfiguration scanning."
            accent="iac"
          />
          <ScanTile
            icon={Container}
            name="Trivy"
            category="container"
            description="Image and dependency vulnerability scanning."
            accent="container"
          />
        </div>

        <div className="mt-2 rounded-lg border border-signal/15 bg-signal/[0.035] px-2 py-1.5">
          <div className="flex items-center justify-between gap-1.5">
            <span className="inline-flex items-center gap-1 font-mono text-[8px] text-slate-300">
              <KeyRound className="size-2.5 text-signal" aria-hidden="true" />
              IAM OIDC
            </span>
            <ArrowRight className="size-2.5 text-signal/50" aria-hidden="true" />
            <span className="font-mono text-[8px] text-slate-300">AWS IAM role</span>
          </div>
          <p className="mt-1 font-mono text-[6.5px] uppercase tracking-wider text-faint">
            federated auth · no long-lived access keys
          </p>
        </div>
      </GroupBox>

      <FlowArrow label="build image" />
      <DiagramNode
        icon={Package}
        title="Docker Build"
        meta="image tagged for delivery"
        tone="cyan"
      />
      <FlowArrow label="push" />
      <DiagramNode
        icon={Container}
        title="GitHub Container Registry"
        meta="GHCR · authenticated with GITHUB_TOKEN"
        tone="cyan"
        badge="registry"
      />
      <FlowArrow label="deliver" />
      <DiagramNode
        icon={Rocket}
        title="Deployment"
        meta="release workflow stage"
        tone="emerald"
      />

      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-white/[0.06] pt-2.5">
        <LegendItem color="bg-signal" label="Source code" />
        <LegendItem color="bg-amber-400" label="Secrets" />
        <LegendItem color="bg-blue-400" label="IaC" />
        <LegendItem color="bg-emerald-400" label="Container / deps" />
        <ToneTag tone="slate">reported findings</ToneTag>
      </div>
    </div>
  )
}
