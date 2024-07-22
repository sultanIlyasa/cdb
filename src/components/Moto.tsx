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
      <div className="text-center mb-6 lg:mb-9">
        <h4 className="text-[#ED3237] text-sm lg:text-xl leading-4 lg:leading-5 font-semibold">
          MOTO
        </h4>
        <h2 className="text-[#ED3237] text-sm lg:text-xl leading-4 lg:leading-5 font-semibold">
          Melayani <span className="text-[#7374C5]">lebih baik</span> dan{" "}
          <span className="text-[#7374C5]">lebih cepat</span> dengan{" "}
          <span className="text-[#7374C5]">harga kompetitif</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] mb-[87px] w-[340px] sm:w-[700px] lg:w-[860px] mx-auto">
        <Card className="w-[340px] h-[200px] lg:w-[420px] lg:h-[245px] rounded-xl bg-[#DFDFF2] border-none flex flex-col">
          <div className="mx-auto my-3 lg:my-7">
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
          <CardHeader className="w-[300px] lg:w-[340px] mx-auto">
            <CardTitle className="text-base lg:text-lg leading-[22.4px] lg:leading-[25.2px] text-[#212131] font-bold text-center mb-0 lg:mb-2">
              Visi
            </CardTitle>
            <CardDescription className="text-sm leading-5 lg:leading-[25.2px] text-[#666666] font-medium text-justify">
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
        <Card className="w-[340px] h-[200px] lg:w-[420px] lg:h-[245px] rounded-xl bg-[#DFDFF2] border-none flex flex-col">
          <div className="mx-auto my-3 lg:my-7">
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
          <CardHeader className="w-[300px] lg:w-[340px] mx-auto">
            <CardTitle className="text-base lg:text-lg leading-[22.4px] lg:leading-[25.2px] text-[#212131] font-bold text-center mb-0 lg:mb-2">
              Misi
            </CardTitle>
            <CardDescription className="text-sm leading-5 lg:leading-[25.2px] text-[#666666] font-medium text-justify">
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
