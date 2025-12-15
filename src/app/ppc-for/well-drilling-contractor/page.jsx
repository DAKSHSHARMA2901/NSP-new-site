import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Well drilling contractor Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Well drilling contractor paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Well drilling contractor Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Well drilling contractor paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/well-drilling-contractor",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/well-drilling-contractor",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Well drilling contractor Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Well drilling contractor Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Well drilling contractor paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Well drilling contractor paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/well-drilling-contractor`} />
            </Head>
            <PaidMediaCaseStudy heading="Well drilling contractor" />
        </>
    )
}

export default page