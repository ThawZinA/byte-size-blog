import { getBlogPostList } from "@/lib/blog"
import BlogSummaryCard from "@/components/BlogSummaryCard"

export default async function HomePage() {
  let blogPosts: any[] = []

  try {
    blogPosts = await getBlogPostList()
  } catch (error) {
    console.error("Failed to load blog posts:", error)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">Latest Content</h1>
        <p className="text-muted-foreground text-lg">Exploring web development, technology, and programming concepts</p>
      </div>

      <div className="space-y-8">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <BlogSummaryCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              abstract={post.abstract}
              publishedOn={new Date(post.publishedOn)}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No blog posts found. Check back soon for new content!</p>
          </div>
        )}
      </div>
    </div>
  )
}
