import React from "react";
import { Handshake, Target, TrendingUp, Award, Users, Heart } from "lucide-react";

export default function PartnershipValues() {
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

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#14482E' }}>Our Partnership Values</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The principles that guide our relationships and ensure mutual success
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partnershipValues.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-t-4"
            style={{ borderColor: '#dcfce7' }}
          >
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: '#dcfce7' }}
            >
              <value.icon className="w-7 h-7" style={{ color: '#15803d' }} />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#14482E' }}>
              {value.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}