import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Window tinting service Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Window tinting service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Window tinting service Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Window tinting service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/window-tinting-service",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/window-tinting-service",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Window tinting service Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Window tinting service Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Window tinting service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Window tinting service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/window-tinting-service`} />
            </Head>
            <PaidMediaCaseStudy heading="Window tinting service" />
        </>
    )
}

export default page