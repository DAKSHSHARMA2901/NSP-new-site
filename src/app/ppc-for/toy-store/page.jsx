import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Toy store Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Toy store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Toy store Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Toy store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/toy-store",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/toy-store",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Toy store Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Toy store Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Toy store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Toy store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/toy-store`} />
            </Head>
            <PaidMediaCaseStudy heading="Toy store" />
        </>
    )
}

export default page