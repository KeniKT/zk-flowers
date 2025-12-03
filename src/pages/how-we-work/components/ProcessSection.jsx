import React, { useState, useEffect, useRef } from "react";
import { Sprout, Scissors, Thermometer, Package, Plane, Eye, CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function ProcessSection() {
  const [activeProcess, setActiveProcess] = useState(0);
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

  const processSteps = [
    {
      number: "01",
      title: "Cultivation",
      icon: Sprout,
      duration: "60-70 Days",
      description: "From planting to harvest, our roses are grown in optimal conditions at 1,900m altitude with careful monitoring of every growth stage.",
      details: [
        "Soil preparation and bed formation",
        "Young plant installation and rooting",
        "Growth monitoring and climate control",
        "Nutrient management and fertilization",
        "Pest and disease prevention (IPM)",
        "Optimal temperature (15-25°C) maintenance"
      ],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      color: "#22c55e"
    },
    {
      number: "02",
      title: "Harvesting",
      icon: Scissors,
      duration: "Early Morning",
      description: "Roses are hand-picked at the optimal maturity stage when buds show perfect color and size, ensuring maximum vase life.",
      details: [
        "Harvest timing at ideal bud stage",
        "Trained harvesters with quality standards",
        "Gentle handling to prevent damage",
        "Immediate placement in water buckets",
        "Transportation to cold rooms within minutes",
        "Quality inspection at harvest point"
      ],
      image: "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?auto=format&fit=crop&w=800&q=80",
      color: "#f59e0b"
    },
    {
      number: "03",
      title: "Cold Chain",
      icon: Thermometer,
      duration: "2-4°C",
      description: "Immediate cooling to preserve freshness. Roses are maintained at optimal temperature throughout processing and storage.",
      details: [
        "Rapid cooling to 2-4°C within 30 minutes",
        "Temperature-controlled processing rooms",
        "Cold storage facilities",
        "Continuous temperature monitoring",
        "Humidity control (85-90%)",
        "Cold chain maintenance until export"
      ],
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80",
      color: "#3b82f6"
    },
    {
      number: "04",
      title: "Quality Control",
      icon: Eye,
      duration: "100% Inspection",
      description: "Every stem undergoes rigorous quality checks for size, color, length, and overall condition before packing.",
      details: [
        "Head size measurement and grading",
        "Stem length verification",
        "Color consistency checks",
        "Defect identification and removal",
        "Petal count and bloom assessment",
        "MPS certification compliance"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      color: "#8b5cf6"
    },
    {
      number: "05",
      title: "Processing & Packing",
      icon: Package,
      duration: "4-6 Hours",
      description: "Professional packing in temperature-controlled environment with protective materials to ensure roses arrive in perfect condition.",
      details: [
        "Stem re-cutting at optimal angle",
        "Length standardization and bunching",
        "Sleeve application and branding",
        "Protective packaging materials",
        "Box preparation with labeling",
        "Final quality verification"
      ],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
      color: "#ec4899"
    },
    {
      number: "06",
      title: "Export & Delivery",
      icon: Plane,
      duration: "8-18 Hours",
      description: "Climate-controlled transportation to airport and direct flights to destination markets with full tracking and documentation.",
      details: [
        "Refrigerated truck transport to airport",
        "Airport cold room storage",
        "Direct flight arrangements",
        "Export documentation and customs",
        "Real-time tracking and updates",
        "Delivery to partner facilities"
      ],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      color: "#dc2626"
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
            Our 6-Step Process
          </h2>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl">
            From cultivation to delivery, every step is carefully managed to ensure premium quality
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 transition-all duration-700 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveProcess(index)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-1 ${
                  activeProcess === index ? 'shadow-lg scale-105' : 'hover:shadow-md'
                }`}
                style={{
                  backgroundColor: activeProcess === index ? '#f0fdf4' : 'white',
                  borderColor: activeProcess === index ? step.color : '#dcfce7',
                  transitionDelay: `${300 + index * 50}ms`
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: step.color }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold mb-1" style={{ color: step.color }}>
                      {step.number}
                    </div>
                    <div className="font-bold text-sm" style={{ color: '#14482E' }}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {step.duration}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Process Details */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className={`relative h-[400px] rounded-xl overflow-hidden shadow-lg border border-green-100 group transition-all duration-700 delay-600 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <img
              src={processSteps[activeProcess].image}
              alt={processSteps[activeProcess].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute top-6 left-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: processSteps[activeProcess].color }}
              >
                {processSteps[activeProcess].number}
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-3xl font-bold text-white mb-2">
                {processSteps[activeProcess].title}
              </h3>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{processSteps[activeProcess].duration}</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className={`transition-all duration-700 delay-700 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
          }`}>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {processSteps[activeProcess].description}
            </p>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: '#14482E' }}>
                <CheckCircle className="w-5 h-5" style={{ color: processSteps[activeProcess].color }} />
                Process Details
              </h4>
              <div className="space-y-3">
                {processSteps[activeProcess].details.map((detail, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2"
                  >
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-all duration-300 hover:scale-150"
                      style={{ backgroundColor: processSteps[activeProcess].color }}
                    ></div>
                    <span className="text-gray-700 leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg flex items-start gap-3 border border-green-200 transition-all duration-300 hover:bg-green-100" style={{ backgroundColor: '#f0fdf4' }}>
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#15803d' }} />
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong style={{ color: '#14482E' }}>Quality Focus:</strong> Each step includes quality checks to ensure only premium 
                roses proceed to the next stage of processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}