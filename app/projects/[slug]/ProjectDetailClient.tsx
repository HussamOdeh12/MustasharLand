'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useApp } from '@/lib/context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  getProjectBySlug,
  getAllProjects,
  companyProfile,
  Project,
} from '@/lib/content';
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Building2,
  PhoneCall,
  Mail,
  Compass,
  FileCheck,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export default function ProjectDetailClient({ project }: { project: Project }) {
  const { isRtl, t } = useApp();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const activeImage = selectedImage || project.heroImage;

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
            <Link href="/projects" className="hover:text-[#16A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm py-0.5">
              {t('Projects', 'المشاريع')}
            </Link>
            <ChevronForward className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            <span className="font-semibold text-slate-900 dark:text-white truncate">
              {t(project.title.en, project.title.ar)}
            </span>
          </div>
        </div>

        {/* Project Hero Header */}
        <section className="py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 dark:border-slate-800 bg-gradient-to-b from-slate-50 via-white to-white dark:from-[#0f172a]/40 dark:via-[#0B1117] dark:to-[#0B1117]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
            <div className="space-y-4 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#DCFCE7] dark:bg-[#16A34A]/20 border border-[#86EFAC] dark:border-[#16A34A]/40 text-[#15803D] dark:text-[#4ADE80] text-xs font-bold tracking-wide">
                  {t(project.categoryLabel.en, project.categoryLabel.ar)}
                </span>
              </div>

              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                {t(project.title.en, project.title.ar)}
              </h1>

              {project.location && (
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin className="w-4 h-4 text-[#16A34A] shrink-0" aria-hidden="true" />
                  <span>{t(project.location.en, project.location.ar)}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Hero Imagery & Gallery Section */}
        <section className="py-12 bg-white dark:bg-[#0B1117] border-b border-slate-100 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 aspect-[16/9] max-h-[560px] border border-slate-200/80 dark:border-slate-800 shadow-xl">
              <Image
                src={activeImage}
                alt={t(project.title.en, project.title.ar)}
                fill
                quality={88}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
                className="w-full h-full object-cover transition-all duration-500"
                priority
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 text-white text-xs font-semibold backdrop-blur-md">
                  {t('Verified Field Documentation', 'توثيق هندسي ميداني موثق')}
                </span>
                <span className="px-3 py-1 rounded-lg bg-black/70 text-white text-xs font-mono backdrop-blur-xs">
                  MUSTASHAR LAND
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {project.galleryImages && project.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2" role="region" aria-label={t('Project image gallery', 'معرض صور المشروع')}>
                {project.galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    type="button"
                    aria-label={`${t('View project image', 'عرض صورة المشروع')} ${i + 1}`}
                    className={`relative w-24 sm:w-28 aspect-[16/10] rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 ${
                      activeImage === img
                        ? 'border-[#16A34A] scale-105 shadow-sm'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${t(project.title.en, project.title.ar)} thumbnail ${i + 1}`}
                      fill
                      quality={75}
                      sizes="120px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Detailed Case Study Narrative & Sidebar */}
        <section className="py-20 bg-white dark:bg-[#0B1117] border-b border-slate-100 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Narrative, Challenge, Solution, Scope */}
              <div className="lg:col-span-7 space-y-10">
                {/* Executive Summary */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-[2px] w-5 bg-[#16A34A]" />
                    <span className="font-sans text-xs font-bold tracking-widest text-slate-400 uppercase">
                      {t('Commission Brief', 'موجز المشروع')}
                    </span>
                  </div>
                  <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {t('Project Overview & Technical Intent', 'نظرة عامة والهدف الهندسي')}
                  </h2>
                  <p className="font-body text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {t(project.summary.en, project.summary.ar)}
                  </p>
                </div>

                {/* Comprehensive Scope of Work */}
                {project.scope && (
                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="space-y-1">
                      <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        {t('Engineering Responsibilities', 'نطاق المسؤوليات الهندسية')}
                      </span>
                      <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white">
                        {t('Delivered Scope of Work', 'نطاق الأعمال والمخرجات المنفذة')}
                      </h3>
                    </div>

                    <ul className="space-y-3 pt-2">
                      {(isRtl ? project.scope.ar : project.scope.en).map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Project Factsheet & Consultation Card */}
              <div className="lg:col-span-5 space-y-6">
                {/* Project Factsheet */}
                <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
                  <h3 className="font-sans text-lg font-bold text-slate-900 dark:text-white pb-4 border-b border-slate-200/60 dark:border-slate-800">
                    {t('Project Factsheet', 'بطاقة بيانات المشروع')}
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div className="space-y-1">
                      <span className="font-bold text-slate-400 uppercase tracking-wider block">
                        {t('Sector / Typology', 'القطاع والتصنيف')}
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white text-sm block">
                        {t(project.categoryLabel.en, project.categoryLabel.ar)}
                      </span>
                    </div>

                    {project.location && (
                      <div className="space-y-1">
                        <span className="font-bold text-slate-400 uppercase tracking-wider block">
                          {t('Location', 'الموقع الجغرافي')}
                        </span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                          {t(project.location.en, project.location.ar)}
                        </span>
                      </div>
                    )}

                    <div className="space-y-1">
                      <span className="font-bold text-slate-400 uppercase tracking-wider block">
                        {t('Engineering Consultant', 'المستشار الهندسي')}
                      </span>
                      <span className="font-semibold text-[#16A34A] block">
                        {t(companyProfile.nameEn, companyProfile.nameAr)}
                      </span>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                      <span className="font-bold text-slate-400 uppercase tracking-wider block">
                        {t('Disciplines Involved', 'التخصصات الهندسية المشاركة')}
                      </span>
                      <div className="flex flex-col gap-2">
                        {project.disciplinesInvolved.map((disc) => (
                          <Link
                            key={disc.id}
                            href={`/services/${disc.id}`}
                            className="min-h-[44px] p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-[#16A34A] transition-colors flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]"
                            aria-label={`${t('View discipline', 'عرض التخصص')} ${t(disc.title.en, disc.title.ar)}`}
                          >
                            <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-[#16A34A] text-xs">
                              {t(disc.title.en, disc.title.ar)}
                            </span>
                            <ChevronForward className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#16A34A]" aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation Card */}
                <div className="p-7 rounded-3xl bg-slate-900 text-white space-y-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4ADE80] block">
                    {t('Similar Project Inquiries', 'هل تخطط لمشروع مماثل؟')}
                  </span>
                  <h4 className="font-sans text-xl font-bold">
                    {t(
                      'Request an Engineering Consultation',
                      'استشر مهندسينا في أبوظبي'
                    )}
                  </h4>
                  <p className="font-body text-xs text-slate-300 leading-relaxed">
                    {t(
                      'Our senior engineering directors provide tailored technical appraisals and structural reviews.',
                      'يقدم كبار مهندسينا دراسات فنية ومراجعات إنشائية تلائم متطلبات مشروعك.'
                    )}
                  </p>
                  <div className="pt-2 space-y-3">
                    <a
                      href={`tel:${companyProfile.phonePrimary.replace(/\s+/g, '')}`}
                      className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] py-3 px-4 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                      aria-label={`${t('Call telephone number', 'اتصل برقم الهاتف')} ${companyProfile.phonePrimary}`}
                    >
                      <PhoneCall className="w-4 h-4" aria-hidden="true" />
                      <span>{companyProfile.phonePrimary}</span>
                    </a>
                    <a
                      href={`mailto:${companyProfile.email}?subject=Inquiry regarding ${project.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
                      aria-label={`${t('Send email to', 'أرسل بريداً إلكترونياً إلى')} ${companyProfile.email}`}
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>{companyProfile.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prev / Next Project Navigation Bar */}
        <section className="py-12 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/projects/${prevProject.id}`}
              className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-[#16A34A] transition-colors self-start sm:self-auto min-h-[44px] p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
              aria-label={`${t('Previous project:', 'المشروع السابق:')} ${t(prevProject.title.en, prevProject.title.ar)}`}
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">
                  {t('Previous Project', 'المشروع السابق')}
                </span>
                <span className="font-sans text-sm font-bold text-slate-900 dark:text-white max-w-xs truncate block">
                  {t(prevProject.title.en, prevProject.title.ar)}
                </span>
              </div>
            </Link>

            <Link
              href="/projects"
              className="font-sans text-xs font-bold text-[#16A34A] hover:underline uppercase tracking-wider min-h-[44px] inline-flex items-center px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-md"
            >
              {t('All Projects Directory', 'دليل المشاريع الكامل')}
            </Link>

            <Link
              href={`/projects/${nextProject.id}`}
              className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-[#16A34A] transition-colors text-right rtl:text-left self-end sm:self-auto min-h-[44px] p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
              aria-label={`${t('Next project:', 'المشروع التالي:')} ${t(nextProject.title.en, nextProject.title.ar)}`}
            >
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">
                  {t('Next Project', 'المشروع التالي')}
                </span>
                <span className="font-sans text-sm font-bold text-slate-900 dark:text-white max-w-xs truncate block">
                  {t(nextProject.title.en, nextProject.title.ar)}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
