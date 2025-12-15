import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creative Design Agency | Web Design & Development Services',
  description: 'Elevate your brand with expert creative design services. Professional web design, graphic design, and branding solutions from NSP Global Services.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/design-development',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/design-development',
    title: 'Creative Design Agency | Web Design & Development Services',
    description: 'Elevate your brand with expert creative design services. Professional web design, graphic design, and branding solutions from NSP Global Services.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Design Agency | Web Design & Development Services',
    description: 'Elevate your brand with expert creative design services. Professional web design, graphic design, and branding solutions from NSP Global Services.',
  },
}

export default function DesignDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
