import { Tajawal } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

// Better Arabic font
const tajawal = Tajawal({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://doroos-tn.vercel.app/'), 
  title: {
    default: 'مدونتي - أحدث المقالات والإرشادات',
    template: '%s | مدونتي'
  },
  description: 'اكتشف مقالات وإرشادات مفيدة في مختلف المجالات - دليلك الشامل للمعلومات القيمة',
  keywords: ['مدونة', 'مقالات', 'إرشادات', 'تعليم', 'معلومات'],
  authors: [{ name: 'مدونتي' }],
  creator: 'مدونتي',
  publisher: 'مدونتي',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_AR',
    url: 'https://yourdomain.com',
    siteName: 'مدونتي',
    title: 'مدونتي - أحدث المقالات والإرشادات',
    description: 'اكتشف مقالات وإرشادات مفيدة في مختلف المجالات',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مدونتي',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مدونتي - أحدث المقالات والإرشادات',
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