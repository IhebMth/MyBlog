"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaCalendar, 
  FaUser, 
  FaClock, 
  FaTag,
  FaBook,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaExternalLinkAlt,
  FaStar,
  FaLightbulb,
  FaDownload,
  FaLink
} from 'react-icons/fa'
import ShareButtons from './ShareButtons'

export default function RedirectPage({ targetUrl, postSlug, post }) {
  const [currentPage, setCurrentPage] = useState('first')
  const [continueTimer, setContinueTimer] = useState(10)
  const [showContinueButton, setShowContinueButton] = useState(false)
  const [readProgress, setReadProgress] = useState(0)

  // Check if post has multiple links or single link
  const hasMultipleLinks = post.externalLinks && post.externalLinks.length > 0
  const links = hasMultipleLinks ? post.externalLinks : [{ label: 'زيارة الرابط', url: targetUrl, icon: '🔗' }]

  // Timer for continue button
  useEffect(() => {
    if (currentPage === 'first' && continueTimer > 0) {
      const timer = setInterval(() => {
        setContinueTimer(prev => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (currentPage === 'first' && continueTimer === 0) {
      setShowContinueButton(true)
    }
  }, [continueTimer, currentPage])

  // Reading progress
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
    setContinueTimer(10)
    setShowContinueButton(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const highlights = [
    { icon: FaGraduationCap, text: 'محتوى تعليمي متميز', color: 'purple' },
    { icon: FaBook, text: 'مواد شاملة ومنظمة', color: 'blue' },
    { icon: FaCheckCircle, text: 'سهولة الوصول', color: 'green' },
    { icon: FaLightbulb, text: 'استخدام عملي', color: 'yellow' }
  ]

  // ============================================
  // FIRST PAGE
  // ============================================
  if (currentPage === 'first') {
    return (
      <>
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-150"
            style={{ width: `${readProgress}%` }}
          />
        </div>

        {/* Sticky Header */}
        <div className="sticky top-0 z-40 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-3">
                <FaBook className="text-xl" />
                <span className="text-sm md:text-base font-medium">
                  اقرأ المقال الكامل
                </span>
              </div>
              {showContinueButton && (
                <button
                  onClick={handleContinueToSecondPage}
                  className="bg-white text-purple-600 px-4 md:px-6 py-2 rounded-xl font-bold hover:scale-105 transition-all flex items-center gap-2 text-sm md:text-base shadow-lg"
                >
                  <span>التفاصيل الإضافية</span>
                  <FaArrowRight />
                </button>
              )}
            </div>
          </div>
        </div>

        <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Cover Image */}
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
                    <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3 shadow-lg">
                      {post.category}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                      {post.title}
                    </h1>
                  </div>
                </div>

                {/* Meta Info */}
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
                      <span>{new Date(post.publishedDate).toLocaleDateString('ar-EG')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-pink-500" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Excerpt */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-r-4 border-purple-500 rounded-2xl p-6 shadow-lg">
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>

                {/* First Page Content */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
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
                      prose-strong:text-purple-600 prose-strong:font-bold
                      prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: post.firstPageContent }}
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

                <ShareButtons post={post} />

                {/* Continue CTA */}
                <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 rounded-3xl shadow-2xl p-8 text-white text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
                  
                  <div className="relative z-10">
                    <FaCheckCircle className="text-6xl mx-auto mb-4" />
                    <h3 className="text-3xl font-black mb-3">
                      هل تريد معرفة المزيد؟
                    </h3>
                    <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
                      تابع القراءة للحصول على تفاصيل إضافية ونصائح محددة
                    </p>
                    
                    {showContinueButton ? (
                      <button
                        onClick={handleContinueToSecondPage}
                        className="bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
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
                                strokeDashoffset={`${2 * Math.PI * 40 * (continueTimer / 10)}`}
                                strokeLinecap="round"
                                className="transition-all duration-1000"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-3xl font-black">{continueTimer}</div>
                            </div>
                          </div>
                          <p className="text-lg font-bold">يرجى الانتظار...</p>
                          <p className="text-sm opacity-80 mt-2">الزر سيظهر خلال {continueTimer} ثانية</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
                  <div className="flex items-center gap-2 mb-6">
                    <FaStar className="text-yellow-500 text-2xl" />
                    <h2 className="text-2xl font-black text-gray-900">نقاط مهمة</h2>
                  </div>

                  <div className="space-y-4 mb-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-${item.color}-100 flex items-center justify-center flex-shrink-0`}>
                          <item.icon className={`text-${item.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FaBook className="text-purple-600" />
                      ما ستتعلمه:
                    </h4>
                    <ul className="space-y-2">
                      {post.tags.slice(0, 4).map((tag, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-purple-600 mt-1">✓</span>
                          <span>{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </>
    )
  }

  // ============================================
  // SECOND PAGE - With Multiple Links
  // ============================================
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <div className="sticky top-0 z-40 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <FaGraduationCap className="text-2xl" />
              <div>
                <p className="text-sm md:text-base font-medium">التفاصيل الإضافية</p>
              </div>
            </div>
            
            {hasMultipleLinks && links.length > 0 && (
              <button
                onClick={() => handleLinkClick(links[0].url)}
                className="bg-white text-green-600 px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-xl flex items-center gap-2 text-sm md:text-base"
              >
                <span className="hidden md:inline">{links[0].label}</span>
                <span className="md:hidden">الروابط</span>
                <FaExternalLinkAlt />
              </button>
            )}
          </div>
        </div>
      </div>

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="lg:col-span-2 space-y-6">
              {/* Cover */}
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

              <div className="bg-gradient-to-br from-green-50 to-blue-50 border-r-4 border-green-500 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-green-600 text-3xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">معلومات إضافية محددة</h3>
                    <p className="text-gray-700 leading-relaxed">
                      تعرف على التفاصيل الدقيقة والاستراتيجيات المتقدمة للنجاح
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Page Content */}
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
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
                    prose-strong:text-green-600 prose-strong:font-bold
                    prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.secondPageContent }}
                />
              </div>

              <ShareButtons post={post} variant="green" />

              {/* Multiple Links CTA */}
              <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
                
                <div className="relative z-10">
                  <FaDownload className="text-7xl mx-auto mb-6" />
                  <h3 className="text-4xl font-black mb-4">
                    🎯 الروابط المتاحة
                  </h3>
                  <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    اختر المنصة المناسبة لك وابدأ الآن
                  </p>
                  
                  {/* Links Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {links.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => handleLinkClick(link.url)}
                        className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                      >
                        <span className="text-3xl">{link.icon}</span>
                        <span>{link.label}</span>
                        <FaExternalLinkAlt className="text-xl group-hover:translate-x-2 transition-transform" />
                      </button>
                    ))}
                  </div>

                  <p className="text-sm mt-6 opacity-75">
                    سيتم فتح الروابط في نوافذ جديدة
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-3xl shadow-xl p-6 sticky top-24">
                <FaDownload className="text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-3 text-center">
                  الروابط المتاحة
                </h3>
                <p className="text-white/90 mb-6 text-center leading-relaxed">
                  احصل على الوصول الكامل من المنصة المناسبة لك
                </p>
                
                <div className="space-y-3">
                  {links.slice(0, 3).map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handleLinkClick(link.url)}
                      className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-between group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-2xl">{link.icon}</span>
                        <span className="text-sm">{link.label}</span>
                      </span>
                      <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
                
                <p className="text-xs mt-4 text-center opacity-75">
                  روابط موثوقة وآمنة
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}