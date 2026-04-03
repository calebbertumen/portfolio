"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { ProjectEntry } from "@/lib/site-content"

function ProjectMediaPlaceholder({
  title,
  tagline,
}: Pick<ProjectEntry, "title" | "tagline">) {
  const initial = title.slice(0, 1).toUpperCase()
  return (
    <div className="relative flex min-h-[200px] flex-1 flex-col justify-between overflow-hidden bg-gradient-to-br from-muted via-background to-accent/8 p-6 sm:min-h-[240px] lg:min-h-full">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, oklch(0.65 0.12 240 / 0.2), transparent 45%),
            radial-gradient(circle at 80% 60%, oklch(0.65 0.12 240 / 0.12), transparent 40%)`,
        }}
        aria-hidden
      />
      <div className="relative flex items-center gap-2 rounded-lg border border-border/60 bg-card/90 px-3 py-2 shadow-sm backdrop-blur-sm">
        <span className="inline-flex h-2 w-2 rounded-full bg-red-400/80" />
        <span className="inline-flex h-2 w-2 rounded-full bg-amber-400/80" />
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className="ml-2 truncate text-[11px] text-muted-foreground">
          {title} · preview
        </span>
      </div>
      <div className="relative mt-6 flex flex-1 flex-col items-center justify-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-2xl font-bold text-accent shadow-inner">
          {initial}
        </div>
        <p className="mt-4 max-w-[14rem] text-sm font-medium text-foreground">
          {tagline}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Preview — swap in a product screenshot when you have one.
        </p>
      </div>
    </div>
  )
}

type ProjectCardProps = {
  project: ProjectEntry
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasImage = Boolean(project.imageSrc)
  const fit = project.imageFit ?? "cover"

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "group overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_1px_0_rgba(0,0,0,0.03),0_20px_50px_-24px_rgba(15,23,42,0.14)]",
        "transition-shadow duration-300 hover:shadow-[0_1px_0_rgba(0,0,0,0.04),0_28px_60px_-20px_rgba(15,23,42,0.18)]",
      )}
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch">
        <div
          className={cn(
            "relative min-h-[200px] overflow-hidden border-b border-border/60 lg:min-h-[320px] lg:border-b-0 lg:border-r",
            hasImage && "min-h-[220px] sm:min-h-[260px]",
          )}
        >
          {hasImage && project.imageSrc ? (
            <div className="absolute inset-0">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt ?? `${project.title} screenshot`}
                fill
                className={cn(
                  "bg-muted/40 transition-transform duration-500 group-hover:scale-[1.01]",
                  fit === "contain"
                    ? "object-contain object-center p-4 sm:p-6"
                    : "object-cover object-top",
                )}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent" />
            </div>
          ) : (
            <ProjectMediaPlaceholder
              title={project.title}
              tagline={project.tagline}
            />
          )}
        </div>

        <div className="flex flex-col p-6 sm:p-8 lg:py-9">
          <header className="space-y-1">
            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {project.title}
            </h3>
            {project.titleBadge ? (
              <p className="text-sm text-muted-foreground">
                <span aria-hidden className="mr-1.5">
                  ➡️
                </span>
                <span className="font-medium text-foreground/90">
                  {project.titleBadge}
                </span>
              </p>
            ) : null}
            <p className="text-sm font-medium text-accent">{project.tagline}</p>
          </header>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {project.description}
          </p>

          {project.technicalDepth ? (
            <p className="mt-4 border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-foreground/85 italic">
              {project.technicalDepth}
            </p>
          ) : null}

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
              Highlights
            </p>
            <ul className="mt-2 space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.aiFeatures && project.aiFeatures.length > 0 ? (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                AI features
              </p>
              <ul className="mt-2 space-y-2">
                {project.aiFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.howItWorks && project.howItWorks.length > 0 ? (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                How it works
              </p>
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-muted-foreground marker:text-accent">
                {project.howItWorks.map((step, i) => (
                  <li key={i} className="pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
              Stack
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-full border border-border/70 bg-background/90 px-2.5 py-0.5 text-xs font-medium text-foreground shadow-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="sm"
              className="rounded-lg border-0 bg-accent text-accent-foreground shadow-md shadow-accent/25 transition hover:bg-accent/90"
            >
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                {project.projectLinkLabel}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
