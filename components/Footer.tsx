import Link from "next/link"
import Logo from "@/components/Logo"
import DecorativeSwoops from "./Footer/DecorativeSwoops"

export default function Footer() {
  return (
    <footer className="relative mt-16 bg-muted">
      <DecorativeSwoops />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <Logo mobileAlignment="center" className="md:text-left" />

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Blog template created by{" "}
              <a
                href="https://www.joshwcomeau.com/"
                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
              >
                Josh W. Comeau
              </a>
              . Check out{" "}
              <a
                href="https://www.joyofreact.com/"
                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
              >
                The Joy of React
              </a>{" "}
              to learn how to build dynamic React apps like this one!
            </p>
          </div>

          <nav className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/rss" className="text-muted-foreground hover:text-foreground transition-colors">
                  RSS feed
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://twitter.com/JoshWComeau"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
