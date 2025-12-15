import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Contractors Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Contractors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Contractors Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Contractors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/contractors",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/contractors",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Contractors Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Contractors Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Contractors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Contractors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/contractors`} />
            </Head>
            <PaidMediaCaseStudy heading="Contractors" />
        </>
    )
}

export default page