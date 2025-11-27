import React from "react";
import { Flower2, ThermometerSun, Sparkles, Clock } from "lucide-react";

export default function HeroSection() {
  const specifications = [
    { label: "Growing Altitude", value: "~1,900m", icon: ThermometerSun },
    { label: "Farm Size", value: "22 Hectares", icon: Flower2 },
    { label: "Varieties", value: "10 Premium", icon: Sparkles },
    { label: "Vase Life", value: "10-15 Days", icon: Clock }
  ];

  return (
    <section className="relative text-white py-24 px-4" style={{ backgroundColor: '#14482E' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Flower2 className="w-8 h-8" style={{ color: '#4ade80' }} />
          <span className="text-sm tracking-wider" style={{ color: '#4ade80' }}>PREMIUM PRODUCTS</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">What We Offer</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
          Ten exceptional rose varieties and comprehensive services designed for the global flower trade
        </p>
        
        {/* Quick Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <spec.icon className="w-6 h-6 mb-2" style={{ color: '#4ade80' }} />
              <div className="text-2xl font-bold mb-1">{spec.value}</div>
              <div className="text-sm text-gray-300">{spec.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}