'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-border/70 bg-background/70 shadow-[0_8px_40px_-12px_rgba(155,77,255,0.25)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <button
            onClick={() => go('home')}
            className="group flex items-center gap-2"
            aria-label="Go to top"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-surface font-mono text-sm font-bold text-magenta transition-colors group-hover:border-magenta/60">
              <img src="../profil.png" alt="profile" />
            </span>
            <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
            <span className="text-magenta">✦</span> Lira <span className="text-magenta">✦</span>
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                    active === l.id
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-magenta"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go('contact')}
              className="hidden items-center gap-1.5 rounded-full bg-magenta px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-4px_var(--magenta)] transition-transform hover:scale-[1.03] active:scale-95 sm:flex"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-foreground lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className={`w-full rounded-lg px-3 py-3 text-left text-base transition-colors ${
                      active === l.id
                        ? 'bg-secondary text-magenta'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => go('contact')}
                  className="flex w-full items-center justify-center gap-1.5 rounded-full bg-magenta px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-4px_var(--magenta)] transition-transform hover:scale-[1.03] active:scale-95 sm:flex"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
