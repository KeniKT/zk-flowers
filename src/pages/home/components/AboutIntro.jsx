import React from "react";
import { ArrowRight, Target, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutIntro() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-green-600" />
              <span className="text-sm font-semibold text-green-600 tracking-wider">OUR STORY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Cultivating Excellence Since 2008
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              ZK Flowers PLC stands as Ethiopia's premier rose cultivator, combining traditional 
              farming wisdom with modern agricultural technology. Our journey began with a simple 
              vision: to grow the world's most beautiful roses while empowering local communities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Users, title: "Community First", desc: "400+ local families employed" },
                { icon: Heart, title: "Sustainable Growth", desc: "Eco-friendly practices" },
                { icon: Target, title: "Quality Focus", desc: "International standards" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold group"
            >
              Learn Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80"
                alt="ZK Flowers Farm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}