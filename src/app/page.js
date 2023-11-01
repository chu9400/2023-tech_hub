"use client";

import React, { useEffect } from "react";
import Skip from "@/components/Skip";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import ImageContent from "@/components/ImageContent";
import ImageText from "@/components/ImageText";
import Card from "@/components/Card";
import Banner from "@/components/Banner";
import TextContent from "@/components/TextContent";
import Footer from "@/components/Footer";
import lenis from "@/utils/lenis";
import link from "@/utils/link";

export default function Home() {
  
  useEffect(() => {
    lenis();
    link();
  }, [])

  return (
    <>
      <Skip />
      <Header />
      <main id="main" role="main">
        <Slider />
        <ImageContent />
        <ImageText />
        <Card />
        <Banner />
        <TextContent />
      </main>
      <Footer />
    </>
  )
}