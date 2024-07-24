import { Produks } from "@/lib/data";
import { subKategori } from "@/types";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const page = async ({ params }: { params: { slug: string } }) => {
  const slug = decodeURIComponent(params.slug);
  const filteredCategories = Produks.map((kategories) => {
    const matchingSubCategories = kategories.subKategori.filter(
      (subKategori) => subKategori.slug === slug
    );

    if (matchingSubCategories.length > 0) {
      return {
        ...kategories,
        subKategori: matchingSubCategories,
      };
    }

    return null;
  }).filter((kategories) => kategories !== null);

  if (filteredCategories.length < 1) {
    return notFound();
  }

  const kategori = filteredCategories[0];
  const subKategori = kategori.subKategori[0];

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[80%] mx-auto h-full gap-10 py-20">
        <div className="text-center flex flex-col gap-4">
          <h4 className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl  font-semibold">
            {kategori.nama}
          </h4>
          <h2 className="text-[#3E4095] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            {subKategori.nama}
          </h2>
        </div>
        <div className="w-full md:w-[60%] mx-auto">
          <Carousel className="w-full basis-0 rounded-xl" opts={{ loop: true }}>
            <CarouselContent>
              {subKategori.gambar &&
                subKategori.gambar.map((image, i) => {
                  return (
                    <CarouselItem key={i}>
                      <Image
                        src={image}
                        alt=""
                        width={1000}
                        height={700}
                        className=" w-full aspect-video rounded-xl "
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
      {subKategori.produk.length > 0 && (
        <div className="flex flex-col justify-center items-center w-[80%] mx-auto h-full gap-10 py-20">
          <div className="text-center  flex flex-col gap-4">
            <h2 className="text-[#3E4095] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              Produk Kami
            </h2>
          </div>
          <div
            className={`w-full gap-4 grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}
          >
            {subKategori.produk.map((produk, index) => (
              <div
                className="flex flex-col w-full h-full p-4 border border-1 shadow-lg gap-4 items-center rounded-2xl"
                key={index}
              >
                {produk.cover && (
                  <div className="w-full h-52 ">
                    <Image
                      src={produk.cover}
                      alt=""
                      width={300}
                      height={250}
                      className="w-full h-full object-cover rounded-xl "
                    />
                  </div>
                )}
                <span className="text-xs sm:text-sm md:text-base lg:text-lg  font-semibold">
                  {produk.nama}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
