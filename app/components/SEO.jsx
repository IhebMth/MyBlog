/**
 * SEO Component for Next.js 15
 * Handles meta tags, Open Graph, Twitter Cards, and JSON-LD schema
 * Best practices for modern SEO optimization
 */

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage,
  ogType = 'website',
  articleData,
  keywords,
  noindex = false,
  nofollow = false,
}) {
  const siteUrl = 'https://doroos-tn.vercel.app' // ⚠️ Change this to your actual domain
  const siteName = 'مدونتي'
  
  // Construct full title
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - أحدث المقالات والإرشادات`
  
  // Canonical URL
  const fullCanonical = canonical || siteUrl
  
  // OG Image
  const fullOgImage = ogImage || `${siteUrl}/og-default.jpg`
  
  // Default description
  const defaultDescription = 'اكتشف مقالات وإرشادات مفيدة في مختلف المجالات - دليلك الشامل للمعلومات القيمة'
  const metaDescription = description || defaultDescription

  // Robots meta
  const robotsContent = []
  if (noindex) robotsContent.push('noindex')
  if (nofollow) robotsContent.push('nofollow')
  if (!noindex && !nofollow) robotsContent.push('index', 'follow')

  // JSON-LD Schema for Article
  const articleSchema = articleData ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleData.title,
    description: articleData.description,
    image: articleData.image,
    datePublished: articleData.publishedDate,
    dateModified: articleData.modifiedDate || articleData.publishedDate,
    author: {
      '@type': 'Person',
      name: articleData.author || siteName,
      url: siteUrl
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullCanonical
    }
  } : null

  // JSON-LD Schema for Website
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  // JSON-LD Schema for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      'https://facebook.com/yourpage',
      'https://twitter.com/yourhandle',
      'https://linkedin.com/company/yourcompany',
      'https://youtube.com/yourchannel'
    ]
  }

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent.join(', ')} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="ar" />
      <meta name="language" content="Arabic" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || siteName} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ar_AR" />
      
      {/* Article specific OG tags */}
      {articleData && (
        <>
          <meta property="article:published_time" content={articleData.publishedDate} />
          <meta property="article:modified_time" content={articleData.modifiedDate || articleData.publishedDate} />
          <meta property="article:author" content={articleData.author || siteName} />
          {articleData.tags && articleData.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title || siteName} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content={siteName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* JSON-LD Structured Data */}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      
      {!articleData && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
        </>
      )}
    </>
  )
}