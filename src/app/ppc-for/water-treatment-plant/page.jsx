import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Water treatment plant Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Water treatment plant paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Water treatment plant Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Water treatment plant paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/water-treatment-plant",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/water-treatment-plant",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Water treatment plant Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Water treatment plant Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Water treatment plant paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Water treatment plant paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/water-treatment-plant`} />
            </Head>
            <PaidMediaCaseStudy heading="Water treatment plant" />
        </>
    )
}

export default page