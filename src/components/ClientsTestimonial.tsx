import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ClientsTestimonial() {
  return (
    <div className="bg-[#EDEDF8] py-[40px]">
      <div className="text-center mb-[30px]">
        <h2 className="text-[#212131] text-[32px] font-bold">
          Clients Testimonial
        </h2>
      </div>
      <div className="w-[1110px] mx-auto">
        <div className="carousel w-[1110px] ">
          <div id="item1" className="carousel-item w-[1110px]">
            <div className="flex flex-row gap-9">
              <div className="w-[441px] h-[476px] rounded-[10px] bg-[#1F204C] border-1 py-[38px] px-[45px] ">
                <img
                  className="h-[400px] w-[350px]"
                  src="/client2.jpg"
                  width={0}
                  height={0}
                />
              </div>
              <div className="grid grid-cols-1 gap-5 mb-[87px]">
                <Card className="w-[621px] h-[231px] rounded-[12px] bg-[#FFFFFF] border-[0.5px] border-[#7374C5]">
                  <CardHeader className="px-[35px] py-[30px]">
                    <CardTitle className="text-[20px] text-[#212131] font-bold">
                      Exemplary Collaboration!
                    </CardTitle>
                    <CardDescription className="text-[#424255] text-[14px] text-justify">
                      The level of professionalism and dedication displayed by
                      this construction company's team is truly remarkable. Not
                      only did they deliver stunning end results, but they also
                      provided a seamless and collaborative working experience
                      from start to finish of the project. Collaborating with
                      this construction company was the right decision for every
                      one of our projects.
                    </CardDescription>
                    <div className="text-[16px] text-[#212131] font-medium">
                      Emily Johnson,{" "}
                      <span className="text-[#ED3237]">
                        Bekasi Toll Project (2021)
                      </span>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-[621px] h-[183px] rounded-[12px] bg-[#FFFFFF] border-[0.5px] border-[#7374C5]">
                  <CardHeader className="px-[35px] py-[15px]">
                    <CardTitle className="text-[20px] text-[#212131] font-bold">
                      Elevating Construction Standards
                    </CardTitle>
                    <CardDescription className="text-[#424255] text-[14px] text-justify">
                      Working with this company raised the bar for construction
                      excellence. Their meticulous attention to detail and
                      unwavering commitment ensured flawless execution from
                      start to finish, making them instrumental in achieving our
                      project goals.
                    </CardDescription>
                    <div className="text-[16px] text-[#212131] font-medium">
                      Natalie,{" "}
                      <span className="text-[#ED3237]">
                        Bandung Residential Complex (2023)
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>

          <div id="item2" className="carousel-item w-[1110px]">
            <div className="flex flex-row-reverse gap-9">
              <div className="w-[441px] h-[476px] rounded-[10px] bg-[#1F204C] border-1 py-[38px] px-[45px] ">
                <img
                  className="h-[400px] w-[350px]"
                  src="/client2.jpg"
                  width={0}
                  height={0}
                />
              </div>
              <div className="grid grid-cols-1 gap-5 mb-[87px]">
                <Card className="w-[621px] h-[231px] rounded-[12px] bg-[#FFFFFF] border-[0.5px] border-[#7374C5]">
                  <CardHeader className="px-[35px] py-[30px]">
                    <CardTitle className="text-[20px] text-[#212131] font-bold">
                      Exemplary Collaboration!
                    </CardTitle>
                    <CardDescription className="text-[#424255] text-[14px] text-justify">
                      The level of professionalism and dedication displayed by
                      this construction company's team is truly remarkable. Not
                      only did they deliver stunning end results, but they also
                      provided a seamless and collaborative working experience
                      from start to finish of the project. Collaborating with
                      this construction company was the right decision for every
                      one of our projects.
                    </CardDescription>
                    <div className="text-[16px] text-[#212131] font-medium">
                      Emily Johnson,{" "}
                      <span className="text-[#ED3237]">
                        Bekasi Toll Project (2021)
                      </span>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-[621px] h-[183px] rounded-[12px] bg-[#FFFFFF] border-[0.5px] border-[#7374C5]">
                  <CardHeader className="px-[35px] py-[15px]">
                    <CardTitle className="text-[20px] text-[#212131] font-bold">
                      Elevating Construction Standards
                    </CardTitle>
                    <CardDescription className="text-[#424255] text-[14px] text-justify">
                      Working with this company raised the bar for construction
                      excellence. Their meticulous attention to detail and
                      unwavering commitment ensured flawless execution from
                      start to finish, making them instrumental in achieving our
                      project goals.
                    </CardDescription>
                    <div className="text-[16px] text-[#212131] font-medium">
                      Natalie,{" "}
                      <span className="text-[#ED3237]">
                        Bandung Residential Complex (2023)
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>

          <div id="item3" className="carousel-item w-[1110px]">
            <div className="flex flex-row gap-9">
              <div className="w-[441px] h-[476px] rounded-[10px] bg-[#1F204C] border-1 py-[38px] px-[45px] ">
                <img
                  className="h-[400px] w-[350px]"
                  src="/client2.jpg"
                  width={0}
                  height={0}
                />
              </div>
              <div className="grid grid-cols-1 gap-5 mb-[87px]">
                <Card className="w-[621px] h-[231px] rounded-[12px] bg-[#FFFFFF] border-[0.5px] border-[#7374C5]">
                  <CardHeader className="px-[35px] py-[30px]">
                    <CardTitle className="text-[20px] text-[#212131] font-bold">
                      Exemplary Collaboration!
                    </CardTitle>
                    <CardDescription className="text-[#424255] text-[14px] text-justify">
                      The level of professionalism and dedication displayed by
                      this construction company's team is truly remarkable. Not
                      only did they deliver stunning end results, but they also
                      provided a seamless and collaborative working experience
                      from start to finish of the project. Collaborating with
                      this construction company was the right decision for every
                      one of our projects.
                    </CardDescription>
                    <div className="text-[16px] text-[#212131] font-medium">
                      Emily Johnson,{" "}
                      <span className="text-[#ED3237]">
                        Bekasi Toll Project (2021)
                      </span>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-[621px] h-[183px] rounded-[12px] bg-[#FFFFFF] border-[0.5px] border-[#7374C5]">
                  <CardHeader className="px-[35px] py-[15px]">
                    <CardTitle className="text-[20px] text-[#212131] font-bold">
                      Elevating Construction Standards
                    </CardTitle>
                    <CardDescription className="text-[#424255] text-[14px] text-justify">
                      Working with this company raised the bar for construction
                      excellence. Their meticulous attention to detail and
                      unwavering commitment ensured flawless execution from
                      start to finish, making them instrumental in achieving our
                      project goals.
                    </CardDescription>
                    <div className="text-[16px] text-[#212131] font-medium">
                      Natalie,{" "}
                      <span className="text-[#ED3237]">
                        Bandung Residential Complex (2023)
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>

          <div id="item4" className="carousel-item w-[1110px]">
            <div className="flex flex-row-reverse gap-9">
              <div className="w-[441px] h-[476px] rounded-[10px] bg-[#1F204C] border-1 py-[38px] px-[45px] ">
                <img
                  className="h-[400px] w-[350px]"
                  src="/client2.jpg"
                  width={0}
                  height={0}
                />
              </div>
              <div className="grid grid-cols-1 gap-5 mb-[87px]">
                <Card className="w-[621px] h-[231px] rounded-[12px] bg-[#FFFFFF] border-[0.5px] border-[#7374C5]">
                  <CardHeader className="px-[35px] py-[30px]">
                    <CardTitle className="text-[20px] text-[#212131] font-bold">
                      Exemplary Collaboration!
                    </CardTitle>
                    <CardDescription className="text-[#424255] text-[14px] text-justify">
                      The level of professionalism and dedication displayed by
                      this construction company's team is truly remarkable. Not
                      only did they deliver stunning end results, but they also
                      provided a seamless and collaborative working experience
                      from start to finish of the project. Collaborating with
                      this construction company was the right decision for every
                      one of our projects.
                    </CardDescription>
                    <div className="text-[16px] text-[#212131] font-medium">
                      Emily Johnson,{" "}
                      <span className="text-[#ED3237]">
                        Bekasi Toll Project (2021)
                      </span>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="w-[621px] h-[183px] rounded-[12px] bg-[#FFFFFF] border-[0.5px] border-[#7374C5]">
                  <CardHeader className="px-[35px] py-[15px]">
                    <CardTitle className="text-[20px] text-[#212131] font-bold">
                      Elevating Construction Standards
                    </CardTitle>
                    <CardDescription className="text-[#424255] text-[14px] text-justify ">
                      Working with this company raised the bar for construction
                      excellence. Their meticulous attention to detail and
                      unwavering commitment ensured flawless execution from
                      start to finish, making them instrumental in achieving our
                      project goals.
                    </CardDescription>
                    <div className="text-[16px] text-[#212131] font-medium">
                      Natalie,{" "}
                      <span className="text-[#ED3237]">
                        Bandung Residential Complex (2023)
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
}
