"use client"

import Script from 'next/script'
import { useEffect } from 'react'

export default function AdSenseScript() {
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    // Log for debugging
    console.log('AdSense ID:', adSenseId)
    console.log('Environment:', process.env.NODE_ENV)
  }, [adSenseId])

  // Don't load in development
  if (process.env.NODE_ENV === 'development') {
    console.log('AdSense: Development mode - not loading')
    return null
  }

  // Don't load if no ID
  if (!adSenseId) {
    console.error('AdSense: NEXT_PUBLIC_ADSENSE_ID not found')
    return null
  }

  return (
    <>
      {/* AdSense Script */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
        onLoad={() => console.log('AdSense: Script loaded successfully')}
        onError={(e) => console.error('AdSense: Script failed to load', e)}
      />
    </>
  )
}