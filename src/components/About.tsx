import { Activity, ArrowRight, Cloud, FileCode2, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const focusCards = [
  {
    icon: Cloud,
    title: 'Cloud architecture',
    description: 'Multi-AZ AWS foundations using VPC, ALB, Auto Scaling, IAM and CloudWatch.',
  },
  {
    icon: FileCode2,
    title: 'Infrastructure as Code',
    description: 'Terraform-defined environments with variables, outputs and remote state.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure delivery',
    description: 'CI/CD with IAM OIDC, SAST, secret, IaC and container image scanning.',
  },
  {
    icon: Activity,
    title: 'Reliability',
    description: 'Health checks, automatic replacement, monitoring and operational clarity.',
  },
]

const currentFocus = [
  {
    name: 'Amazon EKS',
    detail: 'Cluster + managed node groups',
    status: 'In progress',
  },
  {
    name: 'Argo CD',
    detail: 'GitOps reconciliation workflow',
    status: 'In progress',
  },
  {
    name: 'Secrets Manager',
    detail: 'EKS secret delivery pattern',
    status: 'Planned',
  },
]

export function About() {
  return (
    <section id="about" className="section-pad relative border-t border-white/[0.04]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="01 / About"
            title="Infrastructure engineered with intent."
            description="I focus on the layer beneath the application — the cloud foundation, the automation that provisions it and the guardrails that keep it secure."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          <Reveal>
            <div className="space-y-5 text-[15px] leading-[1.8] text-muted sm:text-[16px]">
              <p className="text-[17px] leading-relaxed text-slate-300 sm:text-lg">
                I&apos;m Hari Krishna R, an AWS Infrastructure &amp; DevOps Engineer focused on
                designing, provisioning and automating cloud infrastructure.
              </p>
              <p>
                My work sits at the intersection of cloud architecture, automation and security. I
                build highly available AWS environments with Terraform, route traffic through
                Application Load Balancers, use Auto Scaling Groups to maintain healthy capacity
                and containerize applications with Docker.
              </p>
              <p>
                On the delivery side, I create GitHub Actions pipelines with security checks built
                into the workflow: CodeQL, Gitleaks, Checkov and Trivy. I&apos;m actively developing
                my Kubernetes and GitOps practice with Amazon EKS and Argo CD, and I care about
                infrastructure that is reproducible, observable and straightforward for the next
                engineer to operate.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {focusCards.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="group rounded-xl border border-line/80 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-signal/25 hover:bg-white/[0.035]"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="grid size-8 place-items-center rounded-lg border border-signal/15 bg-signal/[0.06] text-signal transition-colors group-hover:border-signal/30">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <h3 className="text-[13px] font-semibold text-ice">{card.title}</h3>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-faint">{card.description}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="card-surface relative overflow-hidden p-6 sm:p-7">
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-signal/[0.07] blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                    Current focus
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/[0.08] px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-amber-300">
                    <span className="size-1 rounded-full bg-amber-400" aria-hidden="true" />
                    Active roadmap
                  </span>
                </div>

                <div className="mt-5 space-y-2.5">
                  {currentFocus.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-slate-200">{item.name}</p>
                        <p className="mt-0.5 truncate font-mono text-[8px] text-faint">
                          {item.detail}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-[8px] uppercase tracking-wider text-amber-300/80">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[11px] leading-relaxed text-faint">
                  Completion labels are used only where implementation and testing are done. The
                  rest is presented as work in progress.
                </p>

                <div className="my-6 h-px bg-gradient-to-r from-line via-line to-transparent" />

                <blockquote className="border-l border-signal/40 pl-4">
                  <p className="font-display text-sm leading-relaxed text-slate-300">
                    &ldquo;Infrastructure should be boring: predictable, observable and
                    repeatable.&rdquo;
                  </p>
                </blockquote>

                <a
                  href="#skills"
                  className="group mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-signal/80 transition-colors hover:text-signal"
                >
                  Explore the stack
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
