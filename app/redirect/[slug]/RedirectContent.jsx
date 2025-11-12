"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaClock, FaArrowRight, FaStar, FaGraduationCap, FaBook, FaTrophy, FaUsers, FaExternalLinkAlt, FaCalendar, FaUser, FaTag } from 'react-icons/fa'

// AdSense Component
function AdSenseUnit({ adSlot, adFormat = 'auto', style = {}, label = 'مساحة إعلانية' }) {
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && adSenseId) {
      try {
        if (window.adsbygoogle && window.adsbygoogle.loaded !== true) {
          window.adsbygoogle.push({})
        }
      } catch (error) {
        console.error('AdSense error:', error)
      }
    }
  }, [adSenseId])

  if (process.env.NODE_ENV === 'development' || !adSenseId) {
    return (
      <div className="bg-gray-100 rounded-2xl p-4 md:p-6">
        <p className="text-gray-500 text-xs md:text-sm text-center mb-3">{label}</p>
        <div className="bg-gray-200 rounded-xl h-32 md:h-64 flex items-center justify-center">
          <p className="text-gray-400 text-sm">Ad Slot: {adSlot || 'Not Set'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-4 my-6">
      <p className="text-gray-500 text-xs text-center mb-3">{label}</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={adSenseId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  )
}

export default function RedirectPage({ targetUrl, postSlug, post }) {
  const [countdown, setCountdown] = useState(30)
  const [showButton, setShowButton] = useState(false)
  const [showInterstitial, setShowInterstitial] = useState(false)
  const [interstitialCountdown, setInterstitialCountdown] = useState(5)

  useEffect(() => {
    let timer
    
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    } else {
      setShowButton(true)
    }

    return () => clearInterval(timer)
  }, [countdown])

  // Interstitial countdown
useEffect(() => {
  if (showInterstitial && interstitialCountdown > 0) {
    const timer = setInterval(() => {
      setInterstitialCountdown(prev => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }
}, [showInterstitial, interstitialCountdown])

  const goToCourse = () => {
    // Show interstitial ad
    setShowInterstitial(true)
  }

  const skipInterstitial = () => {
    if (interstitialCountdown === 0) {
      // Open in new tab/window
      window.open(targetUrl, '_blank', 'noopener,noreferrer')
      // Close interstitial
      setShowInterstitial(false)
    }
  }

  const highlights = [
    { icon: FaGraduationCap, text: 'محتوى تعليمي متميز' },
    { icon: FaBook, text: 'مواد شاملة ومنظمة' },
    { icon: FaTrophy, text: 'شهادات معترف بها' },
    { icon: FaUsers, text: 'مجتمع نشط ومفيد' }
  ]

  return (
    <>
      {/* Interstitial Ad Overlay */}
      {showInterstitial && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            {/* Skip Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={skipInterstitial}
                disabled={interstitialCountdown > 0}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  interstitialCountdown > 0
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700 animate-pulse'
                }`}
              >
                {interstitialCountdown > 0 
                  ? `تخطي خلال ${interstitialCountdown} ثواني` 
                  : 'تخطي الإعلان ←'
                }
              </button>
            </div>

            {/* Interstitial Ad */}
            <div className="bg-white rounded-2xl p-6">
              <AdSenseUnit 
                adSlot="4296350147"
                adFormat="fluid"
                style={{ minHeight: '400px' }}
                label="إعلان - سيفتح الرابط في نافذة جديدة"
              />
            </div>

            {/* Loading Bar */}
            <div className="mt-4 bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-full transition-all duration-1000"
                style={{ width: `${((5 - interstitialCountdown) / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Sticky Countdown Bar */}
        <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-3">
                  <FaClock className="text-2xl animate-pulse" />
                  <div>
                    <p className="text-sm font-medium opacity-90">الوصول إلى الدورة الكاملة</p>
                    <p className="text-xs opacity-75">انتظر لتفعيل رابط الدورة الأصلية</p>
                  </div>
                </div>
                <div className="md:hidden">
                  <FaClock className="text-xl animate-pulse" />
                </div>
              </div>

              {!showButton ? (
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black">{countdown}</div>
                    <div className="text-xs opacity-75">ثانية</div>
                  </div>
                  <div className="hidden md:block w-16 h-16 relative">
                    <svg className="transform -rotate-90 w-16 h-16">
                      <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.3)" strokeWidth="4" fill="none" />
                      <circle
                        cx="32" cy="32" r="28"
                        stroke="white"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 28}`}
                        strokeDashoffset={`${2 * Math.PI * 28 * (countdown / 30)}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <button
                  onClick={goToCourse}
                  className="group bg-white text-purple-600 px-6 md:px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2"
                >
                  <span className="hidden md:inline">انتقل إلى الدورة</span>
                  <span className="md:hidden">الدورة</span>
                  <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Main Article Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Image */}
              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
                    {post.category}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    {post.title}
                  </h1>
                </div>
              </div>

              {/* Post Meta */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                      <FaUser className="text-white" />
                    </div>
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-purple-500" />
                    <span>{new Date(post.publishedDate).toLocaleDateString('ar-EG', { year:'numeric', month:'long', day:'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-pink-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Top Banner Ad */}
              <AdSenseUnit 
                adSlot="2150792287"
                adFormat="horizontal"
                style={{ minHeight: '90px' }}
              />

              {/* Excerpt Box */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-purple-500 rounded-2xl p-6 shadow-lg">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
              </div>

              {/* Article Content */}
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b-4 prose-h2:border-purple-500
                    prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-purple-600
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-lg
                    prose-ul:my-4 prose-ul:space-y-2
                    prose-ol:my-4 prose-ol:space-y-2
                    prose-li:text-gray-700 prose-li:leading-relaxed
                    prose-li:marker:text-purple-500 prose-li:marker:font-bold
                    prose-strong:text-gray-900 prose-strong:font-bold prose-strong:text-purple-600
                    prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* In-Article Ad */}
                <AdSenseUnit 
                  adSlot="2444761165"
                  adFormat="fluid"
                  style={{ minHeight: '250px' }}
                  label="إعلان"
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t-2 border-gray-100">
                  <div className="flex items-center gap-3 flex-wrap">
                    <FaTag className="text-purple-500 text-lg" />
                    <span className="font-bold text-gray-900">الوسوم:</span>
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-200 hover:to-pink-200 transition cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA to Course */}
              <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 rounded-3xl shadow-2xl p-8 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
                
                <div className="relative z-10">
                  <FaGraduationCap className="text-6xl mx-auto mb-4" />
                  <h3 className="text-3xl font-black mb-3">
                    هل أنت مستعد للبدء؟
                  </h3>
                  <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                    احصل على الوصول الكامل إلى الدورة الأصلية مع جميع الموارد والشهادات المعتمدة
                  </p>
                  
                  {showButton ? (
                    <button
                      onClick={goToCourse}
                      className="group bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                    >
                      <span>انتقل إلى الدورة الآن</span>
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  ) : (
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 inline-block">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 relative">
                          <svg className="transform -rotate-90 w-16 h-16">
                            <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.3)" strokeWidth="4" fill="none" />
                            <circle
                              cx="32" cy="32" r="28"
                              stroke="white"
                              strokeWidth="4"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 28}`}
                              strokeDashoffset={`${2 * Math.PI * 28 * (countdown / 30)}`}
                              strokeLinecap="round"
                              className="transition-all duration-1000"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-2xl font-black">{countdown}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">جاري التحضير...</p>
                          <p className="text-sm text-white/80">الرابط سيظهر خلال {countdown} ثانية</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Ad */}
              <AdSenseUnit 
                adSlot="6389420190"
                adFormat="rectangle"
                style={{ minHeight: '250px' }}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Info Card */}
              <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <FaStar className="text-yellow-500 text-xl" />
                  <h2 className="text-2xl font-black text-gray-900">معلومات سريعة</h2>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-purple-600" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* What You'll Learn */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaBook className="text-purple-600" />
                    ما ستتعلمه:
                  </h4>
                  <ul className="space-y-2">
                    {post.tags.map((tag, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-purple-600 mt-1 text-lg">✓</span>
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-purple-50 rounded-xl p-4 text-center border-2 border-purple-200">
                    <FaClock className="text-3xl text-purple-600 mx-auto mb-2" />
                    <div className="text-lg font-black text-purple-600">{post.readTime}</div>
                    <div className="text-xs text-gray-600">وقت القراءة</div>
                  </div>
                  <div className="bg-pink-50 rounded-xl p-4 text-center border-2 border-pink-200">
                    <FaBook className="text-3xl text-pink-600 mx-auto mb-2" />
                    <div className="text-lg font-black text-pink-600">{post.category}</div>
                    <div className="text-xs text-gray-600">التصنيف</div>
                  </div>
                </div>
              </div>

              {/* Sidebar Ad */}
              <AdSenseUnit 
                adSlot="8221376618"
                adFormat="rectangle"
                style={{ minHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}