import React, { useState } from 'react';
import { Globe, MapPin, TrendingUp, Package, Ship, Clock, ChevronRight, Check } from 'lucide-react';

export default function ExportRegions() {
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

  const exportAdvantages = [
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Ethiopia's geographic position provides excellent access to European, Middle Eastern, and Asian markets"
    },
    {
      icon: Clock,
      title: "Optimal Climate",
      description: "1,900m altitude ensures ideal growing conditions year-round for consistent quality"
    },
    {
      icon: Package,
      title: "Modern Facilities",
      description: "State-of-the-art cold chain and packing facilities maintain flower freshness"
    },
    {
      icon: Ship,
      title: "Reliable Logistics",
      description: "Direct flights and established partnerships ensure timely delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-4" style={{ backgroundColor: '#450a0a' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8" style={{ color: '#E60000' }} />
            <span className="text-sm tracking-wider" style={{ color: '#E60000' }}>GLOBAL REACH</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Export Regions</h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
            Delivering Ethiopian excellence to premium markets across Europe, Middle East, and Asia
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#22c55e' }}></div>
              <span>1 Active Market</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f59e0b' }}></div>
              <span>1 Developing Market</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3b82f6' }}></div>
              <span>3 Planned Markets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Region Showcase */}
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
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#E60000' }}>
                <Clock className="w-6 h-6 mb-2" style={{ color: '#7f1d1d' }} />
                <div className="text-xs text-gray-600 mb-1">Transit Time</div>
                <div className="text-sm font-bold" style={{ color: '#4C090F' }}>
                  {regions[selectedRegion].stats.transitTime}
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#E60000' }}>
                <Ship className="w-6 h-6 mb-2" style={{ color: '#7f1d1d' }} />
                <div className="text-xs text-gray-600 mb-1">Frequency</div>
                <div className="text-sm font-bold" style={{ color: '#4C090F' }}>
                  {regions[selectedRegion].stats.frequency}
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#E60000' }}>
                <TrendingUp className="w-6 h-6 mb-2" style={{ color: '#7f1d1d' }} />
                <div className="text-xs text-gray-600 mb-1">Volume</div>
                <div className="text-sm font-bold" style={{ color: '#4C090F' }}>
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
                  <h2 className="text-4xl font-bold" style={{ color: '#4C090F' }}>
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

              <div className="bg-white p-6 rounded-lg shadow-sm border" style={{ borderColor: '#fee2e2' }}>
                <h3 className="font-bold mb-4" style={{ color: '#7f1d1d' }}>Key Highlights</h3>
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
                backgroundColor: selectedRegion === index ? '#fef2f2' : 'white',
                borderColor: selectedRegion === index ? '#E60000' : '#fee2e2'
              }}
            >
              <div className="text-4xl mb-2">{region.flag}</div>
              <div className="text-sm font-semibold" style={{ color: '#4C090F' }}>
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

      {/* Export Advantages */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fef2f2' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#7f1d1d' }}>
            Why Ethiopian Roses Excel Globally
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our strategic advantages enable us to deliver premium quality roses to markets worldwide
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4"
                style={{ borderColor: '#E60000' }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#fee2e2' }}
                >
                  <advantage.icon className="w-6 h-6" style={{ color: '#dc2626' }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#4C090F' }}>
                  {advantage.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics & Quality */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#7f1d1d' }}>
              Export Process & Quality Control
            </h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Harvest & Selection", desc: "Roses picked at optimal maturity and immediately cooled" },
                { step: "2", title: "Quality Inspection", desc: "Rigorous checking for size, color, and stem quality" },
                { step: "3", title: "Cold Chain Processing", desc: "Maintained at 2-4°C throughout packing process" },
                { step: "4", title: "Secure Packaging", desc: "Professional boxing with protective materials" },
                { step: "5", title: "Airport Transfer", desc: "Climate-controlled transport to Addis Ababa Airport" },
                { step: "6", title: "Air Freight", desc: "Direct flights to destination markets" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white"
                    style={{ backgroundColor: '#dc2626' }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#4C090F' }}>{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
                alt="Logistics"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4" style={{ borderColor: '#E60000' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#7f1d1d' }}>
                Certifications & Standards
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5" style={{ color: '#22c55e' }} />
                  <span className="text-gray-700">MPS-ABC Certified (Environmental)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5" style={{ color: '#22c55e' }} />
                  <span className="text-gray-700">MPS-SQ Certified (Social Quality)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5" style={{ color: '#22c55e' }} />
                  <span className="text-gray-700">EHPEA Member (Ethiopian Horticulture)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5" style={{ color: '#22c55e' }} />
                  <span className="text-gray-700">ISO-compliant Cold Chain</span>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80"
                alt="Quality Control"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#450a0a' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Import Premium Ethiopian Roses?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Contact us to discuss your requirements and explore partnership opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: '#E60000' }}
            >
              Request Export Quote
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/10 border-2"
              style={{ borderColor: 'white' }}
            >
              Download Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}