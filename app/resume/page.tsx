import type { Metadata } from 'next'
import ResumeToolbar from '@/components/ResumeToolbar'
import { person, siteLabel, siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'One-page ATS-friendly resume for Sheena Mae Arquillo: full-stack developer and data analyst with production experience in ecommerce, internal business systems, Google Ads, and applied machine learning.',
  alternates: { canonical: '/resume' },
}

/* ------------------------------------------------------------------ *
 * Content mirrors Resume_Sheena_Mae_Arquillo.pdf. Budgeted to one
 * Letter page. Verify with scripts/check-resume-page.ps1 after editing.
 * ------------------------------------------------------------------ */

const summary =
  'Full-stack developer and data analyst delivering production web applications, internal business systems, and applied analytics. Builds complete solutions covering interface, backend services, and the reporting layer that measures results. Reduced operating costs at Tee Vision Printing while delivering internal systems that organize and analyze business data in real time. Leads projects from requirements gathering through user acceptance testing and deployment.'

const skills: { label: string; items: string }[] = [
  {
    label: 'Languages',
    items: 'Python, JavaScript, PHP, C#, SQL, HTML, CSS',
  },
  {
    label: 'Frameworks and Databases',
    items: 'React, Progressive Web Apps, Flask, REST APIs, PostgreSQL, Supabase, Chrome Extensions',
  },
  {
    label: 'Analytics and AI',
    items:
      'Predictive Analytics, Demand Forecasting (Prophet), Computer Vision (MobileNet, KNN), Dashboards, SQL Reporting',
  },
  {
    label: 'Growth and SEO',
    items: 'Google Ads, Conversion Tracking, Technical SEO, Microsoft Clarity, Performance Reporting',
  },
  {
    label: 'Delivery',
    items:
      'Project Leadership, Requirements Gathering, User Acceptance Testing, Process Mapping, UI/UX Design, Figma, Documentation',
  },
]

type Entry = {
  heading: string
  meta: string
  bullets: string[]
}

const experience: Entry[] = [
  {
    heading: 'Full-Stack Developer, Tee Vision Printing',
    meta: 'Philadelphia, PA, USA (Remote) | Apr 2026 - Present',
    bullets: [
      'Reduced operating costs by refactoring a fragmented codebase into maintainable structured code and consolidating hosting.',
      'Designed and delivered three internal systems in-house, including an employee portal PWA used by 15 staff for role-based access, time tracking, availability, and project management.',
      'Built an operations portal covering expenses, advertising, and SEO, plus CRM and authentication tooling.',
      'Developed Chrome extensions that consolidate finance data from external platforms into internal reporting.',
      'Maintain and improve the live company website, delivering user experience, performance, and production fixes.',
      'Manage Google Ads campaigns, conversion tracking, and funnel diagnostics, pairing campaign data with Microsoft Clarity.',
    ],
  },
  {
    heading: 'Freelance Full-Stack Developer and Project Lead, Self-Employed',
    meta: 'Philippines (Remote) | 2025 - Present',
    bullets: [
      'Deliver commissioned client systems end to end, covering scoping, development, UAT, and production deployment, including the DFB Smart Shop ecommerce platform.',
    ],
  },
  {
    heading: 'Product and Innovation Intern, Tech Executive Labs I.T. Solutions',
    meta: 'Batangas, Philippines (Hybrid) | Feb 2026 - May 2026',
    bullets: [
      'Led information architecture and digital publishing workflows for the Bookside marketplace product.',
      'Prototyped seller-facing analytics views in Figma covering sales funnel and product performance.',
    ],
  },
  {
    heading: 'Customer Service Representative, Alorica (Amazon account)',
    meta: 'Lipa City, Philippines | Jun 2025 - Aug 2025',
    bullets: [
      'Resolved high-volume customer issues against service level targets and earned performance commendations.',
    ],
  },
]

const projects: Entry[] = [
  {
    heading: 'DFB Smart Shop, Ecommerce Platform with Visual Search',
    meta: 'Client Commission · Project Lead | 2025 - 2026 | dfbsupply.store | Python, Flask, MobileNet, KNN, PostgreSQL',
    bullets: [
      'Led full delivery of catalog, custom-size quoting, inventory, administrative order handling, and live rider tracking.',
      'Implemented image-based product search reaching 88.9% accuracy and 0.90 macro F1 on a hold-out set.',
    ],
  },
  {
    heading: 'Automated Sales and Inventory, Pharmacy POS with Demand Forecasting',
    meta: 'University Capstone · Project Lead | 2025 - 2026 | phoebefrontend.vercel.app | Flask, Supabase PostgreSQL, Prophet',
    bullets: [
      'Developed point-of-sale, inventory, and expiry tracking across 690+ medicines with role-based portals.',
      'Integrated per-product Prophet demand forecasting, waste analytics, and stock recommendations.',
    ],
  },
]

/* ------------------------------------------------------------------ */

function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <article className="resume-entry">
      <h3 className="resume-role">{entry.heading}</h3>
      <p className="resume-meta">{entry.meta}</p>
      <ul className="resume-bullets">
        {entry.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}

export default function ResumePage() {
  return (
    <div className="resume-page">
      <ResumeToolbar />

      <main className="resume-doc" lang="en">
        {/* Contact block is plain text with URLs as their own anchor text, so a
            parser reads the same string whether or not it follows the href. */}
        <header>
          <h1 className="resume-name">{person.name}</h1>
          <p className="resume-title">Full-Stack Developer | Data Analyst</p>
          <p className="resume-contact">
            {person.location} | {person.availability} |{' '}
            <a href={`tel:${person.phone.replace(/\s+/g, '')}`}>{person.phone}</a> |{' '}
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </p>
          <p className="resume-contact">
            <a href={siteUrl}>{siteLabel}</a> |{' '}
            <a href={person.linkedin}>{person.linkedinLabel}</a> |{' '}
            <a href={person.github}>{person.githubLabel}</a>
          </p>
        </header>

        <section>
          <h2 className="resume-h2">Professional Summary</h2>
          <p className="resume-body">{summary}</p>
        </section>

        <section>
          <h2 className="resume-h2">Technical Skills</h2>
          <ul className="resume-skills">
            {skills.map((group) => (
              <li key={group.label}>
                <strong>{group.label}:</strong> {group.items}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="resume-h2">Professional Experience</h2>
          {experience.map((entry) => (
            <EntryBlock key={entry.heading} entry={entry} />
          ))}
        </section>

        <section>
          <h2 className="resume-h2">Key Projects</h2>
          {projects.map((entry) => (
            <EntryBlock key={entry.heading} entry={entry} />
          ))}
        </section>

        <section>
          <h2 className="resume-h2">Education</h2>
          <article className="resume-entry">
            <h3 className="resume-role">
              Bachelor of Science in Information Technology, Major in Business Analytics
            </h3>
            <p className="resume-meta">
              Batangas State University, Lipa City, Philippines | Graduated 2026
            </p>
            <ul className="resume-bullets">
              <li>
                Dean&apos;s List Scholar and Capstone Project Lead. Coursework in systems analysis,
                data analysis, and database systems.
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  )
}
