import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Medical clinics Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Medical clinics paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Medical clinics Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Medical clinics paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/medical-clinics",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/medical-clinics",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Medical clinics Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Medical clinics Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Medical clinics paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Medical clinics paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/medical-clinics`} />
            </Head>
            <PaidMediaCaseStudy heading="Medical clinics" />
        </>
    )
}

export default page