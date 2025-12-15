import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import ZKLogo from '../assets/ZK.png';

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative md:pr-56">
          {/* Large Logo Circle - Right Side */}
          <div className="hidden md:block absolute -right-6 -top-8">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 rounded-full opacity-20 blur-3xl"></div>
              
              {/* Outer Ring */}
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-white/30 to-white/10 p-1 shadow-2xl">
                
                {/* Logo Container */}
                <div className="w-full h-full rounded-full bg-white relative overflow-hidden">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  
                  {/* Logo Image */}
                  <img 
                    src={ZKLogo} 
                    alt="ZK Flowers" 
                    className="w-full h-full object-contain rounded-full relative z-10 p-2"
                  />
                </div>
              </div>

              {/* Tagline Under Logo */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <p 
                  className="text-white text-xl font-semibold tracking-wide drop-shadow-lg italic"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}
                >
                  Fresh beautiful delivered
                </p>
              </div>
            </div>
          </div>

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
                <span>Zkflowers@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>0911514608, 0936011045</span>
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
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm hover:scale-110 group relative overflow-hidden"
              aria-label="Facebook"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <Facebook className="w-5 h-5 text-white relative z-10" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm hover:scale-110 group relative overflow-hidden"
              aria-label="Instagram"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <Instagram className="w-5 h-5 text-white relative z-10" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm hover:scale-110 group relative overflow-hidden"
              aria-label="LinkedIn"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <Linkedin className="w-5 h-5 text-white relative z-10" />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-white/80">
              © 2025 ZK Flowers Export. All rights reserved.
            </p>
            <p className="text-xs text-white/60">
              Crafted with passion for quality
            </p>
          </div>
        </div>
      </div>

      {/* Add Custom Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&display=swap');
      `}</style>
    </footer>
  );
}