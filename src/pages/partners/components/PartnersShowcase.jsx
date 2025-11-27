import React, { useState } from "react";
import { Handshake, CheckCircle } from "lucide-react";

export default function PartnersShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const partnerCategories = [
    { id: 'all', name: 'All Partners', icon: Handshake },
    { id: 'distributors', name: 'Distributors', icon: Handshake },
    { id: 'retailers', name: 'Retailers', icon: Handshake },
    { id: 'exporters', name: 'Export Partners', icon: Handshake },
    { id: 'logistics', name: 'Logistics', icon: Handshake }
  ];

  const partners = [
    {
      name: "Flora Holland",
      category: 'distributors',
      country: "Netherlands",
      flag: "🇳🇱",
      description: "World's largest flower auction cooperative, connecting growers with buyers across Europe",
      partnership: "Primary distribution partner since 2010",
      volume: "High Volume",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      benefits: ["Market access", "Daily auctions", "Quality standards", "Payment security"]
    },
    {
      name: "Royal FloraHolland",
      category: 'distributors',
      country: "Netherlands",
      flag: "🇳🇱",
      description: "Leading international marketplace for ornamental horticulture",
      partnership: "Strategic partner for European markets",
      volume: "High Volume",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      benefits: ["Wide reach", "Premium positioning", "Market intelligence", "Brand visibility"]
    },
    {
      name: "Scandinavian Flower Group",
      category: 'distributors',
      country: "Sweden",
      flag: "🇸🇪",
      description: "Premier distributor serving Nordic markets with focus on sustainable sourcing",
      partnership: "Growing partnership since 2018",
      volume: "Medium-High Volume",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      benefits: ["Nordic coverage", "Sustainability focus", "Stable orders", "Premium pricing"]
    },
    {
      name: "European Flower Retailers",
      category: 'retailers',
      country: "Multi-Country",
      flag: "🇪🇺",
      description: "Network of premium florists and retail chains across Europe",
      partnership: "Retail network partnership",
      volume: "Medium Volume",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
      benefits: ["Direct retail access", "Brand exposure", "Customer feedback", "Market trends"]
    },
    {
      name: "Ethiopian Airlines Cargo",
      category: 'logistics',
      country: "Ethiopia",
      flag: "🇪🇹",
      description: "Africa's largest cargo carrier with extensive global network",
      partnership: "Primary logistics partner",
      volume: "Daily Flights",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      benefits: ["Direct flights", "Cold chain", "Reliable schedule", "Competitive rates"]
    },
    {
      name: "DHL Express",
      category: 'logistics',
      country: "Global",
      flag: "🌍",
      description: "Global express delivery leader with specialized floral logistics",
      partnership: "Express delivery partner",
      volume: "On-Demand",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
      benefits: ["Fast delivery", "Temperature control", "Global tracking", "Insurance options"]
    },
    {
      name: "Middle East Flowers",
      category: 'exporters',
      country: "UAE",
      flag: "🇦🇪",
      description: "Leading flower importer and distributor in the Gulf region",
      partnership: "Emerging market partnership",
      volume: "Growing",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      benefits: ["Market entry", "Local expertise", "High-value segment", "Growth potential"]
    },
    {
      name: "Asian Flower Network",
      category: 'exporters',
      country: "Japan & Korea",
      flag: "🇯🇵",
      description: "Premium flower distributor specializing in Asian luxury markets",
      partnership: "Strategic expansion partner",
      volume: "Planned",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      benefits: ["Premium positioning", "Quality standards", "Market education", "Long-term growth"]
    }
  ];

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f0fdf4' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#14482E' }}>Meet Our Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Trusted organizations helping us deliver Ethiopian roses to the world
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {partnerCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'shadow-lg'
                    : 'hover:shadow-md'
                }`}
                style={{
                  backgroundColor: activeCategory === category.id ? '#15803d' : 'white',
                  color: activeCategory === category.id ? 'white' : '#14482E'
                }}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPartners.map((partner, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              {/* Partner Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: hoveredPartner === index ? 'scale(1.1)' : 'scale(1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold" style={{ color: '#15803d' }}>
                    {partner.volume}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{partner.flag}</span>
                    <div>
                      <h3 className="text-white font-bold text-xl">{partner.name}</h3>
                      <p className="text-white/80 text-sm">{partner.country}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partner Details */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  {partner.description}
                </p>
                
                <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: '#f0fdf4' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <Handshake className="w-4 h-4" style={{ color: '#15803d' }} />
                    <span className="text-xs font-semibold text-gray-600">Partnership</span>
                  </div>
                  <p className="text-sm" style={{ color: '#14482E' }}>{partner.partnership}</p>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-600 mb-2">KEY BENEFITS</div>
                  <div className="grid grid-cols-2 gap-2">
                    {partner.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: '#22c55e' }} />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}