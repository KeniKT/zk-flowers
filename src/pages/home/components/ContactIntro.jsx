import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #E8F5E9 0%, #F1F8E9 50%, #E8F5E9 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-900">Let's Connect</span>
            </div>

            <h2 
              className={`text-5xl md:text-6xl font-black mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                background: 'linear-gradient(135deg, #0A5C2E 0%, #14482E 50%, #0F7132 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Get In Touch
            </h2>
            
            <p 
              className={`text-xl text-gray-700 mb-8 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Ready to discuss your rose requirements? Our team is here to help with 
              inquiries, quotes, and partnership opportunities. Let's grow together!
            </p>

            {/* Stats Cards */}
            <div 
              className={`grid grid-cols-2 gap-4 mb-10 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                <div className="text-4xl font-black text-green-600 mb-2">24h</div>
                <div className="text-sm text-gray-700 font-medium">Response Time</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100">
                <div className="text-4xl font-black text-green-600 mb-2">10+</div>
                <div className="text-sm text-gray-700 font-medium">Global Partners</div>
              </div>
            </div>

            <div 
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0A5C2E 0%, #0F7132 100%)'
                }}
              >
                <span className="relative z-10">Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-green-900 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-green-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image/Map Section */}
          <div className="relative">
            <div 
              className={`
                relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 delay-300
                ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-2'}
              `}
            >
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                alt="ZK Flowers Location"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-900/20 to-transparent"></div>
              
              {/* Location Pin with Enhanced Design */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 bg-green-500/30 rounded-full animate-ping"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white p-6 rounded-2xl shadow-2xl text-center hover:scale-110 transition-transform duration-300 border-4 border-green-500">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <MapPin className="w-6 h-6 text-white animate-bounce" />
                    </div>
                    <div className="font-black text-green-900 text-lg">ZK Flowers PLC</div>
                    <div className="text-sm text-gray-600 font-medium mt-1">Debre Zeit, Ethiopia</div>
                    <div className="text-xs text-green-600 font-semibold mt-2">1,900m Altitude</div>
                  </div>
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute top-6 right-6 flex gap-2">
                <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse delay-75"></div>
                <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>

            {/* Floating Badge */}
            <div 
              className={`
                absolute -bottom-6 -right-6 bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-2xl shadow-2xl 
                transition-all duration-700 delay-500 hover:scale-110 border-4 border-white
                ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-4 rotate-6'}
              `}
            >
              <Clock className="w-10 h-10 mb-2" />
              <div className="text-3xl font-black">24/7</div>
              <div className="text-sm font-semibold">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .delay-75 {
          animation-delay: 75ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </section>
  );
}