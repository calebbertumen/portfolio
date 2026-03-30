import {
  Bot,
  Code2,
  Lightbulb,
  Sparkles,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react"

/**
 * Central place to edit portfolio copy and project data.
 *
 * Contact email & social URLs live in `site-links.ts` and are driven by `.env.local`
 * (see `.env.example`) so you do not commit personal addresses to GitHub.
 */

export { siteLinks } from "./site-links"
export type { SiteLinks } from "./site-links"

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "How I Build", href: "#how-i-build" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
] as const

export const heroContent = {
  name: "Caleb Bertumen",
  initials: "CB",
  subtitle:
    "Product Engineer building and shipping full-stack applications with AI-assisted workflows.",
  description:
    "I build user-focused products from idea to deployment, combining product thinking, full-stack development, and AI-assisted tools to move quickly and iterate effectively.",
} as const

export const aboutContent = {
  intro:
    "I'm an Informatics graduate with experience building software, automations, and user-centered products. My work focuses on turning ideas into usable applications through rapid prototyping, thoughtful product decisions, and scalable implementation.",
  highlights: [
    {
      Icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end application development",
    },
    {
      Icon: Lightbulb,
      title: "Product Thinking",
      description: "User-centered design approach",
    },
    {
      Icon: Sparkles,
      title: "AI-Assisted Workflow",
      description: "Modern development tools",
    },
  ] satisfies { Icon: LucideIcon; title: string; description: string }[],
} as const

export type ProjectEntry = {
  title: string
  tagline: string
  description: string
  features: string[]
  techStack: string[]
  demoUrl: string
  caseStudyUrl: string
  /** Optional: path under /public or absolute URL (see next.config images). */
  imageSrc?: string
  imageAlt?: string
}

export const projects: ProjectEntry[] = [
  {
    title: "mypaymentslog",
    tagline: "Payment tracking web application",
    description:
      "A full-stack web app designed to help users track and manage personal financial transactions in one place.",
    features: [
      "Secure account linking and transaction retrieval",
      "Digital and manual transaction tracking",
      "QR-based logging workflow",
      "Authentication and session management",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "PostgreSQL",
      "Plaid",
      "Auth.js",
      "Vercel",
      "Cursor",
      "v0.dev",
    ],
    demoUrl: "#",
    caseStudyUrl: "#",
    // imageSrc: "/projects/mypaymentslog.png",
    // imageAlt: "mypaymentslog dashboard screenshot",
  },
  {
    title: "KeepMeClose",
    tagline: "Relationship management and reminder application",
    description:
      "An application that helps users maintain personal relationships through reminders, interaction tracking, and consistency-focused engagement tools.",
    features: [
      "Reminder scheduling",
      "Contact management",
      "Engagement dashboard",
      "Custom streak and ranking system",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "React Query",
      "Cursor",
      "v0.dev",
    ],
    demoUrl: "#",
    caseStudyUrl: "#",
    // imageSrc: "/projects/keepmeclose.png",
    // imageAlt: "KeepMeClose app screenshot",
  },
]

export const projectsSection = {
  eyebrow: "Featured Projects",
  intro: "Selected work showcasing full-stack development and product thinking.",
} as const

export const howIBuildContent = {
  eyebrow: "How I Build",
  intro: "My approach to shipping products that users love.",
  cards: [
    {
      Icon: Zap,
      title: "Rapid Prototyping",
      description:
        "I use modern tools to move from idea to MVP quickly, focusing on momentum and real user workflows.",
    },
    {
      Icon: Bot,
      title: "AI-Assisted Development",
      description:
        "I incorporate tools like Cursor and v0.dev to accelerate UI creation, iteration, and debugging while staying hands-on with architecture and implementation.",
    },
    {
      Icon: Target,
      title: "Product-Oriented Execution",
      description:
        "I approach development through the lens of usability, feature prioritization, and real-world problem solving.",
    },
  ] satisfies { Icon: LucideIcon; title: string; description: string }[],
} as const

export const techStackContent = {
  eyebrow: "Tech Stack",
  intro: "Technologies and tools I use to build products.",
  categories: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Prisma", "PostgreSQL"],
    },
    {
      category: "Tools",
      items: ["Git", "Vercel", "Figma", "Jira"],
    },
    {
      category: "Other",
      items: [
        "API Integration",
        "Authentication",
        "Product Design",
        "AI-Assisted Development",
      ],
    },
  ],
} as const

export const contactContent = {
  eyebrow: "Let's Connect",
  intro:
    "I'm interested in product engineering, AI product engineering, startup, and full-stack opportunities.",
} as const

export const footerContent = {
  credit: "Built by Caleb Bertumen",
} as const
