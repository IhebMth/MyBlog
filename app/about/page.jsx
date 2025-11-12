import { FaRocket, FaHeart, FaUsers, FaGraduationCap } from 'react-icons/fa'

export const metadata = {
  title: 'عن المدونة',
  description: 'تعرف على مدونة دروس ورسالتنا في تقديم محتوى تعليمي عالي الجودة في مختلف المجالات',
  keywords: 'عن المدونة, من نحن, رسالة المدونة, فريق دروس',
  openGraph: {
    title: 'عن مدونة دروس',
    description: 'تعرف على مدونتنا ورسالتنا في تقديم محتوى تعليمي عالي الجودة',
    type: 'website',
    locale: 'ar_AR',
    url: 'https://doroos-tn.vercel.app/about',
    siteName: 'دروس',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عن مدونة دروس',
    description: 'تعرف على مدونتنا ورسالتنا',
  },
  alternates: {
    canonical: 'https://doroos-tn.vercel.app/about',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            مرحباً بك في مدونة دروس
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نسعى لتقديم محتوى تعليمي عالي الجودة يساعدك على التعلم والنمو
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 text-white">
          <div className="flex items-center gap-4 mb-6">
            <FaRocket className="text-5xl" />
            <h2 className="text-4xl font-black">رسالتنا</h2>
          </div>
          <p className="text-xl leading-relaxed">
            نؤمن بأن التعليم حق للجميع. نعمل على توفير محتوى تعليمي مجاني وعالي الجودة في مختلف المجالات، 
            من البرمجة والتكنولوجيا إلى التطوير الذاتي والمهارات الحياتية.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <FaGraduationCap className="text-5xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">تعليم عالي الجودة</h3>
            <p className="text-gray-600">محتوى دقيق ومحدث باستمرار</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <FaHeart className="text-5xl text-pink-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">شغف بالتعليم</h3>
            <p className="text-gray-600">نحب ما نقوم به ونسعى للتميز</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <FaUsers className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">مجتمع متفاعل</h3>
            <p className="text-gray-600">نبني مجتمعاً من المتعلمين المتحمسين</p>
          </div>
        </div>

        {/* Story */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-black text-gray-900 mb-6">قصتنا</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              بدأنا مدونتنا في عام 2024 بهدف بسيط: مشاركة المعرفة ومساعدة الآخرين على تحقيق أهدافهم التعليمية. 
              ما بدأ كمشروع صغير تحول إلى منصة تعليمية شاملة تخدم آلاف القراء شهرياً.
            </p>
            <p>
              نحن نؤمن بقوة التعلم المستمر والتطوير الذاتي. من خلال مقالاتنا وإرشاداتنا، نسعى لتقديم قيمة حقيقية 
              لكل قارئ، سواء كان مبتدئاً يبحث عن المعرفة الأساسية أو محترفاً يسعى لتطوير مهاراته.
            </p>
            <p>
              اليوم، نفخر بأن نكون جزءاً من رحلة التعلم لآلاف الأشخاص، ونعمل باستمرار على تحسين محتوانا وتوسيع نطاق المواضيع 
              التي نغطيها.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}