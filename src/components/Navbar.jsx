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
      <header className="bg-white border-b sticky top-0 z-50" style={{borderBottomColor: '#0A5C2E', borderBottomWidth: '3px'}}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Only text version */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-wider" style={{color: '#14482E'}}>
                ZK FLOWERS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/') ? '#2E8B57' : '#14482E'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/') ? '#2E8B57' : '#14482E'}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/about') ? '#2E8B57' : '#14482E'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/about') ? '#2E8B57' : '#14482E'}
              >
                About us
              </Link>
              <Link 
                to="/export-regions" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/export-regions') ? '#2E8B57' : '#14482E'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/export-regions') ? '#2E8B57' : '#14482E'}
              >
                Export regions
              </Link>
              <Link 
                to="/products" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/products') ? '#2E8B57' : '#14482E'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/products') ? '#2E8B57' : '#14482E'}
              >
                What we offer
              </Link>
              <Link 
                to="/partners" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/partners') ? '#2E8B57' : '#14482E'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/partners') ? '#2E8B57' : '#14482E'}
              >
                Our partners
              </Link>
              <Link 
                to="/how-we-work" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/how-we-work') ? '#2E8B57' : '#14482E'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/how-we-work') ? '#2E8B57' : '#14482E'}
              >
                How we work
              </Link>
              <Link 
                to="/contact" 
                className="text-sm transition-colors font-medium" 
                style={{color: isActive('/contact') ? '#2E8B57' : '#14482E'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
                onMouseLeave={(e) => e.currentTarget.style.color = isActive('/contact') ? '#2E8B57' : '#14482E'}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              style={{color: '#14482E'}}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg fixed top-[70px] left-0 right-0 z-40 border-t" style={{borderTopColor: '#0A5C2E'}}>
          <div className="px-4 py-4">
            <Link 
              to="/" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/') ? '#2E8B57' : '#14482E', borderBottomColor: '#F0FFF0'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/') ? '#2E8B57' : '#14482E'}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/about') ? '#2E8B57' : '#14482E', borderBottomColor: '#F0FFF0'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/about') ? '#2E8B57' : '#14482E'}
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            <Link 
              to="/export-regions" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/export-regions') ? '#2E8B57' : '#14482E', borderBottomColor: '#F0FFF0'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/export-regions') ? '#2E8B57' : '#14482E'}
              onClick={() => setIsOpen(false)}
            >
              Export regions
            </Link>
            <Link 
              to="/products" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/products') ? '#2E8B57' : '#14482E', borderBottomColor: '#F0FFF0'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/products') ? '#2E8B57' : '#14482E'}
              onClick={() => setIsOpen(false)}
            >
              What we offer
            </Link>
            <Link 
              to="/partners" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/partners') ? '#2E8B57' : '#14482E', borderBottomColor: '#F0FFF0'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/partners') ? '#2E8B57' : '#14482E'}
              onClick={() => setIsOpen(false)}
            >
              Our partners
            </Link>
            <Link 
              to="/how-we-work" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/how-we-work') ? '#2E8B57' : '#14482E', borderBottomColor: '#F0FFF0'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/how-we-work') ? '#2E8B57' : '#14482E'}
              onClick={() => setIsOpen(false)}
            >
              How we work
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 border-b transition-colors font-medium" 
              style={{color: isActive('/contact') ? '#2E8B57' : '#14482E', borderBottomColor: '#F0FFF0'}} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#2E8B57'} 
              onMouseLeave={(e) => e.currentTarget.style.color = isActive('/contact') ? '#2E8B57' : '#14482E'}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}