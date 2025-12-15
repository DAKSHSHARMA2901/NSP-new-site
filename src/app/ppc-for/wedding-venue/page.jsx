import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wedding venue Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wedding venue paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wedding venue Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wedding venue paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wedding-venue",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wedding-venue",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wedding venue Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wedding venue Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wedding venue paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wedding venue paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wedding-venue`} />
            </Head>
            <PaidMediaCaseStudy heading="Wedding venue" />
        </>
    )
}

export default page