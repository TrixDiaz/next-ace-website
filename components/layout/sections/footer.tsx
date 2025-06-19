import Link from "next/link";
import Logo from "@/components/layout/logo";
import {Separator} from "@/components/ui/separator";
import {Label} from "@/components/ui/label";

export const FooterSection = () => {
    return (
        <footer id="footer" className="container max-w-7xl mx-auto py-12">
            <div
                className="shadow-md p-6 bg-card border border-secondary rounded-2xl">
                <div className="flex flex-row justify-between items-center gap-4">
                    <section className="col-span-full xl:col-span-2">
                        <Link href="#" className="flex font-bold items-center">
                            <h3 className="text-2xl"><Logo/></h3>
                        </Link>
                    </section>
                    <section>
                        <h3>

                            <Link
                                target="_blank"
                                href="https://github.com/TrixDiaz"
                                className="transition-all border-primary hover:border-b-2 ml-1"
                            >
                                Terms and Conditions
                            </Link>
                            <Link
                                target="_blank"
                                href="https://github.com/TrixDiaz"
                                className="text-primary transition-all border-primary hover:border-b-2 ml-1"
                            >
                                Private Policy
                            </Link>
                        </h3>
                    </section>
                </div>
                <section className="text-center">
                    <Separator className="my-4"/>
                    &copy; {new Date().getFullYear()}
                    <Link
                        href="https://www.acediagnosticsandclinics.com/"
                        className="text-primary hover:underline">
                        &nbsp;acediagnosticsclinis.com&nbsp;
                    </Link>
                    <span>All rights reserved.</span>
                </section>
            </div>

        </footer>
    );
};