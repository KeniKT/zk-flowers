import React from "react";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#14482E' }}>
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Import Premium Ethiopian Roses?
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Contact us to discuss your requirements and explore partnership opportunities
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: '#15803d' }}
          >
            Request Export Quote
            <ChevronRight className="w-5 h-5" />
          </button>
          <button 
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/10 border-2"
            style={{ borderColor: 'white' }}
          >
            Download Catalog
          </button>
        </div>
      </div>
    </section>
  );
}