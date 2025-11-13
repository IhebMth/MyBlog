import { posts } from './posts/data'

export default function sitemap() {
  const baseUrl = 'https://doroos-tn.vercel.app'

  // Homepage
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]

  // Static pages
  const staticPages = ['about', 'contact', 'privacy', 'terms']
  staticPages.forEach(page => {
    routes.push({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
  })

  // All posts
  posts.forEach(post => {
    // Regular post page
    routes.push({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: 'weekly',
      priority: 0.8,
    })

    // Redirect page if external link exists
    if (post.externalLink) {
      routes.push({
        url: `${baseUrl}/redirect/${post.slug}`,
        lastModified: new Date(post.publishedDate),
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    }
  })

  return routes
}