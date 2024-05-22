import React from "react";
import { Banner } from "@/components/Banner";

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
          <Banner
            className="w-[856px] h-[481px] object-cover mx-auto rounded-lg overflow-hidden"
            images={images}
            duration={5000}
            children={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
