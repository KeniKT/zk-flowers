import React from "react";
import { Globe } from "lucide-react";

export default function SocialMediaSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center border" style={{ borderColor: '#dcfce7' }}>
        <Globe className="w-16 h-16 mx-auto mb-4" style={{ color: '#15803d' }} />
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#14482E' }}>
          Connect With Us
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Follow our journey on social media to see the latest from our farm, 
          new varieties, and behind-the-scenes content
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
            LinkedIn
          </button>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
            Instagram
          </button>
          <button className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-colors">
            Facebook
          </button>
          <button className="px-6 py-3 bg-green-800 text-white rounded-lg font-semibold hover:bg-green-900 transition-colors">
            YouTube
          </button>
        </div>
      </div>
    </section>
  );
}