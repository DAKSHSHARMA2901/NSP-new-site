import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Shared use commercial kitchen Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Shared use commercial kitchen paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Shared use commercial kitchen Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Shared use commercial kitchen paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/shared-use-commercial-kitchen",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/shared-use-commercial-kitchen",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Shared use commercial kitchen Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Shared use commercial kitchen Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Shared use commercial kitchen paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Shared use commercial kitchen paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/shared-use-commercial-kitchen`} />
            </Head>
            <PaidMediaCaseStudy heading="Shared use commercial kitchen" />
        </>
    )
}

export default page