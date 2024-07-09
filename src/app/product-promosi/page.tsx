"use client"
import React, { useState, useEffect } from 'react';
import { fetchData } from "../../lib/api/fetchData";
import { Page } from '../../lib/interface/interface';
import { PromosiCarousel } from "@/components/PromosiCarousel";
import { PromosiProduct } from "@/components/PromosiProduct";

export default function ProductPromosiPage() {

  const [data, setData] = useState<Page | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPromosiPage = async () => {
      const endpoint = 'http://localhost:4000/api/pages/slug/product-promosi';
      const dataFetch = await fetchData<Page>(endpoint, setError);
      setData(dataFetch);
    };

    fetchPromosiPage();
  }, []);
  
  return (
    <main className="">
      <PromosiCarousel />
      <PromosiProduct />
    </main>
  );
}
