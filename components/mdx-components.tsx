import type { MDXComponents } from "mdx/types"
import type { ReactNode } from "react"
import CircularColorsDemo from "@/components/CircularColorsDemo"
import DivisionGroupsDemo from "@/components/DivisionGroupsDemo"
import CodeSnippet from "@/components/CodeSnippet"

const components: MDXComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-4xl font-bold text-foreground mb-6 text-balance">{children}</h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-3xl font-semibold text-foreground mb-4 mt-8 text-balance">{children}</h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6 text-balance">{children}</h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-foreground leading-relaxed mb-4 text-pretty">{children}</p>
  ),
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a href={href} className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors">
      {children}
    </a>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">{children}</code>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">{children}</pre>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-foreground">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground">{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => <li className="text-foreground leading-relaxed">{children}</li>,
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">{children}</blockquote>
  ),
  CircularColorsDemo,
  DivisionGroupsDemo,
  CodeSnippet,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}

export default components
