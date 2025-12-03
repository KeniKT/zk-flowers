import React from "react";
import { Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative text-white py-24 px-4" style={{ backgroundColor: '#14482E' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-8 h-8" style={{ color: '#4ade80' }} />
          <span className="text-sm tracking-wider" style={{ color: '#4ade80' }}>GET IN TOUCH</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Our Export Team</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
          Ready to source premium Ethiopian roses? Our export specialists are here to help you find the perfect varieties for your market requirements.
        </p>
      </div>
    </section>
  );
}