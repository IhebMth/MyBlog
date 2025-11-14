import { notFound, redirect } from 'next/navigation'
import { posts, getPostBySlug, getRelatedPosts } from '../data'
import PostContent from './PostContent'

export default async function PostPage({ params }) {
  const { slug } = params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // If post has external link, redirect to redirect page
  if (post.externalLink) {
    redirect(`/redirect/${slug}`)
  }

  const relatedPosts = getRelatedPosts(post.id, post.category, 3)

  return <PostContent post={post} relatedPosts={relatedPosts} />
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'مقالة غير موجودة'
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

// Generate static params for all posts
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}