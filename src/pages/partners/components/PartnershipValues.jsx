import React, { useEffect, useRef, useState } from "react";
import { Handshake, Target, TrendingUp, Award, Users, Heart } from "lucide-react";

export default function PartnershipValues() {
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

  const partnershipValues = [
    {
      icon: Handshake,
      title: "Mutual Trust",
      description: "Building long-term relationships based on reliability and transparency"
    },
    {
      icon: Target,
      title: "Shared Goals",
      description: "Working together towards common objectives and market success"
    },
    {
      icon: TrendingUp,
      title: "Growth Focus",
      description: "Supporting partner growth through quality products and consistent supply"
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "Maintaining the highest standards to protect partner reputations"
    },
    {
      icon: Users,
      title: "Communication",
      description: "Open dialogue and responsive support for all partner needs"
    },
    {
      icon: Heart,
      title: "Partnership Spirit",
      description: "Treating partners as extensions of our own business family"
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
            Our Partnership Values
          </h2>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl">
            The principles that guide our relationships and ensure mutual success
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnershipValues.map((value, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#dcfce7' }}
              >
                <value.icon className="w-8 h-8" style={{ color: '#15803d' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#14482E' }}>
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}