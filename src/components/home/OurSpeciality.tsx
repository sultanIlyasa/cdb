import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export function OurSpeciality() {
  return (
    <div className="min-h-screen w-[80%] mx-auto flex flex-col justify-center items-center space-y-20">
      <div className="text-center  flex flex-col gap-4">
        <h4 className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl  font-semibold">
          KEAHLIAN KAMI
        </h4>
        <h2 className="text-[#3E4095] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          Jasa yang Kami Tawarkan
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="flex flex-col justify-evenly gap-4 w-full rounded-2xl bg-[#FDECED] border-none">
          <CardHeader className="gap-2">
            <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#A90F13] font-bold">
              Konstruksi
            </CardTitle>
            <CardDescription className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-xl font-medium text-justify">
              Membangun dengan keyakinan. Tim konstruksi kami adalah pilihan
              mitra dalam mewujudkan impian Anda. Dari konsep hingga
              penyelesaian, kami menjamin pelaksanaan yang lancar dan hasil
              unggul yang bertahan lama.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 min-h-52">
            <Image
              className="rounded-xl w-full h-full object-cover "
              src="/konstruksi.png"
              alt=""
              width={166}
              height={152}
            />

            <div className="flex flex-col items-start gap-2">
              <Link
                className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl hover:underline  block font-semibold"
                href="/produk/design-&-konstruksi-indoor"
              >
                Desain & Konstruksi Indoor
              </Link>
              <Link
                className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl hover:underline  block font-semibold"
                href="/produk/instalasi"
              >
                Instalasi
              </Link>
              <Link
                className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl hover:underline  block font-semibold"
                href="/produk"
              >
                Tampilkan Lebih Banyak
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-evenly gap-4 w-full rounded-2xl bg-[#DBDBF0] border-none">
          <CardHeader className="gap-2">
            <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#1F204C] font-bold">
              Percetakan
            </CardTitle>
            <CardDescription className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-xl font-medium text-justify">
              Layanan cetak kami memberikan warna yang cerah, cetakan hitam
              putih yang tajam, dan waktu pengerjaan yang cepat. Dari kartu
              bisnis hingga spanduk, kami memastikan harga kompetitif dan kesan
              yang melekat. impressions.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 min-h-52">
            <Image
              className="rounded-xl w-full h-full object-cover"
              src="/percetakan.png"
              alt=""
              width={166}
              height={152}
            />
            <div className="flex flex-col items-start gap-2">
              <Link
                className="text-[#3E4095]  text-sm sm:text-base md:text-lg lg:text-xl hover:underline  block font-semibold"
                href="/produk/perlengkapan-kantor"
              >
                Perlengkapan Kantor
              </Link>
              <Link
                className="text-[#3E4095] text-sm sm:text-base md:text-lg lg:text-xl hover:underline  block font-semibold"
                href="/produk/souvenir-&-konveksi"
              >
                Souvenir & Konveksi
              </Link>
              <Link
                className="text-[#3E4095] text-sm sm:text-base md:text-lg lg:text-xl hover:underline  block font-semibold"
                href="/produk"
              >
                Tampilkan Lebih Banyak
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
