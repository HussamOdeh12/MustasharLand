import React from 'react';
import type { Metadata } from 'next';
import AboutClient from './AboutClient';
import { getBreadcrumbSchema, SITE_URL } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'About Us | MUSTASHAR LAND Engineering Consultancy',
  description: 'Learn about MUSTASHAR LAND, a 100% Emirati-owned multidisciplinary engineering consultancy in Abu Dhabi established in 2019, delivering technical excellence and rigorous engineering standards.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Us | MUSTASHAR LAND Engineering Consultancy',
    description: 'Learn about MUSTASHAR LAND, a 100% Emirati-owned multidisciplinary engineering consultancy in Abu Dhabi established in 2019, delivering technical excellence and rigorous engineering standards.',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | MUSTASHAR LAND Engineering Consultancy',
    description: '100% Emirati-owned multidisciplinary engineering consultancy in Abu Dhabi established in 2019.',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'About Us', url: `${SITE_URL}/about` },
            ])
          ),
        }}
      />
      <AboutClient />
    </>
  );
}
