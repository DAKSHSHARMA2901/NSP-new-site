import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wine store store Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wine store store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wine store store Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wine store store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wine-store",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wine-store",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wine store Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wine store Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wine store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wine store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wine-store`} />
            </Head>
            <PaidMediaCaseStudy heading="Wine store" />
        </>
    )
}

export default page