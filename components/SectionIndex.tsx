'use client'

import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', num: '00', label: 'Intro' },
  { id: 'experience', num: '01', label: 'Experience' },
  { id: 'projects', num: '02', label: 'Projects' },
  { id: 'skills', num: '03', label: 'Skills' },
  { id: 'about', num: '04', label: 'About' },
  { id: 'education', num: '05', label: 'Education' },
]

function SectionLinks({
  active,
  showLabelsOnHover,
}: {
  active: string
  showLabelsOnHover?: boolean
}) {
  return (
    <>
      {sections.map(({ id, num, label }) => {
        const isActive = active === id
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`${num} ${label}`}
            aria-current={isActive ? 'true' : undefined}
            title={label}
            className={`relative flex items-center justify-center rounded-full px-2.5 py-2 transition-all duration-300 md:justify-start md:px-2.5 md:py-2 ${
              isActive
                ? 'bg-accent/15 shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--accent)_38%,transparent)]'
                : 'hover:bg-ink/[0.04]'
            }`}
          >
            <span
              className={`font-mono text-[10px] tabular-nums tracking-wide transition-colors duration-300 ${
                isActive ? 'text-accent' : 'text-muted'
              }`}
            >
              {num}
            </span>
            {showLabelsOnHover && (
              <span className="flex max-w-0 items-center gap-2 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-w-[8.5rem] group-hover:pl-2 group-hover:opacity-100">
                <span className={`h-px w-3 shrink-0 ${isActive ? 'bg-accent' : 'bg-muted/60'}`} />
                <span
                  className={`whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] ${
                    isActive ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {label}
                </span>
              </span>
            )}
          </a>
        )
      })}
    </>
  )
}

export default function SectionIndex() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Mobile: horizontal glass buttons along the bottom */}
      <nav
        aria-label="Section navigation"
        className="fixed bottom-5 left-3 right-[4.25rem] z-40 md:hidden"
      >
        <div className="glass-panel flex items-center justify-between gap-0.5 rounded-xl p-1">
          <SectionLinks active={active} />
        </div>
      </nav>

      {/* Desktop: vertical glass rail on the right */}
      <nav
        aria-label="Section navigation"
        className="group fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:block xl:right-5"
      >
        <div className="glass-panel flex flex-col gap-0.5 rounded-xl p-1">
          <SectionLinks active={active} showLabelsOnHover />
        </div>
      </nav>
    </>
  )
}
