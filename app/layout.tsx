import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono, Cairo } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/lib/context';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1117' },
  ],
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'MUSTASHAR LAND Engineering Consultancy | مستشار لاند للاستشارات الهندسية',
  description: 'Multidisciplinary engineering consultancy based in Abu Dhabi, UAE. Delivering architectural design, civil and structural engineering, and construction supervision since 2019.',
  keywords: [
    'Mustashar Land',
    'مستشار لاند للاستشارات الهندسية',
    'Engineering Consultancy Abu Dhabi',
    'استشارات هندسية أبوظبي',
    'Civil & Structural Engineering',
    'Construction Supervision QA/QC',
    'Project Management PMC',
    'Engineering Consultancy UAE',
  ],
  openGraph: {
    title: 'MUSTASHAR LAND Engineering Consultancy | مستشار لاند للاستشارات الهندسية',
    description: 'Premier multidisciplinary engineering consultancy based in Abu Dhabi, UAE.',
    type: 'website',
    locale: 'en_AE',
    alternateLocale: 'ar_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MUSTASHAR LAND Engineering Consultancy',
    description: 'Premier multidisciplinary engineering consultancy based in Abu Dhabi, UAE.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`w-full max-w-full overflow-x-hidden ${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  try {
    var f = window.fetch;
    if (f) {
      var currentFetch = f;
      try {
        Object.defineProperty(window, 'fetch', {
          get: function() { return currentFetch; },
          set: function(val) { currentFetch = val; },
          configurable: true,
          enumerable: true
        });
      } catch (err) {}
    }
  } catch (e) {}

  try {
    window.addEventListener('error', function(ev) {
      if (ev && ev.message && ev.message.indexOf('fetch') !== -1 && ev.message.indexOf('getter') !== -1) {
        if (ev.preventDefault) ev.preventDefault();
      }
    });
  } catch (e) {}

  try {
    var t = localStorage.getItem('mustasharland-theme');
    if (t === 'dark' || (!t && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch(e) {}
})();`,
          }}
        />
      </head>
      <body
        className="w-full max-w-full min-h-screen overflow-x-hidden font-body bg-[#F8FAFC]/60 text-slate-700 antialiased selection:bg-[#DCFCE7] selection:text-[#14532D] dark:bg-[#0B1117] dark:text-[#C1C7CF] transition-colors duration-200"
        suppressHydrationWarning
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
