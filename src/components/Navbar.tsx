"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function Navbar() {
  const [isPressed, setIsPressed] = React.useState(true);

  const handleClickButton = () => {
    setIsPressed(!isPressed);
  };

  return (
    <header className="py-4 w-full shadow-lg z-[100] sticky top-0">
      <div className="flex justify-between items-center mx-auto w-[90%] max-h-24 ">
        <Link href={"/"} className="flex gap-2">
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
        <div className="md:flex justify-center items-center gap-2 md:gap-4 hidden">
          <Link
            href={"/produk-kami"}
            className="hover:underline-offset-8 hover:underline"
          >
            Produk kami
          </Link>
          <Link
            href={"/produk-kami"}
            className="hover:underline-offset-8 hover:underline"
          >
            Tentang kami
          </Link>
          <Link
            href={"/produk-kami"}
            className="hover:underline-offset-8 hover:underline"
          >
            Kontak kami
          </Link>
        </div>
        <div className=" md:hidden block">
          <button
            tabIndex={0}
            role="button"
            onClick={() => handleClickButton()}
            className=" btn btn-ghost  lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <div
            className={`absolute ${
              isPressed ? "flex" : "hidden"
            } top-24 right-0 flex-col w-full p-10 gap-4 background-white bg-[#1F204C]`}
          >
            <Link href={"/produk-kami"} className="btn  w-full">
              Produk kami
            </Link>
            <Link href={"/produk-kami"} className="btn  w-full">
              Tentang kami
            </Link>
            <Link href={"/produk-kami"} className="btn  w-full">
              Kontak kami
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="navbar bg-[#F5F5F5] lg:px-[70px] py-[10px] sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"./"}>Home</Link>
              </li>
              <li>
                <Link href={"./product"}>Our Product</Link>
              </li>
              <li>
                <Link href={"./about"}>About Us</Link>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="btn btn-ghost hover:bg-transparent">
            <div className="">
              <Image src="/cdb.png" width={67} height={45} alt={"logo"} />
            </div>
            <div className="">
              <h2 className="text-[#000000] text-[16px] text-left mb-1 mt-1">
                PT. Cahaya Dua Berlian
              </h2>
              <p className="text-[#666666] text-[12px] text-left font-light">
                Konstruksi & Percetakan
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-[#3E4095]">
            <li>
              <Link href={"./"}>Home</Link>
            </li>
            <li>
              <Link href={"./product"}>Our Product</Link>
            </li>
            <li>
              <Link href={"./about"}>About Us</Link>
            </li>
            <li>
              <Link href="/contact">
                <span> Contact Us </span>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </header>
  );
}
