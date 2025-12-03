import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Globe, Leaf, Award } from "lucide-react";
import { Link } from "react-router-dom";

// Import your local images from the assets folder
import Home1 from "../../../assets/Home1.jpg";
import Home2 from "../../../assets/Home2.jpg";
import Home3 from "../../../assets/Home3.jpg";
import Home4 from "../../../assets/Home4.jpg";
import Home5 from "../../../assets/Home5.jpg";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  const slides = [
    {
      image: Home1,
      title: "Premium Ethiopian Roses",
      subtitle: "Cultivated at 1,900m altitude for exceptional quality and vase life"
    },
    {
      image: Home2,
      title: "Sustainable Cultivation",
      subtitle: "Environmentally responsible farming with precision agriculture"
    },
    {
      image: Home3,
      title: "Global Distribution",
      subtitle: "Delivering excellence to international markets with reliable logistics"
    },
    {
      image: Home4,
      title: "Natural Perfection",
      subtitle: "Fresh from our high-altitude farms to your doorstep"
    },
    {
      image: Home5,
      title: "Quality Excellence",
      subtitle: "Rigorously tested for perfection, longevity, and premium presentation"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNextSection = () => {
    if (heroRef.current) {
      const nextSection = heroRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Enhanced gradient overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-20 h-full flex items-center justify-center px-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* Animated Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
              <span className="text-white">ZK</span>
              <span className="text-emerald-300 ml-2">Flowers</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-6"></div>
          </div>

          {/* Dynamic Title & Subtitle */}
          <div className="mb-10">
            <p className="text-2xl md:text-4xl font-light mb-4 text-white max-w-3xl mx-auto leading-snug">
              {slides[currentSlide].title}
            </p>
            <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/products"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-3 font-semibold text-lg transform hover:scale-105"
            >
              Explore Our Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold text-lg hover:shadow-lg"
            >
              Request Quote
            </Link>
          </div>

          {/* Features Bar */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { icon: Leaf, label: "Sustainable Farming", detail: "Eco-Certified" },
              { icon: Globe, label: "Global Export", detail: "25+ Countries" },
              { icon: Award, label: "Premium Quality", detail: "ISO Certified" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-emerald-300" />
                </div>
                <div className="text-sm font-medium text-white mb-1">{feature.label}</div>
                <div className="text-xs text-emerald-200/80">{feature.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clean Arrow at Bottom */}
      <button
        onClick={scrollToNextSection}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-4 z-30 group"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-10 h-10 text-white/80 group-hover:text-emerald-300 transition-all duration-300 group-hover:scale-110 animate-bounce-slow" />
      </button>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
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
      `}</style>
    </section>
  );
}