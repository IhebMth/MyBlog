export const metadata = {
  title: 'سياسة الخصوصية',
  description: 'سياسة الخصوصية وحماية البيانات الشخصية - تعرف على كيفية جمع واستخدام بياناتك على موقع دروس',
  keywords: 'سياسة الخصوصية, حماية البيانات, الخصوصية, GDPR, أمن المعلومات',
  openGraph: {
    title: 'سياسة الخصوصية - دروس',
    description: 'سياسة الخصوصية وحماية البيانات الشخصية',
    type: 'website',
    locale: 'ar_AR',
    url: 'https://doroos-tn.vercel.app/privacy',
    siteName: 'دروس',
  },
  twitter: {
    card: 'summary',
    title: 'سياسة الخصوصية - دروس',
    description: 'سياسة الخصوصية وحماية البيانات الشخصية',
  },
  alternates: {
    canonical: 'https://doroos-tn.vercel.app/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-black text-gray-900 mb-8">
            سياسة الخصوصية
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">
              آخر تحديث: {new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">مقدمة</h2>
              <p>
                نحن في مدونتي نلتزم بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام موقعنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">المعلومات التي نجمعها</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">معلومات الاستخدام التلقائية</h3>
              <ul className="list-disc pr-6 space-y-2">
                <li>عنوان IP الخاص بك</li>
                <li>نوع المتصفح والجهاز</li>
                <li>الصفحات التي تزورها</li>
                <li>وقت ومدة الزيارة</li>
                <li>مصدر الإحالة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ملفات تعريف الارتباط (Cookies)</h2>
              <p>
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. تتضمن ملفات تعريف الارتباط التي نستخدمها:
              </p>
              <ul className="list-disc pr-6 space-y-2 mt-3">
                <li><strong>ملفات تعريف ارتباط ضرورية:</strong> لتشغيل الموقع بشكل صحيح</li>
                <li><strong>ملفات تعريف التحليلات:</strong> لفهم كيفية استخدام الزوار للموقع (Google Analytics)</li>
                <li><strong>ملفات تعريف الإعلانات:</strong> لعرض إعلانات ملائمة (Google AdSense)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google Analytics</h2>
              <p>
                نستخدم Google Analytics لتحليل استخدام موقعنا. يقوم Google Analytics بجمع معلومات مثل عدد الزيارات، الصفحات المشاهدة، ومدة الجلسة. هذه المعلومات مجهولة المصدر ولا تحدد هويتك الشخصية.
              </p>
              <p className="mt-3">
                يمكنك إلغاء الاشتراك في Google Analytics من خلال تثبيت{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  إضافة المتصفح الخاصة بإلغاء الاشتراك
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Google AdSense</h2>
              <p>
                نستخدم Google AdSense لعرض الإعلانات على موقعنا. قد تستخدم Google وشركاؤها ملفات تعريف الارتباط لعرض إعلانات بناءً على زياراتك السابقة لموقعنا أو مواقع أخرى.
              </p>
              <p className="mt-3">
                يمكنك إلغاء الاشتراك في الإعلانات المخصصة من خلال زيارة{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  إعدادات الإعلانات في Google
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">استخدام المعلومات</h2>
              <p>نستخدم المعلومات التي نجمعها لـ:</p>
              <ul className="list-disc pr-6 space-y-2 mt-3">
                <li>تحسين محتوى الموقع وتجربة المستخدم</li>
                <li>تحليل أنماط الاستخدام والتفاعل</li>
                <li>عرض إعلانات ملائمة</li>
                <li>الامتثال للمتطلبات القانونية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">مشاركة المعلومات</h2>
              <p>
                لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلومات مجهولة المصدر مع شركائنا مثل Google لأغراض التحليل والإعلان.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">حماية البيانات</h2>
              <p>
                نتخذ تدابير أمنية معقولة لحماية معلوماتك من الوصول غير المصرح به أو الإفصاح أو التعديل أو الإتلاف. ومع ذلك، لا يمكن ضمان أمان نقل البيانات عبر الإنترنت بنسبة 100٪.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">روابط خارجية</h2>
              <p>
                قد يحتوي موقعنا على روابط لمواقع خارجية. لسنا مسؤولين عن ممارسات الخصوصية أو محتوى هذه المواقع. ننصحك بمراجعة سياسات الخصوصية الخاصة بهم.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">حقوقك</h2>
              <p>يحق لك:</p>
              <ul className="list-disc pr-6 space-y-2 mt-3">
                <li>طلب الوصول إلى معلوماتك الشخصية</li>
                <li>طلب تصحيح أو حذف معلوماتك</li>
                <li>الاعتراض على معالجة معلوماتك</li>
                <li>إلغاء الاشتراك في ملفات تعريف الارتباط والتتبع</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">التغييرات على سياسة الخصوصية</h2>
              <p>
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تاريخ &quot;آخر تحديث&quot; المحدث.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">اتصل بنا</h2>
              <p>
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:
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