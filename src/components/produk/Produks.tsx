import { subKategori } from "@/types";
import React from "react";

interface ProduksProps {
  subKategori: subKategori;
}

export const Produks = (subKategori: ProduksProps) => {
  const subKategoriData = subKategori.subKategori;
  return (
    <div className="">
      <h4 className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl  font-semibold">
        JASA YANG KAMI TAWARKAN
      </h4>
      <h2 className="text-[#3E4095] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
        {subKategoriData.nama ?? "Produk Kami"}
      </h2>
    </div>
  );
};

export default Produks;
