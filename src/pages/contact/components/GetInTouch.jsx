import React, { useState, useEffect, useRef } from "react";
import { Send, CheckCircle, AlertCircle, Loader2, Instagram, Facebook, Twitter, Linkedin, Youtube, MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    message: "",
    inquiryType: "order"
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

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

  const inquiryTypes = [
    { value: "order", label: "Order", description: "Place coffee orders" },
    { value: "wholesale", label: "Wholesale", description: "Large volume purchases" },
    { value: "partnership", label: "Partnership", description: "Business collaborations" },
    { value: "sourcing", label: "Sourcing", description: "Learn about our process" },
    { value: "other", label: "Other", description: "General questions" }
  ];

  const socialMedia = [
    {
      platform: "Instagram",
      icon: Instagram,
      handle: "@bmcoffee.ethiopia",
      url: "#",
      color: "#0A6238"
    },
    {
      platform: "Facebook",
      icon: Facebook,
      handle: "BM Coffee Exports",
      url: "#",
      color: "#0F7132"
    },
    {
      platform: "Twitter",
      icon: Twitter,
      handle: "@bmcoffee_export",
      url: "#",
      color: "#14482E"
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      handle: "BM Coffee Exports",
      url: "#",
      color: "#163938"
    },
    {
      platform: "YouTube",
      icon: Youtube,
      handle: "BM Coffee Roasting",
      url: "#",
      color: "#1D2E28"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    // Simulate API call
    setTimeout(() => {
      setStatus({ loading: false, success: true, error: null });
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          country: "",
          message: "",
          inquiryType: "order"
        });
        setStatus({ loading: false, success: false, error: null });
      }, 3000);
    }, 1500);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6" 
      style={{ backgroundColor: "#E8F5E9" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F7132' }}>
            Get in Touch
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Ready to explore premium Ethiopian coffee? Whether you're looking to place an order, 
            learn about our sourcing process, or discuss partnership opportunities, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className={`transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full p-10">
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#0F7132' }}>Contact Information</h2>
              
              <div className="space-y-6">
                <div className="group flex items-start gap-5 p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-500" style={{ backgroundColor: '#0A6238' }}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">EMAIL US</h3>
                    <p className="text-gray-800 font-medium mb-1">bmcoffee.exports@gmail.com</p>
                    <p className="text-sm text-gray-600">For inquiries and orders</p>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-500" style={{ backgroundColor: '#0F7132' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">CALL US</h3>
                    <p className="text-gray-800 font-medium mb-1">+25194058181</p>
                    <p className="text-sm text-gray-600">Monday - Friday, 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-500 transform hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-500" style={{ backgroundColor: '#14482E' }}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">VISIT US</h3>
                    <p className="text-gray-800 font-medium">Addis Ababa, Ethiopia</p>
                    <p className="text-gray-800 font-medium mb-1">Gerji Imperial, InFront of MKC</p>
                    <p className="text-sm text-gray-600">Coffee capital headquarters</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#0F7132' }}>Follow Our Journey</h3>
                <div className="flex flex-wrap gap-3">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        style={{ backgroundColor: social.color }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`transition-all duration-1000 delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F7132' }}>
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold" style={{ color: '#0F7132' }}>Send us a Message</h2>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">We'll respond within 24 hours.</p>

              {status.success ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E8F5E9' }}>
                    <CheckCircle className="w-8 h-8" style={{ color: '#0F7132' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#14482E' }}>Message Sent!</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Thank you for your inquiry. Our coffee specialists will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <div>
                  {/* Inquiry Type */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Type of Inquiry
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      {inquiryTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`relative cursor-pointer rounded-lg border-2 p-3 text-center transition-all duration-300 ${
                            formData.inquiryType === type.value
                              ? 'scale-105 shadow-md'
                              : 'hover:bg-gray-50'
                          }`}
                          style={{
                            borderColor: formData.inquiryType === type.value ? '#0F7132' : '#e5e7eb',
                            backgroundColor: formData.inquiryType === type.value ? '#E8F5E9' : 'white'
                          }}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={formData.inquiryType === type.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="text-xs font-semibold" style={{ color: formData.inquiryType === type.value ? '#0F7132' : '#374151' }}>
                            {type.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 transition-all duration-300 outline-none hover:border-gray-400"
                        onFocus={(e) => e.target.style.borderColor = '#0F7132'}
                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 transition-all duration-300 outline-none hover:border-gray-400"
                        onFocus={(e) => e.target.style.borderColor = '#0F7132'}
                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 transition-all duration-300 outline-none hover:border-gray-400"
                        onFocus={(e) => e.target.style.borderColor = '#0F7132'}
                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 transition-all duration-300 outline-none hover:border-gray-400"
                        onFocus={(e) => e.target.style.borderColor = '#0F7132'}
                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 transition-all duration-300 outline-none resize-none hover:border-gray-400"
                      onFocus={(e) => e.target.style.borderColor = '#0F7132'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      placeholder="Tell us about your coffee needs..."
                    />
                  </div>

                  {status.error && (
                    <div className="mb-6 p-4 rounded-lg border flex items-center gap-3" style={{ backgroundColor: '#FEE2E2', borderColor: '#FCA5A5' }}>
                      <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#DC2626' }} />
                      <span className="text-sm" style={{ color: '#991B1B' }}>{status.error}</span>
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={status.loading}
                    className="w-full px-8 py-4 text-white font-semibold rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#0F7132' }}
                    onMouseEnter={(e) => !status.loading && (e.target.style.backgroundColor = '#0A6238')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#0F7132')}
                  >
                    {status.loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}