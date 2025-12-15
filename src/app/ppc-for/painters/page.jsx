import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Painters Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Painters paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Painters Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Painters paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/painters",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/painters",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Painters Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Painters Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Painters paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Painters paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/painters`} />
            </Head>
            <PaidMediaCaseStudy heading="Painters" />
        </>
    )
}

export default page