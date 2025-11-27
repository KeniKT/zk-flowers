import React from "react";
import { ArrowRight, Globe, MapPin, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExportIntro() {
  const markets = [
    { name: "Netherlands", flag: "🇳🇱", status: "Active", color: "green" },
    { name: "Scandinavia", flag: "🇸🇪", status: "Developing", color: "yellow" },
    { name: "Middle East", flag: "🇦🇪", status: "Planned", color: "blue" },
    { name: "Japan", flag: "🇯🇵", status: "Planned", color: "blue" }
  ];

  const advantages = [
    { icon: MapPin, title: "Strategic Location", desc: "Optimal access to global markets" },
    { icon: Clock, title: "Fast Delivery", desc: "8-18 hours to major markets" },
    { icon: TrendingUp, title: "Growing Network", desc: "Expanding to new regions" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-green-600" />
              <span className="text-sm font-semibold text-green-600 tracking-wider">GLOBAL REACH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Worldwide Distribution
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With established partnerships and reliable logistics, we deliver premium Ethiopian 
              roses to markets across Europe, with expanding reach into the Middle East and Asia.
            </p>

            {/* Markets Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {markets.map((market, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{market.flag}</span>
                    <div>
                      <div className="font-semibold text-green-900">{market.name}</div>
                      <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                        market.status === 'Active' ? 'bg-green-100 text-green-700' :
                        market.status === 'Developing' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {market.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/export-regions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold group"
            >
              Explore Export Regions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Advantages */}
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <advantage.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-green-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-700">{advantage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}