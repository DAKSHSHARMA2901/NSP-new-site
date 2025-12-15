import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wood floor refinishing service Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wood floor refinishing service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wood floor refinishing service Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wood floor refinishing service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wood-floor-refinishing-service",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wood-floor-refinishing-service",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wood floor refinishing service Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wood floor refinishing service Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wood floor refinishing service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wood floor refinishing service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wood-floor-refinishing-service`} />
            </Head>
            <PaidMediaCaseStudy heading="Wood floor refinishing service" />
        </>
    )
}

export default page