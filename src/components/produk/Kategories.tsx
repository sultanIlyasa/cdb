import { Kategori, subKategori } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Kategories = (kategories: Kategori) => {
  return (
    <div
      className={`mx-auto min-h-screen flex flex-col justify-center items-center gap-10 h-full w-[80%] py-20`}
    >
      <div className="text-center  flex flex-col gap-4">
        <h4 className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl  font-semibold">
          JASA YANG KAMI TAWARKAN
        </h4>
        <h2 className="text-[#3E4095] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          {kategories.nama ?? "Produk Kami"}
        </h2>
      </div>
      {kategories.subKategori && (
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto place-items-center gap-10 ">
          {kategories.subKategori.map((subkategori, index) => {
            return (
              <Link
                href={`/produk/${subkategori.slug}`}
                className="relative w-full mx-auto h-56 hover:scale-90 shadow rounded-xl hover:delay-150 transition"
                key={index}
              >
                {subkategori.cover && (
                  <Image
                    src={subkategori.cover}
                    alt=""
                    width={500}
                    height={400}
                    className="object-cover w-full h-full rounded-xl"
                  />
                )}
                <div className="absolute inset-0 bg-[#3E4095]/40 rounded-xl"></div>
                <span className="absolute bottom-5 left-5 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white">
                  {subkategori.nama}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Kategories;
