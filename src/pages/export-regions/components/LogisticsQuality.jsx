import React from "react";
import { Check, Package, Thermometer, Plane, Shield, Clock, Award } from "lucide-react";

export default function LogisticsQuality() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 animate-fade-in">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
          Export Process & Quality Control
        </h2>
        <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#15803d' }}></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Side - Process Steps */}
        <div className="space-y-4">
          {[
            { 
              step: "1", 
              title: "Harvest & Selection", 
              desc: "Roses picked at optimal maturity and immediately cooled",
              icon: Package
            },
            { 
              step: "2", 
              title: "Quality Inspection", 
              desc: "Rigorous checking for size, color, and stem quality",
              icon: Shield
            },
            { 
              step: "3", 
              title: "Cold Chain Processing", 
              desc: "Maintained at 2-4°C throughout packing process",
              icon: Thermometer
            },
            { 
              step: "4", 
              title: "Secure Packaging", 
              desc: "Professional boxing with protective materials",
              icon: Package
            },
            { 
              step: "5", 
              title: "Airport Transfer", 
              desc: "Climate-controlled transport to Addis Ababa Airport",
              icon: Clock
            },
            { 
              step: "6", 
              title: "Air Freight", 
              desc: "Direct flights to destination markets",
              icon: Plane
            }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-4 p-5 bg-white rounded-lg shadow-sm border-l-4 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:translate-x-2 process-step"
                style={{ 
                  borderColor: '#15803d',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white transition-transform duration-300 hover:scale-110 hover:rotate-12"
                  style={{ backgroundColor: '#15803d' }}
                >
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold transition-colors duration-300" style={{ color: '#14482E' }}>
                      {item.title}
                    </h4>
                    <IconComponent className="w-4 h-4 transition-transform duration-300 hover:scale-125" style={{ color: '#15803d' }} />
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side - Certifications with Enhanced Design */}
        <div className="space-y-6">
          {/* Main Certifications Card */}
          <div 
            className="bg-white p-8 rounded-lg shadow-sm border transform transition-all duration-500 hover:shadow-md hover:-translate-y-1" 
            style={{ borderColor: '#dcfce7' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8" style={{ color: '#15803d' }} />
              <h3 className="text-2xl font-bold" style={{ color: '#14482E' }}>
                Certifications & Standards
              </h3>
            </div>
            <div className="space-y-3">
              {[
                "MPS-ABC Certified (Environmental)",
                "MPS-SQ Certified (Social Quality)",
                "EHPEA Member (Ethiopian Horticulture)",
                "ISO-compliant Cold Chain"
              ].map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2 hover:bg-green-50 p-3 rounded-lg cert-item"
                  style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
                >
                  <Check 
                    className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300 hover:scale-110" 
                    style={{ color: '#22c55e' }} 
                  />
                  <span className="text-sm text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>



          {/* Quality Guarantee Badge */}
          <div 
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border-2 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:scale-105 guarantee-badge"
            style={{ borderColor: '#15803d' }}
          >
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-3 transition-transform duration-500 hover:rotate-12" style={{ color: '#15803d' }} />
              <h4 className="text-xl font-bold mb-2" style={{ color: '#14482E' }}>
                Quality Guaranteed
              </h4>
              <p className="text-sm text-gray-600">
                Every shipment meets international quality standards with full traceability
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
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
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .process-step {
          animation: slideInLeft 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        .cert-item {
          animation: slideInRight 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        .metric-card {
          animation: fadeIn 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        .guarantee-badge {
          animation: fadeIn 0.8s ease-out;
          animation-delay: 1.2s;
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