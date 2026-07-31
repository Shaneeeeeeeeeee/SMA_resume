'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from 'framer-motion'

interface MarqueeProps {
  items: string[]
  baseVelocity?: number
  className?: string
}

function wrap(min: number, max: number, v: number) {
  const range = max - min
  const mod = (((v - min) % range) + range) % range
  return mod + min
}

export default function Marquee({ items, baseVelocity = 1.4, className = '' }: MarqueeProps) {
  const reduce = useReducedMotion()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 60, stiffness: 280 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1.4], { clamp: true })

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)
  const directionFactor = useRef(1)

  useAnimationFrame((_t, delta) => {
    if (reduce) return
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) directionFactor.current = -1
    else if (velocityFactor.get() > 0) directionFactor.current = 1

    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="flex overflow-hidden">
      <motion.div
        style={{ x: reduce ? '0%' : x }}
        className={`flex shrink-0 items-center whitespace-nowrap ${className}`}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-6 px-4 md:gap-8 md:px-6">
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" aria-hidden />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
