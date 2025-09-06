import Link from "next/link"
import { format } from "date-fns"
import { ArrowRight } from "lucide-react"
import Card from "@/components/Card"

interface BlogSummaryCardProps {
  slug: string
  title: string
  publishedOn: Date
  abstract: string
}

export default function BlogSummaryCard({ slug, title, publishedOn, abstract }: BlogSummaryCardProps) {
  const href = `/${slug}`
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy")

  return (
    <Card className="hover:shadow-lg transition-all duration-200 group">
      <div className="space-y-4">
        <div className="space-y-2">
          <Link href={href} className="block group-hover:text-primary transition-colors">
            <h2 className="text-2xl font-semibold text-foreground leading-tight text-balance group-hover:text-primary transition-colors">
              {title}
            </h2>
          </Link>
          <time dateTime={publishedOn.toISOString()} className="text-sm text-muted-foreground font-medium">
            {humanizedDate}
          </time>
        </div>

        <div className="space-y-3">
          <p className="text-muted-foreground leading-relaxed text-pretty">{abstract}</p>

          <Link
            href={href}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group/link"
          >
            Continue reading
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  )
}
