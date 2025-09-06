import type { ReactNode, HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg shadow-sm p-6 mb-8",
        "transition-shadow hover:shadow-md",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
