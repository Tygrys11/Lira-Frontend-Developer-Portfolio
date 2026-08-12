'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { fadeUp } from '@/lib/motion'
import { GithubIcon } from './brand-icons'

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  const featured = project.featured

  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl border border-border bg-surface/50 transition-all duration-300 hover:border-magenta/40 hover:shadow-[0_24px_60px_-24px_rgba(255,43,214,0.35)] ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2 lg:items-stretch' : ''
      }`}
    >
      {/* image */}
      <button
        onClick={onOpen}
        className="relative block w-full overflow-hidden text-left"
        aria-label={`View details for ${project.title}`}
      >
        <div className={`relative ${featured ? 'aspect-[16/11] lg:h-full' : 'aspect-[16/10]'}`}>
          <Image
            src={project.image || '/placeholder.svg'}
            alt={`${project.title} interface preview`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
          <div className="absolute inset-0 bg-magenta/0 transition-colors duration-300 group-hover:bg-magenta/10" />
          <span className="absolute left-5 top-5 font-mono text-sm font-semibold text-foreground/70">
            {project.number}
          </span>
        </div>
      </button>

      {/* content */}
      <div className="flex flex-col p-6 md:p-7">
        <p className="font-mono text-xs uppercase tracking-widest text-magenta">
          {project.tagline}
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
          <button
            onClick={onOpen}
            className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-magenta"
          >
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Live Demo
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}
