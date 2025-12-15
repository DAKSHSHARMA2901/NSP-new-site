import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Womens personal trainer Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Womens personal trainer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Womens personal trainer Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Womens personal trainer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/womens-personal-trainer",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/womens-personal-trainer",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Womens personal trainer Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Womens personal trainer Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Womens personal trainer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Womens personal trainer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/womens-personal-trainer`} />
            </Head>
            <PaidMediaCaseStudy heading="Womens personal trainer" />
        </>
    )
}

export default page