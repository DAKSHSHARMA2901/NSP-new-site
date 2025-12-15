import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wind turbine builder Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wind turbine builder paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wind turbine builder Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wind turbine builder paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wind-turbine-builder",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wind-turbine-builder",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wind turbine builder Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wind turbine builder Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wind turbine builder paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wind turbine builder paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wind-turbine-builder`} />
            </Head>
            <PaidMediaCaseStudy heading="Wind turbine builder" />
        </>
    )
}

export default page