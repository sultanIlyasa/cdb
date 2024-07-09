"use client"
import React, { useState, useEffect } from 'react';
import { fetchData } from "../../lib/api/fetchData";
import { Page } from '../../lib/interface/interface';
import { Construction } from "@/components/Construction";
import { Printing } from "@/components/Printing";

export default function ProductMainPage() {
  const [data, setData] = useState<Page | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductMainPage = async () => {
      const endpoint = 'http://localhost:4000/api/pages/slug/product';
      const dataFetch = await fetchData<Page>(endpoint, setError);
      setData(dataFetch);
    };

    fetchProductMainPage();
  }, []);
  return (
    <main className="">
      <Construction />
      <Printing />
    </main>
  );
}
