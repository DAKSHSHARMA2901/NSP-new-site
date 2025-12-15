import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Wine wholesaler and importer store Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Wine wholesaler and importer store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Wine wholesaler and importer store Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Wine wholesaler and importer store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/wine-wholesaler-and-importer",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/wine-wholesaler-and-importer",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Wine wholesaler and importer Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Wine wholesaler and importer Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Wine wholesaler and importer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Wine wholesaler and importer paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/wine-wholesaler-and-importer`} />
            </Head>
            <PaidMediaCaseStudy heading="Wine wholesaler and importer" />
        </>
    )
}

export default page