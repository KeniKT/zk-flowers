import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactMethods() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@zkflowers.com",
      secondary: "sales@zkflowers.com",
      description: "General inquiries and sales",
      color: "#15803d"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+251 11 XXX XXXX",
      secondary: "+251 91 XXX XXXX",
      description: "Mon-Fri: 8:00 AM - 6:00 PM EAT",
      color: "#059669"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Debre Zeit, Ethiopia",
      secondary: "~1,900m altitude",
      description: "45 minutes from Addis Ababa",
      color: "#0f766e"
    },
    {
      icon: Clock,
      title: "Working Hours",
      primary: "Monday - Friday",
      secondary: "8:00 AM - 6:00 PM",
      description: "East Africa Time (EAT)",
      color: "#0d9488"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-t-4 text-center"
            style={{ borderColor: method.color }}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: `${method.color}15` }}
            >
              <method.icon className="w-8 h-8" style={{ color: method.color }} />
            </div>
            <h3 className="font-bold text-lg mb-2" style={{ color: '#14482E' }}>
              {method.title}
            </h3>
            <p className="font-semibold mb-1" style={{ color: method.color }}>
              {method.primary}
            </p>
            <p className="text-sm text-gray-600 mb-2">{method.secondary}</p>
            <p className="text-xs text-gray-500">{method.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}