import React from "react";
import { CardFooter, CardContent, Card } from "@/components/ui/card";
import { Icon } from "react-icons-kit";
import exp from "constants";
import Image from "next/image";

const Footer = () => {
  return (
    <Card>
      <CardFooter className="bg-indigo-900 p-4 flex flex-col grid md:grid-cols-2 lg:grid-cols-2">
        <CardContent>
          <div className="">
            <div>
              <a className="btn btn-ghost hover:bg-transparent">
                <div className="">
                  <Image src="/cdb.png" width={67} height={45} alt={"logo"} />
                </div>
                <div className="">
                  <h2 className="font-montserrat text-base text-white text-[16px] text-left">
                    PT. Cahaya Dua Berlian
                  </h2>
                  <p className="font-montserrat font-light text-base text-white text-[12px] text-left">
                    Printing & Construction
                  </p>
                </div>
              </a>
            </div>
          </div>
        </CardContent>
        <CardContent>
          <div className="font-montserrat font-light text-base text-white text-[12px] text-right">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Our Product</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </CardContent>

        <CardContent>
          <div className="font-montserrat font-light text-base text-white text-[12px] text-left">
            <p>Phone : 021-89452944</p>
            <p>Address : Jln. Letnan Marsaid II No 14. Margajaya, Bekasi </p>
            <p>Email : marketing@cahayaduaberlian.com</p>
          </div>
        </CardContent>
      </CardFooter>
      <CardContent className="bg-indigo-900">
        <hr className=" bg-indigo-900 border-t border-gray-300 " />
        <p className="text-white">© 2024 Copyright. All rights reserved.</p>
      </CardContent>
    </Card>
  );
};

export default Footer;
