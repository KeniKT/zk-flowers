import React, { useState, useEffect } from "react";
import { ArrowRight, Flower2, Ruler, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import all 11 rose variety images from assets
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

export default function ProductsIntro() {
  const [activeVariety, setActiveVariety] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const varieties = [
    {
      name: "Upper Class",
      color: "Premium Red",
      headSize: "5.5 cm",
      vaseLife: "12-16 days",
      shortDescription: "Flagship deep red roses with exceptional form",
      image: UpperClass,
    },
    {
      name: "Tecazi",
      color: "Classic Red",
      headSize: "5.0 cm",
      vaseLife: "10-14 days",
      shortDescription: "Classic red with vibrant color and reliable quality",
      image: Tecazi,
    },
    {
      name: "Pink Tacazi",
      color: "Soft Pink",
      headSize: "4.5 cm",
      vaseLife: "10-15 days",
      shortDescription: "Delicate soft pink for romantic arrangements",
      image: PinkTacazi,
    },
    {
      name: "Labell",
      color: "Lime Pink",
      headSize: "5.5 cm",
      vaseLife: "11-15 days",
      shortDescription: "Unique lime-pink for modern arrangements",
      image: Labell,
    },
    {
      name: "Moon Walk",
      color: "Bright Yellow",
      headSize: "5.5 cm",
      vaseLife: "10-15 days",
      shortDescription: "Vibrant yellow for cheerful celebrations",
      image: MoonWalk,
    },
    {
      name: "Pink Athena",
      color: "Blush Pink",
      headSize: "4.5 cm",
      vaseLife: "10-14 days",
      shortDescription: "Elegant blush pink with soft gradient",
      image: PinkAthena,
    },
    {
      name: "Bella Rose",
      color: "Pink/Green Mix",
      headSize: "5.5 cm",
      vaseLife: "10-15 days",
      shortDescription: "Pink/green mix with modern aesthetic",
      image: BellaRose,
    },
    {
      name: "Ever Red",
      color: "Deep Crimson",
      headSize: "5.0 cm",
      vaseLife: "12-16 days",
      shortDescription: "Deep crimson with intense saturation",
      image: EverRed,
    },
    {
      name: "Bisou",
      color: "Light Pink",
      headSize: "4.5 cm",
      vaseLife: "10-14 days",
      shortDescription: "Delicate light pink for romantic occasions",
      image: Bisou,
    },
    {
      name: "Espana",
      color: "Rich Orange-Red",
      headSize: "5.5 cm",
      vaseLife: "11-15 days",
      shortDescription: "Rich orange-red inspired by Spanish passion",
      image: Espana,
    },
    {
      name: "Athena",
      color: "Pure White",
      headSize: "4.5 cm",
      vaseLife: "10-15 days",
      shortDescription: "Classic pure white for elegance and purity",
      image: Athena,
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveVariety((prev) => (prev === varieties.length - 1 ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, varieties.length]);

  // Navigation function
  const goToSlide = (index) => {
    setActiveVariety(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Flower2 className="w-6 h-6 text-green-600" />
            <span className="text-sm font-semibold text-green-600 tracking-wider">OUR ROSES</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-green-900 mb-6"
          >
            Premium Rose Varieties
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our collection of {varieties.length} exquisite rose varieties, each selected for their 
            unique beauty, exceptional vase life, and market appeal.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image Slider - 1:1 Square Ratio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Slider Container */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white">
              {/* Slides */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVariety}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <img
                    src={varieties[activeVariety].image}
                    alt={varieties[activeVariety].name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Image Overlay with Name and Description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-2"
                      >
                        <span className="text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {varieties[activeVariety].color}
                        </span>
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl font-bold mb-2"
                      >
                        {varieties[activeVariety].name}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-sm opacity-90 mb-4"
                      >
                        {varieties[activeVariety].shortDescription}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4 text-sm"
                      >
                        <span className="flex items-center gap-1">
                          <Ruler className="w-4 h-4" />
                          {varieties[activeVariety].headSize}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {varieties[activeVariety].vaseLife}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {varieties.slice(0, 5).map((variety, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-10 h-10 rounded-lg overflow-hidden transition-all ${
                    index === activeVariety 
                      ? 'ring-2 ring-green-500 ring-offset-2 transform scale-110' 
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img
                    src={variety.image}
                    alt={variety.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              {varieties.length > 5 && (
                <button
                  onClick={() => goToSlide(5)}
                  className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center text-xs font-medium hover:bg-green-200 transition-all"
                >
                  +{varieties.length - 5}
                </button>
              )}
            </div>
          </motion.div>

          {/* General Introduction about All Varieties */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold text-green-900 mb-6">
                Exquisite Collection of Premium Roses
              </h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-700 leading-relaxed mb-6"
              >
                At ZK Flowers, we cultivate 11 premium rose varieties, each carefully selected for their 
                exceptional quality, vibrant colors, and outstanding vase life. Our collection spans from 
                classic reds and whites to unique lime-pinks and vibrant yellows, offering a perfect rose 
                for every occasion and market demand.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 leading-relaxed mb-6"
              >
                Each variety in our collection is grown under optimal conditions in Ethiopia's perfect climate, 
                ensuring superior quality, large head sizes, and strong stems. Whether you're looking for 
                traditional favorites or contemporary varieties, our roses meet the highest international 
                standards for cut flowers.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 leading-relaxed mb-6"
              >
                Our collection features a diverse range of colors including premium reds, classic reds, soft pinks, 
                lime pinks, bright yellows, blush pinks, pink/green mixes, deep crimsons, light pinks, rich orange-reds, 
                and pure whites to suit every market preference and occasion.
              </motion.p>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all font-semibold group shadow-lg hover:shadow-xl w-full justify-center"
              >
                Explore All {varieties.length} Varieties in Detail
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <p className="text-center text-gray-600 mt-4 text-sm">
                Click to see detailed specifications, features, and high-quality images of each variety
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}