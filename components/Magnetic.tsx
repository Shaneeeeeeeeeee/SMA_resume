'use client'

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface MagneticProps {
  children: ReactNode
  className?: string
  /** Max pixel offset toward the cursor. */
  strength?: number
}

/** Wraps an element so it leans toward the pointer, then springs back. */
export default function Magnetic({ children, className = '', strength = 10 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 })

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={`inline-flex ${className}`}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        const el = ref.current
        if (!el || e.pointerType !== 'mouse') return
        const r = el.getBoundingClientRect()
        x.set(((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * strength)
        y.set(((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * strength)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
