import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Schools Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Schools paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Schools Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Schools paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/schools",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/schools",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Schools Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Schools Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Schools paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Schools paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/schools`} />
            </Head>
            <PaidMediaCaseStudy heading="Schools" />
        </>
    )
}

export default page