import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopify SEO Services | E-commerce Optimization',
  description: 'Specialized Shopify SEO services to boost your online store rankings. Increase organic traffic and sales with expert Shopify optimization.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/shopify-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/shopify-seo',
    title: 'Shopify SEO Services | E-commerce Optimization',
    description: 'Specialized Shopify SEO services to boost your online store rankings.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify SEO Services | E-commerce Optimization',
    description: 'Specialized Shopify SEO services to boost your online store rankings.',
  },
}

export default function ShopifySEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
