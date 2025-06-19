"use client";
import {Badge} from "@/components/ui/badge";
import {Sparkle} from "lucide-react";
import {FeaturedCarousel} from "@/components/layout/feature-carousel";
import { TextAnimate } from "@/components/magicui/text-animate";
import { WordRotate } from "@/components/magicui/word-rotate";
import {ImageGalleryDialog} from "@/components/layout/sections/image-collection";
import {Price} from "@/components/layout/price";


interface HeroProps {
    badge?: string;
    heading?: string;
    branches?: string[];
    description?: string;
}

export const HeroSection = ({
                                badge = "New Design is out",
                                heading = "Ace Diagnostics ",
                                branches = ["Fairview","Novaliches","Valenzuela"],
                                description = "Walk-in Medical Care Center with Complete Diagnostic Facilities & Specialty Clinics",
                            }: HeroProps) => {
    return (
        <div>
            <section className="w-full py-8 md:py-16">
                <div className="max-w-7xl px-4 mx-auto">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
                            {badge && (
                                <Badge variant="outline" className="px-4 py-2">
                                    <Sparkle className="text-primary mr-2"/>
                                    {badge}
                                </Badge>
                            )}
                           <div className="flex flex-col -space-y-4">
                               <h1 className="text-4xl font-bold lg:text-5xl pointer-events-none bg-gradient-to-b from-gray-300/80 to-primary bg-clip-text leading-tight text-transparent dark:from-white dark:to-slate-900/10">
                                   {heading}
                               </h1>
                               <WordRotate
                                   words={branches}
                                   className="text-4xl font-bold lg:text-5xl pointer-events-none bg-gradient-to-b from-gray-300/80 to-primary bg-clip-text leading-tight text-transparent dark:from-white dark:to-slate-900/10"
                               />
                           </div>
                            <TextAnimate
                                animate="blurInUp"
                                by="character"
                                as="p"
                                duration={5}
                                className="text-muted-foreground max-w-lg text-2xl"
                            >
                                {description}
                            </TextAnimate>
                            <div className="flex flex-col sm:flex-row justify-start items-start gap-4 w-full sm:w-auto">
                               <div><ImageGalleryDialog/></div>
                                <div><Price/></div>
                            </div>
                        </div>
                        <FeaturedCarousel/>
                    </div>
                </div>
            </section>
        </div>

    );
};