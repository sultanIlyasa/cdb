import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-[#F5F5F5] lg:px-[70px] py-[10px] sticky top-0 z-50">
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
                <a>Our Product</a>
              </li>
              <li>
                <Link href={"./about"}>About Us</Link>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>

          <a className="btn btn-ghost hover:bg-transparent">
            <div className="">
                <Image src="/cdb.png" width={67} height={45} alt={"logo"} />
            </div>
            <div className="">
              <h2 className="text-[#000000] text-[16px] text-left">
                PT. Cahaya Dua Berlian
              </h2>
              <p className="text-[#666666] text-[12px] text-left">
                Printing & Construction
              </p>
            </div>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-[#3E4095]">
            <li>
              <Link href={"./"}>Home</Link>
            </li>
            <li>
              <a>Our Product</a>
            </li>
            <li>
              <Link href={"./about"}>About Us</Link>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
