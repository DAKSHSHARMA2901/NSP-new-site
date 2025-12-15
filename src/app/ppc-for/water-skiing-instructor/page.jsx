import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "American grocery store Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier American grocery store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "American grocery store Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier American grocery store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/water-skiing-instructor",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/water-skiing-instructor",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>American grocery store Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`American grocery store Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier American grocery store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier American grocery store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/water-skiing-instructor`} />
            </Head>
            <PaidMediaCaseStudy heading="American grocery store" />
        </>
    )
}

export default page