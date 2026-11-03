import {
  ArrowRight,
  FileCode2,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react'
import { DiagramNode, FlowArrow, ToneTag } from './diagrams/DiagramPrimitives'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const principles = [
  {
    icon: LockKeyhole,
    title: 'Secure secret storage',
    description:
      'Secrets live in AWS Secrets Manager instead of configuration files, source code or container images.',
  },
  {
    icon: KeyRound,
    title: 'IAM-controlled access',
    description:
      'Least-privilege IAM policies determine which identity or workload can read a given secret.',
  },
  {
    icon: RefreshCw,
    title: 'Runtime retrieval',
    description:
      'Applications request secrets through the AWS SDK at runtime, or receive them through controlled deployment injection.',
  },
  {
    icon: FileCode2,
    title: 'No hardcoded credentials',
    description:
      'Keeping secrets out of Git, build artifacts and Terraform state reduces accidental exposure.',
  },
]

export function SecretsManagement() {
  return (
    <section
      id="secrets"
      className="relative border-y border-white/[0.04] bg-[#070d17]/70 py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[-8%] top-1/4 size-[400px] rounded-full bg-signal/[0.045] blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] size-[320px] rounded-full bg-amber-400/[0.025] blur-[110px]" />
      </div>

      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="04 / Secrets management"
            title="Secrets stay out of code. Access stays scoped."
            description="AWS Secrets Manager is part of my AWS security toolkit. The goal is a consistent path from secret storage to a workload that retrieves only what it needs."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => {
                const Icon = principle.icon
                return (
                  <div
                    key={principle.title}
                    className="rounded-xl border border-line/80 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-signal/20"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="grid size-7 place-items-center rounded-md border border-signal/15 bg-signal/[0.06] text-signal">
                        <Icon className="size-3.5" aria-hidden="true" />
                      </span>
                      <h3 className="text-[12px] font-semibold text-ice">{principle.title}</h3>
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-faint">
                      {principle.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-4 rounded-xl border border-amber-400/15 bg-amber-400/[0.03] p-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-3.5 text-amber-300" aria-hidden="true" />
                <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-amber-300/90">
                  Integration status · planned
                </p>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
                AWS Secrets Manager is part of my AWS technical stack. Application integration —
                including secret retrieval by a workload running on EKS — has not yet been fully
                implemented and tested. It is presented here as the target design pattern, not
                completed evidence.
              </p>
            </div>

            <a
              href="#projects"
              className="group mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-signal/80 transition-colors hover:text-signal"
            >
              See the EKS architecture
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-xl border border-line/90 bg-[#050a13]">
              <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-3.5 py-2.5">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-1.5 rounded-full bg-[#26364c]" />
                  <span className="size-1.5 rounded-full bg-[#26364c]" />
                  <span className="size-1.5 rounded-full bg-[#26364c]" />
                </div>
                <span className="font-mono text-[8px] tracking-wide text-faint">secrets/flow</span>
                <ToneTag tone="amber">target pattern</ToneTag>
              </div>

              <div className="p-3.5 sm:p-4">
                <DiagramNode
                  icon={ShieldCheck}
                  title="Application on AWS"
                  meta="EKS Pod / EC2 workload"
                  tone="cyan"
                  badge="runtime"
                />
                <FlowArrow label="assume role" />
                <DiagramNode
                  icon={KeyRound}
                  title="IAM Role · least privilege"
                  meta="IRSA for EKS · scoped secret access"
                  tone="blue"
                  badge="identity"
                />
                <FlowArrow label="GetSecretValue" />
                <DiagramNode
                  icon={LockKeyhole}
                  title="AWS Secrets Manager"
                  meta="encrypted secret storage"
                  tone="amber"
                  badge="secrets"
                />

                <div className="mt-3 flex flex-wrap gap-2 border-t border-white/[0.06] pt-3">
                  <ToneTag tone="cyan">no secrets in Git</ToneTag>
                  <ToneTag tone="cyan">no secrets in images</ToneTag>
                  <ToneTag tone="slate">IAM-scoped</ToneTag>
                </div>

                <div className="mt-3 flex items-start gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-2">
                  <RefreshCw className="mt-0.5 size-3 shrink-0 text-signal/70" aria-hidden="true" />
                  <p className="text-[9px] leading-relaxed text-faint">
                    In the EKS design, the workload identity is mapped to an IAM role so the pod
                    can fetch only its own secret — without baking credentials into the image.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
