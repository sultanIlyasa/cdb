import Slideshow from "@/components/slideshow";
import { Pelanggans } from "@/lib/data";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const page = () => {
  return (
    <main className="min-h-screen ">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="grid grid-cols-1 min-h-screen md:grid-cols-2 gap-10 h-full w-full md:order-last">
          <Image
            src={"/profile.png"}
            alt=""
            width={1000}
            height={1000}
            className="object-cover h-full w-full"
          />
          <div className="flex-col flex gap-10 md:ps-[calc(10%)] md:w-full mx-auto w-[80%] justify-center items-center md:order-first">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-start w-full">
              PT. CAHAYA DUA BERLIAN
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-justify">
              Perusahaan kami berdiri sejak tahun 2007 dengan cakupan pasar yang
              meliputi industri manufaktur, perkantoran, pendidikan, lembaga
              pemerintah, dan ritel. Saat ini, tidak kurang dari 20 perusahaan
              dari berbagai bidang, mulai dari skala nasional, regional, hingga
              UMKM, telah menjadi klien kami.
              <br />
              <br />
              Dengan dukungan para ahli di bidangnya dan berbagai pengalaman
              dalam melaksanakan pekerjaan konstruksi dan Agro Industri, PT.
              Cahaya Dua Berlian selalu siap untuk berpartisipasi dalam
              mengimplementasikan proyek-proyek baik di sektor pemerintah maupun
              swasta.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-screen justify-center items-center mx-auto w-[80%] gap-10">
        <div className="text-center  flex flex-col gap-4">
          <h4 className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl  font-semibold">
            MOTO
          </h4>
          <h2 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Melayani <span className="text-[#7374C5]">lebih baik</span> dan
            <span className="text-[#7374C5]"> lebih cepat</span> dengan
            <span className="text-[#7374C5]"> harga kompetitif</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-4">
          <div className="w-full p-10 flex flex-col items-center justify-center gap-4 rounded-xl text-[#666666] bg-[#DFDFF2]">
            <svg
              width={32}
              height={32}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(115, 116, 197, 1)"
            >
              <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
            </svg>
            <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
              VISI
            </h5>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-justify">
              Menjadi perusahaan yang <b>profesional</b>, <b>kompeten</b>, dan
              <b> bersaing</b> melalui <b>karakter</b> dan <b>inovasi</b> untuk
              menghasilkan nilai tambah baru yang dapat memberi manfaat.
            </p>
          </div>
          <div className="w-full p-10 flex flex-col items-center justify-center gap-4 rounded-xl text-[#666666] bg-[#DFDFF2]">
            <svg
              width={32}
              height={32}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(115, 116, 197, 1)"
            >
              <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
            </svg>
            <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
              MISI
            </h5>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-justify">
              Menjadi perusahaan yang bersifat
              <b> adaptif</b> dan <b>kompetitif</b> dalam menjawab{" "}
              <u>tantangan</u> dan <u>permintaan</u> bisnis yang terus
              berkembang.
            </p>
          </div>
        </div>
      </div>
      <Slideshow />
      <div className="bg-[#EDEDF8]">
        <div className="flex flex-col min-h-screen justify-center items-center mx-auto w-[80%] gap-10">
          <div className="text-center  flex flex-col gap-4">
            <h2 className="text-[#7374C5] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              Testimoni Pelanggan
            </h2>
          </div>
          {Pelanggans.length > 0 && (
            <div className="w-full mx-auto">
              <Carousel
                className="w-full lg:w-[80%] mx-auto basis-0 rounded-xl"
                opts={{ loop: true }}
              >
                <CarouselContent>
                  {Pelanggans.map((pelanggan, i) => {
                    return (
                      <CarouselItem
                        key={i}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 "
                      >
                        <div className="p-10 bg-[#1F204C] rounded-xl">
                          <Image
                            src={pelanggan.foto}
                            alt=""
                            width={500}
                            height={500}
                            className=" w-full h-full aspect-square object-cover rounded-xl "
                          />
                        </div>
                        <div className="p-10 bg-white rounded-xl flex flex-col gap-4">
                          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                            {pelanggan.judul}
                          </h1>
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-justify">
                            {pelanggan.deskripsi}
                          </p>
                          <h5 className="text-sm sm:text-base md:text-lg lg:text-xl">
                            {pelanggan.nama},{" "}
                            <span className="text-[#ED3237]">
                              {pelanggan.perusahaan} ({pelanggan.tahun})
                            </span>
                          </h5>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default page;
