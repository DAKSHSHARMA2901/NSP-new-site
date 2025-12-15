import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Non-profit Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Non-profit paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Non-profit Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Non-profit paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/non-profit",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/non-profit",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Non-profit Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Non-profit Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Non-profit paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Non-profit paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/non-profit`} />
            </Head>
            <PaidMediaCaseStudy heading="Non-profit" />
        </>
    )
}

export default page