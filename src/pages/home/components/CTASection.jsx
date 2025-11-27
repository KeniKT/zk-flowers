import React from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-800 to-green-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Grow Together?
        </h2>
        <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join our network of satisfied partners and experience the quality difference 
          of Ethiopian roses cultivated at 1,900m altitude.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="group px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-all hover:shadow-xl flex items-center justify-center gap-2 font-semibold">
            Request Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all border border-white/30 font-semibold flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Call Us
          </button>
          <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all border border-white/30 font-semibold flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            Email Us
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-2xl font-bold text-green-300 mb-2">22 ha</div>
            <div className="text-green-200">Farm Size</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-300 mb-2">10+</div>
            <div className="text-green-200">Rose Varieties</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-300 mb-2">400+</div>
            <div className="text-green-200">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}