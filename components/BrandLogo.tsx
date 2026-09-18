'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/lib/context';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function BrandLogo({ className = '', size = 'md' }: BrandLogoProps) {
  const { isRtl } = useApp();
  const [imgError, setImgError] = useState(false);

  const heightClasses = {
    sm: 'h-7 sm:h-9',
    md: 'h-8 sm:h-10 lg:h-12',
    lg: 'h-10 sm:h-12 lg:h-14',
  };

  const logoSrc =
    'https://lh3.googleusercontent.com/aida/AEtjO1XzXVXz7fmZHHWoNc-vAaFxnc8CNcc531tfp4qmaCOLParGUyOTcH0mXIXtPa4mf8f7bhtp9_bA9LuDb0jHWJx9YZu-ZOtbrv4oGAoaLJKXsrzmk96BtKJ-dTCTjjENI3fmX6V_1-UtuDv5GaJMCpdhUis54YJRcK1_Bn1HyM1JzgShv5dgWMUY0jErjAtM62nYytE6_BsILPMcvu8y1jF8j2fCE99a9-_eA4rL9eVElf5O8GHuUxtsfeU';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 transition-opacity hover:opacity-90 select-none max-w-[200px] sm:max-w-none ${className}`} id="brand-logo">
      {!imgError ? (
        <Image
          src={logoSrc}
          alt="MUSTASHAR LAND Engineering Consultancy"
          width={220}
          height={48}
          className={`${heightClasses[size]} w-auto max-w-[180px] sm:max-w-none object-contain dark:brightness-105`}
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
          priority
        />
      ) : (
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-[#16A34A] text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 sm:w-6 sm:h-6">
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
      )}
    </div>
  );
}
