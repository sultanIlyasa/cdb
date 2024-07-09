"use client"
import React, { useState, useEffect } from 'react';
import { fetchData } from "../lib/api/fetchData";
import { Page } from "../lib/interface/interface";
import { OurSpeciality } from "@/pages/ourspeciality";
import Stats from "@/pages/stats";
import Faq from "@/pages/faq";
import Wcu from "@/pages/wcu";
import { Banner } from "@/components/Banner";
import Slideshow from "@/components/slideshow";

export default function Home() {
    const [data, setData] = useState<Page | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchHomePageData = async () => {
        const endpoint = 'http://localhost:3000/api/pages/668bb16754e5beab663e25d0?locale=undefined&draft=false&depth=1';
        const homePageData = await fetchData<Page>(endpoint, setError);
        setData(homePageData);
      };
  
      fetchHomePageData();
    }, []);
  return (
    <main className="">
      <Banner title={data?.body[0].header.title} slogan={data?.body[0].header.description} button1={data?.body[0].links[0].link.title} button2={data?.body[0].links[1].link.title} hrefbutton1={data?.body[0].links[0].link.href} hrefbutton2={data?.body[0].links[1].link.href}/>
      <OurSpeciality title={data?.body[1].header.title} subTitle={data?.body[1].header.subTitle} card1Title={data?.body[1].cards[0].card.title}
        card1desc={data?.body[1].cards[0].card.description} card1titlerod1={data?.body[1].cards[0].card.links[0].link.title} 
        card1titlerod2={data?.body[1].cards[0].card.links[1].link.title} card1titlerod3={data?.body[1].cards[0].card.links[2].link.title}
        card2Title={data?.body[1].cards[1].card.title}
        card2desc={data?.body[1].cards[1].card.description} card2titlerod1={data?.body[1].cards[1].card.links[0].link.title} 
        card2titlerod2={data?.body[1].cards[1].card.links[1].link.title} card2titlerod3={data?.body[1].cards[1].card.links[2].link.title}
      />
      <Stats />
      <Wcu />
      <Slideshow />
      <Faq />
    </main>
  );
}