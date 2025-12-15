import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Web hosting company Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Web hosting company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Web hosting company Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Web hosting company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/web-hosting-company",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/web-hosting-company",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Web hosting company Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Web hosting company Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Web hosting company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Web hosting company paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/web-hosting-company`} />
            </Head>
            <PaidMediaCaseStudy heading="Web hosting company" />
        </>
    )
}

export default page