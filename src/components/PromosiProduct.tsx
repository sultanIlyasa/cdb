import * as React from "react";

import {
  Card,
  CardTitle,
} from "@/components/ui/card";

export function PromosiProduct() {
  return (
    <>
      <div className="text-center mt-[75px] mb-[25px]">
        <h4 className="text-[#3E4095] text-[28px] font-bold">Produk Kami</h4>
      </div>
      <div className="grid grid-cols-3 gap-[30px] mb-[87px] w-[909px] mx-auto">
        <Card className="w-[283px] h-[263px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col">
          <div className="px-[10px] py-[10px]">
            <img
                src="./Flyer.png"
                alt=""
                className="w-[263px] h-[200px] rounded-[5px] object-cover object-top"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Flyer
          </CardTitle>
        </Card>
        <Card className="w-[283px] h-[263px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col">
          <div className="px-[10px] py-[10px]">
            <img
                src="./Booklet.png"
                alt=""
                className="w-[263px] h-[200px] rounded-[5px] object-cover object-right"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Booklet
          </CardTitle>
        </Card>
        <Card className="w-[283px] h-[263px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col">
          <div className="px-[10px] py-[10px]">
            <img
                src="./Banner.png"
                alt=""
                className="w-[263px] h-[200px] top-10 rounded-[5px] object-cover"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Banner
          </CardTitle>
        </Card>
      </div>
    </>
  );
}
