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
    <main>
      <br />
      <div className="font-montserrat text-base font-semibold leading-[24.38px] text-center text-[#ED3237]">
        INFORMASI
      </div>
      <div className="font-montserrat md:text-4xl font-bold leading-[34.13px] text-center text-[#7374C5] mb-5">
        Pertanyaan yang Sering Diajukan
      </div>
      <div className=" md:w-[80%] p-10 rounded-lg bg-[#DBDBF0] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4  mb-[200px] mt-14">
        <Card className="p-4 rounded-lg flex-col text-justify ">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xs font-semibold text-left md:text-base text-[#7374C5]">
                Apa saja layanan yang ditawarkan oleh perusahaan kami?
              </AccordionTrigger>
              <AccordionContent className="text-xs font-semibold text-left md:text-sm">
                Kami menawarkan layanan konstruksi seperti pembangunan gedung,
                renovasi, dan desain interior. Untuk percetakan, kami
                menyediakan layanan cetak offset, digital printing, dan large
                format printing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <Card className="p-4 rounded-lg flex flex-col text-justify">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xs font-semibold text-left md:text-base text-[#7374C5]">
                Berapa lama pengalaman perusahaan kami di bidang konstruksi dan
                percetakan?
              </AccordionTrigger>
              <AccordionContent className="text-xs font-semibold text-left md:text-sm">
                Perusahaan kami telah beroperasi selama 5 tahun di bidang
                konstruksi dan 15 tahun di bidang percetakan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <Card className="p-4 rounded-lg flex flex-col text-justify">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xs font-semibold text-left md:text-base text-[#7374C5]">
                Bagaimana proses pemesanan layanan konstruksi?
              </AccordionTrigger>
              <AccordionContent className="text-xs font-semibold text-left md:text-sm">
                Proses dimulai dengan konsultasi, dilanjutkan dengan survei
                lokasi, perancangan, penawaran harga, persetujuan kontrak, dan
                pelaksanaan proyek.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <Card className="p-4 rounded-lg flex flex-col text-justify">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xs font-semibold text-left md:text-base text-[#7374C5]">
                Apa jenis bahan cetakan yang dapat Anda tangani?
              </AccordionTrigger>
              <AccordionContent className="text-xs font-semibold text-left md:text-sm">
                Kami dapat menangani berbagai jenis bahan cetakan, termasuk
                kertas, karton, vinyl, dan bahan khusus lainnya.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <Card className="p-4 rounded-lg flex flex-col text-justify">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xs font-semibold text-left md:text-base text-[#7374C5]">
                Apakah Anda menyediakan layanan desain grafis?
              </AccordionTrigger>
              <AccordionContent className="text-xs font-semibold text-left md:text-sm">
                Ya, kami memiliki tim desainer grafis yang dapat membantu Anda
                merancang materi cetak sesuai kebutuhan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <Card className="p-4 rounded-lg flex flex-col text-justify">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xs font-semibold text-left md:text-base text-[#7374C5]">
                Bagaimana cara mendapatkan penawaran harga?
              </AccordionTrigger>
              <AccordionContent className="text-xs font-semibold text-left md:text-sm">
                Anda dapat menghubungi kami melalui telepon, email, atau mengisi
                formulir permintaan penawaran di website kami.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </main>
  );
};

export default Faq;
