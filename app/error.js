'use client'

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">حدث خطأ ما</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          إعادة المحاولة
        </button>
      </div>
    </div>
  )
}