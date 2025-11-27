import React from "react";
import { Handshake, Globe, TrendingUp, Star } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { value: "50+", label: "Active Partners", icon: Handshake },
    { value: "15", label: "Countries", icon: Globe },
    { value: "12", label: "Years Average", icon: TrendingUp },
    { value: "98%", label: "Satisfaction Rate", icon: Star }
  ];

  return (
    <section className="relative text-white py-24 px-4" style={{ backgroundColor: '#14482E' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Handshake className="w-8 h-8" style={{ color: '#4ade80' }} />
          <span className="text-sm tracking-wider" style={{ color: '#4ade80' }}>PARTNERSHIPS</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Partners</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
          Building lasting relationships with distributors, retailers, and logistics providers worldwide
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <stat.icon className="w-6 h-6 mb-2" style={{ color: '#4ade80' }} />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}