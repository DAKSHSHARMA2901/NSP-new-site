import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wholesale bakery Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wholesale bakery paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wholesale bakery Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wholesale bakery paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wholesale-bakery",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wholesale-bakery",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wholesale bakery Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wholesale bakery Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wholesale bakery paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wholesale bakery paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wholesale-bakery`} />
            </Head>
            <PaidMediaCaseStudy heading="Wholesale bakery" />
        </>
    )
}

export default page