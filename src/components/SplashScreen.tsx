import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

const bootLines = [
  { label: 'cloud', value: 'topology mapped', delay: 0.6 },
  { label: 'automation', value: 'pipeline staged', delay: 1.05 },
  { label: 'security', value: 'guardrails loaded', delay: 1.5 },
]

function getStatus(progress: number) {
  if (progress < 22) return 'Initializing environment'
  if (progress < 48) return 'Resolving cloud topology'
  if (progress < 72) return 'Composing engineering stack'
  if (progress < 92) return 'Preparing secure delivery'
  return 'Interface ready'
}

function OrbitalMark({ reduced }: { reduced: boolean }) {
  return (
    <div className="relative grid size-[218px] place-items-center sm:size-[276px]">
      <motion.div
        className="absolute inset-0"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="size-full overflow-visible" aria-hidden="true">
          <circle
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke="rgb(148 163 184 / 0.16)"
            strokeWidth="0.8"
            strokeDasharray="2 8"
          />
          <circle cx="100" cy="6" r="7" fill="rgb(34 211 238 / 0.16)" />
          <circle cx="100" cy="6" r="2.5" fill="#22d3ee" />
          <circle cx="194" cy="100" r="1.6" fill="rgb(96 165 250 / 0.8)" />
          <circle cx="6" cy="100" r="1.1" fill="rgb(148 163 184 / 0.5)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-[13%]"
        animate={reduced ? undefined : { rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="size-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="splash-arc" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="0.55" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="96"
            fill="none"
            stroke="url(#splash-arc)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="92 510"
          />
          <circle
            cx="100"
            cy="100"
            r="82"
            fill="none"
            stroke="rgb(34 211 238 / 0.08)"
            strokeWidth="0.7"
            strokeDasharray="1 7"
          />
          <circle cx="196" cy="100" r="2" fill="#22d3ee" />
        </svg>
      </motion.div>

      <div
        className="absolute inset-[25%] rounded-full border border-white/[0.05]"
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-[29%] rounded-full border border-signal/10"
        animate={reduced ? undefined : { opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute inset-0"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-[7%] size-1 rounded-full bg-signal/60" />
        <span className="absolute bottom-[13%] left-[13%] size-1 rounded-full bg-electric/70" />
      </motion.div>

      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.72, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className="relative grid size-[84px] place-items-center overflow-hidden rounded-2xl border border-signal/30 bg-gradient-to-br from-[#0d1c30] to-[#050c16] shadow-[0_0_55px_rgba(34,211,238,0.2)] sm:size-[96px]"
      >
        <span
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.2),transparent_55%,rgba(34,211,238,0.14))]"
          aria-hidden="true"
        />
        <span className="relative font-display text-[26px] font-semibold tracking-tight text-ice sm:text-3xl">
          HK
        </span>
        <span
          className="absolute right-2 top-2 size-1.5 rounded-full bg-signal shadow-[0_0_12px_#22d3ee]"
          aria-hidden="true"
        />
        <motion.span
          className="absolute inset-x-0 h-7 bg-gradient-to-b from-transparent via-signal/20 to-transparent"
          animate={reduced ? undefined : { y: [-36, 96] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <span
          className="absolute inset-x-3 bottom-2 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent"
          aria-hidden="true"
        />
      </motion.div>

      <div className="absolute -left-2 top-1/2 hidden items-center gap-2 sm:flex">
        <span className="h-px w-5 bg-gradient-to-r from-transparent to-signal/30" />
        <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-faint">IaC</span>
      </div>
      <div className="absolute -right-2 top-1/3 hidden items-center gap-2 sm:flex">
        <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-faint">CI/CD</span>
        <span className="h-px w-5 bg-gradient-to-l from-transparent to-signal/30" />
      </div>
      <div className="absolute -right-1 bottom-1/4 hidden items-center gap-2 sm:flex">
        <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-faint">AWS</span>
        <span className="h-px w-5 bg-gradient-to-l from-transparent to-signal/30" />
      </div>
    </div>
  )
}

export function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const reducedMotion = useReducedMotion() ?? false

  useEffect(() => {
    if (!visible) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [visible])

  useEffect(() => {
    if (!visible) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVisible(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [visible])

  useEffect(() => {
    if (!visible) return

    const duration = reducedMotion ? 850 : 2200
    const startedAt = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const next = Math.min(100, Math.round(((now - startedAt) / duration) * 100))
      setProgress(next)
      if (next < 100) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reducedMotion, visible])

  useEffect(() => {
    if (!visible || progress < 100) return

    const hold = reducedMotion ? 200 : 500
    const timer = window.setTimeout(() => setVisible(false), hold)
    return () => window.clearTimeout(timer)
  }, [progress, reducedMotion, visible])

  const name = 'HARI KRISHNA R'
  const status = getStatus(progress)

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[200] overflow-hidden bg-night"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={
            reducedMotion
              ? { opacity: 0, transition: { duration: 0.3 } }
              : { y: '-100%', transition: { duration: 0.9, delay: 0.04, ease: [0.76, 0, 0.24, 1] } }
          }
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio intro animation"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="hero-grid absolute inset-0 opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#060a12_72%)]" />

            <motion.div
              className="absolute left-1/2 top-1/2 size-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.09] blur-[120px]"
              animate={reducedMotion ? undefined : { scale: [1, 1.18, 1], opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute left-[38%] top-[46%] size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.06] blur-[100px]"
              animate={reducedMotion ? undefined : { scale: [1.1, 1, 1.1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {!reducedMotion ? (
              <motion.div
                className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-signal/25 to-transparent"
                animate={{ x: ['-5vw', '105vw'] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'linear' }}
              />
            ) : null}

            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-night to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-night to-transparent" />
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <header className="flex items-start justify-between gap-4 p-5 sm:p-7">
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
              >
                <p className="font-mono text-[8px] font-medium uppercase tracking-[0.24em] text-signal/90">
                  HK / Portfolio boot
                </p>
                <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                  AWS · Terraform · Kubernetes
                </p>
              </motion.div>

              <motion.button
                type="button"
                onClick={() => setVisible(false)}
                initial={reducedMotion ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-300 transition-colors hover:border-signal/30 hover:text-ice sm:px-4 sm:py-2"
                autoFocus
              >
                Skip intro
                <ArrowRight
                  className="size-3 text-signal transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </motion.button>
            </header>

            <main className="flex flex-1 flex-col items-center justify-center px-5 pb-2">
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <OrbitalMark reduced={reducedMotion} />
              </motion.div>

              <h1
                className="mt-6 flex flex-wrap justify-center text-center font-display text-[1.62rem] font-semibold uppercase tracking-[0.16em] text-ice sm:mt-8 sm:text-4xl sm:tracking-[0.18em] lg:text-[2.7rem]"
                aria-label="Hari Krishna R"
              >
                {name.split('').map((character, index) => (
                  <motion.span
                    key={`${character}-${index}`}
                    aria-hidden="true"
                    className="inline-block"
                    initial={
                      reducedMotion
                        ? false
                        : { opacity: 0, y: 18, filter: 'blur(7px)' }
                    }
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.55,
                      delay: reducedMotion ? 0 : 0.55 + index * 0.032,
                      ease: EASE,
                    }}
                  >
                    {character === ' ' ? '\u00A0' : character}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.95, ease: EASE }}
                className="mt-2.5 text-center font-mono text-[8px] uppercase tracking-[0.24em] text-signal/80 sm:text-[10px] sm:tracking-[0.28em]"
              >
                AWS Infrastructure &amp; DevOps Engineer
              </motion.p>

              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: EASE }}
                className="mt-7 w-full max-w-[290px] sm:mt-8 sm:max-w-[320px]"
                aria-label={`Loading portfolio: ${progress}%`}
              >
                <div className="flex items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.16em]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={status}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18 }}
                      className="truncate text-slate-400"
                    >
                      {status}
                    </motion.span>
                  </AnimatePresence>
                  <span className="shrink-0 tabular-nums text-signal">
                    {String(progress).padStart(3, '0')}%
                  </span>
                </div>

                <div className="relative mt-2.5 h-[3px] overflow-hidden rounded-full bg-white/[0.08]">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-electric to-signal shadow-[0_0_12px_rgba(34,211,238,0.65)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'linear' }}
                  />
                  <div
                    className="absolute inset-0 bg-[repeating-linear-gradient(to_right,transparent_0_22px,rgba(6,10,18,0.8)_22px_23px)]"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-2 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.16em] text-faint">
                  <span>secure</span>
                  <span>automated</span>
                  <span>available</span>
                </div>
              </motion.div>
            </main>

            <footer className="flex items-center justify-between gap-4 px-5 pb-5 sm:px-7 sm:pb-6">
              <div className="hidden items-center gap-5 sm:flex">
                {bootLines.map((line) => (
                  <motion.span
                    key={line.label}
                    initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: line.delay, ease: EASE }}
                    className="inline-flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.14em]"
                  >
                    <span className="size-1 rounded-full bg-signal/70" aria-hidden="true" />
                    <span className="text-slate-500">{line.label}</span>
                    <span className="text-faint">{line.value}</span>
                  </motion.span>
                ))}
              </div>
              <motion.span
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="ml-auto font-mono text-[7px] uppercase tracking-[0.18em] text-faint"
              >
                01 / Engineering portfolio
              </motion.span>
            </footer>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-signal/80 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-signal/[0.06] to-transparent"
            aria-hidden="true"
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
