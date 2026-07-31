'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

interface CounterProps {
  /** Numeric part, e.g. 8 for "8+". */
  value: number
  suffix?: string
  className?: string
  duration?: number
}

/** Counts up once when scrolled into view. */
export default function Counter({ value, suffix = '', className = '', duration = 1100 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, value, duration])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
      {suffix}
    </span>
  )
}
