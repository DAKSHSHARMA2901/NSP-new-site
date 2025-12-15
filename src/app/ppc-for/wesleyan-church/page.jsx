import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wesleyan church Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wesleyan church paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wesleyan church Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wesleyan church paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wesleyan-church",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wesleyan-church",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wesleyan church Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wesleyan church Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wesleyan church paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wesleyan church paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wesleyan-church`} />
            </Head>
            <PaidMediaCaseStudy heading="Wesleyan church" />
        </>
    )
}

export default page