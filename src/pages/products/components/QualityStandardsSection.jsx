import React from "react";
import { Award } from "lucide-react";

export default function QualityStandardsSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 animate-fade-in">
      {/* Header - Matching other sections */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
          Quality Standards
        </h2>
        <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#15803d' }}></div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#dcfce7' }}>
        <div className="grid md:grid-cols-2">
          {/* Content Side */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-gray-700 mb-8 leading-relaxed text-base">
              Every stem that leaves our farm meets international quality standards. We maintain strict protocols 
              throughout the growing, harvesting, and packing process.
            </p>
            <div className="space-y-4">
              {[
                { label: "MPS-ABC Certified", desc: "Environmental sustainability" },
                { label: "MPS-SQ Certified", desc: "Social quality assurance" },
                { label: "EHPEA Member", desc: "Ethiopian Horticulture standards" },
                { label: "Cold Chain Certified", desc: "Temperature-controlled logistics" }
              ].map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl border-l-4 bg-gradient-to-r from-green-50 to-white hover:shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:translate-x-2 cert-item"
                  style={{ 
                    borderColor: '#15803d',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:rotate-12"
                    style={{ backgroundColor: '#15803d' }}
                  >
                    <Award className="w-5 h-5" style={{ color: 'white' }} />
                  </div>
                  <div>
                    <div className="font-bold text-base mb-1" style={{ color: '#14482E' }}>{cert.label}</div>
                    <div className="text-sm text-gray-600">{cert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-64 md:h-auto group">
            <img
              src="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?auto=format&fit=crop&w=800&q=80"
              alt="Quality Control"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300"></div>
            
            {/* Optional overlay badge */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-green-100">
              <span className="text-xs font-bold" style={{ color: '#14482E' }}>Certified Quality</span>
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
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .cert-item {
          animation: slideInLeft 0.6s ease-out;
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