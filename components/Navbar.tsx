'use client';

import React, { useState } from 'react';
import { useApp } from '@/lib/context';
import BrandLogo from './BrandLogo';
import { Globe, Sun, Moon, ArrowRight, ArrowLeft, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, isRtl, theme, toggleTheme, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#', labelEn: 'Home', labelAr: 'الرئيسية' },
    { href: '#about', labelEn: 'About Us', labelAr: 'من نحن' },
    { href: '#services', labelEn: 'Services', labelAr: 'خدماتنا' },
    { href: '#projects', labelEn: 'Projects', labelAr: 'المشاريع' },
    { href: '#contact', labelEn: 'Contact', labelAr: 'اتصل بنا' },
  ];

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0B1117]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors w-full"
      id="main-site-header"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-2 sm:gap-6 lg:gap-8 w-full">
        {/* Company Brand Mark */}
        <a
          aria-label="MUSTASHAR LAND Homepage"
          className="flex items-center gap-3 transition-opacity hover:opacity-90 shrink-0 min-w-0"
          href="#"
          id="header-logo-link"
        >
          <BrandLogo size="md" />
        </a>

        {/* Clean Minimal Navigation */}
        <nav
          className="hidden lg:flex items-center gap-9 font-sans text-[14px] font-medium tracking-normal text-slate-600 dark:text-slate-300"
          id="desktop-nav-menu"
        >
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-[#16A34A] ${
                idx === 0
                  ? 'text-slate-900 dark:text-white font-semibold'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
              id={`nav-item-${link.href.replace('#', '') || 'home'}`}
            >
              {t(link.labelEn, link.labelAr)}
            </a>
          ))}
        </nav>

        {/* Header Utilities & Primary Action */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Language Switcher Pill */}
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            aria-label="Switch Language"
            className="flex items-center gap-1 sm:gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer py-1 px-2 sm:px-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shrink-0"
            id="lang-toggle-button"
          >
            <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span
              className={`font-arabic text-[11px] ${
                language === 'ar' ? 'font-bold text-[#16A34A]' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              عربي
            </span>
            <span className="text-slate-300 dark:text-slate-600 text-[10px]">|</span>
            <span
              className={`font-sans text-[11px] ${
                language === 'en' ? 'font-bold text-[#16A34A]' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              EN
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle Color Theme"
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
            id="theme-toggle-button"
          >
            {theme === 'dark' ? (
              <Sun className="w-[18px] h-[18px] text-amber-400" />
            ) : (
              <Moon className="w-[18px] h-[18px] text-slate-600" />
            )}
          </button>

          {/* Refined Corporate CTA */}
          <a
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-xs font-semibold tracking-wider uppercase shadow-sm transition-all duration-200"
            href="#contact"
            id="header-consult-cta"
          >
            <span>{t('Consult an Engineer', 'استشر مهندساً')}</span>
            <ArrowIcon className="w-3.5 h-3.5 rtl:rotate-180" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile navigation"
            className="lg:hidden p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0"
            type="button"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1117] px-6 py-6 space-y-4 shadow-xl"
          id="mobile-nav-drawer"
        >
          <div className="flex flex-col space-y-3 font-sans text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-700 dark:text-slate-200 hover:text-[#16A34A] transition-colors"
              >
                {t(link.labelEn, link.labelAr)}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'ar' : 'en');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              <Globe className="w-4 h-4 text-[#16A34A]" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#16A34A] text-white text-xs font-semibold uppercase tracking-wider"
            >
              <span>{t('Consult an Engineer', 'استشر مهندساً')}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
