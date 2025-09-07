import Link from "next/link"
import Logo from "@/components/Logo"


export default function Footer() {
  return (
    <footer className="relative mt-16 bg-muted">
      

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <Logo mobileAlignment="center" className="md:text-left" />

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              A minimal blog by{" "}
              <a
                href="https://thawzinag.dev/"
                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
              >
                Thaw. All rights reserved.
              </a>
            </p>
          </div>

          <nav className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.instagram.com/__thaw_/" className="text-muted-foreground hover:text-foreground transition-colors">
                  instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/thaw-zin-ag419/" className="text-muted-foreground hover:text-foreground transition-colors">
                  linkedin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
