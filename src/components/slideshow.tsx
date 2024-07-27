import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const Slideshow = () => {
  const images = [
    "/images/comprof1.jpg",
    "/images/comprof2.jpg",
    "/images/comprof3.jpg",
    "/images/comprof4.jpg",
    "/images/comprof5.jpg",
    "/images/comprof6.jpg",
    "/images/comprof7.jpg",
    "/images/comprof8.jpg",
    "/images/comprof9.jpg",
    "/images/comprof10.jpg",
  ];

  return (
    <div className="w-full md:w-[80%] mx-auto">
      <div className=" flex flex-col mx-auto w-[80%] justify-center items-center min-h-screen overflow-hidden">
        <div className="relative p-4 md:p-10 md:px-20 flex flex-col gap-4 mx-auto bg-gradient-to-br from-[#D1D1FA] via-[#7374C5] to-[#F7A1A4] rounded-lg">
          <div className="">
            <h2 className="text-white xt-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
              Company Profile
            </h2>
          </div>
          <div className="w-full">
            <Carousel className="w-full basis-0">
              <CarouselContent>
                {images.map((image, i) => {
                  return (
                    <CarouselItem key={i}>
                      <Image
                        src={image}
                        alt=""
                        width={1000}
                        height={700}
                        className=" w-full aspect-video rounded-lg "
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious hidden className="hidden md:flex" />
              <CarouselNext hidden className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
