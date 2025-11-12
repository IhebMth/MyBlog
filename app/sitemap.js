import { posts } from './posts/data'

const baseUrl = 'https://doroos-tn.vercel.app'

export default function generateSitemap() {
  const routes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    ...['about', 'contact', 'privacy', 'terms'].map(page => ({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
    ...posts.flatMap(post => {
      const items = [
        {
          url: `${baseUrl}/posts/${post.slug}`,
          lastModified: new Date(post.publishedDate),
          changeFrequency: 'weekly',
          priority: 0.8,
        }
      ]
      if (post.externalLink) {
        items.push({
          url: `${baseUrl}/redirect/${post.slug}`,
          lastModified: new Date(post.publishedDate),
          changeFrequency: 'weekly',
          priority: 0.6,
        })
      }
      return items
    })
  ]

  // Convert routes to XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    route => `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified.toISOString()}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`

  return sitemapXml
}
