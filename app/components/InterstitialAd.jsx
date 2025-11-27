// ============================================
// components/InterstitialAd.jsx
// Full-screen ad that appears on user interactions
// ============================================
"use client"

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FaTimes } from 'react-icons/fa'

export default function InterstitialAd({ isOpen, onClose, adSlot }) {
  const [mounted, setMounted] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setCountdown(5)
      return
    }

    // Countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, countdown])

  useEffect(() => {
    if (!isOpen || !mounted) return

    // Load ad after a delay
    const timer = setTimeout(() => {
      if (window.adsbygoogle && process.env.NODE_ENV === 'production') {
        try {
          window.adsbygoogle.push({})
        } catch (error) {
          console.error('AdSense interstitial error:', error)
        }
      }
    }, 200)

    // Prevent body scroll when ad is open
    document.body.style.overflow = 'hidden'

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, mounted])

  if (!mounted || !isOpen) return null

  const handleClose = () => {
    if (countdown === 0) {
      onClose()
    }
  }

  const AdContent = (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-4xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1">📢 إعلان</h3>
            <p className="text-sm text-white/80">يرجى الانتظار {countdown > 0 ? countdown : '0'} ثانية</p>
          </div>
          
          <button
            onClick={handleClose}
            disabled={countdown > 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              countdown > 0 
                ? 'bg-white/20 cursor-not-allowed opacity-50' 
                : 'bg-white text-purple-600 hover:bg-gray-100 hover:scale-110'
            }`}
            title={countdown > 0 ? `انتظر ${countdown}ث` : 'إغلاق'}
          >
            {countdown > 0 ? (
              <span className="text-lg font-bold">{countdown}</span>
            ) : (
              <FaTimes />
            )}
          </button>
        </div>

        {/* Ad Container */}
        <div className="p-6 min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
          {process.env.NODE_ENV === 'development' || !adSenseId ? (
            // Development placeholder
            <div className="text-center p-12">
              <div className="text-6xl mb-4">📢</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">مساحة إعلانية</div>
              <div className="text-gray-600 mb-6">هنا سيظهر إعلان AdSense في الإنتاج</div>
              <div className="text-sm text-gray-500">
                Slot ID: {adSlot || 'Not specified'}
              </div>
              {countdown === 0 && (
                <button
                  onClick={onClose}
                  className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition"
                >
                  إغلاق
                </button>
              )}
            </div>
          ) : (
            // Production AdSense
            <div className="w-full">
              <ins
                className="adsbygoogle"
                style={{ 
                  display: 'block',
                  minHeight: '400px',
                  width: '100%'
                }}
                data-ad-client={adSenseId}
                data-ad-slot={adSlot}
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        {countdown === 0 && (
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white py-3 rounded-xl font-bold hover:from-purple-700 hover:via-pink-700 hover:to-red-600 transition-all transform hover:scale-[1.02]"
            >
              إغلاق الإعلان والمتابعة
            </button>
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(AdContent, document.body)
}

// Hook for using interstitial ads
export function useInterstitialAd() {
  const [isOpen, setIsOpen] = useState(false)
  const [adSlot, setAdSlot] = useState(null)

  const showAd = (slot = '4296350147') => {
    setAdSlot(slot)
    setIsOpen(true)
  }

  const closeAd = () => {
    setIsOpen(false)
  }

  return { isOpen, showAd, closeAd, adSlot }
}