
"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaExternalLinkAlt, 
  FaArrowLeft, 
  FaClock, 
  FaUser,
  FaTag,
  FaInfoCircle
} from 'react-icons/fa'

export default function RedirectPage({ targetUrl, postSlug, post }) {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = targetUrl
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetUrl])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header Image */}
        <div className="relative h-56 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover opacity-30"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <FaExternalLinkAlt className="text-white text-6xl mx-auto mb-4 animate-bounce" />
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                جاري التحويل...
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content - NO ADS */}
        <div className="p-8 md:p-12">
          
          {/* Countdown Timer */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-6">
              سيتم تحويلك إلى المقالة الكاملة خلال:
            </p>

            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full text-white text-5xl font-bold shadow-2xl animate-pulse">
              {countdown}
            </div>
          </div>

          {/* Post Preview */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 mb-6 border-2 border-blue-100">
            <div className="flex items-center gap-2 mb-3">
              <FaInfoCircle className="text-blue-500" />
              <span className="text-sm font-semibold text-blue-600">معلومات المقالة</span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <FaUser className="text-purple-500" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-green-500" />
                <span>{post.readTime}</span>
              </div>
              {post.category && (
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {post.category}
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <FaTag className="text-gray-400 text-sm" />
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaExternalLinkAlt />
              <span>الانتقال الآن إلى المقالة</span>
            </a>

            <Link
              href="/"
              className="flex items-center justify-center gap-3 w-full bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-300 transition-all"
            >
              <FaArrowLeft />
              <span>العودة للرئيسية</span>
            </Link>
          </div>

          {/* Helper Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              إذا لم يتم التحويل تلقائياً، انقر على زر "الانتقال الآن"
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-4 border-t border-gray-200">
          <p className="text-xs text-gray-600 text-center">
            🔗 سيتم فتح المقالة في نافذة جديدة للحفاظ على تجربة تصفح أفضل
          </p>
        </div>
      </div>
    </div>
  )
}