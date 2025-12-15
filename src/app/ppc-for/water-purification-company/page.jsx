import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Water purification company Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Water purification company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Water purification company Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Water purification company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/water-purification-company",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/water-purification-company",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Water purification company Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Water purification company Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Water purification company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Water purification company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/water-purification-company`} />
            </Head>
            <PaidMediaCaseStudy heading="Water purification company" />
        </>
    )
}

export default page