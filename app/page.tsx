import {HeroSection} from "@/components/layout/sections/hero";
import {SponsorsSection} from "@/components/layout/sections/sponsors";
import {BenefitsSection} from "@/components/layout/sections/benefits";
import {FeaturesSection} from "@/components/layout/sections/features";
import {TeamSection} from "@/components/layout/sections/team";
import {ContactSection} from "@/components/layout/sections/contact";
import {FAQSection} from "@/components/layout/sections/faq";
import {FooterSection} from "@/components/layout/sections/footer";


export const metadata = {
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    openGraph: {
        type: "website",
        url: "https://github.com/nobruf/shadcn-landing-page.git",
        title: "Shadcn - Landing template",
        description: "Free Shadcn landing page for developers",
        images: [
            {
                url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
                width: 1200,
                height: 630,
                alt: "Shadcn - Landing template",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://github.com/nobruf/shadcn-landing-page.git",
        title: "Shadcn - Landing template",
        description: "Free Shadcn landing page for developers",
        images: [
            "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        ],
    },
};

export default function Home() {
    return (
        <div>
            <HeroSection/>
            <SponsorsSection/>
            <BenefitsSection/>
            <FeaturesSection/>
            <TeamSection/>
            <ContactSection/>
            <FAQSection/>
            <FooterSection/>
        </div>
    );
}
