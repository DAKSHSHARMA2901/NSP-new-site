import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PPCManagementServicesContent from '@/components/PPCManagementServicesContent'

export const metadata: Metadata = {
  title: 'PPC Management Services: Drive Clicks and Conversions | NSP Global Services',
  description: 'A PPC management agency that understands the objectives of its clients. We assist our clients in reaching their buyers via Google and Facebook ads. Clicks, conversions, and growth are just a click away.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/ppc-management-services',
  },
  openGraph: {
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.nspglobalservices.com/ppc-services/ppc-management-services',
    title: 'PPC Management Services: Drive Clicks and Conversions',
    description: 'A PPC management agency that understands the objectives of its clients. We assist our clients in reaching their buyers via Google and Facebook ads. Clicks, conversions, and growth are just a click away.',
    siteName: 'NSP Global Services',
    images: [
      {
        url: 'https://www.nspglobalservices.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'NSP Global Services PPC Management'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPC Management Services: Drive Clicks and Conversions',
    description: 'A PPC management agency that understands the objectives of its clients. We assist our clients in reaching their buyers via Google and Facebook ads. Clicks, conversions, and growth are just a click away.',
    images: ['https://www.nspglobalservices.com/logo.jpg']
  }
}

export default function PPCManagementServicesPage() {
  return (
    <>
      <Header />
      <PPCManagementServicesContent />
      <Footer />
    </>
  )
}
