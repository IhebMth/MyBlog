import Link from 'next/link'
import { FaFacebook, FaTelegram, FaYoutube, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/about', label: 'من نحن' },
    { href: '/contact', label: 'اتصل بنا' },
    { href: '/privacy', label: 'سياسة الخصوصية' },
    { href: '/terms', label: 'الشروط والأحكام' },
  ]

  const socialLinks = [
    { 
      href: 'https://facebook.com', 
      icon: FaFacebook, 
      label: 'Facebook',
      color: 'hover:text-blue-500'
    },
    { 
      href: 'https://t.me/yourchannel', 
      icon: FaTelegram, 
      label: 'Telegram',
      color: 'hover:text-blue-400'
    },
    { 
      href: 'https://youtube.com', 
      icon: FaYoutube, 
      label: 'YouTube',
      color: 'hover:text-red-500'
    },
    { 
      href: 'https://linkedin.com', 
      icon: FaLinkedin, 
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-white">مدونتي</h3>
            <p className="text-gray-300 leading-relaxed">
              مدونة متخصصة في تقديم المقالات والإرشادات المفيدة في مختلف المجالات التعليمية والثقافية
            </p>
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">تابعنا على</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a 
                      key={social.label}
                      href={social.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`bg-gray-700/50 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700 ${social.color} hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <Icon className="text-xl" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 group"
                  >
                    <span className="border-b border-transparent group-hover:border-white pb-0.5">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">التصنيفات</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/category/education"
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 group"
                >
                  <span className="border-b border-transparent group-hover:border-white pb-0.5">
                    تعليم
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/category/technology"
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 group"
                >
                  <span className="border-b border-transparent group-hover:border-white pb-0.5">
                    تقنية
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/category/culture"
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 group"
                >
                  <span className="border-b border-transparent group-hover:border-white pb-0.5">
                    ثقافة
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:info@yourdomain.com"
                  className="hover:text-white transition-colors"
                >
                  info@yourdomain.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FaPhone className="text-green-400 mt-1 flex-shrink-0" />
                <span dir="ltr">+216 XX XXX XXX</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-red-400 mt-1 flex-shrink-0" />
                <span>تونس العاصمة، تونس</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              © {currentYear} جميع الحقوق محفوظة - مدونتي
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              صُنع بـ <FaHeart className="text-red-500 animate-pulse" /> في تونس
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}