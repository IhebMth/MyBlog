// ============================================
// app/contact/page.js - REQUIRED FOR ADSENSE
// ============================================
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

export const metadata = {
  title: 'اتصل بنا | دروس',
  description: 'تواصل معنا - نحن هنا للإجابة على أسئلتك ومساعدتك',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-gray-900 mb-4">
              اتصل بنا
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600">
              نحن هنا للإجابة على أسئلتك ومساعدتك
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات الاتصال</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
                      <a href="mailto:info@doroos.tn" className="text-purple-600 hover:underline">
                        info@doroos.tn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">الهاتف</h3>
                      <p className="text-gray-600">متاح من السبت - الخميس: 9:00 ص - 5:00 م</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">الموقع</h3>
                      <p className="text-gray-600">تونس، تونس</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">ساعات العمل</h3>
                <div className="space-y-3 text-white/90">
                  <p>السبت - الخميس: 9:00 ص - 5:00 م</p>
                  <p>الجمعة: مغلق</p>
                  <p className="text-sm mt-4 text-white/75">
                    نسعى للرد على جميع الاستفسارات خلال 24-48 ساعة
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    الموضوع *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
                    placeholder="موضوع رسالتك"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none resize-none"
                    placeholder="اكتب رسالتك هنا..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <span>إرسال الرسالة</span>
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}