import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Window cleaning service Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Window cleaning service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Window cleaning service Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Window cleaning service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/window-cleaning-service",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/window-cleaning-service",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Window cleaning service Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Window cleaning service Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Window cleaning service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Window cleaning service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/window-cleaning-service`} />
            </Head>
            <PaidMediaCaseStudy heading="Window cleaning service" />
        </>
    )
}

export default page