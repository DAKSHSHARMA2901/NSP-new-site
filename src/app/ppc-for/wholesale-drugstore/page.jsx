import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wholesale drugstore Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wholesale drugstore paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wholesale drugstore Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wholesale drugstore paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wholesale-drugstore",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wholesale-drugstore",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wholesale drugstore Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wholesale drugstore Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wholesale drugstore paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wholesale drugstore paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wholesale-drugstore`} />
            </Head>
            <PaidMediaCaseStudy heading="Wholesale drugstore" />
        </>
    )
}

export default page