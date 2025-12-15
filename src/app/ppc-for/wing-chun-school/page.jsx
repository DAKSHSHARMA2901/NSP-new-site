import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wing chun school Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wing chun school paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wing chun school Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wing chun school paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wing-chun-school",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wing-chun-school",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wing chun school Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wing chun school Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wing chun school paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wing chun school paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wing-chun-school`} />
            </Head>
            <PaidMediaCaseStudy heading="Wing chun school" />
        </>
    )
}

export default page