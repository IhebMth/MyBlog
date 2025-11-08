# MyBlog
Next.js 15 blog scaffold optimized for SEO, AdSense integration, and performance with Tailwind CSS. Includes homepage feed, dynamic posts, admin post creator, SEO meta components, sitemap, GA4, legal pages, and content templates.

# Next.js SEO & AdSense Blog

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-blue?logo=tailwind-css) ![Vercel](https://img.shields.io/badge/Vercel-deploy-black?logo=vercel)

A full-featured **Next.js 15 blog scaffold** optimized for **SEO**, **AdSense monetization**, and performance using **Tailwind CSS**. This project is designed for easy content management, fast loading, and modern best practices.

---

## Features

- **Layout & Components**
  - Header, Footer, layout structure
  - SEO meta component (`SEO.jsx`) with Open Graph, Twitter cards, canonical, JSON-LD
  - AdBlock / AdSense placeholders (`AdBlock.jsx`)
  - Favicon integration

- **Homepage & Posts**
  - Responsive homepage feed (`app/page.jsx`)
  - Dynamic post pages (`app/posts/[slug]/page.jsx`)
  - Share buttons, related posts, cover images

- **Admin Page**
  - `/admin` page to create JS post objects
  - Preview and copy-to-clipboard functionality
  - No backend required

- **SEO & Analytics**
  - SEO meta tags and structured data
  - Google Analytics GA4 integration with consent banner
  - Sitemap generation and `robots.txt`

- **Legal & Compliance**
  - Privacy Policy (Arabic)
  - Terms, About, Contact pages
  - AdSense compliance mentions

- **Performance Optimizations**
  - Lazy loading and image optimization
  - Preconnect fonts
  - Tailwind purge, Brotli/Gzip
  - Lighthouse best practices

- **Publishing Workflow**
  - Content templates for Arabic articles with H1/H2, meta title/description, CTAs
  - Workflow: create in `/admin` → `data.js` → GitHub push → Vercel deploy

- **Extras**
  - Social media captions with UTM links (FB, Telegram, LinkedIn, YouTube)
  - Weekly KPI checklist and A/B test templates
  - Optional serverless backend/API to auto-save posts with token authentication

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/nextjs-adsense-seo-blog.git
cd nextjs-adsense-seo-blog
