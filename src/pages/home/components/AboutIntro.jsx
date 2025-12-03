import React from "react";
import { ArrowRight, Target, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import the local image
import aboutImage from "../../../assets/aboutashome.jpg";

export default function AboutIntro() {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  
  // Check if elements are in view
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div 
            ref={contentRef}
            variants={fadeInLeft}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
          >
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-2 mb-4"
            >
              <Target className="w-6 h-6 text-green-600" />
              <span className="text-sm font-semibold text-green-600 tracking-wider">OUR STORY</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-green-900 mb-6"
            >
              Cultivating Excellence Since 2008
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              ZK Flowers PLC stands as Ethiopia's premier rose cultivator, combining traditional 
              farming wisdom with modern agricultural technology. Our journey began with a simple 
              vision: to grow the world's most beautiful roses while empowering local communities.
            </motion.p>
            
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              {[
                { icon: Users, title: "Community First", desc: "400+ local families employed" },
                { icon: Heart, title: "Sustainable Growth", desc: "Eco-friendly practices" },
                { icon: Target, title: "Quality Focus", desc: "International standards" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold group"
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            ref={imageRef}
            variants={fadeInRight}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <motion.img
                initial={{ scale: 1.1 }}
                animate={imageInView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src={aboutImage}
                alt="ZK Flowers Farm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
            </motion.div>
            
            {/* Floating Stats Card */}
            <motion.div
              ref={statsRef}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 z-10"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-green-600 mb-1"
              >
                15+
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-gray-600"
              >
                Years of Excellence
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}