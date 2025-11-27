import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#14482E' }}>
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Order Premium Ethiopian Roses?
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Contact our sales team to discuss varieties, quantities, and delivery schedules
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: '#15803d' }}
          >
            Get a Quote
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/10 border-2"
            style={{ borderColor: 'white' }}
          >
            Download Product Catalog
          </button>
        </div>
        <div className="mt-8 text-sm text-gray-400">
          <p>Email: <a href="mailto:sales@zkflowers.com" className="hover:underline" style={{ color: '#4ade80' }}>sales@zkflowers.com</a></p>
        </div>
      </div>
    </section>
  );
}