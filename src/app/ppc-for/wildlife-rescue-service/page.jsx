import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wildlife rescue service Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wildlife rescue service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wildlife rescue service Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wildlife rescue service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wildlife-rescue-service",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wildlife-rescue-service",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wildlife rescue service Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wildlife rescue service Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wildlife rescue service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wildlife rescue service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wildlife-rescue-service`} />
            </Head>
            <PaidMediaCaseStudy heading="Wildlife rescue service" />
        </>
    )
}

export default page