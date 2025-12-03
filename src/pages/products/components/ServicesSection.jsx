import React, { useState } from "react";
import { Package, Ruler, ThermometerSun, Clock, Award, Droplets } from "lucide-react";

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Tailored packaging solutions to meet your specific requirements and branding needs",
      details: ["Custom box sizes", "Brand labeling options", "Protective materials", "Export-ready packaging"]
    },
    {
      icon: Ruler,
      title: "Length Selection",
      description: "Multiple stem lengths available to suit different market preferences and uses",
      details: ["40cm - Bouquets", "50cm - Arrangements", "60cm - Premium displays", "70cm - Luxury events"]
    },
    {
      icon: ThermometerSun,
      title: "Cold Chain Management",
      description: "Maintaining optimal temperature throughout harvest, processing, and transportation",
      details: ["2-4°C storage", "Climate-controlled packing", "Refrigerated transport", "Airport cold rooms"]
    },
    {
      icon: Clock,
      title: "Year-Round Availability",
      description: "Consistent supply throughout all seasons thanks to optimal growing conditions",
      details: ["12-month production", "Stable quality", "Reliable quantities", "No seasonal gaps"]
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage from cultivation to export",
      details: ["MPS certified", "Regular inspections", "Trained QC team", "Traceability systems"]
    },
    {
      icon: Droplets,
      title: "Sustainable Farming",
      description: "Environmentally responsible practices that protect resources and communities",
      details: ["Water conservation", "IPM practices", "Renewable energy", "Social responsibility"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white via-green-50/30 to-white animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header - Matching other sections */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
            Our Services
          </h2>
          <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#15803d' }}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border-2 transform hover:-translate-y-2 overflow-hidden group service-card"
              style={{ 
                borderColor: hoveredService === index ? '#15803d' : '#dcfce7',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Top accent bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                style={{ 
                  backgroundColor: hoveredService === index ? '#15803d' : '#dcfce7'
                }}
              ></div>

              {/* Icon with animated background */}
              <div className="relative mb-5">
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-20 transition-all duration-500"
                  style={{ 
                    backgroundColor: '#15803d',
                    transform: hoveredService === index ? 'scale(1.5)' : 'scale(1)'
                  }}
                ></div>
                <div 
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12"
                  style={{ 
                    backgroundColor: hoveredService === index ? '#15803d' : '#dcfce7',
                    transform: hoveredService === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <service.icon 
                    className="w-8 h-8 transition-all duration-500" 
                    style={{ color: hoveredService === index ? 'white' : '#15803d' }} 
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: '#14482E' }}>
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Details with smooth expand animation */}
              <div 
                className="transition-all duration-500 ease-in-out"
                style={{
                  opacity: hoveredService === index ? 1 : 0,
                  maxHeight: hoveredService === index ? '200px' : '0px',
                  transform: hoveredService === index ? 'translateY(0)' : 'translateY(-10px)'
                }}
              >
                <div className="space-y-2 pt-4 border-t-2" style={{ borderColor: '#dcfce7' }}>
                  {service.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-1"
                      style={{
                        transitionDelay: hoveredService === index ? `${idx * 0.08}s` : '0s'
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#15803d' }}></div>
                      <span className="text-xs text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom gradient on hover */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                style={{
                  background: hoveredService === index 
                    ? 'linear-gradient(90deg, #15803d 0%, #22c55e 100%)' 
                    : 'transparent'
                }}
              ></div>
            </div>
          ))}
        </div>
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
        
        .service-card {
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