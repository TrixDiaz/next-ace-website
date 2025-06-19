import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';

export const FeaturedCarousel = () => {
    return <>
        <div className="relative group mt-8 mx-auto container w-full py-12">
            <div className="grid place-items-center place-content-center gap-4 lg:max-w-7xl mx-auto">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <Image
                                src="/aceval-schedule.jpg"
                                alt="Ace Val"
                                height={500}
                                width={500}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/aceval-schedule.jpg"
                                alt="Ace Val"
                                height={500}
                                width={500}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/aceval-schedule.jpg"
                                alt="Ace Val"
                                height={500}
                                width={500}
                            />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    </>
}