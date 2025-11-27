import React from "react";

import HeroSection from "./components/HeroSection.jsx";
import StorySection from "./components/StorySection.jsx";
import MissionVisionValues from "./components/MissionVisionValues.jsx";
import ProductionCapabilities from "./components/ProductionCapabilities.jsx";
import MarketPresence from "./components/MarketPresence.jsx";
import VarietiesSection from "./components/VarietiesSection.jsx";
import CommunityImpact from "./components/CommunityImpact.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";

import CTASection from "./components/CTASection.jsx";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      <StorySection />
      <MissionVisionValues />
      <ProductionCapabilities />
      <MarketPresence />
      <VarietiesSection />
      <CommunityImpact />
      <WhyChooseUs />
   
      <CTASection />
    </div>
  );
}
