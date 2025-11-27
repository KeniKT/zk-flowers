import React from "react";
import { Calendar, Map, Flower2, Users, TrendingUp } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { icon: Calendar, value: "2008", label: "Established" },
    { icon: Map, value: "22", label: "Hectares", unit: "ha" },
    { icon: Flower2, value: "10", label: "Rose Varieties" },
    { icon: Users, value: "400+", label: "Employees" },
    { icon: TrendingUp, value: "300%", label: "Growth" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <stat.icon className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-800 mb-1">
                {stat.value}
                {stat.unit && <span className="text-xl">{stat.unit}</span>}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}