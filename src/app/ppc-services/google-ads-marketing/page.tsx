import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAdsMarketingContent from '@/components/GoogleAdsMarketingContent'

export const metadata: Metadata = {
  title: 'Expert Google Ads Marketing Services for Results | NSP Global Services',
  description: 'NSP provides full Google Ads Campaign Management services, including campaign setup, maintenance, and optimisation.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/google-ads-marketing',
  },
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com/ppc-services/google-ads-marketing',
    title: 'Expert Google Ads Marketing Services for Results',
    description: 'NSP provides full Google Ads Campaign Management services, including campaign setup, maintenance, and optimisation.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services Google Ads Marketing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Google Ads Marketing Services for Results',
    description: 'NSP provides full Google Ads Campaign Management services, including campaign setup, maintenance, and optimisation.',
    images: ['https://www.nspglobalservices.com/logo.jpg']
  }
}

export default function GoogleAdsMarketingPage() {
  return (
    <>
      <Header />
      <GoogleAdsMarketingContent />
      <Footer />
    </>
  )
}
