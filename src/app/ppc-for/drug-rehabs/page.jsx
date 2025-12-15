import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Drug rehabs Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Drug rehabs paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Drug rehabs Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Drug rehabs paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/drug-rehabs",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/drug-rehabs",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Drug rehabs Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Drug rehabs Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Drug rehabs paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Drug rehabs paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/drug-rehabs`} />
            </Head>
            <PaidMediaCaseStudy heading="Drug rehabs" />
        </>
    )
}

export default page