import { FileCode2, Globe, ShieldAlert, Users } from 'lucide-react'
import { DiagramNode, FlowArrow, GroupBox, ToneTag } from './DiagramPrimitives'

export function ProjectFourDiagram() {
  return (
    <div>
      <DiagramNode icon={Users} title="Users" meta="browser · static traffic" badge="public" />
      <FlowArrow label="HTTPS" />
      <DiagramNode
        icon={Globe}
        title="Amazon CloudFront"
        meta="CDN distribution · edge locations"
        tone="cyan"
        badge="global CDN"
      />
      <FlowArrow label="OAC" />
      <DiagramNode
        icon={ShieldAlert}
        title="Origin Access Control"
        meta="authorized access to private origin"
        tone="blue"
        badge="OAC"
      />
      <FlowArrow />
      <GroupBox label="Private S3 bucket" badge="private origin">
        <DiagramNode
          icon={FileCode2}
          title="Static website files"
          meta="HTML · CSS · JavaScript"
          tone="emerald"
        />
        <div className="mt-2 flex flex-wrap gap-1">
          <ToneTag tone="slate">bucket policy · no public access</ToneTag>
          <ToneTag tone="emerald">origin retrieval</ToneTag>
        </div>
      </GroupBox>
    </div>
  )
}
