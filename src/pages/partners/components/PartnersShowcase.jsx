import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, Building2 } from "lucide-react";

export default function PartnersShowcase() {
  const [hoveredSister, setHoveredSister] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const sisterCompanies = [
    {
      name: "Nedopin Horti Agro Trading PLC",
      country: "Ethiopia",
      flag: "🇪🇹",
      tagline: "Agricultural Inputs & PPE Distributor",
      description:
        "Involved in distributing agro-chemicals, fertilizers and Personal Protection Equipments (PPE) largely required in the flower industry, extending its business to the larger areas of horticultural crops.",
      vision: "To be a leading and reputable company in Ethiopian agricultural system, providing reliable inputs on a sustainable manner with competitive prices.",
      mission: "Supplying and distributing reliable, environmentally friendly agricultural chemicals, fertilizers and PPE with competitive prices.",
      partners: ["BASF Chemical Company", "Bayer Crop Science", "Syngenta", "Nulandis"],
      products: ["Fungicides", "Insecticides", "Specialty Products", "Bio-pesticides", "Fertilizers", "PPE"],
      values: ["Customers are lifeblood", "Honesty, Integrity & Loyalty", "Service Excellence", "Professionalism"],
      accent: "#14482E",
      light: "#f0fdf4",
      border: "#bbf7d0",
    },
    {
      name: "Horticoop Ethiopia PLC",
      country: "Ethiopia",
      flag: "🇪🇹",
      tagline: "Soil, Plant & Water Analytical Laboratory",
      description:
        "Officially started operations in September 2011, situated 6 km from D/Zeit on the road to Mojo. Operates a state-of-the-art laboratory for soil, plant and water analysis.",
      vision: "To provide the most accurate and reliable analytical services to the Ethiopian horticultural sector using advanced modern instruments.",
      mission: "Delivering precise soil, plant and water analysis to support sustainable and productive horticultural farming across Ethiopia.",
      partners: ["ICP Instruments", "UV/Visible Spectrophotometer", "Kjeldahl Distillation Unit", "Flame Photometer"],
      products: ["Soil Analysis", "Plant Analysis", "Water Analysis", "Fertilizer Recommendations", "Lab Consulting"],
      values: ["Scientific Accuracy", "Sustainable Agriculture", "Customer Focus", "Innovation"],
      accent: "#1d4ed8",
      light: "#eff6ff",
      border: "#bfdbfe",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div
          className={`mb-14 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-7 h-7" style={{ color: "#14482E" }} />
            <h2 className="text-3xl font-bold" style={{ color: "#14482E" }}>
              Sister Companies
            </h2>
          </div>
          <div className="w-20 h-1 mb-5" style={{ backgroundColor: "#14482E" }}></div>
          <p className="text-lg text-gray-600 max-w-xl">
            Affiliated companies that strengthen our supply chain and support the Ethiopian horticultural ecosystem.
          </p>
        </div>

        {/* Sister Companies Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {sisterCompanies.map((company, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredSister(index)}
              onMouseLeave={() => setHoveredSister(null)}
              className={`bg-white rounded-3xl overflow-hidden shadow-md border transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                borderColor: hoveredSister === index ? company.accent : "#e5e7eb",
                transitionDelay: `${200 + index * 150}ms`,
              }}
            >
              {/* Header band */}
              <div
                className="px-7 py-6 flex items-center gap-4"
                style={{ backgroundColor: company.accent }}
              >
                <span className="text-4xl">{company.flag}</span>
                <div>
                  <h3 className="text-white font-bold text-lg leading-snug">{company.name}</h3>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full mt-1 inline-block"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
                  >
                    {company.tagline}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-7 space-y-5">
                <p className="text-gray-600 text-sm leading-relaxed">{company.description}</p>

                {/* Vision */}
                <div className="rounded-2xl p-4" style={{ backgroundColor: company.light, border: `1px solid ${company.border}` }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: company.accent }}>Vision</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{company.vision}</p>
                </div>

                {/* Works With / Key Instruments */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: company.accent }}>
                    {index === 0 ? "Works With" : "Key Instruments"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {company.partners.map((p, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ backgroundColor: company.light, color: company.accent, border: `1px solid ${company.border}` }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Products & Services */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: company.accent }}>
                    Products & Services
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {company.products.map((product, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: company.accent }} />
                        <span className="text-sm text-gray-700">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Accent bar */}
              <div
                className="h-1 w-full transition-all duration-500"
                style={{
                  background:
                    hoveredSister === index
                      ? `linear-gradient(to right, ${company.accent}, #22c55e)`
                      : "#e5e7eb",
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}