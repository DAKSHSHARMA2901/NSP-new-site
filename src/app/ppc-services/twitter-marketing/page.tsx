import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TwitterMarketingContent from '@/components/TwitterMarketingContent'

export const metadata: Metadata = {
  title: 'Twitter Advertising Services | Boost Your Audience Growth',
  description: 'Our Twitter advertising services are tailored to help you grow your audience. Reach new heights with expert strategies.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/twitter-marketing',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.nspglobalservices.com/ppc-services/twitter-marketing',
    title: 'Twitter Advertising Services | Boost Your Audience Growth',
    description: 'Our Twitter advertising services are tailored to help you grow your audience. Reach new heights with expert strategies.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services Twitter Marketing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Advertising Services | Boost Your Audience Growth',
    description: 'Our Twitter advertising services are tailored to help you grow your audience. Reach new heights with expert strategies.',
    images: ['https://www.nspglobalservices.com/logo.jpg']
  }
}

export default function TwitterMarketingPage() {
  return (
    <>
      <Header />
      <TwitterMarketingContent />
      <Footer />
    </>
  )
}
