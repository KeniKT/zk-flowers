import React from "react";
import { MessageSquare } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative text-white py-24 px-4" style={{ backgroundColor: '#14482E' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="w-8 h-8" style={{ color: '#4ade80' }} />
          <span className="text-sm tracking-wider" style={{ color: '#4ade80' }}>GET IN TOUCH</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
          Ready to discuss your rose requirements? We're here to help with inquiries, quotes, and partnerships
        </p>
      </div>
    </section>
  );
}