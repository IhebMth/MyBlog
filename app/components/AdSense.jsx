"use client"

import { useEffect } from 'react'

export default function AdSense({ 
  adSlot, 
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = {}
}) {
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    // Only run in production AND if AdSense ID exists
    if (process.env.NODE_ENV !== 'production' || !adSenseId) return
    
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [adSenseId])

  // Show placeholder if no AdSense ID OR in development
  if (!adSenseId || process.env.NODE_ENV === 'development') {
    return (
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center my-6">
        <p className="text-gray-500 text-sm mb-2">مساحة إعلانية</p>
        <p className="text-gray-400 text-xs">
          Ad Slot: {adSlot || 'Not specified'}
          <br />
          <span className="text-red-500">
            {!adSenseId ? '⚠️ NEXT_PUBLIC_ADSENSE_ID not set' : '✅ Development Mode'}
          </span>
        </p>
      </div>
    )
  }

  return (
    <div className="adsense-container my-6">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={adSenseId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  )
}

// Predefined ad placements
export function AdBanner() {
  return <AdSense adSlot="2150792287" adFormat="horizontal" style={{ minHeight: '90px' }} />
}

export function AdSidebar() {
  return <AdSense adSlot="8221376618" adFormat="rectangle" style={{ minHeight: '250px' }} />
}

export function AdInArticle() {
  return <AdSense adSlot="2444761165" adFormat="fluid" style={{ minHeight: '200px' }} />
}