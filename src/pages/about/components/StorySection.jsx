import React, { useEffect, useRef, useState } from "react";

export default function StorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Original Heading Style */}
        <div className={`mb-12 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#14482E" }}>
            Our Story
          </h2>
          <div className="w-20 h-1 bg-green-600"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className={`transition-all duration-700 delay-200 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}>
              <p className="text-lg text-gray-700 leading-relaxed">
                ZK Flowers PLC is a leading Ethiopian floriculture company established in 2008. 
                Our head office is located in Addis Ababa, while our state-of-the-art farm operates in Debre Zeit (Bishoftu), situated 45 kilometers from the capital.
              </p>
            </div>

            <div className={`transition-all duration-700 delay-400 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Positioned at an optimal altitude of 1,900 meters above sea level, the farm benefits from Ethiopia's ideal highland climate—perfect for producing premium-quality roses.
              </p>
            </div>

            <div className={`transition-all duration-700 delay-600 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since our founding in 2008, we have achieved <strong>300%+ operational growth</strong>, built a strong reputation for quality, consistency, and reliability, and established a growing presence in major international floral markets.
              </p>
            </div>
          </div>

          {/* Right Column - Stats and Location Cards */}
          <div className="space-y-8">
            {/* Stats Cards Row */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700 delay-800 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              {/* Established Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">2008</div>
                  <div className="text-gray-600 font-medium text-sm">Year Established</div>
                  <div className="w-12 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>

              {/* Growth Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">300%+</div>
                  <div className="text-gray-600 font-medium text-sm">Operational Growth</div>
                  <div className="w-12 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>

              {/* Altitude Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1,900m</div>
                  <div className="text-gray-600 font-medium text-sm">Optimal Altitude</div>
                  <div className="w-12 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Location Info Cards */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700 delay-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200 hover:bg-green-100 transition-all duration-300">
                <div className="text-green-600 font-semibold mb-2">Location</div>
                <div className="text-gray-700 text-sm">Debre Zeit (Bishoftu), Ethiopia</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200 hover:bg-green-100 transition-all duration-300">
                <div className="text-green-600 font-semibold mb-2">Distance</div>
                <div className="text-gray-700 text-sm">45km from Addis Ababa</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200 hover:bg-green-100 transition-all duration-300">
                <div className="text-green-600 font-semibold mb-2">Specialization</div>
                <div className="text-gray-700 text-sm">Premium Quality Roses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}