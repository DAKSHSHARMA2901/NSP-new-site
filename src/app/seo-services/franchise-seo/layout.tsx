import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Franchise SEO Services | Multi-Location Optimization',
  description: 'Expert franchise SEO services for multi-location businesses. Optimize each franchise location and dominate local search results.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/franchise-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/franchise-seo',
    title: 'Franchise SEO Services | Multi-Location Optimization',
    description: 'Expert franchise SEO services for multi-location businesses.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franchise SEO Services | Multi-Location Optimization',
    description: 'Expert franchise SEO services for multi-location businesses.',
  },
}

export default function FranchiseSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
