<<<<<<< 
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
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
>>>>>>> 47b8871944143830d585a26ab95bdbd33c594206

