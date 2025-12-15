import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Smoke shop Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Smoke shop paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Smoke shop Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Smoke shop paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/smoke-shop",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/smoke-shop",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Smoke shop Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Smoke shop Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Smoke shop paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Smoke shop paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/smoke-shop`} />
            </Head>
            <PaidMediaCaseStudy heading="Smoke shop" />
        </>
    )
}

export default page