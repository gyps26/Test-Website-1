"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/landscaping-team/800/1000"
                alt="Landscaping team at work"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-4 border-white/20 mix-blend-overlay rounded-3xl z-10"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-brand-green text-white p-8 rounded-full shadow-xl hidden md:flex flex-col items-center justify-center w-40 h-40 z-20">
              <span className="text-4xl font-extrabold mb-1">10+</span>
              <span className="text-sm font-medium text-center leading-tight">Years<br/>Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-brand-green font-semibold tracking-wider uppercase text-sm">About Our Company</h3>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
                Crafting Beautiful Outdoor Spaces Since 2012
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At Stages Landscape, we believe your outdoor space should be a natural extension of your home—a place to relax, entertain, and make memories. We are a locally owned and operated business rooted in Ohio, dedicated to delivering superior craftsmanship, reliability, and unparalleled attention to detail.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              From routine lawn maintenance to complete outdoor living transformations, our expert crews handle every project with the utmost care to guarantee your complete satisfaction.
            </p>

            <ul className="space-y-4 mt-8">
              {[
                "Locally Owned & Operated in Ohio",
                "Fully Licensed & Insured Crews",
                "Unmatched Attention to Detail",
                "100% Customer Satisfaction Guaranteed"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0" />
                  <span className="font-medium text-brand-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-gray-100 flex items-center space-x-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative">
                    <Image
                      src={`https://picsum.photos/seed/face${i}/100/100`}
                      alt="Customer"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-gray-600">
                <strong className="text-brand-charcoal">500+</strong> Happy Homeowners
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
