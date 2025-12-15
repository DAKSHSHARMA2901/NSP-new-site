import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Zhejiang restaurant Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Zhejiang restaurant paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Zhejiang restaurant Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Zhejiang restaurant paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/zhejiang-restaurant",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/zhejiang-restaurant",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Zhejiang restaurant Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Zhejiang restaurant Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Zhejiang restaurant paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Zhejiang restaurant paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/zhejiang-restaurant`} />
            </Head>
            <PaidMediaCaseStudy heading="Zhejiang restaurant" />
        </>
    )
}

export default page