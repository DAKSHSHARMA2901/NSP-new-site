import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Small Business SEO Services | Affordable SEO Solutions',
  description: 'Affordable SEO services designed for small businesses. Get more customers and grow your local presence with expert SEO from NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/small-business-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/small-business-seo',
    title: 'Small Business SEO Services | Affordable SEO Solutions',
    description: 'Affordable SEO services designed for small businesses.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business SEO Services | Affordable SEO Solutions',
    description: 'Affordable SEO services designed for small businesses.',
  },
}

export default function SmallBusinessSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
