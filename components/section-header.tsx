import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow: string
  title?: string
  description?: string
  /** Use foreground for section leads (e.g. About). */
  descriptionTone?: "muted" | "foreground"
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  descriptionTone = "muted",
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      {title ? (
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-3xl text-base leading-relaxed md:text-lg",
            descriptionTone === "foreground"
              ? "text-foreground"
              : "text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
