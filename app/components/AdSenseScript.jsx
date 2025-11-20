// ============================================
// components/AdSenseScript.jsx - FIXED VERSION
// ============================================
"use client"

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function AdSenseScript() {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    // Debug logging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 AdSense Debug:', {
        adSenseId: adSenseId ? `${adSenseId.slice(0, 10)}...` : 'NOT SET',
        environment: process.env.NODE_ENV,
        scriptLoaded
      })
    }
  }, [adSenseId, scriptLoaded])

  // Don't load in development to avoid quota issues
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  // Don't load if no ID
  if (!adSenseId) {
    console.error('❌ AdSense: NEXT_PUBLIC_ADSENSE_ID not found in .env.local')
    return null
  }

  return (
    <>
      {/* AdSense Main Script */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
        onLoad={() => {
          setScriptLoaded(true)
          console.log('✅ AdSense: Script loaded successfully')
        }}
        onError={(e) => {
          console.error('❌ AdSense: Script failed to load', e)
        }}
      />
      
      {/* Initialize AdSbygoogle array */}
      <Script
        id="adsense-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (window.adsbygoogle = window.adsbygoogle || []);
          `
        }}
      />
    </>
  )
}