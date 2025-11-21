import React from "react";
import { MapPin, Clock, Package, Ship } from "lucide-react";

export default function ExportAdvantages() {
  const exportAdvantages = [
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Ethiopia's geographic position provides excellent access to European, Middle Eastern, and Asian markets"
    },
    {
      icon: Clock,
      title: "Optimal Climate",
      description: "1,900m altitude ensures ideal growing conditions year-round for consistent quality"
    },
    {
      icon: Package,
      title: "Modern Facilities",
      description: "State-of-the-art cold chain and packing facilities maintain flower freshness"
    },
    {
      icon: Ship,
      title: "Reliable Logistics",
      description: "Direct flights and established partnerships ensure timely delivery"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f0fdf4' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#14482E' }}>
          Why Ethiopian Roses Excel Globally
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our strategic advantages enable us to deliver premium quality roses to markets worldwide
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exportAdvantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4"
              style={{ borderColor: '#15803d' }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#dcfce7' }}
              >
                <advantage.icon className="w-6 h-6" style={{ color: '#15803d' }} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#14482E' }}>
                {advantage.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}