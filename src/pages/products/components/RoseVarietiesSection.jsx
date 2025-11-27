import React, { useState } from "react";
import { Ruler, Clock, CheckCircle, Star, ArrowRight } from "lucide-react";

export default function RoseVarietiesSection() {
  const [selectedVariety, setSelectedVariety] = useState(0);

  const varieties = [
    {
      name: "Moon Walk",
      color: "Yellow",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Vibrant yellow blooms that bring sunshine to any arrangement. Perfect for celebrations and special occasions.",
      features: ["Large head size", "Bright yellow petals", "Strong stems", "Excellent vase life"],
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=800&q=80",
      gradient: "from-yellow-500/20 to-amber-500/20"
    },
    {
      name: "La Belle",
      color: "Lime Pink",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Unique lime-pink coloration creates a stunning visual impact. Ideal for modern, sophisticated arrangements.",
      features: ["Unique color blend", "Large blooms", "Premium quality", "Long-lasting freshness"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      gradient: "from-pink-500/20 to-lime-500/20"
    },
    {
      name: "Athena",
      color: "White",
      headSize: "4.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Classic white roses symbolizing purity and elegance. Perfect for weddings, events, and timeless arrangements.",
      features: ["Pure white petals", "Classic elegance", "Versatile use", "Consistent quality"],
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
      gradient: "from-gray-300/20 to-slate-300/20"
    },
    {
      name: "Belle Rose",
      color: "Pink/Green",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Distinctive pink petals with green accents offer a unique aesthetic. Popular for creative and contemporary designs.",
      features: ["Unique color mix", "Eye-catching appearance", "Large head", "Premium grade"],
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
      gradient: "from-pink-500/20 to-emerald-500/20"
    },
    {
      name: "Bisou",
      color: "Light Pink",
      headSize: "4.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-14 days",
      description: "Delicate light pink roses perfect for romantic occasions. Soft, feminine beauty with excellent vase life.",
      features: ["Soft pink tone", "Romantic appeal", "Delicate petals", "Reliable quality"],
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
      gradient: "from-rose-500/20 to-pink-500/20"
    },
    {
      name: "Topaz",
      color: "Cream",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Elegant cream-colored roses with warm undertones. Sophisticated choice for luxury arrangements.",
      features: ["Warm cream tone", "Sophisticated look", "Large blooms", "Premium quality"],
      image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=800&q=80",
      gradient: "from-amber-200/20 to-yellow-200/20"
    },
    {
      name: "Sweetness",
      color: "Pink",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Rich pink roses with perfect form. A customer favorite for both retail and events.",
      features: ["Rich pink color", "Perfect form", "Popular choice", "Excellent durability"],
      image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=800&q=80",
      gradient: "from-pink-600/20 to-rose-600/20"
    },
    {
      name: "Cherry O",
      color: "Red",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Deep red roses representing passion and love. Classic choice for romantic occasions and celebrations.",
      features: ["Deep red color", "Classic beauty", "Strong stems", "Long vase life"],
      image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=800&q=80",
      gradient: "from-red-600/20 to-rose-700/20"
    },
    {
      name: "Avalanche",
      color: "White",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Premium white roses with exceptional purity. Ideal for high-end weddings and luxury events.",
      features: ["Pure white", "Premium grade", "Large heads", "Luxury quality"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      gradient: "from-white/20 to-gray-200/20"
    },
    {
      name: "Shimmer",
      color: "Lavender",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Unique lavender-hued roses for distinctive arrangements. Perfect for creative floral designs.",
      features: ["Unique lavender", "Distinctive look", "Creative appeal", "High quality"],
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
      gradient: "from-purple-400/20 to-lavender-400/20"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#14482E' }}>Our Rose Varieties</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Carefully selected varieties optimized for head size, color consistency, vase life, and market demand
        </p>
      </div>

      {/* Featured Variety Display */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Image Side */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
          <img
            src={varieties[selectedVariety].image}
            alt={varieties[selectedVariety].name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${varieties[selectedVariety].gradient} to-transparent mix-blend-overlay`}></div>
          <div className="absolute top-6 left-6 right-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
              <span className="text-xs font-semibold tracking-wider" style={{ color: '#15803d' }}>
                ALL YEAR AVAILABLE
              </span>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white text-sm font-semibold">Premium Grade</span>
            </div>
          </div>
        </div>

        {/* Details Side */}
        <div className="space-y-6">
          <div>
            <h3 className="text-4xl font-bold mb-2" style={{ color: '#14482E' }}>
              {varieties[selectedVariety].name}
            </h3>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg font-semibold" style={{ color: '#15803d' }}>
                {varieties[selectedVariety].color}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{varieties[selectedVariety].headSize} head size</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {varieties[selectedVariety].description}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#15803d' }}>
              <Ruler className="w-5 h-5 mb-2" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-1">Available Lengths</div>
              <div className="text-sm font-semibold" style={{ color: '#14482E' }}>
                {varieties[selectedVariety].lengths.join(', ')}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#15803d' }}>
              <Clock className="w-5 h-5 mb-2" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-1">Vase Life</div>
              <div className="text-sm font-semibold" style={{ color: '#14482E' }}>
                {varieties[selectedVariety].vaseLife}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white p-6 rounded-lg shadow-sm border" style={{ borderColor: '#dcfce7' }}>
            <h4 className="font-bold mb-4" style={{ color: '#14482E' }}>Key Features</h4>
            <div className="grid grid-cols-2 gap-3">
              {varieties[selectedVariety].features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="w-full py-4 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: '#15803d', color: 'white' }}
          >
            Request Sample
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Variety Selector Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {varieties.map((variety, index) => (
          <button
            key={index}
            onClick={() => setSelectedVariety(index)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedVariety === index
                ? 'shadow-lg transform scale-105'
                : 'hover:shadow-md'
            }`}
            style={{
              backgroundColor: selectedVariety === index ? '#f0fdf4' : 'white',
              borderColor: selectedVariety === index ? '#15803d' : '#dcfce7'
            }}
          >
            <div className="font-bold mb-1" style={{ color: '#14482E' }}>{variety.name}</div>
            <div className="text-xs text-gray-600">{variety.color}</div>
            <div className="text-xs text-gray-500 mt-2">{variety.headSize}</div>
          </button>
        ))}
      </div>
    </section>
  );
}