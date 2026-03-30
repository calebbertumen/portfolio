"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { howIBuildContent } from "@/lib/site-content"

export function HowIBuildSection() {
  return (
    <section id="how-i-build" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeader
            eyebrow={howIBuildContent.eyebrow}
            description={howIBuildContent.intro}
            className="max-w-2xl"
          />
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {howIBuildContent.cards.map((item, index) => {
            const Icon = item.Icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -3 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-card to-secondary/20 p-6 shadow-[0_1px_0_rgba(0,0,0,0.03),0_16px_48px_-20px_rgba(15,23,42,0.14)] transition-all duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/35 before:to-transparent hover:border-accent/30 hover:shadow-[0_20px_56px_-18px_rgba(15,23,42,0.18)] sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/12 text-accent ring-1 ring-accent/15 transition group-hover:bg-accent/16">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
