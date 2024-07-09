import React from "react";
import { CardFooter, CardContent, Card } from "@/components/ui/card";
import { Icon } from "react-icons-kit";
import exp from "constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Card>
      <CardFooter className=" bg-[#1F204C]  p-4 flex-col grid md:grid-cols-2 lg:grid-cols-2">
        <CardContent className="px-4 py-0 ">
          <div>
            <a className="bg-[#1F204C] btn btn-ghost hover:bg-transparent">
              <div className="">
                <Image src="/cdb.png" width={67} height={45} alt={"logo"} />
              </div>
              <div className="">
                <h2 className="font-montserrat text-base text-white text-[16px] text-left">
                  PT. Cahaya Dua Berlian
                </h2>
                <p className="font-montserrat font-light text-base text-white text-[12px] text-left">
                  Konstruksi & Percetakan
                </p>
              </div>
            </a>
          </div>
          <CardContent>
            <div className="font-montserrat font-light text-base text-white text-[12px] text-left">
              <p>Phone : 021-89452944</p>
              <p>Address : Jln. Letnan Marsaid II No 14. Margajaya, Bekasi </p>
              <p>Email : marketing@cahayaduaberlian.com</p>
            </div>
          </CardContent>
        </CardContent>
        <CardContent className="px-8 py-0">
          <div className="font-montserrat font-light text-base text-white text-[12px] text-right">
            <ul>
              <li>
                <Link href="/">
                  <span className="block mb-1"> Home </span>
                </Link>
              </li>
              <li>
                <Link href="/product">
                  <span className="block mb-1"> Our Product </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="block mb-1"> About Us </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="block mb-1"> Contact Us </span>
                </Link>
              </li>
            </ul>
          </div>
        </CardContent>
      </CardFooter>
      <CardContent className="bg-[#1F204C] px-12 ">
        <hr className=" bg-indigo-900 border-t border-gray-300 " />
        <p className="text-white">© 2024 Copyright. All rights reserved.</p>
      </CardContent>
    </Card>
  );
};

export default Footer;
