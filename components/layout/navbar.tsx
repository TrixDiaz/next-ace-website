"use client";
import {Menu, X} from "lucide-react";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import {Separator} from "../ui/separator";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";
import {Button} from "../ui/button";
import Link from "next/link";
import {ToggleTheme} from "./toggle-theme";
import Logo from "@/components/layout/logo";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#home",
        label: "Home",
    },
    {
        href: "#aboutus",
        label: "About Us",
    },
    {
        href: "#doctors",
        label: "Schedules",
    },
    {
        href: "#contact",
        label: "Contact",
    },
    {
        href: "#faq",
        label: "FAQ",
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    // Add scroll effect to navbar
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
                shadow-inner bg-opacity-15 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] lg:max-w-screen-xl 
                top-3 sm:top-5 mx-auto sticky border border-secondary z-40 rounded-2xl bg-card
                transition-all duration-300 ease-out
                ${isScrolled ? 'shadow-2xl drop-shadow-2xl backdrop-blur-md bg-opacity-90' : 'shadow-lg'}
                animate-in slide-in-from-top-4 fade-in duration-2000
            `}
        >
            <div className="flex items-center justify-between p-2 sm:p-3">
                {/* Logo Section */}
                <div className="flex items-center min-w-0 flex-shrink-0">
                    <Link
                        href="#home"
                        className="font-bold text-lg flex items-center"
                    >
                        <Logo />
                    </Link>
                </div>

                {/* Desktop Navigation - Hidden on mobile */}
                <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem className="flex flex-row gap-4">
                                {routeList.map(({href, label}, index) => (
                                    <NavigationMenuLink key={href} asChild>
                                        <Link
                                            href={href}
                                            className={`
                                                text-base px-2 animate-in fade-in slide-in-from-top-2
                                            `}
                                            style={{
                                                animationDelay: `${(index + 1) * 100}ms`,
                                                animationFillMode: 'both'
                                            }}
                                        >
                                            <span>{label}</span>
                                        </Link>
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Section - Theme Toggle and Mobile Menu */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Desktop Theme Toggle and Button */}
                    <div className="hidden lg:flex items-center gap-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    className="font-bold rounded-full text-white"
                                >
                                    Online Result
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-white">Coming Soon!</p>
                            </TooltipContent>
                        </Tooltip>
                        <div>
                            <ToggleTheme/>
                        </div>
                    </div>

                    {/* Mobile Theme Toggle - Visible on tablet */}
                    <div className="hidden md:block lg:hidden">
                        <div>
                            <ToggleTheme/>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="p-2"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <div className="relative w-5 h-5">
                                        <Menu
                                            className={`h-5 w-5 absolute transition-all duration-300 ${
                                                isOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'
                                            }`}
                                        />
                                        <X
                                            className={`h-5 w-5 absolute transition-all duration-300 ${
                                                isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'
                                            }`}
                                        />
                                    </div>
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className={`
                                    flex flex-col h-full rounded-tl-2xl rounded-bl-2xl bg-card border-secondary 
                                    w-[280px] sm:w-[350px] p-0 transition-all duration-300 ease-out
                                    data-[state=open]:animate-in data-[state=open]:slide-in-from-right-full
                                    data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full
                                `}
                            >
                                <div className="flex-1 overflow-y-auto p-6">
                                    <SheetHeader className="mb-6 text-left">
                                        <SheetTitle className="flex items-center justify-start animate-in fade-in slide-in-from-top-2 duration-500">
                                            <Link
                                                href="/"
                                                className="flex items-center"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <Logo/>
                                            </Link>
                                        </SheetTitle>
                                    </SheetHeader>

                                    <nav className="flex flex-col gap-1">
                                        {/* Main Navigation */}
                                        <div className="flex flex-col gap-1">
                                            {routeList.map(({href, label}, index) => (
                                                <Button
                                                    key={href}
                                                    onClick={() => setIsOpen(false)}
                                                    asChild
                                                    variant="ghost"
                                                    className={`
                                                        justify-start text-base h-12 animate-in fade-in slide-in-from-left-4
                                                    `}
                                                    style={{
                                                        animationDelay: `${(index + 1) * 100}ms`,
                                                        animationFillMode: 'both'
                                                    }}
                                                >
                                                    <Link href={href}>{label}</Link>
                                                </Button>
                                            ))}
                                        </div>
                                    </nav>
                                </div>

                                <div className="flex-shrink-0 p-6 pt-0 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                                    <Separator className="mb-4"/>
                                    <div className="flex items-center justify-between w-full gap-2">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    className="font-bold rounded-full flex-1"
                                                >
                                                    Online Result
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="text-white">Coming Soon!</p>
                                            </TooltipContent>
                                        </Tooltip>
                                        <div>
                                            <ToggleTheme/>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};