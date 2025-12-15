import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Travel industry Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Travel industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Travel industry Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Travel industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/travel-industry",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/travel-industry",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Travel industry Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Travel industry Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Travel industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Travel industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/travel-industry`} />
            </Head>
            <PaidMediaCaseStudy heading="Travel industry" />
        </>
    )
}

export default page