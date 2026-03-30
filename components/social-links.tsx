import { Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteLinks } from "@/lib/site-content"

const items = [
  {
    label: "LinkedIn",
    href: siteLinks.linkedin,
    Icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: siteLinks.github,
    Icon: Github,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${siteLinks.email}`,
    Icon: Mail,
    external: false,
  },
] as const

type SocialLinksProps = {
  size?: "sm" | "md"
  className?: string
}

export function SocialLinks({ size = "md", className }: SocialLinksProps) {
  const iconClass = size === "sm" ? "h-4 w-4" : "h-5 w-5"
  const pad = size === "sm" ? "p-1.5" : "p-2"

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {items.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={cn(
            pad,
            "rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
          aria-label={label}
        >
          <Icon className={iconClass} aria-hidden />
        </a>
      ))}
    </div>
  )
}
