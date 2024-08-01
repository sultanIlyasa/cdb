import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import React from "react";

const Stats = () => {
  return (
    <div className="bg-[#FAF7F7] py-20 ">
      <div className="flex flex-col w-[80%] min-h-screen mx-auto justify-center items-center gap-4">
        <div className="w-full block text-start">
          <h4 className="text-[#ED3237] text-start text-sm sm:text-base md:text-lg lg:text-xl  font-semibold">
            KEAHLIAN KAMI
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-10 text-left">
            Setiap proyek memenuhi
            <span className="text-[#7374C5]"> Standar kualitas</span> dan
            <span className="text-[#7374C5]"> keahlian tinggi.</span>
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-2xl text-justify text-[#666666]">
            Kami memprioritaskan ketepatan, efisiensi, dan keandalan. Dengan
            teknologi terdepan dan tenaga profesional berpengalaman, kami
            merealisasikan impian Anda dengan kualitas dan kerajinan yang luar
            biasa. Mulai dari materi pemasaran yang menarik perhatian hingga
            solusi pembangunan yang berkelanjutan, kami mengerjakannya dengan
            tepat waktu dan sesuai anggaran.
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full py-20">
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#7374C5]">
              15+
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
              Tahun Berpengalaman
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#7374C5]">
              442+
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
              Project Selesai
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#7374C5]">
              50+
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">Produk</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#7374C5]">
              94%
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
              Tingkat Kepastian
            </p>
          </div>
        </div>
      </div>
      {/* <div className=" grid justify-center  md:grid-cols-2 lg:grid-cols-2 gap-4">
        <Card className="border-none bg-[#FAF7F7] mx-auto">
          <CardHeader className="flex flex-row items-center">
            <CardTitle className="text-sm font-medium font-montserrat leading-6 text-left px-[4px]">
              <div className="text-[#ED3237]">STATISTIK</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-montserrat text-lg md:text-4xl font-bold leading-10 text-left">
              Setiap proyek memenuhi
              <span className="text-[#7374C5]"> Standar kualitas</span> dan
              <span className="text-[#7374C5]"> keahlian tinggi.</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-[#FAF7F7] mx-auto">
          <CardContent className="text-justify">
            <div
              className="font-cabin text-xs md:text-base font-normal leading-[32px] text-justify py-9"
              style={{ color: "#666666" }}
            >
              Kami memprioritaskan ketepatan, efisiensi, dan keandalan. Dengan
              teknologi terdepan dan tenaga profesional berpengalaman, kami
              merealisasikan impian Anda dengan kualitas dan kerajinan yang luar
              biasa. Mulai dari materi pemasaran yang menarik perhatian hingga
              solusi pembangunan yang berkelanjutan, kami mengerjakannya dengan
              tepat waktu dan sesuai anggaran.
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 grid-cols-4">
        <Card className="border-none shadow-none bg-[#FAF7F7]">
          <CardContent className="flex flex-col items-center">
            <h1 className="font-semibold md:text-4xl text-[#7374C5]">15+</h1>
            <p className="text-xs md:text-xl font-bold text-center">
              Tahun Berpengalaman
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-none bg-[#FAF7F7]">
          <CardContent className="flex flex-col items-center">
            <h1 className="font-semibold md:text-4xl text-[#7374C5]">442+</h1>
            <p className="text-xs md:text-xl font-bold text-center">
              Proyek Selesai
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-none bg-[#FAF7F7]">
          <CardContent className="flex flex-col items-center">
            <h1 className="font-semibold md:text-4xl text-[#7374C5]">50+</h1>
            <p className="text-xs md:text-xl font-bold text-center">
              Produk Kami
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-none bg-[#FAF7F7]">
          <CardContent className="flex flex-col items-center">
            <h1 className="font-semibold md:text-4xl text-[#7374C5]">98%</h1>
            <p className="text-xs md:text-xl font-bold text-center">
              Tingkat Kepuasan
            </p>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
};

export default Stats;
