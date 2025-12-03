import React, { useEffect, useRef, useState } from "react";
import { Droplets, Sun, Shield, Users, CheckCircle } from "lucide-react";

export default function SustainabilitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section 
      ref={sectionRef}
      className="relative py-16 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading - matching StorySection style */}
        <div className={`mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
            Sustainability in Action
          </h2>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl">
            Our commitment to environmental stewardship and social responsibility
          </p>
        </div>

        {/* Practices Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sustainabilityPractices.map((category, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`
              }}
            >
              <div 
                className="p-6 flex items-center gap-4 transition-all duration-300"
                style={{ backgroundColor: '#f0fdf4' }}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
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
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300 hover:scale-110" style={{ color: '#22c55e' }} />
                      <span className="text-gray-700 leading-relaxed">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}