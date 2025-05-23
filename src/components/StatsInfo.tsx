import { CheckCircle2, Clock3, MessageSquare, Globe } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';

export function DashboardStats() {
    return (
        <Carousel
            opts={{
                align: 'start',
            }}
        >
            <CarouselContent>
                <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/4 cursor-grab">
                    <Card className='hover:bg-accent h-[150px]'>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-sm font-medium">
                                Tickets Resolved
                            </CardTitle>
                            <CheckCircle2 className="h-4 w- text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,230</div>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/4 cursor-grab">
                    <Card className='hover:bg-accent h-[150px]'>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-sm font-medium">
                                Open Tickets
                            </CardTitle>
                            <Clock3 className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">87</div>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/4 cursor-grab">
                    <Card className='hover:bg-accent h-[150px]'>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-sm font-medium">
                                Total Tickets
                            </CardTitle>
                            <MessageSquare className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">5,432</div>
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2 sm:basis-1/3 xl:basis-1/4 cursor-grab">
                    <Card className='hover:bg-accent h-[150px]'>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-sm font-medium">
                                Portal Tickets
                            </CardTitle>
                            <Globe className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">312</div>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    );
}
