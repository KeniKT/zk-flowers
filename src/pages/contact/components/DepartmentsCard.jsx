import React from "react";
import { Package, Users, Plane, Building2 } from "lucide-react";

export default function DepartmentsCard() {
  const departments = [
    {
      icon: Package,
      title: "Sales Department",
      email: "sales@zkflowers.com",
      description: "Product inquiries, quotes, and orders"
    },
    {
      icon: Users,
      title: "Partnerships",
      email: "partnerships@zkflowers.com",
      description: "Distribution and collaboration opportunities"
    },
    {
      icon: Plane,
      title: "Export Coordination",
      email: "export@zkflowers.com",
      description: "Shipping and logistics support"
    },
    {
      icon: Building2,
      title: "General Inquiries",
      email: "info@zkflowers.com",
      description: "All other questions and information"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border" style={{ borderColor: '#dcfce7' }}>
      <h3 className="text-2xl font-bold mb-4" style={{ color: '#14482E' }}>
        Department Contacts
      </h3>
      <div className="space-y-4">
        {departments.map((dept, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-green-50 transition-colors">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#dcfce7' }}
            >
              <dept.icon className="w-5 h-5" style={{ color: '#15803d' }} />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#14482E' }}>
                {dept.title}
              </h4>
              <a 
                href={`mailto:${dept.email}`}
                className="text-sm hover:underline"
                style={{ color: '#15803d' }}
              >
                {dept.email}
              </a>
              <p className="text-xs text-gray-600 mt-1">{dept.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}