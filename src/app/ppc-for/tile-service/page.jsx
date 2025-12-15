import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Tile service Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Tile service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Tile service Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Tile service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/tile-service",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/tile-service",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Tile service Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Tile service Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Tile service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Tile service paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/tile-service`} />
            </Head>
            <PaidMediaCaseStudy heading="Tile service" />
        </>
    )
}

export default page