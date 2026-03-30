"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { aboutContent } from "@/lib/site-content"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeader
            eyebrow="About"
            description={aboutContent.intro}
            descriptionTone="foreground"
            className="max-w-3xl"
          />
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {aboutContent.highlights.map((item, index) => {
            const Icon = item.Icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -3 }}
                className="group flex h-full flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-[0_1px_0_rgba(0,0,0,0.03),0_12px_40px_-18px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:border-accent/25 hover:shadow-[0_12px_48px_-16px_rgba(15,23,42,0.16)] sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
