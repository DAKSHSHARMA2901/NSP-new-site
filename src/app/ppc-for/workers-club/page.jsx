import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Workers club Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Workers club paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Workers club Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Workers club paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/workers-club",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/workers-club",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Workers club Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Workers club Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Workers club paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Workers club paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/workers-club`} />
            </Head>
            <PaidMediaCaseStudy heading="Workers club" />
        </>
    )
}

export default page