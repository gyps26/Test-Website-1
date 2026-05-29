"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner in Columbus",
    content: "Stages completely transformed our front yard. Their crew was professional, polite, and finished the job ahead of schedule. Our curb appeal has never been better!",
    rating: 5,
    imgSeed: "sarah",
  },
  {
    name: "Michael Thompson",
    role: "Homeowner in Dublin",
    content: "We hired them for a new paver patio and retaining wall. The attention to detail is unmatched. They communicated every step of the process clearly.",
    rating: 5,
    imgSeed: "michael",
  },
  {
    name: "Emily Rodriguez",
    role: "Homeowner in Westerville",
    content: "I've been using their weekly lawn maintenance service for two years. My grass has never looked so green and weed-free. Highly recommend their services!",
    rating: 5,
    imgSeed: "emily",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-4">Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-beige p-8 rounded-3xl relative"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src={`https://picsum.photos/seed/${testimonial.imgSeed}/100/100`}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
