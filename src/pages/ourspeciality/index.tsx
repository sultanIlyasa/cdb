import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function OurSpeciality({title, subTitle, card1Title,card2Title, card1desc, card2desc, card1titlerod1 , card1titlerod2 , card1titlerod3 , card2titlerod1 , card2titlerod2 , card2titlerod3,card1link1, card1link2, card1link3, card2link1, card2link2,card2link3}) {
  return (
    <div>
      <div className="text-center my-[45px]">
        <h4 className="text-[#ED3237] text-[20px] font-semibold">
          {title}
        </h4>
        <h2 className="text-[#3E4095] text-[28px] font-bold">
          {subTitle}
        </h2>
      </div>
      <div className="flex flex-row justify-center gap-5">
        <div>
          <Card className="w-[580px] h-[410px] rounded-[16px] bg-[#FDECED] border-none">
            <div className="pl-[58px] pt-[37px] pr-[70px]">
              <CardHeader>
                <CardTitle className="text-[24px] text-[#A90F13] font-bold">
                  {card1Title}
                </CardTitle>
                <CardDescription className="text-[#000000] text-[16px] font-medium text-justify">
                  {card1desc}
                </CardDescription>
              </CardHeader>
            </div>
            <div>
              <CardContent className="flex flex-row justify-center gap-5">
                <div>
                  <img
                    className="rounded-[10px]"
                    src="/construction.png"
                    width={166}
                    height={152}
                  />
                </div>
                <div>
                  <a className="text-[#ED3237] mb-3 block font-semibold" href="">
                    {card1titlerod1}
                  </a>
                  <hr />
                  <a className="text-[#ED3237] mb-3 block font-semibold" href="">
                    {card1titlerod2}
                  </a>
                  <hr />
                  <a className="text-[#ED3237] mb-3 block font-semibold" href="">
                    {card1titlerod3}
                  </a>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
        <div>
          <Card className="w-[580px] h-[410px] rounded-[16px] bg-[#DBDBF0] border-none">
            <div className="pl-[58px] pt-[37px] pr-[70px]">
              <CardHeader>
                <CardTitle className="text-[24px] text-[#1F204C] font-bold">
                  {card2Title}
                </CardTitle>
                <CardDescription className="text-[#000000] text-[16px] font-medium text-justify">
                  {card2desc}
                </CardDescription>
              </CardHeader>
            </div>
            <div>
              <CardContent className="flex flex-row justify-center gap-5">
                <div>
                  <img
                    className="rounded-[10px]"
                    src="/printing.png"
                    width={166}
                    height={152}
                  />
                </div>
                <div>
                  <a className="text-[#3E4095]  block mb-3 font-semibold" href="">
                    {card2titlerod1}
                  </a>
                  <hr />
                  <a className="text-[#3E4095] block mb-3 font-semibold" href="">
                    {card2titlerod2}
                  </a>
                  <hr />
                  <a className="text-[#3E4095] block mb-3 font-semibold" href="">
                    {card2titlerod3}
                  </a>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
