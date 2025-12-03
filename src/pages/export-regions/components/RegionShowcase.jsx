import React, { useState } from "react";
import { Clock, Ship, TrendingUp, Check } from "lucide-react";

// Import images from assets folder
import NetherlandsImage from "../../../assets/Netherlands.jpg";
import ScandinaviaImage from "../../../assets/Scandinavia.jpg";
import MiddleEastImage from "../../../assets/Middle East.jpg";
import JapanImage from "../../../assets/Japan.jpg";
import SouthKoreaImage from "../../../assets/South Korea.jpg";

export default function RegionShowcase() {
  const [selectedRegion, setSelectedRegion] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      image: NetherlandsImage
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
      image: ScandinaviaImage
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
      image: MiddleEastImage
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
      image: JapanImage
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
      image: SouthKoreaImage
    }
  ];

  const handleRegionChange = (index) => {
    setIsTransitioning(true);
    setSelectedRegion(index);
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Region Image & Info */}
        <div className="space-y-6">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg group">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={regions[selectedRegion].image}
                alt={regions[selectedRegion].name}
                className={`w-full h-full object-cover transition-all duration-500 transform ${
                  isTransitioning ? 'scale-110 opacity-80' : 'scale-100 opacity-100'
                } group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"></div>
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
                <span className="text-sm font-semibold" style={{ color: regions[selectedRegion].statusColor }}>
                  {regions[selectedRegion].status}
                </span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1" style={{ borderColor: '#15803d' }}>
              <Clock className="w-6 h-6 mb-2 transform transition-transform duration-300 hover:rotate-12" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-1">Transit Time</div>
              <div className="text-sm font-bold transition-all duration-300" style={{ color: '#14482E' }}>
                {regions[selectedRegion].stats.transitTime}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1" style={{ borderColor: '#15803d' }}>
              <Ship className="w-6 h-6 mb-2 transform transition-transform duration-300 hover:rotate-12" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-1">Frequency</div>
              <div className="text-sm font-bold transition-all duration-300" style={{ color: '#14482E' }}>
                {regions[selectedRegion].stats.frequency}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1" style={{ borderColor: '#15803d' }}>
              <TrendingUp className="w-6 h-6 mb-2 transform transition-transform duration-300 hover:rotate-12" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-1">Volume</div>
              <div className="text-sm font-bold transition-all duration-300" style={{ color: '#14482E' }}>
                {regions[selectedRegion].stats.volume}
              </div>
            </div>
          </div>
        </div>

        {/* Region Details */}
        <div className="space-y-6">
          <div className="transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl transition-transform duration-300 hover:scale-110 inline-block">
                {regions[selectedRegion].flag}
              </span>
              <div className="overflow-hidden">
                <h2 
                  className="text-4xl font-bold transform transition-all duration-500" 
                  style={{ color: '#14482E' }}
                >
                  {regions[selectedRegion].name}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div 
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{ backgroundColor: regions[selectedRegion].statusColor }}
                  ></div>
                  <span className="text-sm text-gray-600">{regions[selectedRegion].status}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6 transition-all duration-500">
              {regions[selectedRegion].description}
            </p>

            <div 
              className="bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-500 hover:shadow-md hover:-translate-y-1" 
              style={{ borderColor: '#dcfce7' }}
            >
              <h3 className="font-bold mb-4" style={{ color: '#14482E' }}>Key Highlights</h3>
              <div className="space-y-3">
                {regions[selectedRegion].highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2 hover:bg-green-50 p-2 rounded-lg"
                  >
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" style={{ color: '#22c55e' }} />
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
            onClick={() => handleRegionChange(index)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 transform ${
              selectedRegion === index
                ? 'shadow-lg scale-105 ring-2 ring-offset-2 ring-green-500/30'
                : 'hover:shadow-md hover:scale-102'
            } active:scale-95`}
            style={{
              backgroundColor: selectedRegion === index ? '#f0fdf4' : 'white',
              borderColor: selectedRegion === index ? '#15803d' : '#dcfce7'
            }}
          >
            <div className="text-4xl mb-2 transition-transform duration-300 hover:scale-110">
              {region.flag}
            </div>
            <div className="text-sm font-semibold transition-colors duration-300" style={{ color: '#14482E' }}>
              {region.name}
            </div>
            <div className="flex items-center justify-center gap-1 mt-2">
              <div 
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ backgroundColor: region.statusColor }}
              ></div>
            </div>
          </button>
        ))}
      </div>

      {/* Add these CSS animations to your global styles (index.css or App.css) */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s infinite;
        }
        
        /* Smooth transitions for all elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Staggered animation for region selector */
        .region-selector-btn {
          animation: fadeIn 0.5s ease-out;
          animation-fill-mode: both;
        }
        
        .region-selector-btn:nth-child(1) { animation-delay: 0.1s; }
        .region-selector-btn:nth-child(2) { animation-delay: 0.2s; }
        .region-selector-btn:nth-child(3) { animation-delay: 0.3s; }
        .region-selector-btn:nth-child(4) { animation-delay: 0.4s; }
        .region-selector-btn:nth-child(5) { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
}