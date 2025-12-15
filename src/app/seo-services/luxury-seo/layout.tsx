import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury SEO Services | Premium Brand Optimization',
  description: 'Elite SEO services for luxury brands. Exclusive search optimization strategies that elevate high-end businesses from NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/luxury-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/luxury-seo',
    title: 'Luxury SEO Services | Premium Brand Optimization',
    description: 'Elite SEO services for luxury brands. Exclusive search optimization strategies that elevate high-end businesses.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury SEO Services | Premium Brand Optimization',
    description: 'Elite SEO services for luxury brands.',
  },
}

export default function LuxurySEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
