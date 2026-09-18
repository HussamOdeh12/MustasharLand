'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useApp } from '@/lib/context';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const { isRtl, t } = useApp();
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      className="relative pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-28 lg:pb-36 overflow-hidden bg-white dark:bg-[#0B1117] border-b border-slate-100 dark:border-slate-800 transition-colors"
      id="hero-section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Typography & Lead Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Small Hero Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
            <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-[0.14em] uppercase text-slate-600 dark:text-slate-300 truncate">
              {t(
                'EMIRATI ENGINEERING CONSULTANCY • ABU DHABI',
                'استشارات هندسية إماراتية • أبوظبي'
              )}
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.14] sm:leading-[1.12]">
            {t(
              'Engineering Excellence for the Built Environment',
              'الريادة والتميز الهندسي لتطوير البيئة العمرانية'
            )}
          </h1>

          {/* Supporting Paragraph */}
          <p className="font-body text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {t(
              'Delivering multidisciplinary architectural design, structural engineering, and construction supervision across the United Arab Emirates since 2019.',
              'تقديم خدمات التصميم المعماري، الهندسة الإنشائية، والإشراف الهندسي في مختلف إمارات الدولة منذ 2019.'
            )}
          </p>

          {/* Two Hero Buttons - Stack on mobile, horizontal on sm+ */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-md mx-auto sm:max-w-none">
            <Link
              className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-6 sm:px-7 py-3 rounded-lg bg-[#16A34A] text-white font-sans text-sm font-semibold tracking-wide shadow-sm hover:bg-[#15803D] hover:shadow transition-all duration-200 w-full sm:w-auto text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
              href="/services"
              id="hero-explore-services-btn"
            >
              <span>{t('Explore Services', 'استكشف خدماتنا')}</span>
              <ArrowForward className="w-4 h-4 rtl:rotate-180 shrink-0" aria-hidden="true" />
            </Link>

            <Link
              className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-6 sm:px-7 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-sans text-sm font-semibold tracking-wide border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 w-full sm:w-auto text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
              href="/projects"
              id="hero-view-projects-btn"
            >
              <span>{t('View Our Projects', 'مشاريعنا الهندسية')}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Large Architectural Photography Frame */}
        <div className="mt-10 sm:mt-14 lg:mt-20 relative w-full">
          <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl shadow-slate-200/80 dark:shadow-none border border-slate-200/80 dark:border-slate-800 bg-slate-900 aspect-[16/10] sm:aspect-[16/9] max-h-[560px]">
            <Image
              alt={t('Monumental UAE Civil and Structural Engineering Infrastructure in Abu Dhabi', 'مشاريع البنية التحتية والهندسة الإنشائية في أبوظبي')}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuFkUY4xCNoYI8FCW3adHnXZ5nAMTZKu2-Ge6_66zJ9av2vXxrXf9myclbdDoxflpSf62Q5f3bLh-uRLPQm9CarKZdgJTCRVLJCfyJ4oxeemjNa5mPrWNpxM5eDZ1Cw1OeRRCnbm-GqWQIdqWp4kikG37qQA0szUeZDv8ggcqELTmNEO25PzFtN93MfdSFsIXLgjU12gf7czNKeVPVkGCg_N70kJrd_JsOQYMhjKAGpynrpNAcx1cE"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 rtl:left-auto rtl:right-4 sm:rtl:right-8 text-white pr-4">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-[#DCFCE7] font-bold block mb-1">
                {t('Abu Dhabi Island & Western Region', 'جزيرة أبوظبي ومنطقة الظفرة')}
              </span>
              <p className="font-sans text-xs sm:text-base font-semibold text-slate-100">
                {t(
                  'Civil & Structural Engineering Services',
                  'خدمات الهندسة المدنية والإنشائية'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Minimal 4-Column Metric Bar with Ample Breathing Room */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 w-full">
          <div className="space-y-1">
            <div className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              2019
            </div>
            <div className="font-body text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t('Established in Abu Dhabi', 'تأسست في أبوظبي')}
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16A34A] tracking-tight">
              100%
            </div>
            <div className="font-body text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t('Emirati-Owned & Managed', 'ملكية وإدارة إماراتية 100%')}
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-sans text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t('Multi-Disciplinary', 'تخصصات متكاملة')}
            </div>
            <div className="font-body text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t('Engineering Consultancy', 'استشارات هندسية شاملة')}
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-sans text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t('UAE-Based', 'في دولة الإمارات')}
            </div>
            <div className="font-body text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t('Local UAE Experience', 'خبرة محلية بمعايير هندسية')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
