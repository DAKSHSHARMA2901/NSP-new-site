import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Food industry Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Food industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Food industry Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Food industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/food-industry",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/food-industry",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Food industry Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Food industry Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Food industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Food industry paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/food-industry`} />
            </Head>
            <PaidMediaCaseStudy heading="Food industry" />
        </>
    )
}

export default page