import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wholesale market Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wholesale market paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wholesale market Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wholesale market paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wholesale-market",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wholesale-market",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wholesale market Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wholesale market Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wholesale market paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wholesale market paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wholesale-market`} />
            </Head>
            <PaidMediaCaseStudy heading="Wholesale market" />
        </>
    )
}

export default page