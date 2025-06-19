"use client"
import {useState} from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import Image from "next/image";

interface ScheduleProps {
    name: string;
    time: string;
}

interface TeamProps {
    imageUrl: string;
    firstName: string;
    lastName: string;
    specialization: string[];
    schedules: ScheduleProps[];
    branch: string; // New field for branch
}

export const DoctorSection = () => {
    const teamList: TeamProps[] = [
        {
            imageUrl: "/no-profile-picture.jpg",
            firstName: "MA. Lourdes ",
            lastName: "Bunyi",
            specialization: ["Internal Medicine Cardiologist"],
            branch: "Fairview",
            schedules: [
                {
                    name: "Monday",
                    time: "1:00 PM to 4:00PM",
                },
                {
                    name: "Friday",
                    time: "10:00am - 12:00nn",
                },
            ],
        },
        {
            imageUrl: "/no-profile-picture.jpg",
            firstName: "Freman",
            lastName: "Cerezo",
            specialization: ["Internal Medicine Cardiologist"],
            branch: "Novaliches",
            schedules: [
                {
                    name: "Monday",
                    time: "10:00am - 12:00nn",
                },
                {
                    name: "Wednesday",
                    time: "10:00am - 12:00nn",
                },
                {
                    name: "Saturday",
                    time: "10:00am - 12:00nn",
                },
            ],
        },
        {
            imageUrl: "/no-profile-picture.jpg",
            firstName: "MA. Luisa",
            lastName: "Afable",
            specialization: ["Internal Medicine Cardiologist"],
            branch: "Valenzuela",
            schedules: [
                {
                    name: "Wednesday",
                    time: "2:00am - 4:00am",
                },
            ],
        },
        {
            imageUrl: "/no-profile-picture.jpg",
            firstName: "Ellen",
            lastName: "Aranas",
            specialization: ["Internal Medicine Cardiologist"],
            branch: "Fairview",
            schedules: [
                {
                    name: "Tuesday",
                    time: "1:00pm - 4:00pm",
                },
                {
                    name: "Thursday",
                    time: "1:00am - 4:00pm",
                },
            ],
        },
        {
            imageUrl: "/no-profile-picture.jpg",
            firstName: "Rene",
            lastName: "Reyes",
            specialization: ["Internal Medicine Cardiologist"],
            branch: "Valenzuela",
            schedules: [
                {
                    name: "Tuesday",
                    time: "10:00am - 12:00pm",
                },
                {
                    name: "Thursday",
                    time: "10:00pm - 12:00pm",
                },
                {
                    name: "Saturday",
                    time: "2:00am - 4:00am",
                },
            ],
        },
        {
            imageUrl: "/no-profile-picture.jpg",
            firstName: "Marjorie",
            lastName: "Cerezo",
            specialization: ["Pediatrician"],
            branch: "Fairview",
            schedules: [
                {
                    name: "Monday",
                    time: "10:00am - 12:00nn",
                },
                {
                    name: "Wednesday",
                    time: "10:00pm - 12:00nn",
                },
                {
                    name: "Saturday",
                    time: "10:00am - 12:00nn",
                },
            ],
        },
        {
            imageUrl: "/no-profile-picture.jpg",
            firstName: "Christine",
            lastName: "Flores",
            specialization: ["Internal Medicine"],
            branch: "Novaliches",
            schedules: [
                {
                    name: "Monday",
                    time: "9:00pm - 11:00pm",
                },
            ],
        },
        {
            imageUrl: "/no-profile-picture.jpg",
            firstName: "Paul",
            lastName: "Espina",
            specialization: ["Urologist"],
            branch: "Valenzuela",
            schedules: [
                {
                    name: "Tuesday",
                    time: "1:00pm - 3:00pm",
                },
                {
                    name: "Friday",
                    time: "9:00am - 11:00am",
                },
            ],
        },
        {
            imageUrl: "/no-profile-picture.jpg",
            firstName: "Edison",
            lastName: "So",
            specialization: ["Endocrinologist"],
            branch: "Fairview",
            schedules: [
                {
                    name: "By Appointment",
                    time: "On Call",
                },
            ],
        },
        {
            imageUrl: "/no-profile-picture.jpg",
            firstName: "Maria Angela",
            lastName: "Sarmiento",
            specialization: ["OB-Gyne"],
            branch: "Valenzuela",
            schedules: [
                {
                    name: "By Appoinment",
                    time: "",
                },
                {
                    name: "Tuesday",
                    time: "1:00pm - 4:00pm",
                },
                {
                    name: "Thursday",
                    time: "10:00am - 12:00nn",
                },
            ],
        },
        {
            imageUrl: "/doctors/miguelcarlomendoza.png",
            firstName: "Miguel Carlo",
            lastName: "Mendoza",
            specialization: ["ENT"],
            branch: "Novaliches",
            schedules: [
                {
                    name: "Saturday",
                    time: "2:00pm - 4:00pm",
                },
            ],
        },
        {
            imageUrl: "/no-profile-picture.jpg",
            firstName: "Kristel",
            lastName: "Tanhui-Manzana",
            specialization: ["Nephrologist"],
            branch: "Fairview",
            schedules: [
                {
                    name: "Tuesday",
                    time: "1:00pm - 3:00pm",
                },
            ],
        },
    ];

    // Filter states
    const allSpecialization = "All Specializations";
    const allBranches = "All Branches";
    const [selectedSpecialization, setSelectedSpecialization] = useState<string>(allSpecialization);
    const [selectedBranch, setSelectedBranch] = useState<string>(allBranches);

    // Get unique values
    const uniqueSpecializations = [allSpecialization, ...Array.from(new Set(teamList.flatMap(member => member.specialization)))];
    const uniqueBranches = [allBranches, ...Array.from(new Set(teamList.map(member => member.branch)))];

    // Apply filters
    const filteredTeamList = teamList.filter(member => {
        const matchesSpecialization = selectedSpecialization === allSpecialization ||
            member.specialization.includes(selectedSpecialization);
        const matchesBranch = selectedBranch === allBranches ||
            member.branch === selectedBranch;
        return matchesSpecialization && matchesBranch;
    });

    const handleSpecializationClick = (spec: string) => {
        setSelectedSpecialization(spec);
    };

    const handleBranchChange = (branch: string) => {
        setSelectedBranch(branch);
    };

    const clearFilters = () => {
        setSelectedSpecialization(allSpecialization);
        setSelectedBranch(allBranches);
    };

    return (
        <section id="doctors" className="container max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">
                    Our Team
                </h2>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    Meet Our Doctors
                </h1>

                {/* Filter Controls */}
                <div className="mt-8 space-y-6">
                    {/* Filters Row */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        {/* Branch Filter */}
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Branch:
                            </span>
                            <Select value={selectedBranch} onValueChange={handleBranchChange}>
                                <SelectTrigger className="w-[200px]">
                                    <SelectValue placeholder="Select branch" />
                                </SelectTrigger>
                                <SelectContent>
                                    {uniqueBranches.map((branch, index) => (
                                        <SelectItem key={index} value={branch}>
                                            {branch}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Specialization Filter */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Specialization:
                            </span>
                            <Select value={selectedSpecialization} onValueChange={handleSpecializationClick}>
                                <SelectTrigger className="w-[250px]">
                                    <SelectValue placeholder="Select specialization" />
                                </SelectTrigger>
                                <SelectContent>
                                    {uniqueSpecializations.map((spec, index) => (
                                        <SelectItem key={index} value={spec}>
                                            {spec}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Clear Filters & Results Count */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        {(selectedSpecialization !== allSpecialization || selectedBranch !== allBranches) && (
                            <button
                                onClick={clearFilters}
                                className="text-sm text-primary hover:text-primary/80 underline transition-colors"
                            >
                                Clear all filters
                            </button>
                        )}
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Showing {filteredTeamList.length} of {teamList.length} doctors
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {filteredTeamList.map((member, index) => (
                    <Card
                        key={index}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden group"
                    >
                        <CardHeader className="p-0">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={member.imageUrl}
                                    alt={`Dr. ${member.firstName} ${member.lastName}`}
                                    width={400}
                                    height={400}
                                    className="w-full h-48 sm:h-56 object-cover saturate-0 transition-all duration-300 group-hover:saturate-100 group-hover:scale-105"
                                />
                                {/* Branch Badge */}
                                <div className="absolute top-3 right-3">
                                    <Badge variant="secondary" className="bg-white/90 text-gray-800 border-0">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        {member.branch}
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>

                        <div className="flex-1 flex flex-col p-6">
                            <CardTitle className="text-xl font-bold mb-3">
                                Dr. {member.firstName}{" "}
                                <span className="text-primary">{member.lastName}</span>
                            </CardTitle>

                            <div className="mb-4 flex-1">
                                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                    Specialization
                                </h4>
                                <div className="space-y-1">
                                    {member.specialization.map((position, idx) => (
                                        <p key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                                            {position}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <CardFooter className="p-0 mt-auto">
                                <div className="w-full">
                                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                        Available Hours
                                    </h4>
                                    <div className="space-y-1">
                                        {member.schedules.map((schedule, idx) => (
                                            <div key={idx} className="flex justify-between items-center text-sm">
                                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                                    {schedule.name}
                                                </span>
                                                <span className="text-gray-600 dark:text-gray-400">
                                                    {schedule.time}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>

            {/* No Results Message */}
            {filteredTeamList.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                        No doctors found matching your filters.
                    </p>
                    <button
                        onClick={clearFilters}
                        className="text-primary hover:text-primary/80 underline transition-colors"
                    >
                        Clear filters to see all doctors
                    </button>
                </div>
            )}
        </section>
    );
};