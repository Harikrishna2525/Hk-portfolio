interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div
        className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
        aria-hidden="true"
      >
        <span className="h-px w-8 bg-gradient-to-r from-signal/10 to-signal/80" />
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-signal">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-signal/10 to-signal/80" />
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-ice sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">{description}</p>
      ) : null}
    </div>
  )
}
