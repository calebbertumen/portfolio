"use client"

import { motion } from "framer-motion"
import {
  Activity,
  Code2,
  LayoutDashboard,
  Sparkles,
  Terminal,
} from "lucide-react"

function ToolChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border/80 bg-background/90 px-2 py-1 text-[11px] font-medium text-foreground shadow-sm">
      {children}
    </span>
  )
}

export function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/12 via-transparent to-accent/5 blur-2xl"
        aria-hidden
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="col-span-2 rounded-2xl border border-border/80 bg-card p-5 shadow-[0_1px_0_rgba(0,0,0,0.04),0_12px_40px_-12px_rgba(15,23,42,0.12)]"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
              <Sparkles className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">
                Builder stack
              </p>
              <p className="text-xs text-muted-foreground">
                From rapid prototyping to AI-powered production systems
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <ToolChip>Claude Code</ToolChip>
                <ToolChip>Claude AI</ToolChip>
                <ToolChip>Next.js</ToolChip>
                <ToolChip>TypeScript</ToolChip>
                <ToolChip>Vercel</ToolChip>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/60 pt-4">
            <div className="rounded-lg bg-muted/60 px-1.5 py-2 text-center">
              <p className="text-[9px] font-medium uppercase leading-tight tracking-wide text-muted-foreground">
                Rapid iteration cycles
              </p>
              <p className="text-sm font-semibold tabular-nums text-foreground">
                24
              </p>
            </div>
            <div className="rounded-lg bg-muted/60 px-1.5 py-2 text-center">
              <p className="text-[9px] font-medium uppercase leading-tight tracking-wide text-muted-foreground">
                Deployment frequency
              </p>
              <p className="text-sm font-semibold text-foreground">Weekly</p>
            </div>
            <div className="rounded-lg bg-accent/10 px-1.5 py-2 text-center">
              <p className="text-[9px] font-medium uppercase leading-tight tracking-wide text-accent">
                User-centered design
              </p>
              <p className="text-sm font-semibold text-accent">Users</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="rounded-2xl border border-border/80 bg-card p-4 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]"
        >
          <div className="mb-3 flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4 text-accent" aria-hidden />
            <span className="text-xs font-semibold text-foreground">
              Product pulse
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-end gap-1.5">
              {[40, 65, 45, 80, 55, 90].map((h, i) => (
                <div
                  key={i}
                  className="w-2 rounded-sm bg-accent/25"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <Activity className="h-3 w-3 text-accent" aria-hidden />
              Engagement trending up
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="rounded-2xl border border-border/80 bg-card p-4 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]"
        >
          <div className="mb-2 flex items-center gap-2">
            <Code2 className="h-4 w-4 text-accent" aria-hidden />
            <span className="text-xs font-semibold text-foreground">API</span>
          </div>
          <pre className="font-mono text-[10px] leading-relaxed text-muted-foreground">
            <span className="text-accent">GET</span> /transactions
            {"\n"}
            <span className="text-foreground/70">200</span> · 42ms
          </pre>
        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="col-span-2 rounded-2xl border border-foreground/10 bg-foreground p-4 text-background shadow-lg"
        >
          <div className="mb-2 flex items-center gap-2">
            <div className="flex gap-1" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-red-400/90" />
              <span className="h-2 w-2 rounded-full bg-amber-400/90" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
            </div>
            <Terminal className="ml-1 h-3 w-3 opacity-60" aria-hidden />
            <span className="text-[10px] opacity-60">terminal</span>
          </div>
          <p className="font-mono text-xs">
            <span className="text-emerald-400">$</span> npm run build
          </p>
          <p className="mt-1 font-mono text-[11px] opacity-70">
            ✓ Compiled successfully
          </p>
        </motion.div>
      </div>
    </div>
  )
}
