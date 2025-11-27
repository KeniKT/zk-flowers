import React from "react";
import { Clock } from "lucide-react";

export default function ResponseTimeCard() {
  return (
    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg p-6 text-white">
      <div className="flex items-center gap-3 mb-3">
        <Clock className="w-8 h-8" />
        <h3 className="text-xl font-bold">Quick Response</h3>
      </div>
      <p className="mb-4">
        We typically respond to inquiries within 24 hours during business days.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold">24h</div>
          <div className="text-xs">Email Response</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold">1-2h</div>
          <div className="text-xs">Phone Response</div>
        </div>
      </div>
    </div>
  );
}