"use client"
import React, { useState, useEffect } from 'react';
import { fetchData } from "../../lib/api/fetchData";
import { Page } from '../../lib/interface/interface';
import { ClientsTestimonial } from "@/components/ClientsTestimonial";
import { Moto } from "@/components/Moto";
import Profile from "@/components/Profile";

export default function About() {

  const [data, setData] = useState<Page | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchaAboutPage = async () => {
      const endpoint = 'about';
      const dataFetch = await fetchData<Page>(endpoint, setError);
      setData(dataFetch);
    };

    fetchaAboutPage();
  }, []);

  return (
    <main className="">
      <Profile />
      <Moto />
      <ClientsTestimonial/>
    </main>
  );
}
