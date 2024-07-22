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
const wcu = () => {
  return (
    <section>
      <div className="container flex flex-col items-center">
        <header className=" text-center">
          <h1 className="text-[#ED3237] font-semibold mb-5">
            BERKOLABORASI DENGAN YANG TERBAIK
          </h1>
          <p className="mt-1 font-bold text-2xl">Mengapa Memilih Kami?</p>
          <p className="mt-1 font-bold text-2xl text-[#7374C5] ">
            Karena Kualitas Menjadi Prioritas
          </p>
        </header>
        <div className="grid sm:grid-cols-2 grid-cols-1 ">
          <Card className="flex w-[80%] mt-4 mx-auto p-1">
            <CardContent className="mt-10 ">
              <Icon
                icon={ic_thumb_up_outline}
                style={{ color: "#7374C5" }}
                size={30}
              />
            </CardContent>
            <CardContent className="md:mt-3 mt-2 p-1">
              <h4 className="font-semibold text-[16px] text-[#7374C5]">
                Keahlian
              </h4>
              <p className="font-semibold md:text-base text-xs">
                Berbagai pengalaman dalam pencetakan dan konstruksi membekali
                kami untuk menangani proyek-proyek kompleks.
              </p>
            </CardContent>
          </Card>
          <Card className="flex w-[80%] mt-4 mx-auto p-1">
            <CardContent className="mt-10 ">
              <Icon
                icon={ic_thumb_up_outline}
                style={{ color: "#7374C5" }}
                size={30}
              />
            </CardContent>
            <CardContent className="md:mt-3 mt-2 p-1">
              <h4 className="font-semibold text-[16px] text-[#7374C5]">
                Penjaminan Mutu
              </h4>
              <p className="font-semibold md:text-base text-xs">
                Memegang teguh standar kualitas yang tinggi, menjamin keunggulan
                dalam setiap proyek.
              </p>
            </CardContent>
          </Card>

          <Card className="flex w-[80%] mt-4 mx-auto p-1">
            <CardContent className="mt-10 ">
              <Icon
                icon={ic_thumb_up_outline}
                style={{ color: "#7374C5" }}
                size={30}
              />
            </CardContent>

            <CardContent className="md:mt-3 mt-2 p-1">
              <h4 className="font-semibold text-[16px] text-[#7374C5]">
                Fokus Terhadap Pelanggan
              </h4>
              <p className="font-semibold md:text-base text-xs">
                Memegang teguh standar kualitas yang tinggi, menjamin keunggulan
                dalam setiap proyek.
              </p>
            </CardContent>
          </Card>

          <Card className="flex w-[80%] mt-4 mx-auto p-1">
            <CardContent className="mt-10 ">
              <Icon
                icon={ic_thumb_up_outline}
                style={{ color: "#7374C5" }}
                size={30}
              />
            </CardContent>
            <CardContent className="md:mt-3 mt-2 p-1">
              <h4 className="font-semibold text-[16px] text-[#7374C5]">
                Keberhasilan yang Teruji
              </h4>
              <p className="font-semibold md:text-base text-xs">
                Tingkat keberhasilan kami tercermin dalam riwayat proyek yang
                sukses dan kepuasan klien.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default wcu;
