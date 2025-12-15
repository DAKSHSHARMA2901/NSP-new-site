import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Whale watching tour agency Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Whale watching tour agency paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Whale watching tour agency Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Whale watching tour agency paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/whale-watching-tour-agency",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/whale-watching-tour-agency",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Whale watching tour agency Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Whale watching tour agency Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Whale watching tour agency paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Whale watching tour agency paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/whale-watching-tour-agency`} />
            </Head>
            <PaidMediaCaseStudy heading="Whale watching tour agency" />
        </>
    )
}

export default page