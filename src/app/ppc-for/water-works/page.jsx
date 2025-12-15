import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Water works Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Water works paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Water works Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Water works paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/water-works",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/water-works",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Water works Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Water works Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Water works paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Water works paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/water-works`} />
            </Head>
            <PaidMediaCaseStudy heading="Water works" />
        </>
    )
}

export default page