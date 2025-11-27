import React from "react";
import HeroSection from "./components/HeroSection";
import AboutIntro from "./components/AboutIntro";
import ProductsIntro from "./components/ProductsIntro";
import ProcessIntro from "./components/ProcessIntro";
import PartnersIntro from "./components/PartnersIntro";
import ExportIntro from "./components/ExportIntro";
import ContactIntro from "./components/ContactIntro";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      <StatsSection />
      <AboutIntro />
      <ProductsIntro />
      <ProcessIntro />
      <ExportIntro />
      <PartnersIntro />
      <ContactIntro />
      <CTASection />
    </div>
  );
}