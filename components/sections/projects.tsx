"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { projects, projectsSection } from "@/lib/site-content"

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-border/50 bg-secondary/25 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeader
            eyebrow={projectsSection.eyebrow}
            description={projectsSection.intro}
            className="max-w-2xl"
          />
        </motion.div>

        <div className="mt-12 flex flex-col gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
