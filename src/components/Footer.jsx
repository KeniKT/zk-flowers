import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative text-white pt-20 pb-8 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{background: 'linear-gradient(135deg, #0A5C2E 0%, #14482E 50%, #0A5C2E 100%)'}}
      ></div>
      
      {/* Decorative Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">ZK FLOWERS</h3>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Premium quality flowers exported worldwide. Excellence in every bloom.
            </p>
            
            {/* Contact Info with Icons */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@zkflowers.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Global Exports</span>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-bold mb-6 text-lg tracking-wide">ABOUT US</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Production Process
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="font-bold mb-6 text-lg tracking-wide">OUR PRODUCTS</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/products" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Rose Varieties
                </a>
              </li>
              <li>
                <a href="/products" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Premium Quality
                </a>
              </li>
              <li>
                <a href="/how-we-work" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Production Methods
                </a>
              </li>
              <li>
                <a href="/how-we-work" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  How We Work
                </a>
              </li>
              <li>
                <a href="/export-regions" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Export Regions
                </a>
              </li>
            </ul>
          </div>

          {/* Partners & Export */}
          <div>
            <h4 className="font-bold mb-6 text-lg tracking-wide">PARTNERS & EXPORT</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/partners" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="/export-regions" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Global Markets
                </a>
              </li>
              <li>
                <a href="/how-we-work" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Export Process
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Distribution
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">
                  Logistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-12 flex justify-center">
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Certifications & Quality */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm font-bold tracking-wider text-white/90">CERTIFIED QUALITY STANDARDS</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-lg px-6 py-3 text-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                GLOBAL G.A.P.
              </div>
              <div className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-lg px-6 py-3 text-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                ISO 9001
              </div>
              <div className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-lg px-6 py-3 text-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                FAIR TRADE
              </div>
              <div className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-lg px-6 py-3 text-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                SUSTAINABLE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            © 2025 ZK Flowers Export. All rights reserved. | Crafted with passion for quality
          </p>
        </div>
      </div>
    </footer>
  );
}