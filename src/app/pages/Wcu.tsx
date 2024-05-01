import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "react-icons-kit";
import { ic_thumb_up_outline } from "react-icons-kit/md/ic_thumb_up_outline";
const wcu = () => {
  return (
    <main>
      <div className="flex flex-col justify-center grid md:grid-cols-2 lg:grid-cols-2 gap-4">
        <Card className="border-none">
          <CardHeader className="flex flex-row items-center">
            <CardTitle
              className="font-montserrat text-base font-semibold leading-[24.38px] text-left"
              style={{ color: "red" }}
            >
              PARTNER WITH THE BEST
            </CardTitle>
          </CardHeader>
          <CardContent className="font-montserrat text-4xl font-bold leading-[34.13px] text-left">
            <div className="text-xl">
              Why Choose Us? <br />
              <span style={{ color: "#7374C5" }}>Because Quality Matters.</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col justify-center grid md:grid-cols-2 lg:grid-cols-2 gap-4">
        <Card>
          <div className="flex flex-col justify-center grid md:grid-cols-1 lg:grid-cols-1 gap-4">
            <div className="flex flex-col justify-center grid md:grid-cols-2 lg:grid-cols-2 ">
              <div className="">
                <Icon
                  icon={ic_thumb_up_outline}
                  size={24}
                  style={{ color: "#7374C5" }}
                />
                <CardContent className="font-cabin text-base font-normal leading-[26px] text-justify">
                  <span
                    className="font-montserrat text-base font-bold leading-[28px] text-left "
                    style={{ color: "#7374C5" }}
                  >
                    Expertise
                  </span>
                  <br />
                  Years of experience in printing and construction equip us to
                  handle complex projects confidently.
                </CardContent>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col justify-center grid md:grid-cols-2 lg:grid-cols-2 ">
            <div className="">
              <Icon
                icon={ic_thumb_up_outline}
                size={24}
                style={{ color: "#7374C5" }}
              />
              <CardContent className="font-cabin text-base font-normal leading-[26px] text-justify">
                <span
                  className="font-montserrat text-base font-bold leading-[28px] text-left "
                  style={{ color: "#7374C5" }}
                >
                  Customer Focus
                </span>
                <br />
                Your satisfaction is paramount. From inception to delivery, we
                collaborate closely to bring your vision to life.
              </CardContent>
            </div>
          </div>
        </Card>

        <Card>
          <div className="   ">
            <div className="">
              <Icon
                icon={ic_thumb_up_outline}
                size={24}
                style={{ color: "#7374C5" }}
              />
              <CardContent className="font-cabin text-base font-normal leading-[26px] text-justify">
                <span
                  className="font-montserrat text-base font-bold leading-[28px] text-left "
                  style={{ color: "#7374C5" }}
                >
                  Quality Assurance
                </span>
                <br />
                We uphold rigorous quality standards, ensuring excellence in
                every project we undertake.
              </CardContent>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col justify-center grid md:grid-cols-2 lg:grid-cols-2 ">
            <div className="">
              <Icon
                icon={ic_thumb_up_outline}
                size={24}
                style={{ color: "#7374C5" }}
              />
              <CardContent className="font-cabin text-base font-normal leading-[26px] text-justify">
                <span
                  className="font-montserrat text-base font-bold leading-[28px] text-left "
                  style={{ color: "#7374C5" }}
                >
                  Proven Success
                </span>
                <br />
                Our track record speaks for itself, with a history of successful
                projects and satisfied clients.
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
      <br />

      <div className="ratio flex justify-center items-center ">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xNRJwmlRBNU?si=xv37iJGEiEhkuUPe"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};

export default wcu;
