import React from "react";
import { Award, Shield, Leaf, Target, CheckCircle } from "lucide-react";

export default function QualityStandards() {
  const qualityStandards = [
    {
      icon: Award,
      title: "MPS-ABC Certified",
      description: "Environmental sustainability certification ensuring responsible use of resources",
      metrics: ["Energy efficiency", "Water management", "Fertilizer optimization", "Waste reduction"]
    },
    {
      icon: Shield,
      title: "MPS-SQ Certified",
      description: "Social quality certification guaranteeing fair labor practices and safe working conditions",
      metrics: ["Fair wages", "Safe conditions", "Training programs", "Worker welfare"]
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Commitment to environmental stewardship and community development",
      metrics: ["IPM methods", "Water recycling", "Renewable energy", "Local employment"]
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Systematic quality control at every stage from planting to export",
      metrics: ["100% inspection", "Traceability", "ISO standards", "Continuous improvement"]
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f0fdf4' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#14482E' }}>Quality Standards & Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-leading certifications and rigorous standards ensure consistent excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {qualityStandards.map((standard, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border-l-4"
              style={{ borderColor: '#15803d' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#dcfce7' }}
              >
                <standard.icon className="w-8 h-8" style={{ color: '#15803d' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#14482E' }}>
                {standard.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {standard.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {standard.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                    <span className="text-sm text-gray-600">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}