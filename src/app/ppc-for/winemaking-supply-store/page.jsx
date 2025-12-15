import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Winemaking supply store Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Winemaking supply store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Winemaking supply store Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Winemaking supply store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/winemaking-supply-store",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/winemaking-supply-store",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Winemaking supply store Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Winemaking supply store Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Winemaking supply store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Winemaking supply store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/winemaking-supply-store`} />
            </Head>
            <PaidMediaCaseStudy heading="Winemaking supply store" />
        </>
    )
}

export default page