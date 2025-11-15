"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { 
  FaCalendar, 
  FaUser, 
  FaClock, 
  FaTag,
  FaBook,
  FaTrophy,
  FaUsers,
  FaStar,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa'

// AdSense Component
function AdSenseUnit({ adSlot, adFormat = 'auto', style = {}, label = 'مساحة إعلانية' }) {
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID
  const adRef = useRef(null)

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && adSenseId && adRef.current) {
      try {
        if (window.adsbygoogle) {
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
    <div className="bg-gray-50 rounded-2xl p-4 my-6" ref={adRef}>
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
  // Page state: 'first' or 'second'
  const [currentPage, setCurrentPage] = useState('first')
  
  // Auto ad timer (30 seconds) - shows ad automatically
  const [adTimer, setAdTimer] = useState(30)
  const [showContinueButton, setShowContinueButton] = useState(false)
  
  const [readProgress, setReadProgress] = useState(0)

  // Auto ad timer countdown
  useEffect(() => {
    if (currentPage === 'first' && adTimer > 0) {
      const timer = setInterval(() => {
        setAdTimer(prev => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (currentPage === 'first' && adTimer === 0) {
      setShowContinueButton(true)
    }
  }, [adTimer, currentPage])

  // Reading progress (for both pages)
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const trackLength = documentHeight - windowHeight
      setReadProgress((scrollTop / trackLength) * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContinueToSecondPage = () => {
    setCurrentPage('second')
    window.scrollTo(0, 0)
  }

  const handleGoToExternalLink = () => {
    window.open(targetUrl, '_blank', 'noopener,noreferrer')
  }

  const highlights = [
    { icon: FaGraduationCap, text: 'محتوى تعليمي متميز' },
    { icon: FaBook, text: 'مواد شاملة ومنظمة' },
    { icon: FaTrophy, text: 'شهادات معترف بها' },
    { icon: FaUsers, text: 'مجتمع نشط ومفيد' }
  ]

  // ============================================
  // FIRST PAGE - Full Content + Auto Ad
  // ============================================
  if (currentPage === 'first') {
    return (
      <>
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-150"
            style={{ width: `${readProgress}%` }}
          />
        </div>

        <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          
          {/* Sticky Info Bar */}
          <div className="sticky top-0 z-40 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="flex items-center gap-3">
                  <FaBook className="text-xl" />
                  <span className="text-sm md:text-base font-medium">اقرأ المقال للوصول إلى التفاصيل الإضافية</span>
                </div>
                {showContinueButton && (
                  <button
                    onClick={handleContinueToSecondPage}
                    className="bg-white text-purple-600 px-4 md:px-6 py-2 rounded-xl font-bold hover:scale-105 transition-all flex items-center gap-2 text-sm md:text-base animate-pulse"
                  >
                    <span className="hidden md:inline">المتابعة</span>
                    <span className="md:hidden">المتابعة</span>
                    <FaArrowRight />
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

                {/* Auto Ad - Top Banner */}
                <AdSenseUnit 
                  adSlot="2150792287"
                  adFormat="horizontal"
                  style={{ minHeight: '90px' }}
                  label="إعلان تلقائي - يظهر لمدة 30 ثانية"
                />

                {/* Excerpt Box */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-purple-500 rounded-2xl p-6 shadow-lg">
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>

                {/* First Page Content */}
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
                    dangerouslySetInnerHTML={{ __html: post.firstPageContent }}
                  />

                  {/* In-Article Auto Ad */}
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

                {/* CTA to Continue */}
                <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 rounded-3xl shadow-2xl p-8 text-white text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
                  
                  <div className="relative z-10">
                    <FaCheckCircle className="text-6xl mx-auto mb-4" />
                    <h3 className="text-3xl font-black mb-3">
                      هل تريد معرفة المزيد؟
                    </h3>
                    <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                      تابع القراءة للحصول على تفاصيل إضافية ونصائح محددة لتحسين أدائك في الاختبار
                    </p>
                    
                    {showContinueButton ? (
                      <button
                        onClick={handleContinueToSecondPage}
                        className="bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 animate-pulse"
                      >
                        <span>المتابعة للتفاصيل الإضافية</span>
                        <FaArrowRight className="text-2xl" />
                      </button>
                    ) : (
                      <div className="inline-block">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                          <div className="w-24 h-24 mx-auto mb-4 relative">
                            <svg className="transform -rotate-90 w-24 h-24">
                              <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.3)" strokeWidth="6" fill="none" />
                              <circle
                                cx="48" cy="48" r="40"
                                stroke="white"
                                strokeWidth="6"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 40}`}
                                strokeDashoffset={`${2 * Math.PI * 40 * (adTimer / 30)}`}
                                strokeLinecap="round"
                                className="transition-all duration-1000"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-3xl font-black">{adTimer}</div>
                            </div>
                          </div>
                          <p className="text-lg font-bold">جاري عرض الإعلان...</p>
                          <p className="text-sm opacity-80 mt-2">الزر سيظهر خلال {adTimer} ثانية</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Auto Ad */}
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

                {/* Sidebar Auto Ad */}
                <AdSenseUnit 
                  adSlot="8221376618"
                  adFormat="rectangle"
                  style={{ minHeight: '600px' }}
                />
              </div>
            </div>
          </div>
        </article>
      </>
    )
  }

  // ============================================
  // SECOND PAGE - Specific Details + Participate
  // ============================================
  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        
        {/* Sticky Participate Bar */}
        <div className="sticky top-0 z-40 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-2xl" />
                <div>
                  <p className="text-sm md:text-base font-medium">جاهز للبدء؟</p>
                  <p className="text-xs opacity-75 hidden md:block">انضم إلى المنصة الآن</p>
                </div>
              </div>
              
              <button
                onClick={handleGoToExternalLink}
                className="bg-white text-green-600 px-4 md:px-8 py-2 md:py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-xl flex items-center gap-2 text-sm md:text-base"
              >
                <span className="hidden md:inline">ابدأ التدريب الآن</span>
                <span className="md:hidden">ابدأ</span>
                <FaExternalLinkAlt />
              </button>
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
                    التفاصيل المحددة
                  </div>
                  <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    {post.title}
                  </h1>
                </div>
              </div>

              {/* Top Banner Ad */}
              <AdSenseUnit 
                adSlot="2150792287"
                adFormat="horizontal"
                style={{ minHeight: '90px' }}
              />

              {/* Info Box */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 border-r-4 border-green-500 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-green-600 text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">معلومات إضافية محددة</h3>
                    <p className="text-gray-700 leading-relaxed">
                      تعرف على التفاصيل الدقيقة لكل قسم من أقسام الاختبار والاستراتيجيات المتقدمة للنجاح
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Page Content */}
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b-4 prose-h2:border-green-500
                    prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-green-600
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-lg
                    prose-ul:my-4 prose-ul:space-y-2
                    prose-ol:my-4 prose-ol:space-y-2
                    prose-li:text-gray-700 prose-li:leading-relaxed
                    prose-li:marker:text-green-500 prose-li:marker:font-bold
                    prose-strong:text-gray-900 prose-strong:font-bold prose-strong:text-green-600
                    prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.secondPageContent }}
                />

                {/* In-Article Ad */}
                <AdSenseUnit 
                  adSlot="2444761165"
                  adFormat="fluid"
                  style={{ minHeight: '250px' }}
                  label="إعلان"
                />
              </div>

              {/* CTA to External Link */}
              <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
                
                <div className="relative z-10">
                  <FaGraduationCap className="text-7xl mx-auto mb-6" />
                  <h3 className="text-4xl font-black mb-4">
                    🎯 جاهز للبدء؟
                  </h3>
                  <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    انضم إلى <strong>PracticePTEOnline</strong> الآن واحصل على الوصول الكامل إلى اختبارات محاكاة، مواد تعليمية، وتقييمات فورية لتحسين أدائك في IELTS
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-right">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-4xl mb-2">✅</div>
                      <p className="font-bold">اختبارات محاكاة</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-4xl mb-2">📚</div>
                      <p className="font-bold">مواد تعليمية شاملة</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-4xl mb-2">🎓</div>
                      <p className="font-bold">تقييم فوري ودقيق</p>
                    </div>
                  </div>

                  <button
                    onClick={handleGoToExternalLink}
                    className="group bg-white text-green-600 px-12 py-6 rounded-2xl font-bold text-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-4"
                  >
                    <span>ابدأ التدريب الآن</span>
                    <FaExternalLinkAlt className="text-3xl group-hover:translate-x-2 transition-transform" />
                  </button>
                  
                  <p className="text-sm text-white/70 mt-4">
                    * سيتم فتح الموقع في نافذة جديدة
                  </p>
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
              
              {/* Participate Card */}
              <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-3xl shadow-xl p-6 sticky top-24">
                <FaGraduationCap className="text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-3 text-center">
                  انضم الآن!
                </h3>
                <p className="text-white/90 mb-6 text-center leading-relaxed">
                  ابدأ رحلتك نحو النجاح في IELTS مع أفضل المواد التدريبية
                </p>
                <button
                  onClick={handleGoToExternalLink}
                  className="w-full bg-white text-green-600 py-4 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-2 hover:scale-105"
                >
                  <span>ابدأ الآن</span>
                  <FaExternalLinkAlt />
                </button>
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
      </article>
    </>
  )
}