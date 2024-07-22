import * as React from "react";

import { Card, CardTitle } from "@/components/ui/card";

export function SouvenirKonveksiProduct() {
  return (
    <>
      <div className="text-center mt-[75px] mb-[25px]">
        <h4 className="text-[#3E4095] text-[28px] font-bold">Produk Kami</h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 w-[346px] sm:w-[702px] lg:w-[1241px] mx-auto">
        <Card className="w-[168px] lg:w-[283px] h-[157px] lg:h-[263px] rounded-xl bg-[#FFFFFF] border-[0.5px] shadow-product">
          <div className="px-1.5 py-1.5 lg:px-2.5 lg:py-2.5">
            <img
              src="./KaosCustom.png"
              alt=""
              className="w-[158px] lg:w-[263px] h-[121px] lg:h-[200px] rounded-md object-cover"
            />
          </div>
          <CardTitle className="text-xs lg:text-base text-[#3E3E3E] font-semibold text-center lg:py-1">
            Kaos Custom
          </CardTitle>
        </Card>
        <Card className="w-[168px] lg:w-[283px] h-[157px] lg:h-[263px] rounded-xl bg-[#FFFFFF] border-[0.5px] shadow-product">
          <div className="px-1.5 py-1.5 lg:px-2.5 lg:py-2.5">
            <img
              src="./Topi.png"
              alt=""
              className="w-[158px] lg:w-[263px] h-[121px] lg:h-[200px] rounded-md object-cover"
            />
          </div>
          <CardTitle className="text-xs lg:text-base text-[#3E3E3E] font-semibold text-center lg:py-1">
            Topi
          </CardTitle>
        </Card>
        <Card className="w-[168px] lg:w-[283px] h-[157px] lg:h-[263px] rounded-xl bg-[#FFFFFF] border-[0.5px] shadow-product">
          <div className="px-1.5 py-1.5 lg:px-2.5 lg:py-2.5">
            <img
              src="./GantunganLabel.png"
              alt=""
              className="w-[158px] lg:w-[263px] h-[121px] lg:h-[200px] rounded-md object-cover"
            />
          </div>
          <CardTitle className="text-xs lg:text-base text-[#3E3E3E] font-semibold text-center lg:py-1">
            Gantungan Label
          </CardTitle>
        </Card>
        <Card className="w-[168px] lg:w-[283px] h-[157px] lg:h-[263px] rounded-xl bg-[#FFFFFF] border-[0.5px] shadow-product">
          <div className="px-1.5 py-1.5 lg:px-2.5 lg:py-2.5">
            <img
              src="./BotolMinum.png"
              alt=""
              className="w-[158px] lg:w-[263px] h-[121px] lg:h-[200px] rounded-md object-cover"
            />
          </div>
          <CardTitle className="text-xs lg:text-base text-[#3E3E3E] font-semibold text-center lg:py-1">
            Botol Minum
          </CardTitle>
        </Card>
        <Card className="w-[168px] lg:w-[283px] h-[157px] lg:h-[263px] rounded-xl bg-[#FFFFFF] border-[0.5px] shadow-product">
          <div className="px-1.5 py-1.5 lg:px-2.5 lg:py-2.5">
            <img
              src="./Payung.png"
              alt=""
              className="w-[158px] lg:w-[263px] h-[121px] lg:h-[200px] rounded-md object-cover"
            />
          </div>
          <CardTitle className="text-xs lg:text-base text-[#3E3E3E] font-semibold text-center lg:py-1">
            Payung
          </CardTitle>
        </Card>
        <Card className="w-[168px] lg:w-[283px] h-[157px] lg:h-[263px] rounded-xl bg-[#FFFFFF] border-[0.5px] shadow-product">
          <div className="px-1.5 py-1.5 lg:px-2.5 lg:py-2.5">
            <img
              src="./GantunganKunci.png"
              alt=""
              className="w-[158px] lg:w-[263px] h-[121px] lg:h-[200px] rounded-md object-cover"
            />
          </div>
          <CardTitle className="text-xs lg:text-base text-[#3E3E3E] font-semibold text-center lg:py-1">
            Gantungan Kunci
          </CardTitle>
        </Card>
        <Card className="w-[168px] lg:w-[283px] h-[157px] lg:h-[263px] rounded-xl bg-[#FFFFFF] border-[0.5px] shadow-product">
          <div className="px-1.5 py-1.5 lg:px-2.5 lg:py-2.5">
            <img
              src="./Totebag.png"
              alt=""
              className="w-[158px] lg:w-[263px] h-[121px] lg:h-[200px] rounded-md object-cover"
            />
          </div>
          <CardTitle className="text-xs lg:text-base text-[#3E3E3E] font-semibold text-center lg:py-1">
            Totebag
          </CardTitle>
        </Card>
        <Card className="w-[168px] lg:w-[283px] h-[157px] lg:h-[263px] rounded-xl bg-[#FFFFFF] border-[0.5px] shadow-product">
          <div className="px-1.5 py-1.5 lg:px-2.5 lg:py-2.5">
            <img
              src="./HandukCustom.png"
              alt=""
              className="w-[158px] lg:w-[263px] h-[121px] lg:h-[200px] rounded-md object-cover"
            />
          </div>
          <CardTitle className="text-xs lg:text-base text-[#3E3E3E] font-semibold text-center lg:py-1">
            Handuk Custom
          </CardTitle>
        </Card>
      </div>
    </>
  );
}
