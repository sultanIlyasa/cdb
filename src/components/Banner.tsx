"use client";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export function Banner() {
  const images = ["/banner1.png", "/banner2.png", "/banner3.png"];

  return (
    <ImagesSlider className="h-[40rem]" images={images} duration={5000}>
      <div className="z-50 flex flex-col justify-center md:flex">
        <h1 className="font-bold  md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          WE SERVE BETTER AND FASTER!
        </h1>
        <p className="text-[#F5F5F5] text-center text-[24px]">
          Dari membangun pondasi yang kokoh hingga menciptakan cetakan
          berkualitas tinggi, kami adalah <br />
          <span className="text-yellow-500">solusi terbaik</span> untuk semua kebutuhan
          <span className="text-yellow-500"> konstruksi</span> dan
          <span className="text-yellow-500"> percetakan</span>. Percayakan
          kepada kami untuk <br />
          mewujudkan impian Anda, setiap langkah dalam prosesnya.
        </p>

        <div className="flex flex-row justify-center gap-5">
          <button className="w-[258px] h-[66px] px-4 py-2 backdrop-blur-sm bg-[#3B71CA]  text-white text-center rounded-[20px] relative mt-4 hover:bg-[#F3F8FF] hover:text-[#0F6FFF]">
            <span>Lihat Produk Kami</span>
          </button>
          <button className="w-[258px] h-[66px] px-4 py-2 backdrop-blur-sm bg-[#3B71CA]  text-white text-center rounded-[20px] relative mt-4 hover:bg-[#F3F8FF] hover:text-[#0F6FFF]">
            <span>Hubungi Kami</span>
          </button>
        </div>
      </div>
    </ImagesSlider>
  );
}
