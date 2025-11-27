import React from "react";
import { ArrowRight, Sprout, Scissors, Thermometer, Package, Plane, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProcessIntro() {
  const processSteps = [
    { icon: Sprout, title: "Cultivation", desc: "60-70 days optimal growth" },
    { icon: Scissors, title: "Harvesting", desc: "Early morning precision" },
    { icon: Thermometer, title: "Cold Chain", desc: "2-4°C temperature control" },
    { icon: Package, title: "Packing", desc: "Export-ready packaging" },
    { icon: Plane, title: "Delivery", desc: "Global logistics" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Our Cultivation Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From seed to shipment, every step is carefully managed to ensure premium quality 
            and maximum vase life for our roses.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-12">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-1 bg-green-200 hidden md:block"></div>
          
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors relative">
                  <step.icon className="w-10 h-10 text-green-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-green-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-700 mb-6">
                Every stem undergoes rigorous quality checks and meets international 
                certification standards including MPS-ABC and MPS-SQ.
              </p>
              <div className="space-y-3">
                {["100% quality inspection", "Cold chain certified", "Sustainable practices", "Traceability systems"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Quality Control"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/how-we-work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold group"
          >
            Learn About Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}