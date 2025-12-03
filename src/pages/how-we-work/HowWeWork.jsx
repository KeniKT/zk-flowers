import React from "react";
import HeroSection from "./components/HeroSection";
import ProcessSection from "./components/ProcessSection";
import QualityStandards from "./components/QualityStandards";
import SustainabilitySection from "./components/SustainabilitySection";
import TechnologySection from "./components/TechnologySection";


export default function HowWeWork() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      <ProcessSection />
      <QualityStandards />
      <SustainabilitySection />
      <TechnologySection />
     
    </div>
  );
}