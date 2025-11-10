'use client'

import { useState } from 'react'
import { FaCopy, FaCheck, FaEye, FaCode, FaPlus } from 'react-icons/fa'

export default function AdminPage() {
  const [copied, setCopied] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    coverImage: '',
    author: '',
    category: '',
    tags: '',
    readTime: '',
    featured: false
  })

  // Generate slug from title
 const generateSlug = (title) => {
  return title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')  // Replace spaces with hyphens
    .replace(/[^\u0600-\u06FFa-zA-Z0-9-]/g, '')  // Keep Arabic, English letters, numbers, and hyphens
    .replace(/--+/g, '-')  // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, '')  // Remove leading/trailing hyphens
}

  // Get next post ID
  const getNextId = () => {
    return Date.now() // Using timestamp as unique ID
  }

  // Generate post object code
  const generatePostCode = () => {
    const slug = generateSlug(formData.title)
    const id = getNextId()
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    const today = new Date().toISOString().split('T')[0]

    return `{
  id: ${id},
  slug: '${slug}',
  title: '${formData.title}',
  excerpt: '${formData.excerpt}',
  content: \`
${formData.content}
  \`,
  coverImage: '${formData.coverImage}',
  author: '${formData.author}',
  publishedDate: '${today}',
  category: '${formData.category}',
  tags: ${JSON.stringify(tagsArray)},
  readTime: '${formData.readTime}',
  featured: ${formData.featured}
}`
  }

  // Copy to clipboard
  const copyToClipboard = () => {
    const code = generatePostCode()
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      coverImage: '',
      author: '',
      category: '',
      tags: '',
      readTime: '',
      featured: false
    })
    setShowPreview(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <FaPlus className="text-3xl" />
            لوحة إنشاء المقالات
          </h1>
          <p className="text-blue-100 text-lg">
            أنشئ مقالاً جديداً وانسخ الكود لإضافته إلى data.js
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaCode />
              معلومات المقالة
            </h2>

            <form className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  عنوان المقالة *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  placeholder="مثال: دليل شامل لتعلم البرمجة"
                  required
                />
              </div>

              {/* Author */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  اسم الكاتب *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  placeholder="مثال: محمد أحمد"
                  required
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  الوصف القصير *
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition resize-none"
                  placeholder="وصف مختصر يظهر في بطاقة المقالة (100-150 حرف)"
                  required
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  محتوى المقالة (HTML) *
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows="10"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition resize-none font-mono text-sm"
                  placeholder="<h2>عنوان</h2>
<p>فقرة نصية...</p>
<ul>
  <li>نقطة 1</li>
  <li>نقطة 2</li>
</ul>"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  💡 استخدم HTML tags: &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;
                </p>
              </div>

              {/* Cover Image */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  رابط صورة الغلاف *
                </label>
                <input
                  type="url"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  placeholder="https://images.unsplash.com/photo-xxxxx?w=800&q=80"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  🖼️ استخدم <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Unsplash</a> للصور المجانية
                </p>
              </div>

              {/* Category */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  التصنيف *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  required
                >
                  <option value="">اختر التصنيف</option>
                  <option value="تعليم">تعليم</option>
                  <option value="تقنية">تقنية</option>
                  <option value="تسويق">تسويق</option>
                  <option value="تطوير ذاتي">تطوير ذاتي</option>
                  <option value="ثقافة">ثقافة</option>
                </select>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  الوسوم (Tags)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  placeholder="برمجة, تعلم, Python (افصل بفاصلة)"
                />
              </div>

              {/* Read Time */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  وقت القراءة
                </label>
                <input
                  type="text"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition"
                  placeholder="5 دقائق"
                />
              </div>

              {/* Featured */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="featured"
                  id="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="featured" className="text-gray-700 font-semibold cursor-pointer">
                  مقالة مميزة ⭐
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition flex items-center justify-center gap-2"
                >
                  <FaEye />
                  {showPreview ? 'إخفاء المعاينة' : 'معاينة'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-bold hover:bg-gray-600 transition"
                >
                  مسح
                </button>
              </div>
            </form>
          </div>

          {/* Code Output Section */}
          <div className="space-y-6">
            {/* Generated Code */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaCode />
                  الكود المُنتج
                </h2>
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {copied ? <FaCheck /> : <FaCopy />}
                  {copied ? 'تم النسخ!' : 'نسخ الكود'}
                </button>
              </div>
              <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-96 overflow-y-auto">
                {generatePostCode()}
              </pre>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                📝 خطوات الإضافة
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <span>املأ جميع الحقول في النموذج</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <span>اضغط &quot;نسخ الكود&quot; في الأعلى</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <span>افتح ملف <code className="bg-gray-200 px-2 py-1 rounded">app/posts/data.js</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <span>الصق الكود داخل مصفوفة <code className="bg-gray-200 px-2 py-1 rounded">posts</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</span>
                  <span>احفظ الملف - المقالة ستظهر تلقائياً! 🎉</span>
                </li>
              </ol>
            </div>

            {/* Preview */}
            {showPreview && formData.title && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaEye />
                  معاينة المقالة
                </h3>
                <div className="border-2 border-gray-200 rounded-lg p-6">
                  {formData.coverImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={formData.coverImage}
                      alt={formData.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    {formData.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{formData.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>✍️ {formData.author}</span>
                    <span>📁 {formData.category}</span>
                    {formData.readTime && <span>⏱️ {formData.readTime}</span>}
                  </div>
                  {formData.tags && (
                    <div className="flex gap-2 flex-wrap">
                      {formData.tags.split(',').map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}