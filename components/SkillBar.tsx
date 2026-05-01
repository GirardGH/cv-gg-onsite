'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Skill } from '@/data/cv'

interface SkillBarProps {
  skill: Skill
  index: number
}

export function SkillBar({ skill, index }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium" style={{ color: 'var(--sidebar-text)', opacity: 0.9 }}>
          {skill.name}
        </span>
        <motion.span
          className="text-xs font-mono font-medium"
          style={{ color: 'var(--sn-green)' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.08 + 0.4 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="skill-track">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, var(--sn-teal), var(--sn-green))`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 0.9,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  )
}
