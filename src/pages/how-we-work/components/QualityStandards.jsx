import React, { useEffect, useRef, useState } from "react";
import { Award, Shield, Leaf, Target, CheckCircle } from "lucide-react";

export default function QualityStandards() {
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
    <section 
      ref={sectionRef}
      className="relative py-16 px-6" 
      style={{ backgroundColor: '#f0fdf4' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading - matching StorySection style */}
        <div className={`mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
            Quality Standards & Certifications
          </h2>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl">
            Industry-leading certifications and rigorous standards ensure consistent excellence
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {qualityStandards.map((standard, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-all duration-300 hover:scale-110 hover:rotate-6"
                style={{ backgroundColor: '#dcfce7' }}
              >
                <standard.icon className="w-8 h-8" style={{ color: '#15803d' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#14482E' }}>
                {standard.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {standard.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {standard.metrics.map((metric, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0 transition-transform duration-300 hover:scale-110" style={{ color: '#22c55e' }} />
                    <span className="text-sm text-gray-700">{metric}</span>
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