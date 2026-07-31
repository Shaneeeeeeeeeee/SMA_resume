'use client'

import Reveal from './Reveal'
import AnimatedHeading from './AnimatedHeading'

interface SectionHeadingProps {
  index: string
  title: string
  eyebrow?: string
}

export default function SectionHeading({ index, title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="relative mb-10 md:mb-14">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-1 -top-8 font-display text-[6.5rem] font-semibold leading-none tracking-tighter text-ink/[0.04] md:-top-10 md:text-[8rem]"
      >
        {index}
      </span>

      <Reveal>
        <div className="relative mb-4 flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.28em] text-accent">{index}</span>
          <span className="h-px w-10 bg-accent md:w-14" />
          {eyebrow ? (
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {eyebrow}
            </span>
          ) : null}
        </div>
      </Reveal>

      <AnimatedHeading
        text={title}
        className="relative font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-5xl"
      />
    </div>
  )
}
