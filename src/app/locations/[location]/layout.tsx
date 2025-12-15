import type { Metadata } from 'next'

type Props = {
  params: Promise<{ location: string }>
}

// Custom metadata for specific locations
const customLocationMetadata: Record<string, { title: string; description: string }> = {
  'luton-seo-agency': {
    title: 'Luton SEO Agency | Boost Rankings with NSP Global Services',
    description: 'NSP Global Services is a top SEO agency in Luton, delivering proven strategies to enhance visibility & grow your business online.',
  },
  // Add more custom locations here as needed
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const location = resolvedParams.location
  
  // Check if there's custom metadata for this location
  if (customLocationMetadata[location]) {
    const custom = customLocationMetadata[location]
    return {
      title: custom.title,
      description: custom.description,
      alternates: {
        canonical: `https://www.nspglobalservices.com/locations/${location}`,
      },
      openGraph: {
        type: 'website',
        url: `https://www.nspglobalservices.com/locations/${location}`,
        title: custom.title,
        description: custom.description,
        siteName: 'NSP Global Services',
      },
      twitter: {
        card: 'summary_large_image',
        title: custom.title,
        description: custom.description,
      },
    }
  }
  
  // Default metadata generation for locations without custom metadata
  const locationName = location
    .replace('-seo-agency', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const title = `${locationName} SEO Agency: Maximizing Online Impact with NSP`
  const description = `Drive more leads and sales with NSP, the top-rated ${locationName} SEO agency. Tap into our expertise to enhance your online visibility and stay ahead of the competition.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.nspglobalservices.com/locations/${location}`,
    },
    openGraph: {
      type: 'website',
      url: `https://www.nspglobalservices.com/locations/${location}`,
      title,
      description,
      siteName: 'NSP Global Services',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
