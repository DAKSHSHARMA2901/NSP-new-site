import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Insurance brokers Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Insurance brokers paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Insurance brokers Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Insurance brokers paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/insurance-brokers",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/insurance-brokers",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Insurance brokers Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Insurance brokers Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Insurance brokers paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Insurance brokers paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/insurance-brokers`} />
            </Head>
            <PaidMediaCaseStudy heading="Insurance brokers" />
        </>
    )
}

export default page