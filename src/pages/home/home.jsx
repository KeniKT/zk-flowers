import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Heart, Star, Award, Truck, Clock, Sparkles, Globe, Leaf, ArrowRight, Check, X } from 'lucide-react';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeVariety, setActiveVariety] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check visibility of sections
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        if (isInView) {
          setIsVisible(prev => ({ ...prev, [el.id]: true }));
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Auto-rotate varieties
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVariety(prev => (prev + 1) % varieties.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const varieties = [
    {
      name: "Moon Walk",
      color: "Yellow",
      headSize: "5.5 CM",
      vaseLife: "10-15 Days",
      gradient: "from-yellow-600/20 to-amber-600/20",
      accentColor: "yellow-400",
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "La Belle",
      color: "Lime Pink",
      headSize: "5.5 CM",
      vaseLife: "10-15 Days",
      gradient: "from-pink-600/20 to-rose-600/20",
      accentColor: "pink-400",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Athena",
      color: "White",
      headSize: "4.5 CM",
      vaseLife: "10-15 Days",
      gradient: "from-slate-600/20 to-gray-600/20",
      accentColor: "white",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Belle Rose",
      color: "Pink/Green",
      headSize: "5.5 CM",
      vaseLife: "10-15 Days",
      gradient: "from-emerald-600/20 to-pink-600/20",
      accentColor: "emerald-400",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bisou",
      color: "Light Pink",
      headSize: "4.5 CM",
      vaseLife: "10-14 Days",
      gradient: "from-rose-600/20 to-pink-600/20",
      accentColor: "rose-400",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const markets = [
    { name: "Netherlands", status: "Active", flag: "🇳🇱" },
    { name: "Scandinavia", status: "Developing", flag: "🇸🇪" },
    { name: "Middle East", status: "Planned", flag: "🇦🇪" },
    { name: "Japan", status: "Planned", flag: "🇯🇵" },
    { name: "South Korea", status: "Planned", flag: "🇰🇷" }
  ];

  const stats = [
    { value: "2008", label: "Established" },
    { value: "22", label: "Hectares", unit: "ha" },
    { value: "10", label: "Rose Varieties" },
    { value: "400+", label: "Employees" },
    { value: "300%", label: "Growth" }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      <style jsx>{`
        :root {
          --burgundy-dark: #3d0a0a;
          --burgundy: #6b0f0f;
          --red-deep: #a00e0e;
          --red-bright: #e01414;
          --red-vivid: #ff1f1f;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(160, 14, 14, 0.4), 0 0 60px rgba(160, 14, 14, 0.2); }
          50% { box-shadow: 0 0 40px rgba(224, 20, 20, 0.8), 0 0 100px rgba(224, 20, 20, 0.4); }
        }
        
        @keyframes shimmer-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }

        .shimmer-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer-slide 3s infinite;
        }

        .text-gradient-gold {
          background: linear-gradient(135deg, #ff1f1f 0%, #e01414 50%, #a00e0e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-12px) scale(1.02);
        }

        .parallax-layer {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>

      {/* Hero Section with 3D Parallax */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Dynamic Background Layers */}
        <div className="absolute inset-0">
          {/* Base Layer */}
          <div 
            className="absolute inset-0 parallax-layer"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <img
              src="https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=2000&q=80"
              alt="Ethiopian Rose Fields"
              className="w-full h-[120%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>

          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d0a0a]/50 via-transparent to-[#6b0f0f]/30 mix-blend-overlay"></div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                  width: Math.random() * 120 + 40 + 'px',
                  height: Math.random() * 120 + 40 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  background: `radial-gradient(circle, ${
                    i % 5 === 0 ? 'rgba(61, 10, 10, 0.2)' :
                    i % 5 === 1 ? 'rgba(107, 15, 15, 0.2)' :
                    i % 5 === 2 ? 'rgba(160, 14, 14, 0.2)' :
                    i % 5 === 3 ? 'rgba(224, 20, 20, 0.2)' :
                    'rgba(255, 31, 31, 0.2)'
                  }, transparent)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 15}s`,
                  filter: 'blur(50px)'
                }}
              />
            ))}
          </div>

          {/* Mouse-following Light */}
          <div
            className="absolute w-96 h-96 rounded-full pointer-events-none transition-transform duration-300 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              background: 'radial-gradient(circle, rgba(160, 14, 14, 0.25), transparent 70%)',
              filter: 'blur(60px)'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          {/* Premium Badge */}
          <div className="mb-8 animate-float">
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-morphism rounded-full shimmer-effect">
              <Sparkles className="w-5 h-5 text-[#ff1f1f]" />
              <span className="text-sm text-white tracking-[0.3em] font-light">ETHIOPIAN EXCELLENCE</span>
              <div className="w-2 h-2 rounded-full bg-[#e01414] animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-extralight text-white mb-8 tracking-tight leading-none">
            ZK
            <br />
            <span className="text-gradient-gold font-light">Flowers</span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-3xl font-light leading-relaxed">
            Premium Ethiopian roses cultivated at 1,900m altitude
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl">
            22 hectares of excellence • 10 exquisite varieties • 400+ dedicated artisans
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-[#a00e0e] to-[#e01414] text-white rounded-full overflow-hidden animate-pulse-glow">
              <span className="relative z-10 flex items-center gap-2 font-medium tracking-wider text-lg">
                EXPLORE VARIETIES
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            <button className="px-12 py-5 glass-morphism text-white rounded-full hover:bg-white/10 transition-all group">
              <span className="flex items-center gap-2 font-medium tracking-wider text-lg">
                <Globe className="w-5 h-5" />
                GLOBAL MARKETS
              </span>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="glass-morphism rounded-2xl p-8 max-w-5xl w-full">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="text-center transform hover:scale-110 transition-transform cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-light text-white mb-2">
                    {stat.value}
                    {stat.unit && <span className="text-2xl text-[#ff1f1f]">{stat.unit}</span>}
                  </div>
                  <div className="text-sm text-gray-400 tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-4 bg-[#e01414] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Rose Varieties Showcase */}
      <section id="varieties" className={`fade-in-section py-32 bg-gradient-to-b from-black via-[#3d0a0a] to-black ${isVisible.varieties ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-light text-white mb-6">
              Our Rose Collection
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ten distinctive varieties, each with year-round availability and exceptional vase life
            </p>
          </div>

          {/* Featured Variety Display */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Side */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden group">
              <img
                src={varieties[activeVariety].image}
                alt={varieties[activeVariety].name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${varieties[activeVariety].gradient} to-transparent mix-blend-overlay`}></div>
              <div className="absolute top-6 right-6 glass-morphism px-4 py-2 rounded-full">
                <span className="text-sm text-white tracking-widest">ALL YEAR AVAILABLE</span>
              </div>
            </div>

            {/* Info Side */}
            <div className="space-y-8">
              <div>
                <div className="text-sm text-[#ff1f1f] tracking-[0.3em] mb-4">PREMIUM VARIETY</div>
                <h3 className="text-6xl font-light text-white mb-4">{varieties[activeVariety].name}</h3>
                <div className="h-1 w-24 bg-gradient-to-r from-[#a00e0e] to-transparent mb-6"></div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass-morphism p-6 rounded-2xl">
                  <div className="text-sm text-gray-400 mb-2 tracking-widest">COLOR</div>
                  <div className="text-2xl text-white font-light">{varieties[activeVariety].color}</div>
                </div>
                <div className="glass-morphism p-6 rounded-2xl">
                  <div className="text-sm text-gray-400 mb-2 tracking-widest">HEAD SIZE</div>
                  <div className="text-2xl text-white font-light">{varieties[activeVariety].headSize}</div>
                </div>
                <div className="glass-morphism p-6 rounded-2xl">
                  <div className="text-sm text-gray-400 mb-2 tracking-widest">VASE LIFE</div>
                  <div className="text-2xl text-white font-light">{varieties[activeVariety].vaseLife}</div>
                </div>
                <div className="glass-morphism p-6 rounded-2xl">
                  <div className="text-sm text-gray-400 mb-2 tracking-widest">LENGTHS</div>
                  <div className="text-2xl text-white font-light">40-70 CM</div>
                </div>
              </div>

              <button className="w-full py-5 bg-[#a00e0e] text-white rounded-full hover:bg-[#e01414] transition-all font-medium tracking-wider text-lg flex items-center justify-center gap-2 group">
                REQUEST QUOTE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Variety Selector */}
          <div className="flex flex-wrap justify-center gap-4">
            {varieties.map((variety, i) => (
              <button
                key={i}
                onClick={() => setActiveVariety(i)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeVariety === i
                    ? 'bg-[#a00e0e] text-white'
                    : 'glass-morphism text-gray-400 hover:text-white'
                }`}
              >
                {variety.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section id="markets" className={`fade-in-section py-32 bg-gradient-to-b from-black to-[#3d0a0a] ${isVisible.markets ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-light text-white mb-6">
              Global Footprint
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expanding across continents, delivering Ethiopian excellence worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map/Visual Side */}
            <div className="relative h-96 glass-morphism rounded-3xl p-8 flex items-center justify-center">
              <Globe className="w-64 h-64 text-[#a00e0e]/30 animate-pulse" style={{ animation: 'rotate-slow 30s linear infinite' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-light text-white mb-2">5</div>
                  <div className="text-sm text-gray-400 tracking-widest">GLOBAL MARKETS</div>
                </div>
              </div>
            </div>

            {/* Markets List */}
            <div className="space-y-4">
              {markets.map((market, i) => (
                <div 
                  key={i}
                  className="glass-morphism p-6 rounded-2xl hover-lift flex items-center justify-between group cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{market.flag}</span>
                    <div>
                      <h3 className="text-xl text-white font-light">{market.name}</h3>
                      <p className="text-sm text-gray-400">{market.status}</p>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm ${
                    market.status === 'Active' ? 'bg-[#6b0f0f]/40 text-[#ff1f1f]' :
                    market.status === 'Developing' ? 'bg-[#a00e0e]/40 text-[#e01414]' :
                    'bg-[#3d0a0a]/40 text-[#a00e0e]'
                  }`}>
                    {market.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section id="quality" className={`fade-in-section py-32 bg-black ${isVisible.quality ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-light text-white mb-6">
              Quality Assured
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Internationally certified excellence in every stem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "MPS-ABC Certified", desc: "Environmental sustainability standard" },
              { icon: Check, title: "MPS-SQ Certified", desc: "Social quality certification" },
              { icon: Leaf, title: "Sustainable Practices", desc: "Eco-friendly cultivation methods" }
            ].map((cert, i) => (
              <div 
                key={i}
                className="glass-morphism p-10 rounded-3xl hover-lift group text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#a00e0e]/30 mb-6 group-hover:bg-[#a00e0e] transition-all">
                  <cert.icon className="w-10 h-10 text-[#ff1f1f] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">{cert.title}</h3>
                <p className="text-gray-400 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ZK */}
      <section className="py-32 bg-gradient-to-b from-[#3d0a0a] to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-light text-white mb-8">
                Why Choose
                <br />
                <span className="text-gradient-gold">ZK Flowers</span>
              </h2>
              <div className="space-y-6">
                {[
                  "300% operational growth since establishment",
                  "22 hectares of cutting-edge greenhouses",
                  "Optimal 1,900m altitude for superior quality",
                  "Year-round consistent supply",
                  "400+ skilled professionals",
                  "Competitive global pricing"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-[#a00e0e] mt-2 group-hover:scale-150 transition-transform"></div>
                    <p className="text-lg text-gray-300 group-hover:text-white transition-colors">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=800&q=80"
                alt="ZK Flowers Greenhouse"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-xl font-light italic">
                  "Building partnerships. Growing excellence. Delivering beauty worldwide."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=2000&q=80"
          alt="Contact ZK Flowers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#3d0a0a]/50 to-[#6b0f0f]/30 mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-light text-white mb-8">
            Let's Grow Together
          </h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Partner with Ethiopia's leading rose cultivator.<br />
            Experience premium quality and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-[#a00e0e] text-white rounded-full hover:bg-[#e01414] transition-all hover:scale-105 font-medium tracking-wider text-lg animate-pulse-glow flex items-center justify-center gap-2 group">
              GET IN TOUCH
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-12 py-5 glass-morphism text-white rounded-full hover:bg-white/10 transition-all hover:scale-105 font-medium tracking-wider text-lg">
              DOWNLOAD CATALOG
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}