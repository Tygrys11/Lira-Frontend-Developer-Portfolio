'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { SectionLabel } from './section-label'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const contacts = [
  { icon: Mail, label: 'Email', value: 'hello@lira.dev', href: 'mailto:hello@lira.dev' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/lira', href: 'https://github.com' },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/lira',
    href: 'https://linkedin.com',
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      {/* stronger ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-magenta/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 -z-10 h-[24rem] w-[24rem] rounded-full bg-purple/15 blur-[120px]" />

      {/* decorative code fragment */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-8 text-center font-mono text-sm text-foreground/[0.05] md:text-base"
      >
        {"<Let's build something great />"}
      </span>

      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="flex justify-center">
            <SectionLabel>06 / Contact</SectionLabel>
          </div>

          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Have an idea?{' '}
            <span className="text-gradient">Let&apos;s build it.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            I&apos;m always open to interesting projects, collaborations and new
            opportunities.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-3"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface/50 p-5 transition-all hover:-translate-y-1 hover:border-magenta/40"
              >
                <c.icon className="h-5 w-5 text-magenta" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </span>
                <span className="text-sm text-foreground">{c.value}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
