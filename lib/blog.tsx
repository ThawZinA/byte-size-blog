import { BLOG_POSTS, BLOG_CONTENT } from "@/content"

export interface BlogPost {
  slug: string
  title: string
  abstract: string
  publishedOn: string
  [key: string]: any
}

export interface BlogPostWithContent extends BlogPost {
  content: string
}

export async function getBlogPostList(): Promise<BlogPost[]> {
  return BLOG_POSTS.sort((p1, p2) => (new Date(p1.publishedOn) < new Date(p2.publishedOn) ? 1 : -1))
}

export async function loadBlogPost(slug: string): Promise<BlogPostWithContent> {
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    throw new Error(`Blog post with slug "${slug}" not found`)
  }

  const content = BLOG_CONTENT[slug as keyof typeof BLOG_CONTENT]

  if (!content) {
    throw new Error(`Content for blog post "${slug}" not found`)
  }

  return {
    ...post,
    content,
  }
}
