import { cn } from "@/lib/utils"

interface PageIntroProps {
  title: string
  description?: string
  eyebrow?: string
  centered?: boolean
  className?: string
}

export function PageIntro({
  title,
  description,
  eyebrow,
  centered = false,
  className,
}: PageIntroProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">{eyebrow}</p>
      ) : null}
      <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">{title}</h1>
      {description ? <p className="max-w-2xl text-slate-500">{description}</p> : null}
    </div>
  )
}

