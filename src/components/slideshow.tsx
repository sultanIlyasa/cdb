import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
    <div className="overflow-hidden flex justify-center items-center min-h-screen overflow-hidden ">
      <div className="w-[360px] h-[290px] md:w-[1042px] md:h-[614px] md:px-20  mx-auto bg-gradient-to-br from-[#D1D1FA] via-[#7374C5] to-[#F7A1A4] rounded-lg">
        <div>
          <h2 className="text-white font-bold text-xl mb-4 mt-4">
            Company Profile
          </h2>
        </div>
        <div>
          <Carousel className="md:w-[856px] md:h-[481px] mx-auto ">
            <CarouselContent>
              <CarouselItem>
                <Card className="border-none md:w-[856px] md:h-[481px]">
                  <CardContent>
                    <img
                      src="./images/comprof1.jpg"
                      alt=""
                      className="md:mx-6 object-cover md:w-[856px] md:h-[481px] rounded-lg border-none"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className=" md:w-[856px] md:h-[481px] border-none">
                  <CardContent>
                    <img
                      src="/images/comprof2.jpg"
                      alt=""
                      className="-mx-6 object-cover md:w-[856px] md:h-[481px] rounded-lg border-none"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:w-[856px] md:h-[481px] border-none">
                  <CardContent>
                    <img
                      src="/images/comprof3.jpg"
                      alt=""
                      className="-mx-6 object-cover md:w-[856px] md:h-[481px] rounded-lg border-none"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:w-[856px] md:h-[481px] border-none">
                  <CardContent>
                    <img
                      src="/images/comprof4.jpg"
                      alt=""
                      className="mx-6 object-cover md:w-[856px] md:h-[481px] rounded-lg border-none"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:w-[856px] md:h-[481px] border-none">
                  <CardContent>
                    <img
                      src="/images/comprof5.jpg"
                      alt=""
                      className="-mx-6 object-cover md:w-[856px] md:h-[481px] rounded-lg border-none"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:w-[856px] md:h-[481px] object-cover  border-none">
                  <CardContent>
                    <img
                      src="/images/comprof5.jpg"
                      alt=""
                      className="-mx-6 object-cover md:w-[856px] md:h-[481px] rounded-lg border-none"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:w-[856px] md:h-[481px] border-none">
                  <CardContent>
                    <img
                      src="/images/comprof6.jpg"
                      alt=""
                      className="-mx-6 object-cover md:w-[856px] md:h-[481px] rounded-lg border-none"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:w-[856px] md:h-[481px] border-none">
                  <CardContent>
                    <img
                      src="/images/comprof7.jpg"
                      alt=""
                      className="-mx-6 object-cover md:w-[856px] md:h-[481px] rounded-lg border-none"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:w-[856px] md:h-[481px] border-none">
                  <CardContent>
                    <img
                      src="/images/comprof8.jpg"
                      alt=""
                      className="-mx-6 object-cover md:w-[856px] md:h-[481px] rounded-lg border-none"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:w-[856px] md:h-[481px] border-none">
                  <CardContent>
                    <img
                      src="/images/comprof9.jpg"
                      alt=""
                      className="-mx-4 object-cover md:w-[856px] md:h-[481px] rounded-lg border-none"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="md:w-[856px] md:h-[481px] border-none">
                  <CardContent>
                    <img
                      src="/images/comprof10.jpg"
                      alt=""
                      className="mx-6 object-cover md:w-[856px] md:h-[481px] rounded-lg border-none"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
