import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PPCServicesContent from '@/components/PPCServicesContent'

export const metadata: Metadata = {
  title: 'Boost Your ROI with Expert PPC Services from NSP Global Services',
  description: 'Maximize your ROI with expert PPC services from NSP Global Services. Drive targeted traffic, boost conversions, and grow your business with data-driven strategies.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/ppc-services',
    title: 'Boost Your ROI with Expert PPC Services from NSP Global Services',
    description: 'Maximize your ROI with expert PPC services from NSP Global Services. Drive targeted traffic, boost conversions, and grow your business with data-driven strategies.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services PPC Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boost Your ROI with Expert PPC Services from NSP Global Services',
    description: 'Maximize your ROI with expert PPC services from NSP Global Services. Drive targeted traffic, boost conversions, and grow your business with data-driven strategies.',
    images: ['https://www.nspglobalservices.com/logo.jpg']
  }
}

export default function PPCServicesPage() {
  return (
    <>
      <Header />
      <PPCServicesContent />
      <Footer />
    </>
  )
}