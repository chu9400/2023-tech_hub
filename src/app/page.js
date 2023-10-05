"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import ImageContent from "@/components/ImageContent";
import ImageText from "@/components/ImageText";
import Card from "@/components/Card";
import Banner from "@/components/Banner";
import TextContent from "@/components/TextContent";
import Footer from "@/components/Footer";
import lenis from "@/utils/lenis";

export default function Home() {
  
  useEffect(() => {
    lenis();
  }, [])

  return (
    <>
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