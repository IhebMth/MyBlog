import Link from 'next/link'
import Image from 'next/image'
import { posts, getFeaturedPosts } from './posts/data'
import { FaRocket, FaBookOpen, FaLightbulb, FaChartLine, FaClock, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa'

export const metadata = {
  title: 'دروس | مدونة تعليمية شاملة',
  description: 'اكتشف مقالات وإرشادات مفيدة في مختلف المجالات',
}

export default function Home() {
  const featuredPosts = getFeaturedPosts()
  const allPosts = posts

  const features = [
    {
      icon: FaBookOpen,
      title: 'محتوى تعليمي',
      description: 'مقالات وإرشادات شاملة في مختلف المجالات',
      color: 'bg-blue-500'
    },
    {
      icon: FaLightbulb,
      title: 'أفكار مبتكرة',
      description: 'اكتشف طرق جديدة للتعلم والنمو',
      color: 'bg-yellow-500'
    },
    {
      icon: FaChartLine,
      title: 'تطوير مستمر',
      description: 'محتوى محدث باستمرار لمواكبة التطورات',
      color: 'bg-green-500'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <FaRocket className="text-yellow-300" />
              <span className="text-sm font-medium">مرحباً بك في دروس</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              اكتشف عالماً من
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                المعرفة والإلهام
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              مقالات وإرشادات شاملة تساعدك على التعلم والنمو في مختلف المجالات
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#posts"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                استكشف المقالات
              </a>
              <Link
                href="/about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-200"
              >
                تعرف علينا
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                المقالات المميزة
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                أفضل المقالات التي يجب عليك قراءتها
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section id="posts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              جميع المقالات
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تصفح مجموعتنا المتنوعة من المقالات المفيدة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ابقَ على اطلاع دائم
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            تابعنا على منصات التواصل الاجتماعي لتحصل على آخر التحديثات
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all duration-200 transform hover:scale-105"
            >
              تابعنا على فيسبوك
            </a>
            <a
              href="https://t.me/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-bold transition-all duration-200 transform hover:scale-105"
            >
              انضم لقناة تيليجرام
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// Post Card Component
function PostCard({ post, featured = false }) {
  const linkHref = post.externalLink ? `/redirect/${post.slug}` : `/posts/${post.slug}`
  
  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full">
      <Link href={linkHref} className="relative h-56 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            مميز ⭐
          </div>
        )}
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          {post.category}
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 flex-wrap">
          <div className="flex items-center gap-1">
            <FaUser className="text-blue-500" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-green-500" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link href={linkHref}>
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <FaTag className="text-gray-400 text-sm" />
          {post.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={linkHref}
          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all duration-200 mt-auto"
        >
          <span>اقرأ المزيد</span>
          <FaArrowLeft className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}