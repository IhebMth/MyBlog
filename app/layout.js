// app/layout.js
import { Tajawal } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'

const tajawal = Tajawal({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://doroos-tn.vercel.app'),
  title: {
    default: 'دروس - مدونة تعليمية شاملة',
    template: '%s | دروس'
  },
  description: 'اكتشف مقالات وإرشادات مفيدة في مختلف المجالات - تعليم، تقنية، تطوير ذاتي، وأكثر',
  keywords: ['مدونة تعليمية', 'دروس', 'تعلم', 'IELTS', 'برمجة', 'تسويق', 'تطوير ذاتي'],
  authors: [{ name: 'دروس' }],
  creator: 'دروس',
  publisher: 'دروس',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'z9prJxT0bs9g0MUjqa2oMrxho3LdvnsRueKvyjH2O3s', // ← Replace with your code
  },
  openGraph: {
    type: 'website',
    locale: 'ar_AR',
    url: 'https://doroos-tn.vercel.app',
    siteName: 'دروس',
    title: 'دروس - مدونة تعليمية شاملة',
    description: 'اكتشف مقالات وإرشادات مفيدة في مختلف المجالات',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'دروس',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دروس - مدونة تعليمية شاملة',
    description: 'اكتشف مقالات وإرشادات مفيدة في مختلف المجالات',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        {/* Google AdSense Script */}
        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6805451149859247"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${tajawal.className} antialiased bg-gray-50`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
