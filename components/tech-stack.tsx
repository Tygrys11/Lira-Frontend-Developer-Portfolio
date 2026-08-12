'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  FileCode,
  Braces,
  Atom,
  Triangle,
  Palette,
  Wind,
  Sparkles,
  GitBranch,
  SquareTerminal,
  PenTool,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { SectionLabel } from './section-label'
import { GithubIcon } from './brand-icons'

type Tech = { name: string; icon: ComponentType<SVGProps<SVGSVGElement>> }

const groups: { title: string; items: Tech[] }[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: FileCode },
      { name: 'CSS3', icon: Palette },
      { name: 'JavaScript', icon: Braces },
      { name: 'TypeScript', icon: Code2 },
      { name: 'React', icon: Atom },
      { name: 'Next.js', icon: Triangle },
    ],
  },
  {
    title: 'Styling',
    items: [
      { name: 'Tailwind CSS', icon: Wind },
      { name: 'Sass', icon: Palette },
      { name: 'Framer Motion', icon: Sparkles },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GithubIcon },
      { name: 'VS Code', icon: SquareTerminal },
      { name: 'Figma', icon: PenTool },
    ],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel>02 / Technologies</SectionLabel>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          Tools I use to bring ideas to life.
        </motion.h2>

        <div className="mt-14 space-y-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {group.title}
              </h3>
              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="flex flex-wrap gap-3"
              >
                {group.items.map((t) => (
                  <motion.li key={t.name} variants={fadeUp}>
                    <div className="group flex items-center gap-2.5 rounded-xl border border-border bg-surface/50 px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-magenta/50 hover:shadow-[0_10px_30px_-12px_var(--magenta)]">
                      <t.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-magenta" />
                      <span className="text-sm font-medium text-foreground">
                        {t.name}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
