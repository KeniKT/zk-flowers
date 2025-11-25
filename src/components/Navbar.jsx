import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50" style={{borderBottomColor: '#E60000', borderBottomWidth: '3px'}}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="5" y="38" fontSize="36" fontWeight="bold" fill="url(#logoGradient)" fontFamily="Arial, sans-serif">
                  ZK
                </text>
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#4C090F', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#8B0000', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#E60000', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-light tracking-wider hidden sm:inline" style={{color: '#4C090F'}}>
                ZK FLOWERS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/') ? '#E60000' : '#4C090F'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/') ? '#E60000' : '#4C090F'}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/about') ? '#E60000' : '#4C090F'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/about') ? '#E60000' : '#4C090F'}
              >
                About us
              </Link>
              <Link 
                to="/export-regions" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/export-regions') ? '#E60000' : '#4C090F'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/export-regions') ? '#E60000' : '#4C090F'}
              >
                Export regions
              </Link>
              <Link 
                to="/products" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/products') ? '#E60000' : '#4C090F'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/products') ? '#E60000' : '#4C090F'}
              >
                What we offer
              </Link>
              <Link 
                to="/partners" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/partners') ? '#E60000' : '#4C090F'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/partners') ? '#E60000' : '#4C090F'}
              >
                Our partners
              </Link>
              <Link 
                to="/how-we-work" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/how-we-work') ? '#E60000' : '#4C090F'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/how-we-work') ? '#E60000' : '#4C090F'}
              >
                How we work
              </Link>
              <Link 
                to="/contact" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/contact') ? '#E60000' : '#4C090F'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/contact') ? '#E60000' : '#4C090F'}
              >
                Contact
              </Link>
            </nav>

            {/* Webshop Button */}
            <button 
              className="hidden md:block px-6 py-2 rounded text-white font-medium transition-opacity hover:opacity-90"
              style={{backgroundColor: '#4C090F'}}
            >
              Webshop
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              style={{color: '#4C090F'}}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg fixed top-[70px] left-0 right-0 z-40 border-t" style={{borderTopColor: '#E60000'}}>
          <div className="px-4 py-4">
            <Link 
              to="/" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/') ? '#E60000' : '#4C090F', borderBottomColor: '#FFE6E6'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/') ? '#E60000' : '#4C090F'}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/about') ? '#E60000' : '#4C090F', borderBottomColor: '#FFE6E6'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/about') ? '#E60000' : '#4C090F'}
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            <Link 
              to="/export-regions" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/export-regions') ? '#E60000' : '#4C090F', borderBottomColor: '#FFE6E6'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/export-regions') ? '#E60000' : '#4C090F'}
              onClick={() => setIsOpen(false)}
            >
              Export regions
            </Link>
            <Link 
              to="/products" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/products') ? '#E60000' : '#4C090F', borderBottomColor: '#FFE6E6'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/products') ? '#E60000' : '#4C090F'}
              onClick={() => setIsOpen(false)}
            >
              What we offer
            </Link>
            <Link 
              to="/partners" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/partners') ? '#E60000' : '#4C090F', borderBottomColor: '#FFE6E6'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/partners') ? '#E60000' : '#4C090F'}
              onClick={() => setIsOpen(false)}
            >
              Our partners
            </Link>
            <Link 
              to="/how-we-work" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/how-we-work') ? '#E60000' : '#4C090F', borderBottomColor: '#FFE6E6'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/how-we-work') ? '#E60000' : '#4C090F'}
              onClick={() => setIsOpen(false)}
            >
              How we work
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/contact') ? '#E60000' : '#4C090F', borderBottomColor: '#FFE6E6'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/contact') ? '#E60000' : '#4C090F'}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button 
              className="w-full mt-4 px-6 py-2 rounded text-white font-medium transition-opacity hover:opacity-90"
              style={{backgroundColor: '#4C090F'}}
            >
              Webshop
            </button>
          </div>
        </div>
      )}
    </>
  );
}