import React from "react";
import HeroSection from "./components/HeroSection";
import PartnershipValues from "./components/PartnershipValues";
import PartnersShowcase from "./components/PartnersShowcase";
import BecomePartner from "./components/BecomePartner";
import PartnerBenefits from "./components/PartnerBenefits";


export default function OurPartners() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      <PartnershipValues />
      <PartnersShowcase />
      <BecomePartner />
      <PartnerBenefits />
      
    </div>
  );
}