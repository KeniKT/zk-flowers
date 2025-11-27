import React from "react";

export default function FAQSection() {
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
    <section className="py-16 px-4" style={{ backgroundColor: '#f0fdf4' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#14482E' }}>
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
              style={{ borderColor: '#15803d' }}
            >
              <h3 className="font-bold text-lg mb-3" style={{ color: '#14482E' }}>
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
            style={{ backgroundColor: '#15803d' }}
          >
            Ask a Question
          </button>
        </div>
      </div>
    </section>
  );
}