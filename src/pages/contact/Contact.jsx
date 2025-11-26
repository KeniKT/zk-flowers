import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building2, Globe, Users, Package, Plane, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    subject: 'general',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        subject: 'general',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@zkflowers.com",
      secondary: "sales@zkflowers.com",
      description: "General inquiries and sales",
      color: "#dc2626"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+251 11 XXX XXXX",
      secondary: "+251 91 XXX XXXX",
      description: "Mon-Fri: 8:00 AM - 6:00 PM EAT",
      color: "#059669"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Debre Zeit, Ethiopia",
      secondary: "~1,900m altitude",
      description: "45 minutes from Addis Ababa",
      color: "#7c3aed"
    },
    {
      icon: Clock,
      title: "Working Hours",
      primary: "Monday - Friday",
      secondary: "8:00 AM - 6:00 PM",
      description: "East Africa Time (EAT)",
      color: "#ea580c"
    }
  ];

  const departments = [
    {
      icon: Package,
      title: "Sales Department",
      email: "sales@zkflowers.com",
      description: "Product inquiries, quotes, and orders"
    },
    {
      icon: Users,
      title: "Partnerships",
      email: "partnerships@zkflowers.com",
      description: "Distribution and collaboration opportunities"
    },
    {
      icon: Plane,
      title: "Export Coordination",
      email: "export@zkflowers.com",
      description: "Shipping and logistics support"
    },
    {
      icon: Building2,
      title: "General Inquiries",
      email: "info@zkflowers.com",
      description: "All other questions and information"
    }
  ];

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales & Quotes' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'export', label: 'Export & Logistics' },
    { value: 'visit', label: 'Farm Visit Request' },
    { value: 'other', label: 'Other' }
  ];

  const faqs = [
    {
      question: "What are your minimum order quantities?",
      answer: "Minimum order quantities vary by variety and destination. Please contact our sales team for specific requirements."
    },
    {
      question: "How can I request samples?",
      answer: "Contact our sales department with your location and requirements. We can arrange sample shipments to qualified buyers."
    },
    {
      question: "Do you offer farm visits?",
      answer: "Yes! We welcome visits from potential partners and buyers. Please schedule in advance through our contact form."
    },
    {
      question: "What are your payment terms?",
      answer: "Payment terms are negotiated based on order volume and relationship. We work with international payment methods and can discuss terms that work for both parties."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-4" style={{ backgroundColor: '#450a0a' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8" style={{ color: '#E60000' }} />
            <span className="text-sm tracking-wider" style={{ color: '#E60000' }}>GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl">
            Ready to discuss your rose requirements? We're here to help with inquiries, quotes, and partnerships
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-t-4 text-center"
              style={{ borderColor: method.color }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${method.color}15` }}
              >
                <method.icon className="w-8 h-8" style={{ color: method.color }} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#4C090F' }}>
                {method.title}
              </h3>
              <p className="font-semibold mb-1" style={{ color: method.color }}>
                {method.primary}
              </p>
              <p className="text-sm text-gray-600 mb-2">{method.secondary}</p>
              <p className="text-xs text-gray-500">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border" style={{ borderColor: '#fee2e2' }}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#7f1d1d' }}>
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-semibold text-green-800">Message sent successfully!</p>
                      <p className="text-sm text-green-700">We'll respond to your inquiry soon.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#4C090F' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#4C090F' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#4C090F' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#4C090F' }}>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#4C090F' }}>
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Netherlands"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#4C090F' }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      {subjectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#4C090F' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-semibold text-white transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#dc2626' }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy
                </p>
              </form>
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border" style={{ borderColor: '#fee2e2' }}>
              <div className="relative h-64 bg-gradient-to-br from-red-100 to-red-50">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5" />
                    <h3 className="font-bold text-lg">ZK Flowers PLC</h3>
                  </div>
                  <p className="text-sm">Debre Zeit, Ethiopia (~1,900m altitude)</p>
                  <p className="text-xs text-white/80 mt-1">45 minutes from Addis Ababa</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold mb-3" style={{ color: '#7f1d1d' }}>Get Directions</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Our farm is located in Debre Zeit (Bishoftu), easily accessible from Addis Ababa 
                  via the main highway. Contact us to arrange a visit.
                </p>
                <button 
                  className="px-6 py-2 rounded-lg font-semibold text-white text-sm"
                  style={{ backgroundColor: '#dc2626' }}
                >
                  View on Map
                </button>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border" style={{ borderColor: '#fee2e2' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#7f1d1d' }}>
                Department Contacts
              </h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-red-50 transition-colors">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#fee2e2' }}
                    >
                      <dept.icon className="w-5 h-5" style={{ color: '#dc2626' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1" style={{ color: '#4C090F' }}>
                        {dept.title}
                      </h4>
                      <a 
                        href={`mailto:${dept.email}`}
                        className="text-sm hover:underline"
                        style={{ color: '#dc2626' }}
                      >
                        {dept.email}
                      </a>
                      <p className="text-xs text-gray-600 mt-1">{dept.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-8 h-8" />
                <h3 className="text-xl font-bold">Quick Response</h3>
              </div>
              <p className="mb-4">
                We typically respond to inquiries within 24 hours during business days.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-xs">Email Response</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">1-2h</div>
                  <div className="text-xs">Phone Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fef2f2' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7f1d1d' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common inquiries
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border-l-4"
                style={{ borderColor: '#E60000' }}
              >
                <h3 className="font-bold text-lg mb-3" style={{ color: '#4C090F' }}>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <button 
              className="px-6 py-3 rounded-lg font-semibold text-white"
              style={{ backgroundColor: '#dc2626' }}
            >
              Ask a Question
            </button>
          </div>
        </div>
      </section>

      {/* Social Media / Additional Info */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center border" style={{ borderColor: '#fee2e2' }}>
          <Globe className="w-16 h-16 mx-auto mb-4" style={{ color: '#dc2626' }} />
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#7f1d1d' }}>
            Connect With Us
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Follow our journey on social media to see the latest from our farm, 
            new varieties, and behind-the-scenes content
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              LinkedIn
            </button>
            <button className="px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors">
              Instagram
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Facebook
            </button>
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
              YouTube
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}