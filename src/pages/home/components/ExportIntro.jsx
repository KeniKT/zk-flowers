import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Globe, MapPin, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExportIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const markets = [
    { name: "Netherlands", flag: "🇳🇱", status: "Active", color: "green" },
    { name: "Scandinavia", flag: "🇸🇪", status: "Developing", color: "yellow" },
    { name: "Middle East", flag: "🇦🇪", status: "Planned", color: "blue" },
    { name: "Japan", flag: "🇯🇵", status: "Planned", color: "blue" }
  ];

  const advantages = [
    { icon: MapPin, title: "Strategic Location", desc: "Optimal access to global markets" },
    { icon: Clock, title: "Fast Delivery", desc: "8-18 hours to major markets" },
    { icon: TrendingUp, title: "Growing Network", desc: "Expanding to new regions" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
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
      className="py-16 md:py-20 bg-white overflow-hidden"
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-delay-100 {
          animation-delay: 100ms;
        }
        
        .animate-delay-200 {
          animation-delay: 200ms;
        }
        
        .animate-delay-300 {
          animation-delay: 300ms;
        }
        
        .animate-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div 
              className={`flex items-center gap-2 mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="relative">
                <Globe className="w-6 h-6 text-green-600 animate-float" />
              </div>
              <span className="text-sm font-semibold text-green-600 tracking-wider">
                GLOBAL REACH
              </span>
            </div>
            
            <h2 
              className={`text-3xl md:text-5xl font-bold text-green-900 mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Worldwide Distribution
            </h2>
            
            <p 
              className={`text-base md:text-lg text-gray-700 mb-8 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              With established partnerships and reliable logistics, we deliver premium Ethiopian 
              roses to markets across Europe, with expanding reach into the Middle East and Asia.
            </p>

            {/* Markets Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {markets.map((market, index) => (
                <div 
                  key={index}
                  className={`
                    bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100 
                    transition-all duration-500 hover:shadow-lg hover:-translate-y-1
                    ${isVisible 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 translate-y-4'
                    }
                  `}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      {market.flag}
                    </span>
                    <div>
                      <div className="font-semibold text-green-900">{market.name}</div>
                      <div className={`text-xs px-3 py-1 rounded-full inline-block font-medium mt-1 ${
                        market.status === 'Active' ? 'bg-green-100 text-green-700 border border-green-200' :
                        market.status === 'Developing' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                        'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}>
                        {market.status}
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated border bottom on hover */}
                  <div className="h-0.5 w-0 bg-gradient-to-r from-green-400 to-emerald-400 mt-3 transition-all duration-300 group-hover:w-full"></div>
                </div>
              ))}
            </div>

            <div 
              className={`transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link
                to="/export-regions"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all font-semibold overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10">Explore Export Regions</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Advantages */}
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className={`
                  flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl 
                  border border-green-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-1
                  ${isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-4'
                  }
                `}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="w-6 h-6 text-green-600" />
                  </div>
                  {/* Pulsing ring on hover */}
                  <div className="absolute inset-0 rounded-lg border-2 border-green-200 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="font-bold text-green-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-700">{advantage.desc}</p>
                </div>
                
                {/* Animated arrow on hover */}
                <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}