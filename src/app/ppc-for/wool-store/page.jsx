import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wool store Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wool store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wool store Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wool store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wool-store",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wool-store",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wool store Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wool store Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wool store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wool store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wool-store`} />
            </Head>
            <PaidMediaCaseStudy heading="Wool store" />
        </>
    )
}

export default page