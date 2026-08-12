'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowUpRight, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { GithubIcon } from './brand-icons'

export function ProjectModal({
  project,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project | null
  index: number
  total: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const open = project !== null

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial="hidden"
          animate="show"
          exit="hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="absolute inset-0 bg-background/70 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.98 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="relative flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-border bg-popover shadow-[0_0_80px_-20px_rgba(155,77,255,0.4)] sm:max-h-[88svh] sm:rounded-3xl"
          >
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-magenta/20 blur-3xl" />

            {/* header */}
            <div className="relative flex items-start justify-between gap-4 border-b border-border/70 px-6 py-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-magenta">
                  Project {project.number}
                </p>
                <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.tagline}
                </p>
              </div>
              <button
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-magenta/60 hover:text-magenta"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* scrollable body */}
            <div className="relative overflow-y-auto px-6 py-6">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`${project.title} interface preview`}
                  fill
                  sizes="(min-width: 768px) 700px, 100vw"
                  className="object-cover"
                />
              </div>

              <section className="mt-7">
                <h4 className="text-lg font-semibold text-foreground">
                  About the project
                </h4>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {project.longDescription}
                </p>
              </section>

              <section className="mt-7">
                <h4 className="text-lg font-semibold text-foreground">
                  Key features
                </h4>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 rounded-xl border border-border bg-surface/50 px-3.5 py-2.5 text-sm text-foreground"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-magenta/15 text-magenta">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-7">
                <h4 className="text-lg font-semibold text-foreground">
                  Technologies
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-purple/30 bg-purple/10 px-3 py-1 font-mono text-xs text-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-surface/50 p-5">
                  <h5 className="font-mono text-xs uppercase tracking-widest text-magenta">
                    The challenge
                  </h5>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.challenge}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface/50 p-5">
                  <h5 className="font-mono text-xs uppercase tracking-widest text-cyan">
                    The solution
                  </h5>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
              </section>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-magenta px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-6px_var(--magenta)] transition-transform hover:scale-[1.03]"
                >
                  Live Demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-magenta/60"
                >
                  <GithubIcon className="h-4 w-4" />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* footer nav */}
            <div className="flex items-center justify-between border-t border-border/70 px-6 py-4">
              <span className="font-mono text-xs text-muted-foreground">
                Project {project.number} / {String(total).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={onPrev}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-magenta/60 hover:text-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                <button
                  onClick={onNext}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-magenta/60 hover:text-foreground"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
