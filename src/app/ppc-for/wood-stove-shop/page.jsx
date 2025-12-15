import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wood stove shop Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wood stove shop paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wood stove shop Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wood stove shop paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wood-stove-shop",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wood-stove-shop",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wood stove shop Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wood stove shop Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wood stove shop paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wood stove shop paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wood-stove-shop`} />
            </Head>
            <PaidMediaCaseStudy heading="Wood stove shop" />
        </>
    )
}

export default page