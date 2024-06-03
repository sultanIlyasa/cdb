import * as React from "react";

import { Card } from "@/components/ui/card";

export function Printing() {
  return (
    <div className="bg-[#FDECED] pt-[45px] pb-[117px] ">
      <div className="text-center pb-[48px] ">
        <h4 className="text-[#ED3237] text-[20px] font-semibold">
          JASA YANG KAMI TAWARKAN
        </h4>
        <h2 className="text-[#3E4095] text-[28px] font-bold">Percetakan</h2>
      </div>
      <div className="grid grid-cols-2 justify-center gap-[25px] w-[873px] mx-auto">
        <Card className="w-[424px] h-[180px] border-none">
          <div className="relative text-center text-white rounded-2xl block overflow-hidden">
            <a href="./product-souvenir-konveksi">
              <img
                src="./printing1.png"
                alt="print1"
                className="object-cover brightness-50 bg-yellow w-[424px] h-[180px] rounded-[16px] border-none shadow-lg hover:scale-125 ease-in duration-150 hover:shadow-2xl"
              />
            </a>
            <div className="text-[16px] absolute bottom-2 left-4 font-semibold">
              Souvenir & Konveksi
            </div>
          </div>
        </Card>
        <Card className="w-[424px] h-[180px] border-none">
          <div className="relative text-center text-white rounded-2xl block overflow-hidden">
            <a href="./product-promosi">
              <img
                src="./printing2.png"
                alt="print2"
                className="object-cover object-top brightness-50 bg-yellow w-[424px] h-[180px] rounded-[16px] border-none shadow-lg hover:scale-125 ease-in duration-150 hover:shadow-2xl"
              />
            </a>
            <div className="text-[16px] absolute bottom-2 left-4 font-semibold">
              Promosi
            </div>
          </div>
        </Card>
        <Card className="w-[424px] h-[180px] border-none">
          <div className="relative text-center text-white rounded-2xl block overflow-hidden">
            <a href="">
              <img
                src="./printing3.png"
                alt="print3"
                className="object-cover brightness-50 bg-yellow w-[424px] h-[180px] rounded-[16px] border-none shadow-lg hover:scale-125 ease-in duration-150 hover:shadow-2xl"
              />
            </a>
            <div className="text-[16px] absolute bottom-2 left-4 font-semibold">
              Kemasan
            </div>
          </div>
        </Card>
        <Card className="w-[424px] h-[180px] border-none">
          <div className="relative text-center text-white rounded-2xl block overflow-hidden">
            <a href="">
              <img
                src="./printing4.png"
                alt="print4"
                className="object-cover brightness-50 bg-yellow w-[424px] h-[180px] rounded-[16px] border-none shadow-lg hover:scale-125 ease-in duration-150 hover:shadow-2xl"
              />
            </a>
            <div className="text-[16px] absolute bottom-2 left-4 font-semibold">
              Perlengkapan Kantor
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
