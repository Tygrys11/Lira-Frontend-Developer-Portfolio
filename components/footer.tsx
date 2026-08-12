import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@lira.dev' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 md:flex-row md:justify-between md:px-8">
        <p className="text-sm text-muted-foreground">
          © 2026 Lira. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-magenta/60 hover:text-magenta"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          Designed &amp; built with code.
        </p>
      </div>
    </footer>
  )
}
