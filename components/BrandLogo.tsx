'use client';

import React from 'react';
import { useApp } from '@/lib/context';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function BrandLogo({ className = '', size = 'md' }: BrandLogoProps) {
  const { isRtl } = useApp();

  const iconSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10',
    lg: 'w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12',
  };

  const svgSizes = {
    sm: 'w-4 h-4 sm:w-4.5 sm:h-4.5',
    md: 'w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6',
    lg: 'w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7',
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 transition-opacity hover:opacity-90 select-none max-w-[220px] sm:max-w-none ${className}`} id="brand-logo">
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
        <div className={`${iconSizes[size]} shrink-0 rounded-lg bg-[#16A34A] text-white flex items-center justify-center font-bold shadow-xs`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={svgSizes[size]} aria-hidden="true">
            <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10v4M15 10v4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-sans font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white uppercase leading-none truncate">
            {isRtl ? 'مستشار لاند' : 'MUSTASHAR LAND'}
          </span>
          <span className="font-sans text-[9px] sm:text-[10px] font-semibold text-[#16A34A] tracking-wider uppercase mt-1 truncate">
            {isRtl ? 'للاستشارات الهندسية' : 'Engineering Consultancy'}
          </span>
        </div>
      </div>
    </div>
  );
}
