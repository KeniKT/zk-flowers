import React from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactIntro() {
  const contactMethods = [
    { icon: Mail, method: "Email", details: "info@zkflowers.com", desc: "General inquiries" },
    { icon: Phone, method: "Phone", details: "+251 11 XXX XXXX", desc: "Mon-Fri, 8AM-6PM" },
    { icon: MapPin, method: "Location", details: "Debre Zeit, Ethiopia", desc: "1,900m altitude" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Ready to discuss your rose requirements? Our team is here to help with 
              inquiries, quotes, and partnership opportunities.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-900">{method.method}</div>
                    <div className="text-green-700">{method.details}</div>
                    <div className="text-sm text-gray-600">{method.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image/Map */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                alt="ZK Flowers Location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              
              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-green-900">ZK Flowers PLC</div>
                  <div className="text-sm text-gray-600">Debre Zeit, Ethiopia</div>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
              <Clock className="w-8 h-8 mb-2" />
              <div className="text-2xl font-bold">24h</div>
              <div className="text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}