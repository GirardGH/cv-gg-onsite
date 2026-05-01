'use client'

import { motion } from 'framer-motion'
import type { ExperienceGroup as ExperienceGroupType } from '@/data/cv'

interface ExperienceGroupProps {
  group: ExperienceGroupType
  activeTag: string | null
  onTagClick: (tag: string) => void
  index: number
}

const badgeClass = {
  teal: 'esn-badge-teal',
  green: 'esn-badge-green',
}

export function ExperienceGroup({ group, activeTag, onTagClick, index }: ExperienceGroupProps) {
  const hasActiveMission =
    !activeTag || group.missions.some((m) => m.tags.includes(activeTag))

  return (
    <motion.section
      id={group.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: hasActiveMission ? 1 : 0.28,
        y: 0,
      }}
      transition={{
        opacity: { duration: 0.25 },
        y: { duration: 0.5, delay: index * 0.1 },
      }}
      className="mb-10 scroll-mt-6"
    >
      {/* ESN Header */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className={`${badgeClass[group.badge]} px-3 py-1 rounded-full text-sm font-bold shadow-sm`}>
          {group.esn}
        </span>
        <span className="text-sm font-medium" style={{ color: 'var(--text-mid)' }}>
          {group.location}
        </span>
        <span
          className="ml-auto text-xs font-mono px-2 py-0.5 rounded"
          style={{ background: 'var(--sn-mid)', color: 'var(--text-muted)' }}
        >
          {group.period}
        </span>
      </div>

      {/* Missions */}
      <div className="space-y-4 pl-2 border-l-2" style={{ borderColor: 'var(--border)' }}>
        {group.missions.map((mission, mIdx) => {
          const missionActive = !activeTag || mission.tags.includes(activeTag)
          return (
            <motion.div
              key={`${group.id}-${mIdx}`}
              animate={{ opacity: missionActive ? 1 : 0.25 }}
              transition={{ duration: 0.2 }}
              className="xp-card ml-3 relative"
            >
              {/* Left dot */}
              <div
                className="absolute -left-5 top-4 w-2.5 h-2.5 rounded-full border-2"
                style={{
                  background: missionActive ? 'var(--sn-green)' : 'var(--border)',
                  borderColor: 'var(--bg)',
                }}
              />

              {/* Mission header */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-bold" style={{ color: 'var(--heading-sub)' }}>
                    {mission.company}
                  </h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--sn-teal)' }}>
                    {mission.role}
                  </p>
                  {mission.project && (
                    <p className="text-xs mt-1 italic" style={{ color: 'var(--text-muted)' }}>
                      {mission.project}
                    </p>
                  )}
                </div>
                <span
                  className="text-xs font-mono shrink-0 px-2 py-0.5 rounded"
                  style={{
                    background: 'var(--sn-green-light)',
                    color: 'var(--sn-green)',
                  }}
                >
                  {mission.period}
                </span>
              </div>

              {/* Tasks */}
              <ul className="space-y-1.5 mb-4">
                {mission.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-mid)' }}>
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: 'var(--sn-accent)' }}
                    />
                    <span className="leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {mission.tags.map((tag) => (
                  <motion.button
                    key={tag}
                    onClick={() => onTagClick(tag)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`tag ${activeTag === tag ? 'active' : ''}`}
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
