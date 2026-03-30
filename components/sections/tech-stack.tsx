"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { techStackContent } from "@/lib/site-content"

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="scroll-mt-24 border-t border-border/50 bg-secondary/25 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeader
            eyebrow={techStackContent.eyebrow}
            description={techStackContent.intro}
            className="max-w-2xl"
          />
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {techStackContent.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.05 }}
              viewport={{ once: true, margin: "-40px" }}
              className="rounded-2xl border border-border/80 bg-card p-5 shadow-[0_1px_0_rgba(0,0,0,0.03),0_10px_36px_-16px_rgba(15,23,42,0.1)] transition hover:border-accent/25 sm:p-6"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {category.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-full border border-border/70 bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
