'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/motion'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="tracking-wide">AVAILABLE FOR WORK</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-muted-foreground/80 text-2xl font-medium sm:text-3xl">
              Hi, I&apos;m
            </span>
            <span className="text-gradient">Lira.</span>
            <span className="block text-foreground">Frontend Developer.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-pretty text-lg text-foreground/90"
          >
            I build modern digital experiences through code &amp; design.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground"
          >
            Frontend developer focused on creating clean, responsive and engaging
            web experiences.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-6px_var(--magenta)] transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_-4px_var(--magenta)] active:scale-95"
            >
              View My Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-magenta/60 hover:text-magenta"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-magenta/25 via-purple/15 to-cyan/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-surface/60 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-1.5 border-b border-border/70 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-magenta/70" />
              <span className="h-3 w-3 rounded-full bg-purple/70" />
              <span className="h-3 w-3 rounded-full bg-cyan/70" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                ~/lira/portfolio
              </span>
            </div>
            <Image
              src="/hero-visual.png"
              alt="Abstract futuristic developer interface with holographic code panels"
              width={720}
              height={720}
              priority
              className="h-auto w-full"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-10 hidden rounded-xl border border-border bg-background/80 px-3 py-2 font-mono text-xs text-cyan shadow-lg backdrop-blur sm:block"
          >
            {'const dev = "Lira"'}
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 bottom-12 hidden rounded-xl border border-border bg-background/80 px-3 py-2 font-mono text-xs text-magenta shadow-lg backdrop-blur sm:block"
          >
            {'<Ship />'}
          </motion.div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-magenta md:flex"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  )
}
