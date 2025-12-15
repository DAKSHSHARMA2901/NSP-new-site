import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Water works equipment supplier Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Water works equipment supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Water works equipment supplier Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Water works equipment supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/water-works-equipment-supplier",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/water-works-equipment-supplier",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Water works equipment supplier Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Water works equipment supplier Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Water works equipment supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Water works equipment supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/water-works-equipment-supplier`} />
            </Head>
            <PaidMediaCaseStudy heading="Water works equipment supplier" />
        </>
    )
}

export default page