import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Moto() {
  return (
    <>
      <div className="text-center my-[32px]">
        <h4 className="text-[#ED3237] text-[20px] font-semibold">MOTO</h4>
        <h2 className="text-[#212131] text-[28px] font-bold">
          Melayani <span className="text-[#7374C5]">lebih baik</span> dan{" "}
          <span className="text-[#7374C5]">lebih cepat</span> dengan{" "}
          <span className="text-[#7374C5]">harga kompetitif</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-[20px] mb-[87px] w-[860px] mx-auto">
        <Card className="w-[420px] h-[245px] rounded-[12px] bg-[#DFDFF2] border-none flex flex-col">
          <div className="px-[193px] pt-[31px]">
            <svg
              width={34}
              height={34}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(33,33,49,1)"
            >
              <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
            </svg>
          </div>
          <CardHeader className="px-[40px] py-[20px]">
            <CardTitle className="text-[18px] text-[#212131] font-bold text-center pb-[10px]">
              Visi
            </CardTitle>
            <CardDescription className="text-[#666666] text-[14px] font-medium text-justify">
              Menjadi perusahaan yang{" "}
              <span className="font-bold">profesional</span>,{" "}
              <span className="font-bold">kompeten</span>, dan{" "}
              <span className="font-bold">bersaing</span> melalui{" "}
              <span className="font-bold">karakter</span> dan{" "}
              <span className="font-bold">inovasi</span> untuk menghasilkan
              nilai tambah baru yang dapat memberi manfaat.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-[420px] h-[245px] rounded-[12px] bg-[#DFDFF2] border-none flex flex-col">
          <div className="px-[193px] pt-[31px]">
            <svg
              width={34}
              height={34}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(33,33,49,1)"
            >
              <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
            </svg>
          </div>
          <CardHeader className="px-[40px] py-[20px]">
            <CardTitle className="text-[18px] text-[#212131] font-bold text-center pb-[10px]">
              Misi
            </CardTitle>
            <CardDescription className="text-[#666666] text-[14px] font-medium text-justify">
              Menjadi perusahaan yang bersifat{" "}
              <span className="font-bold">adaptif</span> dan{" "}
              <span className="font-bold">kompetitif</span> dalam menjawab{" "}
              <span className="underline">tantangan</span> dan{" "}
              <span className="underline">permintaan</span> bisnis yang terus
              berkembang.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
