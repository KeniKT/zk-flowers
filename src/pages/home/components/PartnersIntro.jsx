import React from "react";
import { ArrowRight, Handshake, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function PartnersIntro() {
  const partners = [
    { name: "Flora Holland", type: "Distribution", country: "Netherlands" },
    { name: "Scandinavian Flower Group", type: "Distribution", country: "Sweden" },
    { name: "Ethiopian Airlines", type: "Logistics", country: "Ethiopia" }
  ];

  const benefits = [
    { icon: Users, title: "50+ Partners", desc: "Global network" },
    { icon: Award, title: "12 Years Average", desc: "Long-term relationships" },
    { icon: TrendingUp, title: "98% Satisfaction", desc: "Partner feedback" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="w-6 h-6 text-green-600" />
            <span className="text-sm font-semibold text-green-600 tracking-wider">PARTNERSHIPS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Trusted Partnerships
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building lasting relationships with distributors, retailers, and logistics 
            providers who share our commitment to quality and sustainability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Partners List */}
          <div className="space-y-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-green-900 text-lg mb-1">{partner.name}</h3>
                    <p className="text-gray-600 text-sm">{partner.type} • {partner.country}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-900 mb-1">{benefit.title}</div>
                  <div className="text-gray-600">{benefit.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold group"
          >
            Meet Our Partners
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}