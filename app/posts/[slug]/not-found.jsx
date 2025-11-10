import Link from 'next/link'
import { FaHome, FaExclamationTriangle } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-32 h-32 bg-yellow-100 rounded-full mb-8">
          <FaExclamationTriangle className="text-6xl text-yellow-600" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">
          404
        </h1>
        
        {/* Message */}
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          المقالة غير موجودة
        </h2>
        
        <p className="text-xl text-gray-600 mb-8">
          عذراً، لم نتمكن من العثور على المقالة التي تبحث عنها. ربما تم حذفها أو نقلها.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <FaHome />
            <span>العودة للرئيسية</span>
          </Link>
          
          <Link
            href="/#posts"
            className="inline-flex items-center justify-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            <span>تصفح المقالات</span>
          </Link>
        </div>
      </div>
    </div>
  )
}