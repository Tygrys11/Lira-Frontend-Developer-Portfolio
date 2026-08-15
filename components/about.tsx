"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { SectionLabel } from "./section-label";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 md:py-26"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        <div className="mt-12 grid items-center gap-12 sm:mt-14 md:gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-2xl"
          >
            <SectionLabel>01 / About</SectionLabel>

            <motion.h2
              variants={fadeUp}
              className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              A little about me.
            </motion.h2>

            <motion.div variants={stagger} className="mt-14">
              <motion.p
                variants={fadeUp}
                className="text-pretty text-2xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-3xl"
              >
                I turn ideas into{" "}
                <span className="text-gradient">digital experiences.</span>
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-pretty leading-7 text-muted-foreground"
              >
                I&apos;m a frontend developer focused on creating modern,
                responsive and engaging digital experiences. I work mainly with
                React and Next.js, combining clean, scalable code with
                thoughtful design, smooth animations and attention to detail.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-pretty leading-7 text-muted-foreground"
              >
                I enjoy turning ideas into polished interfaces that are fast,
                accessible and a genuine pleasure to use. I care about
                performance and UX, and I love building reusable component
                systems and micro-interactions that make interfaces feel alive.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-pretty leading-7 text-muted-foreground"
              >
                I also have experience working with WordPress, where I&apos;ve
                contributed to creating and developing the visual side of
                websites. This includes translating designs into responsive
                interfaces and making sure the final result is both polished and
                user-friendly.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-pretty leading-7 text-muted-foreground"
              >
                I&apos;m constantly learning, experimenting with new
                technologies and improving my skills — because the best way to
                grow as a developer is to keep building.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-primary/15 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted sm:aspect-[4/6] lg:aspect-[3/4]">
              <Image
                src="/about.png"
                alt="Portrait of the Lira"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 45vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
