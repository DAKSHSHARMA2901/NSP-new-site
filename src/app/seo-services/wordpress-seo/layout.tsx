import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WordPress SEO Services | WordPress Optimization',
  description: 'Expert WordPress SEO services to optimize your WordPress website. Improve rankings, speed, and performance with specialized WordPress SEO.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/seo-services/wordpress-seo',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/seo-services/wordpress-seo',
    title: 'WordPress SEO Services | WordPress Optimization',
    description: 'Expert WordPress SEO services to optimize your WordPress website.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress SEO Services | WordPress Optimization',
    description: 'Expert WordPress SEO services to optimize your WordPress website.',
  },
}

export default function WordPressSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
