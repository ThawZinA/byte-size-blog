import { notFound } from "next/navigation"
import { loadBlogPost, getBlogPostList } from "@/lib/blog"
import BlogHero from "@/components/BlogHero"
import { MDXRemote } from "next-mdx-remote/rsc"
import mdxComponents from "@/components/mdx-components"

interface BlogPostPageProps {
  params: {
    postSlug: string
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPostList()
    return posts.map((post) => ({
      postSlug: post.slug,
    }))
  } catch (error) {
    console.error("Failed to generate static params:", error)
    return []
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const { frontmatter } = await loadBlogPost(params.postSlug)
    return {
      title: `${frontmatter.title} | Bits & Bytes`,
      description: frontmatter.abstract,
    }
  } catch {
    return {
      title: "Post Not Found | Bits & Bytes",
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post

  try {
    post = await loadBlogPost(params.postSlug)
  } catch {
    notFound()
  }

  const { title, abstract, publishedOn, content } = post

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <BlogHero title={title} publishedOn={new Date(publishedOn)} className="mb-12" />

      <div className="prose prose-lg max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </article>
  )
}
