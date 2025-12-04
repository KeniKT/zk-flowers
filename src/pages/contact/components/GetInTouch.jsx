import React, { useState, useEffect, useRef } from "react";
import { 
  Send, CheckCircle, AlertCircle, Loader2,
  Instagram, Facebook, Linkedin,
  MessageSquare, Mail, Phone, MapPin
} from "lucide-react";

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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const inquiryTypes = [
    { value: "order", label: "Order", description: "Place flower orders" },
    { value: "wholesale", label: "Wholesale", description: "Bulk purchases" },
    { value: "partnership", label: "Partnership", description: "Collaborations" },
    { value: "sourcing", label: "Sourcing", description: "Learn about our farms" },
    { value: "other", label: "Other", description: "General questions" }
  ];

  // SOCIAL MEDIA — GREEN CIRCLES LIKE NAVBAR
  const socialMedia = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    setTimeout(() => {
      setStatus({ loading: false, success: true, error: null });

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

        {/* HEADER */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F7132' }}>
            Get in Touch
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Reach out to us for inquiries, partnership discussions, or flower export information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT SIDE — CONTACT INFO */}
          <div className={`transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full p-10">
              
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#0F7132' }}>
                Contact Information
              </h2>

              <div className="space-y-6">

                {/* EMAIL */}
                <div className="group flex items-start gap-5 p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0A6238' }}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                    <p className="text-gray-800 font-medium mb-1">info@zkflowers.com</p>
                    <p className="text-sm text-gray-600">General inquiries</p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="group flex items-start gap-5 p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0F7132' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                    <p className="text-gray-800 font-medium mb-1">+251 11 XXX XXXX</p>
                    <p className="text-sm text-gray-600">Mon–Fri, 8AM–6PM</p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="group flex items-start gap-5 p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#14482E' }}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Location</h3>
                    <p className="text-gray-800 font-medium">Debre Zeit, Ethiopia</p>
                    <p className="text-gray-800 font-medium">1,900m altitude</p>
                  </div>
                </div>

              </div>

              {/* SOCIAL MEDIA — NOW GREEN, FIXED */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#0F7132' }}>
                  Follow Us
                </h3>

                <div className="flex gap-4 flex-wrap">
                  {socialMedia.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{ backgroundColor: '#0F7132' }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10">

              <h2 className="text-3xl font-bold mb-8" style={{ color: '#0F7132' }}>
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg"
                />

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg"
                />

                {/* COMPANY */}
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg"
                />

                {/* PHONE */}
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg"
                />

                {/* COUNTRY */}
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg"
                />

                {/* MESSAGE */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg h-32"
                />

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg text-white font-bold flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#0F7132" }}
                >
                  {status.loading ? <Loader2 className="animate-spin" /> : <Send />}
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
