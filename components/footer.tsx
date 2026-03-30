"use client"

import { SocialLinks } from "@/components/social-links"
import { footerContent } from "@/lib/site-content"

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">{footerContent.credit}</p>
        <SocialLinks size="sm" />
      </div>
    </footer>
  )
}
