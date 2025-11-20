// ============================================
// app/about/page.js - IMPORTANT FOR ADSENSE
// ============================================
import { FaBook, FaUsers, FaHeart, FaRocket } from 'react-icons/fa'

export const metadata = {
  title: 'من نحن | دروس',
  description: 'تعرف على مدونة دروس - منصتك التعليمية الشاملة للتطوير الذاتي والمهني',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              من نحن
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-2xl text-gray-600 leading-relaxed">
              منصة تعليمية شاملة تهدف إلى نشر المعرفة والإلهام في العالم العربي
            </p>
          </div>

          {/* Story */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                بدأت مدونة <strong>دروس</strong> من رؤية بسيطة: جعل التعليم عالي الجودة متاحاً للجميع في العالم العربي. نؤمن بأن التعليم هو حق أساسي لكل إنسان، وأن المعرفة هي المفتاح لتحقيق الأحلام وبناء مستقبل أفضل.
              </p>
              <p>
                منذ انطلاقتنا، عملنا بجد لتقديم محتوى تعليمي عالي الجودة يغطي مجالات متنوعة، من اللغات والتعليم الأكاديمي إلى التطوير المهني والتقني. كل مقالة نكتبها تمر بعملية بحث وتحرير دقيقة لضمان تقديم معلومات دقيقة ومفيدة.
              </p>
              <p>
                نحن لسنا مجرد مدونة، بل مجتمع من المتعلمين الشغوفين الذين يسعون للنمو والتطور المستمر. نؤمن بقوة التعلم مدى الحياة وبأن كل شخص قادر على تحقيق أهدافه مع التوجيه والموارد الصحيحة.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <FaRocket className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
              <p className="text-gray-700 leading-relaxed">
                تمكين الأفراد في العالم العربي من خلال توفير محتوى تعليمي عالي الجودة يساعدهم على تحقيق أهدافهم الشخصية والمهنية.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">قيمنا</h3>
              <p className="text-gray-700 leading-relaxed">
                الجودة، الأمانة، الشغف بالتعليم، والالتزام بتقديم محتوى أصلي ومفيد يحترم وقت وجهد قرائنا الكرام.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">ما نقدمه</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaBook className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">محتوى تعليمي شامل</h4>
                  <p className="text-gray-600">مقالات وإرشادات مفصلة في مختلف المجالات التعليمية والمهنية</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">مجتمع نشط</h4>
                  <p className="text-gray-600">منصة للتواصل وتبادل الخبرات بين المتعلمين</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaRocket className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">موارد محدثة</h4>
                  <p className="text-gray-600">محتوى يواكب أحدث التطورات والاتجاهات التعليمية</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaHeart className="text-yellow-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">دعم مستمر</h4>
                  <p className="text-gray-600">فريق متخصص لمساعدتك في رحلتك التعليمية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">فريق العمل</h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-6">
              نحن فريق من المحررين والكتاب المتخصصين، كل منا خبير في مجاله، نجتمع معاً لتقديم أفضل محتوى تعليمي ممكن.
            </p>
            <p className="text-lg text-white/80">
              نعمل بشغف وتفانٍ لجعل التعليم أكثر سهولة ومتعة للجميع.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}