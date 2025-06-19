import {Label} from "@/components/ui/label";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {HandshakeIcon, HeartHandshake} from "lucide-react";

export const MissionVisionSection = () => {
    return (
        <section className="container w-full py-12 md:py-24">
            <div className="max-w-7xl mx-auto space-y-4">
                <Label className="text-xl text-gray-400 ">Our Values</Label>
                <Label className="text-2xl font-bold">Mission and Vision</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75">
                        <CardHeader>
                            <HeartHandshake className="my-2"/>
                            <CardTitle>Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            To be the center of choice for individuals and professionals in meeting their healthcare
                            needs through exceptional patient care and wellness program.
                        </CardContent>
                    </Card>
                    <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75">
                        <CardHeader>
                            <HandshakeIcon className="my-2"/>
                            <CardTitle>Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            To provide state-of-the-art diagnosis and evaluation of the healthcare needs of patients at
                            affordable rates coupled with efficient and gracious service.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}