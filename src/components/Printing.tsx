import * as React from "react";

import { Card } from "@/components/ui/card";

export function Printing() {
  return (
    <div className="bg-[#FDECED] py-10">
      <div className="text-center mb-6 lg:mb-12">
        <h4 className="text-[#ED3237] text-sm lg:text-xl font-semibold">
          JASA YANG KAMI TAWARKAN
        </h4>
        <h2 className="text-[#3E4095] text-lg lg:text-3xl font-bold">Percetakan</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-[340px] sm:w-[690px] lg:w-[873px] gap-2.5 lg:gap-6 mx-auto mb-7 sm:mb-14 lg:mb-16">
        <Card className="w-[340px] lg:w-[424px] h-[180px] rounded-2xl border-none shadow-product">
          <div className="relative text-center text-white rounded-2xl block overflow-hidden">
            <a href="./product-souvenir-konveksi">
              <img
                src="./printing1.png"
                alt="print1"
                className="object-cover brightness-50 bg-yellow w-[424px] h-[180px] rounded-2xl border-none shadow-lg hover:scale-125 ease-in duration-150 hover:shadow-2xl"
              />
            </a>
            <div className="text-[16px] absolute bottom-2 left-4 font-semibold">
              Souvenir & Konveksi
            </div>
          </div>
        </Card>
        <Card className="w-[340px] lg:w-[424px] h-[180px] rounded-2xl border-none shadow-product">
          <div className="relative text-center text-white rounded-2xl block overflow-hidden">
            <a href="./product-promosi">
              <img
                src="./printing2.png"
                alt="print2"
                className="object-cover object-top brightness-50 bg-yellow w-[424px] h-[180px] rounded-2xl border-none shadow-lg hover:scale-125 ease-in duration-150 hover:shadow-2xl"
              />
            </a>
            <div className="text-[16px] absolute bottom-2 left-4 font-semibold">
              Promosi
            </div>
          </div>
        </Card>
        <Card className="w-[340px] lg:w-[424px] h-[180px] rounded-2xl border-none shadow-product">
          <div className="relative text-center text-white rounded-2xl block overflow-hidden">
            <a href="./product-kemasan">
              <img
                src="./printing3.png"
                alt="print3"
                className="object-cover brightness-50 bg-yellow w-[424px] h-[180px] rounded-2xl border-none shadow-lg hover:scale-125 ease-in duration-150 hover:shadow-2xl"
              />
            </a>
            <div className="text-[16px] absolute bottom-2 left-4 font-semibold">
              Kemasan
            </div>
          </div>
        </Card>
        <Card className="w-[340px] lg:w-[424px] h-[180px] rounded-2xl border-none shadow-product">
          <div className="relative text-center text-white rounded-2xl block overflow-hidden">
            <a href="./product-perlengkapan-kantor">
              <img
                src="./printing4.png"
                alt="print4"
                className="object-cover brightness-50 bg-yellow w-[424px] h-[180px] rounded-2xl border-none shadow-lg hover:scale-125 ease-in duration-150 hover:shadow-2xl"
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
