import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Compass, FolderKanban } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-[#0B1117] transition-colors w-full">
      <title>Page Not Found | MUSTASHAR LAND Engineering Consultancy</title>
      <meta name="robots" content="noindex, nofollow" />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 max-w-4xl mx-auto px-6 py-24 sm:py-32 text-center space-y-8 outline-none">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-[#16A34A] mx-auto">
          <span className="font-mono text-2xl font-bold">404</span>
        </div>

        <div className="space-y-3">
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Page Not Found | الصفحة غير موجودة
          </h1>
          <p className="font-body text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            The engineering discipline, project, or page you requested does not exist or has been relocated.
          </p>
          <p className="font-arabic text-sm text-slate-500 dark:text-slate-500 max-w-lg mx-auto leading-relaxed">
            الصفحة أو التخصص الهندسي أو المشروع الذي طلبته غير متوفر أو تم نقله.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-sans text-xs font-bold tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
          >
            <Compass className="w-4 h-4" aria-hidden="true" />
            <span>All Services</span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-sans text-xs font-bold tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
          >
            <FolderKanban className="w-4 h-4" aria-hidden="true" />
            <span>Portfolio</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
