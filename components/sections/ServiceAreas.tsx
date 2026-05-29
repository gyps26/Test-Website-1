"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const areas = [
  "Columbus",
  "Dublin",
  "Westerville",
  "New Albany",
  "Powell",
  "Hilliard",
  "Worthington",
  "Upper Arlington",
  "Grandview Heights",
  "Bexley",
  "Gahanna",
  "Reynoldsburg"
];

export function ServiceAreas() {
  return (
    <section className="py-24 bg-brand-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4">Service Areas</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proudly Serving Ohio
          </h2>
          <p className="text-lg text-gray-400">
            Stages Landscape provides premium landscaping services to residential homeowners across the greater Columbus area.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl border border-white/5 hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
              <span className="font-medium">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
