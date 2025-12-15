import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Portable storage Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Portable storage paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Portable storage Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Portable storage paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/portable-storage",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/portable-storage",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Portable storage Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Portable storage Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Portable storage paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Portable storage paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/portable-storage`} />
            </Head>
            <PaidMediaCaseStudy heading="Portable storage" />
        </>
    )
}

export default page