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
    <div className="flex justify-center items-center min-h-screen ">
      <div className="container mx-[190px] py-[50px]  bg-gradient-to-br from-[#D1D1FA] via-[#7374C5] to-[#F7A1A4] rounded-lg">
        <div>
          <h2 className="text-white font-bold text-4xl mb-[1px] ">
            Company Profile
          </h2>
        </div>
        <div>
          <Carousel className="w-[660px] h-[345px] mx-auto ">
            <CarouselContent>
              <CarouselItem>
                <Card className="w-[660px] h-[345px] border-none">
                  <CardContent>
                    <img
                      src="./images/comprof1.jpg"
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
                      src="/images/comprof2.jpg"
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
                      src="/images/comprof3.jpg"
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
                      src="/images/comprof4.jpg"
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
                      src="/images/comprof5.jpg"
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
                      src="/images/comprof5.jpg"
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
                      src="/images/comprof6.jpg"
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
                      src="/images/comprof7.jpg"
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
                      src="/images/comprof8.jpg"
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
                      src="/images/comprof9.jpg"
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
                      src="/images/comprof10.jpg"
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
      </div>
    </div>
  );
};

export default Slideshow;
