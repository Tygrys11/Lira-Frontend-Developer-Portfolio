'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'

export function SectionLabel({ children }: { children: string }) {
  return (
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mb-4 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-magenta"
    >
      <span className="h-px w-8 bg-magenta/50" />
      {children}
    </motion.p>
  )
}
