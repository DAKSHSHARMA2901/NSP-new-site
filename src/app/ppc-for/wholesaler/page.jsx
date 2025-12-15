import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wholesaler Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wholesaler paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wholesaler Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wholesaler paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wholesaler",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wholesaler",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wholesaler Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wholesaler Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wholesaler paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wholesaler paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wholesaler`} />
            </Head>
            <PaidMediaCaseStudy heading="Wholesaler" />
        </>
    )
}

export default page