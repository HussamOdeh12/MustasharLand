import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Disciplines & Services | MUSTASHAR LAND Abu Dhabi',
  description:
    'Comprehensive engineering consultancy services by MUSTASHAR LAND: Civil & Structural Engineering, Architectural Design, Construction Supervision, Project Management, Infrastructure Planning, and Urban Planning.',
  openGraph: {
    title: 'Engineering Disciplines & Services | MUSTASHAR LAND',
    description:
      'Explore MUSTASHAR LAND’s engineering disciplines across Abu Dhabi, Al Ain, Al Dhafra, and the UAE.',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
