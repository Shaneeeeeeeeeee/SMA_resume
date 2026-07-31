'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import AnimatedHeading from './AnimatedHeading'

interface SectionShellProps {
  id: string
  index: string
  title: string
  eyebrow?: string
  caption?: string
  /** split: sticky title rail beside content. stacked: title above full-width content. */
  layout?: 'split' | 'stacked'
  children: ReactNode
}

/**
 * Editorial section frame. On desktop the title block sticks while the content
 * scrolls past it, and a hairline rail fills to show progress through the section.
 */
export default function SectionShell({
  id,
  index,
  title,
  eyebrow,
  caption,
  layout = 'split',
  children,
}: SectionShellProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 90%'],
  })
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.35 })
  const numberOpacity = useTransform(scrollYProgress, [0, 0.25], [0.35, 1])

  const header = (
    <div className={layout === 'split' ? 'lg:sticky lg:top-28' : ''}>
      <div className="flex items-center gap-4">
        <motion.span
          style={{ opacity: numberOpacity }}
          className="font-mono text-[11px] tabular-nums tracking-[0.24em] text-accent"
        >
          {index}
        </motion.span>
        <span className="relative h-px flex-1 max-w-[7rem] bg-line lg:max-w-none">
          <motion.span
            style={{ scaleX: fill }}
            className="absolute inset-0 origin-left bg-accent"
          />
        </span>
      </div>

      <AnimatedHeading
        text={title}
        className={`t-section mt-5 ${layout === 'stacked' ? 't-section-xl' : ''}`}
      />

      {eyebrow ? <p className="eyebrow mt-5">{eyebrow}</p> : null}

      {caption ? (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-sm text-sm leading-relaxed text-muted"
        >
          {caption}
        </motion.p>
      ) : null}
    </div>
  )

  return (
    <section id={id} ref={ref} className="relative">
      <div className="section-pad">
        {layout === 'split' ? (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
            <header>{header}</header>
            <div className="min-w-0">{children}</div>
          </div>
        ) : (
          <>
            <header className="mb-12 md:mb-16">{header}</header>
            <div className="min-w-0">{children}</div>
          </>
        )}
      </div>
    </section>
  )
}
