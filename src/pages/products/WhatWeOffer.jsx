import React from "react";
import HeroSection from "./components/HeroSection";
import VarietiesSection from "./components/VarietiesSection.jsx";
import RoseVarietiesSection from "./components/RoseVarietiesSection";
import ServicesSection from "./components/ServicesSection";
import QualityStandardsSection from "./components/QualityStandardsSection";
import CTASection from "./components/CTASection";

export default function WhatWeOffer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
       <VarietiesSection />
      <RoseVarietiesSection />
      <ServicesSection />
      <QualityStandardsSection />
      <CTASection />
    </div>
  );
}