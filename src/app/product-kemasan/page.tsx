"use client"
import React, { useState, useEffect } from 'react';
import { fetchData } from "../../lib/api/fetchData";
import { Page } from '../../lib/interface/interface';
import { KemasanCarousel } from "@/components/KemasanCarousel";
import { KemasanProduct } from "@/components/KemasanProduct";


export default function ProductKemasanPage() {

  const [data, setData] = useState<Page | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchKemansanPage = async () => {
      const endpoint = 'http://localhost:3000/api/pages/668bb16754e5beab663e25d0?locale=undefined&draft=false&depth=1';
      const dataFetch = await fetchData<Page>(endpoint, setError);
      setData(dataFetch);
    };

    fetchKemansanPage();
  }, []);

  return (
    <main className="">
      <KemasanCarousel />
      <KemasanProduct />
    </main>
  );
}
