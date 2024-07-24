"use client";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Link from "next/link";

export function Banner() {
  const images = ["/banner1.png", "/banner2.png", "/banner3.png"];

  return (
    <ImagesSlider className="min-h-screen" images={images} duration={5000}>
      <div className="z-50 flex flex-col justify-center items-center mx-auto w-[80%] gap-4">
        <h1 className="font-extrabold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          WE SERVE BETTER AND FASTER!
        </h1>
        <p className="text-[#F5F5F5] text-center  text-sm sm:text-base md:text-lg lg:text-xl font-medium">
          Dari membangun pondasi yang kokoh hingga menciptakan cetakan
          berkualitas tinggi, kami adalah <br />
          <span className="text-yellow-500">solusi terbaik</span> untuk semua
          kebutuhan
          <span className="text-yellow-500"> konstruksi</span> dan
          <span className="text-yellow-500"> percetakan</span>. Percayakan
          kepada kami untuk <br />
          mewujudkan impian Anda, setiap langkah dalam prosesnya.
        </p>
        <div className="flex flex-row justify-center gap-5 ">
          <Link href="/product">
            <button className="w-fit px-4 py-2 md:px-8 md:py-4 backdrop-blur-sm bg-[#3B71CA]  text-white text-center text-sm sm:text-base md:text-lg lg:text-xl rounded-lg relative mt-4 hover:bg-[#F3F8FF] hover:text-[#0F6FFF]">
              <span>Lihat Produk Kami</span>
            </button>
          </Link>
          <Link href="/contact">
            <button className="w-fit px-4 py-2 md:px-8 md:py-4 backdrop-blur-sm bg-[#3B71CA]  text-white text-center text-sm sm:text-base md:text-lg lg:text-xl rounded-lg relative mt-4 hover:bg-[#F3F8FF] hover:text-[#0F6FFF]">
              <span>Hubungi Kami</span>
            </button>
          </Link>
        </div>
      </div>
    </ImagesSlider>
  );
}