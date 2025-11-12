export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Helper functions to generate common schemas
export function generateArticleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'دروس',
      logo: {
        '@type': 'ImageObject',
        url: 'https://doroos-tn.vercel.app/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://doroos-tn.vercel.app/posts/${post.slug}`,
    },
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'دروس',
    url: 'https://doroos-tn.vercel.app',
    description: 'مدونة تعليمية شاملة في مختلف المجالات',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://doroos-tn.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'دروس',
    url: 'https://doroos-tn.vercel.app',
    logo: 'https://doroos-tn.vercel.app/logo.png',
    sameAs: [
      'https://facebook.com/yourpage',
      'https://t.me/yourchannel',
    ],
  }
}

export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}