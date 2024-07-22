"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Icon } from "react-icons-kit";
import { androidCall } from "react-icons-kit/ionicons/androidCall";
import { envelopeO } from "react-icons-kit/fa/envelopeO";
import { mapMarker } from "react-icons-kit/fa/mapMarker";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

const Contact = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToScroll: 3,
  };

  const items = [
    { imageUrl: "/images/client-1.png" },
    { imageUrl: "/images/client-2.png" },
    { imageUrl: "/images/client-3.png" },
    { imageUrl: "/images/client-4.png" },
    { imageUrl: "/images/client-5.png" },
    { imageUrl: "/images/client-6.png" },
    { imageUrl: "/images/client-7.png" },
    { imageUrl: "/images/client-8.png" },
    { imageUrl: "/images/client-9.png" },
    { imageUrl: "/images/client-10.png" },
    { imageUrl: "/images/client-11.png" },
    { imageUrl: "/images/client-12.png" },
    { imageUrl: "/images/client-13.png" },
    { imageUrl: "/images/client-14.png" },
  ];

  const imageStyles = {
    image1: { width: "250px", height: "auto" }, // Customize for image 1
    image2: { width: "300px", height: "150px" }, // Customize for image 2
    // Add more styles for other images as needed
  };

  return (
    <div>
      <>
        <div className="container mx-auto mb-14 lg:mb-16">
          <header className="text-center mx-auto my-6 sm:my-5 lg:my-9">
            <h1 className="text-[#ED3237] text-sm lg:text-xl leading-4 lg:leading-6 font-semibold mb-2 lg:mb-5">
              PARTNERSHIP
            </h1>
            <p className="font-bold text-lg lg:text-3xl leading-5 lg:leading-10 text-[#1F204C] mb-6 lg:mb-5">
              Berkolaborasi dengan kemitraan terkemuka di industri
            </p>
            <p className="text-sm lg:text-lg text-[#000000] text-justify sm:text-center ">
              Kami telah berkesempatan untuk bekerja sama dengan berbagai
              perusahaan, yang telah memperkaya perjalanan kami dan mendorong
              inovasi industri. Berkomitmen untuk keunggulan, kami menghargai
              setiap kesempatan yang dipercayakan kepada kami.
            </p>
          </header>
          <div className="py-10 px-12">
            <InfiniteMovingCards items={items} />
          </div>
        </div>

        <div className="pb-10 lg:mt-8 lg:py-10 lg:bg-[#EDEDF8] px-10 lg:px-[100px]">
          <header className="text-center hidden lg:block">
            <p className="font-bold text-2xl text-[#1F204C]">
              Apakah Anda tertarik untuk berkolaborasi bersama kami?
            </p>
          </header>
          <div className="lg:bg-[#FFFFFF] rounded-2xl justify-center sm:w-[700px] lg:w-[1196px] grid sm:grid-cols-5 lg:gap-2 mx-auto ">
            <div className="col-span-2 lg:m-2 py-5 lg:pt-10 px-5 lg:px-7 rounded-lg bg-[#7374C5] w-[360px] sm:w-full sm:h-[560px] lg:h-[667px] mx-auto relative overflow-hidden">
              <h1 className="text-[#FFFFFF] font-medium text-lg lg:text-2xl relative z-10">
                Kontak
              </h1>
              <div className="text-[#FFFFFF] font-medium text-sm relative z-10">
                <div className="mt-6 lg:mt-9 flex items-center">
                  <Icon icon={androidCall} style={{ color: "#FFFFFF" }} />
                  <p className="pl-5 text-xs lg:text-base">021-89452944</p>
                </div>
                <div className="mt-3 lg:mt-9 flex items-center">
                  <Icon
                    icon={envelopeO}
                    style={{ color: "#FFFFFF" }}
                    size={15}
                  />
                  <p className="pl-5 text-xs lg:text-base">
                    marketing@cahayaduaberlian.com
                  </p>
                </div>
                <div className="mt-3 lg:mt-9 flex items-center">
                  <Icon
                    icon={mapMarker}
                    style={{ color: "#FFFFFF" }}
                    size={20}
                  />
                  <p className="pl-5 text-xs lg:text-base">
                    Jln. Letnan Marsaid II No 14. Margajaya, Bekasi
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:my-2 bg-[#F2F2F2] lg:bg-white rounded-[10px]">
              <form className="my-5 lg:my-16 mx-5 lg:mx-12">
                <div className="lg:grid md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nama_depan"
                      className="block mb-0.5 text-sm font-semibold text-[#000000]"
                    >
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="pb-2 bg-transparent text-[#000000] text-sm border-b border-[#8D8D8D] w-11/12"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="mb-6 lg:mb-11">
                    <label
                      htmlFor="nama_belakang"
                      className="block mb-0.5 text-sm font-semibold text-[#000000]"
                    >
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="pb-2 bg-transparent text-[#000000] text-sm border-b border-[#8D8D8D] w-11/12"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div className="mb-6 lg:mb-11">
                    <label
                      htmlFor="email"
                      className="block mt-4 mb-0.5 text-sm font-semibold text-[#000000]"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="pb-2 bg-transparent text-[#000000] text-sm border-b border-[#8D8D8D] w-11/12"
                      placeholder="example@mail.com"
                      required
                    />
                  </div>
                  <div className="mb-6 lg:mb-11">
                    <label
                      htmlFor="nomor_telepon"
                      className="block mt-4 mb-0.5 text-sm font-semibold text-[#000000]"
                    >
                      Nomor Telepon
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="pb-2 bg-transparent text-[#000000] text-sm border-b border-[#8D8D8D] w-11/12"
                      placeholder="+620123456789"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6 lg:mb-11">
                  <label
                    htmlFor="pilih_jasa"
                    className="block mt-4 mb-0.5 text-sm font-semibold text-gray-900"
                  >
                    Pilih Jasa
                  </label>
                  <div className="flex pt-3">
                    <div className="flex items-center me-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="inline-radio"
                        className="ms-2 text-sm font-medium text-gray-900 "
                      >
                        Konstruksi
                      </label>
                    </div>
                    <div className="flex items-center me-4">
                      <input
                        id="inline-2-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="inline-2-radio"
                        className="ms-2 text-sm font-medium text-gray-900 "
                      >
                        Percetakan
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-6 lg:mb-11">
                  <label
                    htmlFor="pesan"
                    className="block mt-4 mb-0.5 text-sm font-semibold text-gray-900"
                  >
                    Pesan
                  </label>
                  <input
                    type="text"
                    id="text"
                    className="pb-2 text-[#000000] text-sm border-b border-[#8D8D8D] w-full bg-transparent "
                    placeholder="Tulis pesan Anda..."
                    required
                  />
                </div>
                <div className="grid justify-items-end mt-20 mr-7">
                  <div>
                    <button
                      type="submit"
                      className="justify-self-end text-white bg-[#3B71CA] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[15px] text-sm w-full sm:w-auto px-16 py-3 text-center"
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Contact;
