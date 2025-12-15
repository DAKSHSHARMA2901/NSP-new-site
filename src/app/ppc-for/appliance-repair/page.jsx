import PaidMediaCaseStudy from '@/app/components/casestudy/PaidMediaCaseStudy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
    title: "Appliance repair Paid Media Services & Expert Online Advertising Solutions",
    description: "Discover top-tier Appliance repair paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
    openGraph: {
        title: "Appliance repair Paid Media Services & Expert Online Advertising Solutions",
        description: "Discover top-tier Appliance repair paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.",
        url: "https://www.nspglobalservices.com/ppc-for/appliance-repair",
    },
    alternates: {
        canonical: "https://www.nspglobalservices.com/ppc-for/appliance-repair",
    },
};
function page() {
    return (
        <>
            <Head>
                <title>Appliance repair Paid Media Services & Expert Online Advertising Solutions</title>
                <meta property="og:title" content={`Appliance repair Paid Media Services & Expert Online Advertising Solutions`} />
                <meta property="og:description" content={`Discover top-tier Appliance repair paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <meta name="description" content={`Discover top-tier Appliance repair paid media services from our expert programmatic advertising agency. Maximize your brand's reach and ROI with our targeted solutions.`} />
                <link rel="canonical" href={`https://www.nspglobalservices.com/ppc-for/appliance-repair`} />
            </Head>
            <PaidMediaCaseStudy heading="Appliance repair" />
        </>
    )
}

export default page