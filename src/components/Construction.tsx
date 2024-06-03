import * as React from "react";

import {
  Card,
} from "@/components/ui/card";

export function Construction() {
  return (
    <div className="">
      <div className="text-center my-[40px]">
        <h4 className="text-[#ED3237] text-[20px] font-semibold">
          JASA YANG KAMI TAWARKAN
        </h4>
        <h2 className="text-[#3E4095] text-[28px] font-bold">Konstruksi</h2>
      </div>
      <div className="grid grid-cols-2 justify-center gap-[25px] w-[873px] mx-auto mb-[67px]">
        <Card className="w-[424px] h-[180px] border-none">
          <div className="relative text-center text-white rounded-2xl block overflow-hidden">
            <a href="./product-design-indoor">
              <img
                src="./construction1.png"
                alt="cons1"
                className="object-cover brightness-50 bg-yellow w-[424px] h-[180px] rounded-[16px] border-none shadow-lg hover:scale-125 ease-in duration-150 hover:shadow-2xl"
              />
            </a>
            <div className="text-[16px] absolute bottom-2 left-4 font-semibold">
              Design & Konstruksi Indoor
            </div>
          </div>
        </Card>
        <Card className="w-[424px] h-[180px] border-none">
          <div className="relative text-center text-white rounded-2xl block overflow-hidden">
            <a href="./product-instalasi">
              <img
                src="./construction2.png"
                alt="cons1"
                className="object-cover object-top brightness-50 bg-yellow w-[424px] h-[180px] rounded-[16px] border-none shadow-lg hover:scale-125 ease-in duration-150 hover:shadow-2xl"
              />
            </a>
            <div className="text-[16px] absolute bottom-2 left-4 font-semibold">
              Instalasi
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
