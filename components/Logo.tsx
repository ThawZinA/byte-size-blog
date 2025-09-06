import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  mobileAlignment?: "left" | "center" | "right"
  className?: string
}

export default function Logo({ mobileAlignment = "left", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-2xl font-bold text-foreground hover:text-primary transition-colors",
        mobileAlignment === "center" && "text-center",
        mobileAlignment === "right" && "text-right",
        className,
      )}
    >
      Bits & Bytes
    </Link>
  )
}
