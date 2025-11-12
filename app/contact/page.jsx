import { FaEnvelope, FaTelegram, FaFacebook, FaLinkedin } from 'react-icons/fa'

export const metadata = {
  title: 'اتصل بنا',
  description: 'تواصل معنا للاستفسارات والاقتراحات - نسعد بسماع آرائكم وملاحظاتكم',
  keywords: 'اتصل بنا, تواصل معنا, دعم, استفسارات',
  openGraph: {
    title: 'اتصل بنا - دروس',
    description: 'تواصل معنا للاستفسارات والاقتراحات',
    type: 'website',
    locale: 'ar_AR',
    url: 'https://doroos-tn.vercel.app/contact',
    siteName: 'دروس',
  },
  twitter: {
    card: 'summary',
    title: 'اتصل بنا - دروس',
    description: 'تواصل معنا للاستفسارات والاقتراحات',
  },
  alternates: {
    canonical: 'https://doroos-tn.vercel.app/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            تواصل معنا
          </h1>
          <p className="text-xl text-gray-600">
            نسعد بسماع آرائك واقتراحاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 rounded-3xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-black mb-8">معلومات الاتصال</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-4 rounded-xl">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                  <a href="mailto:contact@doroos-tn.com" className="hover:underline">
                    contact@doroos-tn.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-4 rounded-xl">
                  <FaTelegram className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">تيليجرام</h3>
                  <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    @yourchannel
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-4 rounded-xl">
                  <FaFacebook className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">فيسبوك</h3>
                  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    facebook.com/yourpage
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-4 rounded-xl">
                  <FaLinkedin className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">لينكد إن</h3>
                  <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    linkedin.com/company/yourcompany
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Why Contact */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                لماذا تتواصل معنا؟
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span>اقتراح موضوع جديد للمقالات</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span>الإبلاغ عن خطأ في المحتوى</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span>التعاون والشراكات</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span>الاستفسارات العامة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span>مشاركة تجربتك معنا</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-r-4 border-blue-500 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">وقت الاستجابة</h3>
              <p className="text-gray-700">
                نسعى للرد على جميع الرسائل خلال 24-48 ساعة في أيام العمل.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}