import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PerlengkapanKantorCarousel() {
  return (
    <>
      <div>
        <div className="text-center my-[40px]">
          <h4 className="text-[#ED3237] text-[20px] font-semibold">
            Percetakan
          </h4>
          <h2 className="text-[#3E4095] text-[28px] font-bold">
            Perlengkapan Kantor
          </h2>
        </div>
        <Carousel className="w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] mx-auto ">
          <CarouselContent>
            <CarouselItem>
              <Card className="w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] border-none">
                <CardContent>
                  <img
                    src="./PerlengkapanKantor1.png"
                    alt=""
                    className="object-cover  w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] rounded-2xl border-none"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] border-none">
                <CardContent>
                  <img
                    src="./PerlengkapanKantor2.png"
                    alt=""
                    className="object-cover w-[660px] h-[345px] rounded-[16px] border-none"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
