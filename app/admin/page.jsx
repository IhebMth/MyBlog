"use client"
import { useState } from 'react'
import { FaCopy, FaEye, FaPlus, FaCheck } from 'react-icons/fa'

export default function AdminPostCreator() {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    externalLink: '',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    author: 'محمد العربي',
    category: 'تعليم',
    tags: '',
    readTime: '5 دقائق',
    featured: false
  })

  const [generatedCode, setGeneratedCode] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Auto-generate slug from title
    if (name === 'title' && !formData.slug) {
      const slug = value
        .toLowerCase()
        .replace(/[^\u0600-\u06FFa-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
      setFormData(prev => ({ ...prev, slug }))
    }
  }

  const generatePostObject = () => {
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    
    const postObject = {
      id: Date.now(),
      slug: formData.slug,
      title: formData.title,
      excerpt: formData.excerpt,
      externalLink: formData.externalLink || undefined,
      content: formData.content,
      coverImage: formData.coverImage,
      author: formData.author,
      publishedDate: new Date().toISOString().split('T')[0],
      category: formData.category,
      tags: tagsArray,
      readTime: formData.readTime,
      featured: formData.featured
    }

    // Remove undefined values
    Object.keys(postObject).forEach(key => 
      postObject[key] === undefined && delete postObject[key]
    )

    const code = `  {
    id: ${postObject.id},
    slug: '${postObject.slug}',
    title: '${postObject.title}',
    excerpt: '${postObject.excerpt}',${postObject.externalLink ? `
    externalLink: '${postObject.externalLink}',` : ''}
    content: \`${postObject.content}\`,
    coverImage: '${postObject.coverImage}',
    author: '${postObject.author}',
    publishedDate: '${postObject.publishedDate}',
    category: '${postObject.category}',
    tags: ${JSON.stringify(postObject.tags)},
    readTime: '${postObject.readTime}',
    featured: ${postObject.featured}
  }`

    setGeneratedCode(code)
    setShowPreview(true)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4">
            🚀 Admin Post Creator
          </h1>
          <p className="text-xl text-gray-300">
            Create new posts and copy the code to data.js
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaPlus className="text-purple-600" />
              Post Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                  placeholder="عنوان المقالة"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Slug *</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none font-mono text-sm"
                  placeholder="article-slug-here"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Excerpt *</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                  placeholder="ملخص قصير للمقالة"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  External Link (Optional - for redirect)
                </label>
                <input
                  type="url"
                  name="externalLink"
                  value={formData.externalLink}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                  placeholder="https://example.com"
                />
                <p className="text-xs text-gray-500 mt-1">
                  If provided, users will be redirected to this URL
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Content (HTML) *</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows="8"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none font-mono text-sm"
                  placeholder="<h2>Heading</h2><p>Content here...</p>"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                  >
                    <option>تعليم</option>
                    <option>تقنية</option>
                    <option>تسويق</option>
                    <option>تطوير ذاتي</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Read Time</label>
                  <input
                    type="text"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                    placeholder="5 دقائق"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                  placeholder="تعليم, برمجة, تطوير"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Cover Image URL</label>
                <input
                  type="url"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-5 h-5 text-purple-600 rounded"
                />
                <label htmlFor="featured" className="text-sm font-bold text-gray-700">
                  Featured Post ⭐
                </label>
              </div>

              <button
                onClick={generatePostObject}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaEye />
                Generate Post Code
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="space-y-6">
            {showPreview ? (
              <>
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                      <FaEye className="text-purple-600" />
                      Generated Code
                    </h2>
                    <button
                      onClick={copyToClipboard}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                        copied 
                          ? 'bg-green-500 text-white' 
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {copied ? <FaCheck /> : <FaCopy />}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <pre className="bg-gray-900 text-green-400 p-6 rounded-2xl overflow-x-auto text-sm font-mono max-h-[600px] overflow-y-auto">
                    {generatedCode}
                  </pre>

                  <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Instructions:</strong> Copy the code above and paste it into your 
                      <code className="bg-yellow-100 px-2 py-1 rounded mx-1">app/posts/data.js</code> 
                      file in the <code className="bg-yellow-100 px-2 py-1 rounded">posts</code> array.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">📋 Next Steps:</h3>
                  <ol className="space-y-3 text-lg">
                    <li>1. Copy the generated code</li>
                    <li>2. Open <code className="bg-white/20 px-2 py-1 rounded">app/posts/data.js</code></li>
                    <li>3. Add it to the posts array</li>
                    <li>4. Save the file</li>
                    <li>5. Post will appear automatically!</li>
                  </ol>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex items-center justify-center text-center">
                <div>
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Fill the form
                  </h3>
                  <p className="text-gray-600">
                    Complete the form and click &quot;Generate Post Code&quot; to see the preview
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}