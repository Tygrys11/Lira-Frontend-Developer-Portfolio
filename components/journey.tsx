'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { SectionLabel } from './section-label'

const timeline = [
  {
    year: '2023',
    title: 'Started My Frontend Journey',
    description:
      'Fell in love with building for the web. Learned HTML, CSS and JavaScript from the ground up and shipped my first small projects.',
  },
  {
    year: '2024',
    title: 'Diving Into React & TypeScript',
    description:
      'Moved from vanilla JS into React and TypeScript, building component-driven UIs and learning how to structure real applications.',
  },
  {
    year: '2025',
    title: 'Freelance & Real Projects',
    description:
      'Started taking on freelance work and personal projects — landing pages, dashboards and web apps — with a focus on Next.js and clean design systems.',
  },
  {
    year: '2026',
    title: 'Frontend Developer',
    description:
      'Now crafting polished, production-ready interfaces with an emphasis on performance, accessibility and delightful micro-interactions.',
  },
]

export function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel>04 / Journey</SectionLabel>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          My journey so far.
        </motion.h2>

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14 max-w-3xl border-l border-border pl-8"
        >
          {timeline.map((item) => (
            <motion.li key={item.year} variants={fadeUp} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.35rem] top-1 grid h-4 w-4 place-items-center">
                <span className="h-3 w-3 rounded-full bg-magenta shadow-[0_0_14px_2px_var(--magenta)]" />
              </span>
              <span className="font-mono text-sm font-semibold text-magenta">
                {item.year}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
