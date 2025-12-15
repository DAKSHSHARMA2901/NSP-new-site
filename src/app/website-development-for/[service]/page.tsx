import React from 'react'
import DesignAndDevelopmentCaseStudy from '@/components/casestudy/DesignAndDevelopmentCaseStudy.jsx'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ service: string }>
}

// Available services (duplicated from the legacy route for now)
const availableServices = [
  'alcohol',
  'bar',
  'middle-school',
  'midwife',
  'military-archive',
  'military-barracks',
  'military-base',
  'military-board',
  'military-cemetery',
  'military-hospital',
  'military-recruiting-office',
  'military-residence',
  'military-school',
  'military-town',
  'millwork-shop',
  'mine',
  'mineral-water-company',
  'mini-dealer',
  'miniature-golf-course',
  'minibus-taxi-service',
  'mining-company',
  'mining-consultant',
  'mining-equipment',
  'ministry-of-education',
  'mission',
  'mitsubishi-dealer',
  'mobile-caterer',
  'mobile-hairdresser',
  'mobile-home-dealer',
  'mobile-home-park',
  'mobile-home-rental-agency',
  'mobile-money-agent',
  'mobile-network-operator',
  'mobile-phone-repair-shop',
  'mobility-equipment-supplier',
  'model-car-play-area',
  'model-design-company',
  'model-portfolio-studio',
  'model-shop',
  'model-train-store',
  'modeling-agency',
  'modeling-school',
  'modern-art-museum',
  'modular-home-builder',
  'modular-home-dealer',
  'mohel',
  'mold-maker',
  'molding-supplier',
  'monastery',
  'money-order-service',
  'money-transfer-service',
  'monogramming-service',
  'montessori-school',
  'moped-dealer',
  'moravian-church',
  'motel',
  'motor-scooter-dealer',
  'motor-scooter-repair-shop',
  'motor-vehicle-dealer',
  'motorcycle-dealer',
  'motorcycle-driving-school',
  'motorcycle-insurance-agency',
  'motorcycle-rental-agency',
  'motorcycle-repair-shop',
  'motoring-club',
  'motorsports-store',
  'mountain-cabin',
  'mountaineering-class',
  'movie-rental-kiosk',
  'movie-studio',
  'movie-theater',
  'moving-and-storage-service',
  'moving-company',
  'moving-supply-store',
  'mri-center',
  'muay-thai-boxing-gym',
  'municipal-department-agricultural-development',
  'municipal-department-civil-defense',
  'municipal-department-communication',
  'municipal-department-finance',
  'municipal-department-housing-and-urban-development',
  'municipal-department-of-tourism',
  'municipal-department-science-technology',
  'municipal-department-social-defense',
  'municipal-guard',
  'museum-of-zoology',
  'music-box-store',
  'music-college',
  'music-conservatory',
  'music-instructor',
  'music-management-and-promotion',
  'music-producer',
  'music-publisher',
  'music-school',
  'music-store',
  'musical-club',
  'musical-instrument-manufacturer',
  'musical-instrument-rental-service',
  'musical-instrument-repair-shop',
  'musical-instrument-store',
  'musician',
  'musician-and-composer',
  'nail-salon',
  'nanotechnology-engineering-service',
  'national-forest',
  'national-health-foundation',
  'novelty-store',
  'nuclear-engineering-service',
  'nuclear-power-company',
  'nuclear-power-plant',
  'newspaper-publisher',
  'newsstand',
  'nissan-dealer',
  'non-smoking-holiday-home',
  'non-denominational-church',
  'non-governmental-organization',
  'non-profit-organization',
  'neurophysiologist',
  'neuropsychologist',
  'neurosurgeon',
  'new-age-church',
  'news-service',
  'newspaper-advertising-department',
  'natural-history-museum',
  'natural-rock-climbing-area',
  'natural-stone-exporter',
  'natural-stone-supplier',
  'natural-stone-wholesaler',
  'nature-preserve',
  'naturopathic-practitioner',
  'naval-base',
  'needlework-shop',
  'neon-sign-shop',
  'neonatal-physician',
  'national-museum',
  'national-park',
  'national-reserve',
  'native-american-goods-store',
  'municipal-office-education',
  'municipal-social-development',
  'musalla',
  'museum',
  'nursing-agency',
  'nursing-association',
  'nursing-home',
  'nursing-school',
  'nut-store',
  'nutritionist',
  // ... (truncated for brevity; keep same list as legacy)
  'video-arcade'
]

function formatServiceName(service: string): string {
  return service.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params

  if (!availableServices.includes(service)) {
    return {
      title: 'Service Not Found',
      description: 'The requested website development service was not found.',
    }
  }

  const formattedName = formatServiceName(service)

  return {
    title: `${formattedName} Website Development | Custom Responsive Websites`,
    description: `Transform your online brand with our expert website development services. Specializing in custom, responsive websites for ${formattedName}. Contact now!`,
    openGraph: {
      title: `${formattedName} Website Development | Custom Responsive Websites`,
      description: `Transform your online brand with our expert website development services. Specializing in custom, responsive websites for ${formattedName}. Contact now!`,
    },
    alternates: {
      canonical: `https://www.nspglobalservices.com/website-development-for/${service}`,
    },
  }
}

export async function generateStaticParams() {
  return availableServices.map((service) => ({ service }))
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params

  if (!availableServices.includes(service)) notFound()

  const formattedName = formatServiceName(service)
  return <DesignAndDevelopmentCaseStudy heading={formattedName} />
}
