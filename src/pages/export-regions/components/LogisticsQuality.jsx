import React from "react";
import { Check } from "lucide-react";

export default function LogisticsQuality() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#14482E' }}>
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
                  style={{ backgroundColor: '#15803d' }}
                >
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#14482E' }}>{item.title}</h4>
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
          
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4" style={{ borderColor: '#15803d' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#14482E' }}>
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
  );
}