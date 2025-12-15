import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Local SEO Services That Drive Customers to Your Doorstep',
  description: 'Get the best Local SEO Services from the leading local seo agency (NSP). If you are looking for the best "local seo services near me," NSP is the way to go.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/local-seo',
  },
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/local-seo',
    title: 'Best Local SEO Services That Drive Customers to Your Doorstep',
    description: 'Get the best Local SEO Services from the leading local seo agency (NSP). If you are looking for the best "local seo services near me," NSP is the way to go.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Local SEO Services That Drive Customers to Your Doorstep',
    description: 'Get the best Local SEO Services from the leading local seo agency (NSP). If you are looking for the best "local seo services near me," NSP is the way to go.',
  },
}

export default function LocalSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
