'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  })

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent" aria-hidden>
      <motion.div
        style={{ scaleX }}
        className="h-full origin-left bg-gradient-to-r from-accent2 via-accent to-accent shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_65%,transparent)]"
      />
    </div>
  )
}
