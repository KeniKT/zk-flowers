import React, { useState } from 'react';
import { Leaf, Award, Globe, Users, TrendingUp, MapPin } from 'lucide-react';

export default function AboutPage() {
  const [activeVariety, setActiveVariety] = useState(null);

  const varieties = [
    {
      name: "Moonwalk",
      color: "Yellow",
      headSize: "5.5 cm",
      lengths: "40, 50, 60, 70 cm",
      vaseLife: "10-15 days",
      availability: "All year round",
      colorClass: "bg-yellow-100 border-yellow-400"
    },
    {
      name: "LaBelle",
      color: "Lime Pink",
      headSize: "5.5 cm",
      lengths: "40, 50, 60, 70 cm",
      vaseLife: "10-15 days",
      availability: "All year round",
      colorClass: "bg-pink-100 border-pink-400"
    },
    {
      name: "Athena",
      color: "White",
      headSize: "4.5 cm",
      lengths: "40, 50, 60, 70 cm",
      vaseLife: "10-15 days",
      availability: "All year round",
      colorClass: "bg-gray-50 border-gray-300"
    },
    {
      name: "Bellerose",
      color: "Pink/Green",
      headSize: "5.5 cm",
      lengths: "40, 50, 60, 70 cm",
      vaseLife: "10-15 days",
      availability: "All year round",
      colorClass: "bg-green-100 border-green-400"
    },
    {
      name: "Bisou",
      color: "Light Pink",
      headSize: "4.5 cm",
      lengths: "40, 50, 60, 70 cm",
      vaseLife: "10-14 days",
      availability: "All year round",
      colorClass: "bg-pink-50 border-pink-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section - Darkest burgundy #450a0a */}
      <section className="relative text-white py-20 px-4" style={{ backgroundColor: '#450a0a' }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">ZK Flowers PLC</h1>
          <p className="text-2xl font-light mb-6">Building partnerships. Growing excellence. Delivering beauty worldwide.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Debre Zeit, Ethiopia (~1,900m altitude)</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Established 2008</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6" style={{ color: '#7f1d1d' }}>Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Founded in 2008, ZK Flowers began with a simple ambition: to cultivate premium roses optimized for export markets. 
          Since then we have grown rapidly — expanding operations over <strong>300%</strong> and building a reputation for quality, 
          reliability and competitive pricing on the international stage.
        </p>
      </section>

      {/* Mission & Vision - Dark red #7f1d1d */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fef2f2' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#991b1b' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#991b1b' }}>Our Mission</h3>
            <p className="text-gray-700">
              To supply premium, responsibly-grown roses to florists and wholesalers worldwide while empowering 
              local communities and sustaining the environment.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#991b1b' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#991b1b' }}>Our Vision</h3>
            <p className="text-gray-700">
              To be Ethiopia's most trusted flower-export partner — consistently delivering freshness, beauty 
              and professionalism to every market we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features - Red #dc2626 */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: '#7f1d1d' }}>Our Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fee2e2' }}>
              <Leaf className="w-8 h-8" style={{ color: '#dc2626' }} />
            </div>
            <h3 className="text-xl font-bold mb-2">22 Hectares</h3>
            <p className="text-gray-600">Advanced greenhouse facilities with year-round production</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fee2e2' }}>
              <Award className="w-8 h-8" style={{ color: '#dc2626' }} />
            </div>
            <h3 className="text-xl font-bold mb-2">MPS Certified</h3>
            <p className="text-gray-600">MPS-ABC and MPS-SQ certifications for quality assurance</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fee2e2' }}>
              <Globe className="w-8 h-8" style={{ color: '#dc2626' }} />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Reach</h3>
            <p className="text-gray-600">Exporting to Netherlands, Scandinavia, with expansion to Asia & Middle East</p>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fef2f2' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: '#7f1d1d' }}>Our Premium Rose Varieties</h2>
          <p className="text-center text-gray-600 mb-10">10 carefully selected varieties optimized for head size, vase life and market appeal</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {varieties.map((variety, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  activeVariety === index ? 'shadow-lg scale-105 ' + variety.colorClass : 'hover:shadow-md border-red-200'
                }`}
                onClick={() => setActiveVariety(activeVariety === index ? null : index)}
              >
                <h3 className="text-xl font-bold mb-2" style={{ color: '#7f1d1d' }}>{variety.name}</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Color:</strong> {variety.color}</p>
                  <p><strong>Head Size:</strong> {variety.headSize}</p>
                  {activeVariety === index && (
                    <>
                      <p><strong>Lengths:</strong> {variety.lengths}</p>
                      <p><strong>Vase Life:</strong> {variety.vaseLife}</p>
                      <p><strong>Availability:</strong> {variety.availability}</p>
                    </>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  {activeVariety === index ? 'Click to collapse' : 'Click for details'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact - Bright red #ef4444 */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-white rounded-2xl p-10" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)' }}>
          <div className="flex items-start gap-4 mb-6">
            <Users className="w-12 h-12 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-4">Community & Employment</h2>
              <p className="text-lg leading-relaxed">
                ZK Flowers is proud to contribute to Ethiopia's economic development. We provide <strong>sustainable 
                employment for over 400 workers</strong>, invest in local communities and aim to run socially-responsible 
                operations that support families and regions where we farm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fef2f2' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: '#7f1d1d' }}>Why Choose ZK Flowers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#ef4444' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#dc2626' }}>Proven Track Record</h3>
              <p className="text-gray-700">Rapid, measured growth since 2008 and reliable export experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#ef4444' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#dc2626' }}>High-Quality Product</h3>
              <p className="text-gray-700">Carefully selected varieties with long vase life and stable head sizes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#ef4444' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#dc2626' }}>Certified & Traceable</h3>
              <p className="text-gray-700">MPS certifications and standardized growing & packing protocols</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#ef4444' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#dc2626' }}>Stable Year-Round Supply</h3>
              <p className="text-gray-700">High-altitude Ethiopian climate + controlled greenhouses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#7f1d1d' }}>Interested in Working with ZK Flowers?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Request a quote, ask about available varieties, or discuss contract volumes — we're ready to partner 
          with wholesalers, importers and floral designers.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" 
                  style={{ backgroundColor: '#dc2626' }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#b91c1c'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}>
            Request a Quote
          </button>
          <button className="bg-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg border-2" 
                  style={{ color: '#dc2626', borderColor: '#dc2626' }}>
            Contact Us
          </button>
        </div>
        <div className="mt-8 text-gray-600">
          <p>Email: <a href="mailto:info@zkflowers.com" className="hover:underline" style={{ color: '#dc2626' }}>info@zkflowers.com</a></p>
        </div>
      </section>
    </div>
  );
}