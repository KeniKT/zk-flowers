import React, { useEffect, useRef, useState } from "react";

// Import your variety images
import redRose from "../../../assets/red.jpg";
import whiteRose from "../../../assets/white.jpeg";
import mixedRoses from "../../../assets/mixed.jpg";

export default function VarietiesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const varieties = [
    {
      name: "Red Roses",
      description: "Classic long-stemmed varieties with rich color and perfect form for premium bouquets. Our red roses are known for their deep crimson hue and exceptional vase life.",
      image: redRose,
      features: ["Premium long-stem", "Deep crimson color", "Extended vase life", "Perfect for bouquets"]
    },
    {
      name: "White Roses",
      description: "Elegant blooms ideal for weddings and high-end arrangements. Pure white petals with excellent form and delicate fragrance for sophisticated occasions.",
      image: whiteRose,
      features: ["Pure white petals", "Wedding grade quality", "Delicate fragrance", "Sophisticated appeal"]
    },
    {
      name: "Mixed Colors",
      description: "Vibrant combinations suitable for retail markets and gift purposes. Carefully curated mixes that create stunning visual impact and market appeal.",
      image: mixedRoses,
      features: ["Color coordination", "Market-ready mixes", "Visual impact", "Gift perfect"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Only the topic/heading part matches other sections */}
        <div className={`mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
            Our Varieties
          </h2>
          <div className="w-20 h-1 bg-green-600"></div>
        </div>

        {/* Keep your animated card layout from before */}
        <div className={`transition-all duration-700 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed">
            ZK Flowers PLC cultivates a diverse range of premium rose varieties to meet global market preferences 
            and customer expectations. Each variety is carefully selected for its unique characteristics and market appeal.
          </p>
        </div>

        {/* Your original animated cards layout with enhanced animations */}
        <div className="grid lg:grid-cols-3 gap-8">
          {varieties.map((variety, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl hover:border-green-300 transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 200 + 500}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Shine effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000 ${
                hoveredCard === index ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'
              } z-10`}></div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={variety.image}
                  alt={variety.name}
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    hoveredCard === index ? 'scale-110 rotate-1' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-all duration-500 ${
                  hoveredCard === index ? 'opacity-20' : 'opacity-40'
                }`}></div>
                
                {/* Floating title overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-all duration-500 transform ${
                  hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <h3 className="text-white text-xl font-bold text-center">{variety.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-0">
                <h3 className="text-xl font-bold mb-3 transition-all duration-300 transform hover:scale-105 origin-left" style={{ color: "#14482E" }}>
                  {variety.name}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed transition-all duration-300 hover:text-gray-800">
                  {variety.description}
                </p>
                
                {/* Features List with staggered animation */}
                <ul className="space-y-2">
                  {variety.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-gray-600 transition-all duration-300 transform hover:translate-x-2 hover:text-green-700"
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <svg className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 transition-transform duration-300 hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Animated Quality Badge */}
                <div className="mt-4 pt-4 border-t border-green-100 transition-all duration-300 hover:border-green-300">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 transition-all duration-300 hover:bg-green-200 hover:scale-105 hover:shadow-sm">
                    <svg className="w-3 h-3 mr-1 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Premium Quality
                  </span>
                </div>
              </div>

              {/* Hover border glow effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 ${
                hoveredCard === index ? 'border-green-300 opacity-100' : 'opacity-0'
              } pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Subtle floating animation for all cards */}
        <style jsx>{`
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          .grid > div {
            animation: gentleFloat 6s ease-in-out infinite;
          }
          .grid > div:nth-child(1) {
            animation-delay: 0s;
          }
          .grid > div:nth-child(2) {
            animation-delay: 2s;
          }
          .grid > div:nth-child(3) {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </section>
  );
}