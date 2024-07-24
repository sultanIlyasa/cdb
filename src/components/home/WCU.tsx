import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "react-icons-kit";
import { ic_thumb_up_outline } from "react-icons-kit/md/ic_thumb_up_outline";
const WCU = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[80%] mx-auto min-h-screen gap-10">
      <div className=" flex flex-col justify-center items-center w-full text-center gap-4">
        <h4 className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl  font-semibold">
          BERKOLABORASI DENGAN YANG TERBAIK
        </h4>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          Mengapa Memilih Kami?
          <br />
          <span className="text-[#7374C5] ">
            Karena Kualitas Menjadi Prioritas
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
        <div className="flex justify-evenly gap-4 items-center shadow-md p-8 rounded-xl">
          <Icon
            icon={ic_thumb_up_outline}
            style={{ color: "#7374C5" }}
            size={30}
          />
          <div className="flex w-full flex-col gap-1">
            <h4 className="text-xs sm:text-sm md:text-base lg:text-lg text-[#7374C5]">
              Keahlian
            </h4>
            <p className="font-semibold md:text-base text-xs">
              Berbagai pengalaman dalam pencetakan dan konstruksi membekali kami
              untuk menangani proyek-proyek kompleks.
            </p>
          </div>
        </div>
        <div className="flex justify-evenly gap-4 items-center shadow-md p-8 rounded-xl">
          <Icon
            icon={ic_thumb_up_outline}
            style={{ color: "#7374C5" }}
            size={30}
          />
          <div className="flex w-full flex-col gap-1">
            <h4 className="text-xs sm:text-sm md:text-base lg:text-lg text-[#7374C5]">
              Penjaminan Mutu
            </h4>
            <p className="font-semibold md:text-base text-xs">
              Memegang teguh standar kualitas yang tinggi, menjamin keunggulan
              dalam setiap proyek.
            </p>
          </div>
        </div>
        <div className="flex justify-evenly gap-4 items-center shadow-md p-8 rounded-xl">
          <Icon
            icon={ic_thumb_up_outline}
            style={{ color: "#7374C5" }}
            size={30}
          />
          <div className="flex w-full flex-col gap-1">
            <h4 className="text-xs sm:text-sm md:text-base lg:text-lg text-[#7374C5]">
              Fokus Terhadap Pelanggan
            </h4>
            <p className="font-semibold md:text-base text-xs">
              Memegang teguh standar kualitas yang tinggi, menjamin keunggulan
              dalam setiap proyek.
            </p>
          </div>
        </div>
        <div className="flex justify-evenly gap-4 items-center shadow-md p-8 rounded-xl">
          <Icon
            icon={ic_thumb_up_outline}
            style={{ color: "#7374C5" }}
            size={30}
          />
          <div className="flex w-full flex-col gap-1">
            <h4 className="text-xs sm:text-sm md:text-base lg:text-lg text-[#7374C5]">
              Keberhasilan yang Teruji
            </h4>
            <p className="font-semibold md:text-base text-xs">
              Tingkat keberhasilan kami tercermin dalam riwayat proyek yang
              sukses dan kepuasan klien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCU;
