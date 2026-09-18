'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/lib/context';
import { ArrowRight, ArrowLeft, Landmark, Route } from 'lucide-react';

export default function ProjectsSection() {
  const { isRtl, t } = useApp();
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      className="py-24 lg:py-32 bg-slate-50 dark:bg-[#172033]/40 border-b border-slate-100 dark:border-slate-800 transition-colors"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#16A34A]" />
            <span className="font-sans text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
              {t('Selected Works', 'مشاريع مختارة')}
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t(
              'Proven Track Record Across Key Sectors',
              'سجل حافل بالإنجازات عبر مختلف القطاعات الحيوية'
            )}
          </h2>
          <p className="font-body text-slate-600 dark:text-slate-300 text-base max-w-2xl">
            {t(
              'A portfolio of engineering excellence delivered in partnership with governmental bodies, prominent developers, and regional institutions.',
              'محفظة زاخرة بالتميز الهندسي تم إنجازها بشراكة وثيقة مع الجهات الحكومية، كبار المطورين العقاريين، والمؤسسات الإقليمية.'
            )}
          </p>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 w-full">
          {/* Feature 1: Heroic Stadium (Span 12) */}
          <div className="md:col-span-12 rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-[#0B1117] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group flex flex-col lg:flex-row w-full">
            <div className="lg:w-7/12 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-950 min-h-[260px] sm:min-h-[300px]">
              <Image
                alt="Development work for Mohammed bin Zayed Stadium (Al Jazira Club)"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIWF1ECqleHA1MmG-DHM-vcxIPYJ9nSG5iDQfKZiVZ9-rTWgtszlk609L62AXsmr69ThedGKOw9IHQzk4THTuxs4bixc9B22zpHu7gEz6KbrOYsOBQapQBo2zFi40b00F7WgWk8tKusXoTLPuTkfXazk0roO4eRktgZ-z8vlRvonJ_8fJqCWCsQ73A4RIkG3FF94cqeMPMfsTwAvAJX9pmGXasjkQPsTx1rNHm2Ce5n9mhbeakcDjl"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 rtl:left-auto rtl:right-4 sm:rtl:right-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white backdrop-blur-md">
                  {t('Sports Facility', 'منشآت رياضية')}
                </span>
              </div>
            </div>

            <div className="lg:w-5/12 p-6 sm:p-8 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="font-sans text-xs uppercase tracking-widest text-slate-400 font-bold block">
                  {t('Abu Dhabi • Al Jazira Club', 'أبوظبي • نادي الجزيرة')}
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                  {t(
                    'Development Work for Mohammed bin Zayed Stadium (Al Jazira Club)',
                    'أعمال تطوير استاد محمد بن زايد (نادي الجزيرة)'
                  )}
                </h3>
                <p className="font-body text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t(
                    'Engineering development, structural review, and technical support services for Mohammed bin Zayed Stadium at Al Jazira Club in Abu Dhabi.',
                    'أعمال تطوير هندسية، مراجعة إنشائية، وخدمات الدعم الفني لاستاد محمد بن زايد بنادي الجزيرة في أبوظبي.'
                  )}
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {t('Structural Engineering', 'هندسة إنشائية')}
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {t('Construction Supervision', 'إشراف هندسي')}
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {t('Quality Control', 'ضبط الجودة')}
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="font-sans text-xs font-semibold text-slate-400">
                  {t('Delivered Project', 'مشروع منجز')}
                </span>
                <a
                  className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors"
                  href="#contact"
                >
                  <span>{t('Project Inquiry', 'استفسار عن المشروع')}</span>
                  <ArrowForward className="w-4 h-4 rtl:rotate-180" />
                </a>
              </div>
            </div>
          </div>

          {/* Feature 2: Residential Community (Span 4) */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden bg-white dark:bg-[#0B1117] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <Image
                  alt="Design and Supervision of 30 Private Villas"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk8k6X0o0azHC783Lh-AKhXrQuOqhKuX0wH_-XPXgHEQKC9Iu5M3qAev34VBg2F6XB1R8t3gbWG71A8FLfCaCvsVTNZCiCd7yQGH24-yipKTAZ7FHCIAH5aO6irG8bN8vGieZYitIhcA6erXZ91pOqJhiMyWGrUKHTaU8BI1KE6187Vn7aaHCn2M-Ot5tSuvq9bgDC5MpTZBpV3M1bpldmK-6VAFNPeCnYoCCem8PwcSQbutqZwzez"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white backdrop-blur-md">
                    {t('Residential', 'مشاريع سكنية')}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <span className="font-sans text-xs uppercase tracking-widest text-slate-400 font-bold block">
                  {t('Abu Dhabi Residential', 'مشاريع سكنية في أبوظبي')}
                </span>
                <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white">
                  {t('Design and Supervision of 30 Private Villas', 'تصميم والإشراف على 30 فيلا خاصة')}
                </h3>
                <p className="font-body text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t(
                    'Comprehensive architectural design, structural engineering drawings, and construction supervision for 30 private villas across Abu Dhabi.',
                    'تصميم معماري وإنشائي متكامل، إعداد المخططات الهندسية، والإشراف الموقعي على التنفيذ لـ 30 فيلا سكنية خاصة في أبوظبي.'
                  )}
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-4">
              <span className="font-sans text-xs font-semibold text-slate-400">
                {t('Handed Over', 'تم التسليم بنجاح')}
              </span>
              <a
                className="inline-flex items-center gap-1 font-sans text-xs font-bold text-[#16A34A] hover:text-[#15803D] transition-colors"
                href="#contact"
              >
                <span>{t('View Details', 'تفاصيل المشروع')}</span>
                <ArrowForward className="w-3.5 h-3.5 rtl:rotate-180" />
              </a>
            </div>
          </div>

          {/* Feature 3: Municipal Liaison (Span 4) */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden bg-white dark:bg-[#0B1117] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#16A34A]">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="font-sans text-xs uppercase tracking-widest text-slate-400 font-bold block">
                {t('Call Center 800850 • Municipalities', 'مركز الاتصال 800850 • البلديات')}
              </span>
              <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white">
                {t(
                  'Technical Support for MEP & eNOC Systems',
                  'خدمات الدعم الفني لأنظمة MEP و eNOC'
                )}
              </h3>
              <p className="font-body text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t(
                  'Technical support services through engineers for MEP and eNOC licensing systems via call center 800850 covering Abu Dhabi City Municipality, Al Ain City Municipality, and Al Dhafra Western Region Municipality.',
                  'خدمات الدعم الفني عبر مهندسين لأنظمة تراخيص الكهروميكانيك MEP وشهادات عدم الممانعة eNOC من خلال مركز الاتصال 800850 لتغطية بلديات أبوظبي والعين والظفرة.'
                )}
              </p>
              <ul className="space-y-2 pt-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                  <span>{t('Abu Dhabi City Municipality', 'بلدية مدينة أبوظبي')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                  <span>{t('Al Ain City Municipality', 'بلدية مدينة العين')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                  <span>{t('Al Dhafra Western Region Municipality', 'بلدية منطقة الظفرة')}</span>
                </li>
              </ul>
            </div>
            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-4">
              <span className="font-sans text-xs font-semibold text-slate-400">
                {t('Technical Support Services', 'خدمات دعم فني')}
              </span>
              <a
                className="inline-flex items-center gap-1 font-sans text-xs font-bold text-[#16A34A] hover:text-[#15803D] transition-colors"
                href="#contact"
              >
                <span>{t('Learn More', 'المزيد من التفاصيل')}</span>
                <ArrowForward className="w-3.5 h-3.5 rtl:rotate-180" />
              </a>
            </div>
          </div>

          {/* Feature 4: Roadway Infrastructure (Span 4) */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden bg-white dark:bg-[#0B1117] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#16A34A]">
                <Route className="w-6 h-6" />
              </div>
              <span className="font-sans text-xs uppercase tracking-widest text-slate-400 font-bold block">
                {t('Roads & Infrastructure', 'الطرق والبنية التحتية')}
              </span>
              <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white">
                {t(
                  'Sharjah Roads & Infrastructure',
                  'طرق وبنية تحتية في الشارقة'
                )}
              </h3>
              <p className="font-body text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t(
                  'Engineering consultancy, infrastructure planning, and technical reviews for roadway and utilities projects in Sharjah.',
                  'استشارات هندسية، تخطيط البنية التحتية، ومراجعات فنية لمشاريع شبكات الطرق والخدمات في إمارة الشارقة.'
                )}
              </p>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <span className="font-sans text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {t(
                    'Infrastructure engineering review, planning coordination, and technical consultancy adhering to UAE standards.',
                    'مراجعة وتنسيق هندسي للبنية التحتية واستشارات فنية وفق المعايير واللوائح المعتمدة في الدولة.'
                  )}
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-4">
              <span className="font-sans text-xs font-semibold text-slate-400">
                {t('Infrastructure', 'بنية تحتية')}
              </span>
              <a
                className="inline-flex items-center gap-1 font-sans text-xs font-bold text-[#16A34A] hover:text-[#15803D] transition-colors"
                href="#contact"
              >
                <span>{t('Case Brief', 'موجز المشروع')}</span>
                <ArrowForward className="w-3.5 h-3.5 rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
