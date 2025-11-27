import React from "react";
import { Award } from "lucide-react";

export default function QualityStandardsSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border" style={{ borderColor: '#dcfce7' }}>
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#14482E' }}>
              Quality Standards
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
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
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: '#f0fdf4' }}>
                  <Award className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#15803d' }} />
                  <div>
                    <div className="font-semibold" style={{ color: '#14482E' }}>{cert.label}</div>
                    <div className="text-sm text-gray-600">{cert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?auto=format&fit=crop&w=800&q=80"
              alt="Quality Control"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}