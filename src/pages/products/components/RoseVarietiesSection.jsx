import React, { useState, useEffect, useRef } from "react";
import { Ruler, Clock, CheckCircle, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

// Import all rose variety images from assets
import UpperClass from '../../../assets/Upper Class.jpg';
import Tecazi from '../../../assets/Tecazi.jpg';
import PinkTacazi from '../../../assets/pink tacazi.jpg';
import Labell from '../../../assets/Labell.jpg';
import MoonWalk from '../../../assets/Moon walk.jpg';
import PinkAthena from '../../../assets/pink athena.jpg';
import BellaRose from '../../../assets/bella rose.jpg';
import EverRed from '../../../assets/Ever red.jpg';
import Bisou from '../../../assets/Bisou.jpg';
import Espana from '../../../assets/Espana.jpg';
import Athena from '../../../assets/Athena.jpg';

export default function RoseVarietiesSection() {
  const [selectedVariety, setSelectedVariety] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const varieties = [
    {
      name: "Upper Class",
      color: "Premium Red",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm", "80 cm"],
      vaseLife: "12-16 days",
      description: "Premium deep red roses with exceptional form and structure. The flagship variety known for its rich color and long vase life. Perfect for luxury arrangements and high-end events.",
      features: ["Premium deep red color", "Exceptional form", "Long vase life", "Strong stems", "Luxury grade"],
      image: UpperClass,
      gradient: "from-red-600/20 to-rose-800/20"
    },
    {
      name: "Tecazi",
      color: "Classic Red",
      headSize: "5.0 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-14 days",
      description: "Classic red roses with vibrant color and excellent bud formation. A reliable variety that maintains its beauty throughout its vase life. Ideal for traditional arrangements.",
      features: ["Vibrant red color", "Excellent bud formation", "Reliable quality", "Good stem strength", "Market favorite"],
      image: Tecazi,
      gradient: "from-red-500/20 to-rose-600/20"
    },
    {
      name: "Pink Tacazi",
      color: "Soft Pink",
      headSize: "4.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm"],
      vaseLife: "10-15 days",
      description: "Delicate soft pink roses with a gentle hue. Perfect for romantic arrangements and spring-themed designs. The soft coloration makes it versatile for various floral compositions.",
      features: ["Soft pink hue", "Delicate appearance", "Versatile use", "Good vase life", "Popular for events"],
      image: PinkTacazi,
      gradient: "from-pink-400/20 to-rose-300/20"
    },
    {
      name: "Labell",
      color: "Lime Pink",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "11-15 days",
      description: "Unique lime-pink roses with distinctive color blending. Creates stunning visual impact in modern arrangements. A favorite for contemporary floral designs.",
      features: ["Unique color blend", "Large blooms", "Modern appeal", "Long-lasting", "Distinctive look"],
      image: Labell,
      gradient: "from-lime-300/20 to-pink-400/20"
    },
    {
      name: "Moon Walk",
      color: "Bright Yellow",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Vibrant yellow blooms that bring sunshine to any arrangement. The bright color symbolizes happiness and positivity. Perfect for celebrations and cheerful occasions.",
      features: ["Bright yellow color", "Large head size", "Cheerful appearance", "Strong stems", "Excellent vase life"],
      image: MoonWalk,
      gradient: "from-yellow-400/20 to-amber-300/20"
    },
    {
      name: "Pink Athena",
      color: "Blush Pink",
      headSize: "4.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-14 days",
      description: "Elegant blush pink roses with soft gradient coloration. Named after the Greek goddess of wisdom, these roses embody grace and beauty in floral arrangements.",
      features: ["Blush pink gradient", "Elegant appearance", "Graceful form", "Reliable quality", "Wedding favorite"],
      image: PinkAthena,
      gradient: "from-rose-200/20 to-pink-300/20"
    },
    {
      name: "Bella Rose",
      color: "Pink/Green Mix",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Distinctive pink petals with unique green accents. This variety offers a modern aesthetic that stands out in contemporary floral designs and artistic arrangements.",
      features: ["Pink-green mix", "Unique coloration", "Modern aesthetic", "Large blooms", "Artistic appeal"],
      image: BellaRose,
      gradient: "from-pink-400/20 to-emerald-300/20"
    },
    {
      name: "Ever Red",
      color: "Deep Crimson",
      headSize: "5.0 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "12-16 days",
      description: "Deep crimson roses with intense color saturation. Named for its enduring beauty and long vase life. A premium choice for passionate expressions and lasting arrangements.",
      features: ["Deep crimson color", "Intense saturation", "Long vase life", "Premium quality", "Enduring beauty"],
      image: EverRed,
      gradient: "from-red-700/20 to-crimson-600/20"
    },
    {
      name: "Bisou",
      color: "Light Pink",
      headSize: "4.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm"],
      vaseLife: "10-14 days",
      description: "Delicate light pink roses perfect for romantic occasions. The name 'Bisou' (French for 'kiss') reflects its gentle, affectionate appearance in floral designs.",
      features: ["Light pink tone", "Romantic appeal", "Delicate petals", "Reliable quality", "French inspiration"],
      image: Bisou,
      gradient: "from-rose-100/20 to-pink-200/20"
    },
    {
      name: "Espana",
      color: "Rich Orange-Red",
      headSize: "5.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "11-15 days",
      description: "Rich orange-red roses inspired by Spanish passion. Vibrant and warm coloration that brings energy to any floral arrangement. Perfect for festive occasions.",
      features: ["Orange-red blend", "Vibrant color", "Spanish inspiration", "Large heads", "Energetic appeal"],
      image: Espana,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      name: "Athena",
      color: "Pure White",
      headSize: "4.5 cm",
      lengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
      vaseLife: "10-15 days",
      description: "Classic pure white roses symbolizing purity, elegance, and new beginnings. Named after the Greek goddess of wisdom and warfare, representing strength and beauty.",
      features: ["Pure white petals", "Classic elegance", "Versatile use", "Wedding essential", "Symbolic meaning"],
      image: Athena,
      gradient: "from-gray-100/20 to-slate-100/20"
    }
  ];

  // Handle image load
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Reset image loaded state when variety changes
  useEffect(() => {
    setImageLoaded(false);
  }, [selectedVariety]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Hover and tap variants for cards
  const cardHover = {
    scale: 1.05,
    y: -4,
    boxShadow: "0 20px 40px rgba(20, 72, 46, 0.15)",
    transition: { type: "spring", stiffness: 400, damping: 20 }
  };

  const cardTap = { 
    scale: 0.98 
  };

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-7xl mx-auto py-20 px-4 bg-gradient-to-b from-white via-green-50/30 to-white"
    >
      {/* Header with enhanced styling */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-100/50 rounded-full border border-green-200">
            <Star className="w-4 h-4" style={{ color: '#15803d' }} />
            <span className="text-sm font-semibold" style={{ color: '#15803d' }}>Premium Collection</span>
          </div>
        </motion.div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-900 to-green-700 bg-clip-text text-transparent">
          Our Rose Varieties
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our collection of 11 rose varieties, each carefully cultivated for exceptional quality, color, and longevity
        </p>
      </motion.div>

      {/* Featured Variety Display with enhanced card */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16 bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
        {/* Image Side - Enhanced with better shadows and borders */}
        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate={imageLoaded ? "visible" : "hidden"}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group bg-gradient-to-br from-green-50 to-white border-4 border-white"
            style={{ boxShadow: "0 25px 50px -12px rgba(20, 72, 46, 0.25)" }}
          >
            {/* Main image container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVariety}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <img
                  src={varieties[selectedVariety].image}
                  alt={varieties[selectedVariety].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            {/* Enhanced gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${varieties[selectedVariety].gradient} opacity-20 mix-blend-overlay`}></div>
            
            {/* Animated shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
              animate={{ 
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut"
              }}
            />
            
            {/* Corner accent */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-green-100">
              <span className="text-xs font-bold" style={{ color: '#14482E' }}>Premium</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Details Side - Enhanced typography and spacing */}
        <motion.div 
          variants={itemVariants}
          className="space-y-6 flex flex-col justify-center"
        >
          <div>
            <motion.h3 
              key={`title-${selectedVariety}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-900 to-green-700 bg-clip-text text-transparent"
            >
              {varieties[selectedVariety].name}
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span className="text-lg font-bold px-4 py-1.5 bg-green-100 rounded-full" style={{ color: '#15803d' }}>
                {varieties[selectedVariety].color}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-700 font-medium">{varieties[selectedVariety].headSize} head size</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-700 font-medium">{varieties[selectedVariety].vaseLife} vase life</span>
            </motion.div>
            <motion.p 
              key={`desc-${selectedVariety}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 leading-relaxed mb-6 text-base"
            >
              {varieties[selectedVariety].description}
            </motion.p>
          </div>

          {/* Specifications Grid - Enhanced cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-gradient-to-br from-green-50 to-white p-5 rounded-2xl shadow-lg border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all"
            >
              <Ruler className="w-6 h-6 mb-3" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-2 font-semibold uppercase tracking-wide">Available Lengths</div>
              <div className="text-sm font-bold" style={{ color: '#14482E' }}>
                {varieties[selectedVariety].lengths.join(', ')}
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-gradient-to-br from-green-50 to-white p-5 rounded-2xl shadow-lg border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all"
            >
              <Clock className="w-6 h-6 mb-3" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-2 font-semibold uppercase tracking-wide">Vase Life</div>
              <div className="text-sm font-bold" style={{ color: '#14482E' }}>
                {varieties[selectedVariety].vaseLife}
              </div>
            </motion.div>
          </motion.div>

          {/* Features - Enhanced design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-green-50 via-white to-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-200"
          >
            <h4 className="font-bold mb-4 text-lg" style={{ color: '#14482E' }}>Key Features</h4>
            <div className="grid grid-cols-1 gap-3">
              {varieties[selectedVariety].features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (index * 0.08) }}
                  className="flex items-center gap-3 bg-white/50 p-2 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#22c55e' }} />
                  <span className="text-sm text-gray-800 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Variety Selector Grid - Enhanced cards */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        {varieties.map((variety, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            whileHover={cardHover}
            whileTap={cardTap}
            onClick={() => setSelectedVariety(index)}
            className={`p-4 rounded-2xl border-2 transition-all text-left relative overflow-hidden ${
              selectedVariety === index
                ? 'shadow-2xl'
                : 'hover:shadow-lg'
            }`}
            style={{
              backgroundColor: selectedVariety === index ? '#f0fdf4' : 'white',
              borderColor: selectedVariety === index ? '#15803d' : '#e5e7eb'
            }}
          >
            {/* Selected indicator */}
            {selectedVariety === index && (
              <motion.div
                layoutId="selected-indicator"
                className="absolute top-2 right-2 w-2 h-2 bg-green-600 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            
            <div className="font-bold mb-1.5 text-sm" style={{ color: '#14482E' }}>{variety.name}</div>
            <div className="text-xs text-gray-600 mb-1.5 font-medium">{variety.color}</div>
            <div className="text-xs font-semibold px-2 py-1 bg-green-100 rounded-full inline-block" style={{ color: '#15803d' }}>
              {variety.headSize}
            </div>
          </motion.button>
        ))}
      </motion.div>
    </motion.section>
  );
}