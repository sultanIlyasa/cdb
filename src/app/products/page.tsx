import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const Products = () => {
  return (
    <div>
      <>
        <div className="container mx-auto ">
          <header className="text-center">
            <h1 className="text-[#ED3237] font-semibold mb-2">
              JASA YANG KAMI TAWARKAN
            </h1>
            <p className="mt-1 font-bold text-2xl text-[#3E4095] ">
              Konstruksi
            </p>
          </header>
          <section className="grid sm:grid-cols-2 mx-10 grid-cols-1">
            <Card className="flex w-[424] h-[180] mt-4 mx-auto">
              <CardContent className="mt-10">
                <CardHeader>Desain</CardHeader>
              </CardContent>
              <CardContent className="mt-3 p-1">
                <CardDescription>
                  Membuat desain yang sesuai dengan keinginan Anda.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex w-[424] h-[180] mt-4 mx-auto">
              <CardContent className="mt-10">
                <CardHeader>Renovasi</CardHeader>
              </CardContent>
              <CardContent className="mt-3 p-1">
                <CardDescription>
                  Membuat bangunan Anda terlihat lebih baru dan modern.
                </CardDescription>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="bg-[#FDECED] px-[150px]">
          <header className="text-center">
            <h1 className="text-[#ED3237] font-semibold mb-2">
              JASA YANG KAMI TAWARKAN
            </h1>
            <p className="mt-1 font-bold text-2xl text-[#3E4095] ">
              Percetakan
            </p>
          </header>
          <section className="grid sm:grid-cols-2 mx-10 grid-cols-1 py-10">
            <Card className=" w-[424] h-[180] mt-4 mx-auto ">
              <CardContent className="mt-10">
                <CardHeader>Desain</CardHeader>
              </CardContent>
              <CardContent className="mt-3 p-1">
                <CardDescription>
                  Membuat desain yang sesuai dengan keinginan Anda.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className=" w-[424] h-[180] mt-4 mx-auto">
              <CardContent className="mt-10">
                <CardHeader>Renovasi</CardHeader>
              </CardContent>
              <CardContent className="mt-3 p-1">
                <CardDescription>
                  Membuat bangunan Anda terlihat lebih baru dan modern.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className=" w-[424] h-[180] mt-4 mx-auto">
              <CardContent className="mt-10">
                <CardHeader>Renovasi</CardHeader>
              </CardContent>
              <CardContent className="mt-3 p-1">
                <CardDescription>
                  Membuat bangunan Anda terlihat lebih baru dan modern.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className=" w-[424] h-[180] mt-4 mx-auto">
              <CardContent className="mt-10">
                <CardHeader>Renovasi</CardHeader>
              </CardContent>
              <CardContent className="mt-3 p-1">
                <CardDescription>
                  Membuat bangunan Anda terlihat lebih baru dan modern.
                </CardDescription>
              </CardContent>
            </Card>
          </section>
        </div>
      </>
    </div>
  );
};

export default Products;
