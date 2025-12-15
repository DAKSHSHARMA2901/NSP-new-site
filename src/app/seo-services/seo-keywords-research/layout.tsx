import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Keyword Research Services | Expert Keyword Strategy',
  description: 'Professional SEO keyword research services to identify high-value keywords and drive targeted traffic to your website. Data-driven keyword strategy from NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/seo-keywords-research',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/seo-keywords-research',
    title: 'SEO Keyword Research Services | Expert Keyword Strategy',
    description: 'Professional SEO keyword research services to identify high-value keywords and drive targeted traffic to your website.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Keyword Research Services | Expert Keyword Strategy',
    description: 'Professional SEO keyword research services to identify high-value keywords and drive targeted traffic to your website.',
  },
}

export default function SEOKeywordsResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
