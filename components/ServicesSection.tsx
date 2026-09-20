'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/context';
import {
  Building2,
  ClipboardCheck,
  FolderGit2,
  Droplets,
  Map,
  Trees,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export default function ServicesSection() {
  const { isRtl, t } = useLanguage();
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;
  const ChevronForward = isRtl ? ChevronLeft : ChevronRight;

  const disciplines = [
    {
      id: 'civil-structural',
      icon: Building2,
      titleEn: 'Civil & Structural Engineering',
      titleAr: 'الهندسة المدنية والإنشائية',
      descEn:
        'Structural modeling, foundation design, reinforced concrete verification, and structural integrity analysis in compliance with recognized engineering codes.',
      descAr:
        'النمذجة والتحليل الإنشائي، تصميم القواعد والأساسات، والتحقق الهندسي للهياكل الخرسانية وفق الأكواد والمعايير الهندسية المعتمدة.',
    },
    {
      id: 'construction-supervision',
      icon: ClipboardCheck,
      titleEn: 'Construction Supervision & QA/QC',
      titleAr: 'الإشراف الهندسي وضبط الجودة',
      descEn:
        'Independent site inspection, continuous materials testing, batch plant verification, and strict contractor compliance on active job sites.',
      descAr:
        'تفتيش موقعي مستقل، فحوصات مستمرة للمواد والخرسانة، ومتابعة دقيقة لامتثال المقاولين في كافة مراحل التنفيذ.',
    },
    {
      id: 'pmc',
      icon: FolderGit2,
      titleEn: 'Project Management Consultancy',
      titleAr: 'إدارة المشاريع الهندسية (PMC)',
      descEn:
        'Project planning, milestone coordination, cost, time and quality management, and comprehensive technical consultancy.',
      descAr:
        'التخطيط الهندسي، وتنسيق المراحل الزمنية، وإدارة التكلفة والوقت والجودة، وتقديم الاستشارات الفنية المتخصصة.',
    },
    {
      id: 'infrastructure-planning',
      icon: Droplets,
      titleEn: 'Infrastructure & Wet Utilities',
      titleAr: 'البنية التحتية وشبكات المياه والصرف',
      descEn:
        'Infrastructure planning, wet utilities engineering, technical consultancy, and rigorous site coordination.',
      descAr:
        'تخطيط البنية التحتية، وهندسة شبكات المياه والصرف، وتقديم الاستشارات الفنية، والتنسيق الميداني في الموقع.',
    },
    {
      id: 'urban-gis',
      icon: Map,
      titleEn: 'Urban Planning & GIS Addressing',
      titleAr: 'التخطيط الحضري ونظم المعلومات الجغرافية',
      descEn:
        'Urban planning, spatial analysis, addressing maps, signage layouts, and GIS-integrated databases.',
      descAr:
        'التخطيط الحضري، والتحليل المكاني، وخرائط العنونة، ومخططات اللوحات الإرشادية، وقواعد بيانات نظم المعلومات الجغرافية (GIS).',
    },
    {
      id: 'landscape-green',
      icon: Trees,
      titleEn: 'Landscape & Green Space Planning',
      titleAr: 'تنسيق الحدائق والمساحات الخضراء المستدامة',
      descEn:
        'Landscaping supervision, native flora planting, micro-irrigation, sustainable green spaces, and low-water-use systems.',
      descAr:
        'الإشراف على تنسيق الحدائق، وزراعة النباتات المحلية، وشبكات الري الدقيق، وتطوير المساحات الخضراء والأنظمة الموفرة للمياه.',
    },
  ];

  return (
    <section
      className="py-24 lg:py-32 bg-white dark:bg-[#0B1117] border-b border-slate-100 dark:border-slate-800 transition-colors"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#16A34A]" />
              <span className="font-sans text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                {t('Our Disciplines', 'تخصصاتنا الهندسية')}
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              {t(
                'Comprehensive Engineering Solutions',
                'حلول هندسية متكاملة للمشاريع العمرانية'
              )}
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors self-start md:self-auto min-h-[44px] px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-md"
            href="/services"
            aria-label={t('View all engineering services and disciplines', 'استعراض كافة الخدمات والتخصصات الهندسية')}
          >
            <span>{t('View All Services', 'استعراض كافة الخدمات')}</span>
            <ArrowForward className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>

        {/* 3x2 Minimalist Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {disciplines.map((disc, idx) => {
            const Icon = disc.icon;
            const title = t(disc.titleEn, disc.titleAr);
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-[#16A34A]/40 transition-all group flex flex-col justify-between w-full"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 group-hover:text-[#16A34A] group-hover:border-[#16A34A]/30 transition-colors">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#16A34A] transition-colors">
                    <Link
                      href={`/services/${disc.id}`}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm"
                    >
                      {title}
                    </Link>
                  </h3>
                  <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(disc.descEn, disc.descAr)}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800">
                  <Link
                    href={`/services/${disc.id}`}
                    aria-label={`${t('Read details for', 'تفاصيل تخصص')}: ${title}`}
                    className="font-sans text-xs font-bold text-[#16A34A] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform inline-flex items-center gap-1 min-h-[44px] py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm"
                  >
                    <span>{t(`View ${disc.titleEn}`, `عرض ${disc.titleAr}`)}</span>
                    <ChevronForward className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
