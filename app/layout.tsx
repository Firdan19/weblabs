import './globals.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { inter, playfair, dmsans } from '../fonts';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  metadataBase: new URL('https://weblabs.id'),
  title: {
    default: 'WEBLABS — Jasa Landing Page SEO-friendly',
    template: '%s | Weblabs.id',
  },
  description: 'Spesialis landing page premium: cepat, mobile-first, dan SEO-friendly.',
  keywords: [
    'jasa landing page',
    'SEO friendly',
    'website UMKM',
    'landing page cepat',
    'Next.js',
    'Weblabs',
  ],
  openGraph: {
    type: 'website',
    url: 'https://weblabs.id/',
    siteName: 'WEBLABS',
    images: [{ url: '/og/weblabs-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/weblabs-og.jpg'],
  },
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '190x190' }],
  },
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.className} ${playfair.variable} ${dmsans.variable} bg-[#FAF9F6] text-[#0A1A3F]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
