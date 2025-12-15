import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Local businesses Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Local businesses paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Local businesses Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Local businesses paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/local-businesses",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/local-businesses",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Local businesses Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Local businesses Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Local businesses paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Local businesses paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/local-businesses`} />
            </Head>
            <PaidMediaCaseStudy heading="Local businesses" />
        </>
    )
}

export default page