'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ParallaxImage from './ParallaxImage'

const strengths = [
  'Analytical thinker',
  'Adaptable',
  'Detail-oriented',
  'Effective communicator',
  'Passionate about automation',
]

function StrengthLine({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLLIElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const reduce = useReducedMotion()
  const reverse = index % 2 === 1
  const rawX = useTransform(scrollYProgress, [0, 1], reverse ? [70, -70] : [-70, 70])
  const x = reduce ? 0 : rawX

  return (
    <li ref={ref} className="overflow-hidden">
      <motion.span
        style={{ x }}
        className="block font-display text-4xl font-medium tracking-tight text-ink md:text-6xl"
      >
        {text}
        <span className="text-accent">.</span>
      </motion.span>
    </li>
  )
}

export default function Strengths() {
  return (
    <section id="strengths" className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-20 md:px-10 md:py-28">
        <SectionHeading index="07" title="Strengths" />

        <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <Reveal>
            <ParallaxImage
              src="/images/725ec9cb-976f-43cc-9284-982c3b5a25c6.jpg"
              alt="Sheena Mae Arquillo"
              aspect="aspect-[4/5]"
              caption="02: SHEENA"
            />
          </Reveal>

          <ul className="flex flex-col gap-y-4 md:gap-y-6">
            {strengths.map((strength, index) => (
              <StrengthLine key={strength} text={strength} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
