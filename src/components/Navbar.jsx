import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50" style={{borderBottomColor: '#E60000', borderBottomWidth: '3px'}}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
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
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm transition-colors" style={{color: '#4C090F'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
                Home
              </a>
              <a href="#" className="text-sm transition-colors" style={{color: '#4C090F'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
                About us
              </a>
              <a href="#" className="text-sm transition-colors" style={{color: '#4C090F'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
                Export regions
              </a>
              <a href="#" className="text-sm transition-colors" style={{color: '#4C090F'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
                What we offer
              </a>
              <a href="#" className="text-sm transition-colors" style={{color: '#4C090F'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
                Our partners
              </a>
              <a href="#" className="text-sm transition-colors" style={{color: '#4C090F'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
                How we work
              </a>
              <a href="#" className="text-sm transition-colors" style={{color: '#4C090F'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
                Contact
              </a>
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
            <a href="#" className="block py-3 border-b transition-colors" style={{color: '#4C090F', borderBottomColor: '#FFE6E6'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
              Home
            </a>
            <a href="#" className="block py-3 border-b transition-colors" style={{color: '#4C090F', borderBottomColor: '#FFE6E6'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
              About us
            </a>
            <a href="#" className="block py-3 border-b transition-colors" style={{color: '#4C090F', borderBottomColor: '#FFE6E6'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
              Export regions
            </a>
            <a href="#" className="block py-3 border-b transition-colors" style={{color: '#4C090F', borderBottomColor: '#FFE6E6'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
              What we offer
            </a>
            <a href="#" className="block py-3 border-b transition-colors" style={{color: '#4C090F', borderBottomColor: '#FFE6E6'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
              Our partners
            </a>
            <a href="#" className="block py-3 border-b transition-colors" style={{color: '#4C090F', borderBottomColor: '#FFE6E6'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
              How we work
            </a>
            <a href="#" className="block py-3 border-b transition-colors" style={{color: '#4C090F', borderBottomColor: '#FFE6E6'}} onMouseEnter={(e) => e.currentTarget.style.color = '#E60000'} onMouseLeave={(e) => e.currentTarget.style.color = '#4C090F'}>
              Contact
            </a>
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