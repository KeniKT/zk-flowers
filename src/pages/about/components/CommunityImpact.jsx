import React, { useEffect, useRef, useState } from "react";

// Import your community image
import communityImage from "../../../assets/Community.jpg";

export default function CommunityImpact() {
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

  const impactStats = [
    { number: "500+", label: "Local Families Employed" },
    { number: "15+", label: "Years of Community Support" },
    { number: "10+", label: "Local Schools Supported" },
    { number: "100%", label: "Fair Wage Commitment" }
  ];

  const initiatives = [
    {
      title: "Education Support",
      description: "Providing scholarships, school supplies, and educational infrastructure for local children"
    },
    {
      title: "Healthcare Access",
      description: "Supporting local health initiatives and providing medical resources to communities"
    },
    {
      title: "Skill Development",
      description: "Training programs and workshops to enhance local employment opportunities"
    },
    {
      title: "Environmental Care",
      description: "Sustainable farming practices and environmental conservation programs"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-6 bg-gradient-to-br from-green-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Consistent Heading Style */}
        <div className={`mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
            Community Impact
          </h2>
          <div className="w-20 h-1 bg-green-600"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Community Image */}
          <div className={`transition-all duration-700 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={communityImage}
                alt="ZK Flowers Community Impact - Local families and community support"
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-bold mb-2">Building Stronger Communities</h3>
                <p className="text-white/90 text-sm">Debre Zeit & Surrounding Areas</p>
              </div>
            </div>
          </div>

          {/* Right Column - Impact Content */}
          <div className="space-y-6">
            {/* Main Description */}
            <div className={`transition-all duration-700 delay-300 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                ZK Flowers PLC prioritizes social responsibility, creating employment for hundreds of local families 
                in Debre Zeit and surrounding communities while fostering sustainable economic and social growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We invest in local education, health, and skill-building programs, ensuring our success translates 
                into meaningful community development and lasting positive impact.
              </p>
            </div>

            {/* Impact Stats */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {impactStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-lg border border-green-100 text-center hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-2xl font-bold text-green-600 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Initiatives */}
        <div className={`transition-all duration-700 delay-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: "#14482E" }}>
            Our Community Initiatives
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300">
                  {initiative.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className={`mt-12 bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center transition-all duration-700 delay-900 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-3xl mx-auto">
            <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#14482E" }}>
              Our Commitment to Community
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At ZK Flowers, we believe that our success is measured not just by the quality of our roses, 
              but by the positive impact we create in the communities we serve. We are committed to building 
              lasting relationships and fostering sustainable development for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}