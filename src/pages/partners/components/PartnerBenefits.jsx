import React, { useEffect, useRef, useState } from "react";
import { Award, TrendingUp, Package, Users } from "lucide-react";

export default function PartnerBenefits() {
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

  const benefits = [
    {
      icon: Award,
      title: "Premium Quality",
      desc: "Certified roses that meet international standards"
    },
    {
      icon: TrendingUp,
      title: "Reliable Supply",
      desc: "Year-round production with consistent volumes"
    },
    {
      icon: Package,
      title: "Flexible Terms",
      desc: "Customized packaging and delivery options"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      desc: "Responsive team for all partner needs"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-6" 
      style={{ backgroundColor: '#f0fdf4' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading - matching StorySection style */}
        <div className={`mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
            Why Partner with ZK Flowers
          </h2>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl">
            The advantages of working with Ethiopia's leading rose exporter
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-500 transform hover:-translate-y-2 text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 hover:scale-110 hover:rotate-6"
                style={{ backgroundColor: '#dcfce7' }}
              >
                <benefit.icon className="w-8 h-8" style={{ color: '#15803d' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#14482E' }}>
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}