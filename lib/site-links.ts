/**
 * Public contact links — loaded from `NEXT_PUBLIC_*` env vars so email and profile
 * URLs are not hardcoded in git. Safe defaults are generic placeholders.
 *
 * Setup:
 * 1. Copy `.env.example` → `.env.local` (gitignored).
 * 2. Fill in your values. Restart `npm run dev`.
 * 3. In Vercel/hosting, add the same `NEXT_PUBLIC_*` variables for production builds.
 *
 * Rules for the future:
 * - Never commit `.env`, `.env.local`, or API keys — see `.gitignore`.
 * - Only use `NEXT_PUBLIC_*` for data that is OK to expose in the browser bundle.
 * - Keep real secrets in server-only env vars (no NEXT_PUBLIC_ prefix) if you add APIs.
 *
 * Note: Each `process.env.NEXT_PUBLIC_*` reference must stay a literal string so Next.js
 * can inline values at build time.
 */

export type SiteLinks = {
  email: string
  linkedin: string
  linkedinDisplay: string
  github: string
  githubDisplay: string
  resumePdf: string
}

export const siteLinks: SiteLinks = {
  email: process.env.NEXT_PUBLIC_SITE_EMAIL?.trim() || "you@example.com",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ||
    "https://www.linkedin.com/in/your-profile/",
  linkedinDisplay:
    process.env.NEXT_PUBLIC_LINKEDIN_DISPLAY?.trim() ||
    "linkedin.com/in/your-profile",
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL?.trim() ||
    "https://github.com/yourusername",
  githubDisplay:
    process.env.NEXT_PUBLIC_GITHUB_DISPLAY?.trim() || "github.com/yourusername",
  resumePdf: process.env.NEXT_PUBLIC_RESUME_PATH?.trim() || "/resume.pdf",
}
