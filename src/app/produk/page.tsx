import React from "react";
import { Produks } from "@/lib/data";
import Produk from "@/components/produk/Kategories";
import Kategories from "@/components/produk/Kategories";

const page = () => {
  const produks = Produks;
  return produks.map((produk, index) => {
    return (
      <div className={`${index % 2 === 0 ? "" : "bg-[#FDECED]"}`} key={index}>
        {Kategories(produk)}
      </div>
    );
  });
};

export default page;
