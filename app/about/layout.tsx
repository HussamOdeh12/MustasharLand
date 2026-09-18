import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | MUSTASHAR LAND Engineering Consultancy Abu Dhabi',
  description:
    'Learn about MUSTASHAR LAND Engineering Consultancy (مستشار لاند للاستشارات الهندسية). Established in 2019, 100% Emirati-owned multidisciplinary engineering consultancy headquartered in Abu Dhabi, UAE.',
  openGraph: {
    title: 'About Us | MUSTASHAR LAND Engineering Consultancy',
    description:
      '100% Emirati-owned multidisciplinary engineering consultancy in Abu Dhabi, delivering excellence in architectural design, structural engineering, and construction supervision.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
