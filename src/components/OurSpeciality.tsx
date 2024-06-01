import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function OurSpeciality() {
  return (
    <div>
      <div className="text-center my-[45px]">
        <h4 className="text-[#ED3237] text-[20px] font-semibold">
          KEAHLIAN KAMI
        </h4>
        <h2 className="text-[#3E4095] text-[28px] font-bold">
          Jasa yang Kami Tawarkan
        </h2>
      </div>
      <div className="flex flex-row justify-center gap-[47px] mb-[85px]">
        <Card className="w-[576px] h-[366px] rounded-[16px] bg-[#FDECED] border-none">
          <CardHeader className="px-[30px] py-[30px]">
            <CardTitle className="text-[24px] text-[#A90F13] font-bold">
              Konstruksi
            </CardTitle>
            <CardDescription className="text-[#000000] text-[16px] font-medium text-justify">
              Membangun dengan keyakinan. Tim konstruksi kami adalah pilihan
              mitra dalam mewujudkan impian Anda. Dari konsep hingga
              penyelesaian, kami menjamin pelaksanaan yang lancar dan hasil
              unggul yang bertahan lama.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row px-[30px] pb-[30px] gap-[30px]">
            <div>
              <img
                className="rounded-[10px]"
                src="/konstruksi.png"
                width={160}
                height={152}
              />
            </div>
            <div className="flex flex-col w-[258px]">
              <a
                className="text-[#ED3237] pb-[15px] font-semibold underline border-b-2 border-b-white"
                href=""
              >
                Design & Konstruksi Indoor
              </a>
              <a
                className="text-[#ED3237] py-[15px] font-semibold underline border-b-2 border-b-white"
                href=""
              >
                Instalasi
              </a>
              <a
                className="text-[#ED3237] pt-[15px] font-semibold underline"
                href=""
              >
                Tampilkan Lebih Banyak
              </a>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[576px] h-[366px] rounded-[16px] bg-[#DBDBF0] border-none">
          <CardHeader className="px-[30px] py-[30px]">
            <CardTitle className="text-[24px] text-[#1F204C] font-bold">
              Percetakan
            </CardTitle>
            <CardDescription className="text-[#000000] text-[16px] font-medium text-justify">
              Layanan cetak kami memberikan warna yang cerah, cetakan hitam
              putih yang tajam, dan waktu pengerjaan yang cepat. Dari kartu
              bisnis hingga spanduk, kami memastikan harga kompetitif dan kesan
              yang melekat.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row px-[30px] pb-[30px] gap-[30px]">
            <div>
              <img
                className="rounded-[10px]"
                src="/percetakan.png"
                width={160}
                height={152}
              />
            </div>
            <div className="flex flex-col w-[258px]">
              <a
                className="text-[#3E4095] pb-[15px] font-semibold underline border-b-2 border-b-white"
                href=""
              >
                Perlengkapan Kantor
              </a>
              <a
                className="text-[#3E4095] py-[15px] font-semibold underline border-b-2 border-b-white"
                href=""
              >
                Souvenir & Konveksi
              </a>
              <a
                className="text-[#3E4095] pt-[15px] font-semibold underline"
                href=""
              >
                Tampilkan Lebih Banyak
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
