'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/context';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function AboutSection() {
  const { isRtl, t } = useLanguage();
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      className="py-24 lg:py-32 bg-slate-50 dark:bg-[#172033]/40 border-b border-slate-200/80 dark:border-slate-800 transition-colors"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & Stance */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#16A34A]" />
              <span className="font-sans text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                {t('Who We Are', 'من نحن')}
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              {t(
                'Shaping sustainable urban horizons with local insight and global standards.',
                'صياغة آفاق عمرانية مستدامة برؤية وطنية ومعايير هندسية عالمية.'
              )}
            </h2>
          </div>

          {/* Right Column: Clean Narrative Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 font-body text-base lg:text-lg leading-relaxed">
            <p>
              {isRtl ? (
                <>
                  تأسست شركة <strong>مستشار لاند للاستشارات الهندسية</strong> عام 2019 كشريك هندسي موثوق ومرموق في دولة الإمارات العربية المتحدة. انطلاقاً من مقرنا في العاصمة أبوظبي، نعمل على ردم الهوة بين الرؤى المعمارية الطموحة والدقة الإنشائية الصارمة، مع ضمان التوافق التام مع متطلبات الهيئات البلدية والإشراف الميداني المعتمد.
                </>
              ) : (
                <>
                  Founded in 2019, <strong>MUSTASHAR LAND</strong> operates as a trusted engineering partner across the United Arab Emirates. Headquartered in Abu Dhabi, we bridge visionary architectural aspirations with meticulous structural precision, municipal compliance, and field-tested supervision.
                </>
              )}
            </p>
            <p>
              {isRtl ? (
                <>
                  توفر ممارستنا متعددة التخصصات استشارات وخدمات هندسية متكاملة تشمل بلدية مدينة أبوظبي، بلدية مدينة العين، بلدية منطقة الظفرة، وبلدية دبي. بدءاً من المنشآت الرياضية والمرافق الخدمية إلى الفلل والمشاريع السكنية، نقدم حلولاً هندسية مستدامة وموثوقة تراعي البيئة المحلية.
                </>
              ) : (
                <>
                  Our multidisciplinary practice provides end-to-end engineering consultancy services across Abu Dhabi City Municipality, Al Ain Municipality, the Western Region (Al Dhafra), and Dubai. From sports facilities and infrastructure utilities to private residential developments, we deliver sound, sustainable engineering solutions suited to regional environments.
                </>
              )}
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#16A34A] shrink-0" aria-hidden="true" />
                <span className="font-sans text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {t(
                    'Local UAE Experience & Engineering Standards',
                    'خبرة محلية بمعايير هندسية معتمدة'
                  )}
                </span>
              </div>
              <Link
                className="inline-flex items-center gap-1 font-sans text-xs sm:text-sm font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors self-start sm:self-auto min-h-[44px] sm:min-h-0 py-2 sm:py-1 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm"
                href="/services"
                aria-label={t('Explore our engineering practice and services', 'استكشف مجالات عملنا وتخصصاتنا الهندسية')}
              >
                <span>{t('Our Practice', 'مجالات عملنا')}</span>
                <ArrowForward className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
