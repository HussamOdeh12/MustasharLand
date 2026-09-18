'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/context';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="bg-white dark:bg-[#0B1117] pt-20 pb-12 text-slate-600 dark:text-slate-400 font-body transition-colors border-t border-slate-200/80 dark:border-slate-800"
      id="main-site-footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 w-full">
          {/* Col 1: Brand & Credentials (Span 4) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <Link
              aria-label={t('MUSTASHAR LAND Homepage', 'الصفحة الرئيسية لمستشار لاند')}
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
              href="/"
            >
              <BrandLogo size="md" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t(
                'Established in 2019. 100% Emirati-owned multidisciplinary engineering consultancy headquartered in Abu Dhabi, delivering excellence in architectural design, structural engineering, and construction supervision across the UAE.',
                'تأسست عام 2019. شركة استشارات هندسية متعددة التخصصات بملكية وإدارة إماراتية 100%، يقع مقرها في العاصمة أبوظبي، وتقدم خدمات التصميم المعماري، الهندسة الإنشائية، والإشراف الهندسي في كافة إمارات الدولة.'
              )}
            </p>
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                {t('Abu Dhabi, UAE', 'أبوظبي، الإمارات')}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                {t('Est. 2019', 'تأسست 2019')}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation (Span 2) */}
          <nav aria-label={t('Footer Navigation', 'روابط التنقل أسفل الصفحة')} className="lg:col-span-2 space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-slate-900 dark:text-white font-bold block">
              {t('Navigation', 'روابط رئيسية')}
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5 inline-block"
                  href="/"
                >
                  {t('Home', 'الرئيسية')}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5 inline-block"
                  href="/about"
                >
                  {t('About Us', 'من نحن')}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5 inline-block"
                  href="/services"
                >
                  {t('Disciplines', 'التخصصات')}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5 inline-block"
                  href="/projects"
                >
                  {t('Projects', 'المشاريع')}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5 inline-block"
                  href="/contact"
                >
                  {t('Contact', 'اتصل بنا')}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Col 3: Disciplines (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-slate-900 dark:text-white font-bold block">
              {t('Core Disciplines', 'التخصصات الهندسية')}
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5 inline-block"
                  href="/services/civil-structural"
                >
                  {t('Civil & Structural Design', 'الهندسة المدنية والإنشائية')}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5 inline-block"
                  href="/services/construction-supervision"
                >
                  {t('Construction Supervision QA/QC', 'الإشراف الهندسي وضبط الجودة')}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5 inline-block"
                  href="/services/pmc"
                >
                  {t('Project Management (PMC)', 'إدارة المشاريع (PMC)')}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5 inline-block"
                  href="/services/infrastructure-planning"
                >
                  {t('Infrastructure & Wet Utilities', 'البنية التحتية وشبكات المياه والصرف')}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5 inline-block"
                  href="/services/urban-gis"
                >
                  {t('Urban Planning & GIS', 'التخطيط الحضري ونظم المعلومات الجغرافية')}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5 inline-block"
                  href="/services/landscape-green"
                >
                  {t('Landscape & Green Space', 'تنسيق الحدائق والمساحات الخضراء')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-slate-900 dark:text-white font-bold block">
              {t('Headquarters', 'المقر الرئيسي')}
            </span>
            <div className="text-sm space-y-2 text-slate-600 dark:text-slate-300">
              <p className="text-slate-900 dark:text-slate-100 font-medium">
                {t('Abu Dhabi, United Arab Emirates', 'أبوظبي، الإمارات العربية المتحدة')}
              </p>
              <p className="text-slate-500 dark:text-slate-400">P.O. Box 58571</p>
              <div className="pt-2 space-y-1">
                <a
                  className="block hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5"
                  href="tel:+97126588099"
                  dir="ltr"
                  aria-label={t('Call our Abu Dhabi office: +971 2 658 8099', 'اتصل بمكتبنا في أبوظبي: +971 2 658 8099')}
                >
                  +971 2 658 8099
                </a>
                <a
                  className="block hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5"
                  href="mailto:info@mustasharland.ae"
                  aria-label={t('Send email inquiry to info@mustasharland.ae', 'إرسال استفسار عبر البريد الإلكتروني إلى info@mustasharland.ae')}
                >
                  info@mustasharland.ae
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400 text-center sm:text-left rtl:sm:text-right">
          <p>© 2026 MUSTASHAR LAND Engineering Consultancy. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5"
              href="/about#pillars"
            >
              {t('Professional Rigor', 'الانضباط المهني')}
            </Link>
            <Link
              className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5"
              href="/services"
            >
              {t('Engineering Scope', 'نطاق الخدمات')}
            </Link>
            <Link
              className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5"
              href="/contact"
            >
              {t('Consultation Desk', 'مكتب الاستشارات')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
