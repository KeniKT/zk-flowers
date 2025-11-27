import React, { useState, useEffect } from "react";
import { MapPin, TrendingUp } from "lucide-react";

// Correct import paths
import hero1 from "../../../assets/hero.jpg";
import hero2 from "../../../assets/hero1.jpg";
import hero3 from "../../../assets/hero2.jpg";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [hero1, hero2, hero3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white py-20 px-4 overflow-hidden" style={{ backgroundColor: "#0A5C2E" }}>
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`ZK Flowers ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ imageRendering: 'high-quality' }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content with colored text */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Text Container with Glass Morphism Effect */}
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          {/* Main heading with green gradient text */}
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent drop-shadow-lg">
            ZK Flowers PLC
          </h1>
          
          {/* Subheading with light green text */}
          <p className="text-2xl font-light mb-6 text-emerald-100 drop-shadow-md">
            Building partnerships. Growing excellence. Delivering beauty worldwide.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            {/* Location info with green accents */}
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-emerald-400/30">
              <MapPin className="w-4 h-4 text-emerald-300" />
              <span className="text-emerald-50">Debre Zeit (Bishoftu), Ethiopia - 1,900m altitude, 45km from Addis Ababa</span>
            </div>
            
            {/* Growth info with green accents */}
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-emerald-400/30">
              <TrendingUp className="w-4 h-4 text-emerald-300" />
              <span className="text-emerald-50">Established 2008 | 300%+ Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}