import { notFound, redirect } from 'next/navigation'
import { posts, getPostBySlug, getRelatedPosts } from '../../posts/data'
import PostContent from './PostContent'

export default async function PostPage({ params }) {
  const { slug, locale } = params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // If post has external link, redirect to redirect page
  if (post.externalLink) {
    redirect(`/${locale}/redirect/${slug}`)
  }

  const relatedPosts = getRelatedPosts(post.id, post.category, 3)

  return <PostContent post={post} relatedPosts={relatedPosts} locale={locale} />
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
  const locales = ['ar', 'en', 'fr']
  const params = []
  
  locales.forEach(locale => {
    posts.forEach(post => {
      params.push({
        locale,
        slug: post.slug
      })
    })
  })
  
  return params
}