import React from "react";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#14482E' }}>
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          See Our Process in Action
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Visit our facility or schedule a virtual tour to see how we cultivate excellence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: '#15803d' }}
          >
            <PlayCircle className="w-5 h-5" />
            Watch Virtual Tour
          </button>
          <button 
            className="px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/10 border-2 flex items-center justify-center gap-2"
            style={{ borderColor: 'white' }}
          >
            Schedule Farm Visit
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-8 text-sm text-gray-400">
          <p>Questions? Email: <a href="mailto:info@zkflowers.com" className="hover:underline" style={{ color: '#4ade80' }}>info@zkflowers.com</a></p>
        </div>
      </div>
    </section>
  );
}