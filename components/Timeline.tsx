'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/data/i18n'

interface TimelineSegment {
  id: string
  label: string
  start: number
  end: number
  color: string
}

const TIMELINE_START = 2023.17  // Mar 2023
const TIMELINE_END = 2026.33    // ~now Apr 2026

const segments: TimelineSegment[] = [
  {
    id: 'devoteam-toulouse',
    label: 'Devoteam · Toulouse',
    start: 2023.17,
    end: 2023.67,
    color: '#62D84E',
  },
  {
    id: 'devoteam-paris',
    label: 'Devoteam · Paris',
    start: 2023.67,
    end: 2024.67,
    color: '#4CAF50',
  },
  {
    id: 'eviden',
    label: 'Eviden',
    start: 2024.67,
    end: 2026.33,
    color: '#00A9A5',
  },
]

const yearMarkers = [2023, 2024, 2025, 2026]

function toPercent(value: number) {
  return ((value - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * 100
}

interface TimelineProps {
  onSegmentClick: (id: string) => void
}

export function Timeline({ onSegmentClick }: TimelineProps) {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 p-3 sm:p-4 rounded-xl border w-full overflow-hidden"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <p className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        {t.timeline_title}
      </p>

      {/* Segments */}
      <div className="relative h-7 rounded-md overflow-hidden" style={{ background: 'var(--sn-mid)' }}>
        {segments.map((seg, i) => (
          <motion.button
            key={seg.id}
            onClick={() => onSegmentClick(seg.id)}
            className="timeline-segment absolute h-full flex items-center justify-center overflow-hidden cursor-pointer"
            style={{
              left: `${toPercent(seg.start)}%`,
              width: `${toPercent(seg.end) - toPercent(seg.start)}%`,
              background: seg.color,
            }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ filter: 'brightness(1.15)' }}
            title={`${t.timeline_view} ${seg.label}`}
          >
            <span className="text-white text-[8px] sm:text-[10px] font-semibold truncate px-1 sm:px-2 leading-none">
              {seg.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Year markers */}
      <div className="relative mt-1 h-5 pr-5">
        {yearMarkers.map((year) => (
          <div
            key={year}
            className="absolute flex flex-col items-center"
            style={{
              left:
                year === 2023
                  ? '0%'
                  : year === 2026
                    ? '100%'
                    : `${toPercent(year)}%`,
              transform:
                year === 2023
                  ? 'translateX(0)'
                  : year === 2026
                    ? 'translateX(-100%)'
                    : 'translateX(-50%)',
            }}
          >
            <div className="w-px h-2 mt-0.5" style={{ background: 'var(--border)' }} />
            <span className="text-[10px] font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {year}
            </span>
          </div>
        ))}
        {/* <div
          className="absolute flex flex-col items-end"
          style={{ right: '-14px' }}
        >
          <div className="w-px h-2 mt-0.5" style={{ background: 'var(--sn-teal)' }} />
          <span className="text-[10px] font-mono mt-0.5 font-bold" style={{ color: 'var(--sn-teal)' }}>
            {t.timeline_now}
          </span>
        </div> */}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
        {segments.map((seg) => (
          <button
            key={seg.id}
            onClick={() => onSegmentClick(seg.id)}
            className="flex items-center gap-1.5 cursor-pointer group"
          >
            <div className="w-3 h-3 rounded-sm" style={{ background: seg.color }} />
            <span
              className="text-[10px] sm:text-[11px] font-medium transition-colors duration-150 group-hover:underline"
              style={{ color: 'var(--text-mid)' }}
            >
              {seg.label}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}
