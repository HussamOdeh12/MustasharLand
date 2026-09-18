import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjects } from '@/lib/content';
import ProjectDetailClient from './ProjectDetailClient';
import { getBreadcrumbSchema, SITE_URL } from '@/lib/structured-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | MUSTASHAR LAND Engineering Consultancy',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${project.title.en} | MUSTASHAR LAND Engineering Consultancy`;
  const description = project.summary.en;
  const canonicalUrl = `${SITE_URL}/projects/${project.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title.en,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: SITE_URL },
    { name: 'Projects', url: `${SITE_URL}/projects` },
    { name: project.title.en, url: `${SITE_URL}/projects/${project.id}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}
