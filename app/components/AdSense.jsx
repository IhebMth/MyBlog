// ============================================
// components/AdSense.jsx - FIXED VERSION
// ============================================
"use client"

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function AdSense({ 
  adSlot, 
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = {}
}) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  // IMPORTANT: Don't show ads on redirect pages until approved
  const isRedirectPage = pathname?.startsWith('/redirect/')
  const isAdminPage = pathname?.startsWith('/admin/')
  const isErrorPage = pathname?.includes('/404') || pathname?.includes('/500')
  
  // Show ads only on regular content pages
  const shouldShowAd = !isRedirectPage && !isAdminPage && !isErrorPage
  
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !shouldShowAd) return
    
    // Only run in production
    if (process.env.NODE_ENV !== 'production' || !adSenseId) return
    
    try {
      // Push ad after a small delay to ensure proper loading
      const timer = setTimeout(() => {
        if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
          window.adsbygoogle.push({})
        }
      }, 100)
      
      return () => clearTimeout(timer)
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [mounted, adSenseId, shouldShowAd, pathname])

  // Don't render on excluded pages
  if (!shouldShowAd) {
    return null
  }

  // Don't render until mounted
  if (!mounted) {
    return (
      <div className="min-h-[100px] bg-gray-50 rounded-lg animate-pulse my-4" />
    )
  }

  // Development placeholder
  if (!adSenseId || process.env.NODE_ENV === 'development') {
    return (
      <div className="min-h-[250px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-dashed border-gray-300 my-6">
        <div className="text-center">
          <div className="text-gray-500 font-semibold mb-2">📢 مساحة إعلانية</div>
          <div className="text-xs text-gray-400 space-y-1">
            <div>Slot: {adSlot || 'Not specified'}</div>
            <div>Format: {adFormat}</div>
            {!adSenseId && <div className="text-orange-500 font-medium mt-2">⚠️ AdSense ID not configured</div>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="my-6 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={adSenseId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  )
}

// ============================================
// Predefined Ad Placements
// ============================================

// Top Banner - After header
export function AdBanner() {
  return (
    <AdSense 
      adSlot="2150792287" 
      adFormat="auto" 
      style={{ minHeight: '90px' }}
    />
  )
}

// Sidebar Ad
export function AdSidebar() {
  return (
    <AdSense 
      adSlot="8221376618" 
      adFormat="rectangle" 
      style={{ minHeight: '600px' }}
    />
  )
}

// In-Article Ad (middle of content)
export function AdInArticle() {
  return (
    <AdSense 
      adSlot="2444761165" 
      adFormat="fluid" 
      style={{ minHeight: '250px' }}
    />
  )
}

// Bottom Banner - Before footer
export function AdFooterBanner() {
  return (
    <AdSense 
      adSlot="6389420190" 
      adFormat="horizontal" 
      style={{ minHeight: '100px' }}
    />
  )
}

// In-Feed Ad (between posts)
export function AdInFeed() {
  return (
    <AdSense 
      adSlot="2444761165" 
      adFormat="fluid" 
      style={{ minHeight: '200px' }}
    />
  )
}