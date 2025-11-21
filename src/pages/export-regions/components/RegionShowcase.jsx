import React, { useState } from "react";
import { Clock, Ship, TrendingUp, Check } from "lucide-react";

export default function RegionShowcase() {
  const [selectedRegion, setSelectedRegion] = useState(0);

  const regions = [
    {
      name: "Netherlands",
      flag: "🇳🇱",
      status: "Active Market",
      statusColor: "#22c55e",
      description: "Our primary and most established export destination. The Netherlands serves as our gateway to European markets with strong logistics infrastructure and high demand for premium roses.",
      highlights: [
        "Direct flights from Addis Ababa to Amsterdam",
        "Established distribution networks",
        "Year-round consistent demand",
        "Premium pricing for Ethiopian roses"
      ],
      stats: {
        transitTime: "8-12 hours",
        frequency: "Daily",
        volume: "High"
      },
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Scandinavia",
      flag: "🇸🇪",
      status: "Developing Market",
      statusColor: "#f59e0b",
      description: "Rapidly growing market with increasing appreciation for premium Ethiopian roses. Strong demand from Sweden, Norway, Denmark, and Finland with excellent quality standards.",
      highlights: [
        "Growing market awareness",
        "Premium quality requirements",
        "Sustainable sourcing preferences",
        "Year-round import capacity"
      ],
      stats: {
        transitTime: "12-16 hours",
        frequency: "3x weekly",
        volume: "Medium-High"
      },
      image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Middle East",
      flag: "🇦🇪",
      status: "Planned Expansion",
      statusColor: "#3b82f6",
      description: "Strategic target market with high purchasing power and strong demand for luxury flowers. UAE and Saudi Arabia present significant opportunities for premium rose exports.",
      highlights: [
        "High-value market potential",
        "Proximity advantage",
        "Luxury segment demand",
        "Growing floriculture market"
      ],
      stats: {
        transitTime: "4-6 hours",
        frequency: "Target: Daily",
        volume: "Projected: High"
      },
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Japan",
      flag: "🇯🇵",
      status: "Planned Expansion",
      statusColor: "#3b82f6",
      description: "Premium market with exceptional quality standards and strong cultural appreciation for roses. Japanese market values perfection in bloom size, color consistency, and vase life.",
      highlights: [
        "Ultra-premium market positioning",
        "Strict quality requirements",
        "High-value per stem",
        "Cultural significance of flowers"
      ],
      stats: {
        transitTime: "14-18 hours",
        frequency: "Target: Weekly",
        volume: "Projected: Medium"
      },
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "South Korea",
      flag: "🇰🇷",
      status: "Planned Expansion",
      statusColor: "#3b82f6",
      description: "Emerging high-value market with sophisticated consumers and growing demand for imported premium flowers. Strong e-commerce infrastructure supports flower industry growth.",
      highlights: [
        "Tech-savvy consumer base",
        "E-commerce opportunities",
        "Quality-conscious market",
        "Growing gift-giving culture"
      ],
      stats: {
        transitTime: "14-18 hours",
        frequency: "Target: Weekly",
        volume: "Projected: Medium"
      },
      image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Region Image & Info */}
        <div className="space-y-6">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={regions[selectedRegion].image}
              alt={regions[selectedRegion].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-semibold" style={{ color: regions[selectedRegion].statusColor }}>
                {regions[selectedRegion].status}
              </span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#15803d' }}>
              <Clock className="w-6 h-6 mb-2" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-1">Transit Time</div>
              <div className="text-sm font-bold" style={{ color: '#14482E' }}>
                {regions[selectedRegion].stats.transitTime}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#15803d' }}>
              <Ship className="w-6 h-6 mb-2" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-1">Frequency</div>
              <div className="text-sm font-bold" style={{ color: '#14482E' }}>
                {regions[selectedRegion].stats.frequency}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#15803d' }}>
              <TrendingUp className="w-6 h-6 mb-2" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-1">Volume</div>
              <div className="text-sm font-bold" style={{ color: '#14482E' }}>
                {regions[selectedRegion].stats.volume}
              </div>
            </div>
          </div>
        </div>

        {/* Region Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{regions[selectedRegion].flag}</span>
              <div>
                <h2 className="text-4xl font-bold" style={{ color: '#14482E' }}>
                  {regions[selectedRegion].name}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: regions[selectedRegion].statusColor }}
                  ></div>
                  <span className="text-sm text-gray-600">{regions[selectedRegion].status}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              {regions[selectedRegion].description}
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border" style={{ borderColor: '#dcfce7' }}>
              <h3 className="font-bold mb-4" style={{ color: '#14482E' }}>Key Highlights</h3>
              <div className="space-y-3">
                {regions[selectedRegion].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                    <span className="text-sm text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Region Selector */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {regions.map((region, index) => (
          <button
            key={index}
            onClick={() => setSelectedRegion(index)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedRegion === index
                ? 'shadow-lg transform scale-105'
                : 'hover:shadow-md hover:scale-102'
            }`}
            style={{
              backgroundColor: selectedRegion === index ? '#f0fdf4' : 'white',
              borderColor: selectedRegion === index ? '#15803d' : '#dcfce7'
            }}
          >
            <div className="text-4xl mb-2">{region.flag}</div>
            <div className="text-sm font-semibold" style={{ color: '#14482E' }}>
              {region.name}
            </div>
            <div className="flex items-center justify-center gap-1 mt-2">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: region.statusColor }}
              ></div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}