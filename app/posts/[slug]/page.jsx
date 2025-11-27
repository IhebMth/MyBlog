import { notFound, redirect } from 'next/navigation'
import { posts, getPostBySlug, getRelatedPosts } from '../data'
import PostContent from './PostContent'

// ===============================
// PAGE RENDER
// ===============================
export default async function PostPage(props) {
  const { slug } = await props.params

  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // ✅ FIXED: Redirect if post has external links (either format)
  const hasExternalLinks = (post.externalLinks && post.externalLinks.length > 0) || post.externalLink
  
  if (hasExternalLinks) {
    redirect(`/redirect/${slug}`)
  }

  // ✅ FIXED: Get related posts from same category, exclude current post
  const relatedPosts = posts
    .filter(p => 
      p.id !== post.id && // Not the current post
      p.category === post.category && // Same category
      !(p.externalLinks && p.externalLinks.length > 0) && // Not external link posts
      !p.externalLink // Not external link posts
    )
    .slice(0, 3) // Limit to 3 posts

  return <PostContent post={post} relatedPosts={relatedPosts} />
}

// ===============================
// SEO METADATA
// ===============================
export async function generateMetadata(props) {
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
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
      tags: post.tags,
      locale: 'ar_AR',
      url: `https://doroos-tn.vercel.app/posts/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://doroos-tn.vercel.app/posts/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

// ===============================
// STATIC PARAMS FOR BUILD
// ===============================
export async function generateStaticParams() {
  return posts
    .filter(post => 
      !(post.externalLinks && post.externalLinks.length > 0) && 
      !post.externalLink
    )
    .map((post) => ({
      slug: post.slug,
    }))
}