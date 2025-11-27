import React, { useEffect, useRef, useState } from "react";

export default function CTASection() {
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
      className="relative py-16 px-6 text-white"
      style={{ 
        background: "linear-gradient(135deg, #0F7132 0%, #1a5f3e 50%, #14482E 100%)",
        borderTop: "3px solid #0F7132"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Consistent Heading Style */}
        <div className={`mb-8 text-center transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Together?
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* Text Content */}
        <div className={`mb-8 text-center transition-all duration-700 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Partner with ZK Flowers PLC and bring premium Ethiopian roses to the world.
          </p>
        </div>

        {/* CTA Button */}
        <div className={`text-center transition-all duration-700 delay-500 transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl bg-white text-green-700 font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 border-2 border-white"
          >
            Contact Us Today
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-8 opacity-20">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C15.87 2 19 5.13 19 9c0 5.25-7 13-7 13S5 14.25 5 9c0-3.87 3.13-7 7-7zm0 2C9.24 4 7 6.24 7 9c0 1 0 3 5 9.71C17 12 17 10 17 9c0-2.76-2.24-5-5-5zm0 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
          </svg>
        </div>
        <div className="absolute bottom-4 left-8 opacity-20">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C15.87 2 19 5.13 19 9c0 5.25-7 13-7 13S5 14.25 5 9c0-3.87 3.13-7 7-7zm0 2C9.24 4 7 6.24 7 9c0 1 0 3 5 9.71C17 12 17 10 17 9c0-2.76-2.24-5-5-5zm0 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}