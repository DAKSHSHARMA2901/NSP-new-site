import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nationwide SEO Services | National Search Optimization',
  description: 'Dominate search results across the nation with our comprehensive nationwide SEO services. Expert national SEO strategies from NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/nationwide-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/nationwide-seo',
    title: 'Nationwide SEO Services | National Search Optimization',
    description: 'Dominate search results across the nation with our comprehensive nationwide SEO services.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nationwide SEO Services | National Search Optimization',
    description: 'Dominate search results across the nation with our comprehensive nationwide SEO services.',
  },
}

export default function NationwideSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
