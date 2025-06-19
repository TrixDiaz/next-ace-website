import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Icon} from "@/components/ui/icon";
import {icons} from "lucide-react";

interface AboutProps {
    icon: string;
    title: string;
    description: string;
}

const benefitList: AboutProps[] = [
    {
        icon: "ShieldPlus",
        title: "Patient Account",
        description:
            "Passwordless Account for all patients for viewing all your history records.",
    },
    {
        icon: "Globe",
        title: "Online Result",
        description:
            "Online Result for Laboratory Result.",
    },
    {
        icon: "ListOrdered",
        title: "Queue System",
        description:
            "Queue Management System for Patients (Fairview Branch Only)",
    },
    {
        icon: "Wifi",
        title: "Free WiFi",
        description:
            "Free WiFi for all Patients",
    },
];

export const AboutSection = () => {
    return (
        <section id="aboutus" className="max-w-7xl mx-auto py-12 sm:py-24">
            <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
                <div>
                    <h2 className="text-lg text-primary mb-2 tracking-wider">About Us</h2>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Your Clinic for your Health
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        ACE Diagnostics Corporation is a fully equipped and professionally run medical facility which
                        provides state-of-the-art diagnosis and evaluation of the healthcare needs of patients.
                        Established in 2002, it is broadly owned and operated by reputable professionals in the medical
                        discipline and business community. Its medical staff is composed of physicians from the major
                        hospitals in Metro Manila.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 w-full">
                    {benefitList.map(({icon, title, description}, index) => (
                        <Card
                            key={title}
                            className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
                        >
                            <CardHeader>
                                <div className="flex justify-between">
                                    <Icon
                                        name={icon as keyof typeof icons}
                                        size={32}
                                        color="var(--primary)"
                                        className="mb-6 text-primary"
                                    />
                                    <span
                                        className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                                </div>

                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent className="text-muted-foreground">
                                {description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
