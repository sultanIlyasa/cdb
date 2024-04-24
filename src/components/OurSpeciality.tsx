import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function OurSpeciality() {
  return (
    <div>
      <div className="text-center my-[45px]">
        <h4 className="text-[#ED3237] text-[20px] font-semibold">
          OUR SPECIALITY
        </h4>
        <h2 className="text-[#3E4095] text-[28px] font-bold">
          Services We’re Offering
        </h2>
      </div>
      <div className="flex flex-row justify-center gap-5">
        <div>
          <Card className="w-[580px] h-[410px] rounded-[16px] bg-[#FDECED] border-none">
            <div className="pl-[58px] pt-[37px] pr-[70px]">
              <CardHeader>
                <CardTitle className="text-[24px] text-[#A90F13] font-bold">
                  Construction
                </CardTitle>
                <CardDescription className="text-[#000000] text-[16px] font-medium text-justify">
                  Build with confidence. Our construction team is your partner
                  in realizing your dreams. From concept to completion, we
                  ensure seamless execution and superior results that stand the
                  test of time.
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
                  <a className="text-[#ED3237] my-[18px] font-semibold" href="">
                    Residential Buildings span →
                  </a>
                  <hr />
                  <a className="text-[#ED3237] my-[18px] font-semibold" href="">
                    Commercial Buildings →
                  </a>
                  <hr />
                  <a className="text-[#ED3237] my-[18px] font-semibold" href="">
                    See More →
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
                  Printing
                </CardTitle>
                <CardDescription className="text-[#000000] text-[16px] font-medium text-justify">
                  Our printing service offers vibrant colors, crisp black and
                  white prints, and fast turnaround times. From business cards
                  to banners, we ensure competitive pricing and lasting
                  impressions.
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
                  <a className="text-[#3E4095] pb-[18px] font-semibold" href="">
                    Banners & Signage →
                  </a>
                  <hr />
                  <a className="text-[#3E4095] pb-[18px] font-semibold" href="">
                    Packaging Solutions →
                  </a>
                  <hr />
                  <a className="text-[#3E4095] pb-[18px] font-semibold" href="">
                    See More →
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
