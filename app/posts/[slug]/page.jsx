import { notFound, redirect } from 'next/navigation'
import { posts, getPostBySlug, getRelatedPosts } from '../data'
import PostContent from './PostContent'

// ===============================
// PAGE RENDER
// ===============================
export default async function PostPage(props) {
  // ⬅ FIXED: params is a Promise in Next.js 15
  const { slug } = await props.params

  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Redirect posts with external links
  if (post.externalLink) {
    redirect(`/redirect/${slug}`)
  }

  const relatedPosts = getRelatedPosts(post.id, post.category, 3)

  return <PostContent post={post} relatedPosts={relatedPosts} />
}

// ===============================
// SEO METADATA
// ===============================
export async function generateMetadata(props) {
  // ⬅ FIXED: params must be awaited
  const { slug } = await props.params

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

// ===============================
// STATIC PARAMS FOR BUILD
// ===============================
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
