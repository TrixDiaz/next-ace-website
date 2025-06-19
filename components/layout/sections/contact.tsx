"use client";
import React, {useState} from 'react';
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Building2, Clock, Mail, Phone, MapPin, Facebook} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

interface BranchData {
    id: string;
    name: string;
    address: string;
    pageurl?: string;
    phone: {
        name: string;
        number: string;
    }[];
    email: string;
    officeHours: {
        day: string;
        time: string;
    }[];
    iframe: string;
}

interface ContactProps {
    title?: string;
    subtitle?: string;
    description?: string;
    page?: string;
    findUs?: string;
    callUs?: string;
    mailUs?: string;
    visitUs?: string;
    branches?: BranchData[];
}

const defaultBranches: BranchData[] = [
    {
        id: "fairview",
        name: "Fairview Branch",
        address: "1 CPE Building, B2 Marlboro Street, Commonwealth Ave, Quezon City, 1121 Metro Manila",
        email: "acediagnosticscorp@gmail.com",
        pageurl: "https://www.facebook.com/acediagnosticsfairview",
        phone: [
            {name: "Reception", number: "(02) 8461 3905"},
            {name: "Secretary", number: "(02) 8461 3890"},
            {name: "Cashier", number: "(02) 8461 3901 / 8461 3906"},
            {name: "Inquiry (Smart)", number: "(+63) 918 962 7616"},
            {name: "Inquiry (Globe)", number: "(+63) 917 562 5222"},
        ],
        officeHours: [
            {day: "Monday to Saturday", time: "7:00AM to 4:00PM"},
            {day: "Sunday", time: "7:00AM - 3:00PM"},
        ],
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.1362300027286!2d121.07077137681682!3d14.704887037910597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b09e7d6d7631%3A0x481c3ba178e14513!2sACE%20Diagnostics!5e0!3m2!1sen!2sph!4v1750133543825!5m2!1sen!2sph"
    },
    {
        id: "novaliches",
        name: "Novaliches Branch",
        address: "789 Quirino Hwy, Novaliches, Quezon City, 1117 Metro Manila",
        email: "novaliches@acediagnosticscorp.com",
        pageurl: "https://www.facebook.com/acediagnosticsnovaliches",
        phone: [
            {name: "Reception", number: "(02) 8123 4567"},
            {name: "Secretary", number: "(02) 8123 4568"},
            {name: "Cashier", number: "(02) 8123 4569"},
            {name: "Inquiry (Smart)", number: "(+63) 919 123 4567"},
            {name: "Inquiry (Globe)", number: "(+63) 917 123 4567"},
        ],
        officeHours: [
            {day: "Monday to Saturday", time: "7:00AM to 4:00PM"},
            {day: "Sunday", time: "Closed"},
        ],
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0609265024123!2d121.03640377463174!3d14.709146574410932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0e133ba2629%3A0x73cab2ed9f0da93a!2sACE%20Diagnostics!5e0!3m2!1sen!2sph!4v1750225480531!5m2!1sen!2sph"
    },
    {
        id: "valenzuela",
        name: "Valenzuela Branch",
        address: "Unit 116-119, Arbortowne Plaza 2, Valenzuela, Metro Manila",
        email: "valenzuela@acediagnosticscorp.com",
        pageurl: "https://www.facebook.com/acediagnosticsvalenzuela",
        phone: [
            {name: "Reception", number: "(02) 8789 0123"},
            {name: "Secretary", number: "(02) 8789 0124"},
            {name: "Cashier", number: "(02) 8789 0125"},
            {name: "Inquiry (Smart)", number: "(+63) 920 789 0123"},
            {name: "Inquiry (Globe)", number: "(+63) 917 789 0123"},
        ],
        officeHours: [
            {day: "Monday to Saturday", time: "7:00AM to 4:00PM"},
            {day: "Sunday", time: "Closed"},
        ],
        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.437321056943!2d120.98056747463136!3d14.687843774935683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b56d6197ecc7%3A0x1cbc500258b13c2c!2sACE%20DIAGNOSTICS!5e0!3m2!1sen!2sph!4v1750225567117!5m2!1sen!2sph"
    }
];

