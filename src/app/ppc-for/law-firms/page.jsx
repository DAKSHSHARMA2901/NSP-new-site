import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Law firms Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Law firms paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Law firms Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Law firms paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/law-firms",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/law-firms",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Law firms Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Law firms Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Law firms paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Law firms paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/law-firms`} />
            </Head>
            <PaidMediaCaseStudy heading="Law firms" />
        </>
    )
}

export default page