import React from "react";
import { Target, Sprout, TrendingUp, Users, Plane } from "lucide-react";

export default function HeroSection() {
  const operationalMetrics = [
    { label: "Farm Size", value: "22 ha", icon: Sprout },
    { label: "Daily Production", value: "50K+ stems", icon: TrendingUp },
    { label: "Workforce", value: "400+", icon: Users },
    { label: "Export Frequency", value: "Daily", icon: Plane }
  ];

  return (
    <section className="relative text-white py-24 px-4" style={{ backgroundColor: '#14482E' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-8 h-8" style={{ color: '#4ade80' }} />
          <span className="text-sm tracking-wider" style={{ color: '#4ade80' }}>OUR PROCESS</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">How We Work</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
          From seed to shipment: A commitment to quality, sustainability, and excellence at every step
        </p>
        
        {/* Quick Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {operationalMetrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <metric.icon className="w-6 h-6 mb-2" style={{ color: '#4ade80' }} />
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm text-gray-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}