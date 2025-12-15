import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Water testing service Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Water testing service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Water testing service Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Water testing service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/water-testing-service",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/water-testing-service",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Water testing service Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Water testing service Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Water testing service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Water testing service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/water-testing-service`} />
            </Head>
            <PaidMediaCaseStudy heading="Water testing service" />
        </>
    )
}

export default page