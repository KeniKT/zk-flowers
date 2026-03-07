import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Send, CheckCircle, AlertCircle, Loader2,
  Instagram, Facebook, Linkedin,
  Mail, Phone, MapPin
} from "lucide-react";

// CORRECTED API KEYS
const SERVICE_ID  = "service_qj3subr";
const TEMPLATE_ID = "template_bhsxp3g";
const PUBLIC_KEY  = "Gqna0eHNFqU1vUlH7"; // Corrected Public Key

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
    { value: "order",       label: "Order",       description: "Place flower orders" },
    { value: "wholesale",   label: "Wholesale",   description: "Bulk purchases" },
    { value: "partnership", label: "Partnership", description: "Collaborations" },
    { value: "sourcing",    label: "Sourcing",    description: "Learn about our farms" },
    { value: "other",       label: "Other",       description: "General questions" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const templateParams = {
      name:        formData.name,
      email:       formData.email,
      company:     formData.company,
      phone:       formData.phone,
      country:     formData.country,
      message:     formData.message,
      inquiryType: formData.inquiryType
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((res) => {
        console.log("SUCCESS", res);
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
      })
      .catch((err) => {
        console.log("FULL ERROR:", JSON.stringify(err));
        setStatus({
          loading: false,
          success: false,
          error: JSON.stringify(err)
        });
      });
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl mb-3"
              style={{ color: "#0F7132" }}>
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            We'd love to hear from you! Reach out to us for any inquiries or collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* LEFT — CONTACT INFO */}
          <div
            className={`transform transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-500 p-6 h-full flex flex-col justify-between">

              <h3 className="text-2xl font-bold mb-6" style={{ color: "#0F7132" }}>
                Contact Information
              </h3>

              <div className="space-y-4 mb-6">

                {/* EMAIL */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.01]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#0A6238" }}>
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-900">Email</h4>
                    <p className="text-gray-700 text-sm">Zkflowers@gmail.com</p>
                    <p className="text-xs text-gray-500">General inquiries</p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.01]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#0F7132" }}>
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-900">Phone</h4>
                    <p className="text-gray-700 text-sm">+251911514608</p>
                    <p className="text-gray-700 text-sm">+251936011045</p>
                    <p className="text-xs text-gray-500">Mon–Fri, 8AM–6PM</p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.01]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#14482E" }}>
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-900">Location</h4>
                    <p className="text-gray-700 text-sm">Debre Zeit, Ethiopia</p>
                    <p className="text-gray-700 text-sm">1,900m altitude</p>
                  </div>
                </div>

              </div>

              {/* SOCIAL MEDIA */}
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-xl font-bold mb-3" style={{ color: "#0F7132" }}>
                  Follow Us
                </h4>
                <div className="flex gap-2 flex-wrap">

                  <a
                    href="https://www.facebook.com/share/17TD3ouQKV/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-green-600 hover:bg-green-700 transition-colors duration-300 transform hover:-translate-y-0.5"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 text-white" />
                  </a>

                  <a
                    href="https://www.instagram.com/officalzkflowers?igsh=MWZrNWFwcWdrbjFqZw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-green-600 hover:bg-green-700 transition-colors duration-300 transform hover:-translate-y-0.5"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/zk-flowers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-green-600 hover:bg-green-700 transition-colors duration-300 transform hover:-translate-y-0.5"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>

                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — FORM */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-500 p-6 h-full flex flex-col">

              <h3 className="text-2xl font-bold mb-6" style={{ color: "#0F7132" }}>
                Send Us a Message
              </h3>

              {/* SUCCESS MESSAGE */}
              {status.success && (
                <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-green-100 border border-green-300 text-green-800 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <p className="font-medium">Message sent successfully!</p>
                </div>
               )}

              {/* ERROR MESSAGE */}
              {status.error && (
                <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-red-100 border border-red-300 text-red-800 text-sm">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <p className="font-medium">{status.error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-50 text-gray-900 placeholder-gray-500 text-sm transition-all duration-300"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-50 text-gray-900 placeholder-gray-500 text-sm transition-all duration-300"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-50 text-gray-900 placeholder-gray-500 text-sm transition-all duration-300"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-50 text-gray-900 placeholder-gray-500 text-sm transition-all duration-300"
                />

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-50 text-gray-900 placeholder-gray-500 text-sm transition-all duration-300"
                />

                {/* INQUIRY TYPE SELECT */}
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-50 text-gray-900 text-sm transition-all duration-300"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label} — {type.description}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-50 text-gray-900 placeholder-gray-500 flex-1 min-h-[80px] resize-y text-sm transition-all duration-300"
                />

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold flex items-center justify-center gap-2 text-sm transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#0F7132" }}
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
