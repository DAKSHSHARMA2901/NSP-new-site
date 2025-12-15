import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Willow basket manufacturer Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Willow basket manufacturer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Willow basket manufacturer Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Willow basket manufacturer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/willow-basket-manufacturer",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/willow-basket-manufacturer",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Willow basket manufacturer Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Willow basket manufacturer Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Willow basket manufacturer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Willow basket manufacturer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/willow-basket-manufacturer`} />
            </Head>
            <PaidMediaCaseStudy heading="Willow basket manufacturer" />
        </>
    )
}

export default page