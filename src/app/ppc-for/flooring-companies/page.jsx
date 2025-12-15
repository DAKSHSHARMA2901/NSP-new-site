import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Flooring companies Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Flooring companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Flooring companies Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Flooring companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/flooring-companies",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/flooring-companies",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Flooring companies Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Flooring companies Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Flooring companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Flooring companies paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/flooring-companies`} />
            </Head>
            <PaidMediaCaseStudy heading="Flooring companies" />
        </>
    )
}

export default page