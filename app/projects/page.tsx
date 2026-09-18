import React from 'react';
import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';
import { getBreadcrumbSchema, SITE_URL } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Projects Portfolio | MUSTASHAR LAND Engineering Consultancy',
  description: "Explore MUSTASHAR LAND's engineering portfolio across the UAE, featuring sports infrastructure, residential developments, civil engineering, and technical consultancy projects.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: 'Projects Portfolio | MUSTASHAR LAND Engineering Consultancy',
    description: "Explore MUSTASHAR LAND's engineering portfolio across the UAE, featuring sports infrastructure, residential developments, civil engineering, and technical consultancy projects.",
    url: `${SITE_URL}/projects`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Portfolio | MUSTASHAR LAND Engineering Consultancy',
    description: "Engineering portfolio across the UAE spanning sports facilities, residential villas, and municipal infrastructure.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Projects', url: `${SITE_URL}/projects` },
            ])
          ),
        }}
      />
      <ProjectsClient />
    </>
  );
}
