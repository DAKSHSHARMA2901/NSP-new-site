import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "wood floor installation service Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier wood floor installation service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "wood floor installation service Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier wood floor installation service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wood-floor-installation-service",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wood-floor-installation-service",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>wood floor installation service Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`wood floor installation service Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier wood floor installation service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier wood floor installation service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wood-floor-installation-service`} />
            </Head>
            <PaidMediaCaseStudy heading="wood floor installation service" />
        </>
    )
}

export default page