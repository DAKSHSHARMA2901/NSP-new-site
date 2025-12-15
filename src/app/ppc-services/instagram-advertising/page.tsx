import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InstagramAdvertisingContent from '@/components/InstagramAdvertisingContent'

export const metadata: Metadata = {
  title: 'Instagram Advertising Services | Drive Results with Our Expert Team | NSP Global Services',
  description: 'Our Instagram advertising services deliver measurable results. Grow your brand, reach new audiences, and boost ROI.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/instagram-advertising',
  },
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com/ppc-services/instagram-advertising',
    title: 'Instagram Advertising Services | Drive Results with Our Expert Team',
    description: 'Our Instagram advertising services deliver measurable results. Grow your brand, reach new audiences, and boost ROI.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services Instagram Advertising'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Advertising Services | Drive Results with Our Expert Team',
    description: 'Our Instagram advertising services deliver measurable results. Grow your brand, reach new audiences, and boost ROI.',
    images: ['https://www.nspglobalservices.com/logo.jpg']
  }
}

export default function InstagramAdvertisingPage() {
  return (
    <>
      <Header />
      <InstagramAdvertisingContent />
      <Footer />
    </>
  )
}
