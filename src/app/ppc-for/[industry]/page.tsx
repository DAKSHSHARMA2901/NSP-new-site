import type { Metadata } from 'next'
import PaidMediaCaseStudy from '@/components/casestudy/PaidMediaCaseStudy'

type Props = {
  params: { industry: string }
}

function toTitle(input: string) {
  return input
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = toTitle(params.industry)
  const url = `https://www.nspglobalservices.com/ppc-for/${params.industry}`
  const title = `${name} PPC Services & Digital Advertising | NSP Global Services`
  const description = `Specialized PPC services for ${name} — drive qualified traffic, increase conversions, and maximize ROI with data-driven campaigns.`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
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

export default function Page({ params }: Props) {
  const heading = toTitle(params.industry)
  return <PaidMediaCaseStudy heading={heading} />
}
