import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactFormSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}