"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroVisual } from "@/components/hero-visual"
import { SocialLinks } from "@/components/social-links"
import { heroContent, siteLinks } from "@/lib/site-content"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center pt-24 pb-16 sm:pt-28 sm:pb-20"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08] xl:text-6xl">
              {heroContent.name}
            </h1>
            <p className="mt-3 text-sm font-medium text-accent sm:text-[15px]">
              {heroContent.focusLine}
            </p>
            <p className="mt-5 max-w-xl text-lg font-medium leading-snug text-foreground sm:text-xl">
              {heroContent.subtitle}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              {heroContent.description}
            </p>
            <p className="mt-4 max-w-xl border-l-2 border-accent/35 pl-4 text-sm leading-relaxed text-foreground/90 sm:text-[15px]">
              {heroContent.systemsHighlight}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                asChild
                size="lg"
                className="group h-11 rounded-lg bg-accent px-6 text-accent-foreground shadow-md shadow-accent/20 transition hover:bg-accent/90"
              >
                <a href="#projects" className="inline-flex items-center gap-2">
                  View Projects
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-lg border-border/80 bg-background/80 shadow-sm backdrop-blur-sm transition hover:border-accent/40 hover:bg-accent/5"
              >
                <a
                  href={siteLinks.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-border/60 pt-8">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Connect
              </span>
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          >
            <HeroVisual className="relative" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
