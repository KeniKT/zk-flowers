import React, { useState } from 'react';
import { Sprout, Scissors, Thermometer, Package, Plane, CheckCircle, Clock, Users, Shield, Leaf, Sun, Droplets, Target, TrendingUp, Award, Eye, AlertCircle, ArrowRight, PlayCircle } from 'lucide-react';

export default function HowWeWork() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

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

  const operationalMetrics = [
    { label: "Farm Size", value: "22 ha", icon: Sprout },
    { label: "Daily Production", value: "50K+ stems", icon: TrendingUp },
    { label: "Workforce", value: "400+", icon: Users },
    { label: "Export Frequency", value: "Daily", icon: Plane }
  ];

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
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-4" style={{ backgroundColor: '#450a0a' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8" style={{ color: '#E60000' }} />
            <span className="text-sm tracking-wider" style={{ color: '#E60000' }}>OUR PROCESS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">How We Work</h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
            From seed to shipment: A commitment to quality, sustainability, and excellence at every step
          </p>
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {operationalMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <metric.icon className="w-6 h-6 mb-2" style={{ color: '#E60000' }} />
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#7f1d1d' }}>Our 6-Step Process</h2>
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
                  backgroundColor: activeProcess === index ? '#fef2f2' : 'white',
                  borderColor: activeProcess === index ? step.color : '#fee2e2'
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
                    <div className="font-bold" style={{ color: '#4C090F' }}>{step.title}</div>
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

            <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: '#fee2e2' }}>
              <h4 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#7f1d1d' }}>
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

            <div className="mt-6 p-4 rounded-lg flex items-start gap-3" style={{ backgroundColor: '#fef2f2' }}>
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#dc2626' }} />
              <p className="text-sm text-gray-700">
                <strong>Quality Focus:</strong> Each step includes quality checks to ensure only premium 
                roses proceed to the next stage of processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fef2f2' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7f1d1d' }}>Quality Standards & Certifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading certifications and rigorous standards ensure consistent excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {qualityStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border-l-4"
                style={{ borderColor: '#E60000' }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#fee2e2' }}
                >
                  <standard.icon className="w-8 h-8" style={{ color: '#dc2626' }} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#4C090F' }}>
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

      {/* Sustainability Practices */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#7f1d1d' }}>Sustainability in Action</h2>
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
                style={{ backgroundColor: '#fef2f2' }}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#dc2626' }}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#4C090F' }}>
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

      {/* Technology & Innovation */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fef2f2' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#7f1d1d' }}>
                Technology & Innovation
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We continuously invest in modern technology and innovative practices to improve 
                efficiency, quality, and sustainability.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Climate Control Systems",
                    desc: "Advanced greenhouse automation for optimal growing conditions"
                  },
                  {
                    title: "Drip Irrigation",
                    desc: "Precision water delivery reducing waste by up to 60%"
                  },
                  {
                    title: "Cold Chain Monitoring",
                    desc: "Real-time temperature tracking from harvest to delivery"
                  },
                  {
                    title: "Quality Analytics",
                    desc: "Data-driven insights for continuous improvement"
                  },
                  {
                    title: "Traceability Systems",
                    desc: "Complete tracking from farm to final destination"
                  }
                ].map((tech, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#E60000' }}>
                    <h4 className="font-bold mb-1" style={{ color: '#4C090F' }}>{tech.title}</h4>
                    <p className="text-sm text-gray-600">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
                  alt="Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4" style={{ borderColor: '#E60000' }}>
                <div className="text-4xl font-bold mb-1" style={{ color: '#dc2626' }}>300%</div>
                <div className="text-sm text-gray-600">Growth through innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#450a0a' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Our Process in Action
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Visit our facility or schedule a virtual tour to see how we cultivate excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: '#E60000' }}
            >
              <PlayCircle className="w-5 h-5" />
              Watch Virtual Tour
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/10 border-2 flex items-center justify-center gap-2"
              style={{ borderColor: 'white' }}
            >
              Schedule Farm Visit
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>Questions? Email: <a href="mailto:info@zkflowers.com" className="hover:underline" style={{ color: '#E60000' }}>info@zkflowers.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}