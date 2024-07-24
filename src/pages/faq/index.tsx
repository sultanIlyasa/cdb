import React from "react";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Faq = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col justify-center items-center min-h-screen space-y-10">
      <div className="text-center  flex flex-col gap-4">
        <h4 className="text-[#ED3237] text-sm sm:text-base md:text-lg lg:text-xl  font-semibold">
          INFORMASI
        </h4>
        <h2 className="text-[#3E4095] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          Pertanyaan yang Sering Diajukan
        </h2>
      </div>
      <div className="p-10 rounded-xl bg-[#DBDBF0] grid grid-col-1 md:grid-cols-2  gap-4 h-full  w-full">
        <Accordion
          type="single"
          collapsible
          orientation="vertical"
          className="w-full flex rounded-lg p-4 h-fit border-none bg-white items-center justify-start"
        >
          <AccordionItem value="item-1" className="border-none h-fit w-full">
            <AccordionTrigger className="font-semibold text-xs sm:text-sm md:text-base items-center min-h-24 lg:text-lg w-full text-[#7374C5] text-start h-fit">
              Apa saja layanan yang ditawarkan oleh perusahaan kami?
            </AccordionTrigger>
            <AccordionContent className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg h-fit text-start">
              Kami menawarkan layanan konstruksi seperti pembangunan gedung,
              renovasi, dan desain interior. Untuk percetakan, kami menyediakan
              layanan cetak offset, digital printing, dan large format printing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          orientation="vertical"
          className="w-full flex rounded-lg p-4 h-fit border-none bg-white items-center justify-start"
        >
          <AccordionItem value="item-1" className="border-none h-fit w-full">
            <AccordionTrigger className="font-semibold text-xs sm:text-sm md:text-base items-center min-h-24 lg:text-lg w-full text-[#7374C5] text-start h-fit">
              Berapa lama pengalaman perusahaan kami di bidang konstruksi dan
              percetakan?
            </AccordionTrigger>
            <AccordionContent className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg h-fit text-start">
              Perusahaan kami telah beroperasi selama 5 tahun di bidang
              konstruksi dan 15 tahun di bidang percetakan.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          orientation="vertical"
          className="w-full flex rounded-lg p-4 h-fit border-none bg-white items-center justify-start"
        >
          <AccordionItem value="item-1" className="border-none h-fit w-full">
            <AccordionTrigger className="font-semibold text-xs sm:text-sm md:text-base items-center min-h-24 lg:text-lg w-full text-[#7374C5] text-start h-fit">
              Bagaimana proses pemesanan layanan konstruksi?
            </AccordionTrigger>
            <AccordionContent className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg h-fit text-start">
              Proses dimulai dengan konsultasi, dilanjutkan dengan survei
              lokasi, perancangan, penawaran harga, persetujuan kontrak, dan
              pelaksanaan proyek.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          orientation="vertical"
          className="w-full flex rounded-lg p-4 h-fit border-none bg-white items-center justify-start"
        >
          <AccordionItem value="item-1" className="border-none h-fit w-full">
            <AccordionTrigger className="font-semibold text-xs sm:text-sm md:text-base items-center min-h-24 lg:text-lg w-full text-[#7374C5] text-start h-fit">
              Apa jenis bahan cetakan yang dapat Anda tangani?
            </AccordionTrigger>
            <AccordionContent className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg h-fit text-start">
              Kami dapat menangani berbagai jenis bahan cetakan, termasuk
              kertas, karton, vinyl, dan bahan khusus lainnya.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          orientation="vertical"
          className="w-full flex rounded-lg p-4 h-fit border-none bg-white items-center justify-start"
        >
          <AccordionItem value="item-1" className="border-none h-fit w-full">
            <AccordionTrigger className="font-semibold text-xs sm:text-sm md:text-base items-center min-h-24 lg:text-lg w-full text-[#7374C5] text-start h-fit">
              Apakah Anda menyediakan layanan desain grafis?
            </AccordionTrigger>
            <AccordionContent className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg h-fit text-start">
              Ya, kami memiliki tim desainer grafis yang dapat membantu Anda
              merancang materi cetak sesuai kebutuhan.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          orientation="vertical"
          className="w-full flex rounded-lg p-4 h-fit border-none bg-white items-center justify-start"
        >
          <AccordionItem value="item-1" className="border-none h-fit w-full">
            <AccordionTrigger className="font-semibold text-xs sm:text-sm md:text-base items-center min-h-24 lg:text-lg w-full text-[#7374C5] text-start h-fit">
              Bagaimana cara mendapatkan penawaran harga?
            </AccordionTrigger>
            <AccordionContent className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg h-fit text-start">
              Anda dapat menghubungi kami melalui telepon, email, atau mengisi
              formulir permintaan penawaran di website kami.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
