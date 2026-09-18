'use client';

import React from 'react';
import { useApp } from '@/lib/context';
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
  const { isRtl, t } = useApp();
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;
  const ChevronForward = isRtl ? ChevronLeft : ChevronRight;

  const disciplines = [
    {
      icon: Building2,
      titleEn: 'Civil & Structural Engineering',
      titleAr: 'الهندسة المدنية والإنشائية',
      descEn:
        'Structural modeling, foundation design, reinforced concrete verification, and structural integrity analysis in compliance with recognized engineering codes.',
      descAr:
        'النمذجة والتحليل الإنشائي، تصميم القواعد والأساسات، والتحقق الهندسي للهياكل الخرسانية وفق الأكواد والمعايير الهندسية المعتمدة.',
    },
    {
      icon: ClipboardCheck,
      titleEn: 'Construction Supervision & QA/QC',
      titleAr: 'الإشراف الهندسي وضبط الجودة',
      descEn:
        'Independent site inspection, continuous materials testing, batch plant verification, and strict contractor compliance on active job sites.',
      descAr:
        'تفتيش موقعي مستقل، فحوصات مستمرة للمواد والخرسانة، ومتابعة دقيقة لامتثال المقاولين في كافة مراحل التنفيذ.',
    },
    {
      icon: FolderGit2,
      titleEn: 'Project Management Consultancy',
      titleAr: 'إدارة المشاريع الهندسية (PMC)',
      descEn:
        'Full-lifecycle PMC governance, schedule baseline management (Primavera/MS Project), contract administration, and value engineering.',
      descAr:
        'حوكمة وإدارة دورة حياة المشروع كاملة، التحكم بالجداول الزمنية والتدفقات المالية، وإدارة العقود والهندسة القيمة.',
    },
    {
      icon: Droplets,
      titleEn: 'Infrastructure & Wet Utilities',
      titleAr: 'البنية التحتية وشبكات المياه والصرف',
      descEn:
        'Sanitary networks, stormwater modeling, manhole integrity appraisals, and multi-agency municipal NOC approvals across all Emirates.',
      descAr:
        'تصميم شبكات الصرف الصحي، تصريف مياه الأمطار، واعتمادات شهادات عدم الممانعة (NOC) من كافة الدوائر والبلديات.',
    },
    {
      icon: Map,
      titleEn: 'Urban Planning & GIS Addressing',
      titleAr: 'التخطيط الحضري ونظم المعلومات الجغرافية',
      descEn:
        'Spatial geometry, master plan circulation, Onwani addressing system compliance, and geographic information system integration.',
      descAr:
        'تخطيط المساحات الحضرية، المخططات الرئيسية، التوافق مع نظام العنونة الموحد (عنواني)، وتكامل نظم GIS.',
    },
    {
      icon: Trees,
      titleEn: 'Landscape & Green Space Planning',
      titleAr: 'تنسيق الحدائق والمساحات الخضراء المستدامة',
      descEn:
        'Estidama Pearl-compliant arid xeriscaping, smart micro-irrigation calculations, native flora selection, and sustainable exterior public realms.',
      descAr:
        'تنسيق حدائق مستدام يراعي نظام استدامة والبيئة الصحراوية، حسابات الري الذكي، واختيار النباتات المحلية المقاومة للجفاف.',
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
          <a
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#16A34A] hover:text-[#15803D] transition-colors self-start md:self-auto"
            href="#contact"
          >
            <span>{t('View All Services', 'استعراض كافة الخدمات')}</span>
            <ArrowForward className="w-4 h-4 rtl:rotate-180" />
          </a>
        </div>

        {/* 3x2 Minimalist Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {disciplines.map((disc, idx) => {
            const Icon = disc.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-[#16A34A]/40 transition-all group flex flex-col justify-between w-full"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 group-hover:text-[#16A34A] group-hover:border-[#16A34A]/30 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white">
                    {t(disc.titleEn, disc.titleAr)}
                  </h3>
                  <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(disc.descEn, disc.descAr)}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800">
                  <a
                    href="#contact"
                    className="font-sans text-xs font-bold text-[#16A34A] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>{t('READ DISCIPLINE', 'تفاصيل التخصص')}</span>
                    <ChevronForward className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
