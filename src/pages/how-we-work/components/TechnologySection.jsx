import React, { useEffect, useRef, useState } from "react";

export default function TechnologySection() {
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

  const technologies = [
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
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-6" 
      style={{ backgroundColor: '#f0fdf4' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Heading */}
            <div className={`mb-8 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
                Technology & Innovation
              </h2>
              <div className="w-20 h-1 bg-green-600 mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We continuously invest in modern technology and innovative practices to improve 
                efficiency, quality, and sustainability.
              </p>
            </div>

            {/* Technology Cards */}
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-5 rounded-xl shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-500 transform hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                  style={{
                    transitionDelay: `${200 + index * 100}ms`
                  }}
                >
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#14482E' }}>
                    {tech.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Stats */}
          <div className={`relative transition-all duration-700 delay-300 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg border border-green-100 group">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
                alt="Technology"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            {/* Stats Card */}
            <div className={`absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4 transition-all duration-700 delay-700 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`} style={{ borderColor: '#15803d' }}>
              <div className="text-4xl font-bold mb-1" style={{ color: '#15803d' }}>
                300%
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Growth through innovation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}