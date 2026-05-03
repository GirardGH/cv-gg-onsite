'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Certification } from '@/data/cv'

const yearColors: Record<number, string> = {
  2026: '#3ABFB8',
  2025: '#00A9A5',
  2024: '#62D84E',
  2023: '#4CAF50',
}

interface CertBadgeProps {
  cert: Certification
  index: number
}

export function CertBadge({ cert, index }: CertBadgeProps) {
  const [open, setOpen] = useState(false)
  const color = yearColors[cert.year] ?? '#62D84E'

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="mb-2"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-start gap-2 group cursor-pointer"
        aria-expanded={open}
      >
        <div
          className="mt-0.5 w-2 h-2 rounded-full shrink-0 transition-transform duration-200 group-hover:scale-125"
          style={{ background: color, marginTop: '6px' }}
        />
        <div className="flex-1 min-w-0">
          <span
            className="text-xs font-semibold leading-snug transition-colors duration-150"
            style={{ color: open ? color : 'var(--sidebar-text)' }}
          >
            {cert.name}
          </span>
          <span
            className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded"
            style={{ background: `${color}22`, color }}
          >
            {cert.year}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 mt-0.5"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="var(--sidebar-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className="ml-4 mt-1.5 pl-3 py-2 pr-2 rounded-lg text-xs leading-relaxed"
              style={{
                borderLeft: `2px solid ${color}`,
                background: `${color}11`,
                color: 'var(--sidebar-muted)',
              }}
            >
              <p className="font-medium mb-1" style={{ color: 'var(--sidebar-text)', fontSize: '0.7rem' }}>
                {cert.fullName}
              </p>
              <p style={{ fontSize: '0.68rem' }}>{cert.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
