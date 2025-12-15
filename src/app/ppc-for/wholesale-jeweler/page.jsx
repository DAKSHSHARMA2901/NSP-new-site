import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wholesale jeweler Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wholesale jeweler paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wholesale jeweler Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wholesale jeweler paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wholesale-jeweler",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wholesale-jeweler",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wholesale jeweler Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wholesale jeweler Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wholesale jeweler paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wholesale jeweler paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wholesale-jeweler`} />
            </Head>
            <PaidMediaCaseStudy heading="Wholesale jeweler" />
        </>
    )
}

export default page