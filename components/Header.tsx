"use client"

import { Rss, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Logo from "@/components/Logo"
import VisuallyHidden from "@/components/VisuallyHidden"
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string
}

export default function Header({ className, ...props }: HeaderProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className,
      )}
      {...props}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="/rss" aria-label="View RSS feed">
              <Rss className="h-5 w-5" style={{ transform: "translate(2px, -2px)" }} />
              <VisuallyHidden>View RSS feed</VisuallyHidden>
            </a>
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
          </Button>
        </div>
      </div>
    </header>
  )
}
