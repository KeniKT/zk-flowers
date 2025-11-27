import React, { useEffect, useRef, useState } from "react";
import { Target, Eye, Award, Leaf, Users, Shield } from "lucide-react";

export default function MissionVisionValues() {
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

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We commit to world-class production, post-harvest handling, and export standards."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Through MPS certifications, responsible farming practices, and efficient resource management."
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "We support local families, provide stable employment, and create long-term economic impact."
    },
    {
      icon: Shield,
      title: "Professionalism & Integrity",
      description: "We operate with transparency, reliability, and customer-focused service."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6" 
      style={{ backgroundColor: "#E8F5E9" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full group overflow-hidden">
              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-all duration-500">
                    <Target className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-3xl font-bold" style={{ color: "#0F7132" }}>Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To supply premium, sustainably-grown roses to international wholesalers and importers while empowering local communities and protecting the environment.
                </p>
                <div className="mt-6 h-1 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full group overflow-hidden">
              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-all duration-500">
                    <Eye className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-3xl font-bold" style={{ color: "#0F7132" }}>Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become Ethiopia's most trusted and globally recognized flower-export partner, delivering excellence in every stem and building long-term international partnerships.
                </p>
                <div className="mt-6 h-1 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`transition-all duration-1000 delay-400 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-white rounded-xl shadow-lg p-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold" style={{ color: "#0F7132" }}>Our Core Values</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={`group flex items-start gap-5 p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-md ${
                    isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-green-600 group-hover:shadow-lg transition-all duration-500">
                    <value.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-3" style={{ color: "#14482E" }}>
                      {value.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}