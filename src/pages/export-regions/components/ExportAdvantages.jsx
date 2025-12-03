import React, { useState } from "react";
import { MapPin, Clock, Package, Ship, Check } from "lucide-react";

export default function ExportAdvantages() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const exportAdvantages = [
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Ethiopia's geographic position provides excellent access to European, Middle Eastern, and Asian markets",
      features: [
        "Direct flight access to 3 continents",
        "Established shipping lanes",
        "Time zone advantages"
      ]
    },
    {
      icon: Clock,
      title: "Optimal Climate",
      description: "1,900m altitude ensures ideal growing conditions year-round for consistent quality",
      features: [
        "Year-round production",
        "Natural pest resistance",
        "Perfect bloom conditions"
      ]
    },
    {
      icon: Package,
      title: "Modern Facilities",
      description: "State-of-the-art cold chain and packing facilities maintain flower freshness",
      features: [
        "ISO-certified facilities",
        "Advanced cold chain logistics",
        "Quality control at every stage"
      ]
    },
    {
      icon: Ship,
      title: "Reliable Logistics",
      description: "Direct flights and established partnerships ensure timely delivery",
      features: [
        "24-hour global delivery",
        "Real-time tracking",
        "Established carrier partnerships"
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 animate-fade-in">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
          Why Ethiopian Roses Excel Globally
        </h2>
        <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#15803d' }}></div>
      </div>

      {/* Advantages Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {exportAdvantages.map((advantage, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border-2 transform hover:-translate-y-2 overflow-hidden advantage-card group"
            style={{ 
              borderColor: hoveredCard === index ? '#15803d' : '#dcfce7',
              animationDelay: `${index * 0.15}s`
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Top accent bar */}
            <div 
              className="h-2 w-full transition-all duration-500"
              style={{ 
                backgroundColor: hoveredCard === index ? '#15803d' : '#dcfce7'
              }}
            ></div>

            <div className="p-6">
              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-20 transition-all duration-500"
                  style={{ 
                    backgroundColor: '#15803d',
                    transform: hoveredCard === index ? 'scale(1.5)' : 'scale(1)'
                  }}
                ></div>
                <div 
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12"
                  style={{ 
                    backgroundColor: hoveredCard === index ? '#15803d' : '#dcfce7',
                    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <advantage.icon 
                    className="w-8 h-8 transition-all duration-500" 
                    style={{ color: hoveredCard === index ? 'white' : '#15803d' }} 
                  />
                </div>
              </div>
              
              <h3 className="font-bold text-xl mb-3 transition-colors duration-300" style={{ color: '#14482E' }}>
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {advantage.description}
              </p>
              
              {/* Features with smooth expand animation */}
              <div 
                className="transition-all duration-500 ease-in-out"
                style={{
                  opacity: hoveredCard === index ? 1 : 0,
                  maxHeight: hoveredCard === index ? '200px' : '0px',
                  transform: hoveredCard === index ? 'translateY(0)' : 'translateY(-10px)'
                }}
              >
                <div className="space-y-3 pt-4 border-t-2" style={{ borderColor: '#dcfce7' }}>
                  {advantage.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-1"
                      style={{
                        transitionDelay: hoveredCard === index ? `${idx * 0.1}s` : '0s'
                      }}
                    >
                      <Check 
                        className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300 hover:scale-125" 
                        style={{ color: '#22c55e' }} 
                      />
                      <span className="text-xs text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom gradient on hover */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
              style={{
                background: hoveredCard === index 
                  ? 'linear-gradient(90deg, #15803d 0%, #22c55e 100%)' 
                  : 'transparent'
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* CSS animations */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .advantage-card {
          animation: slideUp 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        /* Smooth transitions for all elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}