import type { Metadata } from 'next'
import React from 'react'
import AnimatedLayoutWrapper from '@/components/AnimatedLayoutWrapper'

export const metadata: Metadata = {
  title: 'Website Development For | NSP Global Services',
  description: 'Professional website development services tailored for businesses. Explore industry-specific website solutions and transform your digital presence.',
  alternates: {
    canonical: 'https://www.nspglobalservices.com/website-development-for',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nspglobalservices.com/website-development-for',
    title: 'Website Development For | NSP Global Services',
    description: 'Professional website development services tailored for businesses. Explore industry-specific website solutions and transform your digital presence.',
    siteName: 'NSP Global Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development For | NSP Global Services',
    description: 'Professional website development services tailored for businesses. Explore industry-specific website solutions and transform your digital presence.',
  },
}

export default function WebsiteDevelopmentForLayout({ children }: { children: React.ReactNode }) {
  return <AnimatedLayoutWrapper>{children}</AnimatedLayoutWrapper>
}
