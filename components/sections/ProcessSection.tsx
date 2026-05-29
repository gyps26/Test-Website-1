"use client";

import { motion } from "motion/react";
import { MessageSquare, Map, PencilRuler, Shovel } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Request Quote",
    description: "Fill out our form or call us to discuss your landscaping needs and vision.",
  },
  {
    icon: Map,
    title: "2. On-Site Consultation",
    description: "We'll visit your property to access the space, take measurements, and understand your goals.",
  },
  {
    icon: PencilRuler,
    title: "3. Design & Planning",
    description: "Our experts design a tailored plan and provide a comprehensive, transparent proposal.",
  },
  {
    icon: Shovel,
    title: "4. Installation & Maintenance",
    description: "Our professional crews execute the project flawlessly, leaving you with a beautiful outdoor space.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-brand-charcoal text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4">Our Process</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent, Professional
          </h2>
          <p className="text-lg text-gray-300">
            We've streamlined our process to ensure a stress-free experience from the first phone call to the final walkthrough.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-green border-t-2 border-brand-green/30 border-dashed z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 mx-auto bg-brand-green rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-brand-charcoal">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </section>
  );
}
