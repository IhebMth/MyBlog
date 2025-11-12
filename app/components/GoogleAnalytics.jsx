"use client"

import Script from 'next/script'

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID

  // Don't load in development
  if (process.env.NODE_ENV === 'development') {
    console.log('GA4: Development mode - not loading')
    return null
  }

  // Don't load if no ID
  if (!measurementId) {
    console.error('GA4: NEXT_PUBLIC_GA_ID not found in environment variables')
    return null
  }

  console.log('GA4: Loading with ID:', measurementId)

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        onLoad={() => console.log('GA4: Script loaded')}
        onError={() => console.error('GA4: Script failed to load')}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
            console.log('GA4: Initialized with ${measurementId}');
          `,
        }}
      />
    </>
  )
}