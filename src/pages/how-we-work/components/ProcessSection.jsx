import React, { useState } from "react";
import { Sprout, Scissors, Thermometer, Package, Plane, Eye, CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function ProcessSection() {
  const [activeProcess, setActiveProcess] = useState(0);

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
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#14482E' }}>Our 6-Step Process</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From cultivation to delivery, every step is carefully managed to ensure premium quality
        </p>
      </div>

      {/* Process Timeline */}
      <div className="mb-12">
        <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
          {processSteps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveProcess(index)}
              className={`flex-shrink-0 p-4 rounded-lg border-2 transition-all min-w-[200px] ${
                activeProcess === index ? 'shadow-lg transform scale-105' : 'hover:shadow-md'
              }`}
              style={{
                backgroundColor: activeProcess === index ? '#f0fdf4' : 'white',
                borderColor: activeProcess === index ? step.color : '#dcfce7'
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <div className="text-left">
                  <div className="font-bold" style={{ color: '#14482E' }}>{step.title}</div>
                  <div className="text-xs text-gray-600">{step.duration}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Process Details */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
          <img
            src={processSteps[activeProcess].image}
            alt={processSteps[activeProcess].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute top-6 left-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
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
        <div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {processSteps[activeProcess].description}
          </p>

          <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: '#dcfce7' }}>
            <h4 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#14482E' }}>
              <CheckCircle className="w-5 h-5" />
              Process Details
            </h4>
            <div className="space-y-3">
              {processSteps[activeProcess].details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: processSteps[activeProcess].color }}
                  ></div>
                  <span className="text-sm text-gray-700">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#f0fdf4' }}>
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#15803d' }} />
            <p className="text-sm text-gray-700">
              <strong>Quality Focus:</strong> Each step includes quality checks to ensure only premium 
              roses proceed to the next stage of processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}