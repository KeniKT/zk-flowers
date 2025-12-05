import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import ZKLogo from "../assets/ZK.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header with Curved Cutout for Logo */}
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Main Navbar with Notch */}
        <div className="relative">
          {/* Navbar Background with Curved Cutout */}
          <div 
            className={`relative transition-all duration-500 ${
              scrolled ? 'h-16' : 'h-20'
            }`}
            style={{
              background: 'linear-gradient(135deg, #0A5C2E 0%, #14482E 50%, #0A5C2E 100%)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
          >
            {/* SVG Curved Cutout Mask - Left Side */}
            <svg 
              className="absolute bottom-0 left-24" 
              width="200" 
              height={scrolled ? "80" : "100"}
              style={{ overflow: 'visible' }}
            >
              <defs>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                </filter>
              </defs>
              <path
                d={scrolled 
                  ? "M 0,0 Q 100,80 200,0 L 200,80 L 0,80 Z"
                  : "M 0,0 Q 100,100 200,0 L 200,100 L 0,100 Z"
                }
                fill="url(#navGradient)"
                filter="url(#shadow)"
              />
              <defs>
                <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0A5C2E" />
                  <stop offset="50%" stopColor="#14482E" />
                  <stop offset="100%" stopColor="#0A5C2E" />
                </linearGradient>
              </defs>
            </svg>

            <div className="max-w-7xl mx-auto px-6 h-full">
              <div className="flex items-center justify-between h-full relative">
                
                {/* Left Side Logo - Positioned Absolutely */}
                <div className="absolute left-6 top-2 z-50">
                  <Link to="/" className="block group">
                    {/* Logo Circle Container */}
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"></div>
                      
                      {/* Outer Ring */}
                      <div className={`relative transition-all duration-500 ${
                        scrolled ? 'w-28 h-28' : 'w-36 h-36'
                      } rounded-full bg-gradient-to-br from-white/30 to-white/10 p-1 group-hover:scale-110 group-hover:rotate-12 shadow-2xl`}>
                        
                        {/* Logo Image - No Green Layer */}
                        <div className="w-full h-full rounded-full bg-white relative overflow-hidden">
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>
                          
                          {/* Logo Image */}
                          <img 
                            src={ZKLogo} 
                            alt="ZK Flowers" 
                            className="w-full h-full object-contain rounded-full relative z-10 group-hover:scale-105 transition-transform duration-500 p-1"
                          />

                          {/* Sparkle Particles */}
                          <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400/80 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-emerald-300/80 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{animationDelay: '0.3s'}}></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Center Navigation Links */}
                <nav className="hidden md:flex items-center gap-1 flex-1 justify-center ml-48">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About" },
                    { to: "/export-regions", label: "Exports" },
                    { to: "/products", label: "Products" },
                    { to: "/partners", label: "Partnership" },
                    { to: "/how-we-work", label: "Process" },
                    { to: "/contact", label: "Contact" }
                  ].map((link, index) => (
                    <Link 
                      key={link.to}
                      to={link.to}
                      className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${
                        isActive(link.to)
                          ? 'text-white bg-white/20'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                      {isActive(link.to) && (
                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-white"></span>
                      )}
                    </Link>
                  ))}
                </nav>

                {/* Social Media Icons - Desktop (Far Right) */}
                <div className="hidden md:flex items-center gap-2 ml-4">
                  {[
                    { href: "https://facebook.com", Icon: Facebook, color: "from-blue-400 to-blue-600" },
                    { href: "https://instagram.com", Icon: Instagram, color: "from-pink-400 to-purple-600" },
                    { href: "https://linkedin.com", Icon: Linkedin, color: "from-blue-500 to-blue-700" }
                  ].map(({ href, Icon, color }) => (
                    <a 
                      key={href}
                      href={href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm group overflow-hidden hover:scale-110"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}></div>
                      <Icon className="w-4 h-4 text-white relative z-10" />
                    </a>
                  ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                  className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for Fixed Header */}
      <div className={scrolled ? "h-16" : "h-20"}></div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden fixed left-0 right-0 z-40 transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          top: scrolled ? '64px' : '80px',
          background: 'linear-gradient(180deg, rgba(10, 92, 46, 0.98) 0%, rgba(20, 72, 46, 0.98) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}
      >
        <div className="px-6 py-6">
          {/* Navigation Links */}
          <div className="space-y-1">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/export-regions", label: "Exports" },
              { to: "/products", label: "Products" },
              { to: "/partners", label: "Partnership" },
              { to: "/how-we-work", label: "Process" },
              { to: "/contact", label: "Contact" }
            ].map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  isActive(link.to) 
                    ? 'bg-white/15 text-white' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Social Media Icons - Mobile */}
          <div className="flex items-center justify-center gap-4 pt-6 mt-6 border-t border-white/20">
            {[
              { href: "https://facebook.com", Icon: Facebook, color: "from-blue-400 to-blue-600" },
              { href: "https://instagram.com", Icon: Instagram, color: "from-pink-400 to-purple-600" },
              { href: "https://linkedin.com", Icon: Linkedin, color: "from-blue-500 to-blue-700" }
            ].map(({ href, Icon, color }) => (
              <a 
                key={href}
                href={href}
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-12 h-12 rounded-full flex items-center justify-center border border-white/30 hover:border-white/60 backdrop-blur-sm group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <Icon className="w-5 h-5 text-white relative z-10" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Add Custom Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
    </>
  );
}