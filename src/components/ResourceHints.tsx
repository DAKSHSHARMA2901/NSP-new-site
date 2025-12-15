'use client'

import { useEffect } from 'react'

export default function ResourceHints() {
  useEffect(() => {
    // Add preconnect links if they don't exist
    const preconnects = [
      { href: 'https://fonts.googleapis.com', crossOrigin: '' },
      { href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { href: 'https://images.unsplash.com', crossOrigin: '' },
    ]

    const dnsPrefetch = [
      'https://res.cloudinary.com',
      'https://images.unsplash.com',
    ]

    preconnects.forEach(({ href, crossOrigin }) => {
      if (!document.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = href
        if (crossOrigin) link.crossOrigin = crossOrigin
        document.head.appendChild(link)
      }
    })

    dnsPrefetch.forEach((href) => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${href}"]`)) {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = href
        document.head.appendChild(link)
      }
    })
  }, [])

  return null
}
