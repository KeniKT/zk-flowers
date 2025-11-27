import React, { useEffect, useRef, useState } from "react";
import { Award, Leaf, Globe, Users, CheckCircle, Clock, Shield, Heart } from "lucide-react";

export default function WhyChooseUs() {
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

  const features = [
    {
      icon: Award,
      title: "Consistent Quality",
      description: "Every flower is inspected for color, stem length, and freshness to meet international standards.",
      details: "Rigorous quality control at every stage"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We employ eco-friendly farming practices, water-saving irrigation, and responsible chemical use.",
      details: "Environmentally conscious cultivation"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Reliable export operations ensure timely delivery to wholesalers and importers worldwide.",
      details: "Established international logistics"
    },
    {
      icon: Users,
      title: "Community Commitment",
      description: "We empower local communities through jobs, education, and social programs.",
      details: "Positive social impact"
    }
  ];

  const advantages = [
    {
      icon: CheckCircle,
      text: "ISO 9001 Certified Quality Management"
    },
    {
      icon: Clock,
      text: "24/7 Customer Support & Order Tracking"
    },
    {
      icon: Shield,
      text: "Guanteed Freshness & Quality Assurance"
    },
    {
      icon: Heart,
      text: "Ethical & Sustainable Business Practices"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Consistent Heading Style */}
        <div className={`mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
            Why Choose ZK Flowers?
          </h2>
          <div className="w-20 h-1 bg-green-600"></div>
        </div>

        {/* Main Features Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-700 transition-colors duration-300" style={{ color: "#14482E" }}>
                {feature.title}
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                {feature.description}
              </p>
              <p className="text-green-600 text-sm font-medium">
                {feature.details}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Advantages */}
        <div className={`bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 transition-all duration-700 delay-500 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "#14482E" }}>
            Our Competitive Advantages
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-green-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <advantage.icon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{advantage.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600 font-medium">Satisfied Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-gray-600 font-medium">Quality Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}