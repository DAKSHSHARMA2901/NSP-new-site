import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Youth hostel Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Youth hostel paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Youth hostel Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Youth hostel paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/youth-hostel",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/youth-hostel",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Youth hostel Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Youth hostel Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Youth hostel paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Youth hostel paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-services-for/youth-hostel`} />
            </Head>
            <PaidMediaCaseStudy heading="Youth hostel" />
        </>
    )
}

export default page