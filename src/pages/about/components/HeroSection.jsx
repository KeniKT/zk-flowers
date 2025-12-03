import React from "react";
import { MapPin, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative text-white py-24 px-4" style={{ backgroundColor: '#14482E' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-8 h-8" style={{ color: '#4ade80' }} />
          <span className="text-sm tracking-wider" style={{ color: '#4ade80' }}>ABOUT US</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">ZK Flowers PLC</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
          Building partnerships. Growing excellence. Delivering beauty worldwide.
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22c55e' }}></div>
            <span>Debre Zeit (Bishoftu), Ethiopia - 1,900m altitude, 45km from Addis Ababa</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f59e0b' }}></div>
            <span>Established 2008</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3b82f6' }}></div>
            <span>300% Growth since establishment</span>
          </div>
        </div>
      </div>
    </section>
  );
}