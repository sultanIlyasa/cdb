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
          <h4 className="text-[#ED3237] text-[20px] font-semibold">
            Konstruksi
          </h4>
          <h2 className="text-[#3E4095] text-[28px] font-bold">
            Instalasi
          </h2>
        </div>
        <Carousel className="w-[660px] h-[345px] mx-auto ">
          <CarouselContent>
            <CarouselItem>
              <Card className="w-[660px] h-[345px] border-none">
                <CardContent>
                  <img
                    src="./Instalasi1.png"
                    alt=""
                    className="object-cover  w-[660px] h-[345px] rounded-[16px] border-none"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-[660px] h-[345px] border-none">
                <CardContent>
                  <img
                    src="./Instalasi2.png"
                    alt=""
                    className="object-cover w-[660px] h-[345px] rounded-[16px] border-none"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-[660px] h-[345px] border-none">
                <CardContent>
                  <img
                    src="./Instalasi3.png"
                    alt=""
                    className="object-cover object-top  w-[660px] h-[345px] rounded-[16px] border-none"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-[660px] h-[345px] border-none">
                <CardContent>
                  <img
                    src="./Instalasi4.png"
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
