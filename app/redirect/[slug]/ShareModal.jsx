"use client"

import Image from 'next/image'
import { 
  FaShareAlt,
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp,
  FaTimes,
  FaExternalLinkAlt,
  FaUser,
  FaClock
} from 'react-icons/fa'

export default function ShareModal({ 
  show, 
  onClose, 
  platform, 
  post, 
  onShare 
}) {
  if (!show) return null;

  const getPlatformColor = () => {
    switch(platform) {
      case 'facebook':
        return 'bg-gradient-to-r from-blue-600 to-blue-700';
      case 'telegram':
        return 'bg-gradient-to-r from-blue-400 to-blue-500';
      case 'whatsapp':
        return 'bg-gradient-to-r from-green-500 to-green-600';
      default:
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
    }
  };

  const getPlatformIcon = () => {
    switch(platform) {
      case 'facebook':
        return <FaFacebookF className="text-3xl" />;
      case 'telegram':
        return <FaTelegramPlane className="text-3xl" />;
      case 'whatsapp':
        return <FaWhatsapp className="text-3xl" />;
      default:
        return <FaShareAlt className="text-3xl" />;
    }
  };

  const getPlatformName = () => {
    switch(platform) {
      case 'facebook':
        return 'فيسبوك';
      case 'telegram':
        return 'تيليجرام';
      case 'whatsapp':
        return 'واتساب';
      default:
        return 'مشاركة';
    }
  };

  const getButtonColor = () => {
    switch(platform) {
      case 'facebook':
        return 'bg-blue-600 hover:bg-blue-700';
      case 'telegram':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'whatsapp':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-purple-600 hover:bg-purple-700';
    }
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" 
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl animate-scaleIn max-h-[90vh] overflow-y-auto" 
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className={`${getPlatformColor()} text-white p-6 rounded-t-3xl relative`}>
            <button 
              onClick={onClose}
              className="absolute top-4 left-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
            >
              <FaTimes />
            </button>
            <div className="flex items-center gap-3 justify-center">
              {getPlatformIcon()}
              <span className="text-2xl font-bold">مشاركة على {getPlatformName()}</span>
            </div>
          </div>

          {/* Preview Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">👀</span>
              معاينة المشاركة
            </h3>
            
            {/* Post Preview Card */}
            <div className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {post.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 bg-gray-50">
                <h4 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FaUser className="text-purple-500" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-pink-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* URL Preview */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <FaExternalLinkAlt />
                    <span className="truncate font-mono">
                      {typeof window !== 'undefined' ? window.location.href : ''}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Message Preview */}
            <div className="mt-6 bg-gray-100 rounded-2xl p-4">
              <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="text-lg">💬</span>
                الرسالة التي سيتم مشاركتها:
              </p>
              <div className="bg-white rounded-xl p-4 text-gray-800">
                {platform === 'whatsapp' ? (
                  <>
                    <strong>{post.title}</strong>
                    <br/><br/>
                    <span className="text-blue-600 text-sm">
                      {typeof window !== 'undefined' ? window.location.href : ''}
                    </span>
                  </>
                ) : (
                  <>
                    {post.title}
                    <br/>
                    <span className="text-blue-600 text-sm">
                      {typeof window !== 'undefined' ? window.location.href : ''}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-300 transition-all"
              >
                إلغاء
              </button>
              <button
                onClick={onShare}
                className={`flex-1 ${getButtonColor()} text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-lg`}
              >
                <FaShareAlt />
                <span>مشاركة الآن</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}