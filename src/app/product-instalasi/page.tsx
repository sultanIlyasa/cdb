"use client"
import React, { useState, useEffect } from 'react';
import { fetchData } from "../../lib/api/fetchData";
import { Page } from '../../lib/interface/interface';
import { InstalasiCarousel } from "@/components/InstalasiCarousel";
import { InstalasiProduct } from "@/components/InstalasiProduct";

export default function ProductInstalasiPage() {
  const [data, setData] = useState<Page | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstalasiPage = async () => {
      const endpoint = 'http://localhost:4000/api/pages/slug/product-instalasi';
      const dataFetch = await fetchData<Page>(endpoint, setError);
      setData(dataFetch);
    };

    fetchInstalasiPage();
  }, []);

  return (
    <main className="">
      <InstalasiCarousel />
      <InstalasiProduct />
    </main>
  );
}
