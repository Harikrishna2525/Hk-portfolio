import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react'
import { navItems, site } from '../data/site'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#050910]">
      <div className="container-page py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr_0.6fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="relative grid size-9 place-items-center rounded-lg border border-signal/25 bg-gradient-to-br from-electric/20 to-signal/10">
                <span className="font-display text-[13px] font-semibold text-ice">HK</span>
                <span className="absolute -right-1 -top-1 size-2 rounded-full border-2 border-[#050910] bg-signal" />
              </span>
              <span>
                <span className="block text-[13px] font-semibold text-ice">Hari Krishna R</span>
                <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
                  AWS Infrastructure &amp; DevOps
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-[11px] leading-relaxed text-faint">
              Secure, automated and highly available cloud infrastructure — built with Terraform,
              containerized with Docker and delivered through security-aware CI/CD.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-signal/30 hover:text-ice"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <GitHubIcon className="size-3.5" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-signal/30 hover:text-ice"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <LinkedInIcon className="size-3.5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-signal/30 hover:text-ice"
                aria-label="Send an email"
              >
                <Mail className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">Navigate</h2>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[12px] text-slate-400 transition-colors hover:text-signal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">Connect</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] text-slate-400 transition-colors hover:text-signal"
                >
                  LinkedIn
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] text-slate-400 transition-colors hover:text-signal"
                >
                  GitHub
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={site.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] text-slate-400 transition-colors hover:text-signal"
                >
                  Resume
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-5 sm:flex-row sm:items-center">
          <p className="text-[10px] text-faint">
            © {currentYear} Hari Krishna R. Built with React, Vite, Tailwind CSS &amp; Framer Motion.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-faint transition-colors hover:text-signal"
          >
            Back to top
            <span className="grid size-6 place-items-center rounded border border-white/10 bg-white/[0.03] transition-colors group-hover:border-signal/30">
              <ArrowUp className="size-3" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
