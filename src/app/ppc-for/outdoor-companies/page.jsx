import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Outdoor companies Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Outdoor companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Outdoor companies Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Outdoor companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/outdoor-companies",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/outdoor-companies",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Outdoor companies Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Outdoor companies Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Outdoor companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Outdoor companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/outdoor-companies`} />
            </Head>
            <PaidMediaCaseStudy heading="Outdoor companies" />
        </>
    )
}

export default page