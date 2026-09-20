'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/lib/context';
import BrandLogo from './BrandLogo';
import { Globe, Sun, Moon, ArrowRight, ArrowLeft, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, isRtl, theme, toggleTheme, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuDrawerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '/', labelEn: 'Home', labelAr: 'الرئيسية' },
    { href: '/about', labelEn: 'About Us', labelAr: 'من نحن' },
    { href: '/services', labelEn: 'Services', labelAr: 'خدماتنا' },
    { href: '/projects', labelEn: 'Projects', labelAr: 'المشاريع' },
    { href: '/contact', labelEn: 'Contact', labelAr: 'اتصل بنا' },
  ];

  // Close mobile drawer on Escape key press and restore focus to trigger
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        mobileMenuTriggerRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href.startsWith('/about')) {
      return pathname.startsWith('/about');
    }
    if (href.startsWith('/services')) {
      return pathname.startsWith('/services');
    }
    if (href.startsWith('/projects')) {
      return pathname.startsWith('/projects');
    }
    if (href.startsWith('/contact')) {
      return pathname.startsWith('/contact');
    }
    return false;
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Skip to Main Content Link for Keyboard Accessibility (WCAG 2.2 SC 2.4.1) */}
      <a href="#main-content" className="skip-link">
        {t('Skip to main content', 'الانتقال إلى المحتوى الرئيسي')}
      </a>

      <header
        className="sticky top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0B1117]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors w-full"
        id="main-site-header"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-2 sm:gap-6 lg:gap-8 w-full">
          {/* Company Brand Mark */}
          <Link
            aria-label={t('MUSTASHAR LAND Engineering Consultancy Homepage', 'الصفحة الرئيسية لشركة مستشار لاند للاستشارات الهندسية')}
            className="flex items-center gap-3 transition-opacity hover:opacity-90 shrink-0 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
            href="/"
            id="header-logo-link"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Clean Minimal Navigation */}
          <nav
            aria-label={t('Main Navigation', 'التنقل الرئيسي')}
            className="hidden lg:flex items-center gap-8 xl:gap-9 font-sans text-[14px] font-medium tracking-normal text-slate-600 dark:text-slate-300"
            id="desktop-nav-menu"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm hover:text-[#16A34A] dark:hover:text-[#22C55E] ${
                    active
                      ? 'text-slate-900 dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                  id={`nav-item-${link.href.replace(/[^a-zA-Z0-9]/g, '') || 'home'}`}
                >
                  {t(link.labelEn, link.labelAr)}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#16A34A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Utilities & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              aria-label={
                language === 'en'
                  ? 'Switch language to Arabic (التحويل إلى اللغة العربية)'
                  : 'Switch language to English (التحويل إلى اللغة الإنجليزية)'
              }
              className="flex items-center gap-1.5 min-h-[44px] text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer py-1.5 px-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] shrink-0"
              id="lang-toggle-button"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" aria-hidden="true" />
              <span
                className={`font-arabic text-[11px] ${
                  language === 'ar' ? 'font-bold text-[#16A34A]' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                عربي
              </span>
              <span className="text-slate-300 dark:text-slate-600 text-[10px]" aria-hidden="true">|</span>
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
              aria-label={
                theme === 'dark'
                  ? t('Switch to light color theme', 'التحويل إلى الوضع الفاتح')
                  : t('Switch to dark color theme', 'التحويل إلى الوضع الداكن')
              }
              aria-pressed={theme === 'dark'}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] shrink-0"
              id="theme-toggle-button"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" aria-hidden="true" />
              )}
            </button>

            {/* Refined Corporate CTA */}
            <Link
              className="hidden md:inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-xs font-semibold tracking-wider uppercase shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
              href="/contact"
              id="header-consult-cta"
            >
              <span>{t('Consult an Engineer', 'استشر مهندساً')}</span>
              <ArrowIcon className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              ref={mobileMenuTriggerRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={
                mobileMenuOpen
                  ? t('Close navigation menu', 'إغلاق قائمة التنقل')
                  : t('Open navigation menu', 'فتح قائمة التنقل')
              }
              className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] shrink-0"
              type="button"
              id="mobile-menu-trigger"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        <div
          ref={mobileMenuDrawerRef}
          className={`lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1117] px-6 py-6 space-y-4 shadow-xl ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label={t('Mobile Navigation Menu', 'قائمة التنقل للهواتف')}
          aria-hidden={!mobileMenuOpen}
        >
            <nav aria-label={t('Mobile Navigation Links', 'روابط التنقل للهواتف')} className="flex flex-col space-y-2 font-sans text-base font-medium">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] ${
                      active
                        ? 'text-[#16A34A] dark:text-[#22C55E] bg-[#DCFCE7]/30 dark:bg-[#16A34A]/10 font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:text-[#16A34A] hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span>{t(link.labelEn, link.labelAr)}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#16A34A]" aria-hidden="true" />}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'ar' : 'en');
                  setMobileMenuOpen(false);
                }}
                className="min-h-[44px] flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#16A34A] px-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]"
              >
                <Globe className="w-4 h-4 text-[#16A34A]" aria-hidden="true" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#16A34A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#15803D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2"
              >
                <span>{t('Consult an Engineer', 'استشر مهندساً')}</span>
                <ArrowIcon className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
      </header>
    </>
  );
}
