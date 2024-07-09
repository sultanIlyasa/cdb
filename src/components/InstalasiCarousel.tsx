import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function InstalasiCarousel() {
  return (
    <>
      <div>
        <div className="text-center my-[40px]">
          <h4 className="text-[#ED3237] text-sm lg:text-xl font-semibold">
            Konstruksi
          </h4>
          <h2 className="text-[#3E4095] text-lg lg:text-3xl font-bold">
            Instalasi
          </h2> 
        </div>
        <Carousel className="w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] mx-auto ">
          <CarouselContent>
            <CarouselItem>
              <Card className="w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] border-none">
                <CardContent>
                  <img
                    src="./Instalasi1.png"
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
                    src="./Instalasi2.png"
                    alt=""
                    className="object-cover w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] rounded-2xl border-none"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] border-none">
                <CardContent>
                  <img
                    src="./Instalasi3.png"
                    alt=""
                    className="object-cover object-top  w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] rounded-2xl border-none"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] border-none">
                <CardContent>
                  <img
                    src="./Instalasi4.png"
                    alt=""
                    className="object-cover w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] rounded-2xl border-none"
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
