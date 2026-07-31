'use client'

import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Magnetic from './Magnetic'
import ParallaxImage from './ParallaxImage'
import ScrollText from './ScrollText'
import SectionShell from './SectionShell'

const ease = [0.22, 1, 0.36, 1] as const

const facts = [
  { k: 'Base', v: 'Batangas, Philippines' },
  { k: 'Looking for', v: 'Full-stack or data analyst, remote or hybrid' },
]

export default function Background() {
  return (
    <SectionShell id="about" index="04" title="About" eyebrow="Profile" layout="stacked">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
        <div>
          <ScrollText
            text="I like owning a build from scope through UAT, not just a single layer. That means shipping the interface, the service behind it, and the reporting that proves it worked."
            className="t-lede max-w-[24ch] text-ink md:max-w-[26ch] md:text-[1.75rem]"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, ease }}
            className="mt-8 max-w-prose text-sm leading-relaxed text-muted md:text-base"
          >
            Outside Tee Vision Printing I lead thesis and capstone commissions in the Philippines
            through production deployment, including DFB Smart Shop and Automated Sales and Inventory.
          </motion.p>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {facts.map((f, i) => (
              <motion.div
                key={f.k}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-paper-raised/80 p-5 transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--accent)_7%,var(--bg-solid))]"
              >
                <dt className="label">{f.k}</dt>
                <dd className="mt-2 text-sm text-ink">{f.v}</dd>
              </motion.div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Magnetic strength={8}>
              <a href="mailto:arquillosheenamae@gmail.com" className="btn-primary group">
                Get in touch
                <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={8}>
              <a
                href="https://www.linkedin.com/in/sheena-mae-arquillo-05b169399"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost group"
              >
                LinkedIn
                <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative z-10">
            <ParallaxImage
              src="/images/37121718-8e92-44c1-876b-cc52e0d7cfff.jpg"
              alt="Sheena Mae Arquillo"
              aspect="aspect-[4/5]"
              caption="01"
            />
          </div>
          <div className="relative z-20 -mt-16 ml-auto w-[62%] sm:-mt-20">
            <ParallaxImage
              src="/images/725ec9cb-976f-43cc-9284-982c3b5a25c6.jpg"
              alt="Sheena Mae Arquillo"
              aspect="aspect-[3/4]"
              caption="02"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_38%,transparent),transparent_70%)] blur-2xl md:h-40 md:w-40"
          />
        </motion.div>
      </div>
    </SectionShell>
  )
}
