"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Reliable communication from start to finish",
  "Quality workmanship that stands the test of time",
  "Unmatched attention to detail in every project",
  "Experienced, respectful, and cleanly crews",
  "Transparent pricing with no hidden fees",
  "Locally owned company invested in the community",
  "100% Satisfaction guaranteed on all services",
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-brand-green font-semibold tracking-wider uppercase text-sm">Why Choose Us</h3>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
                The Stages Difference
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We don't just mow lawns or lay patios; we build lasting relationships with our clients through exceptional service, honesty, and hard work. When you choose Stages Landscape, you're partnering with professionals who treat your property like their own.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="mt-1 bg-brand-green/10 p-1 rounded-full text-brand-green shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-brand-charcoal">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-16">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg">
                  <Image src="https://picsum.photos/seed/why1/400/500" alt="Workmanship" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
                  <Image src="https://picsum.photos/seed/why2/400/600" alt="Attention to detail" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
