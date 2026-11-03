import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
  Send,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { site } from '../data/site'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail | typeof GitHubIcon
  label: string
  value: string
  href: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className="group flex items-center justify-between gap-4 rounded-xl border border-line/80 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-signal/25 hover:bg-white/[0.035]"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-signal/15 bg-signal/[0.055] text-signal transition-colors group-hover:border-signal/30">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">{label}</p>
          <p className="mt-0.5 truncate text-[13px] font-medium text-slate-200">{value}</p>
        </div>
      </div>
      <ArrowUpRight
        className="size-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
        aria-hidden="true"
      />
    </a>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = `Portfolio enquiry from ${name || 'a visitor'}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setFormStatus('Opening your email client…')
    window.location.href = mailto
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden border-t border-white/[0.04]">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-electric/[0.06] blur-[150px]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-night to-transparent" />
      </div>

      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="05 / Contact"
            title="Let's build something reliable."
            description="Have a cloud infrastructure role, a DevOps problem or a technical question? I'd be glad to hear about it."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[1fr_1.08fr] lg:gap-8">
          <Reveal>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 rounded-xl border border-line/80 bg-white/[0.02] p-1.5 pl-4">
                <Mail className="size-4 shrink-0 text-signal" aria-hidden="true" />
                <a
                  href={`mailto:${site.email}`}
                  className="min-w-0 flex-1 py-2.5 transition-colors hover:text-signal"
                >
                  <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                    Email
                  </span>
                  <span className="mt-0.5 block truncate text-[13px] font-medium text-slate-200">
                    {site.email}
                  </span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-signal/30 hover:text-ice"
                  aria-label={copied ? 'Email address copied' : 'Copy email address'}
                >
                  {copied ? (
                    <Check className="size-4 text-emerald-300" aria-hidden="true" />
                  ) : (
                    <Copy className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>
              <span className="sr-only" role="status" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>

              <ContactLink
                icon={LinkedInIcon}
                label="LinkedIn"
                value="Hari Krishna R"
                href={site.links.linkedin}
                external
              />
              <ContactLink
                icon={GitHubIcon}
                label="GitHub"
                value="Harikrishna2525"
                href={site.links.github}
                external
              />
              <ContactLink
                icon={Download}
                label="Resume"
                value="View or download PDF"
                href={site.links.resume}
                external
              />

              <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.015] p-4">
                <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                  Preferred topics
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
                  AWS infrastructure · Terraform · CI/CD automation · container security ·
                  Kubernetes and GitOps · reliability engineering
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card-surface p-5 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-[15px] font-semibold text-ice">
                  Start a conversation
                </h3>
                <span className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.14em] text-faint">
                  mailto
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.14em] text-slate-400">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-line bg-[#060c16] px-3 py-2.5 text-sm text-ice placeholder:text-[#7c8da6] focus:border-signal/40 focus:outline-none focus:ring-1 focus:ring-signal/30"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.14em] text-slate-400">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-line bg-[#060c16] px-3 py-2.5 text-sm text-ice placeholder:text-[#7c8da6] focus:border-signal/40 focus:outline-none focus:ring-1 focus:ring-signal/30"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.14em] text-slate-400">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What would you like to discuss?"
                  className="w-full resize-y rounded-lg border border-line bg-[#060c16] px-3 py-2.5 text-sm text-ice placeholder:text-[#7c8da6] focus:border-signal/40 focus:outline-none focus:ring-1 focus:ring-signal/30"
                />
              </label>

              <button type="submit" className="btn btn-primary group mt-4 w-full">
                Send message
                <Send
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              <p className="mt-3 text-center text-[10px] leading-relaxed text-faint">
                This form opens your default email client. No message data is stored by this site.
              </p>
              <p className="mt-1 text-center text-[10px] text-signal/70" role="status" aria-live="polite">
                {formStatus}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
