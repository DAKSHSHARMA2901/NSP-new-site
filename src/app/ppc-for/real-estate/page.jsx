import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Real estate Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Real estate paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Real estate Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Real estate paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/real-estate",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/real-estate",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Real estate Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Real estate Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Real estate paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Real estate paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/real-estate`} />
            </Head>
            <PaidMediaCaseStudy heading="Real estate" />
        </>
    )
}

export default page