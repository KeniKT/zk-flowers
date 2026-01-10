import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import ZKLogo from "../assets/ZK.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll listener for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/export-regions", label: "Exports" },
    { to: "/products", label: "Products" },
    { to: "/partners", label: "Partnership" },
    { to: "/how-we-work", label: "Process" },
    { to: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    { href: "https://facebook.com", Icon: Facebook, color: "from-blue-400 to-blue-600" },
    { href: "https://instagram.com", Icon: Instagram, color: "from-pink-400 to-purple-600" },
    { href: "https://linkedin.com", Icon: Linkedin, color: "from-blue-500 to-blue-700" }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
          scrolled ? 'shadow-2xl' : 'shadow-none'
        }`}
        style={{
          height: '100px',
          background: 'linear-gradient(135deg, #0A5C2E 0%, #14482E 50%, #0A5C2E 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full relative">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 z-50">
              <Link to="/" className="block group relative">
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white p-1 shadow-xl group-hover:scale-105 transition-transform">
                  <img 
                    src={ZKLogo} 
                    alt="ZK Flowers" 
                    className="w-full h-full object-contain rounded-full"
                  />
                  <div className="absolute -inset-1 border-2 border-white/20 rounded-full group-hover:border-emerald-400/50 transition-colors"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.to}
                    to={link.to}
                    className={`relative py-2 text-base font-semibold transition-colors duration-300 ${
                      isActive(link.to)
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {/* Simple Underline Indicator */}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transition-transform duration-300 origin-left ${
                        isActive(link.to) ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    ></span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Desktop Social Icons */}
            <div className="hidden lg:flex items-center space-x-3">
              {socialLinks.map(({ href, Icon, color }) => (
                <a 
                  key={href}
                  href={href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/40 bg-white/5 hover:scale-110 group overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <Icon className="w-5 h-5 text-white relative z-10" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-md text-white hover:bg-white/10 focus:outline-none transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-8 w-8" aria-hidden="true" />
                ) : (
                  <Menu className="block h-8 w-8" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="absolute right-0 top-0 bottom-0 w-[280px] sm:w-[320px] bg-[#0A5C2E] shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-white font-bold text-xl">Menu</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4">
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-3 rounded-xl text-lg font-semibold transition-all ${
                      isActive(link.to) 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="p-6 border-t border-white/10">
              <div className="flex items-center justify-center space-x-6">
                {socialLinks.map(({ href, Icon, color }) => (
                  <a 
                    key={href}
                    href={href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${color} shadow-lg hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Constant Spacer */}
      <div style={{ height: '100px' }}></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}
