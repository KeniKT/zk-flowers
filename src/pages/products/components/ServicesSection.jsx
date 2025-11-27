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
    <section className="py-16 px-4" style={{ backgroundColor: '#f0fdf4' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#14482E' }}>Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support services to ensure your roses arrive in perfect condition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-t-4 cursor-pointer"
              style={{ borderColor: hoveredService === index ? '#15803d' : '#dcfce7' }}
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors"
                style={{ 
                  backgroundColor: hoveredService === index ? '#15803d' : '#dcfce7' 
                }}
              >
                <service.icon 
                  className="w-7 h-7 transition-colors" 
                  style={{ color: hoveredService === index ? 'white' : '#15803d' }} 
                />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#14482E' }}>
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              {hoveredService === index && (
                <div className="space-y-2 animate-fadeIn">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#15803d' }}></div>
                      <span className="text-xs text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}