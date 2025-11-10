"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaCalendar, 
  FaUser, 
  FaClock, 
  FaFacebook, 
  FaTwitter, 
  FaWhatsapp, 
  FaLink,
  FaArrowLeft,
  FaCheck,
  FaTag,
  FaBookmark,
  FaShareAlt
} from 'react-icons/fa'

export default function PostContent({ post, relatedPosts }) {
  const [readProgress, setReadProgress] = useState(0)
  const [copied, setCopied] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

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

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank')
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`, '_blank')
  }

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + currentUrl)}`, '_blank')
  }

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
        {/* Compact Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
          
          <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
                <Link href="/" className="hover:text-white transition">الرئيسية</Link>
                <span>/</span>
                <span className="text-purple-400">{post.category}</span>
              </div>

              {/* Category Badge */}
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                {post.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <FaUser className="text-white" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-purple-400" />
                  <span>{new Date(post.publishedDate).toLocaleDateString('ar-EG', { year:'numeric', month:'long', day:'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-pink-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 -mt-8 relative z-20">
          <div className="max-w-4xl mx-auto">
            
            {/* Floating Action Buttons */}
            <div className="sticky top-24 float-left ml-8 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl p-4 space-y-3">
                <button 
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  title="مشاركة"
                >
                  <FaShareAlt />
                </button>
                
                {showShareMenu && (
                  <div className="space-y-2 animate-fadeIn">
                    <button onClick={shareOnFacebook} className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg" title="فيسبوك">
                      <FaFacebook />
                    </button>
                    <button onClick={shareOnTwitter} className="w-12 h-12 bg-sky-500 text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg" title="تويتر">
                      <FaTwitter />
                    </button>
                    <button onClick={shareOnWhatsApp} className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg" title="واتساب">
                      <FaWhatsapp />
                    </button>
                    <button onClick={copyLink} className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-lg ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:scale-110'}`} title="نسخ الرابط">
                      {copied ? <FaCheck /> : <FaLink />}
                    </button>
                  </div>
                )}

                <button className="w-12 h-12 bg-yellow-400 text-gray-900 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg" title="حفظ">
                  <FaBookmark />
                </button>
              </div>
            </div>

            {/* Article Content Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
              {/* Featured Image */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 lg:p-16">
                {/* Article Body */}
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-4 prose-h2:border-purple-500
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-purple-600
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                    prose-ul:my-6 prose-ul:space-y-3
                    prose-ol:my-6 prose-ol:space-y-3
                    prose-li:text-gray-700 prose-li:leading-relaxed
                    prose-li:marker:text-purple-500 prose-li:marker:font-bold
                    prose-strong:text-gray-900 prose-strong:font-bold prose-strong:text-purple-600
                    prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags Section */}
                <div className="mt-16 pt-8 border-t-2 border-gray-100">
                  <div className="flex items-center gap-3 flex-wrap">
                    <FaTag className="text-purple-500 text-xl" />
                    <span className="font-bold text-gray-900 text-lg">الوسوم:</span>
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
            </div>

            {/* Mobile Share Buttons */}
            <div className="lg:hidden bg-white rounded-2xl shadow-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaShareAlt className="text-purple-500" />
                شارك المقالة
              </h3>
              <div className="flex gap-3 flex-wrap">
                <button onClick={shareOnFacebook} className="flex-1 min-w-[100px] bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  <FaFacebook /> فيسبوك
                </button>
                <button onClick={shareOnTwitter} className="flex-1 min-w-[100px] bg-sky-500 text-white py-3 rounded-xl font-semibold hover:bg-sky-600 transition flex items-center justify-center gap-2">
                  <FaTwitter /> تويتر
                </button>
                <button onClick={shareOnWhatsApp} className="flex-1 min-w-[100px] bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2">
                  <FaWhatsapp /> واتساب
                </button>
                <button onClick={copyLink} className={`flex-1 min-w-[100px] py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2 ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                  {copied ? <><FaCheck /> تم النسخ</> : <><FaLink /> نسخ</>}
                </button>
              </div>
            </div>

            {/* Author Card */}
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 rounded-3xl shadow-2xl p-8 md:p-10 mb-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
              
              <div className="relative z-10 flex items-center gap-6">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                  <FaUser className="text-4xl" />
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-1">كتب بواسطة</p>
                  <h3 className="text-3xl font-black mb-2">{post.author}</h3>
                  <p className="text-white/90">كاتب ومدون متخصص في {post.category}</p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mb-12">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-black text-gray-900 mb-3">
                    مقالات ذات صلة
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((rp) => (
                    <Link 
                      key={rp.id}
                      href={`/posts/${rp.slug}`}
                      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={rp.coverImage}
                          alt={rp.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-6">
                        <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                          {rp.category}
                        </div>
                        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors text-lg">
                          {rp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FaClock className="text-purple-500" />
                          <span>{rp.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Home Button */}
            <div className="text-center py-8">
              <Link 
                href="/" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
                <span>العودة للرئيسية</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}