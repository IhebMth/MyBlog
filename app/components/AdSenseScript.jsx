"use client"

import Script from 'next/script'

export default function AdSenseScript() {
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  // Don't load in development
  if (process.env.NODE_ENV === 'development') {
    console.log('AdSense: Development mode - script not loaded')
    return null
  }

  // Don't load if no ID
  if (!adSenseId) {
    console.error('AdSense: NEXT_PUBLIC_ADSENSE_ID not found in environment variables')
    return null
  }

  console.log('AdSense: Loading script with ID:', adSenseId)

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={() => console.log('AdSense script loaded successfully')}
      onError={() => console.error('AdSense script failed to load')}
    />
  )
}