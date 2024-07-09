import * as React from "react";

import {
  Card,
  CardTitle,
} from "@/components/ui/card";

export function KemasanProduct() {
  return (
    <>
      <div className="text-center mt-[75px] mb-[25px]">
        <h4 className="text-[#3E4095] text-[28px] font-bold">Produk Kami</h4>
      </div>
      <div className="grid grid-cols-4 gap-[30px] mb-[87px] w-[1241px] mx-auto">
        <Card className="w-[283px] h-[287px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col shadow-xl">
          <div className="px-[10px] py-[10px]">
            <img
                src="./KemasanProduct1.png"
                alt=""
                className="w-[263px] h-[200px] rounded-[5px] object-cover object-top"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Kotak Produk 
            <br/>Bahan Kardus Gelombang
          </CardTitle>
        </Card>
        <Card className="w-[283px] h-[287px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col shadow-xl">
          <div className="px-[10px] py-[10px]">
            <img
                src="./KemasanProduct2.png"
                alt=""
                className="w-[263px] h-[200px] rounded-[5px] object-cover"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Kotak Produk<br/>Bahan Keras
          </CardTitle>
        </Card>
        <Card className="w-[283px] h-[287px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col shadow-xl">
          <div className="px-[10px] py-[10px]">
            <img
                src="./KemasanProduct3.png"
                alt=""
                className="w-[263px] h-[200px] rounded-[5px] object-cover object-top"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Kotak Produk<br/>Bahan Keras + Pita Tarik
          </CardTitle>
        </Card>
        <Card className="w-[283px] h-[287px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col shadow-xl">
          <div className="px-[10px] py-[10px]">
            <img
                src="./KemasanProduct4.png"
                alt=""
                className="w-[263px] h-[200px] rounded-[5px] object-cover"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Paper Bag Bahan Kertas
          </CardTitle>
        </Card>
        <Card className="w-[283px] h-[287px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col shadow-xl">
          <div className="px-[10px] py-[10px]">
            <img
                src="./KemasanProduct5.png"
                alt=""
                className="w-[263px] h-[200px] rounded-[5px] object-cover object-top"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Kemasan Botol
          </CardTitle>
        </Card>
        <Card className="w-[283px] h-[287px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col shadow-xl">
          <div className="px-[10px] py-[10px]">
            <img
                src="./KemasanProduct6.png"
                alt=""
                className="w-[263px] h-[200px] rounded-[5px] object-cover object-top"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Kotak Hampers
          </CardTitle>
        </Card>
        <Card className="w-[283px] h-[287px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col shadow-xl">
          <div className="px-[10px] py-[10px]">
            <img
                src="./KemasanProduct7.png"
                alt=""
                className="w-[263px] h-[200px] rounded-[5px] object-cover object-top"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Kertas Sampul
          </CardTitle>
        </Card>
        <Card className="w-[283px] h-[287px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col shadow-xl">
          <div className="px-[10px] py-[10px]">
            <img
                src="./KemasanProduct8.png"
                alt=""
                className="w-[263px] h-[200px] rounded-[5px] object-cover"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Paper Bag
          </CardTitle>
        </Card>
        <Card className="w-[283px] h-[287px] rounded-[10px] bg-[#FFFFFF] border-[0.5px] flex flex-col shadow-xl">
          <div className="px-[10px] py-[10px]">
            <img
                src="./KemasanProduct9.png"
                alt=""
                className="w-[263px] h-[200px] rounded-[5px] object-cover"
              />
          </div>
          <CardTitle className="text-[16px] text-[#3E3E3E] font-semibold text-center px-[10px] pt-[5px] pb-[15px]">
            Kotak Gable + Handle
          </CardTitle>
        </Card>
      </div>
    </>
  );
}
