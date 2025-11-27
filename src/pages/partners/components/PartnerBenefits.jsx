import React from "react";
import { Award, TrendingUp, Package, Users } from "lucide-react";

export default function PartnerBenefits() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f0fdf4' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#14482E' }}>
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
              style={{ borderColor: '#15803d' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#dcfce7' }}
              >
                <benefit.icon className="w-8 h-8" style={{ color: '#15803d' }} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#14482E' }}>
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
  );
}