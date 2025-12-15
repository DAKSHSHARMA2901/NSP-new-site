import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'International SEO Services | Global Search Optimization',
  description: 'Expand your reach worldwide with expert international SEO services. Multilingual SEO, hreflang implementation, and global search optimization from NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/international-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/international-seo',
    title: 'International SEO Services | Global Search Optimization',
    description: 'Expand your reach worldwide with expert international SEO services.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International SEO Services | Global Search Optimization',
    description: 'Expand your reach worldwide with expert international SEO services.',
  },
}

export default function InternationalSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
