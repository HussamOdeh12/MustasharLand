'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/lib/context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllProjects, companyProfile, Project } from '@/lib/content';
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Building2,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  PhoneCall,
  Mail,
} from 'lucide-react';

export default function ProjectsPage() {
  const { isRtl, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;
  const ChevronForward = isRtl ? ChevronLeft : ChevronRight;

  const allProjects = getAllProjects();

  const categories = [
    { id: 'all', labelEn: 'All Projects', labelAr: 'كافة المشاريع' },
    { id: 'sports', labelEn: 'Sports Facilities', labelAr: 'منشآت رياضية' },
    { id: 'residential', labelEn: 'Private Residential', labelAr: 'مشاريع سكنية' },
    { id: 'infrastructure', labelEn: 'Roads & Infrastructure', labelAr: 'طرق وبنية تحتية' },
    { id: 'technical-support', labelEn: 'Municipal Systems Support', labelAr: 'دعم الأنظمة والبلديات' },
    { id: 'governmental', labelEn: 'Municipal Consultancy', labelAr: 'استشارات بلدية' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-[#0B1117] transition-colors w-full">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3.5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-[#16A34A] transition-colors">
              {t('Home', 'الرئيسية')}
            </Link>
            <ChevronForward className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-900 dark:text-white">
              {t('Projects Portfolio', 'محفظة المشاريع')}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 dark:border-slate-800 bg-gradient-to-b from-slate-50 via-white to-white dark:from-[#0f172a]/40 dark:via-[#0B1117] dark:to-[#0B1117]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-[#16A34A]" />
                <span className="font-sans text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                  {t('Proven Track Record • Delivered Commissions', 'سجل حافل بالإنجازات • مشاريع معتمدة ومنجزة')}
                </span>
              </div>
              <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                {t(
                  'Engineering Excellence Across the UAE',
                  'التميز الهندسي عبر مشاريع دولة الإمارات'
                )}
              </h1>
              <p className="font-body text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {t(
                  'A verified portfolio of delivered commissions spanning sports stadiums, private luxury residential estates, infrastructure networks, and technical municipal systems support in Abu Dhabi and across the Emirates.',
                  'محفظة موثقة من المشاريع المنجزة تشمل الاستادات الرياضية، الفلل السكنية الفاخرة، شبكات البنية التحتية، والدعم الفني المعتمد للأنظمة البلدية في أبوظبي ومختلف إمارات الدولة.'
                )}
              </p>
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <span className="font-sans text-2xl font-extrabold text-slate-900 dark:text-white block">
                  30
                </span>
                <span className="font-sans text-xs text-slate-500 dark:text-slate-400">
                  {t('Private Villas Delivered', 'فيلا سكنية تم تسليمها')}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <span className="font-sans text-2xl font-extrabold text-[#16A34A] block">
                  800850
                </span>
                <span className="font-sans text-xs text-slate-500 dark:text-slate-400">
                  {t('Call Center MEP Support', 'دعم أنظمة MEP بالبلديات')}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <span className="font-sans text-2xl font-extrabold text-slate-900 dark:text-white block">
                  3
                </span>
                <span className="font-sans text-xs text-slate-500 dark:text-slate-400">
                  {t('Regional Municipalities', 'بلديات إقليمية مغطاة')}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <span className="font-sans text-2xl font-extrabold text-[#16A34A] block">
                  100%
                </span>
                <span className="font-sans text-xs text-slate-500 dark:text-slate-400">
                  {t('Emirati Owned & Managed', 'ملكية وإدارة إماراتية')}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs & Projects Grid */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#0B1117] transition-colors">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    type="button"
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      active
                        ? 'bg-[#16A34A] text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {t(cat.labelEn, cat.labelAr)}
                  </button>
                );
              })}
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  id={project.id}
                  className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Project Hero Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <Image
                        src={project.heroImage}
                        alt={t(project.title.en, project.title.ar)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white backdrop-blur-md shadow-xs">
                          {t(project.categoryLabel.en, project.categoryLabel.ar)}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 space-y-4">
                      {project.location && (
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                          <span className="truncate">{t(project.location.en, project.location.ar)}</span>
                        </div>
                      )}

                      <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#16A34A] transition-colors leading-snug">
                        <Link href={`/projects/${project.id}`}>
                          {t(project.title.en, project.title.ar)}
                        </Link>
                      </h3>

                      <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                        {t(project.summary.en, project.summary.ar)}
                      </p>

                      {/* Disciplines Chips */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {project.disciplinesInvolved.slice(0, 3).map((disc) => (
                          <span
                            key={disc.id}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {t(disc.title.en, disc.title.ar)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-4">
                    <span className="font-sans text-xs font-semibold text-slate-400">
                      {t(project.categoryLabel.en, project.categoryLabel.ar)}
                    </span>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-[#16A34A] hover:text-[#15803D] transition-colors"
                    >
                      <span>{t('View Project Details', 'تفاصيل المشروع')}</span>
                      <ArrowForward className="w-3.5 h-3.5 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Trust & Inquiry Banner */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                  <span className="font-sans text-xs font-bold text-[#16A34A] uppercase tracking-wider">
                    {t('Direct Engineering Consultation', 'استشارة هندسية مباشرة')}
                  </span>
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {t(
                    'Partner with MUSTASHAR LAND for Your Commission',
                    'اختر مستشار لاند شريكاً هندسياً لمشروعك القادم'
                  )}
                </h2>
                <p className="font-body text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t(
                    'From landmark sports developments and 30 private villas to regional municipal systems, our licensed engineers in Abu Dhabi deliver with uncompromising standards.',
                    'من المنشآت الرياضية الكبرى و30 فيلا سكنية خاصة إلى الأنظمة البلدية الإقليمية، يقدم مهندسونا المعتمدون في أبوظبي أعلى مستويات الجودة والالتزام.'
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
                <a
                  href={`tel:${companyProfile.phonePrimary.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{companyProfile.phonePrimary}</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-sans text-xs font-bold tracking-wider transition-colors"
                >
                  <span>{t('Submit Inquiry', 'إرسال استفسار')}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
