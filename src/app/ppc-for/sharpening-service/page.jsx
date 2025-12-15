import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Sharpening service Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Sharpening service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Sharpening service Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Sharpening service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/sharpening-service",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/sharpening-service",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Sharpening service Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Sharpening service Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Sharpening service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Sharpening service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/sharpening-service`} />
            </Head>
            <PaidMediaCaseStudy heading="Sharpening service" />
        </>
    )
}

export default page