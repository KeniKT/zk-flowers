import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function BecomePartner() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border" style={{ borderColor: '#dcfce7' }}>
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#14482E' }}>
              Become a Partner
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We're always looking to expand our network of quality partners who share our commitment 
              to excellence and sustainable growth.
            </p>
            
            <div className="space-y-4 mb-8">
              <h3 className="font-bold" style={{ color: '#14482E' }}>We're Looking For:</h3>
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
              style={{ backgroundColor: '#15803d', color: 'white' }}
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
  );
}