'use client'

import { FiArrowLeft, FiDownload } from 'react-icons/fi'

/**
 * Screen-only controls above the resume document. Hidden in print via `no-print`
 * so the exported PDF contains nothing but the resume itself.
 */
export default function ResumeToolbar() {
  return (
    <div className="no-print mx-auto mb-6 flex max-w-[8.5in] flex-wrap items-center gap-3 px-4">
      <a
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-700 transition-colors hover:border-neutral-500 hover:text-black"
      >
        <FiArrowLeft className="text-xs" />
        Portfolio
      </a>

      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-full bg-[#f0b400] px-5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#1a140e] transition-transform hover:-translate-y-0.5"
      >
        <FiDownload className="text-xs" />
        Download PDF
      </button>

      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500">
        Print dialog: choose &ldquo;Save as PDF&rdquo;, margins Default, background graphics off
      </p>
    </div>
  )
}
