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
        staggerChildren: 0.2,
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
    scale: 1.03,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: { type: "spring", stiffness: 300 }
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
      className="max-w-6xl mx-auto py-16 px-4"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#14482E' }}>Our Rose Varieties</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our collection of 11 rose varieties, each carefully cultivated for exceptional quality, color, and longevity
        </p>
      </motion.div>

      {/* Featured Variety Display */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Image Side - 1:1 Square Ratio */}
        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate={imageLoaded ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group bg-white"
          >
            {/* Main image container - 1:1 ratio, fills entire space */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVariety}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <img
                  src={varieties[selectedVariety].image}
                  alt={varieties[selectedVariety].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle gradient overlay for depth */}
            <div className={`absolute inset-0 bg-gradient-to-br ${varieties[selectedVariety].gradient} opacity-10 mix-blend-overlay`}></div>
            
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/0 group-hover:to-white/5 transition-all duration-500"></div>
          </motion.div>
        </motion.div>

        {/* Details Side */}
        <motion.div 
          variants={itemVariants}
          className="space-y-6"
        >
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold mb-2" 
              style={{ color: '#14482E' }}
            >
              {varieties[selectedVariety].name}
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-lg font-semibold" style={{ color: '#15803d' }}>
                {varieties[selectedVariety].color}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{varieties[selectedVariety].headSize} head size</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{varieties[selectedVariety].vaseLife} vase life</span>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 leading-relaxed mb-6"
            >
              {varieties[selectedVariety].description}
            </motion.p>
          </div>

          {/* Specifications Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 hover:shadow-md transition-shadow"
              style={{ borderColor: '#15803d' }}
            >
              <Ruler className="w-5 h-5 mb-2" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-1">Available Lengths</div>
              <div className="text-sm font-semibold" style={{ color: '#14482E' }}>
                {varieties[selectedVariety].lengths.join(', ')}
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 hover:shadow-md transition-shadow"
              style={{ borderColor: '#15803d' }}
            >
              <Clock className="w-5 h-5 mb-2" style={{ color: '#14482E' }} />
              <div className="text-xs text-gray-600 mb-1">Vase Life</div>
              <div className="text-sm font-semibold" style={{ color: '#14482E' }}>
                {varieties[selectedVariety].vaseLife}
              </div>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            style={{ borderColor: '#dcfce7' }}
          >
            <h4 className="font-bold mb-4" style={{ color: '#14482E' }}>Key Features</h4>
            <div className="grid grid-cols-2 gap-3">
              {varieties[selectedVariety].features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#22c55e' }} />
                  <span className="text-sm text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Variety Selector Grid */}
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
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedVariety === index
                ? 'shadow-lg transform scale-105'
                : 'hover:shadow-md'
            }`}
            style={{
              backgroundColor: selectedVariety === index ? '#f0fdf4' : 'white',
              borderColor: selectedVariety === index ? '#15803d' : '#e5e7eb'
            }}
          >
            <div className="font-bold mb-1" style={{ color: '#14482E' }}>{variety.name}</div>
            <div className="text-xs text-gray-600 mb-2">{variety.color}</div>
            <div className="text-xs text-gray-500">{variety.headSize}</div>
          </motion.button>
        ))}
      </motion.div>
    </motion.section>
  );
}