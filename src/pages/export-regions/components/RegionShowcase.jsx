import React, { useState } from "react";
import { Clock, Ship, TrendingUp, Check } from "lucide-react";

import NetherlandsImage from "../../../assets/Netherlands.jpg";
import MiddleEastImage from "../../../assets/Middle East.jpg";

export default function RegionShowcase() {
  const [active, setActive] = useState(0);

  const regions = [
    {
      name: "Netherlands",
      flag: "🇳🇱",
      status: "Active Market",
      statusColor: "#22c55e",
      statusBg: "#f0fdf4",
      accentColor: "#15803d",
      description:
        "Our primary and most established export destination. The Netherlands serves as our gateway to European markets with strong logistics infrastructure and high demand for premium roses.",
      highlights: [
        "Direct flights from Addis Ababa to Amsterdam",
        "Established distribution networks",
        "Year-round consistent demand",
        "Premium pricing for Ethiopian roses",
      ],
      stats: [
        { label: "Transit Time", value: "8–12 hrs", icon: Clock },
        { label: "Frequency", value: "Daily", icon: Ship },
        { label: "Volume", value: "High", icon: TrendingUp },
      ],
      image: NetherlandsImage,
    },
    {
      name: "Middle East",
      flag: "🇦🇪",
      status: "Active Market",
      statusColor: "#22c55e",
      statusBg: "#f0fdf4",
      accentColor: "#15803d",
      description:
        "Strategic target market with high purchasing power and strong demand for luxury flowers. UAE and Saudi Arabia present significant opportunities for premium rose exports.",
      highlights: [
        "High-value market potential",
        "Proximity advantage",
        "Luxury segment demand",
        "Growing floriculture market",
      ],
      stats: [
        { label: "Transit Time", value: "4–6 hrs", icon: Clock },
        { label: "Frequency", value: "Target: Daily", icon: Ship },
        { label: "Volume", value: "Proj. High", icon: TrendingUp },
      ],
      image: MiddleEastImage,
    },
  ];

  const region = regions[active];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">

      {/* Tab switcher */}
      <div className="flex gap-2 mb-10 p-1 bg-gray-100 rounded-2xl w-fit">
        {regions.map((r, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
            style={{
              background: active === i ? "#14482E" : "transparent",
              color: active === i ? "#fff" : "#6b7280",
              boxShadow: active === i ? "0 2px 12px rgba(20,72,46,0.18)" : "none",
            }}
          >
            <span style={{ fontSize: 18 }}>{r.flag}</span>
            {r.name}
          </button>
        ))}
      </div>

      {/* Main split layout */}
      <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl" style={{ minHeight: 520 }}>

        {/* Left — full bleed image */}
        <div className="relative" style={{ minHeight: 340 }}>
          <img
            src={region.image}
            alt={region.name}
            className="w-full h-full object-cover transition-all duration-700"
            style={{ position: "absolute", inset: 0 }}
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)" }}
          />

          {/* Bottom-left text on image */}
          <div className="absolute bottom-0 left-0 p-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
              style={{ background: region.statusBg, color: region.accentColor }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: region.statusColor }}
              />
              {region.status}
            </div>
            <div className="text-white text-4xl font-bold mb-1 flex items-center gap-3">
              <span style={{ fontSize: 40 }}>{region.flag}</span>
              {region.name}
            </div>
          </div>

          {/* Stat strip at very bottom overlaying the image */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ background: "rgba(20,72,46,0.88)", backdropFilter: "blur(6px)" }}
          >
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {region.stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="px-5 py-4 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-green-300" />
                      <span className="text-green-200 text-xs">{stat.label}</span>
                    </div>
                    <span className="text-white text-sm font-bold">{stat.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right — details panel */}
        <div className="bg-white flex flex-col justify-center px-10 py-12">
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            {region.description}
          </p>

          <div
            className="rounded-2xl p-6"
            style={{ background: "#f8fdf9", border: "1px solid #d1fae5" }}
          >
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#14482E" }}
            >
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {region.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "#14482E" }}
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {region.stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col gap-2 rounded-xl p-4"
                  style={{ background: "#f8fdf9", border: "1px solid #d1fae5" }}
                >
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4" style={{ color: "#14482E" }} />
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#14482E" }}>
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-gray-800 text-base font-bold">{stat.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom region switcher dots */}
      <div className="flex justify-center gap-2 mt-6">
        {regions.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: active === i ? 24 : 8,
              height: 8,
              background: active === i ? "#14482E" : "#d1d5db",
            }}
          />
        ))}
      </div>

    </section>
  );
}