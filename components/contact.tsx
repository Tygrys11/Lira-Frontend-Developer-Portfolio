"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Send, Sparkles } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { SectionLabel } from "./section-label";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden py-24 md:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-[15%] top-1/2 -z-10 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-magenta/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[10%] top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-purple/10 blur-[140px]" />

      {/* Decorative code */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-8 text-center font-mono text-sm text-foreground/[0.04] md:text-base"
      >
        {"<Let's build something great />"}
      </span>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {/* Section heading */}
          <motion.div variants={fadeUp} className="mb-14 text-center">
            <div className="flex justify-center">
              <SectionLabel>06 / Contact</SectionLabel>
            </div>

            <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Have an idea?
            </h2>
          </motion.div>

          {/* Main contact area */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            {/* LEFT SIDE */}
            <motion.div variants={fadeUp} className="pt-2">
              <div className="max-w-md">
                <div className="mb-8">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-magenta">
                  Get in touch
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
                    Let&apos;s create something{" "}
                    <span className="text-gradient">great together.</span>
                  </h3>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                  I&apos;m open to interesting projects, freelance work and collaborations.
                  </p>
                </div>

                {/* EMAIL - main single card */}
                <a
                  href="mailto:justyna.kucharska.developer@o2.pl"
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-surface/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-magenta/40 hover:bg-surface/70"
                >
                  {/* subtle glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-magenta/10 blur-3xl transition-all duration-500 group-hover:bg-magenta/20" />

                  <div className="relative flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-magenta/20 bg-magenta/5">
                      <Mail className="h-5 w-5 text-magenta" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Email
                      </p>

                      <p className="mt-1 truncate text-sm font-medium text-foreground">
                        justyna.kucharska.developer@o2.pl
                      </p>
                    </div>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-magenta" />
                  </div>
                </a>

                {/* SOCIALS */}
                <div className="mt-7 flex items-center gap-3">
                  <a
                    href="https://github.com/Tygrys11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-surface/60"
                  >
                    <GithubIcon className="h-[18px] w-[18px] text-muted-foreground transition-colors group-hover:text-magenta" />

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                        GitHub
                      </p>
                      <p className="text-xs text-foreground/80 transition-colors group-hover:text-foreground">
                        Tygrys11
                      </p>
                    </div>
                  </a>

                  <div className="h-8 w-px bg-border" />

                  <a
                    href="https://www.linkedin.com/in/justyna-kucharska-20018a428/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl px-3 py-2 transition-all hover:bg-surface/60"
                  >
                    <LinkedinIcon className="h-[18px] w-[18px] text-muted-foreground transition-colors group-hover:text-magenta" />

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                        LinkedIn
                      </p>
                      <p className="text-xs text-foreground/80 transition-colors group-hover:text-foreground">
                        Justyna
                      </p>
                    </div>
                  </a>
                </div>

                {/* small availability indicator */}
                <div className="mt-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-magenta" />
                  </span>
                  Available for new projects
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE - FORM */}
            <motion.div variants={fadeUp}>
              <div className="group relative">
                {/* Gradient border */}
                <div className="pointer-events-none absolute -inset-[1px] rounded-[1.6rem] bg-gradient-to-br from-magenta/50 via-purple/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-border/80 bg-background/90 p-6 backdrop-blur-xl sm:p-8">
                  {/* Form decorative glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-magenta/10 blur-[90px]" />
                  <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-purple/10 blur-[90px]" />

                  {/* Form header */}
                  <div className="relative mb-8 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-magenta">
                        <Sparkles className="h-3.5 w-3.5" />
                        Start a conversation
                      </div>

                      <h3 className="mt-2 text-2xl font-semibold text-foreground">
                        Tell me about your project.
                      </h3>
                    </div>

                    <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/50 sm:flex">
                      <Send className="h-4 w-4 text-magenta" />
                    </div>
                  </div>

                  <form
                    className="relative space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-name"
                          className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                        >
                          Name
                        </label>

                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          placeholder="Your name"
                          className="h-12 w-full rounded-xl border border-border bg-surface/30 px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 transition-all focus:border-magenta/50 focus:bg-surface/60 focus:ring-2 focus:ring-magenta/10"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="contact-email"
                          className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                        >
                          Email
                        </label>

                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          className="h-12 w-full rounded-xl border border-border bg-surface/30 px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 transition-all focus:border-magenta/50 focus:bg-surface/60 focus:ring-2 focus:ring-magenta/10"
                          required
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-subject"
                        className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        Subject
                      </label>

                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        placeholder="What's the project about?"
                        className="h-12 w-full rounded-xl border border-border bg-surface/30 px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 transition-all focus:border-magenta/50 focus:bg-surface/60 focus:ring-2 focus:ring-magenta/10"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        Message
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Tell me a little about it..."
                        className="w-full resize-none rounded-xl border border-border bg-surface/30 px-4 py-3 text-sm leading-relaxed text-foreground outline-none placeholder:text-muted-foreground/50 transition-all focus:border-magenta/50 focus:bg-surface/60 focus:ring-2 focus:ring-magenta/10"
                        required
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group/button relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-magenta px-6 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,0,204,0.25)]"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />

                      <span className="relative">Send message</span>

                      <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                    </button>

                    <p className="text-center font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60">
                      Usually replies within 24–48 hours
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