export default function ContactSection({
                                           title = "Contact",
                                           subtitle = "Connect With Us",
                                           description = "Ace Diagnostics is committed to providing accurate, reliable, and timely medical testing services. Our state-of-the-art laboratory and experienced team ensure high-quality diagnostics to support your health and well-being. Partner with us for trusted results and exceptional care.",
                                           findUs = "Find Us",
                                           callUs = "Call Us",
                                           page = "Facebook Page",
                                           mailUs = "Mail Us",
                                           visitUs = "Visit Us",
                                           branches = defaultBranches
                                       }: ContactProps) {
    const [selectedBranch, setSelectedBranch] = useState<string>(branches[0]?.id || "");

    const currentBranch = branches.find(branch => branch.id === selectedBranch) || branches[0];

    if (!currentBranch) {
        return <div>No branches available</div>;
    }

    return (
        <section id="contact" className="container max-w-7xl mx-auto py-12 md:py-24">
            <div className="mb-8">
                <div className="mb-4">
                    <h2 className="text-lg text-primary mb-2 tracking-wider">{title}</h2>
                    <h2 className="text-3xl md:text-4xl font-bold">{subtitle}</h2>
                </div>
                <p className="mb-6 text-muted-foreground lg:w-2/3">{description}</p>

                {/* Branch Filter */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-sm font-medium text-muted-foreground mr-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-1"/>
                        Select Branch:
                    </span>
                    {branches.map((branch) => (
                        <Button
                            key={branch.id}
                            variant={selectedBranch === branch.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedBranch(branch.id)}
                            className={`relative ${selectedBranch === branch.id ? 'text-white' : ''}`}
                        >
                            {branch.name}
                            {selectedBranch === branch.id && (
                                <Badge variant="secondary" className="ml-2 px-1 py-0 text-xs">
                                    Current
                                </Badge>
                            )}
                        </Button>
                    ))}
                </div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="flex flex-col gap-6">
                        {/* Address */}
                        <div>
                            <div className="flex gap-2 mb-2">
                                <Building2 className="w-5 h-5 text-primary"/>
                                <div className="font-bold text-lg">{findUs}</div>
                            </div>
                            <div className="text-muted-foreground pl-7">
                                <p className="font-medium text-foreground mb-1">{currentBranch.name}</p>
                                <p>{currentBranch.address}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Phone Numbers */}
                            <div>
                                {currentBranch.phone.length > 0 && (
                                    <div>
                                        <div className="flex gap-2 mb-3">
                                            <Phone className="w-5 h-5 text-primary"/>
                                            <div className="font-bold text-lg">{callUs}</div>
                                        </div>

                                        <div className="space-y-3 pl-7">
                                            {currentBranch.phone.map((entry, idx) => (
                                                <div key={idx}>
                                                    <Label className="text-sm font-medium text-muted-foreground">
                                                        {entry.name}
                                                    </Label>
                                                    <p className="text-foreground font-medium">
                                                        {entry.number}
                                                    </p>
                                                    {idx !== currentBranch.phone.length - 1 && (
                                                        <Separator className="mt-2"/>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Email and Office Hours */}
                            <div className="space-y-6">
                                {/* Email */}
                                <div>
                                    <div className="flex gap-2 mb-2">
                                        <Mail className="w-5 h-5 text-primary"/>
                                        <div className="font-bold text-lg">{mailUs}</div>
                                    </div>
                                    <div className="text-foreground font-medium pl-7">
                                        {currentBranch.email}
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div>
                                    {currentBranch.officeHours.length > 0 && (
                                        <div>
                                            <div className="flex gap-2 mb-2">
                                                <Clock className="w-5 h-5 text-primary"/>
                                                <div className="font-bold text-lg">{visitUs}</div>
                                            </div>
                                            <div className="space-y-1 pl-7">
                                                {currentBranch.officeHours.map((entry, idx) => (
                                                    <p key={idx} className="text-muted-foreground">
                                                        <span className="font-medium text-foreground">
                                                            {entry.day}:
                                                        </span>{" "}
                                                        {entry.time}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Facebook Page */}
                                <div>
                                    <div className="flex gap-2 mb-2">
                                        <Facebook className="w-5 h-5 text-primary"/>
                                        <div className="font-bold text-lg">{page}</div>
                                    </div>
                                    <div className="text-foreground font-medium pl-7">
                                        <Button asChild variant="default">
                                            <Link href={currentBranch.pageurl || '#'}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-md">Check it now.</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <iframe
                            src={currentBranch.iframe}
                            width="100%"
                            height="550"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border-0"
                            title={`${currentBranch.name} Location`}
                        />
                    </CardContent>
                </Card>
            </section>
        </section>
    );
}