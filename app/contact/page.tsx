"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-brand-beige py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch for a free estimate or to discuss your upcoming project.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="bg-brand-green/10 text-brand-green p-4 rounded-xl mb-6 font-medium border border-brand-green/20">
                  Thank you! Your message has been sent. We'll be in touch shortly.
                </div>
              ) : null}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" required className="w-full rounded-lg border-gray-300 border p-3 focus:ring-brand-green focus:border-brand-green" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full rounded-lg border-gray-300 border p-3 focus:ring-brand-green focus:border-brand-green" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" required className="w-full rounded-lg border-gray-300 border p-3 focus:ring-brand-green focus:border-brand-green" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select id="service" className="w-full rounded-lg border-gray-300 border p-3 focus:ring-brand-green focus:border-brand-green bg-white">
                    <option>Landscape Design</option>
                    <option>Lawn Maintenance</option>
                    <option>Patio Installation</option>
                    <option>Retaining Walls</option>
                    <option>Other Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} required className="w-full rounded-lg border-gray-300 border p-3 focus:ring-brand-green focus:border-brand-green"></textarea>
                </div>
                <Button type="submit" className="w-full text-lg">Send Message</Button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-charcoal text-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-8 text-brand-beige">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">Our Office</h3>
                    <p className="text-gray-300">123 Landscape Way<br />Columbus, OH 43215</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">Phone</h3>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">Email Address</h3>
                    <p className="text-gray-300">hello@stageslandscape.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 7:00 AM - 6:00 PM<br />Saturday: 8:00 AM - 2:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-3xl overflow-hidden shadow-xl bg-gray-200">
              <iframe
                title="Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195600.62319082346!2d-83.14418658428807!3d39.98313017586521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266624f1b8396!2sColumbus%2C%20OH!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
