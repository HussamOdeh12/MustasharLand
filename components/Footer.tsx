'use client';

import React from 'react';
import { useApp } from '@/lib/context';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer
      className="bg-white dark:bg-[#0B1117] pt-20 pb-12 text-slate-600 dark:text-slate-400 font-body transition-colors"
      id="main-site-footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 w-full">
          {/* Col 1: Brand & Credentials (Span 4) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <a
              aria-label="MUSTASHAR LAND Homepage"
              className="flex items-center gap-3"
              href="#"
            >
              <BrandLogo size="md" />
            </a>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {t(
                'Established in 2019. 100% Emirati-owned multidisciplinary engineering consultancy headquartered in Abu Dhabi, delivering excellence in architectural design, structural engineering, and construction supervision across the UAE.',
                'تأسست عام 2019. شركة استشارات هندسية متعددة التخصصات بملكية وإدارة إماراتية 100%، يقع مقرها في العاصمة أبوظبي، وتقدم خدمات التصميم المعماري، الهندسة الإنشائية، والإشراف الهندسي في كافة إمارات الدولة.'
              )}
            </p>
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                {t('Abu Dhabi, UAE', 'أبوظبي، الإمارات')}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                {t('Est. 2019', 'تأسست 2019')}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-slate-900 dark:text-white font-bold block">
              {t('Navigation', 'روابط رئيسية')}
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  className="hover:text-[#16A34A] transition-colors"
                  href="#"
                >
                  {t('Home', 'الرئيسية')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#16A34A] transition-colors"
                  href="#about"
                >
                  {t('About Us', 'من نحن')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#16A34A] transition-colors"
                  href="#services"
                >
                  {t('Disciplines', 'التخصصات')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#16A34A] transition-colors"
                  href="#projects"
                >
                  {t('Projects', 'المشاريع')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#16A34A] transition-colors"
                  href="#contact"
                >
                  {t('Contact', 'اتصل بنا')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Disciplines (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-slate-900 dark:text-white font-bold block">
              {t('Core Disciplines', 'التخصصات الهندسية')}
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  className="hover:text-[#16A34A] transition-colors"
                  href="#services"
                >
                  {t('Civil & Structural Design', 'الهندسة المدنية والإنشائية')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#16A34A] transition-colors"
                  href="#services"
                >
                  {t('Construction Supervision QA/QC', 'الإشراف الهندسي وضبط الجودة')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#16A34A] transition-colors"
                  href="#services"
                >
                  {t('Project Management (PMC)', 'إدارة المشاريع (PMC)')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#16A34A] transition-colors"
                  href="#services"
                >
                  {t('Infrastructure & Wet Utilities', 'البنية التحتية وشبكات المياه والصرف')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#16A34A] transition-colors"
                  href="#services"
                >
                  {t('Urban Planning & GIS', 'التخطيط الحضري ونظم المعلومات الجغرافية')}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#16A34A] transition-colors"
                  href="#services"
                >
                  {t('Landscape & Xeriscaping', 'تنسيق الحدائق والمساحات الخضراء')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-slate-900 dark:text-white font-bold block">
              {t('Headquarters', 'المقر الرئيسي')}
            </span>
            <div className="text-sm space-y-2 text-slate-500 dark:text-slate-400">
              <p className="text-slate-800 dark:text-slate-200 font-medium">
                {t('Abu Dhabi, United Arab Emirates', 'أبوظبي، الإمارات العربية المتحدة')}
              </p>
              <p>P.O. Box 58571</p>
              <div className="pt-2">
                <a
                  className="block hover:text-[#16A34A] transition-colors"
                  href="tel:+97126588099"
                  dir="ltr"
                >
                  +971 2 658 8099
                </a>
                <a
                  className="block hover:text-[#16A34A] transition-colors"
                  href="mailto:info@mustasharland.ae"
                >
                  info@mustasharland.ae
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left rtl:sm:text-right">
          <p>© 2026 MUSTASHAR LAND Engineering Consultancy. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              className="hover:text-[#16A34A] transition-colors"
              href="#"
            >
              {t('Privacy Policy', 'سياسة الخصوصية')}
            </a>
            <a
              className="hover:text-[#16A34A] transition-colors"
              href="#"
            >
              {t('Terms of Service', 'شروط الخدمة')}
            </a>
            <a
              className="hover:text-[#16A34A] transition-colors"
              href="#"
            >
              {t('Municipal Standards', 'المعايير البلدية')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
