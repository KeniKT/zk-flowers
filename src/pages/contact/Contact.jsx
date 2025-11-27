import React from "react";
import HeroSection from "./components/HeroSection";
import ContactMethods from "./components/ContactMethods";
import ContactFormSection from "./components/ContactFormSection";
import FAQSection from "./components/FAQSection";
import SocialMediaSection from "./components/SocialMediaSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      <ContactMethods />
      <ContactFormSection />
      <FAQSection />
      <SocialMediaSection />
    </div>
  );
}