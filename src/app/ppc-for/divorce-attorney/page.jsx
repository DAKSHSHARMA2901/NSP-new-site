import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Divorce attorney Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Divorce attorney paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Divorce attorney Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Divorce attorney paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/divorce-attorney",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/divorce-attorney",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Divorce attorney Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Divorce attorney Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Divorce attorney paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Divorce attorney paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/divorce-attorney`} />
            </Head>
            <PaidMediaCaseStudy heading="Divorce attorney" />
        </>
    )
}

export default page