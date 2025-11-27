import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Globe, Leaf } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=2000&q=80",
      title: "Premium Ethiopian Roses",
      subtitle: "Cultivated at 1,900m altitude for exceptional quality"
    },
    {
      image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=2000&q=80",
      title: "Sustainable Excellence",
      subtitle: "Environmentally responsible farming practices"
    },
    {
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80",
      title: "Global Reach",
      subtitle: "Delivering beauty to markets worldwide"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-green-300" />
            <span className="text-sm font-semibold tracking-wider text-green-100">
              ETHIOPIAN EXCELLENCE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            ZK <span className="text-green-300">Flowers</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-light mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].title}
          </p>
          <p className="text-lg text-green-200 mb-12 max-w-2xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all hover:shadow-xl flex items-center justify-center gap-2 font-semibold">
              Explore Our Roses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all border border-white/30 font-semibold">
              Contact Sales
            </button>
          </div>

          {/* Quick Features */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            {[
              { icon: Leaf, label: "Sustainable" },
              { icon: Globe, label: "Global" },
              { icon: Sparkles, label: "Premium" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-8 h-8 text-green-300 mx-auto mb-2" />
                <div className="text-sm text-green-200 font-medium">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-green-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}