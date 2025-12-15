import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Healthcare Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Healthcare paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Healthcare Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Healthcare paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/healthcare",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/healthcare",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Healthcare Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Healthcare Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Healthcare paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Healthcare paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/healthcare`} />
            </Head>
            <PaidMediaCaseStudy heading="Healthcare" />
        </>
    )
}

export default page