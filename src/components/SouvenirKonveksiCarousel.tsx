import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function SouvenirKonveksiCarousel() {
  return (
    <>
      <div>
        <div className="text-center my-[40px]">
          <h4 className="text-[#ED3237] text-[20px] font-semibold">
            Percetakan
          </h4>
          <h2 className="text-[#3E4095] text-[28px] font-bold">
            Souvenir & Konveksi
          </h2>
        </div>
        <Carousel className="w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] mx-auto ">
          <CarouselContent>
            <CarouselItem>
              <Card className="w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] border-none">
                <CardContent>
                  <img
                    src="./SouvenirKonveksi1.png"
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
                    src="./SouvenirKonveksi2.png"
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
                    src="./SouvenirKonveksi3.png"
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
                    src="./SouvenirKonveksi4.png"
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
                    src="./SouvenirKonveksi5.png"
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
                    src="./SouvenirKonveksi6.png"
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
                    src="./SouvenirKonveksi7.png"
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
                    src="./SouvenirKonveksi8.png"
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
                    src="./SouvenirKonveksi9.png"
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
                    src="./SouvenirKonveksi10.png"
                    alt=""
                    className="object-cover  w-[324px] h-[252px] sm:w-[660px] sm:h-[345px] rounded-2xl border-none"
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
