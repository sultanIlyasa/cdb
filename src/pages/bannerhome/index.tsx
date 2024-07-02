import React from "react";
import { Banner } from "@/components/Banner";

const bannerHome = () => {
  const images = ["/banner1.png", "/banner2.png", "/banner3.jpg", "/banner4.jpg"];
  return (
    <Banner className="h-[40rem]" images={images} duration={5000}>
      <div className="z-50 flex flex-col justify-center md:flex">
        <h1 className="font-bold  md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          WE SERVE BETTER AND FASTER!
        </h1>
        <p className="text-[#F5F5F5] w-[1070px] h-[122px] text-center text-[15px] px-[100px]">
          Dari membangun pondasi yang kokoh hingga menciptakan cetakan
          berkualitas tinggi, kami adalah{" "}
          <span style={{color:"#FFDE6E"}}>solusi terbaik</span> untuk semua
          kebutuhan
          <span style={{color:"#FFDE6E"}}> konstruksi</span> dan <span style={{color:"#FFDE6E"}}>percetakan.</span> Percayakan kepada
          kami untuk mewujudkan impian Anda, setiap langkah dalam prosesnya.
        </p>

        <div className="flex flex-row justify-center gap-5">
          <button
            className="w-[258px] 
            h-[66px] px-4 py-2 backdrop-blur-sm bg-[#3B71CA]  text-white text-center rounded-[20px] relative mt-4 hover:bg-[#F3F8FF] hover:text-[#0F6FFF]"
          >
            <span>Lihat Produk Kami</span>
          </button>
          <button
            className="w-[258px] 
            h-[66px] px-4 py-2 backdrop-blur-sm bg-white text-[#3B71CA] text-center rounded-[20px] relative mt-4 hover:bg-[#3B71CA] hover:text-[#F3F8FF]"
          >
            <span>Hubungi Kami</span>
          </button>
        </div>
      </div>
    </Banner>
  );
};

export default bannerHome;
