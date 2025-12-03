import React from "react";
import HeroSection from "./components/HeroSection";
import RegionShowcase from "./components/RegionShowcase";
import ExportAdvantages from "./components/ExportAdvantages";
import LogisticsQuality from "./components/LogisticsQuality";


export default function ExportRegions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      <RegionShowcase />
      <ExportAdvantages />
      <LogisticsQuality />
    
    </div>
  );
}