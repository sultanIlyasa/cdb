"use client";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Link from "next/link";

export function Banner({title, slogan, button1, button2, hrefbutton1, hrefbutton2}) {
  const images = ["/banner1.png", "/banner2.png", "/banner3.png"];

  return (
    <ImagesSlider className="h-[40rem]" images={images} duration={5000}>
      <div className="z-50 flex flex-col justify-center md:flex">
        <h1 className="font-bold  md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {title}
        </h1>
        <p className="text-[#F5F5F5] text-center text-[24px]">
          {slogan}
        </p>

        <div className="flex flex-row justify-center gap-5">
          
          <Link href="/">
            <button className="w-[258px] h-[66px] px-4 py-2 backdrop-blur-sm bg-[#3B71CA]  text-white text-center rounded-[20px] relative mt-4 hover:bg-[#F3F8FF] hover:text-[#0F6FFF]">
              <span>{button1}</span>
            </button>
          </Link>
          <Link href="/">
            <button className="w-[258px] h-[66px] px-4 py-2 backdrop-blur-sm bg-[#3B71CA]  text-white text-center rounded-[20px] relative mt-4 hover:bg-[#F3F8FF] hover:text-[#0F6FFF]">
              <span>{button2}</span>
            </button>
          </Link>
        </div>
      </div>
    </ImagesSlider>
  );
}
