import { Activity, Container, Globe, Network, Server, Target, Users } from 'lucide-react'
import {
  DiagramNode,
  FlowArrow,
  GroupBox,
  SplitFlow,
  ToneTag,
} from './DiagramPrimitives'

function AvailabilityZoneCard({ zone }: { zone: string }) {
  return (
    <div className="rounded-lg border border-white/[0.07] bg-[#0a1322] p-2">
      <div className="flex items-center justify-between gap-1">
        <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-slate-400">
          AZ · {zone}
        </span>
        <span className="inline-flex items-center gap-1 font-mono text-[7px] uppercase tracking-wider text-emerald-300/90">
          <span className="size-1 rounded-full bg-emerald-400" aria-hidden="true" />
          healthy
        </span>
      </div>
      <div className="mt-1.5 rounded-md border border-white/[0.06] bg-white/[0.025] p-1.5">
        <div className="flex items-center gap-1.5">
          <Server className="size-3 shrink-0 text-signal/80" aria-hidden="true" />
          <div className="min-w-0">
            <p className="truncate text-[9px] font-medium leading-tight text-slate-200">
              EC2 instance
            </p>
            <p className="truncate font-mono text-[7px] text-faint">Docker · Node.js</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectOneDiagram() {
  return (
    <div>
      <DiagramNode icon={Users} title="Users" meta="internet traffic" badge="public" />
      <FlowArrow />
      <DiagramNode icon={Globe} title="Internet Gateway" meta="VPC ingress" />
      <FlowArrow />
      <DiagramNode
        icon={Network}
        title="Application Load Balancer"
        meta="listener · traffic distribution"
        tone="cyan"
        badge="multi-AZ"
      />
      <FlowArrow label="forward" />
      <DiagramNode
        icon={Target}
        title="Target Group"
        meta="health checks · registered targets"
        tone="blue"
      />
      <SplitFlow />

      <GroupBox label="Auto Scaling Group" badge="auto-replace">
        <div className="grid grid-cols-2 gap-2">
          <AvailabilityZoneCard zone="A" />
          <AvailabilityZoneCard zone="B" />
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-1">
          <ToneTag tone="emerald">
            <Container className="size-2" aria-hidden="true" />
            containerized app
          </ToneTag>
          <ToneTag tone="slate">desired capacity maintained</ToneTag>
        </div>
      </GroupBox>

      <FlowArrow label="metrics · logs · alarms" dashed />
      <DiagramNode
        icon={Activity}
        title="Amazon CloudWatch"
        meta="monitors ALB + ASG health"
        tone="blue"
        badge="observability"
      />
    </div>
  )
}
