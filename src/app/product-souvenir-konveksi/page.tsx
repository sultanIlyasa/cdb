import { SouvenirKonveksiCarousel } from "@/components/SouvenirKonveksiCarousel";
import { SouvenirKonveksiProduct } from "@/components/SouvenirKonveksiProduct";
"use client"
import React, { useState, useEffect } from 'react';
import { fetchData } from "../../lib/api/fetchData";
import { Page } from '../../lib/interface/interface';

export default function ProductSouvenirKonveksiPage() {
  
  const [data, setData] = useState<Page | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductPage = async () => {
      const endpoint = 'http://localhost:4000/api/pages/slug/product-souvenir';
      const pageProduct = await fetchData<Page>(endpoint, setError);
      setData(pageProduct);
    };

    fetchProductPage();
  }, []);
  return (
    <main className="">
      <SouvenirKonveksiCarousel />
      <SouvenirKonveksiProduct />
    </main>
  );
}
