import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
  title: "Aviation Paid Media Services & Expert Online Advertising Solutions",
  description: "Discover top-tier Aviation paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
  openGraph: {
    title: "Aviation Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Aviation paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    url: "https://www.nspglobalservices.com/ppc-for/aviation",
  },
  alternates: {
    canonical: "https://www.nspglobalservices.com/ppc-for/aviation",
  },
};
function page() {
    return (
        <>
            <Head>
                <title>Aviation Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Aviation Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Aviation paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Aviation paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/aviation`} />
            </Head>
            <PaidMediaCaseStudy heading="Aviation" />
        </>
    )
}

export default page