'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

interface ParallaxProps {
  children: ReactNode
  /** Total vertical travel in px across the element's scroll pass. */
  speed?: number
  className?: string
}

/** Continuous scroll-linked vertical drift: keeps content feeling alive. */
export default function Parallax({ children, speed = 40, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], [speed, -speed])
  const y = reduce ? 0 : rawY

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
