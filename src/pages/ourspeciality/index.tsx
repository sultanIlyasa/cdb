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
      <div className="flex flex-row justify-center gap-5">
        <div>
          <Card className="w-[580px] h-[410px] rounded-[16px] bg-[#FDECED] border-none">
            <div className="pl-[58px] pt-[37px] pr-[70px]">
              <CardHeader>
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
            </div>
            <div>
              <CardContent className="flex flex-row justify-center gap-5">
                <div>
                  <img
                    className="rounded-[10px]"
                    src="/construction.png"
                    width={166}
                    height={152}
                  />
                </div>
                <div>
                  <a className="text-[#ED3237] mb-3 block font-semibold" href="">
                    Desain & Konstruksi Indoor
                  </a>
                  <hr />
                  <a className="text-[#ED3237] mb-3 block font-semibold" href="">
                    Instalasi
                  </a>
                  <hr />
                  <a className="text-[#ED3237] mb-3 block font-semibold" href="">
                    Tampilkan Lebih Banyak
                  </a>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
        <div>
          <Card className="w-[580px] h-[410px] rounded-[16px] bg-[#DBDBF0] border-none">
            <div className="pl-[58px] pt-[37px] pr-[70px]">
              <CardHeader>
                <CardTitle className="text-[24px] text-[#1F204C] font-bold">
                  Percetakan
                </CardTitle>
                <CardDescription className="text-[#000000] text-[16px] font-medium text-justify">
                  Layanan cetak kami memberikan warna yang cerah, cetakan hitam
                  putih yang tajam, dan waktu pengerjaan yang cepat. Dari kartu
                  bisnis hingga spanduk, kami memastikan harga kompetitif dan
                  kesan yang melekat. impressions.
                </CardDescription>
              </CardHeader>
            </div>
            <div>
              <CardContent className="flex flex-row justify-center gap-5">
                <div>
                  <img
                    className="rounded-[10px]"
                    src="/printing.png"
                    width={166}
                    height={152}
                  />
                </div>
                <div>
                  <a className="text-[#3E4095]  block mb-3 font-semibold" href="">
                    Perlengkapan Kantor
                  </a>
                  <hr />
                  <a className="text-[#3E4095] block mb-3 font-semibold" href="">
                    Souvenir & Konveksi
                  </a>
                  <hr />
                  <a className="text-[#3E4095] block mb-3 font-semibold" href="">
                    Tampilkan Lebih Banyak
                  </a>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
