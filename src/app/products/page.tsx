"use client"
import React, { useState, useEffect } from 'react';
import { fetchData } from "../../lib/api/fetchData";
import { Page } from '../../lib/interface/interface';
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";




const Products = () => {  
  
  const [data, setData] = useState<Page | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductPage = async () => {
      const endpoint = 'http://localhost:3000/api/pages/668bb16754e5beab663e25d0?locale=undefined&draft=false&depth=1';
      const homePageData = await fetchData<Page>(endpoint, setError);
      setData(homePageData);
    };

    fetchProductPage();
  }, []);

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
