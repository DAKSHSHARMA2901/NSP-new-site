import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Woodworking supply store Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Woodworking supply store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Woodworking supply store Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Woodworking supply store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/woodworking-supply-store",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/woodworking-supply-store",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Woodworking supply store Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Woodworking supply store Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Woodworking supply store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Woodworking supply store paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/woodworking-supply-store`} />
            </Head>
            <PaidMediaCaseStudy heading="Woodworking supply store" />
        </>
    )
}

export default page