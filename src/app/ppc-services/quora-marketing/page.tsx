import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuoraMarketingContent from '@/components/QuoraMarketingContent'

export const metadata: Metadata = {
  title: 'Quora Marketing Services: Drive Engagement and Conversions',
  description: 'Supercharge your online presence with our Quora marketing services. Drive traffic, engage audiences, and boost conversions today.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/quora-marketing',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.nspglobalservices.com/ppc-services/quora-marketing',
    title: 'Quora Marketing Services: Drive Engagement and Conversions',
    description: 'Supercharge your online presence with our Quora marketing services. Drive traffic, engage audiences, and boost conversions today.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services Quora Marketing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quora Marketing Services: Drive Engagement and Conversions',
    description: 'Supercharge your online presence with our Quora marketing services. Drive traffic, engage audiences, and boost conversions today.',
    images: ['https://www.nspglobalservices.com/logo.jpg']
  }
}

export default function QuoraMarketingPage() {
  return (
    <>
      <Header />
      <QuoraMarketingContent />
      <Footer />
    </>
  )
}
