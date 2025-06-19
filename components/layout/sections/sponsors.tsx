"use client";

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const sponsors = [
    { src: "/hmo/amaphil.png", name: "Amaphil" },
    { src: "/hmo/asianlife.png", name: "AsianLife" },
    { src: "/hmo/avega.png", name: "Avega" },
    { src: "/hmo/cocolife.png", name: "Cocolife" },
    { src: "/hmo/intellicare.png", name: "Intellicare" },
    { src: "/hmo/eastwest.png", name: "EastWest" },
    { src: "/hmo/maxicare.png", name: "Maxicare" },
];

export const SponsorsSection = () => {
    return (
        <section id="sponsors" className="max-w-[75%] mx-auto py-12 sm:py-24">
            <h2 className="text-xl md:text-2xl text-center">
                HEALTH & INSURANCE PLANS
            </h2>
            <p className="text-normal text-center mb-6">We accept the following:</p>
            <div className="mx-auto">
                <Marquee
                    className="gap-[3rem]"
                    pauseOnHover={true}
                >
                    {sponsors.map(({ src, name }) => (
                        <div
                            key={name}
                            className="flex items-center text-xl md:text-2xl font-medium"
                        >
                            <Image
                                src={src}
                                alt={`${name} logo`}
                                height={100}
                                width={100}
                                className="mr-2"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};