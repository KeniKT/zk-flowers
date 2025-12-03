import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sprout, Scissors, Thermometer, Package, Plane, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
// Import your local image
import QualityAssuranceImage from "../../../assets/QualityAssurance.jpg";

export default function ProcessIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const cardRef = useRef(null);
  
  const processSteps = [
    { icon: Sprout, title: "Cultivation", desc: "60-70 days optimal growth" },
    { icon: Scissors, title: "Harvesting", desc: "Early morning precision" },
    { icon: Thermometer, title: "Cold Chain", desc: "2-4°C temperature control" },
    { icon: Package, title: "Packing", desc: "Export-ready packaging" },
    { icon: Plane, title: "Delivery", desc: "Global logistics" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animate steps with staggered delay
            stepsRef.current.forEach((step, index) => {
              if (step) {
                setTimeout(() => {
                  step.classList.add('animate-in');
                }, index * 150);
              }
            });
            
            // Animate card
            if (cardRef.current) {
              setTimeout(() => {
                cardRef.current.classList.add('animate-in');
              }, 800);
            }
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

  // Add ref to each step
  const addStepRef = (el, index) => {
    stepsRef.current[index] = el;
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden"
    >
      <style jsx>{`
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
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-step {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-step.animate-in {
          opacity: 1;
        }
        
        .animate-card {
          opacity: 0;
          animation: scaleIn 0.8s ease-out forwards;
        }
        
        .animate-card.animate-in {
          opacity: 1;
        }
        
        .animate-text {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-text-left {
          opacity: 0;
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-text-right {
          opacity: 0;
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .icon-float {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .icon-float:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 100, 0, 0.1);
        }
        
        .number-pop {
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        
        .process-step:hover .number-pop {
          transform: scale(1.1);
          background-color: #059669;
        }
        
        .line-grow {
          width: 0;
          transition: width 1.5s ease-out;
        }
        
        .line-grow.animate-in {
          width: 80%;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-900 { animation-delay: 900ms; }
      `}</style>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Animated Heading */}
        <div className={`text-center mb-10 ${isVisible ? 'animate-text' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Our Cultivation Process
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            From seed to shipment, every step is carefully managed to ensure premium quality 
            and maximum vase life for our roses.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-8">
          {/* Animated Connection Line */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1 bg-green-200 hidden md:block line-grow"></div>
          
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                ref={(el) => addStepRef(el, index)}
                className="text-center group animate-step"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-green-200 transition-colors relative icon-float">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold number-pop">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-green-900 mb-1 md:mb-2 text-sm md:text-base">{step.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance with staggered animations */}
        <div 
          ref={cardRef}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-green-100 mb-6 animate-card"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className={`${isVisible ? 'animate-text-left delay-400' : 'opacity-0'}`}>
              <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-3 md:mb-4">Quality Assurance</h3>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Every stem undergoes rigorous quality checks and meets international 
                certification standards including MPS-ABC and MPS-SQ.
              </p>
              <div className="space-y-2 md:space-y-3">
                {["100% quality inspection", "Cold chain certified", "Sustainable practices", "Traceability systems"].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-2 md:gap-3 ${isVisible ? 'animate-text-left' : 'opacity-0'}`}
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative h-56 md:h-64 rounded-xl overflow-hidden ${isVisible ? 'animate-text-right delay-600' : 'opacity-0'}`}>
              {/* Local image from assets */}
              <img
                src={QualityAssuranceImage}
                alt="Quality Control"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Animated Button */}
        <div className={`text-center mt-6 ${isVisible ? 'animate-text delay-900' : 'opacity-0'}`}>
          <Link
            to="/how-we-work"
            className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold group text-sm md:text-base transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
          >
            Learn About Our Process
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}