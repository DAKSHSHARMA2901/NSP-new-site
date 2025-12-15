import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Window treatment store Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Window treatment store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Window treatment store Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Window treatment store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/window-treatment-store",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/window-treatment-store",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Window treatment store Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Window treatment store Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Window treatment store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Window treatment store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/window-treatment-store`} />
            </Head>
            <PaidMediaCaseStudy heading="Window treatment store" />
        </>
    )
}

export default page