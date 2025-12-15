import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Window contractors Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Window contractors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Window contractors Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Window contractors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/window-contractors",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/window-contractors",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Window contractors Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Window contractors Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Window contractors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Window contractors paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/window-contractors`} />
            </Head>
            <PaidMediaCaseStudy heading="Window contractors" />
        </>
    )
}

export default page