import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wax supplier Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wax supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wax supplier Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wax supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wax-supplier",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wax-supplier",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wax supplier Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wax supplier Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wax supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wax supplier paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wax-supplier`} />
            </Head>
            <PaidMediaCaseStudy heading="Wax supplier" />
        </>
    )
}

export default page