import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md z-50 shadow-lg" style={{background: 'linear-gradient(135deg, #0A5C2E 0%, #14482E 50%, #0A5C2E 100%)'}}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Text Only */}
            <Link to="/" className="flex items-center group">
              <span className="text-3xl font-bold tracking-wider text-white drop-shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-2xl">
                ZK FLOWERS
              </span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              <Link 
                to="/" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 relative group" 
              >
                Home
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  style={{bottom: '-4px'}}
                ></span>
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 relative group" 
              >
                About us
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  style={{bottom: '-4px'}}
                ></span>
              </Link>
              <Link 
                to="/export-regions" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 relative group" 
              >
                Exports
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  style={{bottom: '-4px'}}
                ></span>
              </Link>
              <Link 
                to="/products" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 relative group" 
              >
                Products
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  style={{bottom: '-4px'}}
                ></span>
              </Link>
              <Link 
                to="/partners" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 relative group" 
              >
                Partnership
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  style={{bottom: '-4px'}}
                ></span>
              </Link>
              <Link 
                to="/how-we-work" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 relative group" 
              >
                Our Process
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  style={{bottom: '-4px'}}
                ></span>
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 relative group" 
              >
                Contact
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  style={{bottom: '-4px'}}
                ></span>
              </Link>
            </nav>

            {/* Social Media Icons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 z-40 shadow-2xl backdrop-blur-lg" style={{background: 'linear-gradient(180deg, #0A5C2E 0%, #14482E 100%)'}}>
          <div className="px-6 py-6">
            <Link 
              to="/" 
              className="block py-3 border-b border-white/20 text-white/90 hover:text-white transition-colors font-medium" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-3 border-b border-white/20 text-white/90 hover:text-white transition-colors font-medium" 
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            <Link 
              to="/export-regions" 
              className="block py-3 border-b border-white/20 text-white/90 hover:text-white transition-colors font-medium" 
              onClick={() => setIsOpen(false)}
            >
              Exports
            </Link>
            <Link 
              to="/products" 
              className="block py-3 border-b border-white/20 text-white/90 hover:text-white transition-colors font-medium" 
              onClick={() => setSetOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/partners" 
              className="block py-3 border-b border-white/20 text-white/90 hover:text-white transition-colors font-medium" 
              onClick={() => setIsOpen(false)}
            >
              Partnership
            </Link>
            <Link 
              to="/how-we-work" 
              className="block py-3 border-b border-white/20 text-white/90 hover:text-white transition-colors font-medium" 
              onClick={() => setIsOpen(false)}
            >
              Our Process
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 border-b border-white/20 text-white/90 hover:text-white transition-colors font-medium" 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            {/* Social Media Icons - Mobile */}
            <div className="flex items-center justify-center gap-4 pt-6 mt-4 border-t border-white/20">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 hover:border-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}