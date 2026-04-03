import {
  Brain,
  Code2,
  Lightbulb,
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
  /** Subtle line directly under the name */
  focusLine: "Focus: AI-powered product development",
  subtitle: "Product Engineer building AI-powered, full-stack applications",
  description:
    "I build user-focused products from idea to deployment, combining product thinking, full-stack development, and AI-powered systems to build intelligent, user-focused applications.",
  /** Strong systems-design line below the intro */
  systemsHighlight:
    "I design systems that leverage structured data and AI to generate personalized, context-aware user experiences.",
} as const

export const aboutContent = {
  intro:
    "I'm an Informatics graduate with experience building full-stack applications, AI-powered features, and user-centered products. I focus on turning ideas into scalable, real-world solutions through rapid prototyping, thoughtful product decisions, and intelligent system design.",
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
      Icon: Brain,
      title: "AI System Design",
      description:
        "Designing and integrating AI-driven features using structured data and contextual inputs",
    },
  ] satisfies { Icon: LucideIcon; title: string; description: string }[],
} as const

export type ProjectEntry = {
  title: string
  tagline: string
  description: string
  features: string[]
  techStack: string[]
  caseStudyUrl: string
  projectLinkLabel: string
  /** Optional: path under /public or absolute URL (see next.config images). */
  imageSrc?: string
  imageAlt?: string
  /** Defaults to "cover". Use "contain" to avoid cropping screenshots. */
  imageFit?: "cover" | "contain"
  /** Short label under the title (e.g. product positioning). */
  titleBadge?: string
  /** One sentence of technical depth for complex projects. */
  technicalDepth?: string
  /** Optional second bullet list (e.g. AI-specific capabilities). */
  aiFeatures?: string[]
  /** Numbered “how it works” steps. */
  howItWorks?: string[]
}

export const projects: ProjectEntry[] = [
  {
    title: "KeepMeClose",
    titleBadge: "AI-Driven Personal Assistant",
    tagline:
      "AI-powered relationship management and engagement assistant",
    description:
      "An AI-powered application that helps users maintain personal relationships through intelligent reminders, interaction tracking, and personalized follow-up suggestions based on past behavior and context.",
    technicalDepth:
      "Built prompt pipelines that combine structured user data with contextual inputs to generate relevant, personalized AI suggestions.",
    features: [
      "Intelligent reminder scheduling with adaptive engagement tracking",
      "AI-assisted contact insights and follow-up recommendations",
      "Engagement analytics dashboard with behavioral patterns",
      "Custom scoring system balancing daily, weekly, and monthly consistency",
    ],
    aiFeatures: [
      "Personalized follow-up suggestions generated from interaction history and notes",
      "Context-aware recommendations using structured user data (check-ins, outcomes, preferences)",
      "Conversational AI assistant to guide user engagement decisions",
      "Continuous learning from user feedback and interaction patterns",
    ],
    howItWorks: [
      "User logs interactions and optional notes after each check-in",
      "Structured data is stored and used as context for AI suggestions",
      "AI generates personalized follow-up recommendations",
      "Feedback loop refines future suggestions",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "React Query",
      "Supabase",
      "OpenAI API",
      "Cursor",
      "v0.dev",
    ],
    caseStudyUrl:
      "https://apps.apple.com/us/app/keepmeclose-contact-reminder/id6760917712",
    projectLinkLabel: "App Store",
    imageSrc: "/projects/keepmeclose.png",
    imageAlt:
      "KeepMeClose app showing top streaks, upcoming reminders, and tab bar",
    imageFit: "contain",
  },
  {
    title: "MyPaymentsLog",
    tagline: "Payment tracking web application",
    description:
      "A full-stack financial tracking application that aggregates and structures transaction data to provide users with a centralized view of spending behavior.",
    technicalDepth:
      "Engineered data flows to synchronize external financial APIs with internal transaction models for consistent and reliable tracking.",
    features: [
      "Integrated Plaid API for secure financial data aggregation and normalization",
      "Designed hybrid transaction pipeline (automatic + manual entry) for complete coverage",
      "Implemented QR-based workflow for fast, real-world expense logging",
      "Built secure authentication and session management using Auth.js",
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
    caseStudyUrl: "https://mypaymentslog.com/",
    projectLinkLabel: "Link",
    imageSrc: "/projects/mypaymentslog.png",
    imageAlt: "MyPaymentsLog landing page screenshot showing transaction history",
    imageFit: "contain",
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
      Icon: Brain,
      title: "AI-Integrated Systems",
      description:
        "I design and implement AI-powered features by combining structured user data with prompt pipelines to generate context-aware, personalized outputs.",
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
      category: "AI / Data",
      items: [
        "OpenAI API",
        "Prompt Engineering",
        "Contextual Data Pipelines",
      ],
    },
    {
      category: "Other",
      items: [
        "API Integration",
        "Authentication",
        "Product Design",
        "AI Feature Development",
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
