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
    if (process.env.NODE_ENV === 'development' || !adSenseId) return
    try {
      if (window.adsbygoogle) window.adsbygoogle.push({})
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [adSenseId])

  if (process.env.NODE_ENV === 'development' || !adSenseId) {
    return (
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
        <p className="text-gray-500 text-sm mb-2">مساحة إعلانية</p>
        <p className="text-gray-400 text-xs">Ad Slot: {adSlot || 'Not specified'}</p>
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
  return <AdSense adSlot="YOUR_BANNER_SLOT_ID" adFormat="horizontal" style={{ minHeight: '90px' }} />
}

export function AdSidebar() {
  return <AdSense adSlot="YOUR_SIDEBAR_SLOT_ID" adFormat="rectangle" style={{ minHeight: '250px' }} />
}

export function AdInArticle() {
  return <AdSense adSlot="YOUR_ARTICLE_SLOT_ID" adFormat="fluid" style={{ minHeight: '200px' }} />
}
