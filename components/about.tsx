'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { SectionLabel } from './section-label'

const stats = [
  { value: '3+', label: 'Years Learning & Building' },
  { value: '20+', label: 'Projects' },
  { value: '10+', label: 'Technologies' },
  { value: '100%', label: 'Passion for Development' },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel>01 / About</SectionLabel>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          A little about me.
        </motion.h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.p
              variants={fadeUp}
              className="text-pretty text-2xl font-semibold leading-snug text-foreground sm:text-3xl"
            >
              I turn ideas into{' '}
              <span className="text-gradient">digital experiences.</span>
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 leading-relaxed text-muted-foreground"
            >
              I&apos;m a frontend developer who cares deeply about the details.
              For me, great software lives at the intersection of clean code and
              thoughtful design — interfaces that are fast, accessible and a
              genuine pleasure to use.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 leading-relaxed text-muted-foreground"
            >
              My focus is building modern, responsive UIs with React and Next.js,
              always with an eye on performance and UX. I love crafting
              component systems that scale and micro-interactions that make an
              interface feel alive.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 leading-relaxed text-muted-foreground"
            >
              I&apos;m endlessly curious and always learning new technologies —
              because the best way to grow as a developer is to keep building.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-magenta/40"
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-magenta/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="text-gradient text-4xl font-bold tracking-tight sm:text-5xl">
                  {s.value}
                </div>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
