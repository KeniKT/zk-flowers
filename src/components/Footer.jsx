import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import ZKLogo from '../assets/ZK.png';

export default function Footer() {
  return (
    <footer className="relative text-white pt-12 md:pt-16 pb-8 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{background: 'linear-gradient(135deg, #0A5C2E 0%, #14482E 50%, #0A5C2E 100%)'}}
      ></div>
      
      {/* Decorative Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Logo Section - Visible on ALL Tablets including Nest Hub Max */}
        <div className="flex justify-center mb-8 md:mb-10 min-[1440px]:hidden">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 rounded-full opacity-20 blur-2xl md:blur-3xl"></div>
            
            {/* Outer Ring */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-white/30 to-white/10 p-1 shadow-2xl">
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
            <div className="mt-3 text-center">
              <p 
                className="text-white text-sm md:text-base lg:text-lg font-semibold tracking-wide drop-shadow-lg italic whitespace-nowrap"
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

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-12 relative min-[1440px]:pr-56">
          {/* Large Logo Circle - Only for Large Desktop (1440px+) */}
          <div className="hidden min-[1440px]:block absolute -right-6 -top-8">
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
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 drop-shadow-lg">ZK FLOWERS</h3>
            <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed max-w-md mx-auto md:mx-0">
              Premium quality flowers exported worldwide. Excellence in every bloom.
            </p>
            
            {/* Contact Info with Icons */}
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-white/90 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">Zkflowers@gmail.com</span>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-2 md:gap-3 text-white/90 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-center md:text-left break-words">+251911514608, +251936011045</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-white/90 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Global Exports</span>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4 md:mb-5 text-base md:text-lg tracking-wide">ABOUT US</h4>
            <ul className="space-y-2 md:space-y-2.5 text-sm">
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
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4 md:mb-5 text-base md:text-lg tracking-wide">OUR PRODUCTS</h4>
            <ul className="space-y-2 md:space-y-2.5 text-sm">
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
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-4 md:mb-5 text-base md:text-lg tracking-wide">PARTNERS & EXPORT</h4>
            <ul className="space-y-2 md:space-y-2.5 text-sm">
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
        <div className="mb-8 md:mb-10 flex justify-center">
          <div className="flex gap-3 md:gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm hover:scale-110 group relative overflow-hidden"
              aria-label="Facebook"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <Facebook className="w-5 h-5 text-white relative z-10" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm hover:scale-110 group relative overflow-hidden"
              aria-label="Instagram"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <Instagram className="w-5 h-5 text-white relative z-10" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm hover:scale-110 group relative overflow-hidden"
              aria-label="LinkedIn"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <Linkedin className="w-5 h-5 text-white relative z-10" />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-6 md:pt-7">
          <div className="text-center space-y-2">
            <p className="text-xs md:text-sm text-white/80">
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