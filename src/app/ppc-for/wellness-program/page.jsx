import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wellness program Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wellness program paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wellness program Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wellness program paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wellness-program",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wellness-program",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wellness program Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wellness program Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wellness program paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wellness program paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wellness-program`} />
            </Head>
            <PaidMediaCaseStudy heading="Wellness program" />
        </>
    )
}

export default page