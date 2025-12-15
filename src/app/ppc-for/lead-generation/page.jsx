import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Lead generation Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Lead generation paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Lead generation Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Lead generation paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/lead-generation",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/lead-generation",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Lead generation Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Lead generation Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Lead generation paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Lead generation paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/lead-generation`} />
            </Head>
            <PaidMediaCaseStudy heading="Lead generation" />
        </>
    )
}

export default page