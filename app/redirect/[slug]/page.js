import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/app/posts/data'
import RedirectPage from './RedirectContent'

export default async function RedirectRoute({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  // ✅ FIXED: Check for externalLinks first, then fallback to externalLink
  const hasLinks = post && (
    (post.externalLinks && post.externalLinks.length > 0) || 
    post.externalLink
  )
  
  if (!post || !hasLinks) {
    notFound()
  }

  // ✅ FIXED: Prioritize externalLinks[0], fallback to externalLink
  const targetUrl = (post.externalLinks && post.externalLinks.length > 0)
    ? post.externalLinks[0].url 
    : post.externalLink

  return <RedirectPage targetUrl={targetUrl} postSlug={post.slug} post={post} />
}

// SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  const hasLinks = post && (
    (post.externalLinks && post.externalLinks.length > 0) || 
    post.externalLink
  )
  
  if (!post || !hasLinks) {
    return {
      title: 'صفحة غير موجودة',
      robots: {
        index: false,
        follow: false,
      }
    }
  }

  return {
    title: `${post.title} | دروس`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      locale: 'ar_AR',
      url: `https://doroos-tn.vercel.app/redirect/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://doroos-tn.vercel.app/redirect/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

// Generate static params
export async function generateStaticParams() {
  const { posts } = await import('@/app/posts/data')
  return posts
    .filter(post => 
      (post.externalLinks && post.externalLinks.length > 0) || 
      post.externalLink
    )
    .map((post) => ({
      slug: post.slug,
    }))
}