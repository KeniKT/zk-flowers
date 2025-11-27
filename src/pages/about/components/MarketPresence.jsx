import React, { useEffect, useRef, useState } from "react";
import { Globe, Truck, Package, Shield, MapPin, TrendingUp, Award, Users } from "lucide-react";

// Import your market images
import marketMap from "../../../assets/Production.jpg";
import productionImage from "../../../assets/Production1.jpg"; // Using Production1.jpg for the gap

export default function MarketPresence() {
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

  const marketCards = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Multiple Continents & Markets"
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Strong International Relationships"
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Efficient logistics ensuring fresh arrival"
    },
    {
      icon: Package,
      title: "Quality Packaging",
      description: "Advanced packaging for international transport"
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "Strong partnerships built on trust"
    }
  ];

  const regions = [
    {
      name: "Europe",
      description: "Serving major European markets with premium quality roses and establishing long-term partnerships",
      icon: MapPin,
      details: "Leading markets: Netherlands, Germany, UK, France"
    },
    {
      name: "North America",
      description: "Exporting to key distributors across United States and Canada with consistent quality standards",
      icon: TrendingUp,
      details: "Major partners in USA and Canadian markets"
    },
    {
      name: "Middle East",
      description: "Building strong presence in emerging markets with premium flower varieties",
      icon: Award,
      details: "Growing demand in UAE, Saudi Arabia, Qatar"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Consistent Heading Style */}
        <div className={`mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
            Market Presence
          </h2>
          <div className="w-20 h-1 bg-green-600"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Map Image, Stats, and Production Image */}
          <div className="space-y-6">
            {/* Main Map Display */}
            <div className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="bg-white p-8">
                <img
                  src={marketMap}
                  alt="ZK Flowers Global Market Presence"
                  className="w-full h-80 object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Quick Stats - Compact Version */}
            <div className={`grid grid-cols-3 gap-4 transition-all duration-700 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white rounded-xl p-5 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">3</div>
                  <div className="text-gray-600 font-medium text-sm">Continents</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">20+</div>
                  <div className="text-gray-600 font-medium text-sm">Countries</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">100+</div>
                  <div className="text-gray-600 font-medium text-sm">Partners</div>
                </div>
              </div>
            </div>

            {/* Additional Production Image - Clean version without text */}
            <div className={`transition-all duration-700 delay-400 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
                <img
                  src={productionImage}
                  alt="ZK Flowers Production Facilities"
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Regional Markets */}
          <div className="space-y-6">
            {/* Text Content */}
            <div className={`transition-all duration-700 delay-600 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our flowers are exported worldwide, serving wholesalers, importers, and distributors across Europe, North America, and the Middle East. 
                We maintain strong relationships with our partners through consistent quality, timely delivery, and reliable service.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By investing in logistics, packaging, and sustainable export practices, we ensure our roses arrive fresh, vibrant, and ready for international markets.
              </p>
            </div>

            {/* Regional Markets - Middle East card reduced by 0.5 */}
            <div className={`grid grid-cols-1 gap-6 transition-all duration-700 delay-800 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              {regions.map((region, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1 flex flex-col ${
                    index === regions.length - 1 
                      ? 'p-5 min-h-[140px] justify-start' // Middle East card - reduced by 0.5
                      : 'p-7 min-h-[180px] justify-center' // Europe and North America cards
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <region.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-green-600 mb-3">{region.name}</h3>
                      <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                        {region.description}
                      </p>
                      <p className="text-green-600 text-xs font-medium">
                        {region.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Market Cards in a Single Row */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-700 delay-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {marketCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-5 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <card.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-green-600 font-semibold text-sm mb-2">{card.title}</div>
                <div className="text-gray-700 text-xs leading-tight">{card.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}