import React, { useState } from "react";
import { ArrowRight, Flower2, Ruler, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductsIntro() {
  const [activeVariety, setActiveVariety] = useState(0);

  const varieties = [
    {
      name: "Moon Walk",
      color: "Yellow",
      headSize: "5.5 cm",
      vaseLife: "10-15 days",
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "La Belle",
      color: "Lime Pink",
      headSize: "5.5 cm",
      vaseLife: "10-15 days",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Athena",
      color: "White",
      headSize: "4.5 cm",
      vaseLife: "10-15 days",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flower2 className="w-6 h-6 text-green-600" />
            <span className="text-sm font-semibold text-green-600 tracking-wider">OUR ROSES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Premium Rose Varieties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of 10 exquisite rose varieties, each selected for their 
            unique beauty, exceptional vase life, and market appeal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
            <img
              src={varieties[activeVariety].image}
              alt={varieties[activeVariety].name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-green-600">ALL YEAR AVAILABLE</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-green-900 mb-2">
                {varieties[activeVariety].name}
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-lg font-semibold text-green-600">{varieties[activeVariety].color}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{varieties[activeVariety].headSize} head size</span>
              </div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <Ruler className="w-6 h-6 text-green-600 mb-2" />
                <div className="text-sm text-gray-600 mb-1">Available Lengths</div>
                <div className="font-semibold text-green-900">40-70 cm</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-green-600 mb-2" />
                <div className="text-sm text-gray-600 mb-1">Vase Life</div>
                <div className="font-semibold text-green-900">{varieties[activeVariety].vaseLife}</div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {["Large head size", "Strong stems", "Premium quality", "Consistent color"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold group"
            >
              View All Varieties
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Variety Selector */}
        <div className="flex justify-center gap-4">
          {varieties.map((variety, index) => (
            <button
              key={index}
              onClick={() => setActiveVariety(index)}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeVariety === index
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {variety.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}