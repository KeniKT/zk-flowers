import React from "react";
import HeroSection from "./components/HeroSection";
import GetInTouch from "./components/GetInTouch";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      <HeroSection />
      <GetInTouch />
    </main>
  );
}