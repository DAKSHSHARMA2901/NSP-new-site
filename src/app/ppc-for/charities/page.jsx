import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Charities Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Charities paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Charities Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Charities paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/charities",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/charities",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Charities Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Charities Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Charities paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Charities paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/charities`} />
            </Head>
            <PaidMediaCaseStudy heading="Charities" />
        </>
    )
}

export default page