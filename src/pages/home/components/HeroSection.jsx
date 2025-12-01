import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
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
            {/* Even lighter overlay for maximum brightness */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/15 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/15"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-20 h-full flex items-center justify-center px-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated Main Heading */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              <span className="text-white drop-shadow-2xl">ZK</span>
              <span className="text-emerald-300 ml-4 drop-shadow-2xl">Flowers</span>
            </h1>
          </div>

          {/* Dynamic Title & Subtitle */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white drop-shadow-xl max-w-4xl mx-auto leading-tight">
              {slides[currentSlide].title}
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-50 drop-shadow-lg max-w-3xl mx-auto leading-relaxed font-light">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-8 z-30 group"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-10 h-10 text-white/80 group-hover:text-emerald-300 transition-all duration-300 animate-bounce-slow" />
      </button>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}