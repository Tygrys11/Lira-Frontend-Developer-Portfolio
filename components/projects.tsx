'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { SectionLabel } from './section-label'
import { ProjectCard } from './project-card'
import { ProjectModal } from './project-modal'

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const prev = () =>
    setOpenIndex((i) =>
      i === null ? i : (i - 1 + projects.length) % projects.length,
    )
  const next = () =>
    setOpenIndex((i) => (i === null ? i : (i + 1) % projects.length))

  return (
    <section id="projects" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel>03 / Selected Work</SectionLabel>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          Things I&apos;ve built.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground"
        >
          A selection of projects that combine development, design and problem
          solving.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={openIndex === null ? null : projects[openIndex]}
        index={openIndex ?? 0}
        total={projects.length}
        onClose={() => setOpenIndex(null)}
        onPrev={prev}
        onNext={next}
      />
    </section>
  )
}
