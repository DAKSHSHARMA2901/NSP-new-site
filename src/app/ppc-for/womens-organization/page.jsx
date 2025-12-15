import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Womens organization Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Womens organization paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Womens organization Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Womens organization paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/womens-organization",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/womens-organization",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Womens organization Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Womens organization Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Womens organization paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Womens organization paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/womens-organization`} />
            </Head>
            <PaidMediaCaseStudy heading="Womens organization" />
        </>
    )
}

export default page