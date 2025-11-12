/* eslint-disable react/no-unescaped-entities */
export const metadata = {
  title: 'شروط الاستخدام',
  description: 'شروط وأحكام استخدام موقع دروس - تعرف على حقوقك وواجباتك عند استخدام المدونة',
  keywords: 'شروط الاستخدام, أحكام, قوانين الموقع, سياسة الاستخدام',
  openGraph: {
    title: 'شروط الاستخدام - دروس',
    description: 'شروط وأحكام استخدام الموقع',
    type: 'website',
    locale: 'ar_AR',
    url: 'https://doroos-tn.vercel.app/terms',
    siteName: 'دروس',
  },
  twitter: {
    card: 'summary',
    title: 'شروط الاستخدام - دروس',
    description: 'شروط وأحكام استخدام الموقع',
  },
  alternates: {
    canonical: 'https://doroos-tn.vercel.app/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-black text-gray-900 mb-8">
            شروط الاستخدام
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">
              آخر تحديث: {new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. قبول الشروط</h2>
              <p>
                باستخدامك لموقع مدونتي، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام الموقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. استخدام الموقع</h2>
              <p>يحق لك استخدام الموقع للأغراض الشخصية والتعليمية فقط. يُحظر عليك:</p>
              <ul className="list-disc pr-6 space-y-2 mt-3">
                <li>نسخ أو تعديل أو توزيع محتوى الموقع دون إذن</li>
                <li>استخدام الموقع لأي غرض غير قانوني</li>
                <li>محاولة الوصول غير المصرح به إلى أي جزء من الموقع</li>
                <li>إرسال أي محتوى ضار أو مسيء</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. حقوق الملكية الفكرية</h2>
              <p>
                جميع المحتويات على هذا الموقع، بما في ذلك النصوص والصور والشعارات، محمية بموجب حقوق النشر والملكية الفكرية. لا يجوز استخدامها دون إذن كتابي مسبق.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. المحتوى المقدم من المستخدمين</h2>
              <p>
                عند إرسال تعليقات أو محتوى آخر إلى الموقع، فإنك تمنحنا حقًا غير حصري لاستخدام ونشر هذا المحتوى. أنت مسؤول عن أي محتوى تنشره.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. الروابط الخارجية</h2>
              <p>
                قد يحتوي الموقع على روابط لمواقع خارجية. لسنا مسؤولين عن محتوى أو ممارسات هذه المواقع. استخدامك لها على مسؤوليتك الخاصة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. إخلاء المسؤولية</h2>
              <p>
                يتم توفير المحتوى على هذا الموقع "كما هو" دون أي ضمانات. لا نضمن دقة أو اكتمال أو حداثة المعلومات. استخدامك للموقع على مسؤوليتك الخاصة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. الإعلانات</h2>
              <p>
                يحتوي الموقع على إعلانات من Google AdSense وشركاء آخرين. لا نتحكم في محتوى هذه الإعلانات ولسنا مسؤولين عنها.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. حدود المسؤولية</h2>
              <p>
                لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية تنشأ عن استخدامك للموقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. التغييرات على الشروط</h2>
              <p>
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التغييرات على هذه الصفحة مع تاريخ "آخر تحديث" المحدث.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. القانون الواجب التطبيق</h2>
              <p>
                تخضع هذه الشروط وتفسر وفقاً لقوانين الجمهورية التونسية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. اتصل بنا</h2>
              <p>
                إذا كان لديك أي أسئلة حول شروط الاستخدام، يرجى الاتصال بنا:
              </p>
              <div className="bg-blue-50 border-r-4 border-blue-500 p-4 mt-4 rounded-lg">
                <p className="font-semibold">البريد الإلكتروني: contact@doroos-tn.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}