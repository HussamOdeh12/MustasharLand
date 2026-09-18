'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useApp } from '@/lib/context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Building2,
  ShieldCheck,
  Compass,
  Award,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  FileCheck,
  Zap,
  Leaf,
  Users,
  HardHat,
  Landmark,
} from 'lucide-react';

export default function AboutPage() {
  const { isRtl, t } = useApp();
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;
  const BreadcrumbSep = isRtl ? ArrowLeft : ChevronRight;

  const keyStats = [
    {
      num: '2019',
      labelEn: 'Founded in Abu Dhabi',
      labelAr: 'تأسست في أبوظبي',
      subEn: 'Established track record',
      subAr: 'مسيرة هندسية راسخة',
    },
    {
      num: '100%',
      labelEn: 'Emirati-Owned & Managed',
      labelAr: 'ملكية وإدارة إماراتية 100%',
      subEn: 'National engineering leadership',
      subAr: 'كفاءات وطنية قيادية',
    },
    {
      num: 'Multi-Disciplinary',
      labelEn: 'Full Engineering Scope',
      labelAr: 'استشارات هندسية متكاملة',
      subEn: 'Design, supervision & management',
      subAr: 'تصميم وإشراف وإدارة مشاريع',
    },
    {
      num: 'Standards',
      labelEn: 'International & UAE Practice',
      labelAr: 'معايير دولية ومحلية',
      subEn: 'ACI, ASTM, ISO, EN, BS references',
      subAr: 'استناد للمرجعيات الهندسية المعتمدة',
    },
  ];

  const corePillars = [
    {
      num: '01',
      titleEn: 'Engineering Quality & Safety',
      titleAr: 'الجودة الهندسية والسلامة',
      descEn:
        'Zero compromise on structural integrity, technical specifications, and safety under international and UAE engineering standards.',
      descAr:
        'التزام صارم بالسلامة الإنشائية وتوصيف المواد والمواصفات الفنية وفق المعايير الهندسية الدولية والإماراتية.',
      icon: ShieldCheck,
    },
    {
      num: '02',
      titleEn: 'Responsive & Rigorous Governance',
      titleAr: 'الدقة والموثوقية وسرعة الاستجابة',
      descEn:
        'Disciplined milestone control, transparent cost estimating, technical BOQ accuracy, and structured project management.',
      descAr:
        'انضباط تام في متابعة الجداول الزمنية، دقة تقدير الكميات والتكاليف، وإدارة هندسية محكمة وشفافة.',
      icon: FileCheck,
    },
    {
      num: '03',
      titleEn: 'Technical Coordination & Systems',
      titleAr: 'التنسيق الفني والأنظمة الهندسية',
      descEn:
        'Technical coordination support involving MEP/eNOC licensing systems and regional municipal frameworks.',
      descAr:
        'دعم التنسيق الفني لأنظمة التراخيص والكهروميكانيك ونظام (eNOC) والاشتراطات البلدية المعتمدة.',
      icon: Zap,
    },
    {
      num: '04',
      titleEn: 'Local UAE Experience & Sustainability',
      titleAr: 'الخبرة المحلية والحلول المستدامة',
      descEn:
        'Deep local engineering insight tailored to UAE environmental conditions and sustainable engineering solutions.',
      descAr:
        'فهم هندسي محلي عميق لظروف البيئة والمناخ في دولة الإمارات وتطبيق الحلول الهندسية المستدامة.',
      icon: Leaf,
    },
  ];

  const strategicFoundations = [
    {
      badgeEn: 'OUR VISION',
      badgeAr: 'رؤيتنا',
      titleEn: 'The Benchmark Emirati Engineering Firm',
      titleAr: 'المرجعية الهندسية الوطنية الرائدة',
      descEn:
        'To be recognized as a premier multidisciplinary Emirati engineering consultancy, shaping resilient and sustainable built environments that elevate the UAE’s urban landscape.',
      descAr:
        'أن نكون بيت الخبرة الهندسي الإماراتي المفضل والأكثر موثوقية، نسهم في بناء مجتمعات عمرانية مستدامة تدعم مسيرة التطوير والتنمية في دولة الإمارات.',
      icon: Compass,
    },
    {
      badgeEn: 'OUR MISSION',
      badgeAr: 'رسالتنا',
      titleEn: 'Technical Precision & Seamless Delivery',
      titleAr: 'الدقة الفنية والإنجاز المتقن',
      descEn:
        'To deliver uncompromised engineering precision, innovative multidisciplinary designs, and disciplined construction supervision through responsive and reliable practice.',
      descAr:
        'تقديم استشارات هندسية متكاملة ترتكز على أعلى درجات الدقة الفنية، وتوفير تصاميم مدروسة وإشراف ميداني منضبط بنهج مهني موثوق وسريع الاستجابة.',
      icon: Award,
    },
    {
      badgeEn: 'ENGINEERING PRINCIPLES',
      badgeAr: 'مبادئنا الهندسية',
      titleEn: 'Science, Ethics & Professional Rigor',
      titleAr: 'العلم، النزاهة والانضباط المهني',
      descEn:
        'Combining computational structural modeling, multidisciplinary coordination, diligent site inspections, and clear communication across the project lifecycle.',
      descAr:
        'الجمع بين النمذجة الإنشائية المحوسبة، التنسيق المعماري والكهروميكانيكي المتكامل، الرقابة الميدانية المستمرة، والتواصل الشفاف مع الملاك والشركاء.',
      icon: Building2,
    },
  ];

  const technicalSystemExperience = [
    {
      nameEn: 'Abu Dhabi City Municipality',
      nameAr: 'بلدية مدينة أبوظبي',
      detailEn: 'Municipal Technical Frameworks & Planning Coordination',
      detailAr: 'تنسيق المخططات والاشتراطات البلدية',
    },
    {
      nameEn: 'Al Ain City Municipality',
      nameAr: 'بلدية مدينة العين',
      detailEn: 'Regional Engineering Projects & Technical Reviews',
      detailAr: 'خبرة هندسية ومتابعة فنية للمشاريع',
    },
    {
      nameEn: 'Al Dhafra Western Region Municipality',
      nameAr: 'بلدية منطقة الظفرة',
      detailEn: 'Western Region Project Coordination & Support',
      detailAr: 'تنسيق المشاريع والدعم الفني بالمنطقة الغربية',
    },
    {
      nameEn: 'MEP & eNOC Systems',
      nameAr: 'أنظمة الكهروميكانيك ونظام eNOC',
      detailEn: 'Licensing Systems Technical Coordination',
      detailAr: 'دعم المعاملات الفنية في أنظمة التراخيص',
    },
    {
      nameEn: 'International Engineering References',
      nameAr: 'المعايير الهندسية المرجعية',
      detailEn: 'Application of ACI, ASTM, ISO, EN & BS Standards',
      detailAr: 'الاستناد إلى مراجع ACI و ASTM و ISO و EN و BS',
    },
    {
      nameEn: 'Environmental & Site Coordination',
      nameAr: 'التنسيق البيئي والموقعي',
      detailEn: 'Sustainable Engineering & Site Coordination Studies',
      detailAr: 'حلول بيئية مستدامة ودراسات التنسيق الموقعي',
    },
  ];

  return (
    <main id="main-content" tabIndex={-1} className="relative w-full max-w-full min-h-screen overflow-x-hidden bg-[#F8FAFC]/50 dark:bg-[#0B1117] text-slate-800 dark:text-slate-200 flex flex-col antialiased transition-colors duration-200 outline-none">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="border-b border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-[#0B1117]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3.5 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5">
            {t('Home', 'الرئيسية')}
          </Link>
          <BreadcrumbSep className="w-3 h-3 text-slate-400 rtl:rotate-180" aria-hidden="true" />
          <span className="text-slate-900 dark:text-white font-semibold">
            {t('About Us', 'من نحن')}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white dark:bg-[#0B1117] border-b border-slate-100 dark:border-slate-800 transition-colors"
        id="about-hero"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          {/* Eyebrow & Hero Header */}
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#DCFCE7] dark:bg-[#16A34A]/20 border border-[#86EFAC] dark:border-[#16A34A]/40 text-[#15803D] dark:text-[#4ADE80] font-sans text-xs font-semibold uppercase tracking-wider">
              <Landmark className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t('ABOUT MUSTASHAR LAND • EST. 2019', 'نبذة عن مستشار لاند • تأسست عام 2019')}</span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {t(
                'Engineering Precision. Emirati Leadership. Built for Generations.',
                'دقة هندسية، ريادة إماراتية، وعمارة تدوم للأجيال.'
              )}
            </h1>

            <p className="font-body text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {t(
                'Founded in Abu Dhabi in 2019, MUSTASHAR LAND is a 100% Emirati-owned multidisciplinary engineering consultancy bridging bold architectural concepts with rigorous structural calculations, statutory municipal compliance, and turnkey site supervision.',
                'تأسست شركة مستشار لاند للاستشارات الهندسية في أبوظبي عام 2019، وهي شركة وطنية بملكية وإدارة إماراتية 100% تجمع بين الرؤية المعمارية العصرية، الحسابات الإنشائية الصارمة، المعرفة العميقة بالاشتراطات البلدية، والإشراف الميداني الشامل.'
              )}
            </p>
          </div>

          {/* Key Metric Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-200/80 dark:border-slate-800">
            {keyStats.map((st, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <span className="font-sans text-2xl sm:text-3xl font-extrabold text-[#16A34A] block tracking-tight">
                    {st.num}
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1 block">
                    {t(st.labelEn, st.labelAr)}
                  </span>
                </div>
                <span className="font-body text-[11px] text-slate-500 dark:text-slate-400 mt-2 block">
                  {t(st.subEn, st.subAr)}
                </span>
              </div>
            ))}
          </div>

          {/* Primary Editorial Image Banner */}
          <div className="relative w-full h-72 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
              alt="Abu Dhabi Modern Architecture and Engineering"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider inline-block">
                    {t('Headquarters Location', 'مقر الشركة الرئيسي')}
                  </span>
                  <h2 className="text-lg sm:text-2xl font-bold text-white font-sans">
                    {t(
                      'Abu Dhabi, United Arab Emirates',
                      'أبوظبي، دولة الإمارات العربية المتحدة'
                    )}
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-xs font-semibold bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 self-start sm:self-auto">
                  <MapPin className="w-4 h-4 text-[#4ADE80]" />
                  <span>{t('P.O. Box: 58571, Abu Dhabi, UAE', 'ص.ب: 58571، أبوظبي، الإمارات')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Company Profile Story */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]/60 dark:bg-[#0B1117] transition-colors border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Key Identity */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-sans text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>{t('OUR FOUNDATION & PHILOSOPHY', 'نشأتنا وفلسفتنا الهندسية')}</span>
              </div>

              <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {t(
                  'Bridging Visionary Design with Rigorous Emirati Engineering Standards',
                  'دمج الإبداع المعماري بالانضباط الهندسي المعتمد في دولة الإمارات'
                )}
              </h2>

              <p className="font-body text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {t(
                  'MUSTASHAR LAND was established in Abu Dhabi in 2019 as a 100% Emirati-owned multidisciplinary engineering consultancy. We deliver civil & structural engineering, architectural design, construction supervision, project management, and infrastructure planning backed by local UAE engineering experience and international standards.',
                  'تأسست شركة مستشار لاند للاستشارات الهندسية في أبوظبي عام 2019 كشركة وطنية بملكية وإدارة إماراتية 100%، وتقدم خدمات متكاملة في الهندسة المدنية والإنشائية، التصميم المعماري، الإشراف الهندسي، إدارة المشاريع، وتخطيط البنية التحتية بالاستناد إلى الخبرة الهندسية المحلية والمعايير الدولية.'
                )}
              </p>

              <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] dark:bg-[#16A34A]/20 flex items-center justify-center text-[#16A34A]">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-slate-900 dark:text-white">
                      {t('Resident Engineering Supervision', 'الإشراف الهندسي المقيم')}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t('Quality verification on every pour and milestone', 'رقابة فنية مستمرة على صب الخرسانة ومطابقة المواصفات')}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  {t(
                    'Our resident engineers remain on-site throughout construction, ensuring contractors adhere strictly to approved engineering drawings, structural specifications, and safety guidelines.',
                    'يتواجد مهندسونا المقيمون في الموقع طوال مراحل التنفيذ للتأكد من مطابقة المقاول للمخططات المعتمدة والمواصفات الفنية ومعايير السلامة.'
                  )}
                </p>
              </div>
            </div>

            {/* Right Column: Detailed Narrative & Geographic Scope */}
            <div className="lg:col-span-7 space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-5 leading-relaxed text-sm sm:text-base">
                <p>
                  {t(
                    'Headquartered in Abu Dhabi, MUSTASHAR LAND brings extensive local UAE engineering experience across the three municipalities: Abu Dhabi City Municipality, Al Ain City Municipality, and Al Dhafra Western Region Municipality, as well as broader project engagements throughout the UAE.',
                    'انطلاقاً من مقرها في أبوظبي، تمتلك شركة مستشار لاند خبرة هندسية محلية واسعة تشمل البلديات الثلاث: بلدية مدينة أبوظبي، بلدية مدينة العين، وبلدية منطقة الظفرة، بالإضافة إلى أعمال واستشارات هندسية متنوعة في مختلف إمارات الدولة.'
                  )}
                </p>
                <p>
                  {t(
                    'We believe that enduring architecture begins with accurate structural calculations and finishes with disciplined on-site oversight. Our engineers work in collaborative multidisciplinary clusters: civil and structural modelers collaborate directly with architectural designers, MEP specialists, and site supervision teams to deliver sustainable engineering solutions.',
                    'نؤمن بأن المشاريع الهندسية الناجحة تبدأ بحسابات إنشائية متقنة وتنتهي بإشراف ميداني منضبط. لذلك، يعمل فريقنا الهندسي ضمن منظومة متكاملة تضم خبراء الهندسة المدنية والإنشائية، المصممين المعماريين، مهندسي الكهروميكانيك، وفرق الإشراف الميداني لتقديم حلول هندسية مستدامة.'
                  )}
                </p>
              </div>

              {/* Geographic Municipal Scope Badges */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
                <h4 className="font-sans text-xs uppercase tracking-widest text-slate-900 dark:text-white font-bold">
                  {t('Regional Municipal Experience', 'الخبرة الميدانية عبر البلديات')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                    <span className="font-sans text-sm font-bold text-slate-900 dark:text-white block">
                      {t('Abu Dhabi City', 'مدينة أبوظبي')}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 block">
                      {t('Municipal Frameworks & Projects', 'مشاريع وتنسيق الاشتراطات البلدية')}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                    <span className="font-sans text-sm font-bold text-slate-900 dark:text-white block">
                      {t('Al Ain Region', 'مدينة العين')}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 block">
                      {t('Regional Project Support', 'خبرة ومتابعة فنية للمشاريع')}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                    <span className="font-sans text-sm font-bold text-slate-900 dark:text-white block">
                      {t('Al Dhafra (Western Region)', 'منطقة الظفرة')}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 block">
                      {t('Western Region Projects', 'تنسيق ومتابعة المشاريع بالظفرة')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Foundations: Vision, Mission, Principles */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0B1117] transition-colors border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#16A34A] font-bold">
              {t('STRATEGIC FOUNDATION', 'ركائزنا الاستراتيجية')}
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t('Vision, Mission & Engineering Principles', 'الرؤية، الرسالة والمبادئ الهندسية')}
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {t(
                'Our operating compass is anchored in the core values that guide every calculation, drawing, and site inspection.',
                'ثوابتنا المهنية توجه كل مخطط ورأي هندسي وزيارة رقابية في مواقع العمل.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {strategicFoundations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#16A34A] shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-sans text-xs uppercase tracking-widest text-[#16A34A] font-bold block">
                      {t(item.badgeEn, item.badgeAr)}
                    </span>
                    <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white">
                      {t(item.titleEn, item.titleAr)}
                    </h3>
                    <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t(item.descEn, item.descAr)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 4 Core Engineering Pillars */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]/50 dark:bg-[#0B1117] transition-colors border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="font-sans text-xs uppercase tracking-widest text-[#16A34A] font-bold">
                {t('GOVERNANCE & EXECUTION', 'الحوكمة ومعايير التنفيذ')}
              </span>
              <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t('Four Pillars of Engineering Practice', 'الأركان الأربعة لممارستنا الهندسية')}
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors"
            >
              <span>{t('View All Engineering Disciplines', 'استعراض التخصصات الهندسية')}</span>
              <ArrowForward className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#16A34A]/40 transition-all flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] dark:bg-[#16A34A]/20 flex items-center justify-center text-[#16A34A]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {p.num}
                      </span>
                    </div>
                    <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {t(p.titleEn, p.titleAr)}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t(p.descEn, p.descAr)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Systems & Municipal Support */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0B1117] transition-colors border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#16A34A] font-bold">
              {t('TECHNICAL SYSTEMS & MUNICIPAL SUPPORT', 'الدعم الفني والأنظمة البلدية')}
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t(
                'Technical Coordination Across Municipalities & Licensing Systems',
                'التنسيق الفني عبر البلديات وأنظمة التراخيص المعتمدة'
              )}
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {t(
                'MUSTASHAR LAND provides engineering technical support involving MEP/eNOC licensing systems and regional municipal frameworks.',
                'تقدم مستشار لاند الدعم الهندسي الفني لأنظمة التراخيص والكهروميكانيك ونظام عدم الممانعة الإلكتروني (eNOC) عبر البلديات الثلاث.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSystemExperience.map((auth, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] dark:bg-[#16A34A]/20 flex items-center justify-center text-[#16A34A] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-sm font-bold text-slate-900 dark:text-white">
                    {t(auth.nameEn, auth.nameAr)}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t(auth.detailEn, auth.detailAr)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Corporate Credentials Card */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]/60 dark:bg-[#0B1117] transition-colors">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded bg-[#DCFCE7] dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80] text-xs font-semibold uppercase tracking-wider inline-block">
                  {t('OFFICIAL COMPANY PROFILE', 'بطاقة التعريف المؤسسية')}
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {t(
                    'MUSTASHAR LAND Engineering Consultancy',
                    'مستشار لاند للاستشارات الهندسية'
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {t(
                    '100% Emirati-Owned Multidisciplinary Engineering Consultancy • Established 2019 in Abu Dhabi',
                    'شركة استشارات هندسية متعددة التخصصات بملكية وإدارة إماراتية 100% • تأسست عام 2019 بأبوظبي'
                  )}
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                aria-label={t('Initiate Project Consultation on our contact page', 'طلب استشارة هندسية عبر صفحة التواصل')}
              >
                <span>{t('Initiate Project Consultation', 'طلب استشارة هندسية')}</span>
                <ArrowForward className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </div>

            {/* Structured Contact & Location Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-[#16A34A]" aria-hidden="true" />
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold">
                    {t('Headquarters Address', 'العنوان والمقر')}
                  </span>
                </div>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
                  {t('Abu Dhabi, United Arab Emirates', 'أبوظبي، دولة الإمارات العربية المتحدة')}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {t('P.O. Box: 58571, Abu Dhabi, UAE', 'ص.ب: 58571، أبوظبي، الإمارات')}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <Phone className="w-4 h-4 text-[#16A34A]" aria-hidden="true" />
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold">
                    {t('Direct Telephone', 'هاتف التواصل')}
                  </span>
                </div>
                <a
                  href="tel:+97126588099"
                  className="font-semibold text-slate-800 dark:text-slate-200 hover:text-[#16A34A] dark:hover:text-[#4ADE80] text-xs sm:text-sm dir-ltr inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-1 min-h-[44px] flex items-center"
                  aria-label={t('Call office directly at +971 2 658 8099', 'اتصل بالمكتب على الرقم +971 2 658 8099')}
                >
                  +971 2 658 8099
                </a>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {t('Official UAE Contact Number', 'رقم الهاتف الرسمي المعتمد')}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <Mail className="w-4 h-4 text-[#16A34A]" aria-hidden="true" />
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold">
                    {t('Official Email', 'البريد الإلكتروني')}
                  </span>
                </div>
                <a
                  href="mailto:info@mustasharland.ae"
                  className="font-semibold text-slate-800 dark:text-slate-200 hover:text-[#16A34A] dark:hover:text-[#4ADE80] text-xs sm:text-sm inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-1 min-h-[44px] flex items-center"
                  aria-label={t('Send email to info@mustasharland.ae', 'إرسال بريد إلكتروني إلى info@mustasharland.ae')}
                >
                  info@mustasharland.ae
                </a>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {t('General & Project Inquiries', 'المراسلات العامة واستشارات المشاريع')}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <Building2 className="w-4 h-4 text-[#16A34A]" aria-hidden="true" />
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold">
                    {t('Corporate Identity', 'البيانات المؤسسية')}
                  </span>
                </div>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
                  {t('100% Emirati-Owned Firm', 'استشارات وطنية 100%')}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {t('Established 2019 • Abu Dhabi, UAE', 'تأسست عام 2019 • أبوظبي')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
