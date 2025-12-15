import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wood supplier Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wood supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wood supplier Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wood supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wood-supplier",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wood-supplier",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wood supplier Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wood supplier Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wood supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wood supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wood-supplier`} />
            </Head>
            <PaidMediaCaseStudy heading="Wood supplier" />
        </>
    )
}

export default page