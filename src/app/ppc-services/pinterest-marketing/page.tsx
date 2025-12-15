import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PinterestMarketingContent from '@/components/PinterestMarketingContent'

export const metadata: Metadata = {
  title: 'Pinterest Marketing Services | Drive Growth and Engagement | NSP Global Services',
  description: 'Boost Your Brand with Expert Pinterest Marketing Services - Drive Traffic, Engagement, and Conversions Today!',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/pinterest-marketing',
  },
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com/ppc-services/pinterest-marketing',
    title: 'Pinterest Marketing Services | Drive Growth and Engagement',
    description: 'Boost Your Brand with Expert Pinterest Marketing Services - Drive Traffic, Engagement, and Conversions Today!',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services Pinterest Marketing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinterest Marketing Services | Drive Growth and Engagement',
    description: 'Boost Your Brand with Expert Pinterest Marketing Services - Drive Traffic, Engagement, and Conversions Today!',
    images: ['https://www.nspglobalservices.com/logo.jpg']
  }
}

export default function PinterestMarketingPage() {
  return (
    <>
      <Header />
      <PinterestMarketingContent />
      <Footer />
    </>
  )
}
