import {
  Activity,
  BookOpen,
  Brain,
  Cpu,
  Stethoscope,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react"

interface CategoryMeta {
  emoji: string
  title: string
  icon: LucideIcon
}

export function getCollaborationCategoryMeta(category: string): CategoryMeta {
  const emoji = category.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/)?.[0] ?? "•"
  const title = category.replace(emoji, "").trim()

  if (category.includes("Artificial Consciousness") || category.includes("馃")) {
    return { emoji, title, icon: Brain }
  }

  if (
    category.includes("Medical") ||
    category.includes("Health") ||
    category.includes("Disorder") ||
    category.includes("Therapeutic") ||
    category.includes("馃К")
  ) {
    return { emoji, title, icon: Stethoscope }
  }

  if (category.includes("Interface") || category.includes("Computing") || category.includes("馃")) {
    return { emoji, title, icon: Cpu }
  }

  if (category.includes("Interaction") || category.includes("馃摡")) {
    return { emoji, title, icon: Users }
  }

  if (category.includes("Monitoring") || category.includes("馃彞")) {
    return { emoji, title, icon: Activity }
  }

  if (category.includes("Standards") || category.includes("Governance")) {
    return { emoji, title, icon: BookOpen }
  }

  return { emoji, title, icon: Zap }
}

