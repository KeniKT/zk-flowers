import React from "react";
import { MapPin } from "lucide-react";

export default function MapCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border" style={{ borderColor: '#dcfce7' }}>
      <div className="relative h-64 bg-gradient-to-br from-green-100 to-green-50">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
          alt="Location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5" />
            <h3 className="font-bold text-lg">ZK Flowers PLC</h3>
          </div>
          <p className="text-sm">Debre Zeit, Ethiopia (~1,900m altitude)</p>
          <p className="text-xs text-white/80 mt-1">45 minutes from Addis Ababa</p>
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-bold mb-3" style={{ color: '#14482E' }}>Get Directions</h4>
        <p className="text-sm text-gray-600 mb-4">
          Our farm is located in Debre Zeit (Bishoftu), easily accessible from Addis Ababa 
          via the main highway. Contact us to arrange a visit.
        </p>
        <button 
          className="px-6 py-2 rounded-lg font-semibold text-white text-sm"
          style={{ backgroundColor: '#15803d' }}
        >
          View on Map
        </button>
      </div>
    </div>
  );
}