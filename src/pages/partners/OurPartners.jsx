import React, { useState } from 'react';
import { Handshake, Globe, TrendingUp, Users, Award, CheckCircle, Star, Building2, Package, Truck, MapPin, Target, ArrowRight, Heart } from 'lucide-react';

export default function OurPartners() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const partnerCategories = [
    { id: 'all', name: 'All Partners', icon: Globe },
    { id: 'distributors', name: 'Distributors', icon: Truck },
    { id: 'retailers', name: 'Retailers', icon: Building2 },
    { id: 'exporters', name: 'Export Partners', icon: Package },
    { id: 'logistics', name: 'Logistics', icon: MapPin }
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

  const partnershipValues = [
    {
      icon: Handshake,
      title: "Mutual Trust",
      description: "Building long-term relationships based on reliability and transparency"
    },
    {
      icon: Target,
      title: "Shared Goals",
      description: "Working together towards common objectives and market success"
    },
    {
      icon: TrendingUp,
      title: "Growth Focus",
      description: "Supporting partner growth through quality products and consistent supply"
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "Maintaining the highest standards to protect partner reputations"
    },
    {
      icon: Users,
      title: "Communication",
      description: "Open dialogue and responsive support for all partner needs"
    },
    {
      icon: Heart,
      title: "Partnership Spirit",
      description: "Treating partners as extensions of our own business family"
    }
  ];

  const stats = [
    { value: "50+", label: "Active Partners", icon: Handshake },
    { value: "15", label: "Countries", icon: Globe },
    { value: "12", label: "Years Average", icon: TrendingUp },
    { value: "98%", label: "Satisfaction Rate", icon: Star }
  ];

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-4" style={{ backgroundColor: '#450a0a' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="w-8 h-8" style={{ color: '#E60000' }} />
            <span className="text-sm tracking-wider" style={{ color: '#E60000' }}>PARTNERSHIPS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
            Building lasting relationships with distributors, retailers, and logistics providers worldwide
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <stat.icon className="w-6 h-6 mb-2" style={{ color: '#E60000' }} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#7f1d1d' }}>Our Partnership Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our relationships and ensure mutual success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnershipValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-t-4"
              style={{ borderColor: '#fee2e2' }}
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#fee2e2' }}
              >
                <value.icon className="w-7 h-7" style={{ color: '#dc2626' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4C090F' }}>
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Showcase */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fef2f2' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7f1d1d' }}>Meet Our Partners</h2>
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
                    backgroundColor: activeCategory === category.id ? '#dc2626' : 'white',
                    color: activeCategory === category.id ? 'white' : '#4C090F'
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
                    <span className="text-xs font-semibold" style={{ color: '#dc2626' }}>
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
                  
                  <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: '#fef2f2' }}>
                    <div className="flex items-center gap-2 mb-1">
                      <Handshake className="w-4 h-4" style={{ color: '#dc2626' }} />
                      <span className="text-xs font-semibold text-gray-600">Partnership</span>
                    </div>
                    <p className="text-sm" style={{ color: '#4C090F' }}>{partner.partnership}</p>
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

      {/* Become a Partner */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border" style={{ borderColor: '#fee2e2' }}>
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#7f1d1d' }}>
                Become a Partner
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We're always looking to expand our network of quality partners who share our commitment 
                to excellence and sustainable growth.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="font-bold" style={{ color: '#4C090F' }}>We're Looking For:</h3>
                {[
                  "Distributors with established market presence",
                  "Premium retailers focused on quality",
                  "Logistics providers with cold chain capabilities",
                  "Export partners in emerging markets",
                  "Organizations aligned with our sustainability values"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                className="px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center gap-2"
                style={{ backgroundColor: '#dc2626', color: 'white' }}
              >
                Partner Inquiry Form
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                alt="Partnership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fef2f2' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7f1d1d' }}>
              Why Partner with ZK Flowers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The advantages of working with Ethiopia's leading rose exporter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                desc: "Certified roses that meet international standards"
              },
              {
                icon: TrendingUp,
                title: "Reliable Supply",
                desc: "Year-round production with consistent volumes"
              },
              {
                icon: Package,
                title: "Flexible Terms",
                desc: "Customized packaging and delivery options"
              },
              {
                icon: Users,
                title: "Dedicated Support",
                desc: "Responsive team for all partner needs"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center border-t-4"
                style={{ borderColor: '#E60000' }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#fee2e2' }}
                >
                  <benefit.icon className="w-8 h-8" style={{ color: '#dc2626' }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#4C090F' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#450a0a' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Grow Together
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Interested in becoming a partner? Get in touch with our partnerships team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: '#E60000' }}
            >
              Contact Partnerships Team
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/10 border-2"
              style={{ borderColor: 'white' }}
            >
              Download Partnership Brochure
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>Email: <a href="mailto:partnerships@zkflowers.com" className="hover:underline" style={{ color: '#E60000' }}>partnerships@zkflowers.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}