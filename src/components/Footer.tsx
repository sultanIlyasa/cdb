import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1F204C] text-white">
      <div className="flex w-[90%] flex-col mx-auto py-10 gap-4">
        <div className="flex gap-4">
          <Link href={"/"} className="flex gap-4">
            <Image
              src="/cdb.png"
              alt={"logo"}
              width={67}
              height={45}
              className="w-fit"
            />

            <div className="flex flex-col gap-1 items-start justify-center">
              <h5 className="font-bold">PT. Cahaya Dua Berlian</h5>
              <p>Konstruksi & Percetakan</p>
            </div>
          </Link>
        </div>
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-4">
            <p>Phone : 021-89452944</p>
            <p>Address : Jln. Letnan Marsaid II No 14. Margajaya, Bekasi </p>
            <p>Email : marketing@cahayaduaberlian.com</p>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col gap-4">
              <li className="hover:underline">
                <Link href="/">
                  <span>Home</span>
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/product">
                  <span>Our Product</span>
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/about">
                  <span>About Us</span>
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/contact">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <p className="text-white">© 2024 Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
