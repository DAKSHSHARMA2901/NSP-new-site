import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical SEO Services | Website Optimization Experts',
  description: 'Comprehensive technical SEO services to optimize your website infrastructure. Fix crawl errors, improve site speed, and boost search rankings.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/technical-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/technical-seo',
    title: 'Technical SEO Services | Website Optimization Experts',
    description: 'Comprehensive technical SEO services to optimize your website infrastructure.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO Services | Website Optimization Experts',
    description: 'Comprehensive technical SEO services to optimize your website infrastructure.',
  },
}

export default function TechnicalSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
