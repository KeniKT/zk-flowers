import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
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

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales & Quotes' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'export', label: 'Export & Logistics' },
    { value: 'visit', label: 'Farm Visit Request' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border" style={{ borderColor: '#dcfce7' }}>
      <h2 className="text-3xl font-bold mb-2" style={{ color: '#14482E' }}>
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
            <label className="block text-sm font-semibold mb-2" style={{ color: '#14482E' }}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#14482E' }}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#14482E' }}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="+1 234 567 8900"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#14482E' }}>
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#14482E' }}>
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Netherlands"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#14482E' }}>
              Subject *
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
          <label className="block text-sm font-semibold mb-2" style={{ color: '#14482E' }}>
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            placeholder="Tell us about your requirements..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-lg font-semibold text-white transition-all hover:shadow-lg flex items-center justify-center gap-2"
          style={{ backgroundColor: '#15803d' }}
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy
        </p>
      </form>
    </div>
  );
}