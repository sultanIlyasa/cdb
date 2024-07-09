"use client"
import React, { useState, useEffect } from 'react';
import { fetchData } from "../../lib/api/fetchData";
import { Page } from '../../lib/interface/interface';
import { PerlengkapanKantorCarousel } from "@/components/PerlengkapanKantorCarousel";
import { PerlengkapanKantorProduct } from "@/components/PerlengkapanKantorProduct";

export default function ProductPerlengkapanKantorPage() {
  const [data, setData] = useState<Page | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPerlengkapanPage = async () => {
      const endpoint = 'http://localhost:4000/api/pages/slug/product-perlengkapan-kantor';
      const dataFetch = await fetchData<Page>(endpoint, setError);
      setData(dataFetch);
    };

    fetchPerlengkapanPage();
  }, []);
  return (
    <main className="">
      <PerlengkapanKantorCarousel />
      <PerlengkapanKantorProduct />
    </main>
  );
}
