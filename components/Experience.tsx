'use client'

import { motion } from 'framer-motion'
import SectionShell from './SectionShell'

interface Role {
  role: string
  company: string
  current?: boolean
  meta: string
  period: string
  location: string
  bullets: string[]
  skills: string[]
}

const experiences: Role[] = [
  {
    role: 'Full-Stack Developer',
    company: 'Tee Vision Printing (TVP)',
    current: true,
    meta: 'Frontend · Backend · Internal Tools · Remote',
    period: 'Apr 2026 to Present',
    location: 'Philadelphia, PA · Remote',
    bullets: [
      'Cut operating costs by 60% by refactoring a fragmented codebase into structured, maintainable code and consolidating hosting.',
      'Replaced a slow, disconnected clock-in tool with the TVP Employee Portal: one React PWA used by 15 staff for role-based login, time tracking, shared availability, notes to anyone on the team, and project management.',
      'Designed and shipped two more internal systems, an expenses / Ads / SEO operations portal and CRM + authentication tooling, for three TVP systems in total, all built in-house.',
      'Built these tools to organize and analyze business data in real time, so the team can decide from live numbers instead of manual collation.',
      'Maintain and improve the live Tee Vision Printing website (teevisionprinting.com): cleanup, UX, performance, and production fixes as part of the engineering team.',
      'Google Ads work: conversion tracking, campaign performance review, and pairing Ads data with Microsoft Clarity to guide site improvements.',
      'Supported technical SEO (checks and indexing) and prepared stakeholder reports from product and campaign data.',
    ],
    skills: [
      'Google Ads',
      'Frontend',
      'Backend',
      'Internal Tools',
      'Cost Optimization',
      'Microsoft Clarity',
      'SEO',
    ],
  },
  {
    role: 'Freelance Systems Developer',
    company: 'Thesis & Capstone Commissions',
    meta: 'Project Lead · Full-Stack · Philippines',
    period: 'Ongoing',
    location: 'Philippines',
    bullets: [
      'Lead commissioned thesis and capstone systems end to end: scoping, build, UAT, and production deployment.',
      'Delivered DFB Smart Shop (ecommerce with AI visual search) and Automated Sales and Inventory (pharmacy POS with demand forecasting), both live in production.',
    ],
    skills: ['Project Lead', 'Frontend', 'Backend', 'UAT', 'Documentation'],
  },
  {
    role: 'Product & Innovation Intern',
    company: 'Tech Executive Labs I.T. Solutions',
    meta: 'Internship · Hybrid',
    period: 'Feb to May 2026',
    location: 'Batangas, Calabarzon',
    bullets: [
      'Led website information architecture and digital publishing workflows for the Bookside product.',
      'Designed UI/UX prototypes in Figma and translated business requirements into clearer product direction.',
      'Researched implementation options and improved platform performance from usage and feedback.',
    ],
    skills: ['IT Business Analysis', 'UI/UX', 'Figma', 'Process Optimization'],
  },
  {
    role: 'Customer Service Representative',
    company: 'Amazon / Alorica (SM Lipa City)',
    meta: 'Full-time',
    period: 'Jun to Aug 2025',
    location: 'Lipa, Calabarzon',
    bullets: [
      'Resolved high-volume customer issues under SLA pressure and earned team commendations plus performance incentives.',
    ],
    skills: ['CRM', 'Communication', 'Customer Support'],
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Experience() {
  return (
    <SectionShell
      id="experience"
      index="01"
      title="Experience"
      eyebrow="Career"
      caption="Four roles across product engineering, growth, and delivery. Currently shipping production work for a US apparel brand."
    >
      <div className="-mx-4 md:-mx-6">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
            transition={{ duration: 0.7, delay: index * 0.06, ease }}
            className="group relative rounded-2xl px-4 py-9 transition-colors duration-500 hover:bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] md:px-6 md:py-11"
          >
            {/* hairline divider that turns gold on hover */}
            <span className="absolute inset-x-4 top-0 h-px bg-line md:inset-x-6" />
            <span className="absolute inset-x-4 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100 md:inset-x-6" />

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-[10px] tabular-nums tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              {exp.current && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-accent">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  Current
                </span>
              )}
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {exp.period}
              </span>
              <span className="text-line">/</span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {exp.location}
              </span>
            </div>

            <div className="mt-5 grid gap-x-10 gap-y-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
              <div>
                <h3 className="t-display text-[1.75rem] font-semibold leading-[1.05] transition-colors duration-300 group-hover:text-accent md:text-[2.15rem]">
                  {exp.role}
                </h3>
                <p className="mt-2 text-base text-muted">{exp.company}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-accent2">
                  {exp.meta}
                </p>
              </div>

              <div>
                <ul className="space-y-3">
                  {exp.bullets.map((item, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto_1fr] gap-3.5 text-sm leading-relaxed text-muted md:text-[0.95rem]"
                    >
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <li key={skill} className="chip">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
