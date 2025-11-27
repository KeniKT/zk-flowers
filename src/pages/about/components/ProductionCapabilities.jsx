import React, { useEffect, useRef, useState } from "react";
import { Sprout, Snowflake, Leaf, CheckCircle } from "lucide-react";

// Correct import paths
import production1 from "../../../assets/Production.jpg";
import production2 from "../../../assets/Production1.jpg";
import production3 from "../../../assets/Production2.jpg";

export default function ProductionCapabilities() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef(null);
  
  const productionImages = [production1, production2, production3];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productionImages.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const capabilities = [
    {
      icon: Sprout,
      title: "State-of-the-art greenhouses and irrigation systems"
    },
    {
      icon: Snowflake,
      title: "Advanced post-harvest handling and cold storage facilities"
    },
    {
      icon: Leaf,
      title: "MPS-certified sustainable farming practices"
    },
    {
      icon: CheckCircle,
      title: "Dedicated quality control teams for every stage of production"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Original Heading Style - Same as Our Story */}
        <div className={`mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
            Production Capabilities
          </h2>
          <div className="w-20 h-1 bg-green-600"></div>
        </div>

        {/* Content with Image Gallery */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Image Gallery */}
          <div className="space-y-6">
            {/* Main Image Display */}
            <div className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <img
                src={productionImages[currentImage]}
                alt={`ZK Flowers Production ${currentImage + 1}`}
                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className={`grid grid-cols-3 gap-4 transition-all duration-700 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {productionImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    index === currentImage 
                      ? 'border-green-500 shadow-lg scale-105' 
                      : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                  {/* Overlay for non-active thumbnails */}
                  {index !== currentImage && (
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Text Content */}
            <div className={`transition-all duration-700 delay-400 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}>
              <p className="text-lg text-gray-700 leading-relaxed">
                ZK Flowers PLC operates on a modern farm spanning several hectares with cutting-edge greenhouse technology. 
                We grow a wide range of rose varieties in optimal highland conditions, ensuring the highest quality for export markets.
              </p>
            </div>

            {/* Stats Cards Row */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-600 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Several</div>
                  <div className="text-gray-600 font-medium text-sm">Hectares of Farmland</div>
                  <div className="w-12 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Optimal</div>
                  <div className="text-gray-600 font-medium text-sm">Highland Climate</div>
                  <div className="w-12 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Technology Cards */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-800 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200 hover:bg-green-100 transition-all duration-300">
                <div className="text-green-600 font-semibold mb-2">Technology</div>
                <div className="text-gray-700 text-sm">Cutting-Edge Greenhouse Systems</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200 hover:bg-green-100 transition-all duration-300">
                <div className="text-green-600 font-semibold mb-2">Varieties</div>
                <div className="text-gray-700 text-sm">Wide Range of Premium Roses</div>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Cards - Full Width Below */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-gray-700 font-medium text-sm leading-relaxed">
                  {capability.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}