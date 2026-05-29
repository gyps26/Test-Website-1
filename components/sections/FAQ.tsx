"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We offer free, no-obligation estimates for all of our landscaping, hardscaping, and lawn maintenance services. Simply fill out our contact form or give us a call to get started."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. Stages Landscape is fully licensed and carries comprehensive liability insurance to protect your property and give you peace of mind throughout every project."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve the greater Columbus, Ohio area, including Dublin, Westerville, New Albany, Powell, Hilliard, and surrounding communities."
  },
  {
    question: "How long do projects typically take?",
    answer: "Project timelines vary greatly depending on scope. A routine lawn clean-up might take one day, while a complete patio and outdoor living installation could take a few weeks. We always provide a clear timeline during the proposal phase."
  },
  {
    question: "Do you offer ongoing maintenance plans?",
    answer: "Yes, we offer weekly and bi-weekly lawn maintenance plans, as well as seasonal clean-ups, mulching, and fertilization programs to keep your property looking pristine year-round."
  },
  {
    question: "What landscaping services do you specialize in?",
    answer: "We specialize in both softscaping (lawn care, planting, mulching) and hardscaping (paver patios, retaining walls, walkways). Our true expertise lies in complete outdoor space transformations from design to installation."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-4">FAQs</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-brand-charcoal pr-8">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-brand-green shrink-0 transition-transform duration-300",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
