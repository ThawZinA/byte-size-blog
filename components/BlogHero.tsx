import { format } from "date-fns"
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface BlogHeroProps extends HTMLAttributes<HTMLElement> {
  title: string
  publishedOn: Date
  className?: string
}

export default function BlogHero({ title, publishedOn, className, ...props }: BlogHeroProps) {
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy")

  return (
    <header className={cn("border-b border-border pb-8 mb-8", className)} {...props}>
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">{title}</h1>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>Published on</span>
          <time dateTime={publishedOn.toISOString()} className="font-medium text-foreground">
            {humanizedDate}
          </time>
        </div>
      </div>
    </header>
  )
}
