'use client'

import { motion } from 'framer-motion'
import { Code2, PenTool, Wand2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { SectionLabel } from './section-label'

const cards: {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}[] = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Building fast, accessible and maintainable interfaces with modern tooling and a component-first mindset.',
    tags: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    icon: PenTool,
    title: 'UI / UX Design',
    description:
      'Designing clean layouts and cohesive design systems that balance aesthetics with real usability.',
    tags: ['Figma', 'Design Systems', 'Wireframes', 'UX'],
  },
  {
    icon: Wand2,
    title: 'Creative Development',
    description:
      'Bringing interfaces to life with purposeful animations, micro-interactions and thoughtful visual details.',
    tags: ['Framer Motion', 'Animations', 'Interactions', 'Details'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel>05 / Skills</SectionLabel>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          More than just code.
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-magenta/40 hover:shadow-[0_24px_60px_-28px_rgba(255,43,214,0.4)]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple/15 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background text-magenta transition-colors group-hover:border-magenta/50">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
