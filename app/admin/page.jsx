"use client"

import { useState, useEffect } from 'react'
import { FaCopy, FaEye, FaPlus, FaCheck, FaTrash } from 'react-icons/fa'

export default function AdminPostCreator() {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    externalLinks: [{ label: '', url: '', icon: '🔗', platform: 'web' }],
    firstPageContent: '',
    secondPageContent: '',
    coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    author: 'محمد العربي',
    category: 'تعليم',
    tags: '',
    readTime: '12 دقيقة',
    featured: false
  })

  const [generatedCode, setGeneratedCode] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  // ✅ Handle external links array
  const handleLinkChange = (index, field, value) => {
    const newLinks = [...formData.externalLinks]
    newLinks[index][field] = value
    setFormData(prev => ({ ...prev, externalLinks: newLinks }))
  }

  const addLink = () => {
    setFormData(prev => ({
      ...prev,
      externalLinks: [...prev.externalLinks, { label: '', url: '', icon: '🔗', platform: 'web' }]
    }))
  }

  const removeLink = (index) => {
    if (formData.externalLinks.length > 1) {
      setFormData(prev => ({
        ...prev,
        externalLinks: prev.externalLinks.filter((_, i) => i !== index)
      }))
    }
  }

  const generatePostObject = () => {
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    const id = Date.now()
    const publishedDate = new Date().toISOString().split('T')[0]

    // ✅ Filter valid external links
    const validLinks = formData.externalLinks.filter(link => link.url && link.label)

    const postObject = {
      id,
      slug: formData.slug,
      title: formData.title,
      excerpt: formData.excerpt,
      // ✅ Only add externalLink if there's exactly ONE link
      ...(validLinks.length === 1 && { externalLink: validLinks[0].url }),
      // ✅ Always add externalLinks array if any links exist
      ...(validLinks.length > 0 && { externalLinks: validLinks }),
      firstPageContent: formData.firstPageContent || undefined,
      secondPageContent: formData.secondPageContent || undefined,
      coverImage: formData.coverImage,
      author: formData.author,
      publishedDate,
      category: formData.category,
      tags: tagsArray,
      readTime: formData.readTime,
      featured: formData.featured
    }

    Object.keys(postObject).forEach(key => postObject[key] === undefined && delete postObject[key])

    // ✅ Generate clean code
    const code = `{
  id: ${postObject.id},
  slug: '${postObject.slug}',
  title: '${postObject.title}',
  excerpt: '${postObject.excerpt}',${postObject.externalLink ? `\n  externalLink: '${postObject.externalLink}',` : ''}
  ${postObject.externalLinks ? `externalLinks: ${JSON.stringify(postObject.externalLinks, null, 4).replace(/^/gm, '  ')},` : ''}
  ${postObject.firstPageContent ? `firstPageContent: \`${postObject.firstPageContent}\`,\n  ` : ''}${postObject.secondPageContent ? `secondPageContent: \`${postObject.secondPageContent}\`,\n  ` : ''}coverImage: '${postObject.coverImage}',
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

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4">
            🚀 Admin Post Creator v2.0
          </h1>
          <p className="text-xl text-gray-300">
            ✨ Now supports multiple external links per post!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaPlus className="text-purple-600" />
              Post Details
            </h2>

            <div className="space-y-4">
              {/* Title */}
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

              {/* Slug */}
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

              {/* Excerpt */}
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

              {/* ✅ External Links Section */}
              <div className="border-2 border-green-300 rounded-xl p-4 bg-green-50">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  🔗 External Links (Optional - for redirect posts)
                </label>
                {formData.externalLinks.map((link, index) => (
                  <div key={index} className="space-y-2 mb-4 p-3 bg-white rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-600">Link {index + 1}</span>
                      {formData.externalLinks.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeLink(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      value={link.label}
                      onChange={(e) => handleLinkChange(index, 'label', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none text-sm"
                      placeholder="Label (e.g., تحميل للأندرويد)"
                    />
                    <input
                      type="url"
                      value={link.url}
                      onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none text-sm"
                      placeholder="URL (https://...)"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={link.icon}
                        onChange={(e) => handleLinkChange(index, 'icon', e.target.value)}
                        className="px-3 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none text-sm"
                        placeholder="Icon (emoji)"
                      />
                      <input
                        type="text"
                        value={link.platform}
                        onChange={(e) => handleLinkChange(index, 'platform', e.target.value)}
                        className="px-3 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none text-sm"
                        placeholder="Platform"
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addLink}
                  className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <FaPlus /> Add Another Link
                </button>
                <p className="text-xs text-green-700 mt-2">
                  ℹ️ Add multiple links if you want users to choose (Android/iOS/Web)
                </p>
              </div>

              {/* First Page Content */}
              <div className="border-2 border-purple-300 rounded-xl p-4 bg-purple-50">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  📄 First Page Content *
                </label>
                <textarea
                  name="firstPageContent"
                  value={formData.firstPageContent}
                  onChange={handleChange}
                  rows="8"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none font-mono text-sm"
                  placeholder="<h2>Heading</h2><p>Content...</p>"
                  required
                />
              </div>

              {/* Second Page Content */}
              <div className="border-2 border-blue-300 rounded-xl p-4 bg-blue-50">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  📝 Second Page Content *
                </label>
                <textarea
                  name="secondPageContent"
                  value={formData.secondPageContent}
                  onChange={handleChange}
                  rows="8"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none font-mono text-sm"
                  placeholder="<h2>More Details</h2><p>Content...</p>"
                  required
                />
              </div>

              {/* Category & Read Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
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
                    <option>مواقع وأدوات</option>
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
                    placeholder="12 دقيقة"
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                  placeholder="tag1, tag2, tag3"
                />
              </div>

              {/* Cover Image */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Cover Image URL</label>
                <input
                  type="url"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                />
              </div>

              {/* Author */}
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

              {/* Featured */}
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

              {/* Generate Button */}
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
          <div className="space-y-6 max-h-[90vh] overflow-y-auto">
            {showPreview ? (
              <div className="space-y-6">
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

                  <pre className="bg-gray-900 text-green-400 p-6 rounded-2xl overflow-x-auto text-sm font-mono max-h-[500px] overflow-y-auto">
                    {generatedCode}
                  </pre>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">📋 Next Steps:</h3>
                  <ol className="space-y-3 text-lg">
                    <li>1. ✅ Copy the generated code</li>
                    <li>2. 📂 Open app/posts/data.js</li>
                    <li>3. ➕ Add it to the posts array</li>
                    <li>4. 💾 Save the file</li>
                    <li>5. 🎉 Done! Your post is ready!</li>
                  </ol>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex items-center justify-center text-center">
                <div>
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Fill the form
                  </h3>
                  <p className="text-gray-600">
                    Complete the form and click Generate Post Code
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