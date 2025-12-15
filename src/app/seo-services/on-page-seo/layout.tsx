import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'On-Page SEO Services | Content Optimization',
  description: 'Professional on-page SEO services to optimize your website content, meta tags, and structure. Improve rankings with expert on-page optimization.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/on-page-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/on-page-seo',
    title: 'On-Page SEO Services | Content Optimization',
    description: 'Professional on-page SEO services to optimize your website content, meta tags, and structure.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On-Page SEO Services | Content Optimization',
    description: 'Professional on-page SEO services to optimize your website content.',
  },
}

export default function OnPageSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
