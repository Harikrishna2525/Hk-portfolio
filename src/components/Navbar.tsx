import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTION_IDS = navItems.map((item) => item.href.replace('#', ''))

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-white/[0.06] bg-night/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative grid size-9 place-items-center rounded-lg border border-signal/25 bg-gradient-to-br from-electric/20 to-signal/10 transition-colors group-hover:border-signal/50">
            <span className="font-display text-[13px] font-semibold tracking-tight text-ice">
              HK
            </span>
            <span className="absolute -right-1 -top-1 size-2 rounded-full border-2 border-night bg-signal" />
          </span>
          <span className="hidden leading-tight min-[360px]:block">
            <span className="block text-[13px] font-semibold tracking-tight text-ice">
              Hari Krishna R
            </span>
            <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
              Cloud / DevOps
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-signal to-transparent"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary hidden !px-4 !py-2 text-xs sm:inline-flex"
          >
            <Download className="size-3.5" aria-hidden="true" />
            Resume
            <span className="sr-only">(opens in a new tab)</span>
          </a>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-signal/30 hover:text-ice lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-electric via-signal to-electric"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-40 h-[calc(100svh-72px)] overflow-y-auto border-b border-line bg-night shadow-2xl lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            aria-label="Mobile navigation"
          >
            <div className="container-page flex min-h-full flex-col py-5">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const id = item.href.replace('#', '')
                  const isActive = active === id
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'border-signal/25 bg-signal/[0.06] text-ice'
                          : 'border-transparent text-slate-400 hover:bg-white/[0.04] hover:text-ice'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                      <span
                        className={`size-1.5 rounded-full ${
                          isActive ? 'bg-signal' : 'bg-transparent'
                        }`}
                        aria-hidden="true"
                      />
                    </a>
                  )
                })}
                <a
                  href={site.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3 w-full"
                  onClick={() => setOpen(false)}
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download Resume
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>

              <div className="mt-auto border-t border-white/[0.06] pt-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-signal/80">
                  Hari Krishna R
                </p>
                <p className="mt-1.5 text-[11px] text-faint">
                  Cloud infrastructure · automation · security
                </p>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
