import React, { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

export default function BecomePartner() {
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
            Become a Partner
          </h2>
          <div className="w-20 h-1 bg-green-600"></div>
        </div>

        {/* Content Card */}
        <div className={`bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="grid md:grid-cols-2">
            {/* Left Column - Content */}
            <div className="p-8 md:p-12">
              <div className={`transition-all duration-700 delay-400 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We're always looking to expand our network of quality partners who share our commitment 
                  to excellence and sustainable growth.
                </p>
              </div>
              
              <div className={`space-y-4 transition-all duration-700 delay-600 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}>
                <h3 className="text-xl font-bold mb-6" style={{ color: '#14482E' }}>
                  We're Looking For:
                </h3>
                <div className="space-y-4">
                  {[
                    "Distributors with established market presence",
                    "Premium retailers focused on quality",
                    "Logistics providers with cold chain capabilities",
                    "Export partners in emerging markets",
                    "Organizations aligned with our sustainability values"
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start gap-3 transition-all duration-500 hover:translate-x-2 transform ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                      }`}
                      style={{ transitionDelay: `${700 + index * 100}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300 hover:scale-110" style={{ color: '#22c55e' }} />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className={`relative h-64 md:h-auto overflow-hidden transition-all duration-700 delay-300 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                alt="Partnership"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Optional overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className={`transition-all duration-700 delay-1200 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                  <p className="text-white font-semibold text-lg drop-shadow-lg">
                    Join Our Growing Network
                  </p>
                  <p className="text-white/90 text-sm drop-shadow-lg">
                    Building partnerships that bloom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}