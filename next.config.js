/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Environment variables
  env: {
    NEXT_PUBLIC_GA_ID: 'G-M8ZREBT88T',
    NEXT_PUBLIC_ADSENSE_ID: 'ca-pub-6805451149859247',
    NEXT_PUBLIC_SITE_URL: 'https://doroos-tn.vercel.app',
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.cloudinary.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Experimental features
  experimental: { 
    optimizeCss: true,
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ]
  },
}

// ✅ Use CommonJS export
module.exports = nextConfig;
