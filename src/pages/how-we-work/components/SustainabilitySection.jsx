import React from "react";
import { Droplets, Sun, Shield, Users, CheckCircle } from "lucide-react";

export default function SustainabilitySection() {
  const sustainabilityPractices = [
    {
      category: "Water Management",
      icon: Droplets,
      practices: [
        "Drip irrigation systems for efficient water use",
        "Rainwater harvesting and storage",
        "Water recycling from processing",
        "Regular water quality testing"
      ]
    },
    {
      category: "Energy Efficiency",
      icon: Sun,
      practices: [
        "Natural ventilation in greenhouses",
        "Solar panels for electricity generation",
        "Energy-efficient cooling systems",
        "LED lighting where needed"
      ]
    },
    {
      category: "Pest Management",
      icon: Shield,
      practices: [
        "Integrated Pest Management (IPM)",
        "Biological control methods",
        "Minimal chemical use",
        "Regular monitoring and prevention"
      ]
    },
    {
      category: "Social Responsibility",
      icon: Users,
      practices: [
        "Fair wages above industry standards",
        "Healthcare and insurance benefits",
        "Training and skill development",
        "Community support programs"
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#14482E' }}>Sustainability in Action</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our commitment to environmental stewardship and social responsibility
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {sustainabilityPractices.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
          >
            <div 
              className="p-6 flex items-center gap-4"
              style={{ backgroundColor: '#f0fdf4' }}
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#15803d' }}
              >
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#14482E' }}>
                {category.category}
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {category.practices.map((practice, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                    <span className="text-sm text-gray-700">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}