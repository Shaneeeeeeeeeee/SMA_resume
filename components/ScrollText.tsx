'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import type { MotionValue } from 'framer-motion'

interface ScrollTextProps {
  text: string
  className?: string
}

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.16, 1])
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  )
}

/** Statement copy that lights up word by word as the block crosses the viewport. */
export default function ScrollText({ text, className = '' }: ScrollTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.35'],
  })

  const words = text.split(' ')

  if (reduce) return <p className={className}>{text}</p>

  return (
    <p ref={ref} className={`relative flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}
