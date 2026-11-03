import {
  Box,
  Boxes,
  GitBranch,
  GitPullRequest,
  Layers,
  Network,
  Package,
  RefreshCw,
  Workflow,
} from 'lucide-react'
import {
  DiagramNode,
  FlowArrow,
  GroupBox,
  ToneTag,
} from './DiagramPrimitives'

function PodTile({ name }: { name: string }) {
  return (
    <div className="rounded-md border border-white/[0.07] bg-[#0a1322] p-1.5">
      <div className="flex items-center gap-1">
        <Box className="size-2.5 text-amber-300/80" aria-hidden="true" />
        <span className="font-mono text-[8px] text-slate-300">Pod</span>
      </div>
      <p className="mt-0.5 truncate font-mono text-[6.5px] text-faint">{name}</p>
    </div>
  )
}

export function ProjectThreeDiagram() {
  return (
    <div>
      <DiagramNode
        icon={GitBranch}
        title="GitHub Repository"
        meta="app code · Kubernetes manifests"
        badge="source"
      />
      <FlowArrow label="CI workflow" />
      <DiagramNode
        icon={Workflow}
        title="GitHub Actions"
        meta="build · push image"
        tone="cyan"
        badge="automation"
      />
      <FlowArrow label="publish" />
      <DiagramNode
        icon={Package}
        title="GitHub Container Registry"
        meta="GHCR · versioned container image"
        tone="cyan"
        badge="registry"
      />
      <FlowArrow label="pull image" />

      <GroupBox label="Amazon EKS · managed node groups" badge="in progress" tone="amber">
        <DiagramNode
          icon={Boxes}
          title="Kubernetes Deployment"
          meta="declared desired state"
          tone="amber"
        />
        <FlowArrow />
        <DiagramNode icon={Layers} title="ReplicaSet" meta="maintains pod replicas" />
        <FlowArrow />
        <div className="grid grid-cols-2 gap-2">
          <PodTile name="app-pod · replica 1" />
          <PodTile name="app-pod · replica 2" />
        </div>
        <FlowArrow />
        <DiagramNode
          icon={Network}
          title="Kubernetes Service"
          meta="stable endpoint for application traffic"
          tone="amber"
        />
        <div className="mt-2 flex flex-wrap gap-1">
          <ToneTag tone="slate">rolling updates</ToneTag>
          <ToneTag tone="slate">rollbacks</ToneTag>
          <ToneTag tone="amber">implementation under way</ToneTag>
        </div>
      </GroupBox>

      <div className="flex items-center gap-2 py-2" aria-hidden="true">
        <span className="h-px flex-1 bg-[repeating-linear-gradient(to_right,rgba(251,191,36,0.35)_0_4px,transparent_4px_8px)]" />
        <span className="inline-flex items-center gap-1 font-mono text-[7px] uppercase tracking-[0.14em] text-amber-300/90">
          <RefreshCw className="size-2.5" />
          reconcile
        </span>
        <span className="h-px flex-1 bg-[repeating-linear-gradient(to_right,rgba(251,191,36,0.35)_0_4px,transparent_4px_8px)]" />
      </div>

      <div className="rounded-xl border border-dashed border-amber-400/20 bg-amber-400/[0.018] p-2.5">
        <div className="flex items-start gap-2">
          <span className="grid size-6 shrink-0 place-items-center rounded-md border border-amber-400/20 bg-amber-400/[0.07]">
            <GitPullRequest className="size-3 text-amber-300" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <p className="text-[11px] font-medium text-slate-100">Argo CD</p>
              <ToneTag tone="amber">GitOps</ToneTag>
            </div>
            <p className="mt-0.5 font-mono text-[7.5px] leading-snug text-faint">
              Watches the Git repository and reconciles EKS deployment state.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
