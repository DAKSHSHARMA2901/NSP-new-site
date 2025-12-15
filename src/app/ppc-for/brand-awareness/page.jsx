import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Brand awareness Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Brand awareness paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Brand awareness Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Brand awareness paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/brand-awareness",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/brand-awareness",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Brand awareness Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Brand awareness Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Brand awareness paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Brand awareness paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/brand-awareness`} />
            </Head>
            <PaidMediaCaseStudy heading="Brand awareness" />
        </>
    )
}

export default page