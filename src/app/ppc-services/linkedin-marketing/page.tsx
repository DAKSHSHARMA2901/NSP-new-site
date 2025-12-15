import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LinkedInMarketingContent from '@/components/LinkedInMarketingContent'

export const metadata: Metadata = {
  title: 'LinkedIn Marketing Services | Expert B2B Strategies | NSP Global Services',
  description: 'Drive B2B success with our LinkedIn marketing expertise. We offer professional services and expert B2B strategies for your brand.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/linkedin-marketing',
  },
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com/ppc-services/linkedin-marketing',
    title: 'LinkedIn Marketing Services | Expert B2B Strategies',
    description: 'Drive B2B success with our LinkedIn marketing expertise. We offer professional services and expert B2B strategies for your brand.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services LinkedIn Marketing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn Marketing Services | Expert B2B Strategies',
    description: 'Drive B2B success with our LinkedIn marketing expertise. We offer professional services and expert B2B strategies for your brand.',
    images: ['https://www.nspglobalservices.com/logo.jpg']
  }
}

export default function LinkedInMarketingPage() {
  return (
    <>
      <Header />
      <LinkedInMarketingContent />
      <Footer />
    </>
  )
}
