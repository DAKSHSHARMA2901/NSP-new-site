import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Recruiters Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Recruiters paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Recruiters Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Recruiters paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/recruiters",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/recruiters",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Recruiters Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Recruiters Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Recruiters paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Recruiters paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/recruiters`} />
            </Head>
            <PaidMediaCaseStudy heading="Recruiters" />
        </>
    )
}

export default page