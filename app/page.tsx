import {HeroSection} from "@/components/layout/sections/hero";
import {SponsorsSection} from "@/components/layout/sections/sponsors";
import {AboutSection} from "@/components/layout/sections/about";
import {DoctorSection} from "@/components/layout/sections/doctor";
import ContactSection from "@/components/layout/sections/contact";
import {FAQSection} from "@/components/layout/sections/faq";
import {FooterSection} from "@/components/layout/sections/footer";
import {MissionVisionSection} from "@/components/layout/sections/mission";
import {Messenger} from "@/components/layout/messenger";

export const metadata = {
    title: "Ace Diagnostics Clinic",
    description: "Website for Ace Diagnostics Corporation",
};

export default function Home() {
    return (
        <div className="overflow-hidden">
            <HeroSection/>
            <SponsorsSection/>
            <AboutSection/>
            <DoctorSection/>
            <MissionVisionSection/>
            <ContactSection/>
            <FAQSection/>
            <FooterSection/>
            <Messenger/>
        </div>
    );
}
