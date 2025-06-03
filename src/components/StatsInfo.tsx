import { HomeIcon, CalendarRange, CalendarDays, User } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CardsInfo } from "./CardsInfo";

export function DashboardStats() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        <CarouselItem className="basis-full sm:basis-1/3 xl:basis-1/4 cursor-grab">
          <CardsInfo
            title="Agendamentos feitos no mês"
            value="3,462"
            icon={CalendarRange}
          />
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/3 xl:basis-1/4 cursor-grab">
          <CardsInfo
            title="Agendamentos feitos no ano"
            value="3,462"
            icon={CalendarDays}
          />
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/3 xl:basis-1/4 cursor-grab">
          <CardsInfo
            title="Agendamentos totais"
            value="3,462"
            icon={HomeIcon}
          />
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/3 xl:basis-1/4 cursor-grab">
          <CardsInfo
            title="Agendamentos feitos por mim"
            value="3,462"
            icon={User}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
