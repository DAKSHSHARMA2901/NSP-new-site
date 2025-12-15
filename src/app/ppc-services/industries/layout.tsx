import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PPC Services for Industries | Pay-Per-Click Advertising Solutions',
  description: 'Expert PPC services tailored for your industry. Drive targeted traffic and maximize ROI with our industry-specific pay-per-click advertising campaigns.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/ppc-services/industries',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/ppc-services/industries',
    title: 'PPC Services for Industries | Pay-Per-Click Advertising Solutions',
    description: 'Expert PPC services tailored for your industry. Drive targeted traffic and maximize ROI with our industry-specific pay-per-click advertising campaigns.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPC Services for Industries | Pay-Per-Click Advertising Solutions',
    description: 'Expert PPC services tailored for your industry. Drive targeted traffic and maximize ROI with our industry-specific pay-per-click advertising campaigns.',
  },
}

export default function PPCIndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
