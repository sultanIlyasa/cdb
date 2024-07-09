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
      const endpoint = 'http://localhost:4000/api/pages/slug/product-kemasan';
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
