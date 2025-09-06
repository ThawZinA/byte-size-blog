import { Code } from "bright"

interface CodeSnippetProps {
  children: string
  lang?: string
  title?: string
  className?: string
}

export default function CodeSnippet({ children, lang, title, className }: CodeSnippetProps) {
  return (
    <div className="my-6">
      {title && (
        <div className="bg-muted px-4 py-2 text-sm font-medium text-foreground border-b border-border rounded-t-lg">
          {title}
        </div>
      )}
      <Code
        lang={lang}
        className={`rounded-lg ${title ? "rounded-t-none" : ""} ${className || ""}`}
        theme={{
          dark: "github-dark",
          light: "github-light",
        }}
      >
        {children}
      </Code>
    </div>
  )
}
