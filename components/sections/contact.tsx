"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { contactContent, siteLinks } from "@/lib/site-content"

const contactRows = [
  {
    label: "Email",
    display: siteLinks.email,
    href: `mailto:${siteLinks.email}`,
    external: false as const,
  },
  {
    label: "LinkedIn",
    display: siteLinks.linkedinDisplay,
    href: siteLinks.linkedin,
    external: true as const,
  },
  {
    label: "GitHub",
    display: siteLinks.githubDisplay,
    href: siteLinks.github,
    external: true as const,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeader
            eyebrow={contactContent.eyebrow}
            description={contactContent.intro}
            align="center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-12 max-w-lg"
        >
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_1px_0_rgba(0,0,0,0.03),0_24px_60px_-24px_rgba(15,23,42,0.14)]">
            <div className="border-b border-border/60 bg-gradient-to-br from-accent/8 via-transparent to-transparent px-6 py-5 sm:px-8 sm:py-6">
              <p className="text-sm font-medium text-foreground">
                Reach out directly
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Email, LinkedIn, or GitHub — whatever works best for you.
              </p>
            </div>
            <div className="p-2 sm:p-3">
              {contactRows.map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  {...(row.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center rounded-xl px-4 py-3 transition-colors hover:bg-accent/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {row.label}
                    </span>
                    <span className="truncate text-sm font-medium text-foreground">
                      {row.display}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="border-t border-border/60 p-4 sm:p-5">
              <Button
                asChild
                size="lg"
                className="h-11 w-full rounded-lg bg-accent text-accent-foreground shadow-md shadow-accent/15 hover:bg-accent/90"
              >
                <a
                  href={siteLinks.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
