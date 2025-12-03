import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Handshake, Users, Award, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function PartnersIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const partnerRefs = useRef([]);
  const benefitRefs = useRef([]);
  
  const partners = [
    { 
      name: "Flora Holland", 
      type: "Distribution", 
      country: "Netherlands", 
      flagCode: "nl",
      flagUrl: "https://flagcdn.com/w80/nl.png" 
    },
    { 
      name: "Scandinavian Flower Group", 
      type: "Distribution", 
      country: "Sweden", 
      flagCode: "se",
      flagUrl: "https://flagcdn.com/w80/se.png" 
    },
    { 
      name: "Ethiopian Airlines", 
      type: "Logistics", 
      country: "Ethiopia", 
      flagCode: "et",
      flagUrl: "https://flagcdn.com/w80/et.png" 
    }
  ];

  const benefits = [
    { icon: Users, title: "50+ Partners", desc: "Global network", color: "from-green-400 to-emerald-500" },
    { icon: Award, title: "12 Years Average", desc: "Long-term relationships", color: "from-emerald-400 to-green-500" },
    { icon: TrendingUp, title: "98% Satisfaction", desc: "Partner feedback", color: "from-lime-400 to-green-500" },
    { icon: Shield, title: "Sustainable", desc: "Eco-friendly partnerships", color: "from-teal-400 to-emerald-500" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animate partners with staggered delay
            partnerRefs.current.forEach((partner, index) => {
              if (partner) {
                setTimeout(() => {
                  partner.classList.add('animate-in');
                }, 300 + index * 150);
              }
            });
            
            // Animate benefits with staggered delay
            benefitRefs.current.forEach((benefit, index) => {
              if (benefit) {
                setTimeout(() => {
                  benefit.classList.add('animate-in');
                }, 600 + index * 150);
              }
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
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

  const addPartnerRef = (el, index) => {
    partnerRefs.current[index] = el;
  };

  const addBenefitRef = (el, index) => {
    benefitRefs.current[index] = el;
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-20 bg-gradient-to-br from-green-50/80 to-emerald-50/60 overflow-hidden relative"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-lime-300/10 rounded-full blur-3xl"></div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        @keyframes flagWave {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-header {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-partner {
          opacity: 0;
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        
        .animate-benefit {
          opacity: 0;
          animation: fadeInRight 0.6s ease-out forwards;
        }
        
        .animate-partner.animate-in,
        .animate-benefit.animate-in {
          opacity: 1;
        }
        
        .animate-button {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 1s;
        }
        
        .gradient-shimmer {
          background: linear-gradient(90deg, #10b981 0%, #34d399 25%, #22c55e 50%, #34d399 75%, #10b981 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(5, 150, 105, 0.1);
        }
        
        .card-hover:hover .flag-image {
          animation: flagWave 1s ease-in-out;
          transform-origin: bottom center;
        }
        
        .icon-gradient {
          background: linear-gradient(135deg, #059669, #10b981);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .flag-container {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 2px solid white;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Animated Header */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'animate-header' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-2 mb-4 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 blur-lg opacity-50 rounded-full"></div>
              <Handshake className="w-8 h-8 text-white relative z-10" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-800 bg-clip-text text-transparent">
              Global Partnerships Network
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Building strong relationships with trusted partners worldwide who share our commitment 
            to quality, sustainability, and excellence in floral exports.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Partners List - Animated from left */}
          <div className="space-y-6">
            {partners.map((partner, index) => {
              return (
                <div 
                  key={index} 
                  ref={(el) => addPartnerRef(el, index)}
                  className="animate-partner card-hover bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100 relative overflow-hidden group"
                >
                  {/* Animated background effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/80 to-green-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-1 group-hover:text-emerald-800 transition-colors">
                        {partner.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                          {partner.type}
                        </span>
                        <span className="text-gray-600 text-sm">•</span>
                        <span className="flex items-center gap-1 text-gray-600 text-sm">
                          <span className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          </span>
                          {partner.country}
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="flag-container bg-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={partner.flagUrl}
                          alt={`${partner.country} flag`}
                          className="w-full h-full object-cover flag-image"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://flagcdn.com/w80/${partner.flagCode}.png`;
                          }}
                        />
                      </div>
                      {/* Pulsing ring effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-emerald-300/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  
                  {/* Connection line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              );
            })}
          </div>

          {/* Benefits - Animated from right */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div 
                  key={index}
                  ref={(el) => addBenefitRef(el, index)}
                  className="animate-benefit card-hover bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100 flex flex-col items-center text-center group"
                >
                  {/* Gradient background circle */}
                  <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${benefit.color} p-0.5 mb-4 shadow-lg`}>
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <BenefitIcon className="w-10 h-10 icon-gradient" />
                    </div>
                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-emerald-200/50 transition-all duration-300"></div>
                  </div>
                  
                  <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:bg-gradient-to-r from-emerald-700 to-green-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {benefit.title}
                  </div>
                  <div className="text-gray-700 text-sm">{benefit.desc}</div>
                  
                  {/* Animated growing line */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 mt-4 group-hover:w-12 transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animated Button - Green Theme */}
        <div className={`text-center ${isVisible ? 'animate-button' : 'opacity-0'}`}>
          <Link
            to="/partners"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all font-semibold text-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            {/* Shimmer effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="relative z-10">Explore Our Global Network</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
            
            {/* Animated leaf pattern border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}