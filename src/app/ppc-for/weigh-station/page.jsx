import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Weigh station Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Weigh station paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Weigh station Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Weigh station paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/weigh-station",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/weigh-station",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Weigh station Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Weigh station Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Weigh station paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Weigh station paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/weigh-station`} />
            </Head>
            <PaidMediaCaseStudy heading="Weigh station" />
        </>
    )
}

export default page