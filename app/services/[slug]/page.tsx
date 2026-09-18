'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { useApp } from '@/lib/context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  getServiceBySlug,
  getAllServices,
  getRelatedProjects,
  companyProfile,
  ServiceDiscipline,
} from '@/lib/content';
import {
  Building2,
  HardHat,
  Briefcase,
  Droplets,
  Map,
  Trees,
  Layers,
  Zap,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Cpu,
  BookmarkCheck,
  Compass,
  PhoneCall,
  Mail,
  MapPin,
  ExternalLink,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  HardHat,
  Briefcase,
  Droplets,
  Map,
  Trees,
  Layers,
  Zap,
  FileCheck2,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { isRtl, t } = useApp();

  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-[#0B1117]">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 py-32 text-center space-y-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {t('Service Discipline Not Found', 'التخصص الهندسي غير موجود')}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {t(
              'The requested engineering discipline does not exist or has been relocated.',
              'التخصص الهندسي المطلوب غير متوفر أو تم نقله.'
            )}
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#16A34A] text-white text-sm font-semibold hover:bg-[#15803D] transition-colors"
          >
            <span>{t('Return to All Services', 'العودة لكافة الخدمات')}</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const allServices = getAllServices();
  const currentIndex = allServices.findIndex((s) => s.id === service.id);
  const prevService = currentIndex > 0 ? allServices[currentIndex - 1] : allServices[allServices.length - 1];
  const nextService = currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : allServices[0];

  const relatedProjects = getRelatedProjects(service.id);
  const Icon = iconMap[service.iconName] || Building2;
  const ArrowForward = isRtl ? ArrowLeft : ArrowRight;
  const ChevronForward = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-[#0B1117] transition-colors w-full">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {/* Breadcrumbs */}
        <div className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3.5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5">
              {t('Home', 'الرئيسية')}
            </Link>
            <ChevronForward className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            <Link href="/services" className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5">
              {t('Services', 'الخدمات')}
            </Link>
            <ChevronForward className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            <span className="font-semibold text-slate-900 dark:text-white truncate">
              {t(service.title.en, service.title.ar)}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 dark:border-slate-800 bg-gradient-to-b from-slate-50 via-white to-white dark:from-[#0f172a]/40 dark:via-[#0B1117] dark:to-[#0B1117]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Title, Metadata, Overview */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DCFCE7] dark:bg-[#16A34A]/20 border border-[#86EFAC] dark:border-[#16A34A]/40 text-[#15803D] dark:text-[#4ADE80] text-xs font-bold tracking-wide">
                  <span className="font-mono">{service.number}</span>
                  <span>•</span>
                  <span>{t(service.categoryLabel.en, service.categoryLabel.ar)}</span>
                </div>

                <div className="space-y-3">
                  <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                    {t(service.title.en, service.title.ar)}
                  </h1>
                  <p className="font-sans text-base sm:text-lg font-medium text-[#16A34A] dark:text-[#22C55E]">
                    {t(service.tagline.en, service.tagline.ar)}
                  </p>
                </div>

                <p className="font-body text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t(service.overview.en, service.overview.ar)}
                </p>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {(isRtl ? service.highlights.ar : service.highlights.en).map((hl, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-start gap-2.5"
                    >
                      <BookmarkCheck className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-xs font-bold uppercase tracking-wider shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                    aria-label={t('Request Service Consultation for this discipline', 'طلب استشارة في هذا التخصص الهندسي')}
                  >
                    <span>{t('Request Service Consultation', 'طلب استشارة في هذا التخصص')}</span>
                    <ArrowForward className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 min-h-[44px] px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-sans text-xs font-semibold tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                    aria-label={t('View All Disciplines catalog', 'استعراض كافة التخصصات الهندسية')}
                  >
                    <span>{t('View All Disciplines', 'استعراض كافة التخصصات')}</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src={service.heroImage}
                    alt={t(service.title.en, service.title.ar)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-full object-cover"
                    priority
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 dark:border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-sans text-xs font-bold text-slate-900 dark:text-white block">
                          {t('Licensed Engineering Discipline', 'تخصص هندسي معتمد')}
                        </span>
                        <span className="font-sans text-[11px] text-slate-500 dark:text-slate-400">
                          {t('100% Emirati Leadership', 'قيادة وكفاءات إماراتية 100%')}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#16A34A]">
                      {service.number}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Narrative & Core Deliverables */}
        <section className="py-20 bg-white dark:bg-[#0B1117] border-b border-slate-100 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Technical Scope & Methodology Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-[2px] w-5 bg-[#16A34A]" />
                    <span className="font-sans text-xs font-bold tracking-widest text-slate-400 uppercase">
                      {t('Technical Depth & Precision', 'العمق الهندسي والدقة الفنية')}
                    </span>
                  </div>
                  <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {t(
                      'Comprehensive Scope of Engineering Practice',
                      'النطاق الشامل للممارسة الهندسية والتحليل الفني'
                    )}
                  </h2>
                </div>

                <div className="space-y-4 font-body text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {(isRtl ? service.extendedNarrative.ar : service.extendedNarrative.en).map(
                    (paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    )
                  )}
                </div>

                {/* Software and Tools */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#16A34A]" />
                    <span>{t('Advanced Engineering Software & Tools', 'البرمجيات والأنظمة الهندسية المعتمدة')}</span>
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.toolsAndSoftware.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Deliverables Sidebar Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
                  <div className="space-y-2">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#16A34A] block">
                      {t('Verified Outputs', 'المخرجات الهندسية')}
                    </span>
                    <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white">
                      {t('Key Technical Deliverables', 'المخرجات والوثائق الفنية المعتمدة')}
                    </h3>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {(isRtl ? service.keyDeliverables.ar : service.keyDeliverables.en).map(
                      (deliv, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      )
                    )}
                  </ul>

                  {/* Standards Card */}
                  <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800 space-y-3">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      {t('Engineering Practice References', 'المراجع والمعايير الهندسية')}
                    </span>
                    <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                      {(isRtl ? service.standardsAndCodes.ar : service.standardsAndCodes.en).map(
                        (std, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                            <span className="font-mono text-[11px] sm:text-xs">{std}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Consultation Direct Callout */}
                <div className="p-6 rounded-2xl bg-[#DCFCE7]/60 dark:bg-[#16A34A]/10 border border-[#86EFAC]/80 dark:border-[#16A34A]/30 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#15803D] dark:text-[#4ADE80] block">
                      {t('Need Technical Verification?', 'هل تحتاج لمراجعة فنية متخصصة؟')}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-300 block">
                      {t('Speak directly with our senior engineers in Abu Dhabi.', 'تواصل مباشرة مع كبار مهندسينا في أبوظبي.')}
                    </span>
                  </div>
                  <a
                    href="tel:+97126588099"
                    className="px-4 py-2 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold tracking-wider shrink-0 transition-colors"
                  >
                    {t('Call Us', 'اتصل بنا')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Phase Delivery Process */}
        <section className="py-20 bg-slate-50/60 dark:bg-[#0f172a]/30 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2px] w-5 bg-[#16A34A]" />
                <span className="font-sans text-xs font-bold tracking-widest text-slate-400 uppercase">
                  {t('Structured Execution', 'منهجية العمل المتكاملة')}
                </span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {t(
                  'Engineering Delivery Workflow',
                  'مراحل إنجاز وتسليم الخدمات الهندسية'
                )}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.methodology.map((phase, mIdx) => (
                <div
                  key={mIdx}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4 relative group hover:border-[#16A34A]/50 transition-colors"
                >
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-bold text-[#16A34A] uppercase tracking-wider block">
                      {phase.step}
                    </span>
                    <h3 className="font-sans text-base font-bold text-slate-900 dark:text-white">
                      {t(phase.title.en, phase.title.ar)}
                    </h3>
                    <p className="font-body text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t(phase.description.en, phase.description.ar)}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 text-[11px] font-mono text-slate-400">
                    {t(`Stage 0${mIdx + 1} of 04`, `المرحلة 0${mIdx + 1} من 04`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <section className="py-20 bg-white dark:bg-[#0B1117] border-b border-slate-100 dark:border-slate-800 transition-colors">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-[2px] w-5 bg-[#16A34A]" />
                    <span className="font-sans text-xs font-bold tracking-widest text-slate-400 uppercase">
                      {t('Delivered Commissions', 'مشاريع منفذة في هذا التخصص')}
                    </span>
                  </div>
                  <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {t(
                      'Showcasing This Discipline in the Field',
                      'مشاريع واقعية اعتمدت على هذا التخصص الهندسي'
                    )}
                  </h2>
                </div>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-[#16A34A] hover:text-[#15803D] transition-colors"
                >
                  <span>{t('View All Projects', 'استعراض كافة المشاريع')}</span>
                  <ArrowForward className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                        <Image
                          src={project.heroImage}
                          alt={t(project.title.en, project.title.ar)}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3.5 left-3.5 rtl:left-auto rtl:right-3.5">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white backdrop-blur-md">
                            {t(project.categoryLabel.en, project.categoryLabel.ar)}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 space-y-3">
                        {project.location && (
                          <span className="font-sans text-[11px] uppercase tracking-widest text-slate-400 font-bold block">
                            {t(project.location.en, project.location.ar)}
                          </span>
                        )}
                        <h3 className="font-sans text-lg font-bold text-slate-900 dark:text-white line-clamp-2">
                          {t(project.title.en, project.title.ar)}
                        </h3>
                        <p className="font-body text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                          {t(project.summary.en, project.summary.ar)}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-4">
                      <span className="font-sans text-xs font-semibold text-slate-400">
                        {t(project.categoryLabel.en, project.categoryLabel.ar)}
                      </span>
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1 font-sans text-xs font-bold text-[#16A34A] hover:text-[#15803D] transition-colors min-h-[44px] py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm"
                        aria-label={`${t('View project details for', 'عرض تفاصيل المشروع')} ${t(project.title.en, project.title.ar)}`}
                      >
                        <span>{t('View Project', 'تفاصيل المشروع')}</span>
                        <ArrowForward className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Prev / Next Navigation Bar */}
        <section className="py-12 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/services/${prevService.id}`}
              className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-[#16A34A] transition-colors self-start sm:self-auto min-h-[44px] p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
              aria-label={`${t('Previous discipline:', 'التخصص السابق:')} ${t(prevService.title.en, prevService.title.ar)}`}
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">
                  {t('Previous Discipline', 'التخصص السابق')}
                </span>
                <span className="font-sans text-sm font-bold text-slate-900 dark:text-white">
                  {t(prevService.title.en, prevService.title.ar)}
                </span>
              </div>
            </Link>

            <Link
              href="/services"
              className="font-sans text-xs font-bold text-[#16A34A] hover:underline uppercase tracking-wider min-h-[44px] inline-flex items-center px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-md"
            >
              {t('All Disciplines Catalog', 'فهرس التخصصات الكامل')}
            </Link>

            <Link
              href={`/services/${nextService.id}`}
              className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-[#16A34A] transition-colors text-right rtl:text-left self-end sm:self-auto min-h-[44px] p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
              aria-label={`${t('Next discipline:', 'التخصص التالي:')} ${t(nextService.title.en, nextService.title.ar)}`}
            >
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">
                  {t('Next Discipline', 'التخصص التالي')}
                </span>
                <span className="font-sans text-sm font-bold text-slate-900 dark:text-white">
                  {t(nextService.title.en, nextService.title.ar)}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Corporate Trust & Contact CTA */}
        <section className="py-20 bg-white dark:bg-[#0B1117] transition-colors" id="contact">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#16A34A]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" aria-hidden="true" />
                  <span>{t('100% Emirati-Owned & Managed', 'ملكية وإدارة إماراتية 100%')}</span>
                </div>

                <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  {t(
                    'Engage MUSTASHAR LAND for Your Next Project',
                    'استعن بخبرات مستشار لاند الهندسية لمشروعك القادم'
                  )}
                </h2>

                <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
                  {t(
                    'Discuss your engineering requirements directly with our licensed consultants in Abu Dhabi. We provide precise technical proposals and transparent milestone execution.',
                    'ناقش متطلباتك الهندسية مباشرة مع مستشارينا المعتمدين في أبوظبي. نقدم عروضاً فنية دقيقة وتنفيذاً منضبطاً لجميع مراحل مشروعك.'
                  )}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                  <div className="space-y-1">
                    <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
                      {t('Office Location', 'مقر الشركة')}
                    </span>
                    <span className="text-xs font-semibold text-white block">
                      {t(companyProfile.hqAddressEn, companyProfile.hqAddressAr)}
                    </span>
                    <span className="text-[11px] text-slate-400 block">{companyProfile.poBox}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
                      {t('Direct Telephone', 'الاتصال المباشر')}
                    </span>
                    <a
                      href={`tel:${companyProfile.phonePrimary.replace(/\s+/g, '')}`}
                      className="text-xs font-semibold text-[#4ADE80] hover:underline inline-flex items-center min-h-[44px] py-2 font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] rounded-sm"
                      aria-label={`${t('Call telephone number', 'اتصل برقم الهاتف')} ${companyProfile.phonePrimary}`}
                    >
                      {companyProfile.phonePrimary}
                    </a>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">
                      {t('Technical Email', 'البريد الإلكتروني')}
                    </span>
                    <a
                      href={`mailto:${companyProfile.email}`}
                      className="text-xs font-semibold text-[#4ADE80] hover:underline inline-flex items-center min-h-[44px] py-2 font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] rounded-sm"
                      aria-label={`${t('Send email to', 'أرسل بريداً إلكترونياً إلى')} ${companyProfile.email}`}
                    >
                      {companyProfile.email}
                    </a>
                    <span className="text-[11px] text-slate-400 block">
                      {t('Engineering Inquiries', 'استفسارات المشاريع')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
