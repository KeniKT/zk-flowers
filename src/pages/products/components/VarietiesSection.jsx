import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play } from "lucide-react";

// Import all rose variety images
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

const slides = [
  {
    image: UpperClass,
    title: "UPPER CLASS",
    subtitle: "Premium Red Excellence",
    description:
      "Premium deep red roses with exceptional form and structure. The flagship variety known for its rich color and long vase life — perfect for luxury arrangements and high-end events.",
    accent: "#14482E",
  },
  {
    image: Tecazi,
    title: "TECAZI",
    subtitle: "Classic Red Beauty",
    description:
      "Classic red roses with vibrant color and excellent bud formation. A reliable variety that maintains its beauty throughout its vase life — ideal for traditional arrangements.",
    accent: "#14482E",
  },
  {
    image: PinkTacazi,
    title: "PINK TACAZI",
    subtitle: "Soft Pink Romance",
    description:
      "Delicate soft pink roses with a gentle hue — perfect for romantic arrangements and spring-themed designs. The soft coloration makes it versatile for various floral compositions.",
    accent: "#14482E",
  },
  {
    image: Labell,
    title: "LABELL",
    subtitle: "Unique Lime Pink Blend",
    description:
      "Unique lime-pink roses with distinctive color blending. Creates stunning visual impact in modern arrangements — a favorite for contemporary floral designs.",
    accent: "#14482E",
  },
  {
    image: MoonWalk,
    title: "MOON WALK",
    subtitle: "Bright Yellow Sunshine",
    description:
      "Vibrant yellow blooms that bring sunshine to any arrangement. The bright color symbolizes happiness and positivity — perfect for celebrations and cheerful occasions.",
    accent: "#14482E",
  },
  {
    image: PinkAthena,
    title: "PINK ATHENA",
    subtitle: "Blush Pink Elegance",
    description:
      "Elegant blush pink roses with soft gradient coloration. Named after the Greek goddess of wisdom, these roses embody grace and beauty in floral arrangements.",
    accent: "#14482E",
  },
  {
    image: BellaRose,
    title: "BELLA ROSE",
    subtitle: "Pink & Green Harmony",
    description:
      "Distinctive pink petals with unique green accents. This variety offers a modern aesthetic that stands out in contemporary floral designs and artistic arrangements.",
    accent: "#14482E",
  },
  {
    image: EverRed,
    title: "EVER RED",
    subtitle: "Deep Crimson Passion",
    description:
      "Deep crimson roses with intense color saturation. Named for its enduring beauty and long vase life — a premium choice for passionate expressions and lasting arrangements.",
    accent: "#14482E",
  },
  {
    image: Bisou,
    title: "BISOU",
    subtitle: "Light Pink Tenderness",
    description:
      "Delicate light pink roses perfect for romantic occasions. The name 'Bisou' (French for 'kiss') reflects its gentle, affectionate appearance in floral designs.",
    accent: "#14482E",
  },
  {
    image: Espana,
    title: "ESPANA",
    subtitle: "Rich Orange-Red Warmth",
    description:
      "Rich orange-red roses inspired by Spanish passion. Vibrant and warm coloration that brings energy to any floral arrangement — perfect for festive occasions.",
    accent: "#14482E",
  },
  {
    image: Athena,
    title: "ATHENA",
    subtitle: "Pure White Purity",
    description:
      "Classic pure white roses symbolizing purity, elegance, and new beginnings. Named after the Greek goddess of wisdom and warfare, representing strength and beauty.",
    accent: "#14482E",
  },
];

export default function VarietiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getPrevIndex = () =>
    (currentIndex - 1 + slides.length) % slides.length;

  const getNextIndex = () => (currentIndex + 1) % slides.length;

  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  return (
    <section
      className="w-full bg-white relative overflow-hidden"
      style={{ minHeight: "60vh", padding: 0 }}
    >
      {/* Main Slider Container */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ height: "60vh" }}
      >
        {/* Previous Slide Thumbnail */}
        <div
          className="flex-shrink-0 cursor-pointer"
          style={{ width: "15%", height: "100%" }}
          onClick={() => {
            setDirection(-1);
            goToSlide(getPrevIndex());
          }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={slides[getPrevIndex()].image}
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* Current Slide */}
        <div
          className="flex-shrink-0 relative"
          style={{ width: "70%", height: "100%" }}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="absolute inset-0"
            >
              {/* Slide Image */}
              <img
                src={slides[currentIndex].image}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Overlay Text Block */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-0 flex items-end md:items-center p-8 md:p-16"
              >
                <div className="max-w-xl bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-green-200 shadow-2xl">
                  <h3
                    className="text-sm md:text-base uppercase tracking-widest font-semibold mb-2"
                    style={{ color: slides[currentIndex].accent }}
                  >
                    {slides[currentIndex].subtitle}
                  </h3>

                  <h2
                    className="text-3xl md:text-5xl font-extrabold mb-4"
                    style={{ color: "#14482E" }}
                  >
                    {slides[currentIndex].title}
                  </h2>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                    {slides[currentIndex].description}
                  </p>

                  <div
                    className="h-[3px] w-24 rounded-full"
                    style={{ backgroundColor: slides[currentIndex].accent }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Slide Thumbnail */}
        <div
          className="flex-shrink-0 cursor-pointer"
          style={{ width: "15%", height: "100%" }}
          onClick={() => {
            setDirection(1);
            goToSlide(getNextIndex());
          }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={slides[getNextIndex()].image}
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </div>

      {/* Dots + Autoplay Toggle */}
      <div className="absolute bottom-6 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-8 flex justify-center items-center gap-6">
          {/* Dots */}
          <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-green-200 shadow-sm">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-500 ${
                  currentIndex === index
                    ? "w-10 h-2.5 bg-green-700"
                    : "w-2.5 h-2.5 bg-green-300 hover:bg-green-500"
                }`}
              ></button>
            ))}
          </div>

          {/* Play / Pause */}
          <button
            onClick={toggleAutoPlay}
            className="bg-white/80 hover:bg-white border border-green-200 backdrop-blur-md p-3 rounded-full shadow-sm"
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4 text-green-800" />
            ) : (
              <Play className="w-4 h-4 text-green-800" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}