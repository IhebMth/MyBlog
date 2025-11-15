"use client"

import { useState } from 'react'
import { 
  FaShareAlt,
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp
} from 'react-icons/fa'
import ShareModal from './ShareModal'

export default function ShareButtons({ post, variant = 'default' }) {
  const [showSharePreview, setShowSharePreview] = useState(false)
  const [sharePreviewPlatform, setSharePreviewPlatform] = useState('')

  const openSharePreview = (platform) => {
    setSharePreviewPlatform(platform)
    setShowSharePreview(true)
  }

  const handleShare = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
    
    switch(sharePreviewPlatform) {
      case 'facebook':
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
        window.open(fbUrl, '_blank', 'width=600,height=400')
        break
      
      case 'telegram':
        const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`
        window.open(tgUrl, '_blank', 'width=600,height=400')
        break
      
      case 'whatsapp':
        const text = `*${post.title}*\n\n${currentUrl}`
        const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
        window.open(waUrl, '_blank', 'width=600,height=400')
        break
    }
    
    setShowSharePreview(false)
  }

  // Variant: purple-pink (for first page)
  if (variant === 'purple') {
    return (
      <>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 justify-center">
            <FaShareAlt className="text-purple-600" />
            <span>شارك هذا المقال</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => openSharePreview('facebook')}
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <FaFacebookF className="text-2xl relative z-10" />
              <span className="relative z-10">فيسبوك</span>
            </button>

            <button
              onClick={() => openSharePreview('telegram')}
              className="group relative bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <FaTelegramPlane className="text-2xl relative z-10" />
              <span className="relative z-10">تيليجرام</span>
            </button>

            <button
              onClick={() => openSharePreview('whatsapp')}
              className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <FaWhatsapp className="text-2xl relative z-10" />
              <span className="relative z-10">واتساب</span>
            </button>
          </div>
          
          <p className="text-center text-gray-600 text-sm mt-4">
            ساعد أصدقاءك بمشاركة هذا المحتوى المفيد 💚
          </p>
        </div>

        <ShareModal
          show={showSharePreview}
          onClose={() => setShowSharePreview(false)}
          platform={sharePreviewPlatform}
          post={post}
          onShare={handleShare}
        />
      </>
    )
  }

  // Variant: green-blue (for second page)
  if (variant === 'green') {
    return (
      <>
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 justify-center">
            <FaShareAlt className="text-green-600" />
            <span>شارك هذا المقال مع أصدقائك</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => openSharePreview('facebook')}
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <FaFacebookF className="text-2xl relative z-10" />
              <span className="relative z-10">فيسبوك</span>
            </button>

            <button
              onClick={() => openSharePreview('telegram')}
              className="group relative bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <FaTelegramPlane className="text-2xl relative z-10" />
              <span className="relative z-10">تيليجرام</span>
            </button>

            <button
              onClick={() => openSharePreview('whatsapp')}
              className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <FaWhatsapp className="text-2xl relative z-10" />
              <span className="relative z-10">واتساب</span>
            </button>
          </div>
          
          <p className="text-center text-gray-600 text-sm mt-4">
            ساعد أصدقاءك بمشاركة هذا المحتوى المفيد 💚
          </p>
        </div>

        <ShareModal
          show={showSharePreview}
          onClose={() => setShowSharePreview(false)}
          platform={sharePreviewPlatform}
          post={post}
          onShare={handleShare}
        />
      </>
    )
  }

  // Default variant
  return (
    <>
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 justify-center">
          <FaShareAlt className="text-purple-600" />
          <span>شارك هذا المقال</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => openSharePreview('facebook')}
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <FaFacebookF className="text-2xl relative z-10" />
            <span className="relative z-10">فيسبوك</span>
          </button>

          <button
            onClick={() => openSharePreview('telegram')}
            className="group relative bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <FaTelegramPlane className="text-2xl relative z-10" />
            <span className="relative z-10">تيليجرام</span>
          </button>

          <button
            onClick={() => openSharePreview('whatsapp')}
            className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <FaWhatsapp className="text-2xl relative z-10" />
            <span className="relative z-10">واتساب</span>
          </button>
        </div>
        
        <p className="text-center text-gray-600 text-sm mt-4">
          ساعد أصدقاءك بمشاركة هذا المحتوى المفيد 💚
        </p>
      </div>

      <ShareModal
        show={showSharePreview}
        onClose={() => setShowSharePreview(false)}
        platform={sharePreviewPlatform}
        post={post}
        onShare={handleShare}
      />
    </>
  )
}