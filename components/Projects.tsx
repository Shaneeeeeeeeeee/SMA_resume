'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionShell from './SectionShell'

type ProjectLink = {
  label: string
  href: string
  primary?: boolean
}

type Category =
  | 'all'
  | 'production'
  | 'commission'
  | 'collab'
  | 'design'
  | 'practice'
  | 'academic'

type Project = {
  id: string
  title: string
  tag: string
  category: Exclude<Category, 'all'>
  summary: string
  description: string[]
  stack: string[]
  links?: ProjectLink[]
  images?: { src: string; alt: string }[]
}

const filters: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'production', label: 'Production' },
  { id: 'design', label: 'Design' },
  { id: 'academic', label: 'Academic' },
  { id: 'practice', label: 'Practice' },
  { id: 'commission', label: 'Commissions' },
  { id: 'collab', label: 'Collab' },
]

const projects: Project[] = [
  {
    id: 'tvp-site',
    title: 'Tee Vision Printing Website',
    tag: 'Production · TVP',
    category: 'production',
    summary:
      'Live customer storefront: cleanup, UX, SEO, and Ads-informed improvements as part of the TVP team.',
    description: [
      'Live customer-facing site for Tee Vision Printing: custom apparel, quotes, and ecommerce. Contributed as part of the TVP engineering team.',
      'Ongoing production work: cleanup, UX and performance improvements, technical SEO, and Google Ads / Clarity-informed site changes.',
    ],
    stack: ['Full-Stack', 'SEO', 'Google Ads', 'Microsoft Clarity'],
    images: [
      {
        src: '/images/projects/tvp-site-home.png',
        alt: 'Tee Vision Printing live storefront homepage',
      },
    ],
    links: [{ label: 'Live site', href: 'https://www.teevisionprinting.com/', primary: true }],
  },
  {
    id: 'tvp-portal',
    title: 'TVP Employee Portal',
    tag: 'Production · TVP · PWA',
    category: 'production',
    summary:
      'Replaced a slow, disconnected clock-in tool for 15 staff: time tracking, availability, notes, and projects in one PWA.',
    description: [
      'The team was on a free clock-in tool that was slow and disconnected from everything else, so there was no way to see who was available or to run projects in the same place.',
      'React PWA for Tee Vision Printing, used by 15 staff, that folds it all into one app: clock in/out, payslip download by pay period, shared availability across the whole team, and notes anyone can post to anyone.',
      'Role-based demo (Owner, Admin, Employee) with owner/admin approval on calendar notes. Auth is wired to Supabase.',
    ],
    stack: ['React', 'PWA', 'Supabase', 'Role-Based Auth', 'Time Tracking'],
    images: [
      {
        src: '/images/projects/tvp-portal-clockin.png',
        alt: 'TVP Employee Portal: mobile clock in screen',
      },
      {
        src: '/images/projects/tvp-portal-calendar.png',
        alt: 'TVP Employee Portal: team calendar with notes',
      },
      {
        src: '/images/projects/tvp-portal-payslip.png',
        alt: 'TVP Employee Portal: payslip and hours by pay period',
      },
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://ositc2n8d74ljv.vercel.app/app/login',
        primary: true,
      },
    ],
  },
  {
    id: 'tvp-ops',
    title: 'TVP Ads & Ops Portal',
    tag: 'Production · TVP · Internal',
    category: 'production',
    summary:
      'Internal leads, Ads, and diagnostics portal: spend, funnel, traffic, and follow-up in one place.',
    description: [
      'Production internal tool for Tee Vision Printing: lead review, campaign performance, paid-funnel diagnostics, and traffic diagnostics tied to Google Ads and site tracking.',
      'Built for day-to-day ops (filters, exports, call import, error monitor). Gallery shows the real UI with live metric values blurred for privacy.',
    ],
    stack: ['Internal Tools', 'Google Ads', 'Analytics', 'Dashboards', 'Full-Stack'],
    images: [
      {
        src: '/images/projects/tvp-ops-overview.png',
        alt: 'TVP Ads & Ops Portal: performance overview (numbers blurred)',
      },
      {
        src: '/images/projects/tvp-ops-leads.png',
        alt: 'TVP Ads & Ops Portal: leads to review (numbers blurred)',
      },
      {
        src: '/images/projects/tvp-ops-diagnostics-ads.png',
        alt: 'TVP Ads & Ops Portal: paid funnel diagnostics (numbers blurred)',
      },
      {
        src: '/images/projects/tvp-ops-diagnostics-traffic.png',
        alt: 'TVP Ads & Ops Portal: traffic diagnostics (numbers blurred)',
      },
    ],
  },
  {
    id: 'bookside',
    title: 'Bookside',
    tag: 'Internship · TechEx',
    category: 'design',
    summary:
      'Marketplace UX for buyers and sellers: category shelves, seller analytics, and business insights.',
    description: [
      'Led information architecture and digital publishing workflows for Bookside during the Product & Innovation internship at Tech Executive Labs.',
      'Designed buyer category browsing (interactive bookshelf) and Seller Center business insights: sales funnel, product analytics, and performance dashboards.',
    ],
    stack: ['UI/UX', 'Figma', 'Information Architecture', 'Dashboards'],
    images: [
      {
        src: '/images/projects/bookside-categories.png',
        alt: 'Bookside browse book categories: interactive shelf UI',
      },
      {
        src: '/images/projects/bookside-insights-sales.png',
        alt: 'Bookside Seller Center: Business Insights Sales view',
      },
      {
        src: '/images/projects/bookside-insights-products.png',
        alt: 'Bookside Seller Center: Business Insights Products view',
      },
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://drafts-fawn.vercel.app/bookside-category-responsive.html',
        primary: true,
      },
      {
        label: 'Figma prototype',
        href: 'https://www.figma.com/design/ApCErXp27wkEYFxLEeoMUe/Bookside-PROJECT?node-id=568-241&t=xyA3RZGKG74jNnMl-1',
      },
    ],
  },
  {
    id: 'hrms',
    title: 'PeopleConnect HRMS',
    tag: 'Personal Project · PHP',
    category: 'practice',
    summary:
      'Full HR portal: attendance, leave, performance, activity reports, and admin analytics.',
    description: [
      'PeopleConnect HRMS: employee self-service dashboard plus admin tools for attendance monitoring, leave, performance, and reporting.',
      'Modules include clock in/out history, department attendance analytics, and filtered report views. Live demo available.',
    ],
    stack: ['PHP', 'HRMS', 'Attendance', 'Reports', 'Web Portal'],
    images: [
      {
        src: '/images/projects/hrms-landing.png',
        alt: 'PeopleConnect HRMS landing page',
      },
      {
        src: '/images/projects/hrms-dashboard.png',
        alt: 'PeopleConnect HRMS employee dashboard',
      },
      {
        src: '/images/projects/hrms-attendance.png',
        alt: 'PeopleConnect HRMS attendance records',
      },
      {
        src: '/images/projects/hrms-attendance-admin.png',
        alt: 'PeopleConnect HRMS attendance monitor for admins',
      },
      {
        src: '/images/projects/hrms-reports.png',
        alt: 'PeopleConnect HRMS reports and analytics',
      },
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://sma-projects.freedev.app/hrms/login.php',
        primary: true,
      },
    ],
  },
  {
    id: 'dfb',
    title: 'DFB Smart Shop',
    tag: 'Thesis Commission · Project Lead',
    category: 'commission',
    summary:
      'Glass & aluminum ecommerce: visual search (88.9% hold-out accuracy), quotes, inventory, and rider tracking.',
    description: [
      'Commissioned end-to-end system for DFB Glass & Aluminum Supply: shop catalog, custom-size quotes, and admin inventory/orders.',
      'AI visual search (MobileNet + KNN) hit 88.9% overall accuracy on a hold-out set (macro F1 0.90), with live rider location sharing for deliveries.',
    ],
    stack: ['Project Lead', 'Full-Stack', 'Applied AI', 'Visual Search', 'Maps'],
    images: [
      {
        src: '/images/projects/dfb-home.png',
        alt: 'DFB Smart Shop homepage: glass and aluminum ecommerce',
      },
      {
        src: '/images/projects/dfb-visual-search.png',
        alt: 'DFB Smart Shop visual search: find parts with a photo',
      },
      {
        src: '/images/projects/dfb-ai-accuracy.png',
        alt: 'DFB Smart Shop AI accuracy test for visual search',
      },
      {
        src: '/images/projects/dfb-rider-tracking.png',
        alt: 'DFB Smart Shop rider tracking map for deliveries',
      },
    ],
    links: [{ label: 'Live demo', href: 'https://dfbsupply.store/', primary: true }],
  },
  {
    id: 'thesis-sales',
    title: 'Automated Sales & Inventory',
    tag: 'Thesis · Project Lead',
    category: 'academic',
    summary:
      'Pharmacy POS and inventory across 690+ medicines: sales, expiry tracking, Prophet sales forecasting, and an AI assistant. Live demo online.',
    description: [
      'Led end-to-end delivery of Phoebe Drugstore: POS and sales flows, inventory and expiry tracking, staff accounts, and role-based manager and staff portals.',
      'Sales forecasting per product with Prophet and automatic model selection, reporting accuracy, MAPE, MAE, and RMSE against a recent actual-sales window so managers can see when demand runs below plan.',
      'Sustainability analytics scores waste, expiry risk, and slow turnover, with low-stock reorders, returns, and disposal tracking in one place.',
      'AI pharmacy assistant answers medicine, stock, and product-location questions across the catalog. Built on Flask with Supabase PostgreSQL, plus UAT and deployment documentation.',
    ],
    stack: [
      'Project Lead',
      'Flask',
      'PostgreSQL',
      'Supabase',
      'Prophet Forecasting',
      'Applied AI',
      'POS',
    ],
    images: [
      {
        src: '/images/projects/phoebe-home.png',
        alt: 'Automated Sales & Inventory (Phoebe) live demo',
      },
      {
        src: '/images/projects/phoebe-pos.png',
        alt: 'Phoebe Drugstore POS: product catalog with pricing and live stock levels',
      },
      {
        src: '/images/projects/phoebe-forecasting.png',
        alt: 'Phoebe Drugstore sales forecasting: Prophet model accuracy, MAPE, and predicted versus actual units',
      },
      {
        src: '/images/projects/phoebe-sustainability.png',
        alt: 'Phoebe Drugstore sustainability analytics: score breakdown for expiry risk, waste, and turnover',
      },
      {
        src: '/images/projects/phoebe-ai-assistant.png',
        alt: 'Phoebe Drugstore AI pharmacy assistant with smart search and inventory lookups',
      },
      {
        src: '/images/projects/phoebe-support.png',
        alt: 'Phoebe Drugstore support ticket with threaded manager and staff conversation',
      },
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://phoebefrontend.vercel.app/',
        primary: true,
      },
    ],
  },
  {
    id: 'save-me',
    title: 'SaveME',
    tag: 'School · Project Lead',
    category: 'academic',
    summary:
      'Personal finance goal setter: track money flow, savings, and reports. Led the school team from design through build.',
    description: [
      'Led a school project team on SaveME: landing page, dashboard, and reports & analytics for balances, savings goals, and money in/out.',
      'Designed in Figma and shipped a live PHP portal with charts, activity distribution, and downloadable reports.',
    ],
    stack: ['Project Lead', 'PHP', 'UI/UX', 'Figma', 'Dashboards'],
    images: [
      {
        src: '/images/projects/saveme-home.png',
        alt: 'SaveME landing page: personal finance goal setter',
      },
      {
        src: '/images/projects/saveme-dashboard.png',
        alt: 'SaveME dashboard with activity distribution chart',
      },
      {
        src: '/images/projects/saveme-reports.png',
        alt: 'SaveME reports and analytics with money in vs money out',
      },
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://sma-projects.freedev.app/SAVE_ME/pages/home.php',
        primary: true,
      },
      {
        label: 'Figma prototype',
        href: 'https://www.figma.com/design/YpFcZkrzabw3phCDMu83QF/SAVE_ME-PROJECT?node-id=677-21330&t=xyA3RZGKG74jNnMl-1',
      },
    ],
  },
  {
    id: 'doctors-dose',
    title: 'Doctors Dose',
    tag: 'Collab · Dubai',
    category: 'collab',
    summary: 'Doctor-formulated skincare product: admin interface and API support.',
    description: [
      'Collaborative side project with other developers on a Dubai-based doctor-formulated skincare product.',
      'Contributed to the administrative interface and API.',
    ],
    stack: ['Admin Interface', 'API', 'Full-Stack'],
    links: [
      { label: 'Live site', href: 'https://doctorsdose-co-uk.vercel.app/', primary: true },
    ],
  },
  {
    id: 'pharma',
    title: 'Pharma Dashboard',
    tag: 'School Project',
    category: 'practice',
    summary: 'Flask pharmaceutical sales dashboard with CSV upload and demo authentication.',
    description: [
      'School project dashboard for pharmaceutical sales and inventory data: upload a CSV and explore the demo with sample credentials.',
    ],
    stack: ['Flask', 'Python', 'Dashboards', 'CSV'],
    links: [
      {
        label: 'Live demo',
        href: 'https://flask-3zr9.onrender.com/',
        primary: true,
      },
    ],
  },
  {
    id: 'rgo-lipa',
    title: 'RGO Lipa Desktop App',
    tag: 'Software Application · C#',
    category: 'practice',
    summary:
      'Windows desktop application for RGO Lipa operations: admin accounts, orders, announcements, and feedback.',
    description: [
      'C# WinForms software application for campus organization workflows: admin login, accounts, orders, announcements, FAQ, and feedback modules.',
      'Source available on GitHub (personal account).',
    ],
    stack: ['C#', 'WinForms', 'Desktop App', '.NET'],
    links: [
      {
        label: 'GitHub repo',
        href: 'https://github.com/ShinArquillo/RGO_LIPA_FINALPROJECT',
        primary: true,
      },
    ],
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<Category>('all')
  const [index, setIndex] = useState(0)
  const [imageIndex, setImageIndex] = useState(0)

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  const active = filtered[Math.min(index, Math.max(filtered.length - 1, 0))] ?? filtered[0]

  useEffect(() => {
    setIndex(0)
    setImageIndex(0)
  }, [filter])

  useEffect(() => {
    setImageIndex(0)
  }, [index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (target && ['INPUT', 'TEXTAREA'].includes(target.tagName)) return
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        setIndex((i) => Math.min(i + 1, filtered.length - 1))
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setIndex((i) => Math.max(i - 1, 0))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [filtered.length])

  const go = (dir: -1 | 1) => {
    setIndex((i) => Math.min(Math.max(i + dir, 0), filtered.length - 1))
  }

  return (
    <SectionShell
      id="projects"
      index="02"
      title="Projects"
      eyebrow="Selected work"
      layout="stacked"
    >
      <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
        <p className="max-w-prose text-sm leading-relaxed text-muted md:text-[0.95rem]">
          Production systems, commissions, and academic builds with live demos where available.
        </p>
        <p className="font-mono text-[11px] tabular-nums tracking-[0.22em] text-accent">
          {filtered.length > 0
            ? `${String(index + 1).padStart(2, '0')} / ${String(filtered.length).padStart(2, '0')}`
            : '00 / 00'}
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Filter projects"
        className="mb-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {filters.map((f) => {
          const count =
            f.id === 'all' ? projects.length : projects.filter((p) => p.category === f.id).length
          const isActive = filter === f.id
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(f.id)}
              className={`relative shrink-0 rounded-full px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                isActive ? 'text-[#1a140e]' : 'border border-line text-muted hover:text-ink'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-accent shadow-[0_10px_26px_-12px_color-mix(in_srgb,var(--accent)_90%,transparent)]"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">
                {f.label}
                <span className={`ml-1.5 tabular-nums ${isActive ? 'opacity-65' : 'opacity-45'}`}>
                  {count}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-8% 0px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="card overflow-hidden"
      >
        <div className="grid lg:grid-cols-[minmax(0,16.5rem)_1fr]">
          {/* Browse list */}
          <div
            data-lenis-prevent
            className="flex max-h-[14rem] flex-row gap-2 overflow-x-auto border-b border-line p-3 lg:max-h-[38rem] lg:flex-col lg:gap-1 lg:overflow-y-auto lg:border-b-0 lg:border-r"
          >
            {filtered.map((project, i) => {
              const selected = i === index
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`group/item relative min-w-[11.5rem] shrink-0 overflow-hidden rounded-xl px-3.5 py-3 text-left transition-colors duration-300 lg:min-w-0 ${
                    selected ? 'text-[#1a140e]' : 'text-muted hover:text-ink'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="project-item-bg"
                      className="absolute inset-0 rounded-xl bg-accent"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span
                    className={`absolute inset-0 rounded-xl bg-ink/[0.04] opacity-0 transition-opacity duration-300 ${
                      selected ? '' : 'group-hover/item:opacity-100'
                    }`}
                  />
                  <span className="relative block">
                    <span
                      className={`block font-mono text-[9.5px] uppercase tracking-[0.14em] ${
                        selected ? 'opacity-70' : 'text-accent'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')} · {project.tag}
                    </span>
                    <span
                      className={`mt-1.5 block font-display text-[0.9rem] font-semibold leading-snug tracking-tight ${
                        selected ? 'text-[#1a140e]' : 'text-ink'
                      }`}
                    >
                      {project.title}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Detail stage */}
          <div className="relative flex min-h-[22rem] flex-col p-5 md:p-8 lg:min-h-[30rem]">
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="eyebrow">Gallery</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() => go(-1)}
                  disabled={index <= 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 hover:border-accent hover:bg-accent hover:text-[#1a140e] disabled:pointer-events-none disabled:opacity-25"
                >
                  <FiChevronLeft />
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() => go(1)}
                  disabled={index >= filtered.length - 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 hover:border-accent hover:bg-accent hover:text-[#1a140e] disabled:pointer-events-none disabled:opacity-25"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-1 flex-col"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent2">
                    {active.tag}
                  </p>
                  <h3 className="t-display mt-3 text-[1.7rem] font-semibold leading-[1.05] md:text-[2.35rem]">
                    {active.title}
                  </h3>
                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted md:text-base">
                    {active.summary}
                  </p>

                  {active.images && active.images.length > 0 && (
                    <div className="mt-7">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-ink/[0.04]">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={active.images[imageIndex]?.src}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={active.images[imageIndex].src}
                              alt={active.images[imageIndex].alt}
                              fill
                              quality={100}
                              priority
                              className="object-contain object-top"
                              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      {active.images.length > 1 && (
                        <div
                          data-lenis-prevent
                          className="mt-3 flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                          {active.images.map((img, i) => (
                            <button
                              key={img.src}
                              type="button"
                              onClick={() => setImageIndex(i)}
                              aria-label={`Show screenshot ${i + 1}`}
                              className={`relative h-14 w-[5.5rem] shrink-0 overflow-hidden rounded-lg border transition-all duration-300 ${
                                i === imageIndex
                                  ? 'border-accent shadow-[0_0_0_1px_var(--accent)]'
                                  : 'border-line opacity-60 hover:-translate-y-0.5 hover:opacity-100'
                              }`}
                            >
                              <Image
                                src={img.src}
                                alt=""
                                fill
                                quality={90}
                                className="object-cover object-top"
                                sizes="160px"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <ul className="mt-7 max-w-prose space-y-3 text-sm leading-relaxed text-muted">
                    {active.description.map((line, i) => (
                      <li key={i} className="grid grid-cols-[auto_1fr] gap-3.5">
                        <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {active.stack.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                    {active.links?.length ? (
                      active.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            link.primary ? 'btn-primary' : 'btn-ghost'
                          } group !px-5 !py-2.5 !text-[11px]`}
                        >
                          {link.label}
                          <FiArrowUpRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ))
                    ) : (
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        Screenshots only · internal tool
                      </p>
                    )}
                    <span className="ml-auto hidden font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted md:inline">
                      ← → to browse
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  )
}
