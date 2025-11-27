import React from "react";

export default function TechnologySection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f0fdf4' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#14482E' }}>
              Technology & Innovation
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We continuously invest in modern technology and innovative practices to improve 
              efficiency, quality, and sustainability.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Climate Control Systems",
                  desc: "Advanced greenhouse automation for optimal growing conditions"
                },
                {
                  title: "Drip Irrigation",
                  desc: "Precision water delivery reducing waste by up to 60%"
                },
                {
                  title: "Cold Chain Monitoring",
                  desc: "Real-time temperature tracking from harvest to delivery"
                },
                {
                  title: "Quality Analytics",
                  desc: "Data-driven insights for continuous improvement"
                },
                {
                  title: "Traceability Systems",
                  desc: "Complete tracking from farm to final destination"
                }
              ].map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4" style={{ borderColor: '#15803d' }}>
                  <h4 className="font-bold mb-1" style={{ color: '#14482E' }}>{tech.title}</h4>
                  <p className="text-sm text-gray-600">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
                alt="Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4" style={{ borderColor: '#15803d' }}>
              <div className="text-4xl font-bold mb-1" style={{ color: '#15803d' }}>300%</div>
              <div className="text-sm text-gray-600">Growth through innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}